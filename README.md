# Agent Workflow Starter

Public starter repo for lean AI-assisted writing, teaching, guides, research, documentation, scripts, mini apps, and lightweight project execution. Claude/Claude Code is the default stack, but the workflow stays general enough for ChatGPT, Codex, and other file-editing agents.

Agent Workflow Starter helps turn clear goals into scoped, reviewable artifacts with AI, Git, GitHub, templates, checks, handoffs, optional local knowledge search, and small local tools.

It is for capable users who already know their subject and want better agent workflows without maintaining a heavy system.

## Project Guide

The project guide is published from `index.html` through GitHub Pages. `human-guide.html` is kept as a local copy of the same guide.

Default Pages URL until a custom domain is configured:

```text
https://logohere.github.io/agent-workflow-starter/
```

## Start Here

- `index.html`: project GitHub Pages guide and get-started page
- `human-guide.html`: local copy of the same guide
- `CLAUDE.md`: concise Claude Code project instructions
- `agent-ops.md`: operating guide for agents
- `bootstrap/bootstrap.md`: first-run setup order
- `.github/`: issue template, pull request template, and CI
- `templates/`: reusable issue, pull request, handoff, and project-doc templates
- `scripts/`: local checks and utilities
- `advanced/README.md`: optional modules index
- `specs/agent-workflow-starter/`: lightweight system specs

## Learning Path

Use the guide in three passes:

```text
Part 1: Basics — goal, files, AI stance, context hygiene, token optimization, handoffs
Part 2: Next steps — GitHub workflow, checks, implementation plans, small scripts, macOS setup, local SQLite search
Part 3: Advanced — atomic design, Dotdog, hooks, worktrees, agent skills, packages and named tools, browser automation, hosting, vector search
```

Do Part 1 first. Add Part 2 when the workflow is useful. Treat Part 3 as optional.

## Starter Flow

```text
open the project Pages guide
fork or clone the repo
connect your AI agent to the repository
ask the agent to inspect before changing anything
review the setup report
customize only what is useful
use issues, branches, pull requests, checks, and handoffs for ongoing changes
```

The agent should inspect first, prepare only needed tooling, run or inspect available checks, and explain what is ready. The user should not need to perform setup manually unless the agent cannot do it or a system-level action requires approval.

## ChatGPT + GitHub Setup

If you use ChatGPT with the GitHub connection, you can start directly from the repository.

1. Fork this repository to your GitHub account.
2. Connect GitHub to ChatGPT and grant access to your fork.
3. Start a new chat and paste:

```text
Use my connected GitHub repository <your-user>/agent-workflow-starter.

Read README.md, CLAUDE.md, index.html, human-guide.html, agent-ops.md, and bootstrap/bootstrap.md.
Inspect the repository before changing anything.
Explain what this starter is for and what I should learn first.

Create a new branch named setup/first-pass.
Make only the minimum changes needed to personalize the starter for me.
Do not commit or merge directly to main.
Do not change GitHub workflows, hooks, dependencies, publishing settings, secrets, permissions, or account-level settings without asking first.

When done:
- show what changed
- run or inspect the available checks if supported
- create a pull request back to main
- list anything I should review before merging
```

For a read-only first pass:

```text
Use my connected GitHub repository <your-user>/agent-workflow-starter.
Read the starter files and do not change anything.
Teach me the workflow in order.
Give me the first three things I should do, why they matter, and the exact prompts I can give ChatGPT next.
```

A GitHub connection only provides the repository access and actions allowed by that connection. Commands or tests that require your local computer still need a local coding environment.

## Agent Instructions

Any coding or file-editing agent working in this repository should follow this order:

```text
1. Confirm the repository and current branch.
2. Read the governing files before editing.
3. Inspect git/repository state and existing work.
4. Restate the goal, constraints, and definition of done.
5. Identify dependencies and anything requiring approval.
6. Create or use a non-main working branch.
7. Make the smallest valid change.
8. Run the relevant checks available in the environment.
9. Review the diff for accidental or unrelated changes.
10. Commit with a clear message.
11. Open or update a pull request.
12. End with a handoff containing state, checks, blockers, and next action.
```

Read these files first when present:

```text
README.md
CLAUDE.md
agent-ops.md
bootstrap/bootstrap.md
relevant files under specs/
relevant issue or pull request context
```

Agent rules:

- Never assume the repository, branch, or task from stale chat context. Verify them.
- Never commit or merge directly to `main` unless the user explicitly instructs it.
- Preserve existing style and structure. Do not refactor unrelated code or docs.
- Inspect before editing. Search for existing conventions before creating new ones.
- Prefer the smallest complete change that satisfies the request.
- Do not invent files, commands, test results, URLs, configuration, or repository state.
- Do not claim checks passed unless they were actually run or verified.
- Do not overwrite unrelated user changes.
- Do not change secrets, permissions, account settings, billing, deployment, publishing, hooks, workflows, dependencies, or destructive settings without explicit approval.
- If an action is unsupported in the current environment, state the limitation and continue with the parts that can be completed.
- Keep the pull request current when follow-up changes are made.
- Use repository files, issues, pull requests, commits, and handoffs as durable state instead of relying on long chat memory.

Before changing files, an agent should be able to answer:

```text
What is the goal?
What is explicitly out of scope?
What repository and branch am I in?
What files govern this work?
What already exists that should be reused?
What could break?
What requires user approval?
What checks prove the change works?
What is the smallest useful implementation?
```

## Agent Handoff Format

At the end of meaningful work, leave a concise handoff:

```text
goal:
branch:
current state:
changes made:
files touched:
commands/checks run:
passing/failing:
commit(s):
pull request:
blockers:
next action:
open questions:
```

If nothing changed, say so explicitly. If checks could not be run, say why.

## First Prompt to Claude Code

```text
You are setting up my cloned Agent Workflow Starter repo.
Read README.md, CLAUDE.md, index.html, human-guide.html, agent-ops.md, and bootstrap/bootstrap.md.
Inspect the current state before changing files.
Prepare only what is needed for the repo to work locally.
Run the relevant checks.
Do not change dotfiles, hooks, GitHub workflows, publishing settings, dependencies, database schema, or account-level settings without approval.
Do not commit or merge directly to main.
End with a setup report: what exists, what changed, checks run, what I should review, and suggested next steps.
```

## Core Workflow

```text
Goal → Inspect → Implementation Plan → Issue → Handoff → Branch → Execute → Verify → Pull Request → Review → Merge → Final Handoff
```

Use a chat model for goal shaping and planning. Use a coding agent for repository execution. Use GitHub for review, history, checks, and merge decisions.

## AI Stance

AI is useful, but not wise.

Treat it like a fast, forgetful assistant. It can draft, organize, search, compare, summarize, write small scripts, and keep work moving. It can also misunderstand the goal, lose the thread, invent facts, agree too easily, or build out of order.

Do not let it carry intent or judgment. Give it clear goals, small tasks, real files, and checkable outputs. Make it show what changed, what it used, what it assumes, and what still needs review.

Use AI for motion. Use human intent for direction and human judgment for standards. When AI makes a decision, ask why: what evidence supports it, what tradeoff it accepted, and what assumption would change the answer.

## Token Optimization

Tokens are working memory. Search first, read only relevant sections, prefer diffs over full file dumps, use handoffs instead of dragging long chats forward, and use local SQLite search when repeated lookup wastes context.

## Context Hygiene

Long chat context can become stale, noisy, or wrong. Do not keep dragging a confused conversation forward.

When context gets long, contradictory, or polluted by bad assumptions, stop and write a handoff:

```text
goal
current state
decisions
files touched
commands run
checks passing or failing
next action
open questions
```

New sessions should start from files, issues, pull requests, checks, and handoffs, not vague chat memory.

## Canonical Ordering

Use this default order for agent work:

```text
Goal → Inspect current state → Dependencies → Setup/config → Smallest useful unit → Execute → Verify → Follow-ups
```

This keeps agents from mixing setup, content edits, checks, and release work in the same loose pass.

## Atomic and System-Driven Work

Use the proper atomic ladder for reusable knowledge and workflow design:

```text
Atom → Molecule → Organism → Template → Page / Workflow
```

Atoms are notes, claims, citations, prompt lines, checklist items, commands, functions, smoke checks, and handoff fields. Molecules combine atoms into prompts, templates, outlines, small scripts, or verification blocks. Organisms are complete sections or flows. Templates make repeatable structures. Pages/workflows are finished usable artifacts or operating loops.

System-driven design keeps the loop visible:

```text
Input → Rule → Action → Check → Handoff → Next loop
```

## Plan Review Prompt

Before meaningful execution, ask the agent:

```text
What is missing?
What could break?
What assumptions might be wrong?
What is too broad?
What depends on something else?
What should be deferred?
What needs approval?
What is the smallest useful version?
```

## Small Scripts and Mini Apps

AI is good at discrete local tools that remove repeated chores. Use this when repetition appears.

```text
Python: quick local scripts and file/text automation.
Go: portable CLI tools and small binaries.
Rust: speed, safety, or single-binary discipline when justified.
```

Rules: one job, local-first, no framework unless needed, clear input/output, one command to run it, one smoke check or test, documented rollback.

## Advanced Modules

Advanced modules are optional. Use `advanced/README.md` as the map. Add one only when it saves time, reduces drift, or improves reviewability.

## GitHub Templates and CI

The repo includes issue and pull request templates plus a small CI workflow. Issues should capture goal, non-goals, implementation plan, todos, definition of done, checks, and follow-ups. Pull requests should capture summary, checks, review notes, and follow-ups. CI runs lint, test, smoke, validate, and doctor.

## Checks

Agents should run the relevant checks after setup or repo edits when the environment supports them:

```text
npm run lint
npm run test
npm run smoke
npm run validate
npm run doctor
```

If a check does not apply or cannot be run, record that in the pull request or handoff instead of pretending it passed.

Generated maps and local indexes are indexes. Source files remain truth.

## Rule

Start simple. Add complexity only when it saves time, reduces drift, or improves reviewability.
