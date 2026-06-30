# ホテルQR計測 Supabase MVP

## 目的

スマホでホテルA/BのQRを読み取る
→ 自社ページが開く
→ Supabaseにイベント保存
→ PCのレポート画面で数字が増える

ここまでを検証するための静的サイトです。

## ファイル

- `index.html`：QRから開く店舗紹介ページ
- `report.html`：Supabaseからイベントを読み込むレポート画面
- `reservation_mock.html`：仮予約ページ
- `demo_links.html`：ホテルA/Bの仮URL一覧
- `config.js`：Supabase URL / anon key を貼るファイル
- `supabase_schema.sql`：Supabase SQL Editorで実行するSQL

## 手順

1. Supabaseで新規プロジェクトを作る
2. SQL Editorで `supabase_schema.sql` を実行
3. Project URL と anon public key / publishable key を確認
4. `config.js` に貼る
5. GitHubにこの一式をアップ
6. VercelでGitHubリポジトリをImportしてDeploy
7. 公開URLを使ってQRを作る
8. スマホでQRを読む
9. `report.html`で数字が増えるのを確認

## 注意

`service_role` や `secret key` は絶対にブラウザ側に貼らないでください。
このMVPはデモ用にanonのinsert/selectを許可しています。本番では管理画面閲覧を認証付きにするなど、RLSを絞る必要があります。
