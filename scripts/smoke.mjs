import fs from "node:fs";

const readme = fs.readFileSync("README.md", "utf8");
const claude = fs.readFileSync("CLAUDE.md", "utf8");
const human = fs.readFileSync("human-guide.html", "utf8");
const agent = fs.readFileSync("agent-ops.md", "utf8");
const bootstrap = fs.readFileSync("bootstrap/bootstrap.md", "utf8");
const sqlite = fs.readFileSync("advanced/sqlite-kb.md", "utf8");
const pkg = fs.readFileSync("package.json", "utf8");

const checks = [
  [readme, "Public starter repo"],
  [readme, "Learning Path"],
  [readme, "Claude/Claude Code"],
  [readme, "AI Stance"],
  [readme, "Context Hygiene"],
  [readme, "Local SQLite Knowledge"],
  [readme, "Dotdog"],
  [readme, "npm run test"],
  [claude, "Claude Code Instructions"],
  [claude, "Context hygiene"],
  [human, "Agent Workflow Starter User Guide"],
  [human, "Part 3: Advanced"],
  [human, "Dotdog"],
  [human, "Part 2: Next steps"],
  [human, "Part 1: Basics"],
  [human, "AI is useful, but not wise"],
  [human, "Context hygiene"],
  [human, "Local SQLite knowledge"],
  [agent, "Goal"],
  [agent, "Todos"],
  [agent, "Definition of Done"],
  [agent, "Approval gates"],
  [agent, "SQLite local knowledge"],
  [agent, "ripgrep"],
  [bootstrap, "SQLite local knowledge"],
  [bootstrap, "Setup report"],
  [sqlite, "SQLite Local Knowledge"],
  [sqlite, "FTS5"],
  [pkg, "setup:macos"],
  [pkg, "setup:macos:install"],
  [pkg, "kb:search"],
];

const missing = checks.filter(([text, needle]) => !text.includes(needle)).map(([, needle]) => needle);
if (missing.length) {
  console.error(`Smoke checks failed. Missing: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("smoke ok");
