#!/usr/bin/env tsx
/**
 * migrate-2025-blog.ts
 *
 * Migrates blog posts from Website/src/blog/2025/** to Website-v2/src/content/blog/2025/**
 * - Generates frontmatter from path metadata + H1 title extraction
 * - Uploads local images to Cloudinary (signed API, idempotent via existence check)
 * - Replaces local image refs with plain Cloudinary URLs (no transforms — added at build time)
 * - First image is copied to the cover frontmatter field and kept in the body
 *
 * Usage:
 *   npx tsx scripts/migrate-2025-blog.ts [--dry-run]
 */

import * as fs from "node:fs";
import * as path from "node:path";
import * as crypto from "node:crypto";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const CLOUD_NAME = "dh6izdwyd";
const CLOUDINARY_FOLDER = "bygregmarine/blog/2025";
const REPO_ROOT = path.resolve(import.meta.dirname, "../..");
const SOURCE_ROOT = path.join(REPO_ROOT, "Website/src/blog/2025");
const DEST_ROOT = path.join(REPO_ROOT, "Website-v2/src/content/blog/2025");

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const isDryRun = process.argv.includes("--dry-run");

// ---------------------------------------------------------------------------
// Credentials
// ---------------------------------------------------------------------------

const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!isDryRun && (!CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET)) {
  console.error(
    "ERROR: CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET environment variables must be set."
  );
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Helpers: Cloudinary signed auth
// ---------------------------------------------------------------------------

function cloudinarySignature(params: Record<string, string | number>): string {
  // Sort params alphabetically, join as key=value pairs, append api_secret
  const sorted = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("&");
  return crypto
    .createHash("sha1")
    .update(sorted + CLOUDINARY_API_SECRET!)
    .digest("hex");
}

async function checkCloudinaryExists(
  publicId: string
): Promise<string | null> {
  const timestamp = Math.floor(Date.now() / 1000);
  const sig = cloudinarySignature({ timestamp });
  // publicId contains slashes (folder separators) — do NOT encodeURIComponent or
  // Cloudinary won't match the resource. Encode only non-slash characters.
  const encodedId = publicId.split("/").map(encodeURIComponent).join("/");
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload/${encodedId}?api_key=${CLOUDINARY_API_KEY}&timestamp=${timestamp}&signature=${sig}`;

  const res = await fetch(url);
  if (res.status === 200) {
    const json = (await res.json()) as { secure_url?: string };
    return json.secure_url ?? null;
  }
  return null;
}

async function uploadToCloudinary(
  filePath: string,
  publicId: string
): Promise<string> {
  // public_id already encodes the full folder path — do NOT also pass folder,
  // or Cloudinary will prepend it a second time, doubling the path.
  const timestamp = Math.floor(Date.now() / 1000);
  const sigParams: Record<string, string | number> = {
    public_id: publicId,
    timestamp,
  };
  const signature = cloudinarySignature(sigParams);

  const formData = new FormData();
  formData.append("api_key", CLOUDINARY_API_KEY!);
  formData.append("timestamp", String(timestamp));
  formData.append("signature", signature);
  formData.append("public_id", publicId);

  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer]);
  const filename = path.basename(filePath);
  formData.append("file", blob, filename);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData }
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Cloudinary upload failed (${res.status}): ${body}`);
  }

  const json = (await res.json()) as { secure_url: string };
  return json.secure_url;
}

// Transforms (f_auto, q_auto, etc.) are injected at build time — store plain URLs.
function applyTransform(url: string): string {
  return url;
}

// ---------------------------------------------------------------------------
// Helpers: markdown parsing
// ---------------------------------------------------------------------------

interface ImageRef {
  /** Full matched string in the markdown */
  fullMatch: string;
  /** Relative path from the post dir, e.g. media/foo.jpg */
  localPath: string;
  /** Alt text (markdown only) */
  alt: string;
  /** Whether it was a markdown ref (true) or HTML tag (false) */
  isMarkdown: boolean;
}

function extractImageRefs(body: string): ImageRef[] {
  const seen = new Set<string>();
  const refs: ImageRef[] = [];

  // Markdown pattern: ![alt](./media/...) or ![alt](media/...)
  const mdRegex = /!\[([^\]]*)\]\((\.\/)?((img|media)\/[^)]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = mdRegex.exec(body)) !== null) {
    const localPath = m[3];
    if (!seen.has(localPath)) {
      seen.add(localPath);
      refs.push({
        fullMatch: m[0],
        localPath,
        alt: m[1],
        isMarkdown: true,
      });
    }
  }

  // HTML img tag pattern: <img src="./media/..." /> or <img src="media/..." ...>
  const htmlRegex =
    /<img\s[^>]*src=["'](\.\/)?((img|media)\/[^"'>]+)["'][^>]*>/gi;
  while ((m = htmlRegex.exec(body)) !== null) {
    const localPath = m[2];
    if (!seen.has(localPath)) {
      seen.add(localPath);
      const altMatch = m[0].match(/alt=["']([^"']*)["']/i);
      refs.push({
        fullMatch: m[0],
        localPath,
        alt: altMatch ? altMatch[1] : "",
        isMarkdown: false,
      });
    }
  }

  return refs;
}

/** Extract the H1 title from body and return {title, body without H1} */
function extractTitle(
  body: string,
  slug: string
): { title: string; cleanBody: string } {
  const lines = body.split("\n");
  const h1Index = lines.findIndex((l) => l.startsWith("# "));
  if (h1Index !== -1) {
    const title = lines[h1Index].replace(/^#\s+/, "").trim();
    const cleanLines = [
      ...lines.slice(0, h1Index),
      ...lines.slice(h1Index + 1),
    ];
    while (cleanLines.length > 0 && cleanLines[0].trim() === "") {
      cleanLines.shift();
    }
    return { title, cleanBody: cleanLines.join("\n") };
  }
  // Fallback: slug to title case
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return { title, cleanBody: body };
}

function slugToFilename(basename: string): string {
  // Strip DD_ prefix and normalise remaining underscores to hyphens
  // e.g. 05_dawn.md          -> dawn
  // e.g. 31_trusting_god.md  -> trusting-god
  return basename.replace(/^\d+_/, "").replace(/\.md$/, "").replace(/_/g, "-");
}

function extractDay(basename: string): string {
  const m = basename.match(/^(\d{2})_/);
  return m ? m[1] : "01";
}

// ---------------------------------------------------------------------------
// Counters
// ---------------------------------------------------------------------------

let totalPosts = 0;
let totalImages = 0;
let totalUploaded = 0;
let totalSkipped = 0;
let totalWarnings = 0;

// ---------------------------------------------------------------------------
// Walk source directory
// ---------------------------------------------------------------------------

function walkDir(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      results.push(full);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Process a single post
// ---------------------------------------------------------------------------

async function processPost(srcPath: string): Promise<void> {
  const srcDir = path.dirname(srcPath);
  const basename = path.basename(srcPath);
  const monthDir = path.basename(srcDir); // e.g. "01"
  const mm = monthDir;
  const dd = extractDay(basename);
  const slug = slugToFilename(basename);
  const dateStr = `2025-${mm}-${dd}T00:00:00Z`;
  const destPath = path.join(DEST_ROOT, mm, `${slug}.md`);

  const rawBody = fs.readFileSync(srcPath, "utf-8");
  const { title, cleanBody: bodyAfterTitle } = extractTitle(rawBody, slug);

  // Find all image references
  const imageRefs = extractImageRefs(bodyAfterTitle);

  if (isDryRun) {
    console.log(`\n--- DRY RUN ---`);
    console.log(`  Source:      ${srcPath}`);
    console.log(`  Destination: ${destPath}`);
    console.log(`  Title:       ${title}`);
    console.log(`  Date:        ${dateStr}`);
    if (imageRefs.length > 0) {
      console.log(`  Cover:       ${imageRefs[0].localPath}`);
      console.log(`  Images (${imageRefs.length}):`);
      for (const ref of imageRefs) {
        const absPath = path.join(srcDir, ref.localPath);
        const exists = fs.existsSync(absPath);
        const ext = path.extname(ref.localPath);
        const fileNoExt = path.basename(ref.localPath, ext);
        const publicId = `${CLOUDINARY_FOLDER}/${mm}/${fileNoExt}`;
        console.log(
          `    [${exists ? "EXISTS" : "MISSING"}] ${ref.localPath} → Cloudinary: ${publicId}`
        );
      }
    } else {
      console.log(`  Cover:       (none)`);
      console.log(`  Images:      (none)`);
    }
    totalPosts++;
    totalImages += imageRefs.length;
    return;
  }

  // --- Live mode ---
  console.log(`\nProcessing: ${path.relative(REPO_ROOT, srcPath)}`);

  // Build image URL map
  const imageUrlMap = new Map<string, string>(); // localPath -> cloudinary URL

  for (const ref of imageRefs) {
    const absImagePath = path.join(srcDir, ref.localPath);

    if (!fs.existsSync(absImagePath)) {
      console.warn(
        `  WARNING: image not found on disk: ${ref.localPath} (in ${basename})`
      );
      totalWarnings++;
      continue;
    }

    const ext = path.extname(ref.localPath);
    const fileNoExt = path.basename(ref.localPath, ext);
    const publicId = `${CLOUDINARY_FOLDER}/${mm}/${fileNoExt}`;

    // Check Cloudinary for existing asset
    let cloudUrl = await checkCloudinaryExists(publicId);
    if (cloudUrl) {
      console.log(`  [EXISTS] ${ref.localPath} → ${cloudUrl}`);
      totalSkipped++;
    } else {
      cloudUrl = await uploadToCloudinary(absImagePath, publicId);
      console.log(`  [UPLOADED] ${ref.localPath} → ${cloudUrl}`);
      totalUploaded++;
    }

    const transformedUrl = applyTransform(cloudUrl);
    imageUrlMap.set(ref.localPath, transformedUrl);
    totalImages++;
  }

  // Determine cover (first image with a resolved URL) — copied, not removed from body
  let coverUrl: string | undefined;
  for (const ref of imageRefs) {
    if (imageUrlMap.has(ref.localPath)) {
      coverUrl = imageUrlMap.get(ref.localPath);
      break;
    }
  }

  // Build updated body: replace ALL local image refs with Cloudinary URLs (cover stays in body)
  let updatedBody = bodyAfterTitle;

  for (const ref of imageRefs) {
    const cloudUrl = imageUrlMap.get(ref.localPath);
    if (!cloudUrl) continue; // missing image — leave unchanged

    let replacement: string;
    if (ref.isMarkdown) {
      replacement = `![${ref.alt}](${cloudUrl})`;
    } else {
      // Rebuild HTML img tag with new src
      replacement = ref.fullMatch.replace(
        /(src=["'])(\.\/)?(?:img|media)\/[^"'>]+(["'])/i,
        `$1${cloudUrl}$3`
      );
    }
    updatedBody = updatedBody.replace(ref.fullMatch, replacement);
  }

  // Build frontmatter
  const coverLine =
    coverUrl !== undefined ? `cover: "${coverUrl}"` : undefined;

  const frontmatter = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    `description: ""`,
    `date: ${dateStr}`,
    `tags: []`,
    ...(coverLine ? [coverLine] : []),
    "---",
  ].join("\n");

  const destContent = `${frontmatter}\n\n${updatedBody.trim()}\n`;

  // Write destination file
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, destContent, "utf-8");

  console.log(`  → Written: ${path.relative(REPO_ROOT, destPath)}`);
  if (coverUrl) console.log(`  Cover: ${coverUrl}`);

  totalPosts++;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(
    isDryRun
      ? "=== DRY RUN MODE (no files written, no Cloudinary calls) ==="
      : "=== LIVE MIGRATION ==="
  );
  console.log(`Source root:      ${SOURCE_ROOT}`);
  console.log(`Destination root: ${DEST_ROOT}`);
  console.log();

  if (!fs.existsSync(SOURCE_ROOT)) {
    console.error(`ERROR: Source directory not found: ${SOURCE_ROOT}`);
    process.exit(1);
  }

  const mdFiles = walkDir(SOURCE_ROOT).sort();
  console.log(`Found ${mdFiles.length} markdown files to process.`);

  for (const file of mdFiles) {
    await processPost(file);
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Posts processed:  ${totalPosts}`);
  console.log(`Images found:     ${totalImages}`);
  if (!isDryRun) {
    console.log(`Images uploaded:  ${totalUploaded}`);
    console.log(`Images reused:    ${totalSkipped}`);
    console.log(`Warnings:         ${totalWarnings}`);
  }
  console.log(isDryRun ? "\nDry run complete. No changes made." : "\nMigration complete.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
