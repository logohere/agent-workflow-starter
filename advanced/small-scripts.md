# Small Scripts and Mini Apps

Small scripts are one of the best uses of AI. A discrete local tool can remove repeated work without turning the repo into an app platform.

## Use when

- The same manual step happens more than twice.
- A file cleanup, conversion, search, rename, or validation task is predictable.
- A small command would save more tokens than another long prompt.
- The output can be checked quickly.

## Do not use when

- The task is one-off.
- The tool would need credentials, accounts, or network access without approval.
- The script needs a framework to be useful.
- The script would hide judgment that should stay human.

## Language choice

```text
Python: quick local scripts, text/file automation, SQLite helpers.
Go: portable CLI tools and small binaries.
Rust: speed, safety, or single-binary discipline when justified.
```

## Setup

Start with one file under `scripts/` unless the tool clearly needs more structure.

```text
scripts/clean_notes.py
scripts/check_links.py
scripts/rename_files.py
scripts/local_kb.py
```

Add an npm wrapper only when useful:

```json
"notes:clean": "python3 scripts/clean_notes.py"
```

## Commands

```text
npm run notes:clean
python3 scripts/clean_notes.py --help
go run ./cmd/tool
cargo run --bin tool
```

## Definition of Done

```text
one clear job
local-first
no unnecessary dependency
clear input and output
safe default behavior
one command to run it
one smoke check or test
README or advanced note updated
rollback path documented
```

## Examples

- Rename a batch of files.
- Clean notes into Markdown.
- Ingest docs into SQLite FTS5.
- Search handoffs.
- Generate a checklist from a template.
- Convert notes into section drafts.
- Validate repo structure.
- Check links or required headings.
