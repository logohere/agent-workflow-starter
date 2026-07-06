import fs from "node:fs";

const readme = fs.readFileSync("README.md", "utf8");
const human = fs.readFileSync("human-guide.html", "utf8");
const agent = fs.readFileSync("agent-ops.md", "utf8");
const bootstrap = fs.readFileSync("bootstrap/bootstrap.md", "utf8");

const checks = [
  [readme, "Public starter repo"],
  [readme, "Starter Flow"],
  [readme, "Canonical Ordering"],
  [readme, "Atomic Design and Dependencies"],
  [readme, "Setup/config: dotfiles"],
  [readme, "Advanced Tools Flow"],
  [human, "Agent Workflow Starter User Guide"],
  [human, "First-run setup"],
  [human, "Claude Web/Desktop to Claude Code handoff"],
  [human, "GitHub basics for the human"],
  [human, "Final handoff back from Claude Code"],
  [agent, "First-run Setup"],
  [agent, "Core Interaction Model"],
  [agent, "Canonical Ordering"],
  [agent, "Atomic Design and Dependencies"],
  [agent, "Advanced Tools Flow"],
  [bootstrap, "Setup/config"],
  [bootstrap, "Setup report"],
];

const missing = checks.filter(([text, needle]) => !text.includes(needle)).map(([, needle]) => needle);
if (missing.length) {
  console.error(`Smoke checks failed. Missing: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("smoke ok");
