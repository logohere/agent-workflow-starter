import fs from "node:fs";

const readme = fs.readFileSync("README.md", "utf8");
const claude = fs.readFileSync("CLAUDE.md", "utf8");
const human = fs.readFileSync("human-guide.html", "utf8");
const agent = fs.readFileSync("agent-ops.md", "utf8");
const bootstrap = fs.readFileSync("bootstrap/bootstrap.md", "utf8");
const advanced = fs.readFileSync("advanced/README.md", "utf8");
const atomic = fs.readFileSync("advanced/atomic-system-design.md", "utf8");
const scripts = fs.readFileSync("advanced/small-scripts.md", "utf8");
const tokens = fs.readFileSync("advanced/token-optimization.md", "utf8");
const vocab = fs.readFileSync("advanced/working-vocabulary.md", "utf8");
const sqlite = fs.readFileSync("advanced/sqlite-kb.md", "utf8");
const pkg = fs.readFileSync("package.json", "utf8");

const checks = [
  [readme, "Public starter repo"],
  [readme, "Learning Path"],
  [readme, "Claude/Claude Code"],
  [readme, "AI Stance"],
  [readme, "Token Optimization"],
  [readme, "Context Hygiene"],
  [readme, "Atomic and System-Driven Work"],
  [readme, "Small Scripts and Mini Apps"],
  [readme, "GitHub templates and CI"],
  [readme, "npm run test"],
  [claude, "Claude Code Instructions"],
  [claude, "Context hygiene"],
  [human, "Agent Workflow Starter User Guide"],
  [human, "Part 1: Basics"],
  [human, "Part 2: Next steps"],
  [human, "Part 3: Advanced"],
  [human, "The core rule"],
  [human, "Token optimization"],
  [human, "Atomic and system-driven work"],
  [human, "Plan review prompt"],
  [human, "Small scripts and mini apps"],
  [human, "Local SQLite knowledge"],
  [agent, "Goal"],
  [agent, "Plan review"],
  [agent, "Atomic and system-driven work"],
  [agent, "Small scripts and mini apps"],
  [agent, "Token optimization"],
  [agent, "Definition of Done"],
  [agent, "Approval gates"],
  [agent, "SQLite local knowledge"],
  [agent, "ripgrep"],
  [bootstrap, "SQLite local knowledge"],
  [bootstrap, "Setup report"],
  [advanced, "Advanced Modules"],
  [advanced, "small-scripts.md"],
  [atomic, "Atom → Molecule → Organism → Template → Page / Workflow"],
  [scripts, "Small Scripts and Mini Apps"],
  [tokens, "Token Optimization"],
  [vocab, "Caveman"],
  [vocab, "Ponytail"],
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
