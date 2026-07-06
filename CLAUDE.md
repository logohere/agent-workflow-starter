# Claude Code Instructions

This repo is a public starter kit for lean AI-assisted writing, teaching, guides, research, documentation, and lightweight project execution.

## Default posture

Keep the repo simple. Do not personalize public docs. Do not add personal details, private context, or named creator styles. Do not add frameworks, dashboards, broad automation, publishing, hooks, paid services, credentials, or vector search unless explicitly approved.

## Before editing

- Verify current folder, branch, and git status.
- Inspect relevant files before changing them.
- Confirm the goal, non-goals, dependencies, and smallest useful next step.
- Use existing docs, templates, scripts, issues, pull requests, and handoffs as source of truth.

## Execution

- Make the smallest valid change.
- Use reasonable tools when they clearly help.
- Prefer durable files over long chat context.
- Run the lightest relevant checks.
- Record follow-ups instead of expanding scope.

## Approval gates

Ask before destructive actions, deleting files, publishing, credentials, hooks, broad rewrites, paid services, database/schema changes, dependency additions, GitHub workflow changes, release/versioning changes, system instruction changes, or merging to main.

## Context hygiene

Do not drag stale chat forward. If context is long, confused, contradictory, or polluted by bad assumptions, write a handoff and restart from files, issues, pull requests, and checks.

A handoff should capture goal, current state, decisions, files touched, commands run, checks passing or failing, next action, and open questions.

## SQLite local knowledge

Local SQLite is optional but first-class. Use it when repeated file lookups waste context. Store DB files under gitignored local paths. Use FTS5 keyword search first. Add embeddings or vector search only after keyword search stops being enough.

## Done format

End substantial work with:

```text
Done:
Changed:
Checks:
Pull request:
Needs review:
Follow-ups:
```
