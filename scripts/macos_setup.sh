#!/usr/bin/env bash
set -euo pipefail

INSTALL=0
if [[ "${1:-}" == "--install" ]]; then
  INSTALL=1
fi

missing=()
warnings=()

have() {
  command -v "$1" >/dev/null 2>&1
}

print_version() {
  local label="$1"
  shift
  if "$@" >/tmp/agent-workflow-version.out 2>/tmp/agent-workflow-version.err; then
    printf "%s: %s
" "$label" "$(head -n 1 /tmp/agent-workflow-version.out)"
  else
    printf "%s: installed, version check failed
" "$label"
  fi
}

need() {
  local cmd="$1"
  local label="$2"
  local install_hint="$3"
  if have "$cmd"; then
    print_version "$label" "$cmd" --version
  else
    printf "%s: missing
" "$label"
    missing+=("$label|$install_hint")
  fi
}

printf "architecture: %s
" "$(uname -m)"

if xcode-select -p >/tmp/agent-workflow-xcode.out 2>/dev/null; then
  printf "xcode command line tools: %s
" "$(cat /tmp/agent-workflow-xcode.out)"
else
  printf "xcode command line tools: missing
"
  missing+=("Xcode Command Line Tools|xcode-select --install")
fi

if have brew; then
  print_version "homebrew" brew --version
else
  printf "homebrew: missing
"
  missing+=("Homebrew|install from https://brew.sh")
fi

need git git "brew install git"
need rg ripgrep "brew install ripgrep"
need gh "github cli" "brew install gh"

if have gh; then
  if gh auth status >/tmp/agent-workflow-gh-auth.out 2>/tmp/agent-workflow-gh-auth.err; then
    printf "github cli auth: ok
"
  else
    printf "github cli auth: not logged in
"
    warnings+=("GitHub CLI auth|run gh auth login")
  fi
fi

need node node "brew install node"
need npm npm "comes with node"
need python3 python3 "brew install python"

if have python3; then
  if python3 - <<'PYSQL' >/tmp/agent-workflow-sqlite.out 2>/tmp/agent-workflow-sqlite.err
import sqlite3
con = sqlite3.connect(':memory:')
con.execute("create virtual table docs using fts5(content)")
print(f"python sqlite: {sqlite3.sqlite_version} with fts5")
PYSQL
  then
    cat /tmp/agent-workflow-sqlite.out
  else
    printf "python sqlite/fts5: missing
"
    missing+=("Python sqlite3/FTS5|brew install python")
  fi
fi

if [[ ${#warnings[@]} -gt 0 ]]; then
  printf "
setup warnings:
"
  for item in "${warnings[@]}"; do
    IFS='|' read -r label hint <<< "$item"
    printf -- "- %s: %s
" "$label" "$hint"
  done
fi

if [[ ${#missing[@]} -eq 0 ]]; then
  if [[ ${#warnings[@]} -eq 0 ]]; then
    printf "macos setup check ok
"
  fi
  exit 0
fi

printf "
missing tools:
"
for item in "${missing[@]}"; do
  IFS='|' read -r label hint <<< "$item"
  printf -- "- %s: %s
" "$label" "$hint"
done

if [[ "$INSTALL" -eq 0 ]]; then
  printf "
Run npm run setup:macos:install after reviewing the list.
"
  printf "Xcode Command Line Tools and Homebrew may require interactive installation.
"
  exit 1
fi

if ! have brew; then
  printf "Homebrew is missing. Install Homebrew first from https://brew.sh, then rerun this command.
"
  exit 1
fi

for item in "${missing[@]}"; do
  IFS='|' read -r label hint <<< "$item"
  case "$label" in
    git) brew install git ;;
    ripgrep) brew install ripgrep ;;
    "github cli") brew install gh ;;
    node) brew install node ;;
    python3|"Python sqlite3/FTS5") brew install python ;;
    npm) true ;;
    "Xcode Command Line Tools") xcode-select --install ;;
    Homebrew) true ;;
    *) printf "manual install needed for %s: %s
" "$label" "$hint" ;;
  esac
done
