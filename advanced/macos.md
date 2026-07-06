# macOS Apple Silicon

Most users of this starter will be fine with the default macOS tools plus Claude Code, Git, GitHub CLI, Node, npm, and Python 3.

Keep setup minimal. Do not install a tool unless the repo needs it.

## Recommended baseline

```text
macOS on Apple Silicon
Homebrew
Git
GitHub CLI
Node LTS and npm
Python 3
Claude Code
```

## Agent checks

When setting up on macOS, Claude Code should run:

```text
npm run setup:macos
```

This checks architecture, Xcode Command Line Tools, Homebrew, Git, ripgrep, GitHub CLI, GitHub CLI auth, Node/npm, Python 3, and Python SQLite/FTS5 support.

Equivalent manual checks:

```text
uname -m
xcode-select -p
git --version
rg --version
gh --version
node --version
npm --version
python3 --version
```

Expected architecture for Apple Silicon:

```text
arm64
```

If a tool is missing, propose the smallest install path. If the user approved setup installation, run:

```text
npm run setup:macos:install
```

Xcode Command Line Tools and Homebrew may require interactive installation. Do not fake success; report what remains missing.

## Homebrew note

On Apple Silicon, Homebrew usually lives at:

```text
/opt/homebrew
```

Do not hardcode this into public docs or scripts unless needed. Detect paths at runtime.

## SQLite note

Python 3 on macOS usually includes SQLite support. The local knowledge script uses Python's standard `sqlite3` module and does not require a Node SQLite dependency by default.

Use FTS5 first. Add `better-sqlite3`, `sqlite-vec`, or other packages later only if the project clearly needs them.

## Keep out of git

Do not commit local machine paths, generated databases, shell profiles, credentials, caches, or personal environment details.

## Search tools

macOS includes `grep`, which is enough as a fallback. Prefer `ripgrep` (`rg`) for fast repo search when available. Install with `brew install ripgrep` if missing and setup installation is approved.
