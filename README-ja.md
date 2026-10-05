# Agent Workflow Starter — 日本語

AIを使った文章作成、教材、調査、ドキュメント、スクリプト、小規模プロジェクトを、無駄に複雑化せず進めるための公開スターターリポジトリです。標準では Claude / Claude Code を使いますが、ファイルを確認・編集し、チェックを実行できる他のAIエージェントにも適用できます。

目的は、明確なゴールを「範囲が限定され、レビューでき、再開できる成果物」に変えることです。

## 日本語ガイド

GitHub Pages の日本語版:

https://logohere.github.io/agent-workflow-starter/index-ja.html

英語版:

https://logohere.github.io/agent-workflow-starter/

## 最初に見るもの

- `index-ja.html`: 日本語版 GitHub Pages ガイド
- `human-guide-ja.html`: 日本語版ガイドのローカルコピー
- `README-ja.md`: この日本語概要
- `index.html`: 英語版 GitHub Pages ガイド
- `CLAUDE.md`: Claude Code 用の簡潔なプロジェクト指示
- `agent-ops.md`: AIエージェントの標準作業手順
- `bootstrap/bootstrap.md`: 初回セットアップの順序
- `.github/`: Issue、Pull Request テンプレート、CI
- `templates/`: Issue、PR、引き継ぎ、プロジェクト文書のテンプレート
- `scripts/`: ローカルチェックとユーティリティ
- `advanced/README.md`: 上級モジュール一覧

## 学習の順序

3段階で進めます。

```text
Part 1: 基本 — ゴール、ファイル、AIとの役割分担、コンテキスト管理、トークン最適化、引き継ぎ
Part 2: 次の段階 — GitHubワークフロー、チェック、実装計画、小スクリプト、macOSセットアップ、SQLite検索
Part 3: 上級 — atomic design、Dotdog、hooks、worktrees、agent skills、ブラウザ自動化、hosting、vector search
```

まず Part 1 だけ使います。必要になったら Part 2 を追加し、Part 3 は任意です。

## 基本フロー

```text
GitHub Pages ガイドを開く
→ リポジトリを clone または fork
→ ローカルで開く
→ Claude Code にリポジトリを確認させる
→ セットアップ結果をレビュー
→ 必要なものだけカスタマイズ
→ Issue / branch / PR / checks / handoff で変更を管理
```

## Claude Code に最初に渡すプロンプト

```text
この Agent Workflow Starter リポジトリをセットアップしてください。
README.md、CLAUDE.md、index.html、human-guide.html、agent-ops.md、bootstrap/bootstrap.md を読んでください。
変更前に現在の状態を確認してください。
ローカルで動かすために必要なものだけ準備してください。
関連するチェックを実行してください。
dotfiles、hooks、GitHub workflows、公開設定、依存関係、DB schema、アカウント設定は承認なしに変更しないでください。
最後に、存在するもの、変更したもの、実行したチェック、レビューすべきもの、次の候補をまとめてください。
```

## 標準ワークフロー

```text
Goal
→ Inspect
→ Implementation Plan
→ Issue
→ Handoff
→ Branch
→ Execute
→ Verify
→ Pull Request
→ Review
→ Merge
→ Final Handoff
```

計画や目的整理には Claude Web / Desktop、リポジトリ内の実作業には Claude Code、履歴・レビュー・CI・マージ判断には GitHub を使います。

## AIとの役割分担

AIは速いですが、判断そのものを任せる対象ではありません。

AIに向く作業:

- 下書き
- 整理
- 検索
- 比較
- 要約
- 小さなスクリプト
- 反復作業
- チェック

人間が持つもの:

- 目的
- 優先順位
- 品質基準
- 最終判断
- 承認
- レビュー

AIが判断した場合は、「根拠は何か」「どのトレードオフを選んだか」「どの前提が変われば答えも変わるか」を確認します。

## コンテキスト管理

長いチャットは古い前提やノイズを残します。混乱し始めたら、会話を伸ばさず引き継ぎを書きます。

```text
Goal:
Current state:
Decisions:
Files touched:
Commands run:
Checks passing/failing:
Next action:
Open questions:
```

新しいセッションは、曖昧なチャット記憶ではなく、ファイル、Issue、PR、チェック、引き継ぎから開始します。

## トークン最適化

```text
検索してから読む
必要なファイル・セクションだけ読む
全文より差分を優先
長い会話より引き継ぎ
同じ検索が増えたらローカルSQLiteを検討
ソースファイルを正とする
```

## 実行前に確認する質問

```text
何が抜けている？
何が壊れる可能性がある？
どの前提が間違っている可能性がある？
範囲が広すぎる部分は？
何に依存している？
今回は延期すべきものは？
承認が必要なものは？
最小の有用な変更は何？
```

## チェック

変更後は必要なチェックを実行します。

```text
npm run lint
npm run test
npm run smoke
npm run validate
npm run doctor
```

## 原則

最初は単純にします。時間を節約する、作業のズレを減らす、レビューしやすくする場合にだけ複雑さを追加します。
