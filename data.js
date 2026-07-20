window.APP_DATA = {
  settings: {
    defaultLanguage: "ja",
    supportedLanguages: ["ja", "en", "zh-cn", "zh-tw", "ko"],
    fallbackLanguage: "ja"
  },

  hotels: {
    hotel_a: {
      name: {
        ja: "ホテルA",
        en: "Hotel A",
        "zh-cn": "酒店A",
        "zh-tw": "飯店A",
        ko: "호텔 A"
      }
    },

    hotel_b: {
      name: {
        ja: "ホテルB",
        en: "Hotel B",
        "zh-cn": "酒店B",
        "zh-tw": "飯店B",
        ko: "호텔 B"
      }
    }
  }

  // 注記: 以前ここにあった `shops` オブジェクト(店舗の多言語紹介文)は
  // 削除しました。index.html の実際の店舗情報取得は
  // fetchShopFromSupabase() 経由でSupabaseの `shops` テーブルからのみ
  // 行われており、このファイルの shops オブジェクトは参照されて
  // いなかったため(二重管理・デッドコードでした)。
  // 店舗の追加・編集はSupabaseの `shops` テーブル側で行ってください。
};
