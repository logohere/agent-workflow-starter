# Agent Skills

Agent skills are reusable procedures that load when a repeated workflow needs them. Keep them out of the basic path.

## Use when

- The same multi-step workflow repeats.
- CLAUDE.md is getting too long.
- A workflow needs examples, scripts, or checklists on demand.

## Do not use when

- A short instruction in CLAUDE.md is enough.
- The workflow has not repeated yet.
- The skill would hide approval gates or scope limits.

## Good candidates

```text
plan review
handoff creation
lesson outline cleanup
SQLite ingest/search
release notes
site publishing checklist
```

## Setup

Keep skill content concise:

```text
name
trigger
inputs
steps
checks
handoff
```

## Definition of Done

```text
skill has one purpose
trigger is clear
steps are bounded
checks are listed
approval gates remain visible
CLAUDE.md stays short
```
