# Bootstrap

Use this when setting up a cloned Agent Workflow Starter repo.

## Inspect

Claude Code should verify the current folder, branch, git status, and repo files before changing anything.

Read README.md, CLAUDE.md, human-guide.html, agent-ops.md, bootstrap/bootstrap.md, and package.json.

## Local setup

Prepare only what is needed for the repo to work locally. Use existing package scripts and avoid unrelated tools.

On macOS Apple Silicon, run `npm run setup:macos` to check Xcode Command Line Tools, Homebrew, Git, ripgrep, GitHub CLI, GitHub CLI auth, Node/npm, Python 3, and SQLite/FTS5 support. If setup installation is approved, run `npm run setup:macos:install` and report anything interactive or still missing.

Run the repo checks. If a command fails, report the failure and fix only the smallest obvious issue.

## GitHub setup

Ensure issue and pull request templates exist. Use issues, branches, pull requests, checks, reviews, and handoffs for ongoing changes. Do not merge without explicit approval.

## Context setup

Keep persistent instructions in CLAUDE.md. Keep CLAUDE.md concise and specific. Save durable project state in files, issues, pull requests, and handoffs instead of long chat context.

When context gets long, stale, or confused, write a handoff and restart from durable files.

## SQLite local knowledge

SQLite local knowledge is optional. Set it up only when repeated file lookup wastes context or the project benefits from local search.

Minimum setup:

```text
gitignored local DB path
FTS5 keyword search first
scripts to init, rebuild, and search when useful
source files remain truth
vector search deferred until needed
```

## Customize docs

After local setup works, help the user customize project docs, goals, templates, and workflow notes. Create project docs only when useful.

Do not personalize public docs. Do not add personal details, credentials, local machine paths, or named creator styles.

## Setup/config

Setup/config makes later agent work predictable: templates, checks, local scripts, folder structure, hooks, dotfiles, and repo conventions.

Use this order:

```text
audit current state
identify dependencies
set up minimum config
add templates or checks only if needed
verify setup
start scoped work
```

Dotfiles, hooks, dependencies, GitHub workflows, publishing settings, credentials, database/schema changes, and broad rewrites require approval.

## Advanced tools

Add advanced tools only when repeated friction justifies them. Possible later tools include local scripts, indexes, site builders, hosting, browser automation, agent skills, worktrees, hooks, and richer CI.

## Setup report

End first-run setup with:

```text
Repo state:
Setup completed:
Checks run:
Changes made:
Needs review:
Suggested next steps:
```
