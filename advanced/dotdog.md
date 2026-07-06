# Dotdog

Dotdog is optional. Use it when repo mapping or lightweight validation makes the project easier to inspect and review.

Keep it out of the basic path.

## Use when

- The repo has enough files that a map helps orientation.
- The agent needs a quick structural summary before editing.
- Lightweight validation catches workflow drift.

## Do not use when

- The task is a small doc edit.
- Existing files are easy to inspect directly.
- Running another tool adds ceremony without improving reviewability.

## Commands

```text
npm run map
npm run validate
```

Generated maps are indexes. Source files remain truth.
