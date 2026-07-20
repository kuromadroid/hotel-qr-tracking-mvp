-- このSQLはSupabaseの「SQL Editor」で実行してください。
-- 読み取り専用(SELECT)のみで、データやDB設定を一切変更しません。
-- 実行結果をコピーしてこちらに貼り付けてもらえれば、
-- supabase_schema.sql を実際の設定に合わせて修正します。

-- 1) public スキーマの全テーブルの一覧とRLS有効状況
select
  schemaname,
  tablename,
  rowsecurity as rls_enabled
from pg_tables
where schemaname = 'public'
order by tablename;

-- 2) public スキーマの全RLSポリシー(events, shops, qr_routes 含む)
select
  schemaname,
  tablename,
  policyname,
  roles,
  cmd,
  qual,
  with_check
from pg_policies
where schemaname = 'public'
order by tablename, policyname;

-- 3) is_admin() 関数の定義(admin.html / analytics.html が使用)
select
  proname,
  pg_get_functiondef(oid) as definition
from pg_proc
where proname = 'is_admin';

-- 4) shops / qr_routes の実際のカラム定義
select
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
from information_schema.columns
where table_schema = 'public'
  and table_name in ('shops', 'qr_routes', 'events')
order by table_name, ordinal_position;

-- 5) storage.objects (shop-images バケット)のRLSポリシー
select
  schemaname,
  tablename,
  policyname,
  roles,
  cmd,
  qual,
  with_check
from pg_policies
where schemaname = 'storage'
order by tablename, policyname;

-- 6) storage バケット一覧と公開設定
select id, name, public, file_size_limit, allowed_mime_types
from storage.buckets;
