// Supabase設定
// Supabase Project Settings > API から以下2つを貼り付ける。
// 注意: service_role / secret key は絶対に貼らない。公開用の anon public key / publishable key だけ使う。
window.SUPABASE_CONFIG = {
  url: "PASTE_SUPABASE_PROJECT_URL_HERE",
  anonKey: "PASTE_SUPABASE_ANON_PUBLIC_KEY_HERE"
};
