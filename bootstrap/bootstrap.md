# Bootstrap

Use this when setting up a cloned Agent Workflow Starter repo.

## Inspect

Claude Code should verify the current folder, inspect repo files, check Git status, and read the core docs before changing anything.

Read README.md, human-guide.html, agent-ops.md, bootstrap/bootstrap.md, and package.json.

## Local setup

Prepare only what is needed for the repo to work locally. Use the existing package scripts and avoid unrelated tools.

Run the repo checks listed in README.md. If a command fails, report the failure and fix only the smallest obvious issue.

## Customize docs

After local setup works, help the user customize project docs, goals, templates, and workflow notes. Create project docs only when useful.

## Setup/config

Setup/config is work that makes later agent work predictable: templates, checks, local scripts, folder structure, hooks, dotfiles, and repo conventions.

Use this order: audit current state, identify dependencies, set up minimum config, add templates or checks only if needed, verify setup, then start scoped work.

Dotfiles are setup/config only. Do not change them without approval.

## GitHub workflow

Use issues, branches, pull requests, checks, reviews, and handoffs for ongoing changes. Do not merge without explicit approval.

## Advanced tools

Add advanced tools only when repeated friction justifies them. Possible later tools include local scripts, indexes, site builders, hosting, browser automation, agent skills, worktrees, hooks, and richer CI.

## Setup report

End first-run setup with repo state, setup completed, checks run, changes made, review items, and suggested next steps.
