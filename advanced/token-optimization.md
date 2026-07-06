# Token Optimization

Tokens are working memory. Spend them on the part of the project that matters now.

## Use when

- The agent keeps reading too much.
- A chat has become long, stale, or contradictory.
- The same files are searched repeatedly.
- The agent is dumping full files instead of focused diffs.

## Rules

```text
search before reading
read only relevant files or sections
prefer diffs over full file dumps
summarize before editing
write handoffs instead of dragging long chats forward
use local SQLite search when repeated lookup wastes context
keep source files as truth
```

## Commands

```text
rg "term" .
npm run kb:rebuild
npm run kb:search -- "handoff"
git diff --stat
git diff -- path/to/file
```

## Handoff trigger

Write a handoff when:

```text
context is long
assumptions changed
the agent repeats an old mistake
several plans were abandoned
the task changed direction
review requires a clean start
```

## Definition of Done

```text
agent read only relevant sources
large files were summarized before editing
final answer names files touched and checks run
handoff exists when context should not continue
source files remain truth
```
