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

const header = `# AUTO-GENERATED — do not edit by hand.
# Edit src/modules/<module>/cms.config.yml and re-run scripts/merge-cms-config.ts

backend:
  name: github
  repo: ${process.env.GITHUB_REPO ?? "your-github-user/your-repo"}
  branch: main
  publish_mode: editorial_workflow
  base_url: https://api.netlify.com
  auth_endpoint: auth

media_folder: Website-v2/public/uploads
public_folder: /uploads

collections:
`;

const fragments = activeModules
  .map((mod) => {
    const path = join(root, "src", "modules", mod, "cms.config.yml");
    const raw = readFileSync(path, "utf8")
      // Strip comment lines
      .replace(/^#.*\n/gm, "")
      // Prefix folder: and file: paths with Website-v2/
      .replace(/^(\s*(?:folder|file):\s*)(\S+)/gm, "$1Website-v2/$2")
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
