# Agent Ops

Canonical implementation plan for agents working in this public repo.

## Goal

Turn writing, research, teaching, guide, documentation, scripts, mini apps, and lightweight project goals into scoped, reviewable, reusable work.

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
5. Write a short implementation plan.
6. Review the plan for missing pieces and risks.
7. Define the smallest useful change.
8. Make the change.
9. Run relevant checks.
10. Summarize the diff.
11. Record follow-ups instead of expanding scope.
12. Prepare PR or final handoff.
```

## Plan review

Before executing meaningful work, answer:

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

## Implementation plan

```text
Implementation plan is short.
It names the files likely touched.
It lists the steps in order.
It names checks to run.
It separates follow-ups from current work.
```

## Atomic and system-driven work

Use the proper atomic ladder for reusable knowledge and workflow design:

```text
Atom → Molecule → Organism → Template → Page / Workflow
```

```text
Atom: note, claim, citation, prompt line, checklist item, command, function, smoke check, handoff field.
Molecule: task prompt, issue template, PR checklist, section outline, small script, verification block.
Organism: guide section, local setup flow, CI check group, knowledge-search flow, handoff process.
Template: issue template, PR template, implementation-plan template, lesson template, guide template.
Page / Workflow: finished guide, teaching module, repo setup flow, writing workflow, local knowledge workflow.
```

System-driven design means the loop is visible:

```text
Input → Rule → Action → Check → Handoff → Next loop
```

Improve the system only when the work repeats, the current path causes drift, or a check would prevent predictable mistakes.

## Small scripts and mini apps

AI can build small tools quickly. Use that for repeated chores, not for speculative architecture.

```text
Python: quick local scripts and file/text automation.
Go: portable CLI tools and small binaries.
Rust: speed, safety, or single-binary discipline when justified.
```

Rules:

```text
one job
local-first
no framework unless needed
clear input and output
one command to run it
one smoke check or test
documented rollback
```

Examples: rename files, clean notes, ingest docs into SQLite, search handoffs, generate checklists, convert notes into Markdown sections, validate repo structure.

## Token optimization

```text
search before reading
read only relevant files or sections
prefer diffs over full dumps
summarize before editing
use handoffs instead of long chat carryover
use local SQLite search when repeated lookup wastes context
keep source files as truth
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