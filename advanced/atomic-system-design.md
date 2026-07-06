# Atomic and System-Driven Design

Use the proper Atomic Design ladder for reusable knowledge work and agent workflows.

```text
Atom → Molecule → Organism → Template → Page / Workflow
```

## Atom

The smallest reusable unit.

Examples:

```text
note
claim
citation
prompt line
checklist item
command
script function
smoke check
section heading
handoff field
```

## Molecule

A small useful combination of atoms.

Examples:

```text
task prompt
issue template
PR checklist
section outline
small script
verification block
SQLite search command
```

## Organism

A complete working part of the system.

Examples:

```text
human-guide section
agent workflow
local setup flow
CI check group
knowledge-search flow
handoff process
```

## Template

A repeatable structure that can produce many outputs.

Examples:

```text
issue template
PR template
implementation-plan template
lesson template
guide template
project-doc structure
```

## Page / Workflow

A complete usable artifact or operating loop.

Examples:

```text
finished guide
teaching module
repo setup flow
writing workflow
local knowledge workflow
release workflow
```

## System-driven loop

```text
Input → Rule → Action → Check → Handoff → Next loop
```

Inputs are goals, notes, files, issues, research, and drafts.
Rules are CLAUDE.md, agent-ops.md, templates, approval gates, style rules, and scope limits.
Actions are draft, inspect, edit, script, index, test, summarize, and open PR.
Checks are lint, test, smoke, validate, doctor, and human review.
Handoffs capture what changed, what passed, what failed, what remains, and the next action.

## Use when

- A workflow repeats.
- A guide is becoming hard to maintain.
- A script should become a reusable command.
- A prompt should become a template.
- A check should prevent predictable mistakes.

## Do not use when

- A single direct edit is enough.
- The abstraction is not used yet.
- Naming layers adds ceremony without saving time.
