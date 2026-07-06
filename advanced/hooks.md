# Hooks

Hooks are local guardrails that run automatically during Git actions. They are powerful, so keep them optional and approved.

## Use when

- A repeated mistake should be blocked before commit or push.
- A fast check protects the repo from obvious drift.
- The hook is local, simple, and easy to remove.

## Do not use when

- The check is slow.
- The team has not agreed to it.
- CI is enough.
- The hook hides behavior the user should understand.

## Examples

```text
block direct push to main
run npm run lint before push
prevent committing .local databases
prevent committing credentials
warn on machine-specific paths
```

## Approval needed

Always ask before adding, changing, or deleting hooks.

## Definition of Done

```text
hook has one job
runs fast
prints clear failure message
has bypass/removal instructions
CI still remains source of truth
```
