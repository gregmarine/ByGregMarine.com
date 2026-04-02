#!/usr/bin/env node
/**
 * Merges all module Decap CMS config fragments into public/admin/config.yml.
 * Run: npx tsx scripts/merge-cms-config.ts
 * Or add to your build: "prebuild": "npx tsx scripts/merge-cms-config.ts"
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { siteConfig } from "../site.config.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Only include fragments for active modules
const activeModules = Object.entries(siteConfig.modules)
  .filter(([, active]) => active)
  .map(([name]) => name);

const siteBaseDir = process.env.SITE_BASE_DIR ? `${process.env.SITE_BASE_DIR}/` : "";

const header = `# AUTO-GENERATED — do not edit by hand.
# Edit src/modules/<module>/cms.config.yml and re-run scripts/merge-cms-config.ts

backend:
  name: github
  repo: ${process.env.GITHUB_REPO ?? "your-github-user/your-repo"}
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth

publish_mode: editorial_workflow

media_folder: ${siteBaseDir}public/uploads
public_folder: /uploads

media_library:
  name: cloudinary
  config:
    cloud_name: dh6izdwyd
    upload_preset: bygregmarine
    folder: bygregmarine

collections:
`;

const fragments = activeModules
  .map((mod) => {
    const path = join(root, "src", "modules", mod, "cms.config.yml");
    const raw = readFileSync(path, "utf8")
      // Strip comment lines
      .replace(/^#.*\n/gm, "")
      // Prefix folder: and file: paths with siteBaseDir (empty when SITE_BASE_DIR is unset)
      .replace(/^(\s*(?:folder|file):\s*)(\S+)/gm, `$1${siteBaseDir}$2`)
      .trim();
    // Indent each line by 2 spaces so it nests under `collections:`
    return raw
      .split("\n")
      .map((line) => `  ${line}`)
      .join("\n");
  })
  .join("\n\n");

const out = header + fragments + "\n";

mkdirSync(join(root, "public", "admin"), { recursive: true });
writeFileSync(join(root, "public", "admin", "config.yml"), out, "utf8");

console.log(`✓ Merged ${activeModules.length} module(s) into public/admin/config.yml`);
