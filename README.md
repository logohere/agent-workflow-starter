# Agent Workflow Starter

Public starter repo for lean AI-assisted writing, teaching, guides, research, documentation, scripts, mini apps, and lightweight project execution. Claude/Claude Code is the default stack, but the workflow stays general enough for other file-editing agents.

Agent Workflow Starter helps turn clear goals into scoped, reviewable artifacts with Claude, Claude Code, Git, GitHub, templates, checks, handoffs, optional local knowledge search, and small local tools.

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
Read README.md, CLAUDE.md, index.html, human-guide.html, agent-ops.md, and bootstrap/bootstrap.md.
Inspect the current state before changing files.
Prepare only what is needed for the repo to work locally.
Run the relevant checks.
Do not change dotfiles, hooks, GitHub workflows, publishing settings, dependencies, database schema, or account-level settings without approval.
End with a setup report: what exists, what changed, checks run, what I should review, and suggested next steps.
```

## Core Workflow

```text
Goal → Inspect → Implementation Plan → Issue → Handoff → Branch → Execute → Verify → Pull Request → Review → Merge → Final Handoff
```

Use Claude Web/Desktop for goal shaping and planning. Use Claude Code for repo execution. Use GitHub for review, history, checks, and merge decisions.

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

This keeps Claude from mixing setup, content edits, checks, and release work in the same loose pass.

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

## GitHub templates and CI

The repo includes issue and pull request templates plus a small CI workflow. Issues should capture goal, non-goals, implementation plan, todos, definition of done, checks, and follow-ups. Pull requests should capture summary, checks, review notes, and follow-ups. CI runs lint, test, smoke, validate, and doctor.

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
