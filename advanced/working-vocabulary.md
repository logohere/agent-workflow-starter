# Packages and Named Tools

Named tools should be treated as software, not shorthand.

If a term is a package, document the package. Do not redefine it as an agent mode unless the repo also has a mode with that exact name.

## Use when

- A package or named tool appears in prompts, setup, scripts, or agent instructions.
- A new session needs to know what the tool is.
- The tool has commands, install steps, checks, or approval gates.

## Required note

```text
Name:
What it is:
Why it is used:
Install path:
Commands:
Checks:
Approval gates:
Do not use when:
Rollback:
```

## Rules

```text
use real package names
link to local docs or official docs when available
do not invent package behavior
ask before installing dependencies
keep source files as truth
```

## If a term is just shorthand

Define it separately as a mode only when it is useful and public-safe:

```text
Term:
Meaning:
Use when:
Do not use when:
Expected output:
```
