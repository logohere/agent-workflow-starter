# SQLite Local Knowledge

SQLite local knowledge is optional but first-class. Use it when repeated file lookups waste context or when a project needs a reusable local index.

Keep it local. Keep it boring. Keep source files as truth.

## What it is for

- Search project docs, notes, templates, specs, and handoffs without dumping whole files into chat.
- Save tokens by finding the relevant source file before asking the agent to read or edit.
- Restart clean sessions from durable files instead of long chat memory.

## Default path

Local DB files live under `.local/`, which is ignored by git.

Default DB:

```text
.local/agent-workflow.db
```

## Start with FTS5

Use SQLite FTS5 keyword search first. It is enough for most repo docs, notes, guides, and teaching materials.

Do not add embeddings or vector search by default. Add them later only when keyword search stops being enough.

## Commands

```text
npm run kb:init
npm run kb:rebuild
npm run kb:search -- "handoff"
```

## Agent rules

```text
index only useful public/project files
never index credentials or private local files
keep generated DB data out of git
rebuild the index from source files
summarize search hits before reading large files
```

## Upgrade path

If FTS5 search is not enough, propose a separate issue for semantic search. Include the need, dependency, storage path, privacy impact, verification plan, and rollback path.
