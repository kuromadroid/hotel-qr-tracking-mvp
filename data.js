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
  },

  shops: {
    minato: {
      enabled: true,

      media: {
        hero: "",
        gallery: []
      },

      content: {
        ja: {
          name: "北海炉端 みなと",
          category: "海鮮居酒屋",
          catchcopy: "北海道の海と地酒を、一度に楽しむ。",
          description:
            "北海道産の海鮮や地酒を楽しめる海鮮居酒屋です。観光や出張で札幌を訪れた方にもおすすめです。",
          area: "札幌駅・大通周辺",
          access: "ホテルから徒歩7分",
          price: "夜 4,000〜6,000円",
          hours: "17:00〜23:00",
          closed: "不定休",
          tags: [
            "海鮮",
            "刺身",
            "北海道地酒",
            "英語メニュー",
            "カード可"
          ]
        },

        en: {
          name: "Hokkai Robata Minato",
          category: "Seafood Izakaya",
          catchcopy: "Enjoy Hokkaido seafood and local sake.",
          description:
            "A seafood izakaya serving fresh Hokkaido seafood and local sake. Recommended for tourists and business travelers visiting Sapporo.",
          area: "Sapporo Station and Odori area",
          access: "7-minute walk from the hotel",
          price: "Dinner: ¥4,000–¥6,000",
          hours: "5:00 PM–11:00 PM",
          closed: "Irregular holidays",
          tags: [
            "Seafood",
            "Sashimi",
            "Hokkaido sake",
            "English menu",
            "Cards accepted"
          ]
        },

        "zh-cn": {
          name: "北海炉端 Minato",
          category: "海鲜居酒屋",
          catchcopy: "尽享北海道海鲜与当地清酒。",
          description:
            "这是一家可以品尝北海道海鲜和当地清酒的居酒屋，适合来札幌旅游或出差的客人。",
          area: "札幌站、大通地区",
          access: "从酒店步行7分钟",
          price: "晚餐：4,000～6,000日元",
          hours: "17:00～23:00",
          closed: "不定期休息",
          tags: [
            "海鲜",
            "刺身",
            "北海道清酒",
            "英文菜单",
            "可使用信用卡"
          ]
        },

        "zh-tw": {
          name: "北海爐端 Minato",
          category: "海鮮居酒屋",
          catchcopy: "盡享北海道海鮮與當地清酒。",
          description:
            "這是一間可以品嚐北海道海鮮及當地清酒的居酒屋，適合到札幌旅遊或出差的旅客。",
          area: "札幌站、大通地區",
          access: "從飯店步行7分鐘",
          price: "晚餐：4,000～6,000日圓",
          hours: "17:00～23:00",
          closed: "不定期休息",
          tags: [
            "海鮮",
            "生魚片",
            "北海道清酒",
            "英文菜單",
            "可使用信用卡"
          ]
        },

        ko: {
          name: "홋카이 로바타 미나토",
          category: "해산물 이자카야",
          catchcopy: "홋카이도 해산물과 지역 사케를 한 번에.",
          description:
            "홋카이도의 신선한 해산물과 지역 사케를 즐길 수 있는 이자카야입니다. 삿포로 관광객과 출장객에게 추천합니다.",
          area: "삿포로역·오도리 지역",
          access: "호텔에서 도보 7분",
          price: "저녁: 4,000～6,000엔",
          hours: "17:00～23:00",
          closed: "부정기 휴무",
          tags: [
            "해산물",
            "사시미",
            "홋카이도 사케",
            "영어 메뉴",
            "카드 결제 가능"
          ]
        }
      },

      actions: {
        reservation: {
          enabled: true,
          url: "reservation_mock.html"
        },

        map: {
          enabled: true,
          url: ""
        },

        instagram: {
          enabled: false,
          url: ""
        },

        phone: {
          enabled: true,
          value: "011-000-0000"
        },

        website: {
          enabled: false,
          url: ""
        }
      },

      coupon: {
        enabled: true,
        code: "HOTELMAP",

        text: {
          ja: "ホテルマップ提示で会計5％OFF",
          en: "Show this page to receive 5% off",
          "zh-cn": "出示本页面可享受结账95折",
          "zh-tw": "出示本頁面可享結帳95折",
          ko: "이 페이지를 제시하면 결제 금액 5% 할인"
        }
      },

      hotelOverrides: {
        hotel_a: {},
        hotel_b: {}
      }
    },
  ramen_sora: {
      enabled: true,

      media: {
        hero: "",
        gallery: []
      },

      content: {
        ja: {
          name: "札幌らーめん 空",
          category: "札幌味噌ラーメン",
          catchcopy: "濃厚な味噌と香ばしい炒め野菜。",
          description:
            "札幌らしい濃厚な味噌スープを楽しめるラーメン店です。観光の合間や夕食後の一杯にもおすすめです。",
          area: "すすきの周辺",
          access: "ホテルから徒歩5分",
          price: "1,000〜1,500円",
          hours: "11:00〜翌1:00",
          closed: "不定休",
          tags: [
            "味噌ラーメン",
            "札幌名物",
            "深夜営業",
            "カウンター席"
          ]
        },

        en: {
          name: "Sapporo Ramen Sora",
          category: "Sapporo Miso Ramen",
          catchcopy: "Rich miso broth with aromatic vegetables.",
          description:
            "A ramen restaurant serving rich Sapporo-style miso ramen.",
          area: "Susukino area",
          access: "5-minute walk from the hotel",
          price: "¥1,000–¥1,500",
          hours: "11:00 AM–1:00 AM",
          closed: "Irregular holidays",
          tags: [
            "Miso ramen",
            "Sapporo specialty",
            "Open late",
            "Counter seats"
          ]
        }
      },

      actions: {
        reservation: {
          enabled: false,
          url: ""
        },

        map: {
          enabled: false,
          url: ""
        },

        instagram: {
          enabled: false,
          url: ""
        },

        phone: {
          enabled: true,
          value: "011-111-1111"
        },

        website: {
          enabled: false,
          url: ""
        }
      },

      coupon: {
        enabled: false,
        code: "",
        text: {}
      },

      hotelOverrides: {
        hotel_a: {},
        hotel_b: {}
      }
    }
  }
};
