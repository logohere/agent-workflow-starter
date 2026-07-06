# Worktrees

Git worktrees let one repo have multiple working directories checked out at different branches. Use them only when parallel work is actually needed.

## Use when

- Two unrelated changes need to happen at the same time.
- One branch must stay stable while another is inspected.
- A review branch and an implementation branch need to be open together.

## Do not use when

- A normal branch is enough.
- The user is not comfortable with multiple working directories.
- The task is a small doc edit.
- The repo state is already confusing.

## Setup

Use clear names and keep worktrees outside the main repo directory.

```text
git worktree add ../agent-workflow-starter-fix fix/small-change
git worktree list
git worktree remove ../agent-workflow-starter-fix
```

## Agent rules

```text
always state which worktree is active
verify branch before editing
run checks inside the active worktree
remove worktrees when done
never edit the wrong worktree
```

## Approval needed

Ask before creating or removing worktrees.

## Definition of Done

```text
active worktree is named
branch is clear
checks ran in correct directory
follow-up or removal path is documented
```
