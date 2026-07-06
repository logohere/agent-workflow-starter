# Agent Workflow Starter

Public starter repo for agent-assisted knowledge work.

Agent Workflow Starter helps a user plan, organize, execute, verify, and review writing, research, documentation, teaching, product, and workflow projects with Claude, Claude Code, Git, GitHub, templates, checks, and lightweight operating rules.

It is for users who want an agent to handle operational structure without requiring the user to become a software developer.

## Start Here

- `human-guide.html`: human-facing guide
- `agent-ops.md`: operating guide for Claude and Claude Code
- `bootstrap/bootstrap.md`: first-run setup order
- `templates/`: reusable issue, pull request, handoff, and project-doc templates
- `advanced/`: optional modules for later tools
- `specs/agent-workflow-starter/`: lightweight system specs

## Starter Flow

```text
clone or fork the repo
open it locally
ask Claude Code to run first-run setup
review the setup report
customize the repo for your work
use issues, branches, pull requests, checks, and handoffs for ongoing changes
```

Claude Code should inspect the repo, prepare local tooling, run checks, and explain what is ready. The user should not need to run setup manually unless Claude Code asks for approval or a system-level action.

## First Prompt to Claude Code

```text
You are setting up my cloned Agent Workflow Starter repo.
Read README.md, human-guide.html, agent-ops.md, and bootstrap/bootstrap.md.
Inspect the current state before changing files.
Prepare only what is needed for the repo to work locally.
Run the relevant checks.
Do not change dotfiles, hooks, GitHub workflows, publishing settings, or account-level settings without approval.
End with a setup report: what exists, what changed, checks run, what I should review, and suggested next steps.
```

## Core Workflow

```text
Goal → Plan Doc → Plan Review → Implementation Plan → Definition of Done → Todos → GitHub Issue → Claude Code Handoff → Branch → Execute → Verify → Pull Request → Review → Merge → Version / Release Notes → Final Handoff
```

Use Claude Web/Desktop for planning. Use Claude Code for repo execution. Use GitHub for review, history, checks, and merge decisions.

## Canonical Ordering

Use this default order for agent work:

```text
Goal → Inspect current state → Dependencies → Setup/config → Smallest useful unit → Execute → Verify → Follow-ups
```

This keeps Claude from mixing setup, content edits, checks, and release work in the same loose pass.

## Atomic Design and Dependencies

Break work into small reusable units before building larger workflows. This applies to writing and workflow design, not only programming.

Atoms can be source notes, claims, sections, prompts, templates, checklist items, lesson steps, hooks, smoke checks, release notes, or small scripts.

Before execution, identify what must exist first, what depends on the change, what can be deferred, and what should become a separate issue.

## Setup/config: dotfiles

Dotfiles are setup/config. Use them only for portable machine and workflow defaults such as shell config, Git config, Claude defaults, GitHub templates, scripts, hooks, checklists, and reusable setup patterns.

For this repo, dotfiles are something Claude may help set up after approval. They are not research notes, tutorials, content, or a second operating system.

## Progression Ladder

Build up slowly. Do not install or enable every tool at once.

1. Agent Workflow Starter docs, templates, Git, GitHub, Claude
2. Setup/config such as dotfiles only when useful
3. Tiny local scripts when repeated chores are worth automating
4. Local indexes when simple folders are not enough
5. Lean checks: lint, smoke, validation, and CI
6. Site/UI tools only when a project needs a web surface
7. Hosting only when something is ready to publish
8. Browser inspection or automation only when repeated webpage checks justify it
9. Agent skills when a repeatable workflow should load on demand

## Advanced Tools Flow

```text
Repeated friction → Tool proposal → Dependency check → Smallest useful setup → Verification → Documentation → Follow-up issue if more is needed
```

Advanced tools are optional. Add them when the dependency is clear and the result is easier to review.

## Checks

Claude Code should run the relevant checks after setup or repo edits:

```text
npm run lint
npm run smoke
npm run validate
npm run doctor
```

Generated maps are indexes. Source files remain truth.

## Rule

Start simple. Add complexity only when it saves time, reduces drift, or improves reviewability.
