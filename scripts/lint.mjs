import fs from "node:fs";
import path from "node:path";

const required = [
  "README.md",
  "CLAUDE.md",
  "human-guide.html",
  "agent-ops.md",
  "bootstrap/bootstrap.md",
  "package.json",
  "templates/handoff.md",
  "templates/issue-template.md",
  "templates/pull-request-template.md",
  "advanced/sqlite-kb.md",
];

const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error(`Missing required files: ${missing.join(", ")}`);
  process.exit(1);
}

const skipDirs = new Set([".git", "node_modules", ".local", "dist", "coverage"]);
const skipFiles = new Set([".gitignore", "scripts/lint.mjs"]);
const suspicious = [
  /\/Users\//,
  /github\.com\/[^\s)]+\/[^\s)]+/,
  /Dan Koe/i,
  /brother/i,
  /private user/i,
];
const hits = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    const rel = full.replace(/^\.\//, "");
    if (skipFiles.has(rel)) continue;
    const text = fs.readFileSync(full, "utf8");
    for (const pattern of suspicious) {
      if (pattern.test(text)) hits.push(`${full}: ${pattern}`);
    }
  }
}

walk(".");
if (hits.length) {
  console.error(`Lint found blocked public-repo patterns:\n${hits.join("\n")}`);
  process.exit(1);
}

console.log("lint ok");
