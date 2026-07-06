# Browser Automation

Browser automation is optional. Use it only when repeated webpage checks justify it.

## Use when

- A webpage needs the same manual inspection repeatedly.
- Screenshots or DOM checks would catch regressions.
- A publishing flow needs verification.
- A teaching/site project needs quick smoke checks.

## Do not use when

- A normal browser review is enough.
- The task is one-off.
- The site has credentials or private data without approval.
- Automation would be more work than the check.

## Setup

Prefer the smallest useful tool. Start with a documented manual checklist. Add automation only after repeated friction.

## Example checks

```text
page loads
main heading exists
links are visible
no obvious console error
expected text appears
screenshot saved for review
```

## Approval needed

```text
installing browser automation packages
storing credentials
running against private sites
generating screenshots for public sharing
```

## Definition of Done

```text
reason for automation is clear
check is repeatable
command is documented
failure output is readable
manual review path still exists
```
