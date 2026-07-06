# Storybook

Storybook is optional. Use it only for UI component work that needs isolated visual review.

## Use when

- The project has reusable UI components.
- Components need visual states, examples, or documentation.
- Reviewers need to see UI behavior without running the full app.

## Do not use when

- The repo is only docs, scripts, or writing.
- A static HTML page is enough.
- Adding a UI framework would create more work than it saves.

## Setup

Do not add Storybook by default. Propose it in an issue first with:

```text
component need
package impact
commands
CI/check impact
rollback path
```

## Commands

Only after setup exists:

```text
npm run storybook
npm run build-storybook
```

## Approval needed

```text
adding Storybook packages
adding a UI framework
changing build or CI workflow
publishing Storybook
```

## Definition of Done

```text
component stories are useful
commands are documented
checks pass
review path is clear
rollback path exists
```
