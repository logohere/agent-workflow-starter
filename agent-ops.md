# Agent Workflow Starter Agent Ops

Use this as the operating manual for Claude and Claude Code when working in Agent Workflow Starter.

## Mission

Turn knowledge-work goals into scoped, reviewable, reusable work: briefs, long-form writing, guides, tutorials, course material, websites, digital products, workflow docs, templates, and lightweight supporting tools.

Optimize for clear plans, bounded execution, reviewable changes, durable files, and low operational overhead.

## First-run Setup

When a user clones this repo and asks for setup, do this:

```text
verify current folder
inspect repo files
check git status
read README.md, human-guide.html, agent-ops.md, and bootstrap/bootstrap.md
inspect package scripts
prepare local tooling only as needed
run checks
report what is ready and what needs review
```

Do not change dotfiles, hooks, GitHub workflows, publishing settings, or account-level settings without approval.

The setup report must include:

```text
Repo state:
Setup completed:
Checks run:
Changes made:
Needs review:
Suggested next steps:
```

## Core Interaction Model

```text
Plan in Claude Web/Desktop.
Execute in Claude Code.
Review through GitHub.
Save reusable patterns back into Agent Workflow Starter.
```

Claude Web/Desktop is for goal shaping, plan docs, risk review, task splitting, implementation plans, definitions of done, and handoff creation.

Claude Code is for repo inspection, branch creation, file edits, setup when approved, checks, pull requests, CI review, and final handoff.

GitHub keeps work bounded, reviewable, reversible, and versioned.

## Workflow Spine

Use this sequence for non-trivial repo work:

```text
Goal
→ Plan Doc
→ Plan Review
→ Implementation Plan
→ Definition of Done
→ Todos
→ GitHub Issue
→ Claude Code Handoff
→ Branch
→ Execute
→ Verify
→ Pull Request
→ Review
→ Merge
→ Version / Release Notes
→ Final Handoff
```

Do not skip planning for medium or large work. Do not merge without explicit approval.

## Canonical Ordering

Use this order unless the issue says otherwise:

```text
confirm the goal
inspect current state
identify dependencies
set up required config
define the smallest useful unit
execute that unit
verify it
record follow-ups instead of expanding scope
```

Canonical ordering prevents drift. Do not jump from setup to broad execution without checking dependencies and scope.

## Atomic Design and Dependencies

Break work into small reusable units before building larger workflows. This applies to writing and workflow design, not only programming.

Atoms can be source notes, claims, sections, prompts, templates, checklist items, lesson steps, hooks, smoke checks, release notes, or small scripts.

Before editing, identify:

```text
what must exist first
what depends on this change
what can be deferred
what should become a separate issue
what needs approval before setup changes
```

Build from atoms to larger parts: atoms to sections to guides to workflows to releases.

## Human Authority

The human owns goals, priorities, scope approval, final review, merge approval, publishing decisions, and strategic direction.

Claude owns planning, repo inspection, task decomposition, documentation, templates, GitHub workflow mechanics, routine verification, handoffs, and workflow improvement proposals.

Do not ask the human to make routine operational decisions. Do ask before crossing approval boundaries.

## Repository Is Truth

Project knowledge belongs in files, issues, pull requests, and release notes, not chat memory.

Use or maintain:

```text
README.md
human-guide.html
agent-ops.md
bootstrap/bootstrap.md
templates/
advanced/
specs/agent-workflow-starter/
docs/project-brief.md
docs/goals.md
docs/todo.md
docs/decisions.md
docs/handoff.md
docs/workflow-lessons.md
```

Search before reading. Read only what is needed. Prefer diffs and summaries over full file dumps.

## Plan Before Execution

Before medium or large work, produce or request a plan doc with:

```text
goal
non-goals
current state
assumptions
open questions
risks
implementation plan
files/systems likely touched
definition of done
todos
verification plan
stop conditions
follow-up work that should not be done now
```

Execution starts after approval unless the task is trivial.

## Claude Code Execution Rules

When executing an approved task:

```text
verify current folder
verify branch
check git status
read the issue or handoff
inspect relevant files
summarize intended edits and verification
stay within the issue
make the smallest valid change
run relevant checks
prepare a pull request
leave a final handoff
```

Do not brainstorm during execution unless asked. Do not broaden scope. Do not refactor unrelated files. If new work appears, record it as follow-up instead of doing it.

## GitHub Workflow

```text
Goal → Issue → Branch → Pull Request → Checks → Review → Merge → Handoff
```

Issue = task definition.
Branch = temporary workspace.
Pull request = review page.
CI = automatic checks.
Merge = accepting the change.
Version/tag = stable checkpoint.
Release notes = what changed and why.

## Approval Rules

Ask before:

```text
changing dotfiles
changing hooks
changing GitHub workflows
deleting files
touching credentials or account settings
changing release/versioning rules
publishing or deploying
broad restructuring
changing system instructions
adding dependencies
adding paid services
database changes
merging to main
```

If unsure whether approval is needed, ask.

## Setup/config: dotfiles

Dotfiles are setup/config for portable machine and workflow defaults: shell config, Git config, editor defaults, Claude defaults, scripts, aliases, hooks, and local automation.

Treat dotfiles as setup work. Audit what exists, decide what should be portable, then set the minimum useful defaults. Do not turn dotfiles into research notes, tutorials, content, or a second operating system.

Never overwrite, rename, delete, or reorganize dotfiles without explicit approval.

## Hooks

Hooks are local scripts that run automatically during Git actions.

They can prevent predictable mistakes, such as committing blocked files, skipping checks, or working on the wrong branch. Add or change hooks only after approval.

## Checks

Run the lightest checks that prove the work:

```text
npm run lint
npm run smoke
npm run validate
npm run doctor
```

Use broader checks only when relevant.

## Advanced Tools Flow

Advanced tools are relevant when they reduce repeated friction or make agent work safer, even if the human is not doing hard programming.

```text
repeated friction
tool proposal
dependency check
smallest useful setup
verification
documentation
follow-up issue if more is needed
```

Examples include local scripts, indexes, site builders, hosting, browser automation, agent skills, worktrees, hooks, and richer CI. Do not add advanced tools without a clear dependency and review path.

## Final Handoff Format

End execution with:

```text
Done:
Changed:
Checks:
Pull request:
Needs review:
Follow-ups:
```

## Self-Audit

Before done, check:

```text
Did I solve the goal?
Did I stay within scope?
Did I verify?
Did I avoid unrelated changes?
Did I update docs when needed?
Did I separate follow-ups?
Is anything uncertain?
```

Deliver results, not internal mechanics. Expose implementation detail only when useful or requested.
