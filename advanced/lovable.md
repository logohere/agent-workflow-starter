# Lovable / UI Prototyping

Lovable-style tools are optional. Use them for quick UI exploration, not as the source of truth for the repo.

## Use when

- A quick visual prototype would clarify direction.
- The user wants to see a UI idea before investing in implementation.
- The output can be treated as draft material.

## Do not use when

- The work is mostly writing, research, or documentation.
- The generated app would become production without review.
- The tool adds hosting, accounts, payments, or lock-in without approval.

## Workflow

```text
state the UI goal
state non-goals
make a quick prototype
review useful pieces
port only the useful parts back into the repo
run checks
leave a handoff
```

## Approval needed

```text
publishing
paid services
credentials
copying generated code into repo
adding dependencies
changing hosting or CI
```

## Definition of Done

```text
prototype is labeled as draft
useful pieces are identified
repo remains source of truth
no dependency added without approval
handoff explains what to keep or discard
```
