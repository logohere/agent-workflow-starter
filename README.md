# Agent Workflow Starter

Public starter repo for lean AI-assisted writing, teaching, guides, research, documentation, and lightweight project execution. Claude/Claude Code is the default stack, but the workflow stays general enough for other file-editing agents.

Agent Workflow Starter helps turn clear goals into scoped, reviewable artifacts with Claude, Claude Code, Git, GitHub, templates, checks, handoffs, and optional local knowledge search.

It is for capable users who already know their subject and want better agent workflows without maintaining a heavy system.

## Start Here

- `human-guide.html`: short human-facing guide
- `CLAUDE.md`: concise Claude Code project instructions
- `agent-ops.md`: operating guide for agents
- `bootstrap/bootstrap.md`: first-run setup order
- `templates/`: reusable issue, pull request, handoff, and project-doc templates
- `advanced/sqlite-kb.md`: optional local SQLite knowledge setup
- `advanced/macos.md`: optional macOS Apple Silicon setup notes
- `advanced/dotdog.md`: optional repo mapping and lightweight validation notes
- `advanced/`: optional modules for later tools
- `specs/agent-workflow-starter/`: lightweight system specs

## Learning Path

Use the guide in three passes:

```text
Part 1: Basics — goal, files, AI stance, context hygiene, handoffs
Part 2: Next steps — GitHub workflow, checks, macOS setup, local SQLite search
Part 3: Advanced — Dotdog, hooks, worktrees, agent skills, browser automation, hosting, vector search
```

Do Part 1 first. Add Part 2 when the workflow is useful. Treat Part 3 as optional.

## Starter Flow

```text
clone or fork the repo
open it locally
ask Claude Code to inspect and set up the repo
review the setup report
customize only what is useful
use issues, branches, pull requests, checks, and handoffs for ongoing changes
```

Claude Code should inspect first, prepare only needed tooling, run checks, and explain what is ready. The user should not need to run setup manually unless Claude Code asks for approval or a system-level action.

## First Prompt to Claude Code

```text
You are setting up my cloned Agent Workflow Starter repo.
Read README.md, CLAUDE.md, human-guide.html, agent-ops.md, and bootstrap/bootstrap.md.
Inspect the current state before changing files.
Prepare only what is needed for the repo to work locally.
Run the relevant checks.
Do not change dotfiles, hooks, GitHub workflows, publishing settings, dependencies, database schema, or account-level settings without approval.
End with a setup report: what exists, what changed, checks run, what I should review, and suggested next steps.
```

## Core Workflow

```text
Goal → Inspect → Plan → Issue → Handoff → Branch → Execute → Verify → Pull Request → Review → Merge → Final Handoff
```

Use Claude Web/Desktop for goal shaping and planning. Use Claude Code for repo execution. Use GitHub for review, history, checks, and merge decisions.

## AI Stance

AI is useful, but not wise.

Treat it like a fast, forgetful assistant. It can draft, organize, search, compare, summarize, and keep work moving. It can also misunderstand the goal, lose the thread, invent facts, agree too easily, or build out of order.

Do not let it carry judgment. Give it clear goals, small tasks, real files, and checkable outputs. Make it show what changed, what it used, what it assumes, and what still needs review.

Use AI for motion. Use human judgment for direction.

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

This keeps Claude from mixing setup, content edits, checks, and release work in the same loose pass.

## macOS Setup

For macOS Apple Silicon, use the setup check before installing anything:

```text
npm run setup:macos
```

It checks architecture, Xcode Command Line Tools, Homebrew, Git, ripgrep, GitHub CLI, GitHub CLI auth, Node/npm, Python 3, and Python SQLite/FTS5 support. To install missing Homebrew-managed tools after reviewing the list:

```text
npm run setup:macos:install
```

Xcode Command Line Tools and Homebrew may still require interactive installation.

## Local SQLite Knowledge

SQLite local knowledge is optional but first-class. Use it when repeated file lookups waste context or the project needs a reusable local index.

Start with FTS5 keyword search. Store local DB files under gitignored paths such as `.local/`. Add embeddings or vector search later only if keyword search stops being enough.

Useful commands:

```text
npm run kb:init
npm run kb:rebuild
npm run kb:search -- "handoff"
```

On macOS Apple Silicon, prefer the default Python `sqlite3` path first. Add Node SQLite packages only when the project actually needs them.

## Dotdog

Dotdog is optional. Use it when repo mapping or lightweight validation makes the project easier to inspect and review. Do not make it part of the basic path.

Useful commands, when available:

```text
npm run map
npm run validate
```

Generated maps are indexes. Source files remain truth.

## Checks

Claude Code should run the relevant checks after setup or repo edits:

```text
npm run lint
npm run test
npm run smoke
npm run validate
npm run doctor
```

Generated maps and local indexes are indexes. Source files remain truth.

## Rule

Start simple. Add complexity only when it saves time, reduces drift, or improves reviewability.
