# Advanced Modules

Advanced modules are optional. Use them only when repeated friction justifies the added tool, rule, or workflow.

Do not read this folder as a required curriculum. Start with the human guide, CLAUDE.md, agent-ops.md, templates, and checks.

## Use this order

```text
1. Confirm the repeated friction.
2. Write a short implementation plan.
3. Check approval gates.
4. Add the smallest useful setup.
5. Run checks.
6. Document rollback or follow-up.
```

## Modules

| Module | Use when |
| --- | --- |
| `atomic-system-design.md` | Workflows need reusable parts and visible feedback loops. |
| `token-optimization.md` | Context waste, long chats, or repeated file lookup slows work down. |
| `small-scripts.md` | A repeated chore should become a discrete local command or mini app. |
| `working-vocabulary.md` | Named packages or tools need file-backed setup and usage notes. |
| `sqlite-kb.md` | Local search would save tokens and repeated file reads. |
| `macos.md` | Setting up macOS Apple Silicon tools. |
| `dotdog.md` | Repo mapping or lightweight validation helps review. |
| `agent-skills.md` | A repeated agent procedure should load on demand. |
| `hooks.md` | A local guardrail should block predictable mistakes. |
| `worktrees.md` | Multiple isolated branches need to be open at once. |
| `browser-automation.md` | Repeated webpage checks justify automation. |
| `hosting.md` | A guide or site is ready to publish. |
| `storybook.md` | UI components need isolated visual review. |
| `lovable.md` | A throwaway prototype needs a quick UI pass before real implementation. |

## Rule

Advanced means optional, specific, and justified. If it does not save time, reduce drift, or improve reviewability, do not add it.
