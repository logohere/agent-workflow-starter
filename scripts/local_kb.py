#!/usr/bin/env python3
import argparse
import os
import sqlite3
import sys
from pathlib import Path

DB_PATH = Path(os.environ.get("AGENT_WORKFLOW_DB", ".local/agent-workflow.db"))
ROOT = Path.cwd()
INCLUDE_EXTS = {".md", ".html", ".dog"}
SKIP_DIRS = {".git", "node_modules", ".local", "dist", "coverage", "data/local"}


def connect():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    return sqlite3.connect(DB_PATH)


def init_db(conn):
    conn.executescript(
        """
        create table if not exists docs (
          id integer primary key,
          path text not null unique,
          content text not null,
          mtime real not null
        );
        create virtual table if not exists docs_fts using fts5(
          path,
          content,
          tokenize = 'porter unicode61'
        );
        """
    )
    conn.commit()


def should_skip(path: Path):
    parts = set(path.parts)
    return bool(parts & SKIP_DIRS)


def iter_files(paths):
    roots = [Path(p) for p in paths] if paths else [ROOT]
    for base in roots:
        if not base.exists():
            continue
        if base.is_file():
            files = [base]
        else:
            files = base.rglob("*")
        for path in files:
            if path.is_file() and path.suffix in INCLUDE_EXTS and not should_skip(path):
                yield path


def rebuild(conn, paths):
    init_db(conn)
    conn.execute("delete from docs")
    conn.execute("delete from docs_fts")
    count = 0
    for path in iter_files(paths):
        rel = str(path.relative_to(ROOT)) if path.is_relative_to(ROOT) else str(path)
        text = path.read_text(encoding="utf-8", errors="replace")
        mtime = path.stat().st_mtime
        cur = conn.execute(
            "insert into docs(path, content, mtime) values (?, ?, ?)",
            (rel, text, mtime),
        )
        conn.execute(
            "insert into docs_fts(rowid, path, content) values (?, ?, ?)",
            (cur.lastrowid, rel, text),
        )
        count += 1
    conn.commit()
    print(f"indexed {count} files into {DB_PATH}")


def search(conn, query, limit):
    init_db(conn)
    try:
        rows = conn.execute(
            """
            select path, snippet(docs_fts, 1, '', '', ' ... ', 12) as snippet
            from docs_fts
            where docs_fts match ?
            order by rank
            limit ?
            """,
            (query, limit),
        ).fetchall()
    except sqlite3.OperationalError:
        like = f"%{query}%"
        rows = conn.execute(
            "select path, substr(content, 1, 220) from docs where content like ? limit ?",
            (like, limit),
        ).fetchall()

    if not rows:
        print("no hits")
        return
    for path, snippet in rows:
        clean = " ".join(snippet.split())
        print(f"{path}: {clean}")


def main():
    parser = argparse.ArgumentParser(description="Local SQLite FTS5 knowledge index")
    sub = parser.add_subparsers(dest="cmd", required=True)
    sub.add_parser("init")
    rebuild_parser = sub.add_parser("rebuild")
    rebuild_parser.add_argument("paths", nargs="*")
    search_parser = sub.add_parser("search")
    search_parser.add_argument("query", nargs="+")
    search_parser.add_argument("--limit", type=int, default=8)
    args = parser.parse_args()

    with connect() as conn:
        if args.cmd == "init":
            init_db(conn)
            print(f"initialized {DB_PATH}")
        elif args.cmd == "rebuild":
            rebuild(conn, args.paths)
        elif args.cmd == "search":
            search(conn, " ".join(args.query), args.limit)
        else:
            parser.print_help()
            return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
