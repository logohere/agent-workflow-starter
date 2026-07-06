# Agent Ops

Canonical implementation plan for agents working in this public repo.

## Goal

Turn writing, research, teaching, guide, documentation, and lightweight project goals into scoped, reviewable, reusable work.

Keep the repo lean. Keep public docs public-safe. Use Claude/Claude Code by default, but keep the workflow general for any file-editing agent that can inspect files, edit files, run checks, and use GitHub.

## Non-goals

```text
no personal details
no private context
no named creator styles
no broad rewrites
no dashboards
no frameworks unless needed
no dependencies unless needed
no vector search by default
no publishing without approval
no merge to main without approval
```

## Source of truth

Use durable sources before chat memory:

```text
README.md
CLAUDE.md
human-guide.html
bootstrap/bootstrap.md
templates/
advanced/
specs/
issues
pull requests
handoffs
```

## Todos

Use this order unless the issue says otherwise:

```text
1. Verify repo, branch, and git status.
2. Read the request, issue, or handoff.
3. Inspect relevant files only.
4. State goal, non-goals, dependencies, and approval gates.
5. Define the smallest useful change.
6. Make the change.
7. Run relevant checks.
8. Summarize the diff.
9. Record follow-ups instead of expanding scope.
10. Prepare PR or final handoff.
```

## Definition of Done

```text
Goal is satisfied.
Scope stayed bounded.
Public repo remains public-safe.
Relevant files were inspected before editing.
Changes are small and reviewable.
Checks pass or failures are explained.
No unrelated dependencies or tools were added.
Follow-ups are separated from current work.
Final handoff is complete.
```

## Approval gates

Ask before:

```text
destructive actions
deleting files
publishing or deploying
credentials or account settings
hooks
broad rewrites
paid services
database/schema changes
dependency additions
GitHub workflow changes
release/versioning changes
system instruction changes
merging to main
```

Approval gates are not handcuffs. Use reasonable tools when the task clearly needs them and the change is reviewable.

## Checks

Run the lightest checks that prove the work:

```text
npm run lint
npm run test
npm run smoke
npm run validate
npm run doctor
```

For macOS setup checks:

```text
npm run setup:macos
```

For local knowledge checks:

```text
npm run kb:init
npm run kb:rebuild
npm run kb:search -- "handoff"
```

## macOS Apple Silicon setup

Assume macOS Apple Silicon unless told otherwise.

Check before installing:

```text
npm run setup:macos
```

This checks Xcode Command Line Tools, Homebrew, Git, ripgrep, GitHub CLI, GitHub CLI auth, Node/npm, Python 3, and SQLite/FTS5 support.

If setup installation is approved:

```text
npm run setup:macos:install
```

Report anything interactive or still missing. Use Python standard library SQLite first.

## SQLite local knowledge

SQLite local knowledge is optional but first-class.

Use it when repeated file lookups waste context or when a project needs a reusable local index.

```text
store DB files in gitignored local paths
use FTS5 keyword search first
index source files, docs, notes, templates, and handoffs when useful
keep source files as truth
rebuild indexes instead of editing generated DB data
add vector search only after keyword search stops being enough
```

## Context hygiene

Do not drag stale chat forward.

If context is long, noisy, contradictory, or polluted by bad assumptions, write a handoff and restart from files, issues, pull requests, and checks.

Handoff format:

```text
Goal:
Current state:
Decisions:
Files touched:
Commands run:
Checks passing/failing:
Next action:
Open questions:
```

## Final handoff

End substantial work with:

```text
Done:
Changed:
Checks:
Pull request:
Needs review:
Follow-ups:
```
