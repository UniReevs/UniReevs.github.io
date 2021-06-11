let fashionNames = {
  tops: [],
  bottoms: [],
  dresses: [],
  headwear: [],
  swimwear: [],
  caps: [],
  helmets: [],
  accessories: [],
  socks: [],
  shoes: [],
  bags: [],
  Umbrellas: []
}

fashionNames.tops = [
  {
    "label": "6",
    "en": "striped shirt",
    "jp": "ボーダーＴシャツ"
  },
  {
    "label": "8",
    "en": "mountain parka",
    "jp": "マウンテンパーカー"
  },
  {
    "label": "13",
    "en": "peacoat",
    "jp": "ダッフルコート"
  },
  {
    "label": "18",
    "en": "trench coat",
    "jp": "トレンチコート"
  },
  {
    "label": "19",
    "en": "kung-fu tee",
    "jp": "カンフーなふく"
  },
  {
    "label": "21",
    "en": "letter jacket",
    "jp": "スタジャン"
  },
  {
    "label": "22",
    "en": "three-ball tee",
    "jp": "３ばんだまのふく"
  },
  {
    "label": "23",
    "en": "two-ball tee",
    "jp": "２ばんだまのふく"
  },
  {
    "label": "25",
    "en": "layered tank",
    "jp": "シンプルフリルキャミソール"
  },
  {
    "label": "26",
    "en": "silk shirt",
    "jp": "チャイナふく"
  },
  {
    "label": "27",
    "en": "raglan shirt",
    "jp": "ラグランＴシャツ"
  },
  {
    "label": "33",
    "en": "basketball tank",
    "jp": "バスケシャツ"
  },
  {
    "label": "35",
    "en": "hand-knit tank",
    "jp": "ノースリーブのニット"
  },
  {
    "label": "37",
    "en": "down jacket",
    "jp": "ダウンジャケット"
  },
  {
    "label": "40",
    "en": "dress shirt",
    "jp": "ワイシャツ"
  },
  {
    "label": "42",
    "en": "sailor's tee",
    "jp": "はんそでセーラーふく"
  },
  {
    "label": "43",
    "en": "simple parka",
    "jp": "シンプルなパーカー"
  },
  {
    "label": "44",
    "en": "kids' smock",
    "jp": "スモック"
  },
  {
    "label": "56",
    "en": "graduation gown",
    "jp": "がくしのふく"
  },
  {
    "label": "59",
    "en": "short-sleeve dress shirt",
    "jp": "はんそでワイシャツ"
  },
  {
    "label": "60",
    "en": "sleeveless dress shirt",
    "jp": "ノースリーブえりつきシャツ"
  },
  {
    "label": "62",
    "en": "sea captain's coat",
    "jp": "かいぞくのコート"
  },
  {
    "label": "64",
    "en": "hanten jacket",
    "jp": "はんてん"
  },
  {
    "label": "70",
    "en": "raincoat",
    "jp": "レインコート"
  },
  {
    "label": "71",
    "en": "noble coat",
    "jp": "きぞくのコート"
  },
  {
    "label": "72",
    "en": "polo shirt",
    "jp": "ポロシャツ"
  },
  {
    "label": "73",
    "en": "doctor's coat",
    "jp": "はくい"
  },
  {
    "label": "74",
    "en": "chef's outfit",
    "jp": "コックさんのふく"
  },
  {
    "label": "75",
    "en": "café uniform",
    "jp": "カフェのせいふく"
  },
  {
    "label": "76",
    "en": "gym tee",
    "jp": "たいそうふく"
  },
  {
    "label": "77",
    "en": "tank",
    "jp": "タンクトップ"
  },
  {
    "label": "78",
    "en": "comedian's outfit",
    "jp": "コメディアンなふく"
  },
  {
    "label": "79",
    "en": "biker jacket",
    "jp": "ライダースジャケット"
  },
  {
    "label": "80",
    "en": "garden tank",
    "jp": "はながらのプリントキャミ"
  },
  {
    "label": "81",
    "en": "denim jacket",
    "jp": "デニムジャケット"
  },
  {
    "label": "82",
    "en": "rubber apron",
    "jp": "ゴムエプロン"
  },
  {
    "label": "83",
    "en": "fishing vest",
    "jp": "つりジャケット"
  },
  {
    "label": "84",
    "en": "faux-shearling coat",
    "jp": "ムートンコート"
  },
  {
    "label": "85",
    "en": "flannel shirt",
    "jp": "ネルシャツ"
  },
  {
    "label": "86",
    "en": "denim vest",
    "jp": "そでなしＧジャン"
  },
  {
    "label": "87",
    "en": "apron",
    "jp": "エプロン"
  },
  {
    "label": "88",
    "en": "military uniform",
    "jp": "へいたいのふく"
  },
  {
    "label": "90",
    "en": "cavalier shirt",
    "jp": "じゅうきしのふく"
  },
  {
    "label": "91",
    "en": "pineapple aloha shirt",
    "jp": "パインがらアロハシャツ"
  },
  {
    "label": "92",
    "en": "lacy tank",
    "jp": "レースのキャミソール"
  },
  {
    "label": "93",
    "en": "athletic jacket",
    "jp": "ジャージ"
  },
  {
    "label": "94",
    "en": "western shirt",
    "jp": "ウェスタンなふく"
  },
  {
    "label": "95",
    "en": "relay tank",
    "jp": "えきでんなふく"
  },
  {
    "label": "96",
    "en": "silk floral-print shirt",
    "jp": "はんそでチャイナふく"
  },
  {
    "label": "97",
    "en": "soccer-uniform top",
    "jp": "サッカーのユニフォーム"
  },
  {
    "label": "98",
    "en": "tiger jacket",
    "jp": "トラのスカジャン"
  },
  {
    "label": "99",
    "en": "happi tee",
    "jp": "はっぴ"
  },
  {
    "label": 100,
    "en": "dragon jacket",
    "jp": "ドラゴンのスカジャン"
  },
  {
    "label": 1005,
    "en": "MVP tee",
    "jp": "ＭＶＰなＴシャツ"
  },
  {
    "label": 1006,
    "en": "No. 1 shirt",
    "jp": "No.1のふく"
  },
  {
    "label": 101,
    "en": "camo tee",
    "jp": "めいさいなふく"
  },
  {
    "label": 102,
    "en": "cycling shirt",
    "jp": "サイクルジャージ"
  },
  {
    "label": 1021,
    "en": "danger tank",
    "jp": "デンジャラスなタンクトップ"
  },
  {
    "label": 1022,
    "en": "heart sweater",
    "jp": "ハートのセーター"
  },
  {
    "label": 1023,
    "en": "tree sweater",
    "jp": "きのセーター"
  },
  {
    "label": 1024,
    "en": "frog tee",
    "jp": "かえるのＴシャツ"
  },
  {
    "label": 1025,
    "en": "bear tee",
    "jp": "くまのＴシャツ"
  },
  {
    "label": 1026,
    "en": "rabbit tee",
    "jp": "うさぎのＴシャツ"
  },
  {
    "label": 1027,
    "en": "animal-stripes tee",
    "jp": "しましまＴシャツ"
  },
  {
    "label": 1028,
    "en": "leopard tee",
    "jp": "ヒョウがらＴシャツ"
  },
  {
    "label": 1029,
    "en": "bone tee",
    "jp": "ボーンなＴシャツ"
  },
  {
    "label": 103,
    "en": "chick tee",
    "jp": "ひよこがらＴシャツ"
  },
  {
    "label": 1030,
    "en": "misty tee",
    "jp": "かすみのふく"
  },
  {
    "label": 1031,
    "en": "marble-dots tee",
    "jp": "マーブルドットのＴシャツ"
  },
  {
    "label": 1032,
    "en": "simple-dots tee",
    "jp": "シンプルドットのＴシャツ"
  },
  {
    "label": 1033,
    "en": "zigzag shirt",
    "jp": "ギザギザのＴシャツ"
  },
  {
    "label": 1034,
    "en": "blossom tee",
    "jp": "はながらのＴシャツ"
  },
  {
    "label": 1035,
    "en": "bold aloha shirt",
    "jp": "ポリネシアンなアロハ"
  },
  {
    "label": 1036,
    "en": "spider-web tee",
    "jp": "スパイダーなＴシャツ"
  },
  {
    "label": 1037,
    "en": "skull tee",
    "jp": "ドクロＴシャツ"
  },
  {
    "label": 1038,
    "en": "A tee",
    "jp": "エースのＴシャツ"
  },
  {
    "label": 1046,
    "en": "starry tank",
    "jp": "ほしがらタンクトップ"
  },
  {
    "label": 1047,
    "en": "flame tee",
    "jp": "ファイアーなＴシャツ"
  },
  {
    "label": 1056,
    "en": "Mom's hand-knit sweater",
    "jp": "ははのてあみセーター"
  },
  {
    "label": 1057,
    "en": "Mom's handmade apron",
    "jp": "ははのてづくりエプロン"
  },
  {
    "label": 1058,
    "en": "simple knit sweater",
    "jp": "シンプルなニット"
  },
  {
    "label": 106,
    "en": "argyle vest",
    "jp": "アーガイルベスト"
  },
  {
    "label": 1062,
    "en": "viking top",
    "jp": "バイキングのふく"
  },
  {
    "label": 1063,
    "en": "dotted raincoat",
    "jp": "みずたまレインコート"
  },
  {
    "label": 1066,
    "en": "diner apron",
    "jp": "ダイナーのエプロン"
  },
  {
    "label": 107,
    "en": "explorer shirt",
    "jp": "たんけんふく"
  },
  {
    "label": 1072,
    "en": "printed layered shirt",
    "jp": "かさねぎプリントＴシャツ"
  },
  {
    "label": 1074,
    "en": "printed-sleeve sweater",
    "jp": "アームプリントＴシャツ"
  },
  {
    "label": 1078,
    "en": "plaid puffed-sleeve shirt",
    "jp": "ブロックチェックのパフスリーブ"
  },
  {
    "label": 1079,
    "en": "dolly shirt",
    "jp": "ドーリーシャツ"
  },
  {
    "label": 108,
    "en": "flashy jacket",
    "jp": "ハデなジャケット"
  },
  {
    "label": 1081,
    "en": "work apron",
    "jp": "ワークエプロン"
  },
  {
    "label": 1082,
    "en": "botanical tee",
    "jp": "ボタニカルＴシャツ"
  },
  {
    "label": 1083,
    "en": "groovy shirt",
    "jp": "サイケデリックシャツ"
  },
  {
    "label": 109,
    "en": "work shirt",
    "jp": "ネクタイつきワイシャツ"
  },
  {
    "label": 110,
    "en": "sushi chef's outfit",
    "jp": "いたまえのふく"
  },
  {
    "label": 111,
    "en": "emblem blazer",
    "jp": "ブレザー"
  },
  {
    "label": 112,
    "en": "royal shirt",
    "jp": "おうさまのふく"
  },
  {
    "label": 1126,
    "en": "Labelle knit shirt",
    "jp": "ケイトのカットソー"
  },
  {
    "label": 1127,
    "en": "Labelle coat",
    "jp": "ケイトのコート"
  },
  {
    "label": 1140,
    "en": "Nook Inc. blouson",
    "jp": "たぬきかいはつブルゾン"
  },
  {
    "label": 1141,
    "en": "Nook Inc. aloha shirt",
    "jp": "たぬきかいはつアロハ"
  },
  {
    "label": 1146,
    "en": "big-star tee",
    "jp": "いちばんぼしのふく"
  },
  {
    "label": 1149,
    "en": "Nook Inc. tee",
    "jp": "たぬきかいはつＴシャツ"
  },
  {
    "label": 1151,
    "en": "bug aloha shirt",
    "jp": "インセクトアロハ"
  },
  {
    "label": 1152,
    "en": "fish-print tee",
    "jp": "さかなＴシャツ"
  },
  {
    "label": 1154,
    "en": "terry-cloth nightgown",
    "jp": "もこもこナイトガウン"
  },
  {
    "label": 1160,
    "en": "plushie-muffler coat",
    "jp": "ぬいぐるみマフラーつきコート"
  },
  {
    "label": 1165,
    "en": "No. 2 shirt",
    "jp": "No.2のふく"
  },
  {
    "label": 1166,
    "en": "No. 3 shirt",
    "jp": "No.3のふく"
  },
  {
    "label": 1167,
    "en": "No. 4 shirt",
    "jp": "No.4のふく"
  },
  {
    "label": 1168,
    "en": "konnichiwa tee",
    "jp": "こんにちはＴシャツ"
  },
  {
    "label": 1169,
    "en": "bonjour tee",
    "jp": "ボンジュールＴシャツ"
  },
  {
    "label": 1170,
    "en": "hello tee",
    "jp": "ハローＴシャツ"
  },
  {
    "label": 1171,
    "en": "annyeong tee",
    "jp": "アンニョンＴシャツ"
  },
  {
    "label": 1172,
    "en": "ni hao tee",
    "jp": "ニーハオＴシャツ"
  },
  {
    "label": 1173,
    "en": "hallo tee",
    "jp": "ハーローＴシャツ"
  },
  {
    "label": 1174,
    "en": "ciao tee",
    "jp": "チャオＴシャツ"
  },
  {
    "label": 1175,
    "en": "hola tee",
    "jp": "オラＴシャツ"
  },
  {
    "label": 1176,
    "en": "privét tee",
    "jp": "プリヴェＴシャツ"
  },
  {
    "label": 1177,
    "en": "hi tee",
    "jp": "ハイＴシャツ"
  },
  {
    "label": 1178,
    "en": "hoi tee",
    "jp": "ホーイＴシャツ"
  },
  {
    "label": 1179,
    "en": "DAL tee",
    "jp": "ＤＡＬのＴシャツ"
  },
  {
    "label": 1180,
    "en": "DAL apron",
    "jp": "ＤＡＬエプロン"
  },
  {
    "label": 1181,
    "en": "DAL pilot jacket",
    "jp": "ＤＡＬのＭＡ‐１"
  },
  {
    "label": 1193,
    "en": "OK Motors jacket",
    "jp": "OKモータースジャケット"
  },
  {
    "label": 1194,
    "en": "camper tee",
    "jp": "キャンパーのTシャツ"
  },
  {
    "label": 1220,
    "en": "handmade cape",
    "jp": "てづくりのマント"
  },
  {
    "label": 1246,
    "en": "midwinter sweater",
    "jp": "まふゆのセーター"
  },
  {
    "label": 1256,
    "en": "coral Nook Inc. aloha shirt",
    "jp": "たぬきかいはつアロハ・コーラル"
  },
  {
    "label": 1257,
    "en": "green Nook Inc. aloha shirt",
    "jp": "たぬきかいはつアロハ・グリーン"
  },
  {
    "label": 1280,
    "en": "Hello Kitty tee",
    "jp": "ハローキティなTシャツ"
  },
  {
    "label": 1285,
    "en": "Kiki & Lala tee",
    "jp": "キキ&ララなTシャツ"
  },
  {
    "label": 1289,
    "en": "Pompompurin tee",
    "jp": "ポムポムプリンなTシャツ"
  },
  {
    "label": 1291,
    "en": "Cinnamoroll jacket",
    "jp": "シナモロールなジャケット"
  },
  {
    "label": 1294,
    "en": "Kerokerokeroppi tank top",
    "jp": "けろけろけろっぴなノースリーブ"
  },
  {
    "label": 130,
    "en": "color-block dress shirt",
    "jp": "ツートンのエリつきシャツ"
  },
  {
    "label": 1305,
    "en": "Cinnamoroll puffy blouse",
    "jp": "シナモロールなパフブラウス"
  },
  {
    "label": 131,
    "en": "one-ball tee",
    "jp": "１ばんだまのふく"
  },
  {
    "label": 132,
    "en": "four-ball tee",
    "jp": "４ばんだまのふく"
  },
  {
    "label": 133,
    "en": "five-ball tee",
    "jp": "５ばんだまのふく"
  },
  {
    "label": 1333,
    "en": "My Melody shirt",
    "jp": "マイメロディなシャツ"
  },
  {
    "label": 134,
    "en": "six-ball tee",
    "jp": "６ばんだまのふく"
  },
  {
    "label": 135,
    "en": "seven-ball tee",
    "jp": "７ばんだまのふく"
  },
  {
    "label": 136,
    "en": "eight-ball tee",
    "jp": "８ばんだまのふく"
  },
  {
    "label": 137,
    "en": "nine-ball tee",
    "jp": "９ばんだまのふく"
  },
  {
    "label": 1378,
    "en": "thank-you Dad apron",
    "jp": "ちちのひサンキューエプロン"
  },
  {
    "label": 138,
    "en": "sweater on shirt",
    "jp": "トレンディーなふく"
  },
  {
    "label": 139,
    "en": "track jacket",
    "jp": "スポーツジャージ"
  },
  {
    "label": 143,
    "en": "waistcoat",
    "jp": "ベストつきワイシャツ"
  },
  {
    "label": 147,
    "en": "nurse's jacket",
    "jp": "かんごしのジャケット"
  },
  {
    "label": 151,
    "en": "striped tank",
    "jp": "ボーダーのタンクトップ"
  },
  {
    "label": 156,
    "en": "tuxedo jacket",
    "jp": "タキシード"
  },
  {
    "label": 157,
    "en": "Santa coat",
    "jp": "サンタのジャケット"
  },
  {
    "label": 159,
    "en": "morning coat",
    "jp": "モーニングコート"
  },
  {
    "label": 177,
    "en": "tailored jacket",
    "jp": "テーラードジャケット"
  },
  {
    "label": 179,
    "en": "sweater-vest",
    "jp": "チョッキつきワイシャツ"
  },
  {
    "label": 191,
    "en": "kanji tee",
    "jp": "かんじＴシャツ"
  },
  {
    "label": 194,
    "en": "cardigan-shirt combo",
    "jp": "カーディガン&シャツ"
  },
  {
    "label": 195,
    "en": "argyle sweater",
    "jp": "アーガイルのセーター"
  },
  {
    "label": 196,
    "en": "flower sweater",
    "jp": "はながらのニット"
  },
  {
    "label": 197,
    "en": "tennis sweater",
    "jp": "テニスセーター"
  },
  {
    "label": 206,
    "en": "yodel sweater",
    "jp": "ノルディックなセーター"
  },
  {
    "label": 207,
    "en": "snowy sweater",
    "jp": "スノーセーター"
  },
  {
    "label": 208,
    "en": "yodel cardigan",
    "jp": "ノルディックなカーディガン"
  },
  {
    "label": 209,
    "en": "Aran-knit sweater",
    "jp": "アランセーター"
  },
  {
    "label": 210,
    "en": "dreamy sweater",
    "jp": "ゆめかわなセーター"
  },
  {
    "label": 212,
    "en": "Aran-knit cardigan",
    "jp": "アランカーディガン"
  },
  {
    "label": 217,
    "en": "collarless coat",
    "jp": "ノーカラーコート"
  },
  {
    "label": 218,
    "en": "thick-stripes shirt",
    "jp": "ラガーシャツ"
  },
  {
    "label": 220,
    "en": "sweatshirt",
    "jp": "シンプルなトレーナー"
  },
  {
    "label": 222,
    "en": "henley shirt",
    "jp": "ヘンリーネックＴシャツ"
  },
  {
    "label": 223,
    "en": "gilet and shirt",
    "jp": "ジレコーデＴシャツ"
  },
  {
    "label": 224,
    "en": "vertical-stripes shirt",
    "jp": "オーバーストライプシャツ"
  },
  {
    "label": 225,
    "en": "coverall coat",
    "jp": "カバーオール"
  },
  {
    "label": 228,
    "en": "guayabera shirt",
    "jp": "キューバシャツ"
  },
  {
    "label": 229,
    "en": "short peacoat",
    "jp": "ピーコート"
  },
  {
    "label": 230,
    "en": "collarless shirt",
    "jp": "ノーカラーシャツ"
  },
  {
    "label": 231,
    "en": "heavy-duty shirt",
    "jp": "ワークシャツ"
  },
  {
    "label": 233,
    "en": "bowling shirt",
    "jp": "ボウリングシャツ"
  },
  {
    "label": 234,
    "en": "V-neck sweater",
    "jp": "Ｖネックセーター"
  },
  {
    "label": 237,
    "en": "boa fleece",
    "jp": "ボアフリース"
  },
  {
    "label": 238,
    "en": "tweed jacket",
    "jp": "ツイードジャケット"
  },
  {
    "label": 241,
    "en": "layered shirt",
    "jp": "かさねぎＴシャツ"
  },
  {
    "label": 242,
    "en": "lacy shirt",
    "jp": "レースのシャツ"
  },
  {
    "label": 243,
    "en": "chesterfield coat",
    "jp": "チェスターコート"
  },
  {
    "label": 244,
    "en": "checkered chesterfield coat",
    "jp": "チェックのチェスターコート"
  },
  {
    "label": 246,
    "en": "oversized shawl overshirt",
    "jp": "おおばんストールＴシャツ"
  },
  {
    "label": 249,
    "en": "young-royal shirt",
    "jp": "おうじさまシャツ"
  },
  {
    "label": 250,
    "en": "fitness tank",
    "jp": "フィットネスタンクトップ"
  },
  {
    "label": 251,
    "en": "flight jacket",
    "jp": "フライトジャケット"
  },
  {
    "label": 252,
    "en": "tie-dye shirt",
    "jp": "タイダイＴシャツ"
  },
  {
    "label": 253,
    "en": "fuzzy vest",
    "jp": "ボアベスト"
  },
  {
    "label": 254,
    "en": "quilted down jacket",
    "jp": "キルティングダウン"
  },
  {
    "label": 266,
    "en": "peasant blouse",
    "jp": "ペザントブラウス"
  },
  {
    "label": 271,
    "en": "tube top",
    "jp": "チューブトップ"
  },
  {
    "label": 281,
    "en": "muscle tank",
    "jp": "マッスルタンクトップ"
  },
  {
    "label": 284,
    "en": "striped tee",
    "jp": "はんそでボーダーＴシャツ"
  },
  {
    "label": 285,
    "en": "puffy vest",
    "jp": "ダウンベスト"
  },
  {
    "label": 288,
    "en": "nylon jacket",
    "jp": "コーチジャケット"
  },
  {
    "label": 289,
    "en": "gown coat",
    "jp": "ガウンコート"
  },
  {
    "label": 290,
    "en": "plover cardigan",
    "jp": "ちどりのカーディガン"
  },
  {
    "label": 292,
    "en": "pocket tee",
    "jp": "ポケットつきＴシャツ"
  },
  {
    "label": 298,
    "en": "tight-knit sweater",
    "jp": "スリムニット"
  },
  {
    "label": 300,
    "en": "college cardigan",
    "jp": "カレッジカーディガン"
  },
  {
    "label": 303,
    "en": "front-tie tee",
    "jp": "まえむすびＴシャツ"
  },
  {
    "label": 306,
    "en": "gold-print tee",
    "jp": "ゴールドプリントＴシャツ"
  },
  {
    "label": 316,
    "en": "text shirt",
    "jp": "えいじＴシャツ"
  },
  {
    "label": 319,
    "en": "hawk jacket",
    "jp": "タカのスカジャン"
  },
  {
    "label": 326,
    "en": "business suitcoat",
    "jp": "スーツ"
  },
  {
    "label": 328,
    "en": "school jacket",
    "jp": "がくせいふく"
  },
  {
    "label": 329,
    "en": "after-school jacket",
    "jp": "ヤンチャながくせいふく"
  },
  {
    "label": 330,
    "en": "poncho coat",
    "jp": "ポンチョコート"
  },
  {
    "label": 337,
    "en": "vampire costume",
    "jp": "ヴァンパイアのふく"
  },
  {
    "label": 341,
    "en": "bomber-style jacket",
    "jp": "ＭＡ‐１"
  },
  {
    "label": 342,
    "en": "camo bomber-style jacket",
    "jp": "めいさいのＭＡ‐１"
  },
  {
    "label": 346,
    "en": "sea hanten shirt",
    "jp": "うみのはんてん"
  },
  {
    "label": 350,
    "en": "faux-hair sweater",
    "jp": "モヘアふうニット"
  },
  {
    "label": 351,
    "en": "space parka",
    "jp": "スペースパーカー"
  },
  {
    "label": 352,
    "en": "baseball shirt",
    "jp": "ベースボールシャツ"
  },
  {
    "label": 353,
    "en": "parka undercoat",
    "jp": "パーカーオンコート"
  },
  {
    "label": 354,
    "en": "workout top",
    "jp": "ワークアウトトップス"
  },
  {
    "label": 355,
    "en": "mod parka",
    "jp": "モッズコート"
  },
  {
    "label": 356,
    "en": "tee-parka combo",
    "jp": "パーカーオンＴシャツ"
  },
  {
    "label": 360,
    "en": "heart apron",
    "jp": "ハートのエプロン"
  },
  {
    "label": 364,
    "en": "prince's tunic",
    "jp": "プリンスなふく"
  },
  {
    "label": 366,
    "en": "safety vest",
    "jp": "こうつうゆうどうのふく"
  },
  {
    "label": 367,
    "en": "tailcoat",
    "jp": "えんびふく"
  },
  {
    "label": 370,
    "en": "folk shirt",
    "jp": "ネイティブニット"
  },
  {
    "label": 371,
    "en": "football shirt",
    "jp": "アメフトシャツ"
  },
  {
    "label": 372,
    "en": "skiwear",
    "jp": "スキーウェア"
  },
  {
    "label": 388,
    "en": "animal-print coat",
    "jp": "フェイクアニマルコート"
  },
  {
    "label": 392,
    "en": "retro coat",
    "jp": "レトロなコート"
  },
  {
    "label": 400,
    "en": "hula top",
    "jp": "フラダンスなトップス"
  },
  {
    "label": 402,
    "en": "groovy tunic",
    "jp": "ヒッピーなふく"
  },
  {
    "label": 410,
    "en": "career jacket",
    "jp": "キャリアなジャケット"
  },
  {
    "label": 414,
    "en": "Chimayo vest",
    "jp": "チマヨベスト"
  },
  {
    "label": 423,
    "en": "kurta",
    "jp": "クルタ"
  },
  {
    "label": 425,
    "en": "pullover jacket",
    "jp": "プルオーバーアウター"
  },
  {
    "label": 428,
    "en": "tweed vest",
    "jp": "ツイードベスト"
  },
  {
    "label": 434,
    "en": "checkered muffler",
    "jp": "チェックマフラーつきセーター"
  },
  {
    "label": 438,
    "en": "hip-wrap shirt",
    "jp": "こしまきシャツ"
  },
  {
    "label": 440,
    "en": "sparkly embroidered tank",
    "jp": "ラメししゅうノースリーブ"
  },
  {
    "label": 443,
    "en": "pleather trench coat",
    "jp": "レザートレンチ"
  },
  {
    "label": 444,
    "en": "reindeer sweater",
    "jp": "トナカイセーター"
  },
  {
    "label": 445,
    "en": "front-tie button-down shirt",
    "jp": "まえむすびＹシャツ"
  },
  {
    "label": 447,
    "en": "top coat",
    "jp": "ステンカラーコート"
  },
  {
    "label": 448,
    "en": "retro sweater",
    "jp": "ハイセンスなセーター"
  },
  {
    "label": 449,
    "en": "cowboy shirt",
    "jp": "カウボーイシャツ"
  },
  {
    "label": 451,
    "en": "sweetheart tank and shirt",
    "jp": "ビスチェキャミ"
  },
  {
    "label": 461,
    "en": "rainbow sweater",
    "jp": "レインボーなニット"
  },
  {
    "label": 464,
    "en": "boa blouson",
    "jp": "ボアブルゾン"
  },
  {
    "label": 465,
    "en": "sleeveless tunic",
    "jp": "チュニックシャツ"
  },
  {
    "label": 467,
    "en": "coatigan",
    "jp": "コーディガン"
  },
  {
    "label": 471,
    "en": "patchwork coat",
    "jp": "パッチワークコート"
  },
  {
    "label": 476,
    "en": "earbuds combo",
    "jp": "イヤフォンコーデ"
  },
  {
    "label": 479,
    "en": "colorful striped sweater",
    "jp": "マルチボーダーニット"
  },
  {
    "label": 481,
    "en": "madras plaid shirt",
    "jp": "マドラスチェックシャツ"
  },
  {
    "label": 493,
    "en": "poncho-style sweater",
    "jp": "ポンチョふうニット"
  },
  {
    "label": 495,
    "en": "tunic tank",
    "jp": "タンクトップチュニック"
  },
  {
    "label": 501,
    "en": "ribbon-straps tank",
    "jp": "リボンショルダーキャミ"
  },
  {
    "label": 506,
    "en": "printed fleece sweater",
    "jp": "がらものフリース"
  },
  {
    "label": 507,
    "en": "detective's coat",
    "jp": "めいたんていのふく"
  },
  {
    "label": 513,
    "en": "baggy shirt",
    "jp": "ヨレヨレなシャツ"
  },
  {
    "label": 516,
    "en": "open-collar shirt",
    "jp": "かいきんシャツ"
  },
  {
    "label": 518,
    "en": "meme shirt",
    "jp": "ミームなふく"
  },
  {
    "label": 524,
    "en": "quilted jacket",
    "jp": "キルティングジャケット"
  },
  {
    "label": 531,
    "en": "down ski jacket",
    "jp": "スキーダウンジャケット"
  },
  {
    "label": 544,
    "en": "worker's jacket",
    "jp": "さぎょうふく"
  },
  {
    "label": 545,
    "en": "pom-pom sweater",
    "jp": "ポンポンセーター"
  },
  {
    "label": 547,
    "en": "humble sweater",
    "jp": "つつましいニット"
  },
  {
    "label": 548,
    "en": "anorak jacket",
    "jp": "アノラック"
  },
  {
    "label": 549,
    "en": "multipurpose vest",
    "jp": "たきのうベスト"
  },
  {
    "label": 576,
    "en": "snowflake sweater",
    "jp": "けっしょうのセーター"
  },
  {
    "label": 577,
    "en": "thread-worn sweater",
    "jp": "ダメージニット"
  },
  {
    "label": 581,
    "en": "samurai shirt",
    "jp": "かっちゅう"
  },
  {
    "label": 583,
    "en": "sleeved apron",
    "jp": "うでカバーつきエプロン"
  },
  {
    "label": 585,
    "en": "thief's costume",
    "jp": "かいとうのふく"
  },
  {
    "label": 616,
    "en": "energetic sweater",
    "jp": "すこやかなセーター"
  },
  {
    "label": 652,
    "en": "acid-washed jacket",
    "jp": "ケミカルデニムジャケット"
  },
  {
    "label": 653,
    "en": "music-fest shirt",
    "jp": "ミュージックフェスなふく"
  },
  {
    "label": 654,
    "en": "traditional straw coat",
    "jp": "みの"
  },
  {
    "label": 655,
    "en": "old-school jacket",
    "jp": "レペゼンなふく"
  },
  {
    "label": 673,
    "en": "dance-team jacket",
    "jp": "ダンスジャージ"
  },
  {
    "label": 694,
    "en": "puffy-sleeve blouse",
    "jp": "フリルパフブラウス"
  },
  {
    "label": 700,
    "en": "holiday sweater",
    "jp": "クリスマスセーター"
  },
  {
    "label": 743,
    "en": "vest with binoculars",
    "jp": "そうがんきょうつきベスト"
  },
  {
    "label": 745,
    "en": "shirt with camera",
    "jp": "カメラつきワイシャツ"
  },
  {
    "label": 746,
    "en": "embroidered tank",
    "jp": "ししゅうのキャミソール"
  },
  {
    "label": 807,
    "en": "sailor-style shirt",
    "jp": "セーラーシャツ"
  },
  {
    "label": 813,
    "en": "fischerhemd",
    "jp": "フィッシャーヘムト"
  },
  {
    "label": 823,
    "en": "flashy cardigan",
    "jp": "ハデなカーディガン"
  },
  {
    "label": 866,
    "en": "sleeveless parka",
    "jp": "ノースリーブパーカー"
  },
  {
    "label": 901,
    "en": "staff uniform",
    "jp": "スタッフのふく"
  },
  {
    "label": 903,
    "en": "oilskin coat",
    "jp": "オイルスキンのジャケット"
  },
  {
    "label": 909,
    "en": "guide shirt",
    "jp": "あんないがかりのふく"
  },
  {
    "label": 911,
    "en": "bulldog jacket",
    "jp": "ブルドッグジャージ"
  },
  {
    "label": 916,
    "en": "doublet",
    "jp": "ダブレット"
  },
  {
    "label": 939,
    "en": "gingham picnic shirt",
    "jp": "ギンガムチェックのシャツ"
  },
  {
    "label": 948,
    "en": "sports tank",
    "jp": "ビブス"
  }
];

fashionNames.bottoms = [
  {
    "label": "14",
    "en": "chino pants",
    "jp": "チノパン"
  },
  {
    "label": "15",
    "en": "two-tone pants",
    "jp": "ツートンなズボン"
  },
  {
    "label": "16",
    "en": "gingham picnic skirt",
    "jp": "ギンガムチェックのスカート"
  },
  {
    "label": "17",
    "en": "denim pants",
    "jp": "デニムパンツ"
  },
  {
    "label": 1091,
    "en": "soccer shorts",
    "jp": "サッカーのズボン"
  },
  {
    "label": 1092,
    "en": "explorer shorts",
    "jp": "たんけんふくのズボン"
  },
  {
    "label": 1093,
    "en": "animal-stripes skirt",
    "jp": "アニマルがらスカート"
  },
  {
    "label": 1095,
    "en": "football pants",
    "jp": "アメフトズボン"
  },
  {
    "label": 1129,
    "en": "Labelle shorts",
    "jp": "ケイトのハーフパンツ"
  },
  {
    "label": 1130,
    "en": "Labelle skirt",
    "jp": "ケイトのスカート"
  },
  {
    "label": 1187,
    "en": "polka-dot miniskirt",
    "jp": "ドットミニスカート"
  },
  {
    "label": 119,
    "en": "sweatpants",
    "jp": "スウェットパンツ"
  },
  {
    "label": 1190,
    "en": "green grass skirt",
    "jp": "みどりのこしみの"
  },
  {
    "label": 120,
    "en": "tweed skirt",
    "jp": "ツイードスカート"
  },
  {
    "label": 1227,
    "en": "pirate pants",
    "jp": "かいぞくのズボン"
  },
  {
    "label": 125,
    "en": "pleather pants",
    "jp": "レザーパンツ"
  },
  {
    "label": 126,
    "en": "slacks",
    "jp": "スラックス"
  },
  {
    "label": 127,
    "en": "athletic pants",
    "jp": "ジャージズボン"
  },
  {
    "label": 128,
    "en": "striped pants",
    "jp": "ボーダーパンツ"
  },
  {
    "label": 129,
    "en": "worn-out jeans",
    "jp": "あなあきデニム"
  },
  {
    "label": 140,
    "en": "track pants",
    "jp": "スポーツジャージのズボン"
  },
  {
    "label": 142,
    "en": "kilt",
    "jp": "キルト"
  },
  {
    "label": 144,
    "en": "sailor skirt",
    "jp": "セーラーふくのスカート"
  },
  {
    "label": 145,
    "en": "camo pants",
    "jp": "めいさいパンツ"
  },
  {
    "label": 148,
    "en": "cargo pants",
    "jp": "カーゴパンツ"
  },
  {
    "label": 149,
    "en": "cuffed pants",
    "jp": "すそみせズボン"
  },
  {
    "label": 152,
    "en": "lace skirt",
    "jp": "レーススカート"
  },
  {
    "label": 158,
    "en": "Santa pants",
    "jp": "サンタのズボン"
  },
  {
    "label": 160,
    "en": "dress pants",
    "jp": "せいふくのズボン"
  },
  {
    "label": 161,
    "en": "flashy slacks",
    "jp": "ハデなスラックス"
  },
  {
    "label": 175,
    "en": "western pants",
    "jp": "カウボーイパンツ"
  },
  {
    "label": 240,
    "en": "tweed pants",
    "jp": "ツイードパンツ"
  },
  {
    "label": 245,
    "en": "cargo shorts",
    "jp": "ハーフカーゴパンツ"
  },
  {
    "label": 248,
    "en": "jogging shorts",
    "jp": "ランニングパンツ"
  },
  {
    "label": 255,
    "en": "long pleated skirt",
    "jp": "ロングプリーツスカート"
  },
  {
    "label": 256,
    "en": "tennis skirt",
    "jp": "テニススカート"
  },
  {
    "label": 265,
    "en": "denim skirt",
    "jp": "デニムスカート"
  },
  {
    "label": 269,
    "en": "worn-out cutoffs",
    "jp": "あなあきショートデニム"
  },
  {
    "label": 270,
    "en": "long polka skirt",
    "jp": "みずたまロングスカート"
  },
  {
    "label": 272,
    "en": "hickory-stripe pants",
    "jp": "ヒッコリーのペインターパンツ"
  },
  {
    "label": 273,
    "en": "chain pants",
    "jp": "チェーンつきパンツ"
  },
  {
    "label": 274,
    "en": "down pants",
    "jp": "ダウンパンツ"
  },
  {
    "label": 275,
    "en": "long chino skirt",
    "jp": "ロングチノスカート"
  },
  {
    "label": 280,
    "en": "down skirt",
    "jp": "ダウンスカート"
  },
  {
    "label": 283,
    "en": "denim cutoffs",
    "jp": "デニムショートパンツ"
  },
  {
    "label": 287,
    "en": "sporty skirt",
    "jp": "スウェットスカート"
  },
  {
    "label": 295,
    "en": "corduroy skirt",
    "jp": "コーデュロイスカート"
  },
  {
    "label": 296,
    "en": "gaucho pants",
    "jp": "ガウチョパンツ"
  },
  {
    "label": 299,
    "en": "pleather skirt",
    "jp": "レザースカート"
  },
  {
    "label": 301,
    "en": "fringe skirt",
    "jp": "フリンジスカート"
  },
  {
    "label": 305,
    "en": "denim painter's pants",
    "jp": "デニムのペインターパンツ"
  },
  {
    "label": 308,
    "en": "silk floral-print pants",
    "jp": "チャイナなクロップドパンツ"
  },
  {
    "label": 309,
    "en": "silk pants",
    "jp": "チャイナなズボン"
  },
  {
    "label": 310,
    "en": "kung-fu pants",
    "jp": "カンフーなズボン"
  },
  {
    "label": 312,
    "en": "grass skirt",
    "jp": "こしみの"
  },
  {
    "label": 327,
    "en": "bell-bottoms",
    "jp": "ベルボトムパンツ"
  },
  {
    "label": 331,
    "en": "frilly pants",
    "jp": "フリルつきパンツ"
  },
  {
    "label": 332,
    "en": "yacht shorts",
    "jp": "ヨットのショートパンツ"
  },
  {
    "label": 333,
    "en": "multicolor shorts",
    "jp": "マルチカラーのハーフパンツ"
  },
  {
    "label": 334,
    "en": "formal shorts",
    "jp": "きれいめハーフパンツ"
  },
  {
    "label": 335,
    "en": "leopard miniskirt",
    "jp": "ヒョウがらミニスカート"
  },
  {
    "label": 336,
    "en": "long plaid skirt",
    "jp": "チェックのロングスカート"
  },
  {
    "label": 339,
    "en": "noble pants",
    "jp": "きぞくのズボン"
  },
  {
    "label": 344,
    "en": "pineapple aloha shorts",
    "jp": "パインがらアロハパンツ"
  },
  {
    "label": 347,
    "en": "cropped pants",
    "jp": "クロップドパンツ"
  },
  {
    "label": 349,
    "en": "frilly skirt",
    "jp": "フリルスカート"
  },
  {
    "label": 359,
    "en": "tweed frilly skirt",
    "jp": "ツイードフリルスカート"
  },
  {
    "label": 361,
    "en": "casual pants",
    "jp": "ワイドイージーパンツ"
  },
  {
    "label": 365,
    "en": "camo skirt",
    "jp": "めいさいスカート"
  },
  {
    "label": 369,
    "en": "culottes",
    "jp": "キュロット"
  },
  {
    "label": 374,
    "en": "ski pants",
    "jp": "スキーウェアのズボン"
  },
  {
    "label": 395,
    "en": "outdoor shorts",
    "jp": "アウトドアパンツ"
  },
  {
    "label": 399,
    "en": "punk pants",
    "jp": "ボンテージパンツ"
  },
  {
    "label": 401,
    "en": "vibrant shorts",
    "jp": "エスニックパンツ"
  },
  {
    "label": 404,
    "en": "patched-knee pants",
    "jp": "ひざあてズボン"
  },
  {
    "label": 409,
    "en": "tiered skirt",
    "jp": "ティアードスカート"
  },
  {
    "label": 411,
    "en": "career skirt",
    "jp": "キャリアなスカート"
  },
  {
    "label": 412,
    "en": "draped skirt",
    "jp": "ドレープスカート"
  },
  {
    "label": 419,
    "en": "cycling shorts",
    "jp": "サイクルボトム"
  },
  {
    "label": 420,
    "en": "surfing shorts",
    "jp": "サーフパンツ"
  },
  {
    "label": 421,
    "en": "lace shorts",
    "jp": "レースショートパンツ"
  },
  {
    "label": 422,
    "en": "athletic shorts",
    "jp": "ジャージショートパンツ"
  },
  {
    "label": 426,
    "en": "muay-thai shorts",
    "jp": "ムエタイパンツ"
  },
  {
    "label": 427,
    "en": "dotted shorts",
    "jp": "ゴールドドットパンツ"
  },
  {
    "label": 429,
    "en": "belted wraparound skirt",
    "jp": "ベルトのまきスカート"
  },
  {
    "label": 430,
    "en": "embroidered floral skirt",
    "jp": "ししゅうのはながらスカート"
  },
  {
    "label": 431,
    "en": "embroidered-pattern skirt",
    "jp": "きかがくししゅうのスカート"
  },
  {
    "label": 459,
    "en": "satin pants",
    "jp": "サテンのパンツ"
  },
  {
    "label": 468,
    "en": "corduroy pants",
    "jp": "コーデュロイボトム"
  },
  {
    "label": 478,
    "en": "floral lace skirt",
    "jp": "はながらレースのスカート"
  },
  {
    "label": 480,
    "en": "flare skirt",
    "jp": "フレアスカート"
  },
  {
    "label": 648,
    "en": "wide chino pants",
    "jp": "ワイドチノ"
  },
  {
    "label": 649,
    "en": "acid-washed jeans",
    "jp": "ケミカルウォッシュデニム"
  },
  {
    "label": 690,
    "en": "dance warm-up pants",
    "jp": "ダンスジャージズボン"
  },
  {
    "label": 726,
    "en": "comic shorts",
    "jp": "アメコミがらハーフパンツ"
  },
  {
    "label": 727,
    "en": "traditional monpe pants",
    "jp": "もんぺ"
  },
  {
    "label": 728,
    "en": "rain pants",
    "jp": "レインパンツ"
  },
  {
    "label": 729,
    "en": "knit skirt",
    "jp": "ニットスカート"
  },
  {
    "label": 730,
    "en": "faux-fur skirt",
    "jp": "ファースカート"
  },
  {
    "label": 731,
    "en": "frilly sweatpants",
    "jp": "スウェットフリルズボン"
  },
  {
    "label": 732,
    "en": "long sweatskirt",
    "jp": "スウェットロングスカート"
  },
  {
    "label": 733,
    "en": "boa skirt",
    "jp": "ボアスカート"
  },
  {
    "label": 734,
    "en": "boa shorts",
    "jp": "ボアハーフパンツ"
  },
  {
    "label": 735,
    "en": "pleather flare skirt",
    "jp": "レザーのフレアスカート"
  },
  {
    "label": 736,
    "en": "buttoned lace skirt",
    "jp": "まえボタンレースのスカート"
  },
  {
    "label": 737,
    "en": "petal skirt",
    "jp": "チュチュスカート"
  },
  {
    "label": 752,
    "en": "plover skirt",
    "jp": "ちどりのスカート"
  },
  {
    "label": 754,
    "en": "upcycled skirt",
    "jp": "シャビーなスカート"
  },
  {
    "label": 755,
    "en": "embellished denim pants",
    "jp": "プリントデニム"
  },
  {
    "label": 756,
    "en": "traditional suteteko pants",
    "jp": "ステテコ"
  },
  {
    "label": 781,
    "en": "patchwork skirt",
    "jp": "パッチワークスカート"
  },
  {
    "label": 817,
    "en": "plaid shorts",
    "jp": "シャギーチェックのホットパンツ"
  },
  {
    "label": 818,
    "en": "colorful skirt",
    "jp": "エナグワス"
  },
  {
    "label": 840,
    "en": "torn pants",
    "jp": "やぶれたズボン"
  },
  {
    "label": 841,
    "en": "three-quarter sweatpants",
    "jp": "フィットネススウェットパンツ"
  },
  {
    "label": 842,
    "en": "box-pleated skirt",
    "jp": "ボックスプリーツスカート"
  },
  {
    "label": 843,
    "en": "faux-shearling skirt",
    "jp": "ムートンスカート"
  },
  {
    "label": 844,
    "en": "striped shorts",
    "jp": "マルチストライプのホットパンツ"
  },
  {
    "label": 845,
    "en": "knit pants",
    "jp": "ニットパンツ"
  },
  {
    "label": 846,
    "en": "long denim skirt",
    "jp": "ロングデニムスカート"
  },
  {
    "label": 847,
    "en": "apron skirt",
    "jp": "エプロンつきスカート"
  },
  {
    "label": 848,
    "en": "terry-cloth shorts",
    "jp": "もこもこホットパンツ"
  },
  {
    "label": 849,
    "en": "basketball shorts",
    "jp": "バスケットパンツ"
  },
  {
    "label": 850,
    "en": "workout pants",
    "jp": "ワークアウトパンツ"
  },
  {
    "label": 851,
    "en": "bomber-style skirt",
    "jp": "ＭＡ‐１スカート"
  },
  {
    "label": 852,
    "en": "spangle shorts",
    "jp": "スパンコールのホットパンツ"
  },
  {
    "label": 853,
    "en": "striped bell-bottoms",
    "jp": "マルチストライプワイドパンツ"
  },
  {
    "label": 854,
    "en": "comedian's pants",
    "jp": "コメディアンのパンツ"
  },
  {
    "label": 855,
    "en": "pearl skirt",
    "jp": "パールつきスカート"
  },
  {
    "label": 860,
    "en": "pleather shorts",
    "jp": "レザーのショートパンツ"
  },
  {
    "label": 861,
    "en": "gobelin shorts",
    "jp": "ゴブランハーフパンツ"
  },
  {
    "label": 862,
    "en": "elephant-print pants",
    "jp": "タイパンツ"
  },
  {
    "label": 870,
    "en": "corte skirt",
    "jp": "コルテ"
  },
  {
    "label": 871,
    "en": "geometric-print pants",
    "jp": "チマヨがらフリースパンツ"
  },
  {
    "label": 884,
    "en": "cut-pleather skirt",
    "jp": "カットレザースカート"
  },
  {
    "label": 885,
    "en": "pleather patch skirt",
    "jp": "レザーパッチスカート"
  },
  {
    "label": 890,
    "en": "buttoned wraparound skirt",
    "jp": "ボタンのまきスカート"
  },
  {
    "label": 896,
    "en": "tie-dye skirt",
    "jp": "タイダイスカート"
  },
  {
    "label": 902,
    "en": "botanical shorts",
    "jp": "ボタニカルハーフパンツ"
  },
  {
    "label": 905,
    "en": "school pants",
    "jp": "がくせいふくのズボン"
  },
  {
    "label": 906,
    "en": "lemon skirt",
    "jp": "レモンのスカート"
  },
  {
    "label": 907,
    "en": "dreamy pants",
    "jp": "ゆめかわなズボン"
  },
  {
    "label": 908,
    "en": "floral skirt",
    "jp": "はながらスカート"
  },
  {
    "label": 912,
    "en": "long sailor skirt",
    "jp": "ロングセーラースカート"
  }
];

fashionNames.dresses = [
  {
    "label": "9",
    "en": "sweater dress",
    "jp": "ニットワンピース"
  },
  {
    "label": "10",
    "en": "parka dress",
    "jp": "パーカーワンピ"
  },
  {
    "label": "11",
    "en": "overall dress",
    "jp": "ジャンパースカート"
  },
  {
    "label": "12",
    "en": "layered tank dress",
    "jp": "レイヤーキャミワンピ"
  },
  {
    "label": "20",
    "en": "cheerleading uniform",
    "jp": "チアのコスチューム"
  },
  {
    "label": "24",
    "en": "satin dress",
    "jp": "サテンのワンピース"
  },
  {
    "label": "28",
    "en": "tweed dress",
    "jp": "ツイードワンピース"
  },
  {
    "label": "29",
    "en": "gumdrop dress",
    "jp": "はるのみずたまワンピース"
  },
  {
    "label": "30",
    "en": "tropical muumuu",
    "jp": "パインがらムームー"
  },
  {
    "label": "31",
    "en": "academy uniform",
    "jp": "よそいきなふく"
  },
  {
    "label": "32",
    "en": "retro dress",
    "jp": "レトロボックスワンピース"
  },
  {
    "label": "38",
    "en": "dazed dress",
    "jp": "ゆめいろこうしワンピース"
  },
  {
    "label": "39",
    "en": "prim outfit",
    "jp": "せいそなアンサンブル"
  },
  {
    "label": "41",
    "en": "belted dotted dress",
    "jp": "ベルトつきみずたまワンピース"
  },
  {
    "label": "45",
    "en": "blossom dress",
    "jp": "はながらワンピース"
  },
  {
    "label": "46",
    "en": "lace-up dress",
    "jp": "ロリータなワンピース"
  },
  {
    "label": "49",
    "en": "plover dress",
    "jp": "ちどりごうしワンピース"
  },
  {
    "label": "50",
    "en": "fancy party dress",
    "jp": "パーティーワンピ"
  },
  {
    "label": "51",
    "en": "rad power skirt suit",
    "jp": "バブリーなセットアップ"
  },
  {
    "label": "52",
    "en": "festive dress",
    "jp": "クリスマスなドレス"
  },
  {
    "label": "53",
    "en": "fairy-tale dress",
    "jp": "メルヘンなドレス"
  },
  {
    "label": "54",
    "en": "maid dress",
    "jp": "メイドのふく"
  },
  {
    "label": "58",
    "en": "diner uniform",
    "jp": "ダイナーのユニフォーム"
  },
  {
    "label": "61",
    "en": "bunny dress",
    "jp": "ウサギなふく"
  },
  {
    "label": "63",
    "en": "noble zap suit",
    "jp": "ヒロインスーツ"
  },
  {
    "label": "65",
    "en": "bathrobe",
    "jp": "バスローブ"
  },
  {
    "label": "66",
    "en": "ballet outfit",
    "jp": "バレエのいしょう"
  },
  {
    "label": "67",
    "en": "cat dress",
    "jp": "ネコなふく"
  },
  {
    "label": "68",
    "en": "alpinist dress",
    "jp": "チロリアンなドレス"
  },
  {
    "label": "69",
    "en": "festive-tree dress",
    "jp": "もみのきワンピース"
  },
  {
    "label": "89",
    "en": "caveman tank",
    "jp": "げんしじんなふく"
  },
  {
    "label": 1004,
    "en": "flower-print dress",
    "jp": "フラワーなワンピース"
  },
  {
    "label": 1016,
    "en": "marble-dots dress",
    "jp": "マーブルドットのワンピース"
  },
  {
    "label": 1017,
    "en": "simple-dots dress",
    "jp": "シンプルドットワンピース"
  },
  {
    "label": 1018,
    "en": "hibiscus muumuu",
    "jp": "ハイビスカスのムームー"
  },
  {
    "label": 1019,
    "en": "bold muumuu",
    "jp": "ポリネシアンなムームー"
  },
  {
    "label": 1039,
    "en": "simple checkered dress",
    "jp": "シンプルチェックのワンピ"
  },
  {
    "label": 104,
    "en": "princess dress",
    "jp": "プリンセスなふく"
  },
  {
    "label": 1048,
    "en": "lively plaid dress",
    "jp": "げんきなチェックのワンピ"
  },
  {
    "label": 105,
    "en": "sleeveless sweater dress",
    "jp": "そでなしニットワンピ"
  },
  {
    "label": 1064,
    "en": "kandoora",
    "jp": "カンデューラ"
  },
  {
    "label": 1084,
    "en": "junihitoe kimono",
    "jp": "じゅうにひとえ"
  },
  {
    "label": 1085,
    "en": "Victorian dress",
    "jp": "セニョリータなドレス"
  },
  {
    "label": 1086,
    "en": "hakama with crest",
    "jp": "もんつきはかま"
  },
  {
    "label": 1087,
    "en": "apple dress",
    "jp": "リンゴのふく"
  },
  {
    "label": 1088,
    "en": "pear dress",
    "jp": "ナシのふく"
  },
  {
    "label": 1089,
    "en": "cherry dress",
    "jp": "さくらんぼのふく"
  },
  {
    "label": 1090,
    "en": "peach dress",
    "jp": "モモのふく"
  },
  {
    "label": 1128,
    "en": "Labelle dress",
    "jp": "ケイトのワンピース"
  },
  {
    "label": 113,
    "en": "strawberry dress",
    "jp": "イチゴのふく"
  },
  {
    "label": 114,
    "en": "watermelon dress",
    "jp": "スイカのふく"
  },
  {
    "label": 115,
    "en": "orange dress",
    "jp": "オレンジのふく"
  },
  {
    "label": 1155,
    "en": "pajama dress",
    "jp": "パジャマワンピ"
  },
  {
    "label": 1156,
    "en": "visual-punk dress",
    "jp": "ヴィジュアルけいドレス"
  },
  {
    "label": 1157,
    "en": "bekasab robe",
    "jp": "ウズベクなふく"
  },
  {
    "label": 1158,
    "en": "attus robe",
    "jp": "アットゥシ"
  },
  {
    "label": 1159,
    "en": "bingata dress",
    "jp": "びんがたいしょう"
  },
  {
    "label": 116,
    "en": "kiwi dress",
    "jp": "キウイのふく"
  },
  {
    "label": 1161,
    "en": "painter's coverall",
    "jp": "ペイントつなぎ"
  },
  {
    "label": 1162,
    "en": "Festivale tank dress",
    "jp": "カーニバルなワンピース"
  },
  {
    "label": 117,
    "en": "grape dress",
    "jp": "ぶどうのふく"
  },
  {
    "label": 118,
    "en": "pineapple dress",
    "jp": "パイナップルのふく"
  },
  {
    "label": 1204,
    "en": "egg party dress",
    "jp": "たまごのパーティーワンピ"
  },
  {
    "label": 1205,
    "en": "earth-egg outfit",
    "jp": "じめんのたまごのふく"
  },
  {
    "label": 1206,
    "en": "stone-egg outfit",
    "jp": "いわのたまごのふく"
  },
  {
    "label": 1207,
    "en": "leaf-egg outfit",
    "jp": "はっぱのたまごのふく"
  },
  {
    "label": 1208,
    "en": "wood-egg outfit",
    "jp": "ウッディなたまごのふく"
  },
  {
    "label": 1209,
    "en": "sky-egg outfit",
    "jp": "そらとぶたまごのふく"
  },
  {
    "label": 1210,
    "en": "water-egg outfit",
    "jp": "サカナのたまごのふく"
  },
  {
    "label": 1219,
    "en": "wedding tuxedo",
    "jp": "じゅんぱくのタキシード"
  },
  {
    "label": 1230,
    "en": "pirate-treasure robe",
    "jp": "かいぞくのおたからローブ"
  },
  {
    "label": 1231,
    "en": "pirate outfit",
    "jp": "かいぞくのふく"
  },
  {
    "label": 1244,
    "en": "mermaid fishy dress",
    "jp": "マーメイドなおさかなドレス"
  },
  {
    "label": 1245,
    "en": "mermaid princess dress",
    "jp": "マーメイドなプリンセスドレス"
  },
  {
    "label": 1261,
    "en": "Jack's robe",
    "jp": "パンプキングローブ"
  },
  {
    "label": 1262,
    "en": "raggedy outfit",
    "jp": "ボロボロなふく"
  },
  {
    "label": 1263,
    "en": "mage's dress",
    "jp": "まほうつかいのドレス"
  },
  {
    "label": 1264,
    "en": "flashy animal costume",
    "jp": "ハデなアニマルきぐるみ"
  },
  {
    "label": 1293,
    "en": "Kerokerokeroppi outfit",
    "jp": "けろけろけろっぴなセットアップ"
  },
  {
    "label": 1301,
    "en": "Orihime outfit",
    "jp": "おりひめのふく"
  },
  {
    "label": 1302,
    "en": "Hikoboshi outfit",
    "jp": "ひこぼしのふく"
  },
  {
    "label": 1303,
    "en": "Hello Kitty dress",
    "jp": "ハローキティなワンピース"
  },
  {
    "label": 1315,
    "en": "magic-academy robe",
    "jp": "まほうスクールのローブ"
  },
  {
    "label": 1316,
    "en": "Kiki & Lala dress",
    "jp": "キキ&ララなワンピース"
  },
  {
    "label": 1317,
    "en": "Pompompurin outfit",
    "jp": "ポムポムプリンなセットアップ"
  },
  {
    "label": 1321,
    "en": "Mario outfit",
    "jp": "マリオのふく"
  },
  {
    "label": 1322,
    "en": "Luigi outfit",
    "jp": "ルイージのふく"
  },
  {
    "label": 1323,
    "en": "Wario outfit",
    "jp": "ワリオのふく"
  },
  {
    "label": 1330,
    "en": "Princess Peach dress",
    "jp": "ピーチひめのドレス"
  },
  {
    "label": 1332,
    "en": "My Melody dress",
    "jp": "マイメロディなワンピース"
  },
  {
    "label": 1344,
    "en": "Festivale costume",
    "jp": "カーニバルなコスチューム"
  },
  {
    "label": 1352,
    "en": "shamrock suit",
    "jp": "シャムロックスーツ"
  },
  {
    "label": 1361,
    "en": "vibrant tuxedo",
    "jp": "カラータキシード"
  },
  {
    "label": 1376,
    "en": "white hakama with crest",
    "jp": "しろいもんつきはかま"
  },
  {
    "label": 1377,
    "en": "shiromuku",
    "jp": "しろむく"
  },
  {
    "label": 141,
    "en": "wedding dress",
    "jp": "じゅんぱくのドレス"
  },
  {
    "label": 146,
    "en": "nurse's dress uniform",
    "jp": "かんごしのワンピース"
  },
  {
    "label": 150,
    "en": "PJ outfit",
    "jp": "パジャマ"
  },
  {
    "label": 153,
    "en": "ruffled dress",
    "jp": "コルセットドレス"
  },
  {
    "label": 154,
    "en": "shirtdress",
    "jp": "シャツワンピ"
  },
  {
    "label": 155,
    "en": "sleeveless shirtdress",
    "jp": "そでなしシャツワンピ"
  },
  {
    "label": 162,
    "en": "jockey uniform",
    "jp": "ジョッキーのふく"
  },
  {
    "label": 163,
    "en": "bear costume",
    "jp": "クマなふく"
  },
  {
    "label": 164,
    "en": "firefighter uniform",
    "jp": "しょうぼうしのふく"
  },
  {
    "label": 165,
    "en": "frog costume",
    "jp": "カエルなふく"
  },
  {
    "label": 166,
    "en": "kappa costume",
    "jp": "カッパスーツ"
  },
  {
    "label": 167,
    "en": "fashionable royal dress",
    "jp": "アントワネットなドレス"
  },
  {
    "label": 168,
    "en": "palatial tank dress",
    "jp": "ナイルなふく"
  },
  {
    "label": 169,
    "en": "jumper work suit",
    "jp": "さぎょうぎ"
  },
  {
    "label": 170,
    "en": "jester costume",
    "jp": "ピエロのふく"
  },
  {
    "label": 171,
    "en": "zap suit",
    "jp": "ヒーロースーツ"
  },
  {
    "label": 172,
    "en": "jinbei",
    "jp": "じんべい"
  },
  {
    "label": 173,
    "en": "ninja costume",
    "jp": "しのびのふく"
  },
  {
    "label": 174,
    "en": "dragon suit",
    "jp": "ドラゴンスーツ"
  },
  {
    "label": 176,
    "en": "concierge uniform",
    "jp": "ホテルマンなふく"
  },
  {
    "label": 178,
    "en": "flight-crew uniform",
    "jp": "フライトアテンダントのふく"
  },
  {
    "label": 180,
    "en": "mage's robe",
    "jp": "まほうつかいのローブ"
  },
  {
    "label": 181,
    "en": "áo dài",
    "jp": "アオザイ"
  },
  {
    "label": 182,
    "en": "pinafore",
    "jp": "かっぽうぎ"
  },
  {
    "label": 183,
    "en": "chima jeogori",
    "jp": "チマチョゴリ"
  },
  {
    "label": 186,
    "en": "security uniform",
    "jp": "けいかんのふく"
  },
  {
    "label": 187,
    "en": "toga",
    "jp": "ローマなふく"
  },
  {
    "label": 188,
    "en": "blossoming kimono",
    "jp": "ウメがらのきもの"
  },
  {
    "label": 189,
    "en": "mysterious dress",
    "jp": "ゴシックなふく"
  },
  {
    "label": 190,
    "en": "chiton",
    "jp": "ギリシャなふく"
  },
  {
    "label": 192,
    "en": "moldy dress",
    "jp": "かびたワンピース"
  },
  {
    "label": 193,
    "en": "pharaoh's outfit",
    "jp": "エジプトのふく"
  },
  {
    "label": 198,
    "en": "desert outfit",
    "jp": "アラビアなふく"
  },
  {
    "label": 199,
    "en": "mummy outfit",
    "jp": "ほうたいのふく"
  },
  {
    "label": 200,
    "en": "bone costume",
    "jp": "ボーンなふく"
  },
  {
    "label": 201,
    "en": "wrestler uniform",
    "jp": "プロレススーツ"
  },
  {
    "label": 202,
    "en": "baseball uniform",
    "jp": "やきゅうのふく"
  },
  {
    "label": 203,
    "en": "pilot's uniform",
    "jp": "きちょうのふく"
  },
  {
    "label": 204,
    "en": "suit of lights",
    "jp": "マタドールなふく"
  },
  {
    "label": 205,
    "en": "milkmaid dress",
    "jp": "オランダなドレス"
  },
  {
    "label": 211,
    "en": "space suit",
    "jp": "うちゅうふく"
  },
  {
    "label": 213,
    "en": "racing outfit",
    "jp": "レーサーなふく"
  },
  {
    "label": 214,
    "en": "sequin dress",
    "jp": "スパンコールのワンピース"
  },
  {
    "label": 215,
    "en": "skirt with suspenders",
    "jp": "つりスカート"
  },
  {
    "label": 216,
    "en": "box-skirt uniform",
    "jp": "ジャンパースカートのせいふく"
  },
  {
    "label": 219,
    "en": "denim overalls",
    "jp": "デニムのサロペット"
  },
  {
    "label": 221,
    "en": "sailor-collar dress",
    "jp": "マリンルックワンピース"
  },
  {
    "label": 226,
    "en": "sari",
    "jp": "サリー"
  },
  {
    "label": 227,
    "en": "adventure dress",
    "jp": "ふしぎなワンピース"
  },
  {
    "label": 232,
    "en": "sweetheart dress",
    "jp": "ビスチェワンピース"
  },
  {
    "label": 235,
    "en": "fairy dress",
    "jp": "ようせいのふく"
  },
  {
    "label": 239,
    "en": "suspender outfit",
    "jp": "サスペンダーなふく"
  },
  {
    "label": 247,
    "en": "sprite costume",
    "jp": "こびとのふく"
  },
  {
    "label": 267,
    "en": "nightgown",
    "jp": "ネグリジェ"
  },
  {
    "label": 268,
    "en": "judogi",
    "jp": "じゅうどうぎ"
  },
  {
    "label": 276,
    "en": "striped dress",
    "jp": "ボーダーワンピース"
  },
  {
    "label": 278,
    "en": "bubble-skirt party dress",
    "jp": "バブルドレス"
  },
  {
    "label": 279,
    "en": "linen dress",
    "jp": "リネンワンピース"
  },
  {
    "label": 282,
    "en": "wizard's robe",
    "jp": "まじゅつしのローブ"
  },
  {
    "label": 291,
    "en": "striped halter dress",
    "jp": "ホルターネックのワンピース"
  },
  {
    "label": 293,
    "en": "miko attire",
    "jp": "みこしょうぞく"
  },
  {
    "label": 294,
    "en": "pirate dress",
    "jp": "かいぞくのワンピース"
  },
  {
    "label": 297,
    "en": "retro sleeveless dress",
    "jp": "モガなワンピース"
  },
  {
    "label": 302,
    "en": "hakama",
    "jp": "はかま"
  },
  {
    "label": 304,
    "en": "full-body tights",
    "jp": "ぜんしんタイツ"
  },
  {
    "label": 307,
    "en": "fishing waders",
    "jp": "ウェーダー"
  },
  {
    "label": 311,
    "en": "magical dress",
    "jp": "マジカルなドレス"
  },
  {
    "label": 313,
    "en": "bolero coat",
    "jp": "ボレロコート"
  },
  {
    "label": 314,
    "en": "office uniform",
    "jp": "オフィスなふく"
  },
  {
    "label": 317,
    "en": "full-length dress with pearls",
    "jp": "パールつきロングドレス"
  },
  {
    "label": 318,
    "en": "casual kimono",
    "jp": "きながし"
  },
  {
    "label": 320,
    "en": "frugal dress",
    "jp": "しっそなドレス"
  },
  {
    "label": 321,
    "en": "frugal outfit",
    "jp": "しっそなふく"
  },
  {
    "label": 322,
    "en": "chic tuxedo dress",
    "jp": "タキシードドレス"
  },
  {
    "label": 323,
    "en": "fleece pj's",
    "jp": "フリースパジャマ"
  },
  {
    "label": 324,
    "en": "long pleather coat",
    "jp": "レザーコート"
  },
  {
    "label": 325,
    "en": "bath-towel wrap",
    "jp": "バスタオル"
  },
  {
    "label": 338,
    "en": "loose fall dress",
    "jp": "あきいろチェックワンピース"
  },
  {
    "label": 340,
    "en": "plaid-print dress",
    "jp": "ブロックチェックワンピ"
  },
  {
    "label": 343,
    "en": "frilly dress",
    "jp": "フリフリワンピース"
  },
  {
    "label": 345,
    "en": "dollhouse dress",
    "jp": "アイドルなふく"
  },
  {
    "label": 348,
    "en": "Bohemian tunic dress",
    "jp": "ボヘミアンワンピ"
  },
  {
    "label": 357,
    "en": "oversized-sweats dress",
    "jp": "きりかえビッグスウェット"
  },
  {
    "label": 362,
    "en": "sheep costume",
    "jp": "ひつじなふく"
  },
  {
    "label": 363,
    "en": "sunflower dress",
    "jp": "ひまわりのワンピース"
  },
  {
    "label": 368,
    "en": "alpinist overalls",
    "jp": "チロリアンなオーバーオール"
  },
  {
    "label": 373,
    "en": "star costume",
    "jp": "スタアのふく"
  },
  {
    "label": 389,
    "en": "layered sleeveless dress",
    "jp": "レイヤーノースリーブワンピ"
  },
  {
    "label": 390,
    "en": "tiger-face tee dress",
    "jp": "トラのＴシャツワンピ"
  },
  {
    "label": 391,
    "en": "parka and shirtdress",
    "jp": "パーカーインシャツワンピ"
  },
  {
    "label": 393,
    "en": "baby romper",
    "jp": "ロンパース"
  },
  {
    "label": 394,
    "en": "tight punk outfit",
    "jp": "ボンテージ"
  },
  {
    "label": 396,
    "en": "superhero uniform",
    "jp": "スーパーヒーロースーツ"
  },
  {
    "label": 398,
    "en": "china poblana",
    "jp": "チナポブラーナ"
  },
  {
    "label": 403,
    "en": "shawl-and-dress combo",
    "jp": "ショールコーデワンピ"
  },
  {
    "label": 413,
    "en": "pintuck-pleated dress",
    "jp": "ドーリーワンピース"
  },
  {
    "label": 416,
    "en": "reindeer costume",
    "jp": "トナカイなふく"
  },
  {
    "label": 424,
    "en": "maxi shirtdress",
    "jp": "ロングシャツワンピ"
  },
  {
    "label": 435,
    "en": "long denim cardigan",
    "jp": "ロングデニムカーディガン"
  },
  {
    "label": 436,
    "en": "oversized print dress",
    "jp": "おおばんがらワンピ"
  },
  {
    "label": 437,
    "en": "retro A-line dress",
    "jp": "レトロＡラインワンピース"
  },
  {
    "label": 439,
    "en": "tee dress",
    "jp": "Ｔシャツワンピ"
  },
  {
    "label": 442,
    "en": "visual-punk outfit",
    "jp": "ヴィジュアルけいコスチューム"
  },
  {
    "label": 446,
    "en": "floral lace dress",
    "jp": "はながらレースのワンピース"
  },
  {
    "label": 450,
    "en": "caterpillar costume",
    "jp": "あおむしのふく"
  },
  {
    "label": 452,
    "en": "house-print dress",
    "jp": "ハウスなプリントワンピ"
  },
  {
    "label": 453,
    "en": "forest-print dress",
    "jp": "フォレストなワンピース"
  },
  {
    "label": 454,
    "en": "rugby uniform",
    "jp": "ラグビーのユニフォーム"
  },
  {
    "label": 455,
    "en": "slip dress",
    "jp": "スリップドレス"
  },
  {
    "label": 456,
    "en": "iron armor",
    "jp": "アイアンアーマー"
  },
  {
    "label": 457,
    "en": "long down coat",
    "jp": "ロングダウンコート"
  },
  {
    "label": 458,
    "en": "gold armor",
    "jp": "ゴールデンアーマー"
  },
  {
    "label": 460,
    "en": "peacoat-and-skirt combo",
    "jp": "スカートつきピーコート"
  },
  {
    "label": 462,
    "en": "casual chic dress",
    "jp": "カシュクールワンピース"
  },
  {
    "label": 469,
    "en": "folk-dance outfit",
    "jp": "オランダなコスチューム"
  },
  {
    "label": 470,
    "en": "boa parka",
    "jp": "ボアパーカー"
  },
  {
    "label": 472,
    "en": "balmacaan coat",
    "jp": "バルマカーンコート"
  },
  {
    "label": 477,
    "en": "desert-princess outfit",
    "jp": "アラビアひめなふく"
  },
  {
    "label": 482,
    "en": "zigzag-print dress",
    "jp": "エスニックワンピ"
  },
  {
    "label": 483,
    "en": "shorts outfit",
    "jp": "ショートコンビネゾン"
  },
  {
    "label": 486,
    "en": "icy dress",
    "jp": "こおりのじょおうなドレス"
  },
  {
    "label": 488,
    "en": "cold-country dress",
    "jp": "さむいくにのドレス"
  },
  {
    "label": 490,
    "en": "mariachi clothing",
    "jp": "マリアッチのいしょう"
  },
  {
    "label": 491,
    "en": "marble-print dress",
    "jp": "マーブルワンピース"
  },
  {
    "label": 492,
    "en": "shell dress",
    "jp": "かいがらのドレス"
  },
  {
    "label": 500,
    "en": "long chenille cardigan",
    "jp": "モールロングカーディガン"
  },
  {
    "label": 512,
    "en": "sweet dress",
    "jp": "エンジェルなワンピース"
  },
  {
    "label": 514,
    "en": "impish costume",
    "jp": "デビルなふく"
  },
  {
    "label": 525,
    "en": "striped maxi dress",
    "jp": "ストライプのマキシワンピ"
  },
  {
    "label": 527,
    "en": "checkered jumper dress",
    "jp": "チェックのジャンパースカート"
  },
  {
    "label": 532,
    "en": "lacy dress",
    "jp": "レースのワンピース"
  },
  {
    "label": 534,
    "en": "clover dress",
    "jp": "クローバーなワンピース"
  },
  {
    "label": 546,
    "en": "elegant dress",
    "jp": "しゅくじょなワンピース"
  },
  {
    "label": 578,
    "en": "wrestling singlet",
    "jp": "レスリングのユニフォーム"
  },
  {
    "label": 582,
    "en": "sleeveless silk dress",
    "jp": "チャイナドレス"
  },
  {
    "label": 584,
    "en": "ogre costume",
    "jp": "オニのふく"
  },
  {
    "label": 586,
    "en": "astro dress",
    "jp": "スペースワンピース"
  },
  {
    "label": 650,
    "en": "hot-dog costume",
    "jp": "ホットドッグなふく"
  },
  {
    "label": 651,
    "en": "coveralls with arm covers",
    "jp": "うでカバーつきつなぎ"
  },
  {
    "label": 695,
    "en": "stylish jumpsuit",
    "jp": "オールインワン"
  },
  {
    "label": 703,
    "en": "instant-muscles suit",
    "jp": "マッスルスーツ"
  },
  {
    "label": 715,
    "en": "cyber suit",
    "jp": "サイバースーツ"
  },
  {
    "label": 716,
    "en": "figure-skating dress",
    "jp": "フィギュアのドレス"
  },
  {
    "label": 721,
    "en": "figure-skating costume",
    "jp": "フィギュアないしょう"
  },
  {
    "label": 739,
    "en": "power suit",
    "jp": "パワードスーツ"
  },
  {
    "label": 740,
    "en": "Renaissance dress",
    "jp": "ルネッサンスなドレス"
  },
  {
    "label": 747,
    "en": "cold-country bunad",
    "jp": "さむいくにのふく"
  },
  {
    "label": 757,
    "en": "fancy kimono",
    "jp": "はれぎ"
  },
  {
    "label": 773,
    "en": "ancient belted robe",
    "jp": "ぐんしのふく"
  },
  {
    "label": 774,
    "en": "ancient sashed robe",
    "jp": "かんぷく"
  },
  {
    "label": 788,
    "en": "school smock",
    "jp": "スクールスモック"
  },
  {
    "label": 793,
    "en": "rumba costume",
    "jp": "ルンバないしょう"
  },
  {
    "label": 805,
    "en": "baby-chick costume",
    "jp": "ひよこなふく"
  },
  {
    "label": 806,
    "en": "rumba dress",
    "jp": "ルンバなドレス"
  },
  {
    "label": 810,
    "en": "suit with stand-up collar",
    "jp": "つめえりスーツ"
  },
  {
    "label": 872,
    "en": "dreamy dress",
    "jp": "ゆめかわなドレス"
  },
  {
    "label": 873,
    "en": "flashy kimono",
    "jp": "ゴージャスなきもの"
  },
  {
    "label": 874,
    "en": "noble dress",
    "jp": "きぞくのドレス"
  },
  {
    "label": 875,
    "en": "stellar jumpsuit",
    "jp": "サイケなつなぎ"
  },
  {
    "label": 877,
    "en": "old commoner's kimono",
    "jp": "まちむすめのきもの"
  },
  {
    "label": 889,
    "en": "tango dress",
    "jp": "タンゴなドレス"
  },
  {
    "label": 891,
    "en": "flapper dress",
    "jp": "フラッパードレス"
  },
  {
    "label": 892,
    "en": "baji jeogori",
    "jp": "パジチョゴリ"
  },
  {
    "label": 893,
    "en": "morning-glory yukata",
    "jp": "あさがおのゆかた"
  },
  {
    "label": 895,
    "en": "steampunk costume",
    "jp": "スチームパンクなふく"
  },
  {
    "label": 897,
    "en": "farmer overalls",
    "jp": "ファームなオーバーオール"
  },
  {
    "label": 898,
    "en": "ice-hockey uniform",
    "jp": "アイスホッケーのユニフォーム"
  },
  {
    "label": 913,
    "en": "simple visiting kimono",
    "jp": "むじのほうもんぎ"
  },
  {
    "label": 914,
    "en": "butterfly visiting kimono",
    "jp": "ちょうがらのほうもんぎ"
  },
  {
    "label": 915,
    "en": "kabuki-actor yukata",
    "jp": "かぶきなゆかた"
  },
  {
    "label": 943,
    "en": "egg-sushi costume",
    "jp": "たまごずし"
  },
  {
    "label": 944,
    "en": "tuna-sushi costume",
    "jp": "まぐろずし"
  },
  {
    "label": 945,
    "en": "gizzard-shad-sushi costume",
    "jp": "こはだずし"
  }
];

fashionNames.caps = [
  {
    "label": 1013,
    "en": "Festivale accessory",
    "jp": "カーニバルなかみかざり"
  },
  {
    "label": 1014,
    "en": "crown",
    "jp": "クイーンのかんむり"
  },
  {
    "label": 1041,
    "en": "zen hair clip",
    "jp": "わかざり"
  },
  {
    "label": 1042,
    "en": "flashy hairpin",
    "jp": "はでなかみかざり"
  },
  {
    "label": 1043,
    "en": "pilot's hat",
    "jp": "きちょうのぼうし"
  },
  {
    "label": 1044,
    "en": "student cap",
    "jp": "がくせいぼう"
  },
  {
    "label": 1045,
    "en": "hibiscus hairpin",
    "jp": "ハイビスカスのかみかざり"
  },
  {
    "label": 1061,
    "en": "baseball cap",
    "jp": "ベースボールキャップ"
  },
  {
    "label": 1065,
    "en": "tweed cap",
    "jp": "ツイードキャップ"
  },
  {
    "label": 1105,
    "en": "floral hairpin",
    "jp": "おはなのヘアピン"
  },
  {
    "label": 1106,
    "en": "heart hairpin",
    "jp": "ハートのかみかざり"
  },
  {
    "label": 1107,
    "en": "star hairpin",
    "jp": "ほしのかみかざり"
  },
  {
    "label": 1108,
    "en": "bulb bopper",
    "jp": "ひかるボールアクセサリー"
  },
  {
    "label": 1109,
    "en": "flower bopper",
    "jp": "ひかるはなのアクセサリー"
  },
  {
    "label": 1110,
    "en": "heart bopper",
    "jp": "ひかるハートアクセサリー"
  },
  {
    "label": 1111,
    "en": "barrette",
    "jp": "バレッタ"
  },
  {
    "label": 1112,
    "en": "giant ribbon",
    "jp": "おおきなリボン"
  },
  {
    "label": 1114,
    "en": "skateboarding helmet",
    "jp": "スケボーヘルメット"
  },
  {
    "label": 1115,
    "en": "Aran-knit cap",
    "jp": "アランニットぼう"
  },
  {
    "label": 1117,
    "en": "lettered cap",
    "jp": "もじキャップ"
  },
  {
    "label": 1119,
    "en": "ribboned garden hat",
    "jp": "リボンつきむぎわらぼうし"
  },
  {
    "label": 1121,
    "en": "patchwork tulip hat",
    "jp": "パッチワークのチューリップぼう"
  },
  {
    "label": 1122,
    "en": "apple hat",
    "jp": "リンゴのぼうし"
  },
  {
    "label": 1123,
    "en": "pear hat",
    "jp": "ナシのぼうし"
  },
  {
    "label": 1124,
    "en": "cherry hat",
    "jp": "さくらんぼのぼうし"
  },
  {
    "label": 1125,
    "en": "peach hat",
    "jp": "モモのぼうし"
  },
  {
    "label": 1131,
    "en": "Labelle cap",
    "jp": "ケイトのキャップ"
  },
  {
    "label": 1132,
    "en": "Labelle hat",
    "jp": "ケイトのぼうし"
  },
  {
    "label": 1139,
    "en": "star bopper",
    "jp": "ひかるスターアクセサリー"
  },
  {
    "label": 1142,
    "en": "Nook Inc. cap",
    "jp": "たぬきかいはつキャップ"
  },
  {
    "label": 1143,
    "en": "Nook Inc. bandanna",
    "jp": "たぬきかいはつバンダナ"
  },
  {
    "label": 1147,
    "en": "rain hat",
    "jp": "レインハット"
  },
  {
    "label": 1153,
    "en": "tropical hat",
    "jp": "パインがらアウトドアハット"
  },
  {
    "label": 1163,
    "en": "tubeteika",
    "jp": "ウズベクなぼうし"
  },
  {
    "label": 1164,
    "en": "matanpushi",
    "jp": "マタンプシ"
  },
  {
    "label": 1186,
    "en": "DAL cap",
    "jp": "ＤＡＬキャップ"
  },
  {
    "label": 1192,
    "en": "OK Motors cap",
    "jp": "OKモータースのキャップ"
  },
  {
    "label": 1195,
    "en": "earth-egg shell",
    "jp": "じめんのたまごのから"
  },
  {
    "label": 1196,
    "en": "stone-egg shell",
    "jp": "いわのたまごのから"
  },
  {
    "label": 1197,
    "en": "leaf-egg shell",
    "jp": "はっぱのたまごのから"
  },
  {
    "label": 1198,
    "en": "wood-egg shell",
    "jp": "ウッディなたまごのから"
  },
  {
    "label": 1199,
    "en": "sky-egg shell",
    "jp": "そらとぶたまごのから"
  },
  {
    "label": 1200,
    "en": "water-egg shell",
    "jp": "サカナのたまごのから"
  },
  {
    "label": 1201,
    "en": "Bunny Day crown",
    "jp": "イースターなかんむり"
  },
  {
    "label": 1202,
    "en": "egg party hat",
    "jp": "たまごのパーティーハット"
  },
  {
    "label": 1221,
    "en": "handmade crown",
    "jp": "てづくりのおうかん"
  },
  {
    "label": 1222,
    "en": "sunflower crown",
    "jp": "ひまわりのはなかんむり"
  },
  {
    "label": 1224,
    "en": "mermaid tiara",
    "jp": "マーメイドなティアラ"
  },
  {
    "label": 1229,
    "en": "pirate bandanna",
    "jp": "かいぞくのバンダナ"
  },
  {
    "label": 1255,
    "en": "pirate-treasure crown",
    "jp": "かいぞくのおたからおうかん"
  },
  {
    "label": 1267,
    "en": "mage's striped hat",
    "jp": "まほうつかいのストライプぼう"
  },
  {
    "label": 1272,
    "en": "impish horns",
    "jp": "こあくまなツノ"
  },
  {
    "label": 1273,
    "en": "flashy pointy-ear animal hat",
    "jp": "ハデなアニマルさんかくみみぼう"
  },
  {
    "label": 1274,
    "en": "flashy round-ear animal hat",
    "jp": "ハデなアニマルまるみみぼう"
  },
  {
    "label": 1279,
    "en": "Hello Kitty hat",
    "jp": "ハローキティなぼうし"
  },
  {
    "label": 1284,
    "en": "Kiki & Lala pin",
    "jp": "キキ&ララなかみかざり"
  },
  {
    "label": 1295,
    "en": "Kerokerokeroppi pin",
    "jp": "けろけろけろっぴなかみかざり"
  },
  {
    "label": 1318,
    "en": "Mario hat",
    "jp": "マリオのぼうし"
  },
  {
    "label": 1319,
    "en": "Luigi hat",
    "jp": "ルイージのぼうし"
  },
  {
    "label": 1320,
    "en": "Wario hat",
    "jp": "ワリオのぼうし"
  },
  {
    "label": 1329,
    "en": "Princess Peach crown",
    "jp": "ピーチひめのかんむり"
  },
  {
    "label": 1351,
    "en": "shamrock hat",
    "jp": "シャムロックハット"
  },
  {
    "label": 1364,
    "en": "prom crown",
    "jp": "プロムなクラウン"
  },
  {
    "label": 1365,
    "en": "prom tiara",
    "jp": "プロムなティアラ"
  },
  {
    "label": 1375,
    "en": "Phrygian cap",
    "jp": "フリジアぼう"
  },
  {
    "label": 533,
    "en": "school hat",
    "jp": "つうがくぼう"
  },
  {
    "label": 550,
    "en": "New Year's hat",
    "jp": "ニューイヤーハット"
  },
  {
    "label": 551,
    "en": "birthday hat",
    "jp": "バースデーハット"
  },
  {
    "label": 552,
    "en": "hyacinth crown",
    "jp": "ヒヤシンスのかんむり"
  },
  {
    "label": 553,
    "en": "cool hyacinth crown",
    "jp": "ヒヤシンスのかんむり・クール"
  },
  {
    "label": 554,
    "en": "purple hyacinth crown",
    "jp": "ヒヤシンスのかんむり・パープル"
  },
  {
    "label": 555,
    "en": "windflower crown",
    "jp": "アネモネのかんむり"
  },
  {
    "label": 556,
    "en": "cool windflower crown",
    "jp": "アネモネのかんむり・クール"
  },
  {
    "label": 557,
    "en": "purple windflower crown",
    "jp": "アネモネのかんむり・パープル"
  },
  {
    "label": 558,
    "en": "tulip crown",
    "jp": "チューリップのかんむり"
  },
  {
    "label": 559,
    "en": "chic tulip crown",
    "jp": "チューリップのかんむり・シック"
  },
  {
    "label": 560,
    "en": "dark tulip crown",
    "jp": "チューリップのかんむり・ダーク"
  },
  {
    "label": 561,
    "en": "pansy crown",
    "jp": "パンジーのかんむり"
  },
  {
    "label": 562,
    "en": "cool pansy crown",
    "jp": "パンジーのかんむり・クール"
  },
  {
    "label": 563,
    "en": "purple pansy crown",
    "jp": "パンジーのかんむり・パープル"
  },
  {
    "label": 564,
    "en": "cosmos crown",
    "jp": "コスモスのかんむり"
  },
  {
    "label": 565,
    "en": "lovely cosmos crown",
    "jp": "コスモスのかんむり・ラブリー"
  },
  {
    "label": 566,
    "en": "dark cosmos crown",
    "jp": "コスモスのかんむり・ダーク"
  },
  {
    "label": 567,
    "en": "rose crown",
    "jp": "バラのかんむり"
  },
  {
    "label": 568,
    "en": "cute rose crown",
    "jp": "バラのかんむり・キュート"
  },
  {
    "label": 569,
    "en": "chic rose crown",
    "jp": "バラのかんむり・シック"
  },
  {
    "label": 570,
    "en": "lily crown",
    "jp": "ユリのかんむり"
  },
  {
    "label": 571,
    "en": "cute lily crown",
    "jp": "ユリのかんむり・キュート"
  },
  {
    "label": 572,
    "en": "dark lily crown",
    "jp": "ユリのかんむり・ダーク"
  },
  {
    "label": 573,
    "en": "mum crown",
    "jp": "キクのかんむり"
  },
  {
    "label": 574,
    "en": "chic mum crown",
    "jp": "キクのかんむり・シック"
  },
  {
    "label": 575,
    "en": "simple mum crown",
    "jp": "キクのかんむり・シンプル"
  },
  {
    "label": 579,
    "en": "mesh cap",
    "jp": "メッシュキャップ"
  },
  {
    "label": 580,
    "en": "top hat",
    "jp": "シルクハット"
  },
  {
    "label": 587,
    "en": "explorer's hat",
    "jp": "たんけんぼう"
  },
  {
    "label": 588,
    "en": "scholar's hat",
    "jp": "がくしのぼうし"
  },
  {
    "label": 589,
    "en": "sombrero",
    "jp": "ソンブレロ"
  },
  {
    "label": 590,
    "en": "safety helmet",
    "jp": "あんぜんヘルメット"
  },
  {
    "label": 591,
    "en": "chef's hat",
    "jp": "コックさんのぼうし"
  },
  {
    "label": 592,
    "en": "police cap",
    "jp": "けいかんのぼうし"
  },
  {
    "label": 593,
    "en": "pirate's hat",
    "jp": "かいぞくのぼうし"
  },
  {
    "label": 594,
    "en": "bamboo hat",
    "jp": "かさぼうし"
  },
  {
    "label": 595,
    "en": "faux-fur hat",
    "jp": "フェイクファーハット"
  },
  {
    "label": 596,
    "en": "do-rag",
    "jp": "さんかくきん"
  },
  {
    "label": 597,
    "en": "knit hat",
    "jp": "ニットキャップ"
  },
  {
    "label": 598,
    "en": "paperboy cap",
    "jp": "ハンチング"
  },
  {
    "label": 599,
    "en": "plain cap",
    "jp": "ワークキャップ"
  },
  {
    "label": 617,
    "en": "sailor's hat",
    "jp": "ふなのりのぼうし"
  },
  {
    "label": 618,
    "en": "viking helmet",
    "jp": "バイキングのかぶと"
  },
  {
    "label": 631,
    "en": "mage's hat",
    "jp": "まじょのぼうし"
  },
  {
    "label": 632,
    "en": "denim cap",
    "jp": "デニムキャップ"
  },
  {
    "label": 633,
    "en": "cycling cap",
    "jp": "サイクルキャップ"
  },
  {
    "label": 634,
    "en": "outdoor hat",
    "jp": "アウトドアハット"
  },
  {
    "label": 635,
    "en": "straw boater",
    "jp": "カンカンぼう"
  },
  {
    "label": 636,
    "en": "beret",
    "jp": "ベレーぼう"
  },
  {
    "label": 637,
    "en": "orange hat",
    "jp": "オレンジのぼうし"
  },
  {
    "label": 638,
    "en": "kiwi hat",
    "jp": "キウイのぼうし"
  },
  {
    "label": 639,
    "en": "strawberry hat",
    "jp": "いちごのぼうし"
  },
  {
    "label": 640,
    "en": "grape hat",
    "jp": "ぶどうのぼうし"
  },
  {
    "label": 641,
    "en": "pineapple cap",
    "jp": "パイナップルのぼうし"
  },
  {
    "label": 642,
    "en": "watermelon hat",
    "jp": "スイカのぼうし"
  },
  {
    "label": 644,
    "en": "sushi chef hat",
    "jp": "わぼうし"
  },
  {
    "label": 645,
    "en": "bicycle helmet",
    "jp": "サイクルヘルメット"
  },
  {
    "label": 646,
    "en": "swimming cap",
    "jp": "すいえいキャップ"
  },
  {
    "label": 647,
    "en": "silk hat",
    "jp": "チャイナハット"
  },
  {
    "label": 656,
    "en": "tulip hat",
    "jp": "チューリップハット"
  },
  {
    "label": 657,
    "en": "paisley bandanna",
    "jp": "ペイズリーのバンダナ"
  },
  {
    "label": 658,
    "en": "alpinist hat",
    "jp": "チロリアンハット"
  },
  {
    "label": 659,
    "en": "bowler hat with ribbon",
    "jp": "リボンボーラーハット"
  },
  {
    "label": 660,
    "en": "wide-brim straw hat",
    "jp": "つばひろストローハット"
  },
  {
    "label": 661,
    "en": "dotted shower cap",
    "jp": "みずたまシャワーキャップ"
  },
  {
    "label": 662,
    "en": "fedora",
    "jp": "なかおれハット"
  },
  {
    "label": 663,
    "en": "frugal hat",
    "jp": "しっそなぼうし"
  },
  {
    "label": 664,
    "en": "sports cap",
    "jp": "うんどうぼう"
  },
  {
    "label": 665,
    "en": "terry-cloth nightcap",
    "jp": "もこもこナイトキャップ"
  },
  {
    "label": 666,
    "en": "Santa hat",
    "jp": "サンタのぼうし"
  },
  {
    "label": 667,
    "en": "royal crown",
    "jp": "おうかん"
  },
  {
    "label": 668,
    "en": "newsprint helmet",
    "jp": "しんぶんしのかぶと"
  },
  {
    "label": 669,
    "en": "terry-cloth do-rag",
    "jp": "タオル"
  },
  {
    "label": 670,
    "en": "acorn knit cap",
    "jp": "どんぐりニット"
  },
  {
    "label": 671,
    "en": "combat helmet",
    "jp": "コンバットヘルメット"
  },
  {
    "label": 681,
    "en": "shallow knit cap",
    "jp": "あさいニットぼう"
  },
  {
    "label": 684,
    "en": "captain's hat",
    "jp": "キャプテンのぼうし"
  },
  {
    "label": 685,
    "en": "dandy hat",
    "jp": "キャスケット"
  },
  {
    "label": 688,
    "en": "wizard's cap",
    "jp": "とんがりぼうし"
  },
  {
    "label": 689,
    "en": "balloon hat",
    "jp": "バルーンハット"
  },
  {
    "label": 696,
    "en": "elegant hat",
    "jp": "エレガントなぼうし"
  },
  {
    "label": 701,
    "en": "jester's cap",
    "jp": "ピエロのぼうし"
  },
  {
    "label": 710,
    "en": "jockey's helmet",
    "jp": "ジョッキーヘルメット"
  },
  {
    "label": 714,
    "en": "detective hat",
    "jp": "めいたんていのぼうし"
  },
  {
    "label": 719,
    "en": "straw hat",
    "jp": "むぎわらぼうし"
  },
  {
    "label": 720,
    "en": "outback hat",
    "jp": "テンガロンハット"
  },
  {
    "label": 724,
    "en": "snowy knit cap",
    "jp": "スノーニットぼう"
  },
  {
    "label": 725,
    "en": "colorful striped knit cap",
    "jp": "カラフルボーダーニットぼう"
  },
  {
    "label": 751,
    "en": "imitation cow skull",
    "jp": "うしのほね"
  },
  {
    "label": 803,
    "en": "eggshell",
    "jp": "たまごのから"
  },
  {
    "label": 816,
    "en": "cavalier hat",
    "jp": "じゅうきしのぼうし"
  },
  {
    "label": 910,
    "en": "New Year's silk hat",
    "jp": "ニューイヤーシルクハット"
  },
  {
    "label": 929,
    "en": "ancient administrator hat",
    "jp": "かんぼう"
  },
  {
    "label": 930,
    "en": "glengarry",
    "jp": "グレンガリーぼう"
  },
  {
    "label": 935,
    "en": "pom casquette",
    "jp": "ボンボンつきキャスケット"
  },
  {
    "label": 936,
    "en": "tam-o'-shanter",
    "jp": "スコットランドぼうし"
  },
  {
    "label": 942,
    "en": "ribbon",
    "jp": "リボン"
  },
  {
    "label": 949,
    "en": "halo",
    "jp": "てんしのわ"
  },
  {
    "label": 950,
    "en": "nurse's cap",
    "jp": "ナースキャップ"
  },
  {
    "label": 951,
    "en": "soft-serve hat",
    "jp": "ソフトクリームなぼうし"
  },
  {
    "label": 952,
    "en": "bunny ears",
    "jp": "バニーのみみ"
  },
  {
    "label": 953,
    "en": "straw umbrella hat",
    "jp": "さんどがさ"
  },
  {
    "label": 954,
    "en": "ribboned straw hat",
    "jp": "ちいさめなぼうし"
  },
  {
    "label": 955,
    "en": "small silk hat",
    "jp": "ちいさめシルクハット"
  },
  {
    "label": 959,
    "en": "blue rose crown",
    "jp": "バラのかんむり・ブルー"
  },
  {
    "label": 960,
    "en": "gold rose crown",
    "jp": "バラのかんむり・ゴールド"
  },
  {
    "label": 961,
    "en": "tiara",
    "jp": "ティアラ"
  }
];

fashionNames.helmets = [
  {
    "label": 1008,
    "en": "tiara hair",
    "jp": "おひめさま"
  },
  {
    "label": 1009,
    "en": "headband",
    "jp": "ヘアターバン"
  },
  {
    "label": 1010,
    "en": "coin headpiece",
    "jp": "コインヘッドピース"
  },
  {
    "label": 1011,
    "en": "pigtail",
    "jp": "べんぱつ"
  },
  {
    "label": 1012,
    "en": "visual-punk wig",
    "jp": "ヴィジュアルけいウィッグ"
  },
  {
    "label": 1040,
    "en": "snowperson head",
    "jp": "ゆきだるまのぼうし"
  },
  {
    "label": 1113,
    "en": "star head",
    "jp": "おほしさまのあたま"
  },
  {
    "label": 1265,
    "en": "magic-academy hood",
    "jp": "まほうスクールのフード"
  },
  {
    "label": 1266,
    "en": "Jack's face",
    "jp": "パンプキングフェイス"
  },
  {
    "label": 1282,
    "en": "My Melody hood",
    "jp": "マイメロディなずきん"
  },
  {
    "label": 1288,
    "en": "Pompompurin hat",
    "jp": "ポムポムプリンなあたま"
  },
  {
    "label": 1304,
    "en": "Cinnamoroll hat",
    "jp": "シナモロールなぼうし"
  },
  {
    "label": 1343,
    "en": "okame mask",
    "jp": "おかめのおめん"
  },
  {
    "label": 1374,
    "en": "tsunokakushi",
    "jp": "つのかくし"
  },
  {
    "label": 674,
    "en": "headkerchief",
    "jp": "ほっかむり"
  },
  {
    "label": 675,
    "en": "fairy-tale hood",
    "jp": "メルヘンなずきん"
  },
  {
    "label": 676,
    "en": "mummy mask",
    "jp": "ミイラのかぶりもの"
  },
  {
    "label": 677,
    "en": "bunny hood",
    "jp": "ウサギのかぶりもの"
  },
  {
    "label": 678,
    "en": "cat cap",
    "jp": "ネコのかぶりもの"
  },
  {
    "label": 679,
    "en": "ski mask",
    "jp": "めだしぼう"
  },
  {
    "label": 680,
    "en": "skeleton hood",
    "jp": "ガイコツのかぶりもの"
  },
  {
    "label": 682,
    "en": "bear cap",
    "jp": "クマのかぶりもの"
  },
  {
    "label": 683,
    "en": "kappa cap",
    "jp": "カッパのおさら"
  },
  {
    "label": 686,
    "en": "knight's helmet",
    "jp": "アイアンアーマーヘルメット"
  },
  {
    "label": 687,
    "en": "frog cap",
    "jp": "カエルのかぶりもの"
  },
  {
    "label": 691,
    "en": "horned-ogre mask",
    "jp": "オニのおめん"
  },
  {
    "label": 692,
    "en": "gold helmet",
    "jp": "ゴールデンアーマーヘルメット"
  },
  {
    "label": 697,
    "en": "football helmet",
    "jp": "アメフトヘルメット"
  },
  {
    "label": 698,
    "en": "firefighter's hat",
    "jp": "しょうぼうしのぼうし"
  },
  {
    "label": 699,
    "en": "welding mask",
    "jp": "ようせつマスク"
  },
  {
    "label": 702,
    "en": "samurai helmet",
    "jp": "かぶと"
  },
  {
    "label": 704,
    "en": "milkmaid hat",
    "jp": "オランダのぼうし"
  },
  {
    "label": 706,
    "en": "pilot's cap",
    "jp": "ひこうぼう"
  },
  {
    "label": 707,
    "en": "baby's hat",
    "jp": "あかちゃんのぼうし"
  },
  {
    "label": 708,
    "en": "ninja hood",
    "jp": "にんじゃずきん"
  },
  {
    "label": 709,
    "en": "batter's helmet",
    "jp": "やきゅうのヘルメット"
  },
  {
    "label": 711,
    "en": "wrestling mask",
    "jp": "プロレスのマスク"
  },
  {
    "label": 712,
    "en": "hot-dog hood",
    "jp": "ホットドッグマスク"
  },
  {
    "label": 713,
    "en": "knit cap with earflaps",
    "jp": "みみあてつきニット"
  },
  {
    "label": 717,
    "en": "space helmet",
    "jp": "アストロヘルメット"
  },
  {
    "label": 718,
    "en": "paintball mask",
    "jp": "ペイントボールマスク"
  },
  {
    "label": 738,
    "en": "zap helmet",
    "jp": "ヒーローヘルメット"
  },
  {
    "label": 741,
    "en": "turban",
    "jp": "ターバン"
  },
  {
    "label": 742,
    "en": "helmet with goggles",
    "jp": "ゴーグルつきヘルメット"
  },
  {
    "label": 748,
    "en": "racing helmet",
    "jp": "フルフェイスメット"
  },
  {
    "label": 750,
    "en": "reindeer hat",
    "jp": "トナカイのぼうし"
  },
  {
    "label": 758,
    "en": "imp hood",
    "jp": "デビルなかぶりもの"
  },
  {
    "label": 759,
    "en": "sheep hood",
    "jp": "ひつじのかぶりもの"
  },
  {
    "label": 790,
    "en": "King Tut mask",
    "jp": "ツタンカーメン"
  },
  {
    "label": 822,
    "en": "veiled gardening hat",
    "jp": "のうぎょうぼう"
  },
  {
    "label": 825,
    "en": "headgear",
    "jp": "ヘッドギア"
  },
  {
    "label": 826,
    "en": "mohawk wig",
    "jp": "モヒカン"
  },
  {
    "label": 827,
    "en": "pompadour wig",
    "jp": "リーゼント"
  },
  {
    "label": 828,
    "en": "samurai wig",
    "jp": "ちょんまげ"
  },
  {
    "label": 829,
    "en": "matronly bun",
    "jp": "たまねぎヘアー"
  },
  {
    "label": 830,
    "en": "bridal veil",
    "jp": "じゅんぱくのヴェール"
  },
  {
    "label": 831,
    "en": "bun wig",
    "jp": "おだんごあたま"
  },
  {
    "label": 832,
    "en": "DJ cap",
    "jp": "ヘッドホン"
  },
  {
    "label": 833,
    "en": "gothic headdress",
    "jp": "ヘッドドレス"
  },
  {
    "label": 834,
    "en": "veil",
    "jp": "ベール"
  },
  {
    "label": 836,
    "en": "geisha wig",
    "jp": "ゲイシャさん"
  },
  {
    "label": 837,
    "en": "composer's wig",
    "jp": "おんがくかのかつら"
  },
  {
    "label": 838,
    "en": "power helmet",
    "jp": "パワードメット"
  },
  {
    "label": 900,
    "en": "paper bag",
    "jp": "かみぶくろ"
  },
  {
    "label": 917,
    "en": "fox mask",
    "jp": "キツネのおめん"
  },
  {
    "label": 918,
    "en": "elder mask",
    "jp": "おきなののうめん"
  },
  {
    "label": 919,
    "en": "Noh mask",
    "jp": "のうめん"
  },
  {
    "label": 923,
    "en": "hockey mask",
    "jp": "ホッケーのマスク"
  },
  {
    "label": 931,
    "en": "catcher's mask",
    "jp": "キャッチャーマスク"
  },
  {
    "label": 933,
    "en": "kaffiyeh",
    "jp": "アラビアのぼうし"
  },
  {
    "label": 934,
    "en": "stagehand hat",
    "jp": "くろこ"
  },
  {
    "label": 956,
    "en": "leaf mask",
    "jp": "はっぱのおめん"
  }
];

fashionNames.headwear = [...fashionNames.caps, ...fashionNames.helmets];

fashionNames.accessories = [
  {
    "label": 1055,
    "en": "pacifier",
    "jp": "おしゃぶり"
  },
  {
    "label": 1137,
    "en": "Labelle sunglasses",
    "jp": "ケイトのサングラス"
  },
  {
    "label": 1148,
    "en": "Nook Inc. eye mask",
    "jp": "たぬきかいはつアイマスク"
  },
  {
    "label": 1182,
    "en": "DAL eye mask",
    "jp": "ＤＡＬアイマスク"
  },
  {
    "label": 1183,
    "en": "DAL sunglasses",
    "jp": "ＤＡＬサングラス"
  },
  {
    "label": 1225,
    "en": "pirate eye patch",
    "jp": "かいぞくのアイパッチ"
  },
  {
    "label": 1226,
    "en": "pirate beard",
    "jp": "かいぞくのひげ"
  },
  {
    "label": 1271,
    "en": "animal nose",
    "jp": "アニマルなつけばな"
  },
  {
    "label": 1300,
    "en": "Nook Inc. snorkel",
    "jp": "たぬきかいはつシュノーケル"
  },
  {
    "label": 1324,
    "en": "Mario 'stache",
    "jp": "マリオのひげ"
  },
  {
    "label": 1325,
    "en": "Luigi 'stache",
    "jp": "ルイージのひげ"
  },
  {
    "label": 1326,
    "en": "Wario 'stache",
    "jp": "ワリオのひげ"
  },
  {
    "label": 1354,
    "en": "shamrock sunglasses",
    "jp": "シャムロックサングラス"
  },
  {
    "label": 184,
    "en": "beak",
    "jp": "くちばし"
  },
  {
    "label": 185,
    "en": "handlebar mustache",
    "jp": "カイゼルひげ"
  },
  {
    "label": 257,
    "en": "rimmed glasses",
    "jp": "まるめがね"
  },
  {
    "label": 258,
    "en": "square glasses",
    "jp": "スクエアめがね"
  },
  {
    "label": 259,
    "en": "heart shades",
    "jp": "ハートのサングラス"
  },
  {
    "label": 260,
    "en": "browline glasses",
    "jp": "サーモントめがね"
  },
  {
    "label": 261,
    "en": "octagonal glasses",
    "jp": "オクタゴンめがね"
  },
  {
    "label": 262,
    "en": "star shades",
    "jp": "ほしのサングラス"
  },
  {
    "label": 263,
    "en": "round shades",
    "jp": "ボストンめがね"
  },
  {
    "label": 264,
    "en": "triangle shades",
    "jp": "さんかくサングラス"
  },
  {
    "label": 277,
    "en": "double-bridge glasses",
    "jp": "ダブルブリッジめがね"
  },
  {
    "label": 286,
    "en": "glass-bottle glasses",
    "jp": "ビンぞこめがね"
  },
  {
    "label": 315,
    "en": "shattered glasses",
    "jp": "ヒビわれめがね"
  },
  {
    "label": 358,
    "en": "eye mask",
    "jp": "アイマスク"
  },
  {
    "label": 375,
    "en": "doctor's mask",
    "jp": "マスク"
  },
  {
    "label": 376,
    "en": "post-op patch",
    "jp": "がんたい"
  },
  {
    "label": 377,
    "en": "ski goggles",
    "jp": "スキーゴーグル"
  },
  {
    "label": 378,
    "en": "goggles",
    "jp": "すいえいゴーグル"
  },
  {
    "label": 379,
    "en": "retro shades",
    "jp": "レトロなサングラス"
  },
  {
    "label": 380,
    "en": "eye patch",
    "jp": "アイパッチ"
  },
  {
    "label": 381,
    "en": "sporty shades",
    "jp": "スポーツサングラス"
  },
  {
    "label": 382,
    "en": "pilot shades",
    "jp": "パイロットサングラス"
  },
  {
    "label": 383,
    "en": "tortoise specs",
    "jp": "べっこうめがね"
  },
  {
    "label": 384,
    "en": "tiny shades",
    "jp": "ちいさいサングラス"
  },
  {
    "label": 385,
    "en": "monocle",
    "jp": "モノクル"
  },
  {
    "label": 386,
    "en": "3D glasses",
    "jp": "3Dめがね"
  },
  {
    "label": 387,
    "en": "ladder shades",
    "jp": "ブラインドサングラス"
  },
  {
    "label": 397,
    "en": "cat nose",
    "jp": "ネコのつけばな"
  },
  {
    "label": 405,
    "en": "cucumber pack",
    "jp": "きゅうりパック"
  },
  {
    "label": 406,
    "en": "Santa beard",
    "jp": "サンタのヒゲ"
  },
  {
    "label": 407,
    "en": "fake nose",
    "jp": "つけばな"
  },
  {
    "label": 408,
    "en": "stache & glasses",
    "jp": "ヒゲメガネ"
  },
  {
    "label": 415,
    "en": "birthday shades",
    "jp": "バースデーサングラス"
  },
  {
    "label": 417,
    "en": "facial mask",
    "jp": "パック"
  },
  {
    "label": 418,
    "en": "funny glasses",
    "jp": "をかしなめがね"
  },
  {
    "label": 432,
    "en": "snorkel mask",
    "jp": "シュノーケル"
  },
  {
    "label": 433,
    "en": "cyber shades",
    "jp": "サイバーサングラス"
  },
  {
    "label": 441,
    "en": "ballroom mask",
    "jp": "ぶとうかいのかめん"
  },
  {
    "label": 463,
    "en": "bottom-rimmed glasses",
    "jp": "アンダーリムめがね"
  },
  {
    "label": 466,
    "en": "bunny nose",
    "jp": "ウサギのつけばな"
  },
  {
    "label": 473,
    "en": "round tinted shades",
    "jp": "ラウンドサングラス"
  },
  {
    "label": 474,
    "en": "butterfly shades",
    "jp": "バタフライサングラス"
  },
  {
    "label": 475,
    "en": "oval glasses",
    "jp": "オーバルめがね"
  },
  {
    "label": 484,
    "en": "pixel shades",
    "jp": "ドットサングラス"
  },
  {
    "label": 485,
    "en": "pig nose",
    "jp": "ブタのつけばな"
  },
  {
    "label": 487,
    "en": "gas mask",
    "jp": "ガスマスク"
  },
  {
    "label": 489,
    "en": "sticky rice",
    "jp": "ごはんつぶ"
  },
  {
    "label": 494,
    "en": "masquerade mask",
    "jp": "ベネチアンマスク"
  },
  {
    "label": 496,
    "en": "wooden-frame glasses",
    "jp": "ウッドフレームめがね"
  },
  {
    "label": 497,
    "en": "privacy mask",
    "jp": "カラスマスク"
  },
  {
    "label": 498,
    "en": "curly mustache",
    "jp": "まきヒゲ"
  },
  {
    "label": 502,
    "en": "goatee",
    "jp": "アゴひげ"
  },
  {
    "label": 503,
    "en": "bandage",
    "jp": "ばんそうこう"
  },
  {
    "label": 504,
    "en": "jester's mask",
    "jp": "ピエロのかめん"
  },
  {
    "label": 505,
    "en": "rounded beard",
    "jp": "ラウンドひげ"
  },
  {
    "label": 508,
    "en": "leaf",
    "jp": "はっぱ"
  },
  {
    "label": 509,
    "en": "rhinestone shades",
    "jp": "ラインストーンめがね"
  },
  {
    "label": 510,
    "en": "superhero mask",
    "jp": "ヒーローマスク"
  },
  {
    "label": 511,
    "en": "steampunk glasses",
    "jp": "スチームパンクなゴーグル"
  },
  {
    "label": 614,
    "en": "HMD",
    "jp": "HMD"
  },
  {
    "label": 615,
    "en": "night-vision goggles",
    "jp": "ナイトビジョン"
  },
  {
    "label": 630,
    "en": "dog nose",
    "jp": "イヌのつけばな"
  },
  {
    "label": 819,
    "en": "candy-skull mask",
    "jp": "スカルキャンディマスク"
  },
  {
    "label": 856,
    "en": "bubblegum",
    "jp": "ふうせんガム"
  },
  {
    "label": 857,
    "en": "flower sunglasses",
    "jp": "フラワーサングラス"
  },
  {
    "label": 865,
    "en": "drinking-straw glasses",
    "jp": "ストローメガネ"
  },
  {
    "label": 899,
    "en": "nose drip",
    "jp": "はなみず"
  },
  {
    "label": 904,
    "en": "food mess",
    "jp": "たべこぼし"
  },
  {
    "label": 921,
    "en": "reflector",
    "jp": "はんしゃきょう"
  },
  {
    "label": 922,
    "en": "pleather mask",
    "jp": "レザーマスク"
  },
  {
    "label": 937,
    "en": "elegant masquerade mask",
    "jp": "マスカレードなマスク"
  }
];

fashionNames.socks = [
  {
    "label": "47",
    "en": "stockings",
    "jp": "ストッキング"
  },
  {
    "label": "48",
    "en": "fishnet tights",
    "jp": "あみタイツ"
  },
  {
    "label": 1002,
    "en": "vivid socks",
    "jp": "ビビッドなソックス"
  },
  {
    "label": 1049,
    "en": "semi-opaque tights",
    "jp": "ニュアンスタイツ"
  },
  {
    "label": 1050,
    "en": "everyday tights",
    "jp": "デイリータイツ"
  },
  {
    "label": 1051,
    "en": "vivid tights",
    "jp": "ビビッドなタイツ"
  },
  {
    "label": 1052,
    "en": "neon tights",
    "jp": "ネオンタイツ"
  },
  {
    "label": 1053,
    "en": "vivid leggings",
    "jp": "ビビッドなレギンス"
  },
  {
    "label": 1054,
    "en": "neon leggings",
    "jp": "ネオンレギンス"
  },
  {
    "label": 1059,
    "en": "everyday socks",
    "jp": "デイリーソックス"
  },
  {
    "label": 1060,
    "en": "semi-opaque socks",
    "jp": "ニュアンスソックス"
  },
  {
    "label": 1133,
    "en": "Labelle tights",
    "jp": "ケイトのタイツ"
  },
  {
    "label": 1134,
    "en": "Labelle socks",
    "jp": "ケイトのソックス"
  },
  {
    "label": 1144,
    "en": "Nook Inc. socks",
    "jp": "たぬきかいはつソックス"
  },
  {
    "label": 1188,
    "en": "dotted knee-high socks",
    "jp": "ドットのニーハイソックス"
  },
  {
    "label": 1189,
    "en": "simple knee-high socks",
    "jp": "シンプルなニーハイソックス"
  },
  {
    "label": 1275,
    "en": "horizontal-striped tights",
    "jp": "ボーダータイツ"
  },
  {
    "label": 1286,
    "en": "Kiki & Lala socks",
    "jp": "キキ&ララなソックス"
  },
  {
    "label": 1296,
    "en": "Kerokerokeroppi socks",
    "jp": "けろけろけろっぴなハイソックス"
  },
  {
    "label": 519,
    "en": "back-bow socks",
    "jp": "リボンソックス"
  },
  {
    "label": 535,
    "en": "no-show socks",
    "jp": "スニーカーインソックス"
  },
  {
    "label": 536,
    "en": "Aran-knit socks",
    "jp": "アランニットのソックス"
  },
  {
    "label": 537,
    "en": "sequin leggings",
    "jp": "スパンコールレギンス"
  },
  {
    "label": 538,
    "en": "stretch leggings",
    "jp": "ストレッチレギンス"
  },
  {
    "label": 539,
    "en": "denim leggings",
    "jp": "デニムレギンス"
  },
  {
    "label": 540,
    "en": "tube socks",
    "jp": "ラインソックス"
  },
  {
    "label": 541,
    "en": "garter socks",
    "jp": "ガーターつきストッキング"
  },
  {
    "label": 542,
    "en": "nordic socks",
    "jp": "ノルディックなソックス"
  },
  {
    "label": 543,
    "en": "tabi",
    "jp": "たび"
  },
  {
    "label": 600,
    "en": "ultra no-show socks",
    "jp": "フットカバー"
  },
  {
    "label": 601,
    "en": "mixed-tweed socks",
    "jp": "ミックスツイードソックス"
  },
  {
    "label": 602,
    "en": "leg warmers",
    "jp": "レッグウォーマー"
  },
  {
    "label": 603,
    "en": "compression tights",
    "jp": "コンプレッションタイツ"
  },
  {
    "label": 604,
    "en": "bobby socks",
    "jp": "みつおりソックス"
  },
  {
    "label": 605,
    "en": "frilly knee-high socks",
    "jp": "フリルつきニーハイソックス"
  },
  {
    "label": 606,
    "en": "lace socks",
    "jp": "レースのソックス"
  },
  {
    "label": 607,
    "en": "frilly socks",
    "jp": "フリルソックス"
  },
  {
    "label": 608,
    "en": "holey tights",
    "jp": "あなあきタイツ"
  },
  {
    "label": 609,
    "en": "soccer socks",
    "jp": "サッカーソックス"
  },
  {
    "label": 610,
    "en": "holey socks",
    "jp": "あなあきソックス"
  },
  {
    "label": 611,
    "en": "pom-pom socks",
    "jp": "ポンポンソックス"
  },
  {
    "label": 612,
    "en": "color-blocked socks",
    "jp": "マルチブロックソックス"
  },
  {
    "label": 613,
    "en": "terry-cloth socks",
    "jp": "もこもこソックス"
  },
  {
    "label": 619,
    "en": "layered socks",
    "jp": "かさねばきソックス"
  },
  {
    "label": 620,
    "en": "hand-knit socks",
    "jp": "てあみのソックス"
  },
  {
    "label": 621,
    "en": "aerobics leggings",
    "jp": "エアロビレギンス"
  },
  {
    "label": 622,
    "en": "puckered socks",
    "jp": "くしゅくしゅソックス"
  },
  {
    "label": 623,
    "en": "striped socks",
    "jp": "ボーダーソックス"
  },
  {
    "label": 624,
    "en": "simple-accent socks",
    "jp": "ワンポイントソックス"
  },
  {
    "label": 625,
    "en": "kiddie socks",
    "jp": "キッズソックス"
  },
  {
    "label": 626,
    "en": "crocheted socks",
    "jp": "かぎばりあみソックス"
  },
  {
    "label": 627,
    "en": "spider-web tights",
    "jp": "スパイダーなタイツ"
  },
  {
    "label": 628,
    "en": "embroidered-flower tights",
    "jp": "はながらししゅうのタイツ"
  },
  {
    "label": 629,
    "en": "running tights",
    "jp": "ランニングタイツ"
  },
  {
    "label": 723,
    "en": "funny-face socks",
    "jp": "キャラクターソックス"
  },
  {
    "label": 749,
    "en": "geometric-print socks",
    "jp": "チマヨがらソックス"
  },
  {
    "label": 879,
    "en": "flowery-dot tights",
    "jp": "フラワードットタイツ"
  },
  {
    "label": 880,
    "en": "argyle crew socks",
    "jp": "アーガイルソックス"
  },
  {
    "label": 886,
    "en": "sheer socks",
    "jp": "シースルーソックス"
  },
  {
    "label": 887,
    "en": "wave-print socks",
    "jp": "せいがいはソックス"
  },
  {
    "label": 926,
    "en": "country socks",
    "jp": "カントリーソックス"
  },
  {
    "label": 927,
    "en": "striped tights",
    "jp": "ストライプソックス"
  },
  {
    "label": 928,
    "en": "patterned stockings",
    "jp": "デザインストッキング"
  }
];

fashionNames.shoes = [
  {
    "label": 1003,
    "en": "faux-suede sneakers",
    "jp": "スエードスニーカー"
  },
  {
    "label": 1097,
    "en": "kung-fu shoes",
    "jp": "カンフーシューズ"
  },
  {
    "label": 1098,
    "en": "embroidered shoes",
    "jp": "ししゅうのくつ"
  },
  {
    "label": 1135,
    "en": "Labelle pumps",
    "jp": "ケイトのパンプス"
  },
  {
    "label": 1136,
    "en": "Labelle sneakers",
    "jp": "ケイトのスニーカー"
  },
  {
    "label": 1145,
    "en": "Nook Inc. slippers",
    "jp": "たぬきかいはつスリッパ"
  },
  {
    "label": 1184,
    "en": "DAL slippers",
    "jp": "ＤＡＬスリッパ"
  },
  {
    "label": 1191,
    "en": "recycled boots",
    "jp": "リサイクルながぐつ"
  },
  {
    "label": 1211,
    "en": "earth-egg shoes",
    "jp": "じめんのたまごのくつ"
  },
  {
    "label": 1212,
    "en": "stone-egg shoes",
    "jp": "いわのたまごのくつ"
  },
  {
    "label": 1213,
    "en": "leaf-egg shoes",
    "jp": "はっぱのたまごのくつ"
  },
  {
    "label": 1214,
    "en": "wood-egg shoes",
    "jp": "ウッディなたまごのくつ"
  },
  {
    "label": 1215,
    "en": "sky-egg shoes",
    "jp": "そらとぶたまごのくつ"
  },
  {
    "label": 1216,
    "en": "water-egg shoes",
    "jp": "サカナのたまごのくつ"
  },
  {
    "label": 1217,
    "en": "wedding pumps",
    "jp": "じゅんぱくのパンプス"
  },
  {
    "label": 1218,
    "en": "wedding shoes",
    "jp": "じゅんぱくのシューズ"
  },
  {
    "label": 1223,
    "en": "mermaid shoes",
    "jp": "マーメイドなくつ"
  },
  {
    "label": 1228,
    "en": "pirate boots",
    "jp": "かいぞくのブーツ"
  },
  {
    "label": 1269,
    "en": "flashy animal boots",
    "jp": "ハデなアニマルきぐるみブーツ"
  },
  {
    "label": 1270,
    "en": "mage's boots",
    "jp": "まほうつかいのブーツ"
  },
  {
    "label": 1281,
    "en": "Hello Kitty shoes",
    "jp": "ハローキティなくつ"
  },
  {
    "label": 1283,
    "en": "My Melody boots",
    "jp": "マイメロディなブーツ"
  },
  {
    "label": 1287,
    "en": "Kiki & Lala shoes",
    "jp": "キキ&ララなストラップシューズ"
  },
  {
    "label": 1290,
    "en": "Pompompurin boots",
    "jp": "ポムポムプリンなブーツ"
  },
  {
    "label": 1292,
    "en": "Cinnamoroll sneakers",
    "jp": "シナモロールなスニーカー"
  },
  {
    "label": 1297,
    "en": "Kerokerokeroppi boots",
    "jp": "けろけろけろっぴなブーツ"
  },
  {
    "label": 1327,
    "en": "Wario shoes",
    "jp": "ワリオのくつ"
  },
  {
    "label": 1328,
    "en": "Mario shoes",
    "jp": "マリオのくつ"
  },
  {
    "label": 1331,
    "en": "Princess Peach shoes",
    "jp": "ピーチひめのくつ"
  },
  {
    "label": 1353,
    "en": "shamrock shoes",
    "jp": "シャムロックシューズ"
  },
  {
    "label": 1355,
    "en": "Luigi shoes",
    "jp": "ルイージのくつ"
  },
  {
    "label": 1363,
    "en": "dance shoes",
    "jp": "ダンスシューズ"
  },
  {
    "label": 236,
    "en": "kimono sandals",
    "jp": "げた"
  },
  {
    "label": 515,
    "en": "shower sandals",
    "jp": "シャワーサンダル"
  },
  {
    "label": 517,
    "en": "pleather sneakers",
    "jp": "レザーのスニーカー"
  },
  {
    "label": 520,
    "en": "faux-shearling boots",
    "jp": "ムートンブーツ"
  },
  {
    "label": 521,
    "en": "vinyl round-toed pumps",
    "jp": "エナメルのパンプス"
  },
  {
    "label": 522,
    "en": "loafers",
    "jp": "ローファー"
  },
  {
    "label": 523,
    "en": "cross-belt sandals",
    "jp": "クロスベルトサンダル"
  },
  {
    "label": 526,
    "en": "business shoes",
    "jp": "ビジネスシューズ"
  },
  {
    "label": 528,
    "en": "velour boots",
    "jp": "ベロアブーツ"
  },
  {
    "label": 529,
    "en": "rain boots",
    "jp": "レインブーツ"
  },
  {
    "label": 530,
    "en": "zori",
    "jp": "ぞうり"
  },
  {
    "label": 705,
    "en": "trekking shoes",
    "jp": "トレッキングシューズ"
  },
  {
    "label": 760,
    "en": "paw slippers",
    "jp": "アニマルスリッパ"
  },
  {
    "label": 761,
    "en": "flip-flops",
    "jp": "ビーチサンダル"
  },
  {
    "label": 762,
    "en": "mary janes",
    "jp": "ストラップシューズ"
  },
  {
    "label": 763,
    "en": "armor shoes",
    "jp": "アイアンアーマーシューズ"
  },
  {
    "label": 764,
    "en": "slip-on school shoes",
    "jp": "うわばき"
  },
  {
    "label": 765,
    "en": "pleather ankle booties",
    "jp": "レザーのショートブーツ"
  },
  {
    "label": 766,
    "en": "flower sandals",
    "jp": "フラワーなサンダル"
  },
  {
    "label": 767,
    "en": "faux-fur ankle booties",
    "jp": "ファーブーツ"
  },
  {
    "label": 768,
    "en": "leopard pumps",
    "jp": "アニマルパンプス"
  },
  {
    "label": 769,
    "en": "beaded sandals",
    "jp": "ビーズししゅうのサンダル"
  },
  {
    "label": 772,
    "en": "boots",
    "jp": "ながぐつ"
  },
  {
    "label": 776,
    "en": "antique boots",
    "jp": "アンティークなブーツ"
  },
  {
    "label": 777,
    "en": "gold-armor shoes",
    "jp": "ゴールデンアーマーシューズ"
  },
  {
    "label": 778,
    "en": "slippers",
    "jp": "スリッパ"
  },
  {
    "label": 779,
    "en": "work boots",
    "jp": "ワークブーツ"
  },
  {
    "label": 780,
    "en": "moccasin boots",
    "jp": "モカシンブーツ"
  },
  {
    "label": 782,
    "en": "pom-pom boots",
    "jp": "ポンポンつきブーツ"
  },
  {
    "label": 783,
    "en": "samurai greaves",
    "jp": "かっちゅうのすねあて"
  },
  {
    "label": 784,
    "en": "strappy heels",
    "jp": "ストラップつきパンプス"
  },
  {
    "label": 785,
    "en": "house slippers",
    "jp": "ルームシューズ"
  },
  {
    "label": 786,
    "en": "slip-on sandals",
    "jp": "スリッポンサンダル"
  },
  {
    "label": 787,
    "en": "slip-on loafers",
    "jp": "スリッポン"
  },
  {
    "label": 789,
    "en": "shiny bow platform shoes",
    "jp": "ロリータシューズ"
  },
  {
    "label": 791,
    "en": "ballet slippers",
    "jp": "バレエシューズ"
  },
  {
    "label": 792,
    "en": "visual-punk boots",
    "jp": "ヴィジュアルけいブーツ"
  },
  {
    "label": 794,
    "en": "rubber-toe high tops",
    "jp": "ラバートゥハイカットスニーカー"
  },
  {
    "label": 795,
    "en": "wooden clogs",
    "jp": "きぐつ"
  },
  {
    "label": 796,
    "en": "comfy sandals",
    "jp": "コンフォートサンダル"
  },
  {
    "label": 797,
    "en": "gladiator sandals",
    "jp": "グラディエーターサンダル"
  },
  {
    "label": 799,
    "en": "zap boots",
    "jp": "ヒーローブーツ"
  },
  {
    "label": 800,
    "en": "basketball shoes",
    "jp": "バスケットシューズ"
  },
  {
    "label": 801,
    "en": "jester's shoes",
    "jp": "ピエロのくつ"
  },
  {
    "label": 802,
    "en": "outdoor sandals",
    "jp": "アウトドアサンダル"
  },
  {
    "label": 804,
    "en": "cowboy boots",
    "jp": "ウェスタンブーツ"
  },
  {
    "label": 808,
    "en": "traditional flower shoes",
    "jp": "コッシン"
  },
  {
    "label": 809,
    "en": "water sandals",
    "jp": "アクアサンダル"
  },
  {
    "label": 811,
    "en": "cleats",
    "jp": "スパイク"
  },
  {
    "label": 812,
    "en": "winklepickers",
    "jp": "トンがったクツ"
  },
  {
    "label": 814,
    "en": "hi-tech sneakers",
    "jp": "ハイテクシューズ"
  },
  {
    "label": 815,
    "en": "ski boots",
    "jp": "スキーブーツ"
  },
  {
    "label": 820,
    "en": "lace-up boots",
    "jp": "あみあげブーツ"
  },
  {
    "label": 821,
    "en": "wrestling shoes",
    "jp": "リングシューズ"
  },
  {
    "label": 839,
    "en": "power boots",
    "jp": "パワードブーツ"
  },
  {
    "label": 863,
    "en": "space boots",
    "jp": "スペースブーツ"
  },
  {
    "label": 864,
    "en": "kiddie sneakers",
    "jp": "キッズなスニーカー"
  },
  {
    "label": 868,
    "en": "walking shoes",
    "jp": "ウォーキングシューズ"
  },
  {
    "label": 876,
    "en": "restroom slippers",
    "jp": "トイレスリッパ"
  },
  {
    "label": 878,
    "en": "cute sneakers",
    "jp": "キュートなスニーカー"
  },
  {
    "label": 881,
    "en": "moccasins",
    "jp": "モカシン"
  },
  {
    "label": 882,
    "en": "water shoes",
    "jp": "マリンシューズ"
  },
  {
    "label": 883,
    "en": "wingtip shoes",
    "jp": "ウイングチップのシューズ"
  },
  {
    "label": 888,
    "en": "ribbon sandals",
    "jp": "リボンサンダル"
  },
  {
    "label": 894,
    "en": "sporty sandals",
    "jp": "スポーツサンダル"
  },
  {
    "label": 924,
    "en": "ghillie brogues",
    "jp": "ギリー・ブローグズ"
  },
  {
    "label": 925,
    "en": "babouches",
    "jp": "バブーシュ"
  },
  {
    "label": 938,
    "en": "high-tops",
    "jp": "ハイカットスニーカー"
  },
  {
    "label": 941,
    "en": "steel-toed boots",
    "jp": "エンジニアブーツ"
  },
  {
    "label": 946,
    "en": "rubber-toe sneakers",
    "jp": "ラバートゥスニーカー"
  },
  {
    "label": 947,
    "en": "mage's booties",
    "jp": "とんがりブーツ"
  }
];

fashionNames.bags = [
  {
    "label": 1000,
    "en": "knitted-grass backpack",
    "jp": "くさあみリュック"
  },
  {
    "label": 1001,
    "en": "hard-shell backpack",
    "jp": "ハードシェルリュック"
  },
  {
    "label": 1150,
    "en": "Nook Inc. knapsack",
    "jp": "たぬきかいはつナップサック"
  },
  {
    "label": 1185,
    "en": "DAL backpack",
    "jp": "ＤＡＬのバッグ"
  },
  {
    "label": 1203,
    "en": "Bunny Day bag",
    "jp": "イースターなバッグ"
  },
  {
    "label": 1233,
    "en": "grape-harvest basket",
    "jp": "ぶどうのしゅうかくおけ"
  },
  {
    "label": 1268,
    "en": "impish wings",
    "jp": "こあくまなつばさバッグ"
  },
  {
    "label": 1362,
    "en": "prom sash",
    "jp": "プロムなたすき"
  },
  {
    "label": 957,
    "en": "town backpack",
    "jp": "タウンリュック"
  },
  {
    "label": 958,
    "en": "travel pouch",
    "jp": "トラベルポーチ"
  },
  {
    "label": 962,
    "en": "messenger bag",
    "jp": "メッセンジャーバッグ"
  },
  {
    "label": 963,
    "en": "dry bag",
    "jp": "ドライサック"
  },
  {
    "label": 964,
    "en": "pleather shoulder bag",
    "jp": "レザーショルダー"
  },
  {
    "label": 965,
    "en": "fish pochette",
    "jp": "おさかなポシェット"
  },
  {
    "label": 966,
    "en": "tackle bag",
    "jp": "フィッシングバッグ"
  },
  {
    "label": 967,
    "en": "bug cage",
    "jp": "ムシかご"
  },
  {
    "label": 968,
    "en": "faux-fur bag",
    "jp": "フェイクファーバッグ"
  },
  {
    "label": 969,
    "en": "pleather fringe bag",
    "jp": "フリンジレザーバッグ"
  },
  {
    "label": 970,
    "en": "hand-knit pouch",
    "jp": "てあみポーチ"
  },
  {
    "label": 971,
    "en": "crossbody bag",
    "jp": "ボディバッグ"
  },
  {
    "label": 972,
    "en": "pleather crossbody bag",
    "jp": "レザーボディバッグ"
  },
  {
    "label": 973,
    "en": "crossbody boston bag",
    "jp": "ななめかけボストン"
  },
  {
    "label": 974,
    "en": "gumdrop shoulder bag",
    "jp": "はるのみずたまショルダー"
  },
  {
    "label": 975,
    "en": "cloth shoulder bag",
    "jp": "はんぷショルダー"
  },
  {
    "label": 976,
    "en": "straw pochette",
    "jp": "ラタンポシェット"
  },
  {
    "label": 977,
    "en": "star pochette",
    "jp": "スターなポシェット"
  },
  {
    "label": 978,
    "en": "cherry-blossom pochette",
    "jp": "さくらのポシェット"
  },
  {
    "label": 979,
    "en": "maple-leaf pochette",
    "jp": "もみじのポシェット"
  },
  {
    "label": 980,
    "en": "acorn pochette",
    "jp": "どんぐりポシェット"
  },
  {
    "label": 981,
    "en": "snowflake pochette",
    "jp": "スノーフレークポシェット"
  },
  {
    "label": 982,
    "en": "shellfish pochette",
    "jp": "かいがらポシェット"
  },
  {
    "label": 983,
    "en": "tool bag",
    "jp": "ツールバッグ"
  },
  {
    "label": 984,
    "en": "retro sports bag",
    "jp": "スポーツバッグ"
  },
  {
    "label": 985,
    "en": "sacoche bag",
    "jp": "サコッシュ"
  },
  {
    "label": 986,
    "en": "evening bag",
    "jp": "パーティーバッグ"
  },
  {
    "label": 987,
    "en": "log pack",
    "jp": "せおいばしご"
  },
  {
    "label": 988,
    "en": "traveler's backpack",
    "jp": "たびびとのリュック"
  },
  {
    "label": 989,
    "en": "square backpack",
    "jp": "しかくいリュック"
  },
  {
    "label": 990,
    "en": "outdoor backpack",
    "jp": "アウトドアリュック"
  },
  {
    "label": 991,
    "en": "butterfly backpack",
    "jp": "ちょうちょのバッグ"
  },
  {
    "label": 992,
    "en": "studded backpack",
    "jp": "スタッズリュック"
  },
  {
    "label": 993,
    "en": "mini pleather bag",
    "jp": "ミニレザーバッグ"
  },
  {
    "label": 994,
    "en": "extra-large backpack",
    "jp": "おおきめザック"
  },
  {
    "label": 995,
    "en": "basket pack",
    "jp": "しょいこ"
  },
  {
    "label": 996,
    "en": "foldover-top backpack",
    "jp": "ふたつきリュック"
  },
  {
    "label": 997,
    "en": "knapsack",
    "jp": "ナップサック"
  },
  {
    "label": 998,
    "en": "canvas backpack",
    "jp": "はんぷリュック"
  },
  {
    "label": 999,
    "en": "Mom's knapsack",
    "jp": "ははのナップサック"
  }
];

fashionNames.umbrellas = [
  {
    "label": "Umbrella_05861",
    "en": "Toad parasol",
    "jp": "あかいみずたまのかさ"
  },
  {
    "label": "Umbrella_06840",
    "en": "leaf umbrella",
    "jp": "はっぱのかさ"
  },
  {
    "label": "Umbrella_06904",
    "en": "sunny parasol",
    "jp": "ひまわりのかさ"
  },
  {
    "label": "Umbrella_06905",
    "en": "snowflake umbrella",
    "jp": "スノーフレークのかさ"
  },
  {
    "label": "Umbrella_06906",
    "en": "hydrangea umbrella",
    "jp": "アジサイのかさ"
  },
  {
    "label": "Umbrella_06907",
    "en": "strawberry umbrella",
    "jp": "いちごのかさ"
  },
  {
    "label": "Umbrella_06908",
    "en": "kiwi umbrella",
    "jp": "キウイのかさ"
  },
  {
    "label": "Umbrella_06909",
    "en": "watermelon umbrella",
    "jp": "スイカのかさ"
  },
  {
    "label": "Umbrella_06910",
    "en": "pineapple umbrella",
    "jp": "パイナップルのかさ"
  },
  {
    "label": "Umbrella_06911",
    "en": "grape umbrella",
    "jp": "ぶどうのかさ"
  },
  {
    "label": "Umbrella_06912",
    "en": "orange umbrella",
    "jp": "オレンジのかさ"
  },
  {
    "label": "Umbrella_06913",
    "en": "raindrop umbrella",
    "jp": "レイニーなかさ"
  },
  {
    "label": "Umbrella_06914",
    "en": "mini-flower-print umbrella",
    "jp": "こばながらのかさ"
  },
  {
    "label": "Umbrella_06915",
    "en": "black lace umbrella",
    "jp": "くろいレースのかさ"
  },
  {
    "label": "Umbrella_06916",
    "en": "striped umbrella",
    "jp": "ストライプのかさ"
  },
  {
    "label": "Umbrella_06917",
    "en": "tartan-check umbrella",
    "jp": "タータンチェックのかさ"
  },
  {
    "label": "Umbrella_06918",
    "en": "patterned vinyl umbrella",
    "jp": "ガラいりビニールがさ"
  },
  {
    "label": "Umbrella_06919",
    "en": "bat umbrella",
    "jp": "こうもりがさ"
  },
  {
    "label": "Umbrella_06923",
    "en": "camo umbrella",
    "jp": "めいさいのかさ"
  },
  {
    "label": "Umbrella_06924",
    "en": "ghost umbrella",
    "jp": "てるてるぼうずのかさ"
  },
  {
    "label": "Umbrella_06925",
    "en": "frog umbrella",
    "jp": "カエルのかさ"
  },
  {
    "label": "Umbrella_06926",
    "en": "candy umbrella",
    "jp": "いちごギンガムのかさ"
  },
  {
    "label": "Umbrella_07164",
    "en": "pink umbrella",
    "jp": "ピンクのむじのかさ"
  },
  {
    "label": "Umbrella_07165",
    "en": "vinyl umbrella",
    "jp": "ビニールがさ"
  },
  {
    "label": "Umbrella_07166",
    "en": "two-tone umbrella",
    "jp": "ツートンなかさ"
  },
  {
    "label": "Umbrella_07167",
    "en": "bear umbrella",
    "jp": "クマのかさ"
  },
  {
    "label": "Umbrella_07169",
    "en": "maple-leaf umbrella",
    "jp": "もみじのかさ"
  },
  {
    "label": "Umbrella_07170",
    "en": "panda umbrella",
    "jp": "パンダのかさ"
  },
  {
    "label": "Umbrella_07171",
    "en": "exquisite parasol",
    "jp": "オリエンタルなかさ"
  },
  {
    "label": "Umbrella_07172",
    "en": "logo umbrella",
    "jp": "ロゴいりのかさ"
  },
  {
    "label": "Umbrella_07173",
    "en": "spider umbrella",
    "jp": "スパイダーなかさ"
  },
  {
    "label": "Umbrella_07174",
    "en": "mush umbrella",
    "jp": "キノコのかさ"
  },
  {
    "label": "Umbrella_07175",
    "en": "fairy-tale umbrella",
    "jp": "メルヘンなかさ"
  },
  {
    "label": "Umbrella_07176",
    "en": "pink shiny-bows parasol",
    "jp": "ピンクのロリータがさ"
  },
  {
    "label": "Umbrella_07177",
    "en": "kabuki umbrella",
    "jp": "かぶきなかさ"
  },
  {
    "label": "Umbrella_07178",
    "en": "paper parasol",
    "jp": "ばんがさ"
  },
  {
    "label": "Umbrella_07179",
    "en": "rainbow umbrella",
    "jp": "レインボーなかさ"
  },
  {
    "label": "Umbrella_07180",
    "en": "gelato umbrella",
    "jp": "トリコロールなかさ"
  },
  {
    "label": "Umbrella_07181",
    "en": "petal parasol",
    "jp": "マーガレットのかさ"
  },
  {
    "label": "Umbrella_07182",
    "en": "busted umbrella",
    "jp": "こわれたかさ"
  },
  {
    "label": "Umbrella_07183",
    "en": "purple chic umbrella",
    "jp": "むらさきのシックなかさ"
  },
  {
    "label": "Umbrella_08767",
    "en": "ladybug umbrella",
    "jp": "テントウムシのかさ"
  },
  {
    "label": "Umbrella_08768",
    "en": "fish umbrella",
    "jp": "サカナのかさ"
  },
  {
    "label": "Umbrella_09560",
    "en": "DAL umbrella",
    "jp": "ＤＡＬのかさ"
  },
  {
    "label": "Umbrella_09561",
    "en": "Nook Inc. umbrella",
    "jp": "たぬきかいはつのかさ"
  },
  {
    "label": "Umbrella_09945",
    "en": "cherry-blossom umbrella",
    "jp": "さくらのかさ"
  },
  {
    "label": "Umbrella_09946",
    "en": "lacy parasol",
    "jp": "レースのかさ"
  },
  {
    "label": "Umbrella_09947",
    "en": "peach umbrella",
    "jp": "モモのかさ"
  },
  {
    "label": "Umbrella_09948",
    "en": "apple umbrella",
    "jp": "リンゴのかさ"
  },
  {
    "label": "Umbrella_09949",
    "en": "cherry umbrella",
    "jp": "さくらんぼのかさ"
  },
  {
    "label": "Umbrella_09950",
    "en": "pear umbrella",
    "jp": "ナシのかさ"
  },
  {
    "label": "Umbrella_09951",
    "en": "melon umbrella",
    "jp": "わかばギンガムのかさ"
  },
  {
    "label": "Umbrella_09952",
    "en": "mint umbrella",
    "jp": "ミントギンガムのかさ"
  },
  {
    "label": "Umbrella_09953",
    "en": "picnic umbrella",
    "jp": "ベリーギンガムのかさ"
  },
  {
    "label": "Umbrella_09954",
    "en": "lemon umbrella",
    "jp": "レモンギンガムのかさ"
  },
  {
    "label": "Umbrella_09955",
    "en": "eggy parasol",
    "jp": "きいろみずたまのかさ"
  },
  {
    "label": "Umbrella_09956",
    "en": "blue dot parasol",
    "jp": "あおいみずたまのかさ"
  },
  {
    "label": "Umbrella_09957",
    "en": "beach umbrella",
    "jp": "ビーチなかさ"
  },
  {
    "label": "Umbrella_09958",
    "en": "red umbrella",
    "jp": "あかいむじのかさ"
  },
  {
    "label": "Umbrella_09959",
    "en": "blue umbrella",
    "jp": "あおいむじのかさ"
  },
  {
    "label": "Umbrella_09960",
    "en": "green umbrella",
    "jp": "みどりのむじのかさ"
  },
  {
    "label": "Umbrella_12133",
    "en": "purple shiny-bows parasol",
    "jp": "パープルのロリータがさ"
  },
  {
    "label": "Umbrella_12134",
    "en": "blue shiny-bows parasol",
    "jp": "ブルーのロリータがさ"
  },
  {
    "label": "Umbrella_12135",
    "en": "white shiny-bows parasol",
    "jp": "ホワイトのロリータがさ"
  },
  {
    "label": "Umbrella_12136",
    "en": "green chic umbrella",
    "jp": "みどりのシックなかさ"
  },
  {
    "label": "Umbrella_12137",
    "en": "black chic umbrella",
    "jp": "くろいシックなかさ"
  },
  {
    "label": "Umbrella_12138",
    "en": "red chic umbrella",
    "jp": "あかいシックなかさ"
  }
];

fashionNames.swimwear = [
  {
    "label": 1258,
    "en": "Nook Inc. wet suit",
    "jp": "たぬきかいはつマリンスーツ"
  },
  {
    "label": 1259,
    "en": "leaf-print wet suit",
    "jp": "はっぱがらマリンスーツ"
  },
  {
    "label": 1260,
    "en": "horizontal-striped wet suit",
    "jp": "ボーダーのマリンスーツ"
  }
]

let fashionVariants = {
  tops: [],
  bottoms: [],
  dresses: [],
  headwear: [],
  swimwear: [],
  caps: [],
  helmets: [],
  accessories: [],
  socks: [],
  shoes: [],
  bags: [],
  umbrellas: []
}

fashionVariants.tops = [
  {
    "label": "6_Tops_2655",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "6_Tops_4145",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "6_Tops_4146",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "6_Tops_4147",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "6_Tops_4148",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "6_Tops_4149",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "8_Tops_3255",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "8_Tops_4155",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "8_Tops_4156",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "8_Tops_4157",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "13_Tops_2782",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "13_Tops_4172",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "13_Tops_4173",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "13_Tops_4174",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "18_Tops_2402",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "18_Tops_9284",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "18_Tops_9285",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "18_Tops_9286",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "18_Tops_9287",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "19_Tops_2781",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "19_Tops_9131",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "19_Tops_9132",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "19_Tops_9133",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "19_Tops_9134",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "21_Tops_2401",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "21_Tops_8305",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "21_Tops_8306",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "21_Tops_8307",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "22_Tops_2498",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "23_Tops_2541",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "25_Tops_2670",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "25_Tops_8068",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "25_Tops_8069",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "25_Tops_8070",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "25_Tops_8071",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "25_Tops_8072",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "25_Tops_8073",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "25_Tops_8074",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "26_Tops_2672",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "26_Tops_9127",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "26_Tops_9128",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "26_Tops_9129",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "26_Tops_9130",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "27_Tops_2674",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "27_Tops_8396",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "27_Tops_8397",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "27_Tops_8398",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "27_Tops_8399",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "33_Tops_2727",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "33_Tops_8038",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "33_Tops_8039",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "33_Tops_8040",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "33_Tops_8041",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "33_Tops_8042",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "33_Tops_8043",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "33_Tops_8044",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "35_Tops_2746",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "35_Tops_11789",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "35_Tops_11790",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "35_Tops_11791",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "35_Tops_11792",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "35_Tops_11793",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "37_Tops_2778",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "37_Tops_8308",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "37_Tops_8309",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "37_Tops_8310",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "37_Tops_8311",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "37_Tops_8312",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "37_Tops_8313",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "37_Tops_8314",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "40_Tops_2823",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "40_Tops_8337",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "40_Tops_8338",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "40_Tops_8339",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "40_Tops_8340",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "42_Tops_3055",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "42_Tops_7560",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "42_Tops_7561",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "42_Tops_7562",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "42_Tops_7563",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "42_Tops_7564",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "42_Tops_7565",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "42_Tops_7566",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "43_Tops_3056",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "43_Tops_7969",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "43_Tops_7970",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "43_Tops_7971",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "43_Tops_7972",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "43_Tops_7973",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "43_Tops_7974",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "43_Tops_7975",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "44_Tops_3057",
    "en": "Tulip",
    "jp": "チューリップ"
  },
  {
    "label": "44_Tops_10897",
    "en": "Chick",
    "jp": "ヒヨコ"
  },
  {
    "label": "44_Tops_10898",
    "en": "Cherry blossom",
    "jp": "サクラ"
  },
  {
    "label": "44_Tops_10899",
    "en": "Frog",
    "jp": "カエル"
  },
  {
    "label": "56_Tops_3140",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "56_Tops_8681",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "56_Tops_8682",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "56_Tops_8683",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "59_Tops_3144",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "59_Tops_8341",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "59_Tops_8342",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "59_Tops_8343",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "59_Tops_8344",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "60_Tops_3145",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "60_Tops_8345",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "60_Tops_8346",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "60_Tops_8347",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "60_Tops_8348",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "62_Tops_3147",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "62_Tops_7433",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "62_Tops_7434",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "64_Tops_3164",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "64_Tops_9197",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "64_Tops_9198",
    "en": "Brown",
    "jp": "ちゃいろ"
  },
  {
    "label": "64_Tops_9199",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "70_Tops_3170",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "70_Tops_8288",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "70_Tops_8289",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "70_Tops_8290",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "70_Tops_8291",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "70_Tops_8292",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "70_Tops_8293",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "70_Tops_8294",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "71_Tops_3171",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "71_Tops_7419",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "71_Tops_7420",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "71_Tops_7421",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "71_Tops_7422",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "71_Tops_7423",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "71_Tops_7424",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "71_Tops_7425",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "72_Tops_3172",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "72_Tops_8537",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "72_Tops_8538",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "72_Tops_8539",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "72_Tops_8540",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "72_Tops_8541",
    "en": "Ivory",
    "jp": "アイボリー"
  },
  {
    "label": "72_Tops_8542",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "72_Tops_8543",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "73_Tops_3174",
    "en": "Red necktie",
    "jp": "あかネクタイ"
  },
  {
    "label": "73_Tops_7794",
    "en": "Black necktie",
    "jp": "くろネクタイ"
  },
  {
    "label": "74_Tops_3177",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "74_Tops_9588",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "74_Tops_9589",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "74_Tops_9590",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "74_Tops_9591",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "74_Tops_9592",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "74_Tops_9593",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "75_Tops_3178",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "75_Tops_8263",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "75_Tops_8264",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "75_Tops_8265",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "76_Tops_3179",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "76_Tops_10915",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "76_Tops_10916",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "76_Tops_10917",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "77_Tops_3192",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "77_Tops_8373",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "77_Tops_8374",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "77_Tops_8375",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "77_Tops_8376",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "78_Tops_3197",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "78_Tops_8097",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "78_Tops_8098",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "78_Tops_8099",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "78_Tops_8100",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "78_Tops_8101",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "78_Tops_8102",
    "en": "Aquamarine",
    "jp": "エメラルド"
  },
  {
    "label": "78_Tops_8103",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "79_Tops_3198",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "79_Tops_8559",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "79_Tops_8560",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "79_Tops_8561",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "79_Tops_8562",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "79_Tops_8563",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "80_Tops_3203",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "80_Tops_8075",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "80_Tops_8076",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "80_Tops_8077",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "81_Tops_3209",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "81_Tops_11419",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "81_Tops_11420",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "81_Tops_11421",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "81_Tops_11422",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "82_Tops_3212",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "82_Tops_9594",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "83_Tops_3219",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "83_Tops_8617",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "83_Tops_8618",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "83_Tops_8619",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "83_Tops_8620",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "83_Tops_8621",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "83_Tops_8622",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "83_Tops_8623",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "84_Tops_3222",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "84_Tops_9222",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "84_Tops_9223",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "84_Tops_9224",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "84_Tops_9225",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "85_Tops_3225",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "85_Tops_8945",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "85_Tops_8946",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "85_Tops_8947",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "85_Tops_8948",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "86_Tops_3227",
    "en": "Washed out",
    "jp": "ウォッシュ"
  },
  {
    "label": "86_Tops_11423",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "86_Tops_11424",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "86_Tops_11425",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "86_Tops_11426",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "87_Tops_3228",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "87_Tops_9595",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "87_Tops_9596",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "87_Tops_9597",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "87_Tops_9598",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "87_Tops_9599",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "87_Tops_9600",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "87_Tops_9601",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "88_Tops_3231",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "88_Tops_7449",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "88_Tops_7450",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "88_Tops_7451",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "90_Tops_3233",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "90_Tops_8229",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "90_Tops_8230",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "91_Tops_3237",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "91_Tops_6819",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "91_Tops_6820",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "91_Tops_6821",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "91_Tops_9772",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "91_Tops_9773",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "91_Tops_9774",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "92_Tops_3239",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "92_Tops_8078",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "92_Tops_8079",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "92_Tops_8080",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "92_Tops_8081",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "93_Tops_3244",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "93_Tops_7198",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "93_Tops_7199",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "93_Tops_7200",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "93_Tops_7201",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "93_Tops_7202",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "94_Tops_3245",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "94_Tops_8477",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "94_Tops_8478",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "94_Tops_8479",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "95_Tops_3246",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "95_Tops_9372",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "95_Tops_9373",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "95_Tops_9374",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "95_Tops_9375",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "95_Tops_9376",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "95_Tops_9377",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "95_Tops_9378",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "96_Tops_3248",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "96_Tops_9135",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "96_Tops_9136",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "96_Tops_9137",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "96_Tops_9138",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "96_Tops_9139",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "96_Tops_9140",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "97_Tops_3249",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "97_Tops_9379",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "97_Tops_9380",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "97_Tops_9381",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "97_Tops_9382",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "97_Tops_9383",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "97_Tops_9384",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "97_Tops_9385",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "98_Tops_3253",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "99_Tops_3254",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "99_Tops_9200",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "99_Tops_9201",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "99_Tops_9202",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "99_Tops_9203",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "100_Tops_3256",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1005_Tops_6835",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1006_Tops_6888",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "101_Tops_3257",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "101_Tops_8420",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "101_Tops_8421",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "101_Tops_8422",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "101_Tops_8423",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "101_Tops_12352",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "101_Tops_12353",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "102_Tops_3258",
    "en": "Blue & white",
    "jp": "ブルー×ホワイト"
  },
  {
    "label": "102_Tops_9386",
    "en": "Black & blue",
    "jp": "ブラック×ブルー"
  },
  {
    "label": "102_Tops_9387",
    "en": "Black & red",
    "jp": "ブラック×レッド"
  },
  {
    "label": "102_Tops_9388",
    "en": "Yellow & black",
    "jp": "イエロー×ブラック"
  },
  {
    "label": "102_Tops_9389",
    "en": "Red & green",
    "jp": "レッド×グリーン"
  },
  {
    "label": "102_Tops_9390",
    "en": "Red & orange",
    "jp": "レッド×オレンジ"
  },
  {
    "label": "102_Tops_9391",
    "en": "Lime & light blue",
    "jp": "ライム×ライトブルー"
  },
  {
    "label": "102_Tops_9392",
    "en": "Purple & pink",
    "jp": "パープル×ピンク"
  },
  {
    "label": "1021_Tops_8192",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1022_Tops_8193",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1022_Tops_8299",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1023_Tops_8194",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1024_Tops_8195",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1025_Tops_8196",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1026_Tops_8197",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1027_Tops_8198",
    "en": "Tiger",
    "jp": "タイガー"
  },
  {
    "label": "1027_Tops_12066",
    "en": "Zebra",
    "jp": "ゼブラ"
  },
  {
    "label": "1028_Tops_8199",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1028_Tops_8302",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1028_Tops_8303",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1028_Tops_8304",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1029_Tops_8200",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "103_Tops_3259",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1030_Tops_8201",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "1031_Tops_8202",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1031_Tops_8296",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1032_Tops_8203",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1032_Tops_9498",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1032_Tops_9499",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1032_Tops_9500",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1032_Tops_9501",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1033_Tops_8204",
    "en": "Red, green & gold",
    "jp": "ラスタカラー"
  },
  {
    "label": "1034_Tops_8205",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1034_Tops_12099",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1034_Tops_12100",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1034_Tops_12101",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1034_Tops_12102",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1035_Tops_8206",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1035_Tops_12098",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1036_Tops_8207",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1037_Tops_8208",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1037_Tops_12199",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1037_Tops_12200",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1038_Tops_8532",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1046_Tops_9535",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1047_Tops_9536",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1056_Tops_8762",
    "en": "M",
    "jp": "M"
  },
  {
    "label": "1056_Tops_9614",
    "en": "Flowers",
    "jp": "フラワー"
  },
  {
    "label": "1056_Tops_12141",
    "en": "Star",
    "jp": "スター"
  },
  {
    "label": "1056_Tops_12142",
    "en": "Animal",
    "jp": "アニマル"
  },
  {
    "label": "1056_Tops_12143",
    "en": "Teddy bear",
    "jp": "テディベア"
  },
  {
    "label": "1056_Tops_12144",
    "en": "Accent patch",
    "jp": "ワンポイント"
  },
  {
    "label": "1056_Tops_12145",
    "en": "Quilted pattern",
    "jp": "キルトパターン"
  },
  {
    "label": "1056_Tops_12146",
    "en": "Chicks",
    "jp": "ヒヨコ"
  },
  {
    "label": "1057_Tops_8763",
    "en": "M",
    "jp": "M"
  },
  {
    "label": "1057_Tops_9615",
    "en": "Flowers",
    "jp": "フラワー"
  },
  {
    "label": "1057_Tops_12147",
    "en": "Animals",
    "jp": "アニマル"
  },
  {
    "label": "1057_Tops_12156",
    "en": "Quilted pattern",
    "jp": "キルトパターン"
  },
  {
    "label": "1057_Tops_12157",
    "en": "Fruits",
    "jp": "フルーツ"
  },
  {
    "label": "1057_Tops_12158",
    "en": "Denim",
    "jp": "デニム"
  },
  {
    "label": "1057_Tops_12159",
    "en": "Forest print",
    "jp": "フォレスト"
  },
  {
    "label": "1057_Tops_12160",
    "en": "Family",
    "jp": "ファミリー"
  },
  {
    "label": "1058_Tops_2725",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1058_Tops_2730",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1058_Tops_4151",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "106_Tops_3262",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "106_Tops_8480",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "106_Tops_8481",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "106_Tops_8482",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "106_Tops_8483",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "106_Tops_8484",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1062_Tops_9768",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1062_Tops_11950",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1062_Tops_11951",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1063_Tops_9775",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1063_Tops_11922",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1063_Tops_11923",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1063_Tops_11924",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1063_Tops_11925",
    "en": "Turquoise",
    "jp": "ターコイズ"
  },
  {
    "label": "1063_Tops_11926",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1066_Tops_9815",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1066_Tops_12086",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1066_Tops_12087",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1066_Tops_12088",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1066_Tops_12089",
    "en": "Aquamarine",
    "jp": "エメラルド"
  },
  {
    "label": "1066_Tops_12090",
    "en": "Cream",
    "jp": "クリーム"
  },
  {
    "label": "1066_Tops_12091",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "107_Tops_3264",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "107_Tops_9431",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "107_Tops_9432",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "107_Tops_9433",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1072_Tops_9821",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1072_Tops_12161",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1072_Tops_12162",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1074_Tops_9823",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1074_Tops_12163",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1074_Tops_12164",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1078_Tops_9827",
    "en": "Fancy plaid",
    "jp": "ファンシーチェック"
  },
  {
    "label": "1078_Tops_12083",
    "en": "Energetic plaid",
    "jp": "ビタミンチェック"
  },
  {
    "label": "1078_Tops_12084",
    "en": "Dreamy plaid",
    "jp": "ドリームチェック"
  },
  {
    "label": "1078_Tops_12085",
    "en": "Sweet plaid",
    "jp": "スイートチェック"
  },
  {
    "label": "1079_Tops_9828",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1079_Tops_11952",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1079_Tops_11953",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1079_Tops_11954",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "108_Tops_3265",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "108_Tops_8104",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "108_Tops_8105",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "108_Tops_8106",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "108_Tops_8107",
    "en": "Aquamarine",
    "jp": "エメラルド"
  },
  {
    "label": "108_Tops_8108",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1081_Tops_9830",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1081_Tops_11955",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "1082_Tops_9831",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1082_Tops_11956",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1083_Tops_9832",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1083_Tops_11957",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1083_Tops_11958",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "109_Tops_3266",
    "en": "Red-striped necktie",
    "jp": "レッドストライプタイ"
  },
  {
    "label": "109_Tops_8485",
    "en": "Blue-striped necktie",
    "jp": "ブルーストライプタイ"
  },
  {
    "label": "109_Tops_8486",
    "en": "Purple-striped necktie",
    "jp": "パープルストライプタイ"
  },
  {
    "label": "109_Tops_8487",
    "en": "Green-striped necktie",
    "jp": "グリーンストライプタイ"
  },
  {
    "label": "109_Tops_8488",
    "en": "White-striped necktie",
    "jp": "モノクロストライプタイ"
  },
  {
    "label": "110_Tops_3268",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "110_Tops_9204",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "111_Tops_3269",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "111_Tops_8109",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "111_Tops_8110",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "111_Tops_8111",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "112_Tops_3283",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1126_Tops_9875",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1126_Tops_11716",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1126_Tops_11717",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1126_Tops_11718",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1126_Tops_11719",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1126_Tops_11720",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1127_Tops_9876",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1127_Tops_11721",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1127_Tops_11722",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1127_Tops_11723",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1127_Tops_11724",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1127_Tops_11725",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1140_Tops_5625",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1141_Tops_5626",
    "en": "Ivory",
    "jp": "アイボリー"
  },
  {
    "label": "1146_Tops_6822",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1149_Tops_9760",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1151_Tops_8764",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1152_Tops_8765",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "1154_Tops_11095",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1154_Tops_11927",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1154_Tops_11928",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1154_Tops_11929",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1154_Tops_11930",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1154_Tops_12189",
    "en": "Cream",
    "jp": "クリーム"
  },
  {
    "label": "1154_Tops_12190",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1154_Tops_12191",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "1160_Tops_10909",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1160_Tops_12020",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1160_Tops_12035",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1165_Tops_12036",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1166_Tops_12037",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1167_Tops_12038",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1168_Tops_12114",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1169_Tops_12115",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1170_Tops_12116",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1171_Tops_12117",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1172_Tops_12118",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1173_Tops_12119",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1174_Tops_12120",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1175_Tops_12121",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1176_Tops_12122",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1177_Tops_12123",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1178_Tops_12124",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1179_Tops_12125",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1180_Tops_12126",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1181_Tops_12127",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1193_Tops_12425",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1194_Tops_12426",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1220_Tops_12575",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1246_Tops_12959",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1256_Tops_12982",
    "en": "Coral",
    "jp": "コーラル"
  },
  {
    "label": "1257_Tops_12983",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1280_Tops_13166",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1285_Tops_13171",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1289_Tops_13176",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1291_Tops_13178",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1294_Tops_13181",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "130_Tops_3316",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "130_Tops_8489",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "130_Tops_8490",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "130_Tops_8491",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "130_Tops_8492",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "130_Tops_8493",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1305_Tops_13298",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "131_Tops_3320",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "132_Tops_3321",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "133_Tops_3322",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1333_Tops_13759",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "134_Tops_3323",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "135_Tops_3324",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "136_Tops_3325",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "137_Tops_3326",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1378_Tops_14283",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1378_Tops_14646",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1378_Tops_14647",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1378_Tops_14648",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1378_Tops_14649",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "138_Tops_3328",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "138_Tops_8494",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "138_Tops_8495",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "138_Tops_8496",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "138_Tops_8497",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "139_Tops_3334",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "139_Tops_7611",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "139_Tops_7612",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "139_Tops_7613",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "139_Tops_7614",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "139_Tops_7615",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "139_Tops_7616",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "143_Tops_3339",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "143_Tops_8266",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "143_Tops_8267",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "143_Tops_8268",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "143_Tops_8269",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "147_Tops_3350",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "147_Tops_7790",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "147_Tops_7791",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "151_Tops_3383",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "151_Tops_7762",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "151_Tops_7763",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "151_Tops_7764",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "151_Tops_7765",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "151_Tops_7766",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "151_Tops_7767",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "151_Tops_7768",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "156_Tops_3388",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "156_Tops_8270",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "156_Tops_8271",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "157_Tops_3390",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "159_Tops_3401",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "177_Tops_3474",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "177_Tops_8272",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "177_Tops_8273",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "177_Tops_8274",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "177_Tops_8275",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "179_Tops_3489",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "179_Tops_8116",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "179_Tops_8117",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "179_Tops_8118",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "191_Tops_3575",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "191_Tops_8424",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "191_Tops_8425",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "191_Tops_8426",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "194_Tops_3578",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "194_Tops_8015",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "194_Tops_8016",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "194_Tops_8017",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "194_Tops_8018",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "194_Tops_8019",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "195_Tops_3579",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "195_Tops_7742",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "195_Tops_7743",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "195_Tops_7744",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "195_Tops_7745",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "195_Tops_7746",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "195_Tops_7747",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "195_Tops_7748",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "196_Tops_3597",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "196_Tops_7842",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "196_Tops_7843",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "196_Tops_7844",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "197_Tops_3599",
    "en": "Ivory",
    "jp": "アイボリー"
  },
  {
    "label": "197_Tops_7749",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "197_Tops_7750",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "197_Tops_7751",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "206_Tops_3630",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "206_Tops_7720",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "206_Tops_7721",
    "en": "Light gray",
    "jp": "ライトグレー"
  },
  {
    "label": "206_Tops_7722",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "206_Tops_7723",
    "en": "Off-white",
    "jp": "オフホワイト"
  },
  {
    "label": "207_Tops_3631",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "207_Tops_7738",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "207_Tops_7739",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "208_Tops_3632",
    "en": "Ice blue",
    "jp": "アイスブルー"
  },
  {
    "label": "208_Tops_7715",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "208_Tops_7716",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "208_Tops_7717",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "208_Tops_7718",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "208_Tops_7719",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "209_Tops_3633",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "209_Tops_7672",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "209_Tops_7673",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "209_Tops_7674",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "209_Tops_7675",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "209_Tops_7676",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "209_Tops_7677",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "210_Tops_3635",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "210_Tops_8001",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "212_Tops_3643",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "212_Tops_7678",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "212_Tops_7679",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "212_Tops_7680",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "217_Tops_3663",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "217_Tops_8433",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "217_Tops_8434",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "218_Tops_3666",
    "en": "Yellow & navy",
    "jp": "イエロー×ネイビー"
  },
  {
    "label": "218_Tops_7622",
    "en": "Green & navy",
    "jp": "グリーン×ネイビー"
  },
  {
    "label": "218_Tops_7623",
    "en": "Rose red & navy",
    "jp": "ワインレッド×ネイビー"
  },
  {
    "label": "218_Tops_7624",
    "en": "Beige & navy",
    "jp": "ベージュ×ネイビー"
  },
  {
    "label": "218_Tops_7625",
    "en": "Green & purple",
    "jp": "グリーン×パープル"
  },
  {
    "label": "218_Tops_7626",
    "en": "Yellow & red",
    "jp": "イエロー×レッド"
  },
  {
    "label": "218_Tops_7627",
    "en": "Navy & gray",
    "jp": "ネイビー×グレー"
  },
  {
    "label": "218_Tops_7628",
    "en": "Light blue & black",
    "jp": "ライトブルー×ブラック"
  },
  {
    "label": "220_Tops_3671",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "220_Tops_7976",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "220_Tops_7977",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "220_Tops_7978",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "220_Tops_7979",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "220_Tops_7980",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "222_Tops_3674",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "222_Tops_8544",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "222_Tops_8545",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "222_Tops_8546",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "223_Tops_3676",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "223_Tops_8400",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "223_Tops_8401",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "223_Tops_8402",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "224_Tops_3677",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "224_Tops_7776",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "224_Tops_7777",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "224_Tops_7778",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "224_Tops_7779",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "224_Tops_7780",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "224_Tops_8834",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "225_Tops_3680",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "225_Tops_9288",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "225_Tops_9289",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "225_Tops_9290",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "228_Tops_3687",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "228_Tops_9434",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "228_Tops_9435",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "228_Tops_9436",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "229_Tops_3688",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "229_Tops_9291",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "229_Tops_9292",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "229_Tops_9293",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "229_Tops_9294",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "229_Tops_9295",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "229_Tops_9296",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "230_Tops_3690",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "230_Tops_8510",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "231_Tops_3694",
    "en": "Ochre",
    "jp": "オーカー"
  },
  {
    "label": "231_Tops_8511",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "231_Tops_8512",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "231_Tops_8513",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "233_Tops_3698",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "233_Tops_9437",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "233_Tops_9438",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "233_Tops_9439",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "233_Tops_9440",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "233_Tops_9441",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "233_Tops_9442",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "233_Tops_9443",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "234_Tops_3700",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "234_Tops_8547",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "234_Tops_8548",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "237_Tops_3705",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "237_Tops_8315",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "237_Tops_8316",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "237_Tops_8317",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "237_Tops_8318",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "237_Tops_8319",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "237_Tops_8320",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "237_Tops_8321",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "238_Tops_3706",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "238_Tops_8121",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "238_Tops_8122",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "238_Tops_8123",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "238_Tops_8124",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "238_Tops_8125",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "241_Tops_3804",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "241_Tops_8549",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "241_Tops_8550",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "241_Tops_8551",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "242_Tops_3811",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "242_Tops_8581",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "243_Tops_3939",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "243_Tops_8435",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "243_Tops_8436",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "243_Tops_8437",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "244_Tops_3941",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "244_Tops_8438",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "244_Tops_8439",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "244_Tops_8440",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "246_Tops_4154",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "246_Tops_8427",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "246_Tops_8428",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "249_Tops_4198",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "249_Tops_8498",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "249_Tops_8499",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "249_Tops_8500",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "249_Tops_8501",
    "en": "Cream",
    "jp": "クリーム"
  },
  {
    "label": "250_Tops_4205",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "250_Tops_8045",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "250_Tops_8046",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "250_Tops_8047",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "250_Tops_8048",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "250_Tops_8049",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "250_Tops_8050",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "250_Tops_8051",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "251_Tops_4207",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "251_Tops_8564",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "251_Tops_8565",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "252_Tops_4211",
    "en": "Rainbow",
    "jp": "レインボー"
  },
  {
    "label": "253_Tops_4212",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "253_Tops_8514",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "253_Tops_8515",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "253_Tops_8516",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "253_Tops_8517",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "254_Tops_4220",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "254_Tops_9297",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "254_Tops_9298",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "254_Tops_9299",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "254_Tops_9300",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "266_Tops_4247",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "266_Tops_8582",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "266_Tops_8583",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "266_Tops_8584",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "266_Tops_8585",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "271_Tops_4253",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "271_Tops_8082",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "271_Tops_8083",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "271_Tops_8084",
    "en": "Dark gray",
    "jp": "ダークグレー"
  },
  {
    "label": "271_Tops_8085",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "271_Tops_8086",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "271_Tops_8087",
    "en": "Dark red",
    "jp": "ダークレッド"
  },
  {
    "label": "281_Tops_4267",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "281_Tops_8052",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "281_Tops_8053",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "281_Tops_8054",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "281_Tops_8055",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "281_Tops_8056",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "281_Tops_8057",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "281_Tops_8058",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "284_Tops_4275",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "284_Tops_7757",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "284_Tops_7758",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "284_Tops_7759",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "284_Tops_7760",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "284_Tops_7761",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "285_Tops_4277",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "285_Tops_8322",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "285_Tops_8323",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "285_Tops_8324",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "285_Tops_8325",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "288_Tops_4285",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "288_Tops_8518",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "288_Tops_8519",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "288_Tops_8520",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "289_Tops_4286",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "289_Tops_9226",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "289_Tops_9227",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "289_Tops_9228",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "290_Tops_4289",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "290_Tops_8020",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "290_Tops_8021",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "292_Tops_4291",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "292_Tops_8349",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "292_Tops_8350",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "292_Tops_8351",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "292_Tops_8352",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "292_Tops_8353",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "292_Tops_8354",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "292_Tops_8355",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "298_Tops_4302",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "298_Tops_8552",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "298_Tops_8553",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "300_Tops_4306",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "300_Tops_7752",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "300_Tops_7753",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "300_Tops_7754",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "300_Tops_7755",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "303_Tops_4320",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "303_Tops_8356",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "303_Tops_8357",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "303_Tops_8358",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "306_Tops_4327",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "306_Tops_8429",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "316_Tops_4340",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "316_Tops_8403",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "316_Tops_8404",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "319_Tops_4343",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "326_Tops_4363",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "326_Tops_8279",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "326_Tops_8280",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "326_Tops_8281",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "326_Tops_8282",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "328_Tops_4365",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "328_Tops_7548",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "328_Tops_7549",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "328_Tops_7550",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "328_Tops_7551",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "328_Tops_7552",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "328_Tops_7553",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "329_Tops_4366",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "329_Tops_7554",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "329_Tops_7555",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "329_Tops_7556",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "329_Tops_7557",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "329_Tops_7558",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "329_Tops_7559",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "330_Tops_4368",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "330_Tops_8474",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "330_Tops_8475",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "330_Tops_8476",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "337_Tops_4395",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "337_Tops_8283",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "341_Tops_4401",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "341_Tops_8566",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "341_Tops_8567",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "341_Tops_8568",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "342_Tops_4402",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "342_Tops_8569",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "342_Tops_8570",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "346_Tops_4407",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "346_Tops_9218",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "350_Tops_4417",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "350_Tops_7648",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "351_Tops_4418",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "351_Tops_7605",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "352_Tops_4419",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "352_Tops_9393",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "352_Tops_9394",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "352_Tops_9395",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "352_Tops_9396",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "352_Tops_9397",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "353_Tops_4420",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "353_Tops_8444",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "353_Tops_8445",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "353_Tops_8446",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "353_Tops_8447",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "353_Tops_8448",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "354_Tops_4421",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "354_Tops_8059",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "354_Tops_8060",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "355_Tops_4422",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "355_Tops_9303",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "356_Tops_4423",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "356_Tops_7984",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "356_Tops_7985",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "356_Tops_7986",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "356_Tops_7987",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "360_Tops_4429",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "360_Tops_9602",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "360_Tops_9603",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "360_Tops_9604",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "360_Tops_9605",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "364_Tops_4433",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "364_Tops_8242",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "364_Tops_8243",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "364_Tops_8244",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "364_Tops_8245",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "366_Tops_4435",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "366_Tops_9476",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "367_Tops_4440",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "367_Tops_8284",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "370_Tops_4446",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "370_Tops_7848",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "370_Tops_7849",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "371_Tops_4447",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "371_Tops_9398",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "371_Tops_9399",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "371_Tops_9400",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "371_Tops_9401",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "371_Tops_9402",
    "en": "Turquoise",
    "jp": "ターコイズ"
  },
  {
    "label": "371_Tops_9403",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "371_Tops_9404",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "372_Tops_4448",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "372_Tops_7600",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "372_Tops_7601",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "372_Tops_7602",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "372_Tops_7603",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "372_Tops_7604",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "388_Tops_4465",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "388_Tops_8449",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "388_Tops_8450",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "388_Tops_8451",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "392_Tops_4469",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "392_Tops_8452",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "392_Tops_8453",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "392_Tops_8454",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "400_Tops_4486",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "400_Tops_9444",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "400_Tops_9445",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "400_Tops_9446",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "400_Tops_9447",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "402_Tops_4488",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "402_Tops_9229",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "402_Tops_9230",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "410_Tops_4503",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "410_Tops_7383",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "410_Tops_7384",
    "en": "Peach",
    "jp": "ピーチ"
  },
  {
    "label": "410_Tops_7385",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "410_Tops_7386",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "410_Tops_7387",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "410_Tops_7388",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "410_Tops_7389",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "414_Tops_4507",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "414_Tops_9448",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "414_Tops_9449",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "414_Tops_9450",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "423_Tops_4519",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "423_Tops_7581",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "423_Tops_7582",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "423_Tops_7583",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "425_Tops_4521",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "425_Tops_7607",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "425_Tops_7608",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "425_Tops_7609",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "425_Tops_7610",
    "en": "Coral",
    "jp": "コーラル"
  },
  {
    "label": "428_Tops_4524",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "428_Tops_8502",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "428_Tops_8503",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "434_Tops_4553",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "434_Tops_8002",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "434_Tops_8003",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "434_Tops_8004",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "438_Tops_4558",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "438_Tops_8405",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "438_Tops_8406",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "440_Tops_4560",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "440_Tops_8388",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "440_Tops_8389",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "443_Tops_4565",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "443_Tops_9304",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "443_Tops_9305",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "444_Tops_4566",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "444_Tops_7740",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "444_Tops_7741",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "445_Tops_4567",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "445_Tops_8506",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "445_Tops_8507",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "445_Tops_8508",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "447_Tops_4574",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "447_Tops_8455",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "447_Tops_8456",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "447_Tops_8457",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "448_Tops_4575",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "448_Tops_7854",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "448_Tops_7855",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "448_Tops_7856",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "449_Tops_4576",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "449_Tops_9451",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "449_Tops_9452",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "449_Tops_9453",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "449_Tops_9454",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "451_Tops_4578",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "451_Tops_9032",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "451_Tops_9033",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "451_Tops_9034",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "451_Tops_9035",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "461_Tops_4595",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "461_Tops_7644",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "461_Tops_7645",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "461_Tops_7646",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "461_Tops_7647",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "464_Tops_4598",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "464_Tops_8005",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "464_Tops_8006",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "464_Tops_8007",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "465_Tops_4599",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "465_Tops_8359",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "465_Tops_8360",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "465_Tops_8361",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "465_Tops_8362",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "465_Tops_8363",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "467_Tops_4601",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "467_Tops_8458",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "467_Tops_8459",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "467_Tops_8460",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "467_Tops_8461",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "471_Tops_4605",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "471_Tops_8462",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "471_Tops_8463",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "476_Tops_4610",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "476_Tops_8407",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "476_Tops_8408",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "476_Tops_8409",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "479_Tops_4613",
    "en": "Navy, light blue & pink",
    "jp": "ネイビー×ライトブルー×ピンク"
  },
  {
    "label": "479_Tops_7639",
    "en": "White, blue & green",
    "jp": "ホワイト×ブルー×グリーン"
  },
  {
    "label": "479_Tops_7640",
    "en": "White, yellow & red",
    "jp": "ホワイト×イエロー×レッド"
  },
  {
    "label": "479_Tops_7641",
    "en": "Black, coral & pink",
    "jp": "ブラック×コーラル×ピンク"
  },
  {
    "label": "479_Tops_7642",
    "en": "Orange, yellow & black",
    "jp": "オレンジ×イエロー×ブラック"
  },
  {
    "label": "479_Tops_7643",
    "en": "Gray, white & light blue",
    "jp": "グレー×ホワイト×ライトブルー"
  },
  {
    "label": "481_Tops_4615",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "481_Tops_8963",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "481_Tops_8964",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "481_Tops_8965",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "481_Tops_8966",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "481_Tops_8967",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "493_Tops_4661",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "493_Tops_7858",
    "en": "Peacock blue",
    "jp": "ピーコックブルー"
  },
  {
    "label": "493_Tops_7859",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "493_Tops_7860",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "493_Tops_7861",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "495_Tops_4668",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "495_Tops_8390",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "495_Tops_8391",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "495_Tops_8392",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "501_Tops_4675",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "501_Tops_8088",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "501_Tops_8089",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "506_Tops_4680",
    "en": "Moss green",
    "jp": "モスグリーン"
  },
  {
    "label": "506_Tops_7850",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "506_Tops_7851",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "506_Tops_7852",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "506_Tops_7853",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "507_Tops_4681",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "507_Tops_9231",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "507_Tops_9232",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "513_Tops_4710",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "513_Tops_8554",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "513_Tops_8555",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "516_Tops_4715",
    "en": "Coral",
    "jp": "コーラル"
  },
  {
    "label": "516_Tops_8521",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "516_Tops_8522",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "516_Tops_8523",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "518_Tops_4717",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "518_Tops_8430",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "518_Tops_8431",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "518_Tops_8432",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "524_Tops_4728",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "524_Tops_8330",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "524_Tops_8331",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "524_Tops_8332",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "524_Tops_8333",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "531_Tops_4735",
    "en": "Red & yellow",
    "jp": "レッド×イエロー"
  },
  {
    "label": "531_Tops_8334",
    "en": "Blue & green",
    "jp": "ブルー×グリーン"
  },
  {
    "label": "531_Tops_8335",
    "en": "Navy & blue",
    "jp": "ネイビー×ブルー"
  },
  {
    "label": "531_Tops_8336",
    "en": "Navy & red",
    "jp": "ネイビー×レッド"
  },
  {
    "label": "544_Tops_4765",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "544_Tops_8524",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "544_Tops_8525",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "545_Tops_4766",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "545_Tops_8008",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "545_Tops_8009",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "547_Tops_4792",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "547_Tops_9036",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "547_Tops_9037",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "547_Tops_9038",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "548_Tops_4793",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "548_Tops_9308",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "548_Tops_9309",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "549_Tops_4798",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "549_Tops_8633",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "549_Tops_8634",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "576_Tops_5122",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "576_Tops_7841",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "577_Tops_5126",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "577_Tops_8556",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "577_Tops_8557",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "577_Tops_8558",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "581_Tops_5130",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "581_Tops_8146",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "581_Tops_8147",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "581_Tops_8148",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "581_Tops_8149",
    "en": "Golden yellow",
    "jp": "やまぶきいろ"
  },
  {
    "label": "583_Tops_5132",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "583_Tops_9606",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "583_Tops_9607",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "583_Tops_9608",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "583_Tops_9609",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "585_Tops_5134",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "616_Tops_5262",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "616_Tops_7636",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "616_Tops_7637",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "616_Tops_7638",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "652_Tops_5289",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "652_Tops_9538",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "653_Tops_5290",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "653_Tops_8410",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "653_Tops_8411",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "653_Tops_8412",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "654_Tops_5291",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "655_Tops_5292",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "655_Tops_7620",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "655_Tops_7621",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "673_Tops_5317",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "673_Tops_7617",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "673_Tops_7618",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "673_Tops_7619",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "694_Tops_5349",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "694_Tops_8526",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "694_Tops_8527",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "694_Tops_8528",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "700_Tops_5382",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "700_Tops_7846",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "700_Tops_7847",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "743_Tops_5433",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "745_Tops_5440",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "745_Tops_8529",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "746_Tops_5441",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "746_Tops_8090",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "746_Tops_8091",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "746_Tops_8092",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "746_Tops_8093",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "746_Tops_8094",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "746_Tops_8095",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "807_Tops_5621",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "807_Tops_7567",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "807_Tops_7568",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "813_Tops_5658",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "823_Tops_5685",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "823_Tops_7857",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "866_Tops_5774",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "866_Tops_7994",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "866_Tops_7995",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "866_Tops_7996",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "866_Tops_7997",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "901_Tops_5841",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "901_Tops_8413",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "901_Tops_8414",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "903_Tops_5855",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "903_Tops_9233",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "903_Tops_9234",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "909_Tops_5926",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "909_Tops_8530",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "909_Tops_8531",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "911_Tops_5980",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "911_Tops_7998",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "911_Tops_7999",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "916_Tops_6029",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "916_Tops_8285",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "916_Tops_8286",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "916_Tops_8287",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "939_Tops_6811",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "939_Tops_8971",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "939_Tops_8972",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "939_Tops_8973",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "939_Tops_8974",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "939_Tops_8975",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "939_Tops_8976",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "939_Tops_8977",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "948_Tops_4673",
    "en": 1,
    "jp": "1ばん"
  },
  {
    "label": "948_Tops_8061",
    "en": 2,
    "jp": "2ばん"
  },
  {
    "label": "948_Tops_8062",
    "en": 3,
    "jp": "3ばん"
  },
  {
    "label": "948_Tops_8063",
    "en": 4,
    "jp": "4ばん"
  },
  {
    "label": "948_Tops_8064",
    "en": 5,
    "jp": "5ばん"
  },
  {
    "label": "948_Tops_8065",
    "en": 6,
    "jp": "6ばん"
  },
  {
    "label": "948_Tops_8066",
    "en": 7,
    "jp": "7ばん"
  },
  {
    "label": "948_Tops_8067",
    "en": 8,
    "jp": "8ばん"
  }
];

fashionVariants.bottoms = [
  {
    "label": "14_Bottoms_3308",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "14_Bottoms_4175",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "14_Bottoms_4176",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "14_Bottoms_4177",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "14_Bottoms_4178",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "14_Bottoms_9013",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "14_Bottoms_9014",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "14_Bottoms_9015",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "15_Bottoms_3317",
    "en": "Monotone",
    "jp": "モノトーン"
  },
  {
    "label": "15_Bottoms_4183",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "15_Bottoms_4184",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "15_Bottoms_4185",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "16_Bottoms_3319",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "16_Bottoms_12192",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "16_Bottoms_12193",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "16_Bottoms_12194",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "16_Bottoms_12195",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "16_Bottoms_12196",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "16_Bottoms_12197",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "16_Bottoms_12198",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "17_Bottoms_2403",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "17_Bottoms_4186",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "17_Bottoms_4187",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "17_Bottoms_4188",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "17_Bottoms_9011",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1091_Bottoms_9840",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1091_Bottoms_12071",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1091_Bottoms_12072",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1091_Bottoms_12073",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1091_Bottoms_12074",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1091_Bottoms_12075",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1091_Bottoms_12076",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1091_Bottoms_12077",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1092_Bottoms_9841",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "1092_Bottoms_12068",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "1092_Bottoms_12069",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1092_Bottoms_12070",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1093_Bottoms_9842",
    "en": "Tiger",
    "jp": "タイガー"
  },
  {
    "label": "1093_Bottoms_12067",
    "en": "Zebra",
    "jp": "ゼブラ"
  },
  {
    "label": "1095_Bottoms_9844",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1095_Bottoms_12059",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1095_Bottoms_12060",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1095_Bottoms_12061",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "1095_Bottoms_12062",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1095_Bottoms_12063",
    "en": "Turquoise",
    "jp": "ターコイズ"
  },
  {
    "label": "1095_Bottoms_12064",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1095_Bottoms_12065",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1129_Bottoms_9878",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1129_Bottoms_11736",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1129_Bottoms_11737",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1129_Bottoms_11738",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1129_Bottoms_11739",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1129_Bottoms_11740",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1130_Bottoms_9879",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1130_Bottoms_11741",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1130_Bottoms_11742",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1130_Bottoms_11743",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1130_Bottoms_11744",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1130_Bottoms_11745",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1187_Bottoms_12173",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1187_Bottoms_12176",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1187_Bottoms_12177",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1187_Bottoms_12178",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "119_Bottoms_3296",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "119_Bottoms_11270",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "119_Bottoms_11271",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "119_Bottoms_11272",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "119_Bottoms_11273",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "119_Bottoms_11274",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "119_Bottoms_11275",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "119_Bottoms_11276",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1190_Bottoms_8907",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "120_Bottoms_3297",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "120_Bottoms_11666",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "120_Bottoms_11667",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1227_Bottoms_12664",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "125_Bottoms_3309",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "125_Bottoms_11290",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "125_Bottoms_11291",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "125_Bottoms_11292",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "125_Bottoms_11293",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "125_Bottoms_11294",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "126_Bottoms_3310",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "126_Bottoms_11277",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "126_Bottoms_11278",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "126_Bottoms_11279",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "126_Bottoms_11280",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "126_Bottoms_11281",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "126_Bottoms_11282",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "127_Bottoms_3311",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "127_Bottoms_11295",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "127_Bottoms_11296",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "127_Bottoms_11297",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "127_Bottoms_11298",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "127_Bottoms_11299",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "128_Bottoms_3312",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "128_Bottoms_9235",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "128_Bottoms_9236",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "128_Bottoms_9237",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "128_Bottoms_9238",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "129_Bottoms_3313",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "129_Bottoms_11427",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "129_Bottoms_11428",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "129_Bottoms_11429",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "140_Bottoms_3335",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "140_Bottoms_11284",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "140_Bottoms_11285",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "140_Bottoms_11286",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "140_Bottoms_11287",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "140_Bottoms_11288",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "140_Bottoms_11289",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "142_Bottoms_3337",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "142_Bottoms_9239",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "142_Bottoms_9240",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "142_Bottoms_9241",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "144_Bottoms_3341",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "144_Bottoms_11635",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "144_Bottoms_11636",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "144_Bottoms_11637",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "144_Bottoms_11638",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "144_Bottoms_11639",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "144_Bottoms_11640",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "144_Bottoms_11641",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "145_Bottoms_3342",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "145_Bottoms_10185",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "145_Bottoms_10186",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "145_Bottoms_10187",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "145_Bottoms_10188",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "145_Bottoms_10189",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "145_Bottoms_10190",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "148_Bottoms_3351",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "148_Bottoms_9703",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "148_Bottoms_9704",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "148_Bottoms_9705",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "148_Bottoms_9706",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "149_Bottoms_3353",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "149_Bottoms_9263",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "149_Bottoms_9264",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "149_Bottoms_9265",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "152_Bottoms_3384",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "152_Bottoms_8904",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "152_Bottoms_8905",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "152_Bottoms_8906",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "158_Bottoms_3391",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "160_Bottoms_3405",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "160_Bottoms_11404",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "160_Bottoms_11405",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "160_Bottoms_11406",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "161_Bottoms_3408",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "161_Bottoms_11354",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "161_Bottoms_11355",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "161_Bottoms_11356",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "161_Bottoms_11357",
    "en": "Aquamarine",
    "jp": "エメラルド"
  },
  {
    "label": "161_Bottoms_11358",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "175_Bottoms_3463",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "240_Bottoms_3708",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "240_Bottoms_11386",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "240_Bottoms_11387",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "240_Bottoms_11388",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "240_Bottoms_11389",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "240_Bottoms_11390",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "245_Bottoms_4150",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "245_Bottoms_8835",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "245_Bottoms_8836",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "245_Bottoms_8837",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "245_Bottoms_8838",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "248_Bottoms_4195",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "248_Bottoms_8854",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "248_Bottoms_8855",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "248_Bottoms_8856",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "248_Bottoms_8857",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "248_Bottoms_8858",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "248_Bottoms_8859",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "248_Bottoms_8860",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "255_Bottoms_4222",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "255_Bottoms_8703",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "255_Bottoms_8704",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "255_Bottoms_8705",
    "en": "Cyan",
    "jp": "シアン"
  },
  {
    "label": "255_Bottoms_8706",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "256_Bottoms_4223",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "256_Bottoms_8782",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "256_Bottoms_8783",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "256_Bottoms_8784",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "265_Bottoms_4246",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "265_Bottoms_11430",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "265_Bottoms_11431",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "265_Bottoms_11432",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "265_Bottoms_11433",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "269_Bottoms_4251",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "269_Bottoms_11434",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "269_Bottoms_11435",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "269_Bottoms_11436",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "270_Bottoms_4252",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "270_Bottoms_8707",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "270_Bottoms_8708",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "270_Bottoms_8709",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "270_Bottoms_8710",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "270_Bottoms_8711",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "270_Bottoms_8712",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "270_Bottoms_8713",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "272_Bottoms_4254",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "272_Bottoms_9537",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "273_Bottoms_4255",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "273_Bottoms_9242",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "273_Bottoms_9243",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "273_Bottoms_9244",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "274_Bottoms_4256",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "274_Bottoms_11263",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "274_Bottoms_11264",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "274_Bottoms_11265",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "274_Bottoms_11266",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "274_Bottoms_11267",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "274_Bottoms_11268",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "274_Bottoms_11269",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "275_Bottoms_4257",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "275_Bottoms_11141",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "275_Bottoms_11142",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "275_Bottoms_11143",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "275_Bottoms_11144",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "280_Bottoms_4266",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "280_Bottoms_11328",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "280_Bottoms_11329",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "280_Bottoms_11330",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "280_Bottoms_11331",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "280_Bottoms_11332",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "280_Bottoms_11333",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "280_Bottoms_11334",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "283_Bottoms_4274",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "283_Bottoms_11437",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "283_Bottoms_11438",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "283_Bottoms_11439",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "283_Bottoms_11440",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "287_Bottoms_4283",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "287_Bottoms_9245",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "287_Bottoms_9246",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "287_Bottoms_9247",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "295_Bottoms_4296",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "295_Bottoms_11145",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "295_Bottoms_11146",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "295_Bottoms_11147",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "295_Bottoms_11148",
    "en": "Light gray",
    "jp": "ライトグレー"
  },
  {
    "label": "295_Bottoms_11149",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "296_Bottoms_4299",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "296_Bottoms_9266",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "296_Bottoms_9267",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "296_Bottoms_9268",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "296_Bottoms_9269",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "299_Bottoms_4303",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "299_Bottoms_11339",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "299_Bottoms_11340",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "299_Bottoms_11341",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "299_Bottoms_11342",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "299_Bottoms_11343",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "301_Bottoms_4307",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "301_Bottoms_10191",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "301_Bottoms_10192",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "301_Bottoms_10193",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "301_Bottoms_10194",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "301_Bottoms_10195",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "301_Bottoms_10196",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "305_Bottoms_4326",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "305_Bottoms_11441",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "305_Bottoms_11442",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "305_Bottoms_11443",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "305_Bottoms_11444",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "308_Bottoms_4329",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "308_Bottoms_11379",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "308_Bottoms_11380",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "308_Bottoms_11381",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "308_Bottoms_11382",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "308_Bottoms_11383",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "308_Bottoms_11384",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "309_Bottoms_4330",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "309_Bottoms_11359",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "309_Bottoms_11360",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "309_Bottoms_11361",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "309_Bottoms_11362",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "310_Bottoms_4331",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "310_Bottoms_11391",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "310_Bottoms_11392",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "310_Bottoms_11393",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "310_Bottoms_11394",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "312_Bottoms_4333",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "327_Bottoms_4364",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "327_Bottoms_9270",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "327_Bottoms_9271",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "327_Bottoms_9272",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "327_Bottoms_9273",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "331_Bottoms_4369",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "331_Bottoms_9274",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "331_Bottoms_9275",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "331_Bottoms_9276",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "331_Bottoms_9277",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "332_Bottoms_4370",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "332_Bottoms_8861",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "332_Bottoms_8862",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "332_Bottoms_8863",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "333_Bottoms_4371",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "333_Bottoms_9089",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "333_Bottoms_9090",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "333_Bottoms_9091",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "334_Bottoms_4372",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "334_Bottoms_9092",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "334_Bottoms_9093",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "334_Bottoms_9094",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "334_Bottoms_9095",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "334_Bottoms_9096",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "334_Bottoms_9097",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "334_Bottoms_9098",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "335_Bottoms_4373",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "335_Bottoms_10197",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "335_Bottoms_10198",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "335_Bottoms_10199",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "335_Bottoms_10200",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "335_Bottoms_10201",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "336_Bottoms_4374",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "336_Bottoms_8714",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "336_Bottoms_8715",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "336_Bottoms_8716",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "339_Bottoms_4398",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "339_Bottoms_9248",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "339_Bottoms_9249",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "339_Bottoms_9250",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "339_Bottoms_9251",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "339_Bottoms_9252",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "339_Bottoms_9253",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "339_Bottoms_9254",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "344_Bottoms_4405",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "344_Bottoms_11314",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "344_Bottoms_11315",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "344_Bottoms_11316",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "344_Bottoms_11317",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "344_Bottoms_11318",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "344_Bottoms_11319",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "347_Bottoms_4408",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "347_Bottoms_9707",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "347_Bottoms_9708",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "347_Bottoms_9709",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "347_Bottoms_9710",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "347_Bottoms_9711",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "347_Bottoms_9712",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "347_Bottoms_9713",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "349_Bottoms_4410",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "349_Bottoms_8785",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "349_Bottoms_8786",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "349_Bottoms_8787",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "349_Bottoms_8788",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "349_Bottoms_8789",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "359_Bottoms_4428",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "359_Bottoms_8908",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "359_Bottoms_8909",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "359_Bottoms_8910",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "361_Bottoms_4430",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "361_Bottoms_9714",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "361_Bottoms_9715",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "361_Bottoms_9716",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "361_Bottoms_9717",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "361_Bottoms_9718",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "365_Bottoms_4434",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "365_Bottoms_11322",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "365_Bottoms_11323",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "365_Bottoms_11324",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "365_Bottoms_11325",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "365_Bottoms_11326",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "365_Bottoms_11327",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "369_Bottoms_4444",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "369_Bottoms_6842",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "369_Bottoms_8864",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "369_Bottoms_8865",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "374_Bottoms_4450",
    "en": "Turquoise",
    "jp": "エメラルド"
  },
  {
    "label": "374_Bottoms_11407",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "374_Bottoms_11408",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "374_Bottoms_11409",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "374_Bottoms_11410",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "374_Bottoms_11411",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "395_Bottoms_4472",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "395_Bottoms_6899",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "395_Bottoms_9121",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "395_Bottoms_9122",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "395_Bottoms_9123",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "395_Bottoms_9124",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "395_Bottoms_9125",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "395_Bottoms_9126",
    "en": "Yellow-green",
    "jp": "イエローグリーン"
  },
  {
    "label": "399_Bottoms_4485",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "399_Bottoms_9255",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "399_Bottoms_9256",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "399_Bottoms_9257",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "401_Bottoms_4487",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "401_Bottoms_9099",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "401_Bottoms_9100",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "401_Bottoms_9101",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "401_Bottoms_9102",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "404_Bottoms_4490",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "404_Bottoms_9278",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "404_Bottoms_9279",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "404_Bottoms_9280",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "409_Bottoms_4502",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "409_Bottoms_8717",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "409_Bottoms_8718",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "409_Bottoms_8719",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "409_Bottoms_8720",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "411_Bottoms_4504",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "411_Bottoms_11347",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "411_Bottoms_11348",
    "en": "Peach",
    "jp": "ピーチ"
  },
  {
    "label": "411_Bottoms_11349",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "411_Bottoms_11350",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "411_Bottoms_11351",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "411_Bottoms_11352",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "411_Bottoms_11353",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "412_Bottoms_4505",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "412_Bottoms_11656",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "412_Bottoms_11657",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "412_Bottoms_11658",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "412_Bottoms_11659",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "412_Bottoms_11660",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "412_Bottoms_11661",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "412_Bottoms_11662",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "419_Bottoms_4514",
    "en": "Blue & red",
    "jp": "ブルー×レッド"
  },
  {
    "label": "419_Bottoms_11300",
    "en": "Black & blue",
    "jp": "ブラック×ブルー"
  },
  {
    "label": "419_Bottoms_11301",
    "en": "Black & red",
    "jp": "ブラック×レッド"
  },
  {
    "label": "419_Bottoms_11302",
    "en": "Black & yellow",
    "jp": "ブラック×イエロー"
  },
  {
    "label": "419_Bottoms_11303",
    "en": "Red & green",
    "jp": "レッド×グリーン"
  },
  {
    "label": "419_Bottoms_11304",
    "en": "Orange & red",
    "jp": "オレンジ×レッド"
  },
  {
    "label": "419_Bottoms_11305",
    "en": "Green & purple",
    "jp": "グリーン×パープル"
  },
  {
    "label": "419_Bottoms_11306",
    "en": "Purple & pink",
    "jp": "パープル×ピンク"
  },
  {
    "label": "420_Bottoms_4515",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "420_Bottoms_9103",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "420_Bottoms_9104",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "420_Bottoms_9105",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "420_Bottoms_9106",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "421_Bottoms_4517",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "421_Bottoms_8911",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "421_Bottoms_8912",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "421_Bottoms_8913",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "421_Bottoms_8914",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "422_Bottoms_4518",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "422_Bottoms_11905",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "422_Bottoms_11906",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "422_Bottoms_11907",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "422_Bottoms_11908",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "422_Bottoms_11909",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "426_Bottoms_4522",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "426_Bottoms_11947",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "426_Bottoms_11948",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "426_Bottoms_11949",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "427_Bottoms_4523",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "427_Bottoms_8915",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "429_Bottoms_4545",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "429_Bottoms_8721",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "429_Bottoms_8722",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "429_Bottoms_8723",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "430_Bottoms_4547",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "430_Bottoms_8736",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "430_Bottoms_8737",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "431_Bottoms_4548",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "431_Bottoms_8738",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "431_Bottoms_8739",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "459_Bottoms_4593",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "459_Bottoms_9719",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "459_Bottoms_9720",
    "en": "Light purple",
    "jp": "ライトパープル"
  },
  {
    "label": "459_Bottoms_9721",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "459_Bottoms_9722",
    "en": "Dark red",
    "jp": "ダークレッド"
  },
  {
    "label": "459_Bottoms_9723",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "459_Bottoms_9724",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "468_Bottoms_4602",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "468_Bottoms_9725",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "468_Bottoms_9726",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "468_Bottoms_9727",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "468_Bottoms_9728",
    "en": "Light gray",
    "jp": "ライトグレー"
  },
  {
    "label": "468_Bottoms_9729",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "478_Bottoms_4612",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "478_Bottoms_11649",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "478_Bottoms_11650",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "478_Bottoms_11651",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "478_Bottoms_11652",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "478_Bottoms_11653",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "478_Bottoms_11654",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "478_Bottoms_11655",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "480_Bottoms_4614",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "480_Bottoms_8790",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "480_Bottoms_8791",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "480_Bottoms_8792",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "480_Bottoms_8793",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "648_Bottoms_5285",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "648_Bottoms_11150",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "648_Bottoms_11151",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "648_Bottoms_11152",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "648_Bottoms_11153",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "649_Bottoms_5286",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "649_Bottoms_11385",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "690_Bottoms_5341",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "690_Bottoms_11395",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "690_Bottoms_11396",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "690_Bottoms_11397",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "726_Bottoms_5411",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "727_Bottoms_5412",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "727_Bottoms_9169",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "727_Bottoms_9170",
    "en": "Golden yellow",
    "jp": "やまぶきいろ"
  },
  {
    "label": "727_Bottoms_9171",
    "en": "Dark red",
    "jp": "えんじ"
  },
  {
    "label": "728_Bottoms_5413",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "728_Bottoms_11412",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "728_Bottoms_11413",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "728_Bottoms_11414",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "728_Bottoms_11415",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "728_Bottoms_11416",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "728_Bottoms_11417",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "728_Bottoms_11418",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "729_Bottoms_5414",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "729_Bottoms_11344",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "729_Bottoms_11345",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "729_Bottoms_11346",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "730_Bottoms_5415",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "730_Bottoms_8794",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "730_Bottoms_8795",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "730_Bottoms_8796",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "730_Bottoms_8797",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "731_Bottoms_5416",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "731_Bottoms_8798",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "731_Bottoms_8799",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "731_Bottoms_8800",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "731_Bottoms_8801",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "731_Bottoms_8802",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "732_Bottoms_5417",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "732_Bottoms_8724",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "732_Bottoms_8725",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "732_Bottoms_8726",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "733_Bottoms_5418",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "733_Bottoms_9107",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "733_Bottoms_9108",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "733_Bottoms_9109",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "733_Bottoms_9110",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "733_Bottoms_9111",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "733_Bottoms_9112",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "733_Bottoms_9113",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "734_Bottoms_5419",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "734_Bottoms_9114",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "734_Bottoms_9115",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "734_Bottoms_9116",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "734_Bottoms_9117",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "734_Bottoms_9118",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "734_Bottoms_9119",
    "en": "Peacock blue",
    "jp": "ピーコックブルー"
  },
  {
    "label": "734_Bottoms_9120",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "735_Bottoms_5420",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "735_Bottoms_10202",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "735_Bottoms_10203",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "735_Bottoms_10204",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "735_Bottoms_10205",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "735_Bottoms_10206",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "735_Bottoms_10207",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "735_Bottoms_10208",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "736_Bottoms_5421",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "736_Bottoms_8727",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "736_Bottoms_8728",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "736_Bottoms_8729",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "736_Bottoms_8730",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "737_Bottoms_5422",
    "en": "Cool",
    "jp": "クール"
  },
  {
    "label": "737_Bottoms_8916",
    "en": "Rainbow",
    "jp": "レインボー"
  },
  {
    "label": "737_Bottoms_8917",
    "en": "Pastel",
    "jp": "パステル"
  },
  {
    "label": "752_Bottoms_5448",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "752_Bottoms_11320",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "752_Bottoms_11321",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "754_Bottoms_5449",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "754_Bottoms_8918",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "754_Bottoms_8919",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "755_Bottoms_5459",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "755_Bottoms_9539",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "755_Bottoms_9540",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "756_Bottoms_5460",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "756_Bottoms_9172",
    "en": "Yellow-green",
    "jp": "きみどり"
  },
  {
    "label": "756_Bottoms_9173",
    "en": "Golden yellow",
    "jp": "やまぶきいろ"
  },
  {
    "label": "756_Bottoms_9174",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "756_Bottoms_9175",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "756_Bottoms_9176",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "781_Bottoms_5544",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "781_Bottoms_8740",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "781_Bottoms_8741",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "781_Bottoms_8742",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "817_Bottoms_5664",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "817_Bottoms_8842",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "817_Bottoms_8843",
    "en": "Light green",
    "jp": "ライトグリーン"
  },
  {
    "label": "817_Bottoms_8844",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "818_Bottoms_5665",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "818_Bottoms_8743",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "818_Bottoms_8744",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "818_Bottoms_8745",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "818_Bottoms_8746",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "840_Bottoms_5701",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "840_Bottoms_9281",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "840_Bottoms_9282",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "841_Bottoms_5702",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "841_Bottoms_11365",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "841_Bottoms_11366",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "841_Bottoms_11367",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "841_Bottoms_11368",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "841_Bottoms_11369",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "841_Bottoms_11370",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "841_Bottoms_11371",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "842_Bottoms_5703",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "842_Bottoms_11786",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "842_Bottoms_11787",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "842_Bottoms_11788",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "843_Bottoms_5704",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "843_Bottoms_11335",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "843_Bottoms_11336",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "843_Bottoms_11337",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "843_Bottoms_11338",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "844_Bottoms_5705",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "844_Bottoms_8845",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "844_Bottoms_8846",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "844_Bottoms_8847",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "845_Bottoms_5707",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "845_Bottoms_9258",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "845_Bottoms_9259",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "845_Bottoms_9260",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "846_Bottoms_5708",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "846_Bottoms_11445",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "846_Bottoms_11446",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "846_Bottoms_11447",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "846_Bottoms_11448",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "847_Bottoms_5710",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "847_Bottoms_8921",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "847_Bottoms_8922",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "848_Bottoms_5711",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "848_Bottoms_8848",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "848_Bottoms_8849",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "848_Bottoms_8850",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "849_Bottoms_5720",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "849_Bottoms_11307",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "849_Bottoms_11308",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "849_Bottoms_11309",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "849_Bottoms_11310",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "849_Bottoms_11311",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "849_Bottoms_11312",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "849_Bottoms_11313",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "850_Bottoms_5721",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "850_Bottoms_11363",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "850_Bottoms_11364",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "851_Bottoms_5722",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "851_Bottoms_11663",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "851_Bottoms_11664",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "851_Bottoms_11665",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "852_Bottoms_5723",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "852_Bottoms_9177",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "852_Bottoms_9178",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "852_Bottoms_9179",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "852_Bottoms_9180",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "852_Bottoms_9181",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "852_Bottoms_9182",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "852_Bottoms_9183",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "853_Bottoms_5724",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "853_Bottoms_8851",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "853_Bottoms_8852",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "853_Bottoms_8853",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "854_Bottoms_5736",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "854_Bottoms_11372",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "854_Bottoms_11373",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "854_Bottoms_11374",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "854_Bottoms_11375",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "854_Bottoms_11376",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "854_Bottoms_11377",
    "en": "Aquamarine",
    "jp": "エメラルド"
  },
  {
    "label": "854_Bottoms_11378",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "855_Bottoms_5737",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "860_Bottoms_5733",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "860_Bottoms_10209",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "860_Bottoms_10210",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "860_Bottoms_10211",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "861_Bottoms_5734",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "861_Bottoms_8923",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "862_Bottoms_5735",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "862_Bottoms_9184",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "862_Bottoms_9185",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "862_Bottoms_9186",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "862_Bottoms_9187",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "862_Bottoms_9188",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "870_Bottoms_5781",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "870_Bottoms_8747",
    "en": "Magenta",
    "jp": "マゼンタ"
  },
  {
    "label": "870_Bottoms_8748",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "871_Bottoms_5795",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "871_Bottoms_9189",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "871_Bottoms_9190",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "871_Bottoms_9191",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "871_Bottoms_9192",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "884_Bottoms_5810",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "884_Bottoms_10212",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "884_Bottoms_10213",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "884_Bottoms_10214",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "885_Bottoms_5811",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "885_Bottoms_8924",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "885_Bottoms_8925",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "885_Bottoms_8926",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "890_Bottoms_5816",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "890_Bottoms_8731",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "890_Bottoms_8732",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "890_Bottoms_8733",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "890_Bottoms_8734",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "890_Bottoms_8735",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "896_Bottoms_5826",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "896_Bottoms_8749",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "896_Bottoms_8750",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "896_Bottoms_8751",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "896_Bottoms_8752",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "902_Bottoms_5854",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "902_Bottoms_9193",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "905_Bottoms_5873",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "905_Bottoms_11398",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "905_Bottoms_11399",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "905_Bottoms_11400",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "905_Bottoms_11401",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "905_Bottoms_11402",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "905_Bottoms_11403",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "906_Bottoms_5874",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "906_Bottoms_8753",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "906_Bottoms_8754",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "907_Bottoms_5923",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "907_Bottoms_9194",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "907_Bottoms_9195",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "907_Bottoms_9196",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "908_Bottoms_5925",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "908_Bottoms_8755",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "908_Bottoms_8756",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "912_Bottoms_6016",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "912_Bottoms_11642",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "912_Bottoms_11643",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "912_Bottoms_11644",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "912_Bottoms_11645",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "912_Bottoms_11646",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "912_Bottoms_11647",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "912_Bottoms_11648",
    "en": "Pink",
    "jp": "ピンク"
  }
];

fashionVariants.dresses = [
  {
    "label": "9_OnePiece_3234",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "9_OnePiece_4158",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "9_OnePiece_4159",
    "en": "Dark brown",
    "jp": "ダークブラウン"
  },
  {
    "label": "10_OnePiece_3226",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "10_OnePiece_4160",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "10_OnePiece_4161",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "10_OnePiece_4162",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "10_OnePiece_4163",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "11_OnePiece_3059",
    "en": "Denim",
    "jp": "デニム"
  },
  {
    "label": "11_OnePiece_4164",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "11_OnePiece_4165",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "11_OnePiece_4166",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "11_OnePiece_9012",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "12_OnePiece_2704",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "12_OnePiece_4167",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "12_OnePiece_4168",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "12_OnePiece_4169",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "20_OnePiece_3058",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "20_OnePiece_9365",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "20_OnePiece_9366",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "20_OnePiece_9367",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "20_OnePiece_9368",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "20_OnePiece_9369",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "20_OnePiece_9370",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "20_OnePiece_9371",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "24_OnePiece_2599",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "24_OnePiece_7942",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "24_OnePiece_7943",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "24_OnePiece_7944",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "24_OnePiece_7945",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "28_OnePiece_2677",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "28_OnePiece_8803",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "28_OnePiece_8804",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "29_OnePiece_2686",
    "en": "Pop",
    "jp": "ポップ"
  },
  {
    "label": "29_OnePiece_8805",
    "en": "Cool",
    "jp": "クール"
  },
  {
    "label": "30_OnePiece_2687",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "30_OnePiece_9576",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "30_OnePiece_9577",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "30_OnePiece_9578",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "30_OnePiece_9579",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "31_OnePiece_2699",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "31_OnePiece_9016",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "31_OnePiece_9017",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "32_OnePiece_2706",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "32_OnePiece_7912",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "32_OnePiece_7913",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "32_OnePiece_7914",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "32_OnePiece_7915",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "32_OnePiece_7916",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "38_OnePiece_2783",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "38_OnePiece_8300",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "38_OnePiece_8301",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "39_OnePiece_2784",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "39_OnePiece_9018",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "39_OnePiece_9019",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "41_OnePiece_3054",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "41_OnePiece_8866",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "41_OnePiece_8867",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "41_OnePiece_8868",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "45_OnePiece_3069",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "45_OnePiece_8806",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "45_OnePiece_8807",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "45_OnePiece_8808",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "45_OnePiece_8809",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "46_OnePiece_3070",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "46_OnePiece_8679",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "46_OnePiece_8680",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "49_OnePiece_3128",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "49_OnePiece_9020",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "49_OnePiece_9021",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "50_OnePiece_3131",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "50_OnePiece_7922",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "50_OnePiece_7923",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "50_OnePiece_7924",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "51_OnePiece_3134",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "51_OnePiece_7901",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "51_OnePiece_7902",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "51_OnePiece_7903",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "51_OnePiece_7904",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "51_OnePiece_7905",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "51_OnePiece_7906",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "52_OnePiece_3135",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "53_OnePiece_3137",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "53_OnePiece_8869",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "53_OnePiece_8870",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "53_OnePiece_8871",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "53_OnePiece_8872",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "53_OnePiece_8873",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "53_OnePiece_8874",
    "en": "Light green",
    "jp": "ライトグリーン"
  },
  {
    "label": "53_OnePiece_8875",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "54_OnePiece_3138",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "54_OnePiece_8256",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "54_OnePiece_8257",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "54_OnePiece_8258",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "54_OnePiece_8259",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "54_OnePiece_8260",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "54_OnePiece_8261",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "54_OnePiece_8262",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "58_OnePiece_3142",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "58_OnePiece_8876",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "58_OnePiece_8877",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "58_OnePiece_8878",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "58_OnePiece_8879",
    "en": "Aquamarine",
    "jp": "エメラルド"
  },
  {
    "label": "58_OnePiece_8880",
    "en": "Cream",
    "jp": "クリーム"
  },
  {
    "label": "58_OnePiece_8881",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "61_OnePiece_3146",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "61_OnePiece_9622",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "61_OnePiece_9623",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "63_OnePiece_3159",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "63_OnePiece_9481",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "63_OnePiece_9482",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "63_OnePiece_9483",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "63_OnePiece_9484",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "63_OnePiece_9485",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "63_OnePiece_9486",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "63_OnePiece_9487",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "65_OnePiece_3165",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "65_OnePiece_7817",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "65_OnePiece_7818",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "65_OnePiece_7819",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "65_OnePiece_7820",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "65_OnePiece_7821",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "65_OnePiece_7822",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "66_OnePiece_3166",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "66_OnePiece_9412",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "66_OnePiece_9413",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "66_OnePiece_9414",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "66_OnePiece_9415",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "66_OnePiece_9416",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "66_OnePiece_9417",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "66_OnePiece_9418",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "67_OnePiece_3167",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "67_OnePiece_9624",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "67_OnePiece_9625",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "68_OnePiece_3168",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "68_OnePiece_8615",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "68_OnePiece_8616",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "69_OnePiece_3169",
    "en": "Green & white",
    "jp": "グリーン×ホワイト"
  },
  {
    "label": "69_OnePiece_9488",
    "en": "Green & blue",
    "jp": "グリーン×ブルー"
  },
  {
    "label": "69_OnePiece_9489",
    "en": "Green & red",
    "jp": "グリーン×レッド"
  },
  {
    "label": "69_OnePiece_9490",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "69_OnePiece_9491",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "69_OnePiece_9492",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "89_OnePiece_3232",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "89_OnePiece_9626",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "89_OnePiece_9627",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1004_OnePiece_6901",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1004_OnePiece_8820",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1016_OnePiece_8187",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1016_OnePiece_8295",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1017_OnePiece_8188",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1017_OnePiece_12106",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1017_OnePiece_12107",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1017_OnePiece_12108",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1017_OnePiece_12109",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1018_OnePiece_8189",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1018_OnePiece_12103",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1018_OnePiece_12104",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1019_OnePiece_8190",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1019_OnePiece_8604",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1039_OnePiece_8509",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1039_OnePiece_12096",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1039_OnePiece_12097",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "104_OnePiece_3260",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "104_OnePiece_8231",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "104_OnePiece_8232",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "104_OnePiece_8233",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "104_OnePiece_8234",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "104_OnePiece_8235",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "104_OnePiece_8236",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "104_OnePiece_8237",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1048_OnePiece_9504",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "105_OnePiece_3261",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "105_OnePiece_8010",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "105_OnePiece_8011",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "105_OnePiece_8012",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "105_OnePiece_8013",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "105_OnePiece_8014",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "1064_OnePiece_9770",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1064_OnePiece_11985",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1064_OnePiece_11986",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1084_OnePiece_9833",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "1085_OnePiece_9834",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1085_OnePiece_12078",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1085_OnePiece_12079",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1085_OnePiece_12080",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1085_OnePiece_12081",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1085_OnePiece_12082",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1086_OnePiece_9835",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "1087_OnePiece_9836",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1088_OnePiece_9837",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1089_OnePiece_9838",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1090_OnePiece_9839",
    "en": "Peach",
    "jp": "ピーチ"
  },
  {
    "label": "1128_OnePiece_9877",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1128_OnePiece_11726",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1128_OnePiece_11727",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1128_OnePiece_11728",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1128_OnePiece_11729",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1128_OnePiece_11730",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "113_OnePiece_3286",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "114_OnePiece_3287",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "115_OnePiece_3288",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1155_OnePiece_11096",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1155_OnePiece_11931",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1155_OnePiece_11932",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1155_OnePiece_11933",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "1155_OnePiece_11934",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1156_OnePiece_11179",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1157_OnePiece_10906",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1157_OnePiece_11995",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1157_OnePiece_11996",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "1157_OnePiece_11997",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1158_OnePiece_10907",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1158_OnePiece_11998",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1158_OnePiece_11999",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1159_OnePiece_10908",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "116_OnePiece_3289",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1161_OnePiece_10910",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1161_OnePiece_12021",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1161_OnePiece_12022",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1162_OnePiece_10911",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1162_OnePiece_12023",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1162_OnePiece_12024",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1162_OnePiece_12025",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "117_OnePiece_3290",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "118_OnePiece_3293",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1204_OnePiece_12448",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "1205_OnePiece_12449",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1206_OnePiece_12450",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1207_OnePiece_12451",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1208_OnePiece_12452",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1209_OnePiece_12453",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1210_OnePiece_12454",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1219_OnePiece_12497",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1230_OnePiece_12667",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1231_OnePiece_12668",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1231_OnePiece_13090",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1231_OnePiece_13091",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1244_OnePiece_12958",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1244_OnePiece_13093",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1245_OnePiece_12957",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1245_OnePiece_13092",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1261_OnePiece_12987",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1262_OnePiece_12988",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1262_OnePiece_13388",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1262_OnePiece_13389",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1262_OnePiece_13390",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1262_OnePiece_13391",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1262_OnePiece_13392",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1263_OnePiece_12989",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1263_OnePiece_13382",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1263_OnePiece_13383",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1263_OnePiece_13384",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1263_OnePiece_13385",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1263_OnePiece_13386",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1264_OnePiece_12990",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1264_OnePiece_13377",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1264_OnePiece_13378",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1264_OnePiece_13379",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1264_OnePiece_13380",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1264_OnePiece_13381",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1293_OnePiece_13180",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1301_OnePiece_13239",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "1302_OnePiece_13240",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "1303_OnePiece_13276",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1315_OnePiece_13387",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1315_OnePiece_13491",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1315_OnePiece_13492",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1315_OnePiece_13493",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1315_OnePiece_13494",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1315_OnePiece_13495",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1316_OnePiece_13433",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1317_OnePiece_13486",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1321_OnePiece_13555",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1322_OnePiece_13556",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1323_OnePiece_13557",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1330_OnePiece_13564",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1332_OnePiece_13758",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1344_OnePiece_14016",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1344_OnePiece_14240",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1344_OnePiece_14241",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1344_OnePiece_14242",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1352_OnePiece_14236",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1361_OnePiece_14261",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1361_OnePiece_14403",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1361_OnePiece_14404",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1361_OnePiece_14405",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1361_OnePiece_14406",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1361_OnePiece_14407",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1361_OnePiece_14408",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1361_OnePiece_14409",
    "en": "Monotone",
    "jp": "モノトーン"
  },
  {
    "label": "1376_OnePiece_14281",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "1377_OnePiece_14282",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "141_OnePiece_3336",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "146_OnePiece_3347",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "146_OnePiece_7792",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "146_OnePiece_7793",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "150_OnePiece_3354",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "150_OnePiece_7823",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "150_OnePiece_7824",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "150_OnePiece_7825",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "150_OnePiece_7826",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "153_OnePiece_3385",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "153_OnePiece_8684",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "153_OnePiece_8685",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "154_OnePiece_3386",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "154_OnePiece_8949",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "154_OnePiece_8950",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "155_OnePiece_3387",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "155_OnePiece_8951",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "155_OnePiece_8952",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "155_OnePiece_8953",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "162_OnePiece_3409",
    "en": "Sash",
    "jp": "たすき"
  },
  {
    "label": "162_OnePiece_11130",
    "en": "Checkered",
    "jp": "げんろく"
  },
  {
    "label": "162_OnePiece_11131",
    "en": "Diamonds",
    "jp": "ひしやまがた"
  },
  {
    "label": "162_OnePiece_11132",
    "en": "Ring",
    "jp": "わ"
  },
  {
    "label": "162_OnePiece_11133",
    "en": "Stars",
    "jp": "ほしちらし"
  },
  {
    "label": "162_OnePiece_11134",
    "en": "Double sash",
    "jp": "じゅうじたすき"
  },
  {
    "label": "162_OnePiece_11135",
    "en": "Vertical stripes",
    "jp": "たてじま"
  },
  {
    "label": "162_OnePiece_11136",
    "en": "Zigzag",
    "jp": "のこぎりはがた"
  },
  {
    "label": "163_OnePiece_3417",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "163_OnePiece_9628",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "163_OnePiece_9629",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "163_OnePiece_9630",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "164_OnePiece_3420",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "164_OnePiece_9455",
    "en": "Flame orange",
    "jp": "ファイアーカラー"
  },
  {
    "label": "164_OnePiece_9456",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "164_OnePiece_9457",
    "en": "Lime yellow",
    "jp": "ライムイエロー"
  },
  {
    "label": "164_OnePiece_9458",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "165_OnePiece_3421",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "165_OnePiece_9631",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "165_OnePiece_9632",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "165_OnePiece_9633",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "166_OnePiece_3424",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "166_OnePiece_9634",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "167_OnePiece_3435",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "167_OnePiece_8238",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "167_OnePiece_8239",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "167_OnePiece_8240",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "167_OnePiece_8241",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "168_OnePiece_3441",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "169_OnePiece_3448",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "169_OnePiece_9459",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "169_OnePiece_9460",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "169_OnePiece_9461",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "169_OnePiece_9462",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "169_OnePiece_9463",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "169_OnePiece_9464",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "169_OnePiece_9465",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "170_OnePiece_3450",
    "en": "Purple & yellow",
    "jp": "パープル＆イエロー"
  },
  {
    "label": "170_OnePiece_9505",
    "en": "Black & white",
    "jp": "ブラック＆ホワイト"
  },
  {
    "label": "170_OnePiece_9506",
    "en": "Red & blue",
    "jp": "レッド＆ブルー"
  },
  {
    "label": "170_OnePiece_9507",
    "en": "Green & red",
    "jp": "グリーン＆レッド"
  },
  {
    "label": "171_OnePiece_3451",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "171_OnePiece_11571",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "171_OnePiece_11572",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "171_OnePiece_11573",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "171_OnePiece_11574",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "171_OnePiece_11575",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "171_OnePiece_11576",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "171_OnePiece_11577",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "172_OnePiece_3452",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "172_OnePiece_9205",
    "en": "Fuchsia",
    "jp": "あかむらさき"
  },
  {
    "label": "172_OnePiece_9206",
    "en": "Gray",
    "jp": "はいいろ"
  },
  {
    "label": "173_OnePiece_3460",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "173_OnePiece_9207",
    "en": "Gray",
    "jp": "はいいろ"
  },
  {
    "label": "173_OnePiece_9208",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "173_OnePiece_9209",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "173_OnePiece_9210",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "173_OnePiece_9211",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "173_OnePiece_9212",
    "en": "Yellow",
    "jp": "きいろ"
  },
  {
    "label": "173_OnePiece_9213",
    "en": "Orange",
    "jp": "だいだい"
  },
  {
    "label": "174_OnePiece_3462",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "176_OnePiece_3464",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "176_OnePiece_7445",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "176_OnePiece_7446",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "176_OnePiece_7447",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "176_OnePiece_7448",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "178_OnePiece_3475",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "178_OnePiece_8112",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "178_OnePiece_8113",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "178_OnePiece_8114",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "178_OnePiece_8115",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "180_OnePiece_3492",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "180_OnePiece_8686",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "180_OnePiece_8687",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "180_OnePiece_8688",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "181_OnePiece_3493",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "181_OnePiece_9141",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "181_OnePiece_9142",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "181_OnePiece_9143",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "181_OnePiece_9144",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "182_OnePiece_3536",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "182_OnePiece_8978",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "182_OnePiece_8979",
    "en": "Muslin",
    "jp": "きなり"
  },
  {
    "label": "183_OnePiece_3538",
    "en": "Vermilion",
    "jp": "しゅいろ"
  },
  {
    "label": "183_OnePiece_9145",
    "en": "Yellow-green",
    "jp": "きみどり"
  },
  {
    "label": "183_OnePiece_9146",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "183_OnePiece_9147",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "183_OnePiece_9148",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "186_OnePiece_3565",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "187_OnePiece_3570",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "187_OnePiece_8126",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "188_OnePiece_3572",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "188_OnePiece_8980",
    "en": "Green tea",
    "jp": "まっちゃ"
  },
  {
    "label": "189_OnePiece_3573",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "189_OnePiece_8689",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "189_OnePiece_8690",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "190_OnePiece_3574",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "192_OnePiece_3576",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "193_OnePiece_3577",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "198_OnePiece_3606",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "198_OnePiece_8154",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "198_OnePiece_8155",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "198_OnePiece_8156",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "199_OnePiece_3607",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "200_OnePiece_3609",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "201_OnePiece_3610",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "201_OnePiece_8635",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "201_OnePiece_8636",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "201_OnePiece_8637",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "201_OnePiece_8638",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "201_OnePiece_8639",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "202_OnePiece_3611",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "202_OnePiece_11106",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "202_OnePiece_11107",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "202_OnePiece_11108",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "202_OnePiece_11109",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "203_OnePiece_3612",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "203_OnePiece_8119",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "203_OnePiece_8120",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "204_OnePiece_3613",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "204_OnePiece_9508",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "204_OnePiece_9509",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "204_OnePiece_9510",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "204_OnePiece_9511",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "205_OnePiece_3614",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "205_OnePiece_8157",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "205_OnePiece_8158",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "211_OnePiece_3636",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "213_OnePiece_3655",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "213_OnePiece_9466",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "213_OnePiece_9467",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "213_OnePiece_9468",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "214_OnePiece_3659",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "214_OnePiece_7870",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "214_OnePiece_7871",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "214_OnePiece_7872",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "214_OnePiece_7873",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "214_OnePiece_7874",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "214_OnePiece_7875",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "214_OnePiece_7876",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "215_OnePiece_3660",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "215_OnePiece_9022",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "215_OnePiece_9023",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "215_OnePiece_9024",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "215_OnePiece_9025",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "216_OnePiece_3662",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "216_OnePiece_7572",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "216_OnePiece_7573",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "216_OnePiece_7574",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "216_OnePiece_7575",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "216_OnePiece_7576",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "216_OnePiece_7577",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "219_OnePiece_3668",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "219_OnePiece_9469",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "219_OnePiece_9470",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "219_OnePiece_9471",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "219_OnePiece_9472",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "219_OnePiece_9473",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "219_OnePiece_9474",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "219_OnePiece_9475",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "221_OnePiece_3673",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "221_OnePiece_8882",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "221_OnePiece_8883",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "221_OnePiece_8884",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "226_OnePiece_3685",
    "en": "Garnet",
    "jp": "ガーネット"
  },
  {
    "label": "226_OnePiece_9149",
    "en": "Aquamarine",
    "jp": "エメラルド"
  },
  {
    "label": "226_OnePiece_9150",
    "en": "Topaz",
    "jp": "トパーズ"
  },
  {
    "label": "226_OnePiece_9151",
    "en": "Amethyst",
    "jp": "アメジスト"
  },
  {
    "label": "227_OnePiece_3686",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "232_OnePiece_3696",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "232_OnePiece_9026",
    "en": "Peacock blue",
    "jp": "ピーコックブルー"
  },
  {
    "label": "232_OnePiece_9027",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "232_OnePiece_9028",
    "en": "Greige",
    "jp": "グレージュ"
  },
  {
    "label": "232_OnePiece_9029",
    "en": "Moss green",
    "jp": "モスグリーン"
  },
  {
    "label": "235_OnePiece_3703",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "235_OnePiece_8127",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "235_OnePiece_8128",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "235_OnePiece_8129",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "235_OnePiece_8130",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "239_OnePiece_3707",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "239_OnePiece_8624",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "239_OnePiece_8625",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "239_OnePiece_8626",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "239_OnePiece_8627",
    "en": "Light green",
    "jp": "ライトグリーン"
  },
  {
    "label": "247_OnePiece_4171",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "247_OnePiece_8131",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "247_OnePiece_8132",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "247_OnePiece_8133",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "247_OnePiece_8134",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "247_OnePiece_8135",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "247_OnePiece_8136",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "267_OnePiece_4248",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "267_OnePiece_8137",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "267_OnePiece_11935",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "267_OnePiece_11936",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "267_OnePiece_11937",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "268_OnePiece_4249",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "268_OnePiece_9214",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "276_OnePiece_4262",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "276_OnePiece_7769",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "276_OnePiece_7770",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "276_OnePiece_7771",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "276_OnePiece_7772",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "276_OnePiece_7773",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "276_OnePiece_7774",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "276_OnePiece_7775",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "278_OnePiece_4264",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "278_OnePiece_7892",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "278_OnePiece_7893",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "278_OnePiece_7894",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "278_OnePiece_7895",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "278_OnePiece_7896",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "278_OnePiece_7897",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "278_OnePiece_7898",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "279_OnePiece_4265",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "279_OnePiece_8586",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "279_OnePiece_8587",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "279_OnePiece_8588",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "279_OnePiece_8589",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "282_OnePiece_4273",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "282_OnePiece_8691",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "291_OnePiece_4290",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "291_OnePiece_7785",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "291_OnePiece_7786",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "291_OnePiece_7787",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "293_OnePiece_4292",
    "en": "Vermilion",
    "jp": "しゅいろ"
  },
  {
    "label": "293_OnePiece_8981",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "294_OnePiece_4295",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "294_OnePiece_7441",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "294_OnePiece_7442",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "297_OnePiece_4300",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "297_OnePiece_7877",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "297_OnePiece_7878",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "297_OnePiece_7879",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "297_OnePiece_7880",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "302_OnePiece_4319",
    "en": "Plum",
    "jp": "えびいろ"
  },
  {
    "label": "302_OnePiece_8982",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "302_OnePiece_8983",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "304_OnePiece_4324",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "304_OnePiece_8640",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "304_OnePiece_8641",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "304_OnePiece_8642",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "304_OnePiece_8643",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "304_OnePiece_8644",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "304_OnePiece_8645",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "304_OnePiece_8646",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "307_OnePiece_4328",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "307_OnePiece_8628",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "307_OnePiece_8629",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "307_OnePiece_8630",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "311_OnePiece_4332",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "311_OnePiece_8692",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "311_OnePiece_8693",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "311_OnePiece_8694",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "311_OnePiece_8695",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "311_OnePiece_8696",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "311_OnePiece_8697",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "311_OnePiece_8698",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "313_OnePiece_4334",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "313_OnePiece_8441",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "313_OnePiece_8442",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "313_OnePiece_8443",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "314_OnePiece_4336",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "314_OnePiece_9030",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "314_OnePiece_9031",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "317_OnePiece_4341",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "317_OnePiece_7938",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "317_OnePiece_7939",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "317_OnePiece_7940",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "318_OnePiece_4342",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "318_OnePiece_9215",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "318_OnePiece_9216",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "318_OnePiece_9217",
    "en": "Mustard",
    "jp": "からし"
  },
  {
    "label": "320_OnePiece_4344",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "320_OnePiece_8138",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "320_OnePiece_8139",
    "en": "Blue-gray",
    "jp": "ブルーグレー"
  },
  {
    "label": "321_OnePiece_4345",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "321_OnePiece_8140",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "321_OnePiece_8141",
    "en": "Blue-gray",
    "jp": "ブルーグレー"
  },
  {
    "label": "322_OnePiece_4347",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "322_OnePiece_8276",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "322_OnePiece_8277",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "322_OnePiece_8278",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "323_OnePiece_4359",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "323_OnePiece_7827",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "324_OnePiece_4360",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "324_OnePiece_9301",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "324_OnePiece_9302",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "325_OnePiece_4361",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "325_OnePiece_7811",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "325_OnePiece_7812",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "325_OnePiece_7813",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "325_OnePiece_7814",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "325_OnePiece_7815",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "325_OnePiece_7816",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "338_OnePiece_4396",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "338_OnePiece_8954",
    "en": "Peacock blue",
    "jp": "ピーコックブルー"
  },
  {
    "label": "338_OnePiece_8955",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "338_OnePiece_8956",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "340_OnePiece_4399",
    "en": "Fancy plaid",
    "jp": "ファンシーチェック"
  },
  {
    "label": "340_OnePiece_9419",
    "en": "Energetic plaid",
    "jp": "ビタミンチェック"
  },
  {
    "label": "340_OnePiece_9420",
    "en": "Dreamy plaid",
    "jp": "ドリームチェック"
  },
  {
    "label": "340_OnePiece_9421",
    "en": "Sweet plaid",
    "jp": "スイートチェック"
  },
  {
    "label": "343_OnePiece_4403",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "343_OnePiece_8590",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "343_OnePiece_8591",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "343_OnePiece_8592",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "345_OnePiece_4406",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "345_OnePiece_9422",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "345_OnePiece_9423",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "345_OnePiece_9424",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "345_OnePiece_9425",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "345_OnePiece_9426",
    "en": "Sky blue",
    "jp": "スカイブルー"
  },
  {
    "label": "345_OnePiece_9427",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "348_OnePiece_4409",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "348_OnePiece_8593",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "348_OnePiece_8594",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "357_OnePiece_4424",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "357_OnePiece_7988",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "357_OnePiece_7989",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "357_OnePiece_7990",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "357_OnePiece_7991",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "362_OnePiece_4431",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "362_OnePiece_9635",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "362_OnePiece_9636",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "362_OnePiece_9637",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "363_OnePiece_4432",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "363_OnePiece_9428",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "363_OnePiece_9429",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "368_OnePiece_4443",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "368_OnePiece_8631",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "368_OnePiece_8632",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "373_OnePiece_4449",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "373_OnePiece_9512",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "373_OnePiece_9513",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "373_OnePiece_9514",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "373_OnePiece_9515",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "389_OnePiece_4466",
    "en": "Moss green",
    "jp": "モスグリーン"
  },
  {
    "label": "389_OnePiece_8377",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "389_OnePiece_8378",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "390_OnePiece_4467",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "390_OnePiece_8379",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "390_OnePiece_8380",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "390_OnePiece_8381",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "390_OnePiece_8382",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "391_OnePiece_4468",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "391_OnePiece_7992",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "391_OnePiece_7993",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "393_OnePiece_4470",
    "en": "Baby mint",
    "jp": "ベビーミント"
  },
  {
    "label": "393_OnePiece_7828",
    "en": "Baby purple",
    "jp": "ベビーパープル"
  },
  {
    "label": "393_OnePiece_7829",
    "en": "Baby yellow",
    "jp": "ベビーイエロー"
  },
  {
    "label": "393_OnePiece_7830",
    "en": "Baby green",
    "jp": "ベビーグリーン"
  },
  {
    "label": "393_OnePiece_7831",
    "en": "Baby pink",
    "jp": "ベビーピンク"
  },
  {
    "label": "393_OnePiece_7832",
    "en": "Baby gray",
    "jp": "ベビーグレー"
  },
  {
    "label": "393_OnePiece_7833",
    "en": "Baby blue",
    "jp": "ベビーブルー"
  },
  {
    "label": "393_OnePiece_7834",
    "en": "Baby orange",
    "jp": "ベビーオレンジ"
  },
  {
    "label": "394_OnePiece_4471",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "394_OnePiece_8571",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "396_OnePiece_4475",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "396_OnePiece_9493",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "396_OnePiece_9494",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "396_OnePiece_9495",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "398_OnePiece_4484",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "403_OnePiece_4489",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "403_OnePiece_8595",
    "en": "Ochre",
    "jp": "オーカー"
  },
  {
    "label": "403_OnePiece_8596",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "403_OnePiece_8597",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "413_OnePiece_4506",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "413_OnePiece_8885",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "413_OnePiece_8886",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "413_OnePiece_8887",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "413_OnePiece_8888",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "413_OnePiece_8889",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "416_OnePiece_4511",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "424_OnePiece_4520",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "424_OnePiece_8957",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "424_OnePiece_8958",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "424_OnePiece_8959",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "424_OnePiece_8960",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "424_OnePiece_8961",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "435_OnePiece_4555",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "435_OnePiece_8504",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "435_OnePiece_8505",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "436_OnePiece_4556",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "436_OnePiece_7917",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "436_OnePiece_7918",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "436_OnePiece_7919",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "436_OnePiece_7920",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "436_OnePiece_7921",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "437_OnePiece_4557",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "437_OnePiece_7908",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "437_OnePiece_7909",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "437_OnePiece_7910",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "437_OnePiece_7911",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "439_OnePiece_4559",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "439_OnePiece_8383",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "439_OnePiece_8384",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "439_OnePiece_8385",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "439_OnePiece_8386",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "439_OnePiece_8387",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "442_OnePiece_4563",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "446_OnePiece_4570",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "446_OnePiece_8890",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "446_OnePiece_8891",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "446_OnePiece_8892",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "446_OnePiece_8893",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "446_OnePiece_8894",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "446_OnePiece_8895",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "446_OnePiece_8896",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "450_OnePiece_4577",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "450_OnePiece_9638",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "450_OnePiece_9639",
    "en": "Rainbow",
    "jp": "レインボー"
  },
  {
    "label": "452_OnePiece_4579",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "452_OnePiece_8810",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "453_OnePiece_4584",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "453_OnePiece_8811",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "453_OnePiece_8812",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "453_OnePiece_8813",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "453_OnePiece_8814",
    "en": "Pale blue",
    "jp": "ペールブルー"
  },
  {
    "label": "454_OnePiece_4586",
    "en": "Red & white",
    "jp": "レッド×ホワイト"
  },
  {
    "label": "454_OnePiece_7629",
    "en": "Blue & white",
    "jp": "ブルー×ホワイト"
  },
  {
    "label": "454_OnePiece_7630",
    "en": "Green & white",
    "jp": "グリーン×ホワイト"
  },
  {
    "label": "454_OnePiece_7631",
    "en": "Orange & white",
    "jp": "オレンジ×ホワイト"
  },
  {
    "label": "454_OnePiece_7632",
    "en": "Red & black",
    "jp": "レッド×ブラック"
  },
  {
    "label": "454_OnePiece_7633",
    "en": "Blue & black",
    "jp": "ブルー×ブラック"
  },
  {
    "label": "454_OnePiece_7634",
    "en": "Green & black",
    "jp": "グリーン×ブラック"
  },
  {
    "label": "454_OnePiece_7635",
    "en": "Orange & black",
    "jp": "オレンジ×ブラック"
  },
  {
    "label": "455_OnePiece_4587",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "455_OnePiece_7930",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "455_OnePiece_7931",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "455_OnePiece_7932",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "455_OnePiece_7933",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "455_OnePiece_7934",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "456_OnePiece_4588",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "457_OnePiece_4589",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "457_OnePiece_8326",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "457_OnePiece_8327",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "457_OnePiece_8328",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "457_OnePiece_8329",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "458_OnePiece_4590",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "460_OnePiece_4594",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "460_OnePiece_8962",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "462_OnePiece_4596",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "462_OnePiece_8598",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "462_OnePiece_8599",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "462_OnePiece_8600",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "462_OnePiece_8601",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "462_OnePiece_8602",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "469_OnePiece_4603",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "470_OnePiece_4604",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "470_OnePiece_7981",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "470_OnePiece_7982",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "470_OnePiece_7983",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "472_OnePiece_4606",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "472_OnePiece_9306",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "472_OnePiece_9307",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "477_OnePiece_4611",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "477_OnePiece_8159",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "477_OnePiece_8160",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "477_OnePiece_8161",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "482_OnePiece_4616",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "482_OnePiece_8815",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "482_OnePiece_8816",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "482_OnePiece_8817",
    "en": "Coral",
    "jp": "コーラル"
  },
  {
    "label": "482_OnePiece_8818",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "482_OnePiece_8819",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "483_OnePiece_4617",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "483_OnePiece_8022",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "483_OnePiece_8023",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "483_OnePiece_8024",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "483_OnePiece_8025",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "486_OnePiece_4648",
    "en": "Ice blue",
    "jp": "アイスブルー"
  },
  {
    "label": "488_OnePiece_4650",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "488_OnePiece_8162",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "488_OnePiece_8163",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "490_OnePiece_4653",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "490_OnePiece_8164",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "490_OnePiece_8165",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "490_OnePiece_8166",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "490_OnePiece_8167",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "490_OnePiece_8168",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "491_OnePiece_4655",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "491_OnePiece_7926",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "491_OnePiece_7927",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "491_OnePiece_7928",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "491_OnePiece_7929",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "492_OnePiece_4657",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "492_OnePiece_8246",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "492_OnePiece_8247",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "492_OnePiece_8248",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "492_OnePiece_8249",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "492_OnePiece_8250",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "500_OnePiece_4674",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "500_OnePiece_8026",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "500_OnePiece_8027",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "500_OnePiece_8028",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "512_OnePiece_4686",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "512_OnePiece_9496",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "514_OnePiece_4711",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "514_OnePiece_9497",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "525_OnePiece_4729",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "525_OnePiece_7782",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "525_OnePiece_7783",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "525_OnePiece_7784",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "527_OnePiece_4731",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "527_OnePiece_8968",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "527_OnePiece_8969",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "527_OnePiece_8970",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "532_OnePiece_4737",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "532_OnePiece_8364",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "532_OnePiece_8365",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "534_OnePiece_4740",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "534_OnePiece_9430",
    "en": "Dark green",
    "jp": "ダークグリーン"
  },
  {
    "label": "546_OnePiece_4791",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "546_OnePiece_8142",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "546_OnePiece_8143",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "546_OnePiece_8144",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "546_OnePiece_8145",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "578_OnePiece_5127",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "578_OnePiece_8647",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "578_OnePiece_8648",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "582_OnePiece_5131",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "582_OnePiece_9152",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "582_OnePiece_9153",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "582_OnePiece_9154",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "582_OnePiece_9155",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "582_OnePiece_9156",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "582_OnePiece_9157",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "584_OnePiece_5133",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "584_OnePiece_8649",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "584_OnePiece_8650",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "586_OnePiece_5135",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "586_OnePiece_7890",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "586_OnePiece_7891",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "650_OnePiece_5287",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "651_OnePiece_5288",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "651_OnePiece_9610",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "651_OnePiece_9611",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "651_OnePiece_9612",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "651_OnePiece_9613",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "695_OnePiece_5350",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "695_OnePiece_9039",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "695_OnePiece_9040",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "695_OnePiece_9041",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "695_OnePiece_9042",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "703_OnePiece_5387",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "703_OnePiece_8651",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "703_OnePiece_8652",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "703_OnePiece_8653",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "703_OnePiece_8654",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "703_OnePiece_8655",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "703_OnePiece_8656",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "703_OnePiece_8657",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "715_OnePiece_5391",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "715_OnePiece_8658",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "715_OnePiece_8659",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "716_OnePiece_5393",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "716_OnePiece_9516",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "716_OnePiece_9517",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "716_OnePiece_9518",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "716_OnePiece_9519",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "716_OnePiece_9520",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "716_OnePiece_9521",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "721_OnePiece_5404",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "721_OnePiece_9522",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "721_OnePiece_9523",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "721_OnePiece_9524",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "721_OnePiece_9525",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "721_OnePiece_9526",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "721_OnePiece_9527",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "739_OnePiece_5424",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "739_OnePiece_11564",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "739_OnePiece_11565",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "739_OnePiece_11566",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "740_OnePiece_5432",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "740_OnePiece_8169",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "740_OnePiece_8170",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "740_OnePiece_8171",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "740_OnePiece_8172",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "740_OnePiece_8173",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "747_OnePiece_5442",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "747_OnePiece_8174",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "747_OnePiece_8175",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "757_OnePiece_5461",
    "en": "Vermilion",
    "jp": "しゅいろ"
  },
  {
    "label": "757_OnePiece_8984",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "757_OnePiece_8985",
    "en": "Indigo blue",
    "jp": "あいいろ"
  },
  {
    "label": "757_OnePiece_8986",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "757_OnePiece_8987",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "757_OnePiece_8988",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "757_OnePiece_8989",
    "en": "Pale orange",
    "jp": "くちなし"
  },
  {
    "label": "757_OnePiece_8990",
    "en": "Parrot green",
    "jp": "もえぎ"
  },
  {
    "label": "773_OnePiece_5518",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "773_OnePiece_9158",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "773_OnePiece_9159",
    "en": "Beige",
    "jp": "かれくさいろ"
  },
  {
    "label": "773_OnePiece_9160",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "773_OnePiece_9161",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "774_OnePiece_5519",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "774_OnePiece_9162",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "774_OnePiece_9163",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "774_OnePiece_9164",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "774_OnePiece_9165",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "788_OnePiece_5567",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "793_OnePiece_5610",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "793_OnePiece_11578",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "793_OnePiece_11579",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "805_OnePiece_5644",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "805_OnePiece_9640",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "805_OnePiece_9641",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "806_OnePiece_5645",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "806_OnePiece_9528",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "806_OnePiece_9529",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "810_OnePiece_5653",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "810_OnePiece_7569",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "810_OnePiece_7570",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "810_OnePiece_7571",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "872_OnePiece_5796",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "872_OnePiece_8699",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "872_OnePiece_8700",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "872_OnePiece_8701",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "873_OnePiece_5797",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "873_OnePiece_8991",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "873_OnePiece_8992",
    "en": "Gold",
    "jp": "きんいろ"
  },
  {
    "label": "873_OnePiece_8993",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "873_OnePiece_8994",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "873_OnePiece_8995",
    "en": "Fuchsia",
    "jp": "あかむらさき"
  },
  {
    "label": "874_OnePiece_5798",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "874_OnePiece_7426",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "874_OnePiece_7427",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "874_OnePiece_7428",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "874_OnePiece_7429",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "874_OnePiece_7430",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "874_OnePiece_7431",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "874_OnePiece_7432",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "875_OnePiece_5799",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "875_OnePiece_9530",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "875_OnePiece_9531",
    "en": "Dark red",
    "jp": "ダークレッド"
  },
  {
    "label": "875_OnePiece_9532",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "875_OnePiece_9533",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "877_OnePiece_5801",
    "en": "Golden yellow",
    "jp": "やまぶきいろ"
  },
  {
    "label": "877_OnePiece_8996",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "877_OnePiece_8997",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "877_OnePiece_8998",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "889_OnePiece_5815",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "889_OnePiece_7881",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "889_OnePiece_7882",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "889_OnePiece_7883",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "889_OnePiece_7884",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "889_OnePiece_7885",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "891_OnePiece_5817",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "891_OnePiece_7886",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "891_OnePiece_7887",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "891_OnePiece_7888",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "891_OnePiece_7889",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "892_OnePiece_5818",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "892_OnePiece_9166",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "892_OnePiece_9167",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "892_OnePiece_9168",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "893_OnePiece_5823",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "893_OnePiece_8999",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "893_OnePiece_9000",
    "en": "Pale green",
    "jp": "うすみどり"
  },
  {
    "label": "893_OnePiece_9001",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "895_OnePiece_5825",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "895_OnePiece_9534",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "897_OnePiece_5830",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "897_OnePiece_9477",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "897_OnePiece_9478",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "897_OnePiece_9479",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "897_OnePiece_9480",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "898_OnePiece_5831",
    "en": "White & red",
    "jp": "ホワイト×レッド"
  },
  {
    "label": "898_OnePiece_9405",
    "en": "White & blue",
    "jp": "ホワイト×ブルー"
  },
  {
    "label": "898_OnePiece_9406",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "898_OnePiece_9407",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "898_OnePiece_9408",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "898_OnePiece_9409",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "898_OnePiece_9410",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "898_OnePiece_9411",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "913_OnePiece_6026",
    "en": "Pale green",
    "jp": "うすみどり"
  },
  {
    "label": "913_OnePiece_9004",
    "en": "Wisteria",
    "jp": "ふじいろ"
  },
  {
    "label": "913_OnePiece_9005",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "913_OnePiece_9006",
    "en": "Indigo blue",
    "jp": "あいいろ"
  },
  {
    "label": "913_OnePiece_9007",
    "en": "Orange",
    "jp": "だいだい"
  },
  {
    "label": "913_OnePiece_9008",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "913_OnePiece_9009",
    "en": "Yellow",
    "jp": "きいろ"
  },
  {
    "label": "913_OnePiece_9010",
    "en": "Gray",
    "jp": "はいいろ"
  },
  {
    "label": "914_OnePiece_6025",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "914_OnePiece_9002",
    "en": "Indigo blue",
    "jp": "あいいろ"
  },
  {
    "label": "914_OnePiece_9003",
    "en": "Fuchsia",
    "jp": "あかむらさき"
  },
  {
    "label": "915_OnePiece_6024",
    "en": "Fuchsia",
    "jp": "あかむらさき"
  },
  {
    "label": "915_OnePiece_9219",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "915_OnePiece_9220",
    "en": "Gray",
    "jp": "はいいろ"
  },
  {
    "label": "943_OnePiece_5614",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "944_OnePiece_5615",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "945_OnePiece_5616",
    "en": "White",
    "jp": "ホワイト"
  }
];

fashionVariants.caps = [
  {
    "label": "1013_Cap_2612",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1013_Cap_9732",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1013_Cap_9733",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1013_Cap_9734",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1014_Cap_8000",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "1041_Cap_8610",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "1041_Cap_9753",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "1041_Cap_9754",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "1041_Cap_9755",
    "en": "Golden yellow",
    "jp": "やまぶきいろ"
  },
  {
    "label": "1041_Cap_9756",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "1041_Cap_9757",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "1041_Cap_9758",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "1041_Cap_9759",
    "en": "Sky blue",
    "jp": "そらいろ"
  },
  {
    "label": "1042_Cap_8611",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1042_Cap_10842",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1042_Cap_10843",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1042_Cap_10844",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1042_Cap_10845",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1042_Cap_10846",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1042_Cap_10847",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1043_Cap_8612",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1043_Cap_11827",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1043_Cap_11828",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1044_Cap_8613",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1044_Cap_11821",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "1044_Cap_11822",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1044_Cap_11823",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1044_Cap_11824",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1044_Cap_11825",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1044_Cap_11826",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1045_Cap_8614",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1045_Cap_10848",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1045_Cap_10849",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1045_Cap_10850",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1061_Cap_9763",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1061_Cap_12092",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1061_Cap_12093",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1061_Cap_12094",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1061_Cap_12095",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1065_Cap_9769",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1065_Cap_11983",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1065_Cap_11984",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1105_Cap_9854",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1105_Cap_11959",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1105_Cap_11960",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1105_Cap_11961",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1105_Cap_11962",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1106_Cap_9855",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1106_Cap_12165",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1106_Cap_12166",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1106_Cap_12167",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1106_Cap_12168",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1107_Cap_9856",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1107_Cap_12169",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1107_Cap_12170",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1107_Cap_12171",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "1107_Cap_12172",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1108_Cap_9857",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1109_Cap_9858",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1110_Cap_9859",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1111_Cap_9860",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1112_Cap_9861",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1112_Cap_12052",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1112_Cap_12053",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1112_Cap_12054",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1112_Cap_12055",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1112_Cap_12056",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1112_Cap_12057",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1112_Cap_12058",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1114_Cap_9863",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1114_Cap_12048",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "1114_Cap_12049",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1114_Cap_12050",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1114_Cap_12051",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1115_Cap_9864",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1115_Cap_12045",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1115_Cap_12046",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1115_Cap_12047",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1117_Cap_9866",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1117_Cap_12043",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1117_Cap_12044",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "1119_Cap_9868",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1119_Cap_11990",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1119_Cap_11991",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1119_Cap_11992",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1121_Cap_9870",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1121_Cap_11993",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1121_Cap_11994",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1122_Cap_9871",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1123_Cap_9872",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1124_Cap_9873",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1125_Cap_9874",
    "en": "Peach",
    "jp": "ピーチ"
  },
  {
    "label": "1131_Cap_9880",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1131_Cap_11746",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1131_Cap_11747",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1131_Cap_11748",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1131_Cap_11749",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1131_Cap_11750",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1132_Cap_9881",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1132_Cap_11751",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1132_Cap_11752",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1132_Cap_11753",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1132_Cap_11754",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1132_Cap_11755",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1139_Cap_2611",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1142_Cap_5627",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1143_Cap_5628",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1147_Cap_7394",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1147_Cap_9569",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1147_Cap_9570",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1147_Cap_9571",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1147_Cap_9572",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1147_Cap_9573",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1147_Cap_9574",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1147_Cap_9575",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1153_Cap_11061",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "1153_Cap_12041",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1153_Cap_12042",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1153_Cap_12110",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1153_Cap_12111",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1163_Cap_10913",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1163_Cap_12030",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1163_Cap_12031",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "1163_Cap_12032",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1164_Cap_10914",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1164_Cap_12033",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1164_Cap_12034",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1186_Cap_12132",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1192_Cap_12424",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1195_Cap_12439",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1196_Cap_12440",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1197_Cap_12441",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1198_Cap_12442",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1199_Cap_12443",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1200_Cap_12444",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1201_Cap_12445",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "1202_Cap_12446",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "1221_Cap_12576",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1222_Cap_12577",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1224_Cap_12661",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1229_Cap_12666",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1229_Cap_13088",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1229_Cap_13089",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1255_Cap_12980",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "1267_Cap_13012",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1267_Cap_13403",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1267_Cap_13404",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1267_Cap_13405",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1267_Cap_13406",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1267_Cap_13407",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1272_Cap_13022",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1272_Cap_13393",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1272_Cap_13394",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1272_Cap_13395",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1272_Cap_13396",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1272_Cap_13397",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1273_Cap_13023",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1273_Cap_13418",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1273_Cap_13419",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1273_Cap_13420",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1273_Cap_13421",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1273_Cap_13422",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1274_Cap_13024",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1274_Cap_13423",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1274_Cap_13424",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1274_Cap_13425",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1274_Cap_13426",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1274_Cap_13427",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1279_Cap_13165",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1284_Cap_13170",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1295_Cap_13182",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1318_Cap_13546",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1319_Cap_13547",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1320_Cap_13548",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1329_Cap_13563",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "1351_Cap_14235",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1364_Cap_14264",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "1364_Cap_14401",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "1365_Cap_14265",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "1365_Cap_14402",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "1375_Cap_14280",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1375_Cap_14650",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1375_Cap_14651",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1375_Cap_14652",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1375_Cap_14653",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "533_Cap_4739",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "533_Cap_10867",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "550_Cap_4799",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "550_Cap_5186",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "550_Cap_5187",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "550_Cap_5188",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "550_Cap_5189",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "550_Cap_5190",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "550_Cap_5191",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "550_Cap_5192",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "551_Cap_4800",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "551_Cap_11031",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "551_Cap_11032",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "552_Cap_5096",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "553_Cap_5097",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "554_Cap_5098",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "555_Cap_5099",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "556_Cap_5100",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "557_Cap_5101",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "558_Cap_5102",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "559_Cap_5103",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "560_Cap_5104",
    "en": "Dark red",
    "jp": "ダークレッド"
  },
  {
    "label": "561_Cap_5105",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "562_Cap_5106",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "563_Cap_5107",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "564_Cap_5108",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "565_Cap_5109",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "566_Cap_5110",
    "en": "Dark red",
    "jp": "ダークレッド"
  },
  {
    "label": "567_Cap_5111",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "568_Cap_5112",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "569_Cap_5113",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "570_Cap_5114",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "571_Cap_5115",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "572_Cap_5116",
    "en": "Dark red",
    "jp": "ダークレッド"
  },
  {
    "label": "573_Cap_5117",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "574_Cap_5118",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "575_Cap_5119",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "579_Cap_5128",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "579_Cap_11506",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "579_Cap_11507",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "579_Cap_11508",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "579_Cap_11509",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "579_Cap_11510",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "579_Cap_11511",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "580_Cap_5129",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "580_Cap_11033",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "580_Cap_11034",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "580_Cap_11035",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "580_Cap_11036",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "580_Cap_11037",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "587_Cap_5136",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "587_Cap_11809",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "587_Cap_11810",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "587_Cap_11811",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "588_Cap_5137",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "588_Cap_11867",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "588_Cap_11868",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "588_Cap_11869",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "589_Cap_5138",
    "en": "Natural & red",
    "jp": "ナチュラル×レッド"
  },
  {
    "label": "589_Cap_10868",
    "en": "Natural & green",
    "jp": "ナチュラル×グリーン"
  },
  {
    "label": "589_Cap_10869",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "589_Cap_10870",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "589_Cap_10871",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "589_Cap_10872",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "589_Cap_10873",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "589_Cap_10874",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "590_Cap_5139",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "590_Cap_10215",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "590_Cap_10216",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "590_Cap_10217",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "590_Cap_10218",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "591_Cap_5140",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "592_Cap_5141",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "593_Cap_5142",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "594_Cap_5143",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "595_Cap_5144",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "595_Cap_10920",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "595_Cap_10921",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "595_Cap_10922",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "595_Cap_10923",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "595_Cap_10924",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "595_Cap_10925",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "596_Cap_5145",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "596_Cap_10744",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "596_Cap_10745",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "596_Cap_10746",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "596_Cap_10747",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "596_Cap_10748",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "596_Cap_10749",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "596_Cap_10750",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "597_Cap_5146",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "597_Cap_6880",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "597_Cap_6881",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "597_Cap_6882",
    "en": "Ochre",
    "jp": "オーカー"
  },
  {
    "label": "597_Cap_11731",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "597_Cap_11732",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "597_Cap_11733",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "597_Cap_11734",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "598_Cap_5147",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "598_Cap_11512",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "598_Cap_11513",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "598_Cap_11514",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "598_Cap_11515",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "599_Cap_5148",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "599_Cap_11516",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "599_Cap_11517",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "599_Cap_11518",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "599_Cap_11519",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "617_Cap_5265",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "617_Cap_10751",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "617_Cap_10752",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "618_Cap_5266",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "618_Cap_9739",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "618_Cap_9740",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "631_Cap_5245",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "631_Cap_11843",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "631_Cap_11844",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "631_Cap_11845",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "632_Cap_5256",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "632_Cap_11520",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "632_Cap_11521",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "632_Cap_11522",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "633_Cap_5257",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "633_Cap_11668",
    "en": "Black & blue",
    "jp": "ブラック×ブルー"
  },
  {
    "label": "633_Cap_11669",
    "en": "Black & red",
    "jp": "ブラック×レッド"
  },
  {
    "label": "633_Cap_11670",
    "en": "Yellow & avocado",
    "jp": "イエロー×カーキ"
  },
  {
    "label": "633_Cap_11671",
    "en": "Red & green",
    "jp": "レッド×グリーン"
  },
  {
    "label": "633_Cap_11672",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "633_Cap_11673",
    "en": "Lime & purple",
    "jp": "ライム×パープル"
  },
  {
    "label": "633_Cap_11674",
    "en": "Blue & purple",
    "jp": "ブルー×パープル"
  },
  {
    "label": "634_Cap_5258",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "634_Cap_11038",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "634_Cap_11039",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "634_Cap_11040",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "634_Cap_11041",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "634_Cap_11042",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "634_Cap_11043",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "634_Cap_11044",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "635_Cap_5259",
    "en": "Cream",
    "jp": "クリーム"
  },
  {
    "label": "635_Cap_10875",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "635_Cap_10876",
    "en": "Light brown",
    "jp": "ライトブラウン"
  },
  {
    "label": "635_Cap_10877",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "635_Cap_10878",
    "en": "Dark brown",
    "jp": "ダークブラウン"
  },
  {
    "label": "635_Cap_10879",
    "en": "Monotone",
    "jp": "モノトーン"
  },
  {
    "label": "635_Cap_10880",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "635_Cap_10881",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "636_Cap_5260",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "636_Cap_11523",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "636_Cap_11524",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "636_Cap_11525",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "636_Cap_11526",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "636_Cap_11527",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "637_Cap_5275",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "638_Cap_5276",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "639_Cap_5277",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "640_Cap_5278",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "641_Cap_5279",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "642_Cap_5280",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "644_Cap_5281",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "644_Cap_11814",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "645_Cap_5282",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "645_Cap_10219",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "645_Cap_10220",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "645_Cap_10221",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "645_Cap_10222",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "645_Cap_10223",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "645_Cap_10224",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "645_Cap_10225",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "646_Cap_5283",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "646_Cap_10753",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "646_Cap_10754",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "646_Cap_10755",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "646_Cap_10756",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "646_Cap_10757",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "646_Cap_10758",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "646_Cap_10759",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "647_Cap_5284",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "647_Cap_11849",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "647_Cap_11850",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "647_Cap_11851",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "656_Cap_5293",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "656_Cap_11834",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "656_Cap_11835",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "657_Cap_5294",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "657_Cap_10760",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "657_Cap_10761",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "657_Cap_10762",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "657_Cap_10763",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "657_Cap_10764",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "657_Cap_10765",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "657_Cap_10766",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "658_Cap_5295",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "658_Cap_11884",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "658_Cap_11885",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "659_Cap_5296",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "659_Cap_10882",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "659_Cap_10883",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "659_Cap_10884",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "659_Cap_10885",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "660_Cap_5297",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "660_Cap_10886",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "660_Cap_10887",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "661_Cap_5298",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "661_Cap_10825",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "662_Cap_5301",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "662_Cap_11045",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "662_Cap_11046",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "662_Cap_11047",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "662_Cap_11048",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "662_Cap_11049",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "663_Cap_5299",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "663_Cap_11846",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "663_Cap_11847",
    "en": "Blue-gray",
    "jp": "ブルーグレー"
  },
  {
    "label": "664_Cap_5305",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "664_Cap_11528",
    "en": "White & red",
    "jp": "ホワイト×レッド"
  },
  {
    "label": "664_Cap_11529",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "664_Cap_11530",
    "en": "White & blue",
    "jp": "ホワイト×ブルー"
  },
  {
    "label": "665_Cap_5304",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "665_Cap_10926",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "665_Cap_10927",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "665_Cap_10928",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "665_Cap_10929",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "665_Cap_10930",
    "en": "Cream",
    "jp": "クリーム"
  },
  {
    "label": "665_Cap_10931",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "665_Cap_10932",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "666_Cap_5306",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "667_Cap_5307",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "668_Cap_5308",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "669_Cap_5311",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "669_Cap_10767",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "669_Cap_10768",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "669_Cap_10769",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "669_Cap_10770",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "669_Cap_10771",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "670_Cap_5315",
    "en": "Chestnut",
    "jp": "マロン"
  },
  {
    "label": "670_Cap_10933",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "670_Cap_10934",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "670_Cap_10935",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "670_Cap_10936",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "670_Cap_10937",
    "en": "Cream",
    "jp": "クリーム"
  },
  {
    "label": "671_Cap_5316",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "671_Cap_10226",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "681_Cap_5329",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "681_Cap_10938",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "681_Cap_10939",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "681_Cap_10940",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "681_Cap_10941",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "681_Cap_10942",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "681_Cap_10943",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "684_Cap_5332",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "685_Cap_5333",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "685_Cap_11531",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "685_Cap_11532",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "685_Cap_11533",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "685_Cap_11534",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "685_Cap_11535",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "688_Cap_5336",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "688_Cap_11848",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "689_Cap_5340",
    "en": "Rainbow",
    "jp": "レインボー"
  },
  {
    "label": "689_Cap_11050",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "689_Cap_11051",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "689_Cap_11052",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "696_Cap_5351",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "696_Cap_10888",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "696_Cap_10889",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "696_Cap_10890",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "696_Cap_10891",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "701_Cap_5385",
    "en": "Purple & yellow",
    "jp": "パープル＆イエロー"
  },
  {
    "label": "701_Cap_11860",
    "en": "Black & white",
    "jp": "ブラック＆ホワイト"
  },
  {
    "label": "701_Cap_11861",
    "en": "Red & blue",
    "jp": "レッド＆ブルー"
  },
  {
    "label": "701_Cap_11862",
    "en": "Green & red",
    "jp": "グリーン＆レッド"
  },
  {
    "label": "710_Cap_5367",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "710_Cap_11621",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "710_Cap_11622",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "710_Cap_11623",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "710_Cap_11624",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "710_Cap_11625",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "710_Cap_11626",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "710_Cap_11627",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "714_Cap_5371",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "714_Cap_11819",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "714_Cap_11820",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "719_Cap_5398",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "719_Cap_10892",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "719_Cap_10893",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "720_Cap_5399",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "720_Cap_11053",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "720_Cap_11054",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "720_Cap_11055",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "720_Cap_11056",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "724_Cap_5408",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "724_Cap_10950",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "724_Cap_10951",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "724_Cap_10952",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "724_Cap_10953",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "724_Cap_10954",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "724_Cap_10955",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "724_Cap_10956",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "725_Cap_5409",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "725_Cap_10957",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "725_Cap_10958",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "725_Cap_10959",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "725_Cap_10960",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "725_Cap_10961",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "751_Cap_5447",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "803_Cap_5642",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "816_Cap_5663",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "816_Cap_11807",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "816_Cap_11808",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "910_Cap_5946",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "910_Cap_5947",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "910_Cap_5948",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "910_Cap_5949",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "910_Cap_5950",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "910_Cap_5951",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "910_Cap_5952",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "910_Cap_5953",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "929_Cap_6048",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "930_Cap_6049",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "935_Cap_6054",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "935_Cap_11539",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "935_Cap_11540",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "935_Cap_11541",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "935_Cap_11542",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "935_Cap_11543",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "936_Cap_6055",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "936_Cap_11544",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "936_Cap_11545",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "936_Cap_11546",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "942_Cap_2609",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "942_Cap_2610",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "942_Cap_10851",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "942_Cap_10852",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "942_Cap_10853",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "942_Cap_10854",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "942_Cap_10855",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "942_Cap_10856",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "949_Cap_6921",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "950_Cap_6947",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "950_Cap_11812",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "950_Cap_11813",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "951_Cap_6998",
    "en": "Vanilla",
    "jp": "バニラ"
  },
  {
    "label": "951_Cap_10835",
    "en": "Chocolate",
    "jp": "チョコ"
  },
  {
    "label": "951_Cap_10836",
    "en": "Gold leaf",
    "jp": "きんぱく"
  },
  {
    "label": "951_Cap_10837",
    "en": "Strawberry",
    "jp": "いちご"
  },
  {
    "label": "951_Cap_10838",
    "en": "Green tea",
    "jp": "まっちゃ"
  },
  {
    "label": "951_Cap_10839",
    "en": "Pale sky",
    "jp": "ラムネ"
  },
  {
    "label": "951_Cap_10840",
    "en": "Purple sweet potato",
    "jp": "むらさきいも"
  },
  {
    "label": "951_Cap_10841",
    "en": "Black sesame",
    "jp": "くろごま"
  },
  {
    "label": "952_Cap_7209",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "952_Cap_11902",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "952_Cap_11903",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "952_Cap_11904",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "953_Cap_7254",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "954_Cap_7273",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "954_Cap_10894",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "954_Cap_10895",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "955_Cap_7286",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "955_Cap_11057",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "955_Cap_11058",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "959_Cap_7377",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "960_Cap_7378",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "961_Cap_7412",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "961_Cap_9751",
    "en": "Rose gold",
    "jp": "ピンクゴールド"
  },
  {
    "label": "961_Cap_9752",
    "en": "Gold",
    "jp": "ゴールド"
  }
];

fashionVariants.helmets = [
  {
    "label": "1008_Helmet_6092",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "1008_Helmet_9749",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "1008_Helmet_9750",
    "en": "Rose gold",
    "jp": "ピンクゴールド"
  },
  {
    "label": "1009_Helmet_6093",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1009_Helmet_11894",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1009_Helmet_11895",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1009_Helmet_11896",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1010_Helmet_6091",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "1011_Helmet_5819",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "1012_Helmet_5832",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "1040_Helmet_8609",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1113_Helmet_9862",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1265_Helmet_13003",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1265_Helmet_13398",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1265_Helmet_13399",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1265_Helmet_13400",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1265_Helmet_13401",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1265_Helmet_13402",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1266_Helmet_13002",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1282_Helmet_13168",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1288_Helmet_13175",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1304_Helmet_13297",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1343_Helmet_13910",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1374_Helmet_14279",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "674_Helmet_5322",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "675_Helmet_5323",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "675_Helmet_11836",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "675_Helmet_11837",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "675_Helmet_11838",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "675_Helmet_11839",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "675_Helmet_11840",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "675_Helmet_11841",
    "en": "Light green",
    "jp": "ライトグリーン"
  },
  {
    "label": "675_Helmet_11842",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "676_Helmet_5324",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "677_Helmet_5325",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "677_Helmet_11700",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "677_Helmet_11701",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "678_Helmet_5326",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "678_Helmet_11702",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "678_Helmet_11703",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "679_Helmet_5327",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "679_Helmet_10826",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "679_Helmet_10827",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "679_Helmet_10828",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "679_Helmet_10829",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "680_Helmet_5328",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "682_Helmet_5330",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "682_Helmet_11704",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "682_Helmet_11705",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "682_Helmet_11706",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "683_Helmet_5331",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "683_Helmet_11696",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "686_Helmet_5334",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "687_Helmet_5335",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "687_Helmet_11697",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "687_Helmet_11698",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "687_Helmet_11699",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "691_Helmet_5345",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "691_Helmet_11886",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "691_Helmet_11887",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "692_Helmet_5346",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "697_Helmet_5373",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "697_Helmet_11604",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "697_Helmet_11605",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "697_Helmet_11606",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "697_Helmet_11607",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "697_Helmet_11608",
    "en": "Turquoise",
    "jp": "ターコイズ"
  },
  {
    "label": "697_Helmet_11609",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "697_Helmet_11610",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "698_Helmet_5374",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "698_Helmet_11617",
    "en": "Flame orange",
    "jp": "ファイアーカラー"
  },
  {
    "label": "698_Helmet_11618",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "698_Helmet_11619",
    "en": "Lime yellow",
    "jp": "ライムイエロー"
  },
  {
    "label": "698_Helmet_11620",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "699_Helmet_5381",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "702_Helmet_5386",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "702_Helmet_11877",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "702_Helmet_11878",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "702_Helmet_11879",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "702_Helmet_11880",
    "en": "Golden yellow",
    "jp": "やまぶきいろ"
  },
  {
    "label": "704_Helmet_5365",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "706_Helmet_5362",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "706_Helmet_11613",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "706_Helmet_11614",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "707_Helmet_5363",
    "en": "Baby mint",
    "jp": "ベビーミント"
  },
  {
    "label": "707_Helmet_11853",
    "en": "Baby purple",
    "jp": "ベビーパープル"
  },
  {
    "label": "707_Helmet_11854",
    "en": "Baby yellow",
    "jp": "ベビーイエロー"
  },
  {
    "label": "707_Helmet_11855",
    "en": "Baby green",
    "jp": "ベビーグリーン"
  },
  {
    "label": "707_Helmet_11856",
    "en": "Baby pink",
    "jp": "ベビーピンク"
  },
  {
    "label": "707_Helmet_11857",
    "en": "Baby gray",
    "jp": "ベビーグレー"
  },
  {
    "label": "707_Helmet_11858",
    "en": "Baby blue",
    "jp": "ベビーブルー"
  },
  {
    "label": "707_Helmet_11859",
    "en": "Baby orange",
    "jp": "ベビーオレンジ"
  },
  {
    "label": "708_Helmet_5364",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "708_Helmet_11870",
    "en": "Gray",
    "jp": "はいいろ"
  },
  {
    "label": "708_Helmet_11871",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "708_Helmet_11872",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "708_Helmet_11873",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "708_Helmet_11874",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "708_Helmet_11875",
    "en": "Yellow",
    "jp": "きいろ"
  },
  {
    "label": "708_Helmet_11876",
    "en": "Orange",
    "jp": "だいだい"
  },
  {
    "label": "709_Helmet_5366",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "709_Helmet_11596",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "709_Helmet_11597",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "709_Helmet_11598",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "709_Helmet_11599",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "711_Helmet_5368",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "711_Helmet_11829",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "711_Helmet_11830",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "711_Helmet_11831",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "711_Helmet_11832",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "711_Helmet_11833",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "712_Helmet_5369",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "713_Helmet_5370",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "713_Helmet_10944",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "713_Helmet_10945",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "713_Helmet_10946",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "713_Helmet_10947",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "713_Helmet_10948",
    "en": "Moss green",
    "jp": "モスグリーン"
  },
  {
    "label": "713_Helmet_10949",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "717_Helmet_5394",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "718_Helmet_5395",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "718_Helmet_10227",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "718_Helmet_10228",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "718_Helmet_10229",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "738_Helmet_5423",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "738_Helmet_11800",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "738_Helmet_11801",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "738_Helmet_11802",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "738_Helmet_11803",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "738_Helmet_11804",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "738_Helmet_11805",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "738_Helmet_11806",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "741_Helmet_5434",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "741_Helmet_11863",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "741_Helmet_11864",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "741_Helmet_11865",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "742_Helmet_5435",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "742_Helmet_10230",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "742_Helmet_10231",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "742_Helmet_10232",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "742_Helmet_10233",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "742_Helmet_10234",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "742_Helmet_10235",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "742_Helmet_10236",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "748_Helmet_5443",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "748_Helmet_10237",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "748_Helmet_10238",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "748_Helmet_10239",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "748_Helmet_10240",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "748_Helmet_10241",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "748_Helmet_10242",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "748_Helmet_10243",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "750_Helmet_5446",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "758_Helmet_5464",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "758_Helmet_11707",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "759_Helmet_5465",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "759_Helmet_11708",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "759_Helmet_11709",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "759_Helmet_11710",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "790_Helmet_5607",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "822_Helmet_5669",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "822_Helmet_11815",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "822_Helmet_11816",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "822_Helmet_11817",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "822_Helmet_11818",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "825_Helmet_5687",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "825_Helmet_11611",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "825_Helmet_11612",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "826_Helmet_5688",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "827_Helmet_5689",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "828_Helmet_5690",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "829_Helmet_5691",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "830_Helmet_5692",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "831_Helmet_5693",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "831_Helmet_11888",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "831_Helmet_11889",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "831_Helmet_11890",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "831_Helmet_11891",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "831_Helmet_11892",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "831_Helmet_11893",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "832_Helmet_5682",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "832_Helmet_11536",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "832_Helmet_11537",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "832_Helmet_11538",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "833_Helmet_5683",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "833_Helmet_11897",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "833_Helmet_11898",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "833_Helmet_11899",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "833_Helmet_11900",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "833_Helmet_11901",
    "en": "Light purple",
    "jp": "ライトパープル"
  },
  {
    "label": "834_Helmet_5684",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "834_Helmet_11881",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "834_Helmet_11882",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "834_Helmet_11883",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "836_Helmet_5695",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "836_Helmet_9741",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "836_Helmet_9742",
    "en": "Golden yellow",
    "jp": "やまぶきいろ"
  },
  {
    "label": "836_Helmet_9743",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "836_Helmet_9744",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "836_Helmet_9745",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "836_Helmet_9746",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "837_Helmet_5696",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "838_Helmet_5697",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "838_Helmet_11794",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "838_Helmet_11795",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "838_Helmet_11796",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "900_Helmet_5840",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "917_Helmet_6034",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "917_Helmet_11171",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "918_Helmet_6035",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "919_Helmet_6036",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "923_Helmet_6041",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "931_Helmet_6050",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "931_Helmet_11600",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "931_Helmet_11601",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "931_Helmet_11602",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "931_Helmet_11603",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "933_Helmet_6052",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "933_Helmet_9747",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "933_Helmet_9748",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "934_Helmet_6053",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "956_Helmet_7291",
    "en": "Green",
    "jp": "グリーン"
  }
];

fashionVariants.headwear = [...fashionVariants.caps, ...fashionVariants.helmets];

fashionVariants.accessories = [
  {
    "label": "1055_Accessory_2298",
    "en": "Baby purple",
    "jp": "ベビーパープル"
  },
  {
    "label": "1055_Accessory_11013",
    "en": "Baby mint",
    "jp": "ベビーミント"
  },
  {
    "label": "1055_Accessory_11014",
    "en": "Baby yellow",
    "jp": "ベビーイエロー"
  },
  {
    "label": "1055_Accessory_11015",
    "en": "Baby green",
    "jp": "ベビーグリーン"
  },
  {
    "label": "1055_Accessory_11016",
    "en": "Baby pink",
    "jp": "ベビーピンク"
  },
  {
    "label": "1055_Accessory_11017",
    "en": "Baby gray",
    "jp": "ベビーグレー"
  },
  {
    "label": "1055_Accessory_11018",
    "en": "Baby blue",
    "jp": "ベビーブルー"
  },
  {
    "label": "1055_Accessory_11019",
    "en": "Baby orange",
    "jp": "ベビーオレンジ"
  },
  {
    "label": "1137_Accessory_9887",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1137_Accessory_11776",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1137_Accessory_11777",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1137_Accessory_11778",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1137_Accessory_11779",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1137_Accessory_11780",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1148_Accessory_9654",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1182_Accessory_12128",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1183_Accessory_12129",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1225_Accessory_12662",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1226_Accessory_12663",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "1271_Accessory_13018",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1300_Accessory_13215",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1324_Accessory_13558",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1325_Accessory_13559",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1326_Accessory_13560",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1354_Accessory_14238",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "184_Accessory_3549",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "185_Accessory_3550",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "257_Accessory_4235",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "257_Accessory_11184",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "257_Accessory_11185",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "257_Accessory_11186",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "257_Accessory_11187",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "258_Accessory_4236",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "258_Accessory_11066",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "258_Accessory_11067",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "258_Accessory_11068",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "259_Accessory_4237",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "259_Accessory_11188",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "259_Accessory_11189",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "259_Accessory_11190",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "259_Accessory_11191",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "260_Accessory_4238",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "260_Accessory_11069",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "260_Accessory_11070",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "260_Accessory_11071",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "261_Accessory_4239",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "261_Accessory_11072",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "261_Accessory_11073",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "261_Accessory_11074",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "261_Accessory_11075",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "262_Accessory_4240",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "262_Accessory_11192",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "262_Accessory_11193",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "262_Accessory_11194",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "262_Accessory_11195",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "263_Accessory_4241",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "263_Accessory_11196",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "263_Accessory_11197",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "263_Accessory_11198",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "263_Accessory_11199",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "263_Accessory_11200",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "263_Accessory_11201",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "263_Accessory_11202",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "264_Accessory_4242",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "264_Accessory_11203",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "264_Accessory_11204",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "264_Accessory_11205",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "264_Accessory_11206",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "264_Accessory_11207",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "264_Accessory_11208",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "277_Accessory_4263",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "277_Accessory_11076",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "277_Accessory_11077",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "277_Accessory_11078",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "286_Accessory_4282",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "315_Accessory_4337",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "358_Accessory_4425",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "358_Accessory_11154",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "358_Accessory_11155",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "358_Accessory_11156",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "358_Accessory_11157",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "358_Accessory_11158",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "375_Accessory_4451",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "376_Accessory_4452",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "377_Accessory_4453",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "377_Accessory_11479",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "377_Accessory_11480",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "377_Accessory_11481",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "377_Accessory_11482",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "377_Accessory_11483",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "378_Accessory_4454",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "378_Accessory_11484",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "378_Accessory_11485",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "378_Accessory_11486",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "378_Accessory_11487",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "378_Accessory_11488",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "379_Accessory_4456",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "379_Accessory_11209",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "379_Accessory_11210",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "379_Accessory_11211",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "379_Accessory_11212",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "379_Accessory_11213",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "380_Accessory_4457",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "381_Accessory_4458",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "381_Accessory_11489",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "381_Accessory_11490",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "381_Accessory_11491",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "381_Accessory_11492",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "382_Accessory_4459",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "382_Accessory_11214",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "383_Accessory_4460",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "383_Accessory_11079",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "383_Accessory_11080",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "384_Accessory_4461",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "384_Accessory_11215",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "384_Accessory_11216",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "385_Accessory_4462",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "385_Accessory_11000",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "385_Accessory_11001",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "386_Accessory_4463",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "386_Accessory_11020",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "387_Accessory_4464",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "387_Accessory_11002",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "387_Accessory_11003",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "387_Accessory_11004",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "387_Accessory_11005",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "387_Accessory_11006",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "397_Accessory_4483",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "397_Accessory_11021",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "397_Accessory_11022",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "405_Accessory_4491",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "406_Accessory_4492",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "407_Accessory_4496",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "408_Accessory_4501",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "408_Accessory_11007",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "415_Accessory_4510",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "415_Accessory_11217",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "415_Accessory_11218",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "415_Accessory_11219",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "417_Accessory_4512",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "418_Accessory_4513",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "418_Accessory_11008",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "418_Accessory_11009",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "432_Accessory_4551",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "432_Accessory_11493",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "432_Accessory_11494",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "432_Accessory_11495",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "432_Accessory_11496",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "432_Accessory_11497",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "433_Accessory_4552",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "433_Accessory_11498",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "433_Accessory_11499",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "433_Accessory_11500",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "433_Accessory_11501",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "433_Accessory_11502",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "441_Accessory_4561",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "441_Accessory_11159",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "463_Accessory_4597",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "463_Accessory_11081",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "463_Accessory_11082",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "463_Accessory_11083",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "463_Accessory_11084",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "463_Accessory_11085",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "463_Accessory_11086",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "466_Accessory_4600",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "466_Accessory_11023",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "466_Accessory_11024",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "473_Accessory_4607",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "473_Accessory_11220",
    "en": "Light brown",
    "jp": "ライトブラウン"
  },
  {
    "label": "473_Accessory_11221",
    "en": "Dark brown",
    "jp": "ダークブラウン"
  },
  {
    "label": "473_Accessory_11222",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "474_Accessory_4608",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "474_Accessory_11503",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "474_Accessory_11504",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "475_Accessory_4609",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "475_Accessory_11087",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "475_Accessory_11088",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "475_Accessory_11089",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "475_Accessory_11090",
    "en": "Magenta",
    "jp": "マゼンタ"
  },
  {
    "label": "475_Accessory_11091",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "475_Accessory_11092",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "484_Accessory_4646",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "484_Accessory_11223",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "484_Accessory_11224",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "484_Accessory_11225",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "485_Accessory_4647",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "487_Accessory_4649",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "487_Accessory_11160",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "489_Accessory_4652",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "494_Accessory_4667",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "494_Accessory_11161",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "494_Accessory_11162",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "494_Accessory_11163",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "494_Accessory_11164",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "494_Accessory_11165",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "496_Accessory_4669",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "496_Accessory_11093",
    "en": "Dark brown",
    "jp": "ダークブラウン"
  },
  {
    "label": "497_Accessory_4671",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "498_Accessory_4672",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "502_Accessory_4676",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "503_Accessory_4677",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "504_Accessory_4678",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "504_Accessory_11166",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "504_Accessory_11167",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "504_Accessory_11168",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "505_Accessory_4679",
    "en": "Hair Color",
    "jp": "ヘアカラー"
  },
  {
    "label": "508_Accessory_4682",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "509_Accessory_4683",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "509_Accessory_11226",
    "en": "Ochre",
    "jp": "オーカー"
  },
  {
    "label": "509_Accessory_11227",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "510_Accessory_4684",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "511_Accessory_4685",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "511_Accessory_11505",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "614_Accessory_5182",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "615_Accessory_5261",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "630_Accessory_5244",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "630_Accessory_11025",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "630_Accessory_11026",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "819_Accessory_5666",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "819_Accessory_11169",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "819_Accessory_11170",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "856_Accessory_5738",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "856_Accessory_11027",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "856_Accessory_11028",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "856_Accessory_11029",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "856_Accessory_11030",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "857_Accessory_5739",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "857_Accessory_11228",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "857_Accessory_11229",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "857_Accessory_11230",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "857_Accessory_11231",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "865_Accessory_5773",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "865_Accessory_11010",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "865_Accessory_11011",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "865_Accessory_11012",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "899_Accessory_5833",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "904_Accessory_5857",
    "en": "Pasta",
    "jp": "パスタ"
  },
  {
    "label": "921_Accessory_6039",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "922_Accessory_6040",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "937_Accessory_6057",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "937_Accessory_11175",
    "en": "Blue",
    "jp": "ブルー"
  }
];

fashionVariants.socks = [
  {
    "label": "47_Socks_3095",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "47_Socks_9655",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "47_Socks_9656",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "47_Socks_9657",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "47_Socks_9658",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "48_Socks_3096",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "48_Socks_9659",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "48_Socks_9660",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1002_Socks_6898",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1002_Socks_9643",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1002_Socks_10021",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1002_Socks_10022",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1002_Socks_10023",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1002_Socks_10024",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1002_Socks_10025",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1002_Socks_10026",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1049_Socks_9580",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1049_Socks_9675",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1049_Socks_9676",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1049_Socks_9677",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1049_Socks_9678",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1049_Socks_9679",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1049_Socks_9680",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1049_Socks_9681",
    "en": "Yellow-green",
    "jp": "イエローグリーン"
  },
  {
    "label": "1050_Socks_9581",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1050_Socks_9682",
    "en": "Light gray",
    "jp": "ライトグレー"
  },
  {
    "label": "1050_Socks_9683",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1050_Socks_9684",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1050_Socks_9685",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1050_Socks_9686",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1051_Socks_9582",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1051_Socks_9687",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1051_Socks_9688",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1051_Socks_9689",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1051_Socks_9690",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1051_Socks_9691",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1051_Socks_9692",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1051_Socks_9693",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1052_Socks_9583",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1052_Socks_9694",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1052_Socks_9695",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1052_Socks_9696",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1052_Socks_9697",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1053_Socks_9585",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1053_Socks_9801",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1053_Socks_9802",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1053_Socks_9803",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1053_Socks_9804",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1053_Socks_9805",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1053_Socks_9806",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1053_Socks_9807",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1054_Socks_9586",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1054_Socks_9808",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1054_Socks_9809",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1054_Socks_9810",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1054_Socks_9811",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1059_Socks_9645",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1059_Socks_10034",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1059_Socks_10035",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1059_Socks_10036",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1059_Socks_10037",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1059_Socks_10038",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1060_Socks_9644",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1060_Socks_10027",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1060_Socks_10028",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1060_Socks_10029",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1060_Socks_10030",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1060_Socks_10031",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "1060_Socks_10032",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "1060_Socks_10033",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1133_Socks_9882",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1133_Socks_11756",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1133_Socks_11757",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1133_Socks_11758",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1133_Socks_11759",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1133_Socks_11760",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1134_Socks_9883",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1134_Socks_11761",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1134_Socks_11762",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1134_Socks_11763",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1134_Socks_11764",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1134_Socks_11765",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1144_Socks_5629",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1188_Socks_12174",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1188_Socks_12179",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1188_Socks_12180",
    "en": "Cyan",
    "jp": "シアン"
  },
  {
    "label": "1188_Socks_12181",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "1189_Socks_12175",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1189_Socks_12182",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1189_Socks_12183",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1189_Socks_12184",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1275_Socks_13029",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1275_Socks_13372",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1275_Socks_13373",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1275_Socks_13374",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1275_Socks_13375",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1275_Socks_13376",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1286_Socks_13172",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1296_Socks_13183",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "519_Socks_4718",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "519_Socks_9053",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "519_Socks_9054",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "519_Socks_9055",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "519_Socks_9056",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "519_Socks_9057",
    "en": "Peacock blue",
    "jp": "ピーコックブルー"
  },
  {
    "label": "535_Socks_4741",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "535_Socks_10003",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "535_Socks_10004",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "535_Socks_10005",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "535_Socks_10006",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "535_Socks_10007",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "535_Socks_10008",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "535_Socks_10009",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "536_Socks_4742",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "536_Socks_9058",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "536_Socks_9059",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "536_Socks_9060",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "536_Socks_9061",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "536_Socks_9062",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "537_Socks_4743",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "537_Socks_11580",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "537_Socks_11581",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "537_Socks_11582",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "537_Socks_11583",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "537_Socks_11584",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "537_Socks_11585",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "537_Socks_11586",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "538_Socks_4744",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "538_Socks_9776",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "538_Socks_9777",
    "en": "Dark gray",
    "jp": "ダークグレー"
  },
  {
    "label": "538_Socks_9778",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "538_Socks_9779",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "538_Socks_9780",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "538_Socks_9781",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "539_Socks_4745",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "539_Socks_9782",
    "en": "Indigo blue",
    "jp": "インディゴブルー"
  },
  {
    "label": "539_Socks_9783",
    "en": "Saxon blue",
    "jp": "サックスブルー"
  },
  {
    "label": "539_Socks_9784",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "540_Socks_4746",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "540_Socks_9966",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "540_Socks_9967",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "540_Socks_9968",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "540_Socks_9969",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "540_Socks_9970",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "540_Socks_9971",
    "en": "Dark green",
    "jp": "ダークグリーン"
  },
  {
    "label": "540_Socks_9972",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "541_Socks_4747",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "541_Socks_9661",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "541_Socks_9662",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "541_Socks_9663",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "542_Socks_4748",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "542_Socks_9889",
    "en": "Ivory",
    "jp": "アイボリー"
  },
  {
    "label": "542_Socks_9890",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "542_Socks_9891",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "542_Socks_9892",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "542_Socks_9893",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "542_Socks_9894",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "543_Socks_4749",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "543_Socks_8929",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "543_Socks_8930",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "600_Socks_5167",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "600_Socks_10010",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "600_Socks_10011",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "600_Socks_10012",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "600_Socks_10013",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "600_Socks_10014",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "600_Socks_10015",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "600_Socks_10016",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "601_Socks_5168",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "601_Socks_9063",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "601_Socks_9064",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "601_Socks_9065",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "601_Socks_9066",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "601_Socks_9067",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "601_Socks_9068",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "601_Socks_9069",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "602_Socks_5169",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "602_Socks_9785",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "602_Socks_9786",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "602_Socks_9787",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "602_Socks_9788",
    "en": "Light purple",
    "jp": "ライトパープル"
  },
  {
    "label": "602_Socks_9789",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "603_Socks_5170",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "603_Socks_9790",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "603_Socks_9791",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "603_Socks_9792",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "603_Socks_9793",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "604_Socks_5171",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "604_Socks_10017",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "604_Socks_10018",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "604_Socks_10019",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "605_Socks_5172",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "605_Socks_11589",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "605_Socks_11590",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "605_Socks_11591",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "605_Socks_11592",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "605_Socks_11593",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "605_Socks_11594",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "605_Socks_11595",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "606_Socks_5173",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "606_Socks_8931",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "606_Socks_8932",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "606_Socks_8933",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "606_Socks_10170",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "607_Socks_5174",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "607_Socks_8934",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "607_Socks_8935",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "607_Socks_8936",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "607_Socks_8937",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "607_Socks_8938",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "608_Socks_5176",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "608_Socks_9664",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "608_Socks_9665",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "608_Socks_9666",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "608_Socks_9667",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "608_Socks_9668",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "608_Socks_9669",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "608_Socks_9670",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "609_Socks_5177",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "609_Socks_9973",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "609_Socks_9974",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "609_Socks_9975",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "609_Socks_9976",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "609_Socks_9977",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "609_Socks_9978",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "610_Socks_5178",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "610_Socks_9070",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "610_Socks_9071",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "611_Socks_5179",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "611_Socks_9072",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "611_Socks_9073",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "611_Socks_9074",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "611_Socks_9075",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "612_Socks_5180",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "612_Socks_9895",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "612_Socks_9896",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "612_Socks_9897",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "612_Socks_9898",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "612_Socks_9899",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "612_Socks_9900",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "612_Socks_9901",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "613_Socks_5181",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "613_Socks_9979",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "613_Socks_9980",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "613_Socks_9981",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "613_Socks_9982",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "613_Socks_9983",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "613_Socks_9984",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "619_Socks_5195",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "619_Socks_9902",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "619_Socks_9903",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "619_Socks_9904",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "619_Socks_9905",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "619_Socks_9906",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "620_Socks_5196",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "620_Socks_9076",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "620_Socks_9077",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "621_Socks_5197",
    "en": "Red & pink",
    "jp": "レッド×ピンク"
  },
  {
    "label": "621_Socks_9794",
    "en": "Emerald & lime",
    "jp": "エメラルド×ライム"
  },
  {
    "label": "621_Socks_9795",
    "en": "Purple & orange",
    "jp": "パープル×オレンジ"
  },
  {
    "label": "621_Socks_9796",
    "en": "Light blue & salmon pink",
    "jp": "ライトブルー×サーモンピンク"
  },
  {
    "label": "621_Socks_9797",
    "en": "Yellow & blue",
    "jp": "イエロー×ブルー"
  },
  {
    "label": "622_Socks_5198",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "622_Socks_9078",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "622_Socks_9079",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "622_Socks_9080",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "622_Socks_9081",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "623_Socks_5199",
    "en": "Monotone",
    "jp": "モノトーン"
  },
  {
    "label": "623_Socks_6902",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "623_Socks_9996",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "623_Socks_9997",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "623_Socks_9998",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "623_Socks_9999",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "623_Socks_10000",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "623_Socks_10001",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "624_Socks_5200",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "624_Socks_9082",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "624_Socks_9083",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "624_Socks_9084",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "624_Socks_9085",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "624_Socks_9086",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "624_Socks_9087",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "624_Socks_9088",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "625_Socks_5201",
    "en": "Red & light blue",
    "jp": "レッド×ライトブルー"
  },
  {
    "label": "625_Socks_9985",
    "en": "Blue & orange",
    "jp": "ブルー×オレンジ"
  },
  {
    "label": "625_Socks_9986",
    "en": "Lime & pink",
    "jp": "ライム×ピンク"
  },
  {
    "label": "625_Socks_9987",
    "en": "Yellow & purple",
    "jp": "イエロー×パープル"
  },
  {
    "label": "625_Socks_9988",
    "en": "Light blue & red",
    "jp": "ライトブルー×レッド"
  },
  {
    "label": "625_Socks_9989",
    "en": "Purple & green",
    "jp": "パープル×グリーン"
  },
  {
    "label": "625_Socks_9990",
    "en": "Pink & yellow",
    "jp": "ピンク×イエロー"
  },
  {
    "label": "625_Socks_9991",
    "en": "Black & gray",
    "jp": "ブラック×グレー"
  },
  {
    "label": "626_Socks_5202",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "626_Socks_8939",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "626_Socks_8940",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "626_Socks_8941",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "627_Socks_5203",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "627_Socks_9671",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "627_Socks_9672",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "627_Socks_9673",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "628_Socks_5204",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "628_Socks_9907",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "628_Socks_9908",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "628_Socks_9909",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "628_Socks_9910",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "628_Socks_9911",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "629_Socks_5214",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "629_Socks_9798",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "629_Socks_9799",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "629_Socks_9800",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "723_Socks_5406",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "723_Socks_9992",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "723_Socks_9993",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "723_Socks_9994",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "723_Socks_9995",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "749_Socks_5444",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "749_Socks_9912",
    "en": "Peacock blue",
    "jp": "ピーコックブルー"
  },
  {
    "label": "749_Socks_9913",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "749_Socks_9914",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "749_Socks_9915",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "749_Socks_9916",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "879_Socks_5804",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "879_Socks_9917",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "879_Socks_9918",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "879_Socks_9919",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "879_Socks_9920",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "880_Socks_5806",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "880_Socks_9921",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "880_Socks_9922",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "880_Socks_9923",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "880_Socks_9924",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "880_Socks_9925",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "880_Socks_9926",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "880_Socks_9927",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "886_Socks_5812",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "886_Socks_9928",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "886_Socks_9929",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "886_Socks_9930",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "886_Socks_9931",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "886_Socks_9932",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "887_Socks_5813",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "887_Socks_9933",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "887_Socks_9934",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "887_Socks_9935",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "887_Socks_9936",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "926_Socks_6044",
    "en": "Red ribbons",
    "jp": "レッドリボン"
  },
  {
    "label": "926_Socks_8942",
    "en": "Green ribbons",
    "jp": "グリーンリボン"
  },
  {
    "label": "926_Socks_8943",
    "en": "Blue ribbons",
    "jp": "ブルーリボン"
  },
  {
    "label": "926_Socks_8944",
    "en": "Black ribbons",
    "jp": "ブラックリボン"
  },
  {
    "label": "927_Socks_6045",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "927_Socks_9937",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "927_Socks_9938",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "927_Socks_9939",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "927_Socks_9940",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "927_Socks_9941",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "927_Socks_9942",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "927_Socks_9943",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "928_Socks_6046",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "928_Socks_9674",
    "en": "White",
    "jp": "ホワイト"
  }
];

fashionVariants.shoes = [
  {
    "label": "1003_Shoes_6893",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1003_Shoes_10074",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "1003_Shoes_10075",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "1003_Shoes_10076",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1003_Shoes_10077",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1003_Shoes_10078",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1003_Shoes_10079",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1003_Shoes_10080",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "1097_Shoes_9846",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1098_Shoes_9847",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1098_Shoes_11987",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1098_Shoes_11988",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1098_Shoes_11989",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1135_Shoes_9884",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1135_Shoes_11766",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1135_Shoes_11767",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1135_Shoes_11768",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1135_Shoes_11769",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1135_Shoes_11770",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1136_Shoes_9885",
    "en": "Twilight",
    "jp": "トワイライト"
  },
  {
    "label": "1136_Shoes_11771",
    "en": "Midnight",
    "jp": "ミッドナイト"
  },
  {
    "label": "1136_Shoes_11772",
    "en": "Passion",
    "jp": "パッション"
  },
  {
    "label": "1136_Shoes_11773",
    "en": "Ocean",
    "jp": "オーシャン"
  },
  {
    "label": "1136_Shoes_11774",
    "en": "Sunset",
    "jp": "サンセット"
  },
  {
    "label": "1136_Shoes_11775",
    "en": "Love",
    "jp": "ラブ"
  },
  {
    "label": "1145_Shoes_5630",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1184_Shoes_12130",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1191_Shoes_12326",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1211_Shoes_12455",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1212_Shoes_12456",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1213_Shoes_12457",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1214_Shoes_12458",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1215_Shoes_12459",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1216_Shoes_12460",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1217_Shoes_12495",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1218_Shoes_12496",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1223_Shoes_12660",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1223_Shoes_13087",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1228_Shoes_12665",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1269_Shoes_13016",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1269_Shoes_13413",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1269_Shoes_13414",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1269_Shoes_13415",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1269_Shoes_13416",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1269_Shoes_13417",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1270_Shoes_13017",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1270_Shoes_13428",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1270_Shoes_13429",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1270_Shoes_13430",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1270_Shoes_13431",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1270_Shoes_13432",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1281_Shoes_13167",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1283_Shoes_13169",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1287_Shoes_13174",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1290_Shoes_13177",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1292_Shoes_13179",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1297_Shoes_13184",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1327_Shoes_13562",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1328_Shoes_13561",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1331_Shoes_13602",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1353_Shoes_14237",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1355_Shoes_14243",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1363_Shoes_14263",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1363_Shoes_14381",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "1363_Shoes_14382",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1363_Shoes_14383",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "1363_Shoes_14384",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1363_Shoes_14385",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "1363_Shoes_14386",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1363_Shoes_14387",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "236_Shoes_3704",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "236_Shoes_10962",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "236_Shoes_10963",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "236_Shoes_10964",
    "en": "Dark blue",
    "jp": "こん"
  },
  {
    "label": "236_Shoes_10965",
    "en": "Gray",
    "jp": "はいいろ"
  },
  {
    "label": "236_Shoes_10966",
    "en": "Purple",
    "jp": "むらさき"
  },
  {
    "label": "236_Shoes_10967",
    "en": "Yellow",
    "jp": "きいろ"
  },
  {
    "label": "236_Shoes_10968",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "515_Shoes_4714",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "515_Shoes_10696",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "515_Shoes_10697",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "515_Shoes_10698",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "515_Shoes_10699",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "517_Shoes_4716",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "517_Shoes_10046",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "517_Shoes_10047",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "517_Shoes_10048",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "517_Shoes_10049",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "517_Shoes_10050",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "517_Shoes_10051",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "517_Shoes_10052",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "520_Shoes_4721",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "520_Shoes_11547",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "520_Shoes_11548",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "520_Shoes_11549",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "520_Shoes_11550",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "521_Shoes_4723",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "521_Shoes_10116",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "521_Shoes_10117",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "521_Shoes_10118",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "521_Shoes_10119",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "521_Shoes_10120",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "522_Shoes_4724",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "522_Shoes_11449",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "522_Shoes_11450",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "522_Shoes_11451",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "522_Shoes_11452",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "522_Shoes_11453",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "522_Shoes_11454",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "523_Shoes_4725",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "523_Shoes_10121",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "523_Shoes_10122",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "523_Shoes_10123",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "523_Shoes_10124",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "523_Shoes_10125",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "526_Shoes_4730",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "526_Shoes_11455",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "528_Shoes_4732",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "528_Shoes_11675",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "528_Shoes_11676",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "528_Shoes_11677",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "528_Shoes_11678",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "529_Shoes_4733",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "529_Shoes_11551",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "529_Shoes_11552",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "529_Shoes_11553",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "529_Shoes_11554",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "529_Shoes_11555",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "529_Shoes_11556",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "529_Shoes_11557",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "530_Shoes_4734",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "530_Shoes_10969",
    "en": "Gold",
    "jp": "きんいろ"
  },
  {
    "label": "530_Shoes_10970",
    "en": "Pink",
    "jp": "ももいろ"
  },
  {
    "label": "530_Shoes_10971",
    "en": "Light pink",
    "jp": "さくらいろ"
  },
  {
    "label": "530_Shoes_10972",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "530_Shoes_10973",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "530_Shoes_10974",
    "en": "Aqua",
    "jp": "みずいろ"
  },
  {
    "label": "530_Shoes_10975",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "705_Shoes_5388",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "705_Shoes_11237",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "705_Shoes_11238",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "705_Shoes_11239",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "705_Shoes_11240",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "705_Shoes_11241",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "705_Shoes_11242",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "705_Shoes_11243",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "760_Shoes_5469",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "760_Shoes_10976",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "760_Shoes_10977",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "760_Shoes_10978",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "760_Shoes_10979",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "761_Shoes_5470",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "761_Shoes_6922",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "761_Shoes_10169",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "761_Shoes_10735",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "761_Shoes_10736",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "761_Shoes_10737",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "761_Shoes_10738",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "761_Shoes_10739",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "762_Shoes_5471",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "762_Shoes_10162",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "762_Shoes_10163",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "762_Shoes_10164",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "762_Shoes_10165",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "762_Shoes_10166",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "762_Shoes_10167",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "762_Shoes_10168",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "763_Shoes_5472",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "764_Shoes_5473",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "764_Shoes_10980",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "764_Shoes_10981",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "764_Shoes_10982",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "764_Shoes_10983",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "765_Shoes_5474",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "765_Shoes_11679",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "765_Shoes_11680",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "765_Shoes_11681",
    "en": "Mustard",
    "jp": "マスタード"
  },
  {
    "label": "766_Shoes_5475",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "766_Shoes_10126",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "766_Shoes_10127",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "766_Shoes_10128",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "766_Shoes_10129",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "766_Shoes_10130",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "766_Shoes_10131",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "767_Shoes_5476",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "767_Shoes_11682",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "767_Shoes_11683",
    "en": "Ruby red",
    "jp": "ルージュ"
  },
  {
    "label": "767_Shoes_11684",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "768_Shoes_5477",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "768_Shoes_10132",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "768_Shoes_10133",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "768_Shoes_10134",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "768_Shoes_10135",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "768_Shoes_10136",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "769_Shoes_5478",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "769_Shoes_10137",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "769_Shoes_10138",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "769_Shoes_10139",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "769_Shoes_10140",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "769_Shoes_10141",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "772_Shoes_5479",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "772_Shoes_11685",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "772_Shoes_11686",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "772_Shoes_11687",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "772_Shoes_11688",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "776_Shoes_5523",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "776_Shoes_11689",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "776_Shoes_11690",
    "en": "Greige",
    "jp": "グレージュ"
  },
  {
    "label": "777_Shoes_5524",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "778_Shoes_5525",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "778_Shoes_10084",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "778_Shoes_10085",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "778_Shoes_10086",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "778_Shoes_10087",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "778_Shoes_10088",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "778_Shoes_10089",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "778_Shoes_10090",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "779_Shoes_5541",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "779_Shoes_11244",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "779_Shoes_11245",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "779_Shoes_11246",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "779_Shoes_11247",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "779_Shoes_11248",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "779_Shoes_11249",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "779_Shoes_11250",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "780_Shoes_5542",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "780_Shoes_11456",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "780_Shoes_11457",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "780_Shoes_11458",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "780_Shoes_11459",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "780_Shoes_11460",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "780_Shoes_11461",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "782_Shoes_5545",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "782_Shoes_6860",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "782_Shoes_6867",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "782_Shoes_11691",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "782_Shoes_11692",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "782_Shoes_11693",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "782_Shoes_11694",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "783_Shoes_5546",
    "en": "Red",
    "jp": "あか"
  },
  {
    "label": "783_Shoes_11567",
    "en": "Black",
    "jp": "くろ"
  },
  {
    "label": "783_Shoes_11568",
    "en": "Blue",
    "jp": "あお"
  },
  {
    "label": "783_Shoes_11569",
    "en": "White",
    "jp": "しろ"
  },
  {
    "label": "783_Shoes_11570",
    "en": "Golden yellow",
    "jp": "やまぶきいろ"
  },
  {
    "label": "784_Shoes_5561",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "784_Shoes_10142",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "784_Shoes_10143",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "784_Shoes_10144",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "784_Shoes_10145",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "784_Shoes_10146",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "784_Shoes_10147",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "784_Shoes_10148",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "785_Shoes_5564",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "785_Shoes_10091",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "785_Shoes_10092",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "785_Shoes_10093",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "785_Shoes_10094",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "785_Shoes_10095",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "785_Shoes_10096",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "785_Shoes_10097",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "786_Shoes_5565",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "786_Shoes_10098",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "786_Shoes_10099",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "786_Shoes_10100",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "786_Shoes_10101",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "786_Shoes_10102",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "786_Shoes_10103",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "786_Shoes_10104",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "787_Shoes_5566",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "787_Shoes_6884",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "787_Shoes_6885",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "787_Shoes_6889",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "787_Shoes_6890",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "787_Shoes_10081",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "787_Shoes_10082",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "787_Shoes_10083",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "789_Shoes_5606",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "789_Shoes_10149",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "789_Shoes_10150",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "789_Shoes_10151",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "789_Shoes_10152",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "789_Shoes_10153",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "789_Shoes_10154",
    "en": "Light purple",
    "jp": "ライトパープル"
  },
  {
    "label": "791_Shoes_5608",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "791_Shoes_10155",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "791_Shoes_10156",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "791_Shoes_10157",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "791_Shoes_10158",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "791_Shoes_10159",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "791_Shoes_10160",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "791_Shoes_10161",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "792_Shoes_5609",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "794_Shoes_5617",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "794_Shoes_10053",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "794_Shoes_10054",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "794_Shoes_10055",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "794_Shoes_10056",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "794_Shoes_10057",
    "en": "Coral",
    "jp": "コーラル"
  },
  {
    "label": "794_Shoes_10058",
    "en": "Ivory",
    "jp": "アイボリー"
  },
  {
    "label": "794_Shoes_10059",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "795_Shoes_5618",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "795_Shoes_10984",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "795_Shoes_10985",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "795_Shoes_10986",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "795_Shoes_10987",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "796_Shoes_5619",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "796_Shoes_10700",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "796_Shoes_10701",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "796_Shoes_10702",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "796_Shoes_10703",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "796_Shoes_10704",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "796_Shoes_10705",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "796_Shoes_10706",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "797_Shoes_5620",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "797_Shoes_11251",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "797_Shoes_11252",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "799_Shoes_5624",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "800_Shoes_5638",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "800_Shoes_10060",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "800_Shoes_10061",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "800_Shoes_10062",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "800_Shoes_10063",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "800_Shoes_10064",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "800_Shoes_10065",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "800_Shoes_10066",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "801_Shoes_5639",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "801_Shoes_11558",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "801_Shoes_11559",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "801_Shoes_11560",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "802_Shoes_5640",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "802_Shoes_10707",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "802_Shoes_10708",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "802_Shoes_10709",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "802_Shoes_10710",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "802_Shoes_10711",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "802_Shoes_10712",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "802_Shoes_10713",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "804_Shoes_5643",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "804_Shoes_11253",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "804_Shoes_11254",
    "en": "Ivory",
    "jp": "アイボリー"
  },
  {
    "label": "804_Shoes_11255",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "804_Shoes_11256",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "808_Shoes_5622",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "808_Shoes_10988",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "808_Shoes_10989",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "808_Shoes_10990",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "808_Shoes_10991",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "809_Shoes_5652",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "809_Shoes_10714",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "809_Shoes_10715",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "809_Shoes_10716",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "809_Shoes_10717",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "809_Shoes_10718",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "809_Shoes_10719",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "809_Shoes_10720",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "811_Shoes_5654",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "811_Shoes_10245",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "811_Shoes_10246",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "811_Shoes_10247",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "811_Shoes_10248",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "811_Shoes_10249",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "811_Shoes_10250",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "811_Shoes_10251",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "812_Shoes_5655",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "812_Shoes_11462",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "812_Shoes_11463",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "812_Shoes_11464",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "814_Shoes_5659",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "814_Shoes_10252",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "814_Shoes_10253",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "814_Shoes_10254",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "814_Shoes_10255",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "815_Shoes_5660",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "815_Shoes_10992",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "815_Shoes_10993",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "815_Shoes_10994",
    "en": "Lime",
    "jp": "ライム"
  },
  {
    "label": "815_Shoes_10995",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "815_Shoes_10996",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "820_Shoes_5667",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "820_Shoes_11257",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "820_Shoes_11258",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "820_Shoes_11259",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "821_Shoes_5668",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "821_Shoes_10256",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "821_Shoes_10257",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "821_Shoes_10258",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "821_Shoes_10259",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "821_Shoes_10260",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "839_Shoes_5698",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "839_Shoes_11797",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "839_Shoes_11798",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "839_Shoes_11799",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "863_Shoes_5760",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "864_Shoes_5761",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "864_Shoes_10261",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "864_Shoes_10262",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "864_Shoes_10263",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "864_Shoes_10264",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "864_Shoes_10265",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "868_Shoes_5775",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "868_Shoes_10997",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "868_Shoes_10998",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "876_Shoes_5800",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "876_Shoes_10105",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "876_Shoes_10106",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "876_Shoes_10107",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "876_Shoes_10108",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "878_Shoes_5803",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "878_Shoes_10266",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "878_Shoes_10267",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "878_Shoes_10268",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "878_Shoes_10269",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "878_Shoes_10270",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "881_Shoes_5807",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "881_Shoes_11465",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "881_Shoes_11466",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "881_Shoes_11467",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "881_Shoes_11468",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "881_Shoes_11469",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "881_Shoes_11470",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "882_Shoes_5808",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "882_Shoes_10177",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "882_Shoes_10271",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "882_Shoes_10272",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "882_Shoes_10273",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "882_Shoes_10274",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "882_Shoes_10275",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "882_Shoes_10276",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "883_Shoes_5809",
    "en": "Black & white",
    "jp": "ブラック＆ホワイト"
  },
  {
    "label": "883_Shoes_11471",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "883_Shoes_11472",
    "en": "Greige",
    "jp": "グレージュ"
  },
  {
    "label": "883_Shoes_11473",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "883_Shoes_11474",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "883_Shoes_11475",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "883_Shoes_11476",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "888_Shoes_5814",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "888_Shoes_10721",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "888_Shoes_10722",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "888_Shoes_10723",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "888_Shoes_10724",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "888_Shoes_10725",
    "en": "Berry red",
    "jp": "ワインレッド"
  },
  {
    "label": "888_Shoes_10726",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "888_Shoes_10727",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "894_Shoes_5824",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "894_Shoes_10728",
    "en": "Olive",
    "jp": "オリーブ"
  },
  {
    "label": "894_Shoes_10729",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "894_Shoes_10730",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "894_Shoes_10731",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "894_Shoes_10732",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "894_Shoes_10733",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "894_Shoes_10734",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "924_Shoes_6042",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "924_Shoes_11477",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "924_Shoes_11478",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "925_Shoes_6043",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "925_Shoes_10109",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "925_Shoes_10110",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "925_Shoes_10111",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "925_Shoes_10112",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "925_Shoes_10113",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "925_Shoes_10114",
    "en": "Mint",
    "jp": "ミント"
  },
  {
    "label": "925_Shoes_10115",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "938_Shoes_2572",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "938_Shoes_10039",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "938_Shoes_10040",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "938_Shoes_10041",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "938_Shoes_10042",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "938_Shoes_10043",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "938_Shoes_10044",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "938_Shoes_10045",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "941_Shoes_2593",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "941_Shoes_11232",
    "en": "Beige",
    "jp": "ベージュ"
  },
  {
    "label": "941_Shoes_11233",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "941_Shoes_11234",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "941_Shoes_11235",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "941_Shoes_11236",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "946_Shoes_6892",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "946_Shoes_10067",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "946_Shoes_10068",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "946_Shoes_10069",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "946_Shoes_10070",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "946_Shoes_10071",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "946_Shoes_10072",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "946_Shoes_10073",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "947_Shoes_6894",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "947_Shoes_11561",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "947_Shoes_11562",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "947_Shoes_11563",
    "en": "Red",
    "jp": "レッド"
  }
];

fashionVariants.bags = [
  {
    "label": "1000_Bag_7511",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1001_Bag_7512",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1001_Bag_10184",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1001_Bag_11946",
    "en": "Silver",
    "jp": "シルバー"
  },
  {
    "label": "1150_Bag_9761",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1185_Bag_12131",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1203_Bag_12447",
    "en": "Colorful",
    "jp": "カラフル"
  },
  {
    "label": "1233_Bag_12797",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "1268_Bag_13015",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "1268_Bag_13408",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1268_Bag_13409",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1268_Bag_13410",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1268_Bag_13411",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1268_Bag_13412",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1362_Bag_14262",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1362_Bag_14395",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1362_Bag_14396",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1362_Bag_14397",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1362_Bag_14398",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "1362_Bag_14399",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "1362_Bag_14400",
    "en": "Gold",
    "jp": "ゴールド"
  },
  {
    "label": "957_Bag_6838",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "957_Bag_6839",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "957_Bag_11944",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "957_Bag_11945",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "958_Bag_2550",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "958_Bag_12000",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "958_Bag_12001",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "958_Bag_12002",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "962_Bag_7470",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "962_Bag_11978",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "962_Bag_11979",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "963_Bag_7471",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "963_Bag_11964",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "964_Bag_7476",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "964_Bag_12009",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "965_Bag_7477",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "966_Bag_7478",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "967_Bag_7479",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "968_Bag_7480",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "968_Bag_12003",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "969_Bag_7481",
    "en": "Camel",
    "jp": "キャメル"
  },
  {
    "label": "969_Bag_12010",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "970_Bag_7482",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "970_Bag_12004",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "971_Bag_7483",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "971_Bag_11980",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "971_Bag_11981",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "971_Bag_11982",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "972_Bag_7484",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "972_Bag_12005",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "973_Bag_7485",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "973_Bag_12011",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "974_Bag_7486",
    "en": "Pop",
    "jp": "ポップ"
  },
  {
    "label": "974_Bag_12012",
    "en": "Cool",
    "jp": "クール"
  },
  {
    "label": "975_Bag_7487",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "975_Bag_12013",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "975_Bag_12014",
    "en": "Ivory",
    "jp": "アイボリー"
  },
  {
    "label": "976_Bag_7488",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "977_Bag_7489",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "978_Bag_7490",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "979_Bag_7491",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "980_Bag_7492",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "981_Bag_7493",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "982_Bag_7494",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "983_Bag_7497",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "984_Bag_7302",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "984_Bag_12007",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "984_Bag_12008",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "985_Bag_7304",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "985_Bag_11974",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "985_Bag_11975",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "986_Bag_7305",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "986_Bag_11976",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "986_Bag_11977",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "987_Bag_7498",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "988_Bag_7499",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "988_Bag_11965",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "988_Bag_11966",
    "en": "Brown",
    "jp": "ブラウン"
  },
  {
    "label": "989_Bag_7500",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "989_Bag_11967",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "989_Bag_11968",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "990_Bag_7501",
    "en": "Avocado",
    "jp": "カーキ"
  },
  {
    "label": "990_Bag_11969",
    "en": "Orange",
    "jp": "オレンジ"
  },
  {
    "label": "990_Bag_11970",
    "en": "Navy blue",
    "jp": "ネイビー"
  },
  {
    "label": "991_Bag_7502",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "992_Bag_7503",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "992_Bag_12006",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "993_Bag_7504",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "993_Bag_12015",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "994_Bag_7505",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "994_Bag_11971",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "994_Bag_11972",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "994_Bag_11973",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "995_Bag_7506",
    "en": "Green",
    "jp": "みどり"
  },
  {
    "label": "996_Bag_7507",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "996_Bag_12016",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "996_Bag_12017",
    "en": "Gray",
    "jp": "グレー"
  },
  {
    "label": "996_Bag_12018",
    "en": "Pink",
    "jp": "ピンク"
  },
  {
    "label": "997_Bag_7508",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "997_Bag_12019",
    "en": "Black",
    "jp": "ブラック"
  },
  {
    "label": "998_Bag_7509",
    "en": "White",
    "jp": "ホワイト"
  },
  {
    "label": "999_Bag_7510",
    "en": "M",
    "jp": "M"
  },
  {
    "label": "999_Bag_12148",
    "en": "Flowers",
    "jp": "フラワー"
  },
  {
    "label": "999_Bag_12149",
    "en": "Polka dots",
    "jp": "ドット"
  },
  {
    "label": "999_Bag_12150",
    "en": "Colorful quilt design",
    "jp": "カラフルキルト"
  },
  {
    "label": "999_Bag_12151",
    "en": "Cherries",
    "jp": "チェリー"
  },
  {
    "label": "999_Bag_12152",
    "en": "Denim with stripes",
    "jp": "デニムストライプ"
  },
  {
    "label": "999_Bag_12153",
    "en": "Forest print",
    "jp": "フォレスト"
  },
  {
    "label": "999_Bag_12154",
    "en": "Chick",
    "jp": "ヒヨコ"
  }
];

fashionVariants.swimwear = [
  {
    "label": "1258_MarineSuit_12970",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1259_MarineSuit_12981",
    "en": "Light blue",
    "jp": "ライトブルー"
  },
  {
    "label": "1259_MarineSuit_13098",
    "en": "Purple",
    "jp": "パープル"
  },
  {
    "label": "1259_MarineSuit_13099",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1259_MarineSuit_13100",
    "en": "Green",
    "jp": "グリーン"
  },
  {
    "label": "1260_MarineSuit_12986",
    "en": "Red",
    "jp": "レッド"
  },
  {
    "label": "1260_MarineSuit_13101",
    "en": "Blue",
    "jp": "ブルー"
  },
  {
    "label": "1260_MarineSuit_13102",
    "en": "Yellow",
    "jp": "イエロー"
  },
  {
    "label": "1260_MarineSuit_13103",
    "en": "Black",
    "jp": "ブラック"
  }
];

let npcNames = [
  {
    "label": "alp",
    "en": "Cyrus",
    "jp": "カイゾー"
  },
  {
    "label": "alw",
    "en": "Reese",
    "jp": "リサ"
  },
  {
    "label": "bev",
    "en": "Chip",
    "jp": "うおまさ"
  },
  {
    "label": "bey",
    "en": "C.J.",
    "jp": "ジャスティン"
  },
  {
    "label": "boa",
    "en": "Joan",
    "jp": "カブリバ"
  },
  {
    "label": "boc",
    "en": "Daisy Mae",
    "jp": "ウリ"
  },
  {
    "label": "bpt",
    "en": "Katrina",
    "jp": "ハッケミィ"
  },
  {
    "label": "chm",
    "en": "Nat",
    "jp": "カメヤマさん"
  },
  {
    "label": "chy",
    "en": "Flick",
    "jp": "レックス"
  },
  {
    "label": "cml",
    "en": "Saharah",
    "jp": "ローラン"
  },
  {
    "label": "dga",
    "en": "Copper",
    "jp": "おまわりさん"
  },
  {
    "label": "dgb",
    "en": "Booker",
    "jp": "おまわりさん"
  },
  {
    "label": "doc",
    "en": "Wilbur",
    "jp": "ロドリー"
  },
  {
    "label": "dod",
    "en": "Orville",
    "jp": "モーリー"
  },
  {
    "label": "fox",
    "en": "Redd",
    "jp": "つねきち"
  },
  {
    "label": "fsl",
    "en": "Phineas",
    "jp": "パロンチーノ"
  },
  {
    "label": "grf",
    "en": "Gracie",
    "jp": "グレース"
  },
  {
    "label": "gstA",
    "en": "Wisp",
    "jp": "ゆうたろう"
  },
  {
    "label": "gstB",
    "en": "Wisp",
    "jp": "ゆうたろう"
  },
  {
    "label": "gul",
    "en": "Gulliver",
    "jp": "ジョニー"
  },
  {
    "label": "gulB",
    "en": "Gullivarrr",
    "jp": "かいぞく"
  },
  {
    "label": "hgc",
    "en": "Label",
    "jp": "ことの"
  },
  {
    "label": "hgh",
    "en": "Mabel",
    "jp": "きぬよ"
  },
  {
    "label": "hgs",
    "en": "Sable",
    "jp": "あさみ"
  },
  {
    "label": "kpg",
    "en": "Grams",
    "jp": "ゲコ"
  },
  {
    "label": "kpm",
    "en": "Leilani",
    "jp": "クーコ"
  },
  {
    "label": "kpp",
    "en": "Kapp'n",
    "jp": "かっぺい"
  },
  {
    "label": "kps",
    "en": "Leila",
    "jp": "クク"
  },
  {
    "label": "lom",
    "en": "Katie",
    "jp": "まいこちゃん"
  },
  {
    "label": "mka",
    "en": "Blanca",
    "jp": "あやしいネコ"
  },
  {
    "label": "mnk",
    "en": "Porter",
    "jp": "えきいんさん"
  },
  {
    "label": "mob",
    "en": "Don",
    "jp": "ラケットさん"
  },
  {
    "label": "mol",
    "en": "Resetti",
    "jp": "リセットさん"
  },
  {
    "label": "otg",
    "en": "Lottie",
    "jp": "タクミ"
  },
  {
    "label": "ott",
    "en": "Lyle",
    "jp": "ホンマさん"
  },
  {
    "label": "owl",
    "en": "Blathers",
    "jp": "フータ"
  },
  {
    "label": "ows",
    "en": "Celeste",
    "jp": "フーコ"
  },
  {
    "label": "pck",
    "en": "Pavé",
    "jp": "ベルリーナ"
  },
  {
    "label": "pge",
    "en": "Brewster",
    "jp": "マスター"
  },
  {
    "label": "pkn",
    "en": "Jack",
    "jp": "パンプキング"
  },
  {
    "label": "plk",
    "en": "Pelly",
    "jp": "ぺりこ"
  },
  {
    "label": "plm",
    "en": "Phyllis",
    "jp": "ぺりみ"
  },
  {
    "label": "plo",
    "en": "Pete",
    "jp": "ぺりお"
  },
  {
    "label": "poo",
    "en": "Harriet",
    "jp": "カットリーヌ"
  },
  {
    "label": "pyn",
    "en": "Zipper",
    "jp": "ぴょんたろう"
  },
  {
    "label": "rcm",
    "en": "Timmy",
    "jp": "まめきち"
  },
  {
    "label": "rco",
    "en": "Tom Nook",
    "jp": "たぬきち"
  },
  {
    "label": "rct",
    "en": "Tommy",
    "jp": "つぶきち"
  },
  {
    "label": "rei",
    "en": "Jingle",
    "jp": "ジングル"
  },
  {
    "label": "seo",
    "en": "Pascal",
    "jp": "ラコスケ"
  },
  {
    "label": "skk",
    "en": "Kicks",
    "jp": "シャンク"
  },
  {
    "label": "slo",
    "en": "Leif",
    "jp": "レイジ"
  },
  {
    "label": "spn",
    "en": "Harvey",
    "jp": "パニエル"
  },
  {
    "label": "sza",
    "en": "Isabelle",
    "jp": "しずえ"
  },
  {
    "label": "szo",
    "en": "Digby",
    "jp": "ケント"
  },
  {
    "label": "tap",
    "en": "Luna",
    "jp": "ゆめみ"
  },
  {
    "label": "tkkA",
    "en": "K.K.",
    "jp": "とたけけ"
  },
  {
    "label": "tkkB",
    "en": "DJ KK",
    "jp": "DJ K.K"
  },
  {
    "label": "ttlA",
    "en": "Tortimer",
    "jp": "コトブキ"
  },
  {
    "label": "tuk",
    "en": "Franklin",
    "jp": "フランクリン"
  },
  {
    "label": "upa",
    "en": "Shrunk",
    "jp": "ししょー"
  },
  {
    "label": "wrl",
    "en": "Wendell",
    "jp": "セイイチ"
  },
  {
    "label": "xct",
    "en": "Rover",
    "jp": "みしらぬネコ"
  }
];

let itemNames = {
  fishModels: [],
  insectModels: [],
  housewares: [],
  wallpaper: [],
  floors: [],
  rugs: [],
  photos: [],
  posters: [],
  tools: [],
  fencing: [],
  music: [],
  fossils: [],
  art: [],
  materials: [],
  recipes: [],
  etc: []
};

itemNames.housewears = [
  {
    "label": "Ftr_00080",
    "en": "clackercart",
    "jp": "ておしぐるま"
  },
  {
    "label": "Ftr_00083",
    "en": "rocking horse",
    "jp": "もくば"
  },
  {
    "label": "Ftr_00085",
    "en": "train set",
    "jp": "てつどうもけい"
  },
  {
    "label": "Ftr_00086",
    "en": "elephant slide",
    "jp": "ゾウのすべりだい"
  },
  {
    "label": "Ftr_00088",
    "en": "ringtoss",
    "jp": "わなげ"
  },
  {
    "label": "Ftr_00109",
    "en": "moss ball",
    "jp": "こけだま"
  },
  {
    "label": "Ftr_00131",
    "en": "lucky cat",
    "jp": "まねきねこ"
  },
  {
    "label": "Ftr_00132",
    "en": "succulent plant",
    "jp": "たにくしょくぶつ"
  },
  {
    "label": "Ftr_00144",
    "en": "manhole cover",
    "jp": "マンホール"
  },
  {
    "label": "Ftr_00146",
    "en": "cone",
    "jp": "パイロン"
  },
  {
    "label": "Ftr_00287",
    "en": "exercise bike",
    "jp": "エクササイズバイク"
  },
  {
    "label": "Ftr_00290",
    "en": "treadmill",
    "jp": "ランニングマシン"
  },
  {
    "label": "Ftr_00330",
    "en": "barbecue",
    "jp": "バーベキューグリル"
  },
  {
    "label": "Ftr_00331",
    "en": "birdbath",
    "jp": "バードバス"
  },
  {
    "label": "Ftr_00333",
    "en": "birdhouse",
    "jp": "すばこ"
  },
  {
    "label": "Ftr_00335",
    "en": "Mr. Flamingo",
    "jp": "おすのフラミンゴ"
  },
  {
    "label": "Ftr_00336",
    "en": "Mrs. Flamingo",
    "jp": "めすのフラミンゴ"
  },
  {
    "label": "Ftr_00338",
    "en": "lawn mower",
    "jp": "しばかりき"
  },
  {
    "label": "Ftr_00343",
    "en": "tiki torch",
    "jp": "たいまつ"
  },
  {
    "label": "Ftr_00383",
    "en": "acoustic guitar",
    "jp": "アコースティックギター"
  },
  {
    "label": "Ftr_00530",
    "en": "grass standee",
    "jp": "ハリボテのくさ"
  },
  {
    "label": "Ftr_00531",
    "en": "hedge standee",
    "jp": "ハリボテのいけがき"
  },
  {
    "label": "Ftr_00532",
    "en": "mountain standee",
    "jp": "ハリボテのやま"
  },
  {
    "label": "Ftr_00533",
    "en": "tree standee",
    "jp": "ハリボテのき"
  },
  {
    "label": "Ftr_00546",
    "en": "stadiometer",
    "jp": "しんちょうけい"
  },
  {
    "label": "Ftr_00664",
    "en": "beach chair",
    "jp": "ビーチベッド"
  },
  {
    "label": "Ftr_00665",
    "en": "wave breaker",
    "jp": "しょうはブロック"
  },
  {
    "label": "Ftr_00667",
    "en": "shaved-ice maker",
    "jp": "かきごおりき"
  },
  {
    "label": "Ftr_00669",
    "en": "ukulele",
    "jp": "ウクレレ"
  },
  {
    "label": "Ftr_00676",
    "en": "tall lantern",
    "jp": "とうろう"
  },
  {
    "label": "Ftr_00677",
    "en": "deer scare",
    "jp": "ししおどし"
  },
  {
    "label": "Ftr_00682",
    "en": "boomerang",
    "jp": "ブーメラン"
  },
  {
    "label": "Ftr_00683",
    "en": "bottled ship",
    "jp": "ボトルシップ"
  },
  {
    "label": "Ftr_00685",
    "en": "Dala horse",
    "jp": "ダーラヘスト"
  },
  {
    "label": "Ftr_00688",
    "en": "pagoda",
    "jp": "ごじゅうのとう"
  },
  {
    "label": "Ftr_00689",
    "en": "paper tiger",
    "jp": "はりこのとら"
  },
  {
    "label": "Ftr_00690",
    "en": "hula doll",
    "jp": "フラダンスにんぎょう"
  },
  {
    "label": "Ftr_00693",
    "en": "Statue of Liberty",
    "jp": "じゆうのめがみ"
  },
  {
    "label": "Ftr_00698",
    "en": "moai statue",
    "jp": "モアイ"
  },
  {
    "label": "Ftr_00700",
    "en": "Tower of Pisa",
    "jp": "ピサのしゃとう"
  },
  {
    "label": "Ftr_00704",
    "en": "tapestry",
    "jp": "タペストリー"
  },
  {
    "label": "Ftr_00710",
    "en": "bamboo bench",
    "jp": "たけのベンチ"
  },
  {
    "label": "Ftr_00716",
    "en": "screen",
    "jp": "びょうぶ"
  },
  {
    "label": "Ftr_00717",
    "en": "clay furnace",
    "jp": "かまどのキッチン"
  },
  {
    "label": "Ftr_00722",
    "en": "hearth",
    "jp": "いろり"
  },
  {
    "label": "Ftr_00724",
    "en": "kettle",
    "jp": "やかん"
  },
  {
    "label": "Ftr_00725",
    "en": "paper lantern",
    "jp": "あんどん"
  },
  {
    "label": "Ftr_00729",
    "en": "garden rock",
    "jp": "よくあるにわいし"
  },
  {
    "label": "Ftr_00730",
    "en": "tall garden rock",
    "jp": "たかいにわいし"
  },
  {
    "label": "Ftr_00739",
    "en": "tea table",
    "jp": "ちゃぶだい"
  },
  {
    "label": "Ftr_00742",
    "en": "fireplace",
    "jp": "だんろ"
  },
  {
    "label": "Ftr_00787",
    "en": "tape deck",
    "jp": "ラジカセ"
  },
  {
    "label": "Ftr_00790",
    "en": "hi-fi stereo",
    "jp": "こうきゅうコンポ"
  },
  {
    "label": "Ftr_00791",
    "en": "jukebox",
    "jp": "ジュークボックス"
  },
  {
    "label": "Ftr_00793",
    "en": "high-end stereo",
    "jp": "マルチコンポ"
  },
  {
    "label": "Ftr_00794",
    "en": "phonograph",
    "jp": "ちくおんき"
  },
  {
    "label": "Ftr_00796",
    "en": "retro stereo",
    "jp": "レトロなステレオ"
  },
  {
    "label": "Ftr_00805",
    "en": "mush lamp",
    "jp": "キノコのランプ"
  },
  {
    "label": "Ftr_00808",
    "en": "mush table",
    "jp": "キノコのテーブル"
  },
  {
    "label": "Ftr_00832",
    "en": "modern office chair",
    "jp": "オフィスのチェア"
  },
  {
    "label": "Ftr_00833",
    "en": "upright locker",
    "jp": "ロッカー"
  },
  {
    "label": "Ftr_00839",
    "en": "safe",
    "jp": "きんこ"
  },
  {
    "label": "Ftr_00840",
    "en": "office desk",
    "jp": "オフィスのデスク"
  },
  {
    "label": "Ftr_00846",
    "en": "alto saxophone",
    "jp": "アルトサックス"
  },
  {
    "label": "Ftr_00849",
    "en": "amp",
    "jp": "アンプ"
  },
  {
    "label": "Ftr_00863",
    "en": "billiard table",
    "jp": "ビリヤードのだい"
  },
  {
    "label": "Ftr_00864",
    "en": "bingo wheel",
    "jp": "ビンゴマシン"
  },
  {
    "label": "Ftr_00865",
    "en": "birdcage",
    "jp": "とりかご"
  },
  {
    "label": "Ftr_00867",
    "en": "blossom lantern",
    "jp": "ぼんぼり"
  },
  {
    "label": "Ftr_00870",
    "en": "book stands",
    "jp": "ブックスタンド"
  },
  {
    "label": "Ftr_00875",
    "en": "breaker",
    "jp": "ブレーカー"
  },
  {
    "label": "Ftr_00880",
    "en": "wooden bucket",
    "jp": "もくせいのバケツ"
  },
  {
    "label": "Ftr_00889",
    "en": "camp stove",
    "jp": "コッフェル"
  },
  {
    "label": "Ftr_00891",
    "en": "holiday candle",
    "jp": "クリスマスキャンドル"
  },
  {
    "label": "Ftr_00896",
    "en": "cat tower",
    "jp": "キャットタワー"
  },
  {
    "label": "Ftr_00907",
    "en": "vacuum cleaner",
    "jp": "そうじき"
  },
  {
    "label": "Ftr_00908",
    "en": "upright vacuum",
    "jp": "スティックそうじき"
  },
  {
    "label": "Ftr_00915",
    "en": "cuckoo clock",
    "jp": "はとどけい"
  },
  {
    "label": "Ftr_00918",
    "en": "coffee cup",
    "jp": "コーヒーカップ"
  },
  {
    "label": "Ftr_00920",
    "en": "coffee grinder",
    "jp": "コーヒーミル"
  },
  {
    "label": "Ftr_00928",
    "en": "pot rack",
    "jp": "キッチンつるし"
  },
  {
    "label": "Ftr_00929",
    "en": "air conditioner",
    "jp": "エアコン"
  },
  {
    "label": "Ftr_00931",
    "en": "cornucopia",
    "jp": "ほうじょうのつの"
  },
  {
    "label": "Ftr_00937",
    "en": "dartboard",
    "jp": "ダーツボード"
  },
  {
    "label": "Ftr_00941",
    "en": "DJ's turntable",
    "jp": "DJブース"
  },
  {
    "label": "Ftr_00950",
    "en": "effects rack",
    "jp": "エフェクターラック"
  },
  {
    "label": "Ftr_00954",
    "en": "espresso maker",
    "jp": "エスプレッソマシン"
  },
  {
    "label": "Ftr_00955",
    "en": "exit sign",
    "jp": "ひじょうぐち"
  },
  {
    "label": "Ftr_00957",
    "en": "ventilation fan",
    "jp": "かんきせん"
  },
  {
    "label": "Ftr_00971",
    "en": "snack machine",
    "jp": "おかしのじはんき"
  },
  {
    "label": "Ftr_00975",
    "en": "fruit basket",
    "jp": "フルーツバスケット"
  },
  {
    "label": "Ftr_00981",
    "en": "go board",
    "jp": "ごばん"
  },
  {
    "label": "Ftr_00987",
    "en": "harp",
    "jp": "ハープ"
  },
  {
    "label": "Ftr_00988",
    "en": "hinaningyo",
    "jp": "ひなにんぎょう"
  },
  {
    "label": "Ftr_00997",
    "en": "incense burner",
    "jp": "おこう"
  },
  {
    "label": "Ftr_00998",
    "en": "kitchen island",
    "jp": "アイランドキッチン"
  },
  {
    "label": "Ftr_01004",
    "en": "kadomatsu",
    "jp": "かどまつ"
  },
  {
    "label": "Ftr_01005",
    "en": "kagamimochi",
    "jp": "かがみもち"
  },
  {
    "label": "Ftr_01016",
    "en": "carp banner",
    "jp": "こいのぼり"
  },
  {
    "label": "Ftr_01023",
    "en": "pile of leaves",
    "jp": "おちば"
  },
  {
    "label": "Ftr_01029",
    "en": "low screen",
    "jp": "ひくいついたて"
  },
  {
    "label": "Ftr_01032",
    "en": "magazine rack",
    "jp": "マガジンラック"
  },
  {
    "label": "Ftr_01042",
    "en": "metronome",
    "jp": "メトロノーム"
  },
  {
    "label": "Ftr_01043",
    "en": "microwave",
    "jp": "でんしレンジ"
  },
  {
    "label": "Ftr_01045",
    "en": "silver mic",
    "jp": "ガイコツマイク"
  },
  {
    "label": "Ftr_01050",
    "en": "mixer",
    "jp": "ミキサー"
  },
  {
    "label": "Ftr_01054",
    "en": "moon",
    "jp": "つき"
  },
  {
    "label": "Ftr_01058",
    "en": "music stand",
    "jp": "ふめんだい"
  },
  {
    "label": "Ftr_01081",
    "en": "upright piano",
    "jp": "アップライトピアノ"
  },
  {
    "label": "Ftr_01082",
    "en": "picnic basket",
    "jp": "ピクニックバスケット"
  },
  {
    "label": "Ftr_01087",
    "en": "pinball machine",
    "jp": "ピンボールだい"
  },
  {
    "label": "Ftr_01092",
    "en": "popcorn machine",
    "jp": "ポップコーンマシン"
  },
  {
    "label": "Ftr_01103",
    "en": "rocking chair",
    "jp": "ロッキングチェア"
  },
  {
    "label": "Ftr_01111",
    "en": "outdoor bath",
    "jp": "ろてんぶろ"
  },
  {
    "label": "Ftr_01112",
    "en": "colorful wheel",
    "jp": "ルーレット"
  },
  {
    "label": "Ftr_01116",
    "en": "sandbox",
    "jp": "すなば"
  },
  {
    "label": "Ftr_01117",
    "en": "sand castle",
    "jp": "すなのしろ"
  },
  {
    "label": "Ftr_01120",
    "en": "scarecrow",
    "jp": "かかし"
  },
  {
    "label": "Ftr_01124",
    "en": "sea globe",
    "jp": "シーグローブ"
  },
  {
    "label": "Ftr_01125",
    "en": "revolving spice rack",
    "jp": "ちょうみりょういれ"
  },
  {
    "label": "Ftr_01126",
    "en": "server",
    "jp": "サーバー"
  },
  {
    "label": "Ftr_01127",
    "en": "old sewing machine",
    "jp": "ふるいミシン"
  },
  {
    "label": "Ftr_01128",
    "en": "sewing machine",
    "jp": "ミシン"
  },
  {
    "label": "Ftr_01131",
    "en": "outdoor air conditioner",
    "jp": "しつがいき"
  },
  {
    "label": "Ftr_01143",
    "en": "smoker",
    "jp": "くんせいマシン"
  },
  {
    "label": "Ftr_01145",
    "en": "snow globe",
    "jp": "スノーグローブ"
  },
  {
    "label": "Ftr_01149",
    "en": "soccer goal",
    "jp": "サッカーゴール"
  },
  {
    "label": "Ftr_01153",
    "en": "spinning wheel",
    "jp": "いとぐるま"
  },
  {
    "label": "Ftr_01157",
    "en": "brick oven",
    "jp": "いしがま"
  },
  {
    "label": "Ftr_01161",
    "en": "cream and sugar",
    "jp": "シュガー&ミルク"
  },
  {
    "label": "Ftr_01165",
    "en": "surveillance camera",
    "jp": "かんしカメラ"
  },
  {
    "label": "Ftr_01170",
    "en": "swinging bench",
    "jp": "ベンチブランコ"
  },
  {
    "label": "Ftr_01171",
    "en": "synthesizer",
    "jp": "シンセサイザー"
  },
  {
    "label": "Ftr_01177",
    "en": "foosball table",
    "jp": "テーブルサッカー"
  },
  {
    "label": "Ftr_01181",
    "en": "tennis table",
    "jp": "たっきゅうだい"
  },
  {
    "label": "Ftr_01182",
    "en": "bamboo grass",
    "jp": "たなばたのささ"
  },
  {
    "label": "Ftr_01185",
    "en": "phone box",
    "jp": "でんわボックス"
  },
  {
    "label": "Ftr_01186",
    "en": "telescope",
    "jp": "ぼうえんきょう"
  },
  {
    "label": "Ftr_01189",
    "en": "tire stack",
    "jp": "つまれたタイヤ"
  },
  {
    "label": "Ftr_01199",
    "en": "tricycle",
    "jp": "さんりんしゃ"
  },
  {
    "label": "Ftr_01200",
    "en": "gold fish trophy",
    "jp": "きんのサカナトロフィー"
  },
  {
    "label": "Ftr_01201",
    "en": "silver fish trophy",
    "jp": "ぎんのサカナトロフィー"
  },
  {
    "label": "Ftr_01202",
    "en": "bronze fish trophy",
    "jp": "どうのサカナトロフィー"
  },
  {
    "label": "Ftr_01203",
    "en": "gold bug trophy",
    "jp": "きんのムシトロフィー"
  },
  {
    "label": "Ftr_01204",
    "en": "silver bug trophy",
    "jp": "ぎんのムシトロフィー"
  },
  {
    "label": "Ftr_01205",
    "en": "bronze bug trophy",
    "jp": "どうのムシトロフィー"
  },
  {
    "label": "Ftr_01211",
    "en": "typewriter",
    "jp": "タイプライター"
  },
  {
    "label": "Ftr_01217",
    "en": "standing toilet",
    "jp": "しょうべんき"
  },
  {
    "label": "Ftr_01221",
    "en": "video camera",
    "jp": "ビデオカメラ"
  },
  {
    "label": "Ftr_01227",
    "en": "deluxe washer",
    "jp": "ドラムしきせんたくき"
  },
  {
    "label": "Ftr_01229",
    "en": "bathroom sink",
    "jp": "せんめんだい"
  },
  {
    "label": "Ftr_01232",
    "en": "water cooler",
    "jp": "ウォーターサーバー"
  },
  {
    "label": "Ftr_01234",
    "en": "portable toilet",
    "jp": "かせつトイレ"
  },
  {
    "label": "Ftr_01241",
    "en": "DIY workbench",
    "jp": "DIYさぎょうだい"
  },
  {
    "label": "Ftr_01243",
    "en": "flashy-flower sign",
    "jp": "はなわ"
  },
  {
    "label": "Ftr_01263",
    "en": "pear wardrobe",
    "jp": "ナシのクロゼット"
  },
  {
    "label": "Ftr_01266",
    "en": "barrel",
    "jp": "たる"
  },
  {
    "label": "Ftr_01268",
    "en": "pirate-ship cannon",
    "jp": "かいぞくのたいほう"
  },
  {
    "label": "Ftr_01273",
    "en": "pirate-ship helm",
    "jp": "かいぞくのかじ"
  },
  {
    "label": "Ftr_01277",
    "en": "cacao tree",
    "jp": "カカオ"
  },
  {
    "label": "Ftr_01288",
    "en": "fan palm",
    "jp": "ヤマドリヤシ"
  },
  {
    "label": "Ftr_01308",
    "en": "school chair",
    "jp": "がっこうのイス"
  },
  {
    "label": "Ftr_01317",
    "en": "anatomical model",
    "jp": "じんたいもけい"
  },
  {
    "label": "Ftr_01319",
    "en": "microscope",
    "jp": "けんびきょう"
  },
  {
    "label": "Ftr_01326",
    "en": "skeleton",
    "jp": "こっかくひょうほん"
  },
  {
    "label": "Ftr_01328",
    "en": "school desk",
    "jp": "がっこうのつくえ"
  },
  {
    "label": "Ftr_01329",
    "en": "podium",
    "jp": "こうえんだい"
  },
  {
    "label": "Ftr_01330",
    "en": "basic teacher's desk",
    "jp": "きょうたく"
  },
  {
    "label": "Ftr_01348",
    "en": "hamster cage",
    "jp": "ハムスターのかご"
  },
  {
    "label": "Ftr_01411",
    "en": "globe",
    "jp": "ちきゅうぎ"
  },
  {
    "label": "Ftr_01412",
    "en": "TV camera",
    "jp": "テレビカメラ"
  },
  {
    "label": "Ftr_01429",
    "en": "campfire",
    "jp": "たきび"
  },
  {
    "label": "Ftr_01430",
    "en": "bonfire",
    "jp": "キャンプファイア"
  },
  {
    "label": "Ftr_01432",
    "en": "lantern",
    "jp": "ランタン"
  },
  {
    "label": "Ftr_01433",
    "en": "campfire cookware",
    "jp": "はんごう"
  },
  {
    "label": "Ftr_01434",
    "en": "sleeping bag",
    "jp": "シュラフ"
  },
  {
    "label": "Ftr_01439",
    "en": "asteroid",
    "jp": "いんせき"
  },
  {
    "label": "Ftr_01440",
    "en": "lunar lander",
    "jp": "ちゃくりくせん"
  },
  {
    "label": "Ftr_01441",
    "en": "rocket",
    "jp": "ロケット"
  },
  {
    "label": "Ftr_01442",
    "en": "lunar rover",
    "jp": "げつめんいどうしゃ"
  },
  {
    "label": "Ftr_01443",
    "en": "satellite",
    "jp": "じんこうえいせい"
  },
  {
    "label": "Ftr_01444",
    "en": "space shuttle",
    "jp": "スペースシャトル"
  },
  {
    "label": "Ftr_01445",
    "en": "astronaut suit",
    "jp": "アストロノーツ"
  },
  {
    "label": "Ftr_01447",
    "en": "flying saucer",
    "jp": "そらとぶえんばん"
  },
  {
    "label": "Ftr_01449",
    "en": "cello",
    "jp": "チェロ"
  },
  {
    "label": "Ftr_01452",
    "en": "weight bench",
    "jp": "プレスベンチ"
  },
  {
    "label": "Ftr_01456",
    "en": "judge's bell",
    "jp": "ゴング"
  },
  {
    "label": "Ftr_01495",
    "en": "dolly",
    "jp": "おにんぎょう"
  },
  {
    "label": "Ftr_01499",
    "en": "Papa bear",
    "jp": "くまのダイちゃん"
  },
  {
    "label": "Ftr_01500",
    "en": "Mama bear",
    "jp": "くまのナミちゃん"
  },
  {
    "label": "Ftr_01501",
    "en": "Baby bear",
    "jp": "くまのチビちゃん"
  },
  {
    "label": "Ftr_01504",
    "en": "giant teddy bear",
    "jp": "くまのトクダイちゃん"
  },
  {
    "label": "Ftr_01507",
    "en": "teacup ride",
    "jp": "まわるコーヒーカップ"
  },
  {
    "label": "Ftr_01509",
    "en": "robot hero",
    "jp": "ヒーローロボ"
  },
  {
    "label": "Ftr_01557",
    "en": "wooden-block bed",
    "jp": "つみきベッド"
  },
  {
    "label": "Ftr_01558",
    "en": "wooden-block bookshelf",
    "jp": "つみきブックシェルフ"
  },
  {
    "label": "Ftr_01559",
    "en": "wooden-block bench",
    "jp": "つみきベンチ"
  },
  {
    "label": "Ftr_01561",
    "en": "wooden-block chest",
    "jp": "つみきチェスト"
  },
  {
    "label": "Ftr_01565",
    "en": "wooden-block table",
    "jp": "つみきテーブル"
  },
  {
    "label": "Ftr_01567",
    "en": "oil barrel",
    "jp": "ドラムかん"
  },
  {
    "label": "Ftr_01598",
    "en": "exercise ball",
    "jp": "バランスボール"
  },
  {
    "label": "Ftr_01606",
    "en": "serving cart",
    "jp": "サービングカート"
  },
  {
    "label": "Ftr_01620",
    "en": "hammock",
    "jp": "ハンモック"
  },
  {
    "label": "Ftr_01621",
    "en": "lawn chair",
    "jp": "ビニールチェア"
  },
  {
    "label": "Ftr_01624",
    "en": "garden gnome",
    "jp": "ノームのおきもの"
  },
  {
    "label": "Ftr_01625",
    "en": "iron garden bench",
    "jp": "アイアンガーデンベンチ"
  },
  {
    "label": "Ftr_01626",
    "en": "iron garden chair",
    "jp": "アイアンガーデンチェア"
  },
  {
    "label": "Ftr_01627",
    "en": "iron garden table",
    "jp": "アイアンガーデンテーブル"
  },
  {
    "label": "Ftr_01628",
    "en": "garden lantern",
    "jp": "ガーデンライト"
  },
  {
    "label": "Ftr_01631",
    "en": "garden faucet",
    "jp": "ウォータービュー"
  },
  {
    "label": "Ftr_01632",
    "en": "golf bag",
    "jp": "ゴルフバッグ"
  },
  {
    "label": "Ftr_01644",
    "en": "rock guitar",
    "jp": "エレキギターES1"
  },
  {
    "label": "Ftr_01645",
    "en": "electric guitar",
    "jp": "エレキギターES2"
  },
  {
    "label": "Ftr_01652",
    "en": "matryoshka",
    "jp": "マトリョーシカ"
  },
  {
    "label": "Ftr_01708",
    "en": "cassette player",
    "jp": "ダブルラジカセ"
  },
  {
    "label": "Ftr_01744",
    "en": "wall clock",
    "jp": "ウォールクロック"
  },
  {
    "label": "Ftr_01750",
    "en": "document stack",
    "jp": "しょるいのやま"
  },
  {
    "label": "Ftr_01753",
    "en": "aroma pot",
    "jp": "アロマポット"
  },
  {
    "label": "Ftr_01757",
    "en": "claw-foot tub",
    "jp": "ねこあしバスタブ"
  },
  {
    "label": "Ftr_01759",
    "en": "stack of books",
    "jp": "つまれたほん"
  },
  {
    "label": "Ftr_01778",
    "en": "clothesline pole",
    "jp": "ものほしざお"
  },
  {
    "label": "Ftr_01779",
    "en": "table with cloth",
    "jp": "クロスつきテーブル"
  },
  {
    "label": "Ftr_01783",
    "en": "corkboard",
    "jp": "コルクボード"
  },
  {
    "label": "Ftr_01792",
    "en": "cushion",
    "jp": "クッション"
  },
  {
    "label": "Ftr_01797",
    "en": "decoy duck",
    "jp": "デコイ"
  },
  {
    "label": "Ftr_01798",
    "en": "dinnerware",
    "jp": "しょっき"
  },
  {
    "label": "Ftr_01799",
    "en": "doghouse",
    "jp": "いぬごや"
  },
  {
    "label": "Ftr_01802",
    "en": "drink machine",
    "jp": "じはんき"
  },
  {
    "label": "Ftr_01803",
    "en": "drum set",
    "jp": "ドラムセット"
  },
  {
    "label": "Ftr_01804",
    "en": "electric bass",
    "jp": "エレキベース"
  },
  {
    "label": "Ftr_01816",
    "en": "changing room",
    "jp": "しちゃくしつ"
  },
  {
    "label": "Ftr_01823",
    "en": "trash bags",
    "jp": "ゴミぶくろ"
  },
  {
    "label": "Ftr_01829",
    "en": "cypress plant",
    "jp": "ゴールドクレスト"
  },
  {
    "label": "Ftr_01836",
    "en": "humidifier",
    "jp": "かしつき"
  },
  {
    "label": "Ftr_01838",
    "en": "ironing set",
    "jp": "アイロン"
  },
  {
    "label": "Ftr_01840",
    "en": "whirlpool bath",
    "jp": "ジャグジー"
  },
  {
    "label": "Ftr_01845",
    "en": "simple kettle",
    "jp": "ケトル"
  },
  {
    "label": "Ftr_01849",
    "en": "kotatsu",
    "jp": "こたつ"
  },
  {
    "label": "Ftr_01850",
    "en": "laptop",
    "jp": "ノートパソコン"
  },
  {
    "label": "Ftr_01851",
    "en": "rocket lamp",
    "jp": "スライムランプ"
  },
  {
    "label": "Ftr_01852",
    "en": "box sofa",
    "jp": "ボックスソファ"
  },
  {
    "label": "Ftr_01853",
    "en": "box corner sofa",
    "jp": "ボックスソファのコーナー"
  },
  {
    "label": "Ftr_01861",
    "en": "stacked magazines",
    "jp": "ざっしのたば"
  },
  {
    "label": "Ftr_01866",
    "en": "menu chalkboard",
    "jp": "メニューこくばん"
  },
  {
    "label": "Ftr_01868",
    "en": "desk mirror",
    "jp": "おきかがみ"
  },
  {
    "label": "Ftr_01870",
    "en": "mug",
    "jp": "マグカップ"
  },
  {
    "label": "Ftr_01875",
    "en": "grand piano",
    "jp": "グランドピアノ"
  },
  {
    "label": "Ftr_01881",
    "en": "plastic canister",
    "jp": "ポリタンク"
  },
  {
    "label": "Ftr_01888",
    "en": "rice cooker",
    "jp": "すいはんき"
  },
  {
    "label": "Ftr_01889",
    "en": "ring",
    "jp": "ゆびわ"
  },
  {
    "label": "Ftr_01892",
    "en": "hourglass",
    "jp": "すなどけい"
  },
  {
    "label": "Ftr_01899",
    "en": "autograph cards",
    "jp": "しきし"
  },
  {
    "label": "Ftr_01913",
    "en": "wooden chair",
    "jp": "もくせいチェア"
  },
  {
    "label": "Ftr_01929",
    "en": "toilet",
    "jp": "ようしきトイレ"
  },
  {
    "label": "Ftr_02010",
    "en": "ball",
    "jp": "ボール"
  },
  {
    "label": "Ftr_02012",
    "en": "chalkboard",
    "jp": "こくばん"
  },
  {
    "label": "Ftr_02013",
    "en": "lecture-hall bench",
    "jp": "こうぎしつのイス"
  },
  {
    "label": "Ftr_02014",
    "en": "lecture-hall desk",
    "jp": "こうぎしつのつくえ"
  },
  {
    "label": "Ftr_02020",
    "en": "director's chair",
    "jp": "ディレクターズチェア"
  },
  {
    "label": "Ftr_02319",
    "en": "drinking fountain",
    "jp": "みずのみば"
  },
  {
    "label": "Ftr_02326",
    "en": "water pump",
    "jp": "ておしポンプ"
  },
  {
    "label": "Ftr_02329",
    "en": "tire toy",
    "jp": "タイヤのゆうぐ"
  },
  {
    "label": "Ftr_02333",
    "en": "solar panel",
    "jp": "ソーラーパネル"
  },
  {
    "label": "Ftr_02335",
    "en": "lighthouse",
    "jp": "とうだい"
  },
  {
    "label": "Ftr_02352",
    "en": "parabolic antenna",
    "jp": "パラボラアンテナ"
  },
  {
    "label": "Ftr_02553",
    "en": "iron frame",
    "jp": "てっこつ"
  },
  {
    "label": "Ftr_02554",
    "en": "double sofa",
    "jp": "ダブルソファ"
  },
  {
    "label": "Ftr_02555",
    "en": "garbage can",
    "jp": "ブリキのペール"
  },
  {
    "label": "Ftr_02556",
    "en": "garbage pail",
    "jp": "ペール"
  },
  {
    "label": "Ftr_02558",
    "en": "wooden-block chair",
    "jp": "つみきチェア"
  },
  {
    "label": "Ftr_02559",
    "en": "pot",
    "jp": "かめ"
  },
  {
    "label": "Ftr_02560",
    "en": "wooden chest",
    "jp": "もくせいチェスト"
  },
  {
    "label": "Ftr_02561",
    "en": "floor lamp",
    "jp": "フロアランプ"
  },
  {
    "label": "Ftr_02562",
    "en": "candle",
    "jp": "キャンドル"
  },
  {
    "label": "Ftr_02586",
    "en": "natural garden chair",
    "jp": "ナチュラルなガーデンチェア"
  },
  {
    "label": "Ftr_02592",
    "en": "tin bucket",
    "jp": "ブリキのバケツ"
  },
  {
    "label": "Ftr_02596",
    "en": "juicy-apple TV",
    "jp": "リンゴのテレビ"
  },
  {
    "label": "Ftr_02605",
    "en": "wooden simple bed",
    "jp": "もくせいシングルベッド"
  },
  {
    "label": "Ftr_02614",
    "en": "mountain bike",
    "jp": "マウンテンバイク"
  },
  {
    "label": "Ftr_02713",
    "en": "refrigerator",
    "jp": "れいぞうこ"
  },
  {
    "label": "Ftr_02731",
    "en": "digital alarm clock",
    "jp": "デジタルアラームどけい"
  },
  {
    "label": "Ftr_02736",
    "en": "retro fan",
    "jp": "レトロなせんぷうき"
  },
  {
    "label": "Ftr_02740",
    "en": "automatic washer",
    "jp": "せんたくき"
  },
  {
    "label": "Ftr_02754",
    "en": "simple well",
    "jp": "シンプルないど"
  },
  {
    "label": "Ftr_02770",
    "en": "chessboard",
    "jp": "チェス"
  },
  {
    "label": "Ftr_02771",
    "en": "round space heater",
    "jp": "まるがたストーブ"
  },
  {
    "label": "Ftr_02772",
    "en": "fancy violin",
    "jp": "ヴァイオリン"
  },
  {
    "label": "Ftr_02775",
    "en": "squat toilet",
    "jp": "わしきトイレ"
  },
  {
    "label": "Ftr_02776",
    "en": "tankless toilet",
    "jp": "タンクレストイレ"
  },
  {
    "label": "Ftr_03064",
    "en": "cooler box",
    "jp": "クーラーボックス"
  },
  {
    "label": "Ftr_03065",
    "en": "gold bars",
    "jp": "きんののべぼう"
  },
  {
    "label": "Ftr_03078",
    "en": "tourist telescope",
    "jp": "かんこうぼうえんきょう"
  },
  {
    "label": "Ftr_03122",
    "en": "mini DIY workbench",
    "jp": "ちいさなDIYさぎょうだい"
  },
  {
    "label": "Ftr_03191",
    "en": "ironwood table",
    "jp": "アイアンウッドテーブル"
  },
  {
    "label": "Ftr_03193",
    "en": "ironwood chair",
    "jp": "アイアンウッドチェア"
  },
  {
    "label": "Ftr_03194",
    "en": "ironwood low table",
    "jp": "アイアンウッドローテーブル"
  },
  {
    "label": "Ftr_03195",
    "en": "ironwood cart",
    "jp": "アイアンウッドワゴン"
  },
  {
    "label": "Ftr_03196",
    "en": "ironwood dresser",
    "jp": "アイアンウッドチェスト"
  },
  {
    "label": "Ftr_03200",
    "en": "ironwood bed",
    "jp": "アイアンウッドベッド"
  },
  {
    "label": "Ftr_03205",
    "en": "wooden-block stereo",
    "jp": "つみきコンポ"
  },
  {
    "label": "Ftr_03206",
    "en": "wooden-block toy",
    "jp": "つみきのおもちゃ"
  },
  {
    "label": "Ftr_03208",
    "en": "wooden-block wall clock",
    "jp": "つみきウォールクロック"
  },
  {
    "label": "Ftr_03229",
    "en": "clothesline",
    "jp": "ものほしロープ"
  },
  {
    "label": "Ftr_03230",
    "en": "futon",
    "jp": "ふとん"
  },
  {
    "label": "Ftr_03251",
    "en": "gas range",
    "jp": "オーブンつきコンロ"
  },
  {
    "label": "Ftr_03252",
    "en": "LCD TV (50 in.)",
    "jp": "えきしょうテレビ 50インチ"
  },
  {
    "label": "Ftr_03270",
    "en": "ironwood kitchenette",
    "jp": "アイアンウッドキッチン"
  },
  {
    "label": "Ftr_03271",
    "en": "ironwood cupboard",
    "jp": "アイアンウッドカップボード"
  },
  {
    "label": "Ftr_03275",
    "en": "ironwood clock",
    "jp": "アイアンウッドクロック"
  },
  {
    "label": "Ftr_03282",
    "en": "pop-up toaster",
    "jp": "ポップアップトースター"
  },
  {
    "label": "Ftr_03305",
    "en": "baby chair",
    "jp": "まめイス"
  },
  {
    "label": "Ftr_03307",
    "en": "digital scale",
    "jp": "たいじゅうそくていき"
  },
  {
    "label": "Ftr_03333",
    "en": "LCD TV (20 in.)",
    "jp": "えきしょうテレビ 20インチ"
  },
  {
    "label": "Ftr_03340",
    "en": "deer decoration",
    "jp": "しかのオブジェ"
  },
  {
    "label": "Ftr_03344",
    "en": "steamer-basket set",
    "jp": "せいろ"
  },
  {
    "label": "Ftr_03345",
    "en": "lifeguard chair",
    "jp": "ビーチのかんしだい"
  },
  {
    "label": "Ftr_03346",
    "en": "public bench",
    "jp": "パブリックベンチ"
  },
  {
    "label": "Ftr_03348",
    "en": "plastic pool",
    "jp": "ビニールプール"
  },
  {
    "label": "Ftr_03396",
    "en": "natural garden table",
    "jp": "ナチュラルなガーデンテーブル"
  },
  {
    "label": "Ftr_03397",
    "en": "stone table",
    "jp": "いしのテーブル"
  },
  {
    "label": "Ftr_03398",
    "en": "stone stool",
    "jp": "いしのスツール"
  },
  {
    "label": "Ftr_03399",
    "en": "intercom monitor",
    "jp": "インターフォンモニター"
  },
  {
    "label": "Ftr_03400",
    "en": "dish-drying rack",
    "jp": "みずきりラック"
  },
  {
    "label": "Ftr_03406",
    "en": "beekeeper's hive",
    "jp": "ようほうばこ"
  },
  {
    "label": "Ftr_03407",
    "en": "katana",
    "jp": "にほんとう"
  },
  {
    "label": "Ftr_03410",
    "en": "small cardboard boxes",
    "jp": "ひっこしダンボールS"
  },
  {
    "label": "Ftr_03411",
    "en": "medium cardboard boxes",
    "jp": "ひっこしダンボールM"
  },
  {
    "label": "Ftr_03412",
    "en": "large cardboard boxes",
    "jp": "ひっこしダンボールL"
  },
  {
    "label": "Ftr_03415",
    "en": "termite mound",
    "jp": "アリづか"
  },
  {
    "label": "Ftr_03416",
    "en": "soft-serve lamp",
    "jp": "ソフトクリームランプ"
  },
  {
    "label": "Ftr_03428",
    "en": "wall-mounted TV (50 in.)",
    "jp": "かべかけテレビ 50インチ"
  },
  {
    "label": "Ftr_03430",
    "en": "playground gym",
    "jp": "ジャングルジム"
  },
  {
    "label": "Ftr_03431",
    "en": "wall fan",
    "jp": "かべかけせんぷうき"
  },
  {
    "label": "Ftr_03436",
    "en": "wooden wardrobe",
    "jp": "もくせいクロゼット"
  },
  {
    "label": "Ftr_03438",
    "en": "wooden end table",
    "jp": "もくせいサイドテーブル"
  },
  {
    "label": "Ftr_03439",
    "en": "wooden table",
    "jp": "もくせいテーブル"
  },
  {
    "label": "Ftr_03442",
    "en": "sturdy sewing box",
    "jp": "さいほうばこ"
  },
  {
    "label": "Ftr_03443",
    "en": "sewing project",
    "jp": "ソーイングセット"
  },
  {
    "label": "Ftr_03444",
    "en": "wheelchair",
    "jp": "くるまイス"
  },
  {
    "label": "Ftr_03445",
    "en": "standard umbrella stand",
    "jp": "かさたて"
  },
  {
    "label": "Ftr_03446",
    "en": "western-style stone",
    "jp": "ようふうのはかいし"
  },
  {
    "label": "Ftr_03449",
    "en": "wooden stool",
    "jp": "もくせいスツール"
  },
  {
    "label": "Ftr_03467",
    "en": "tea set",
    "jp": "ティーセット"
  },
  {
    "label": "Ftr_03468",
    "en": "beach towel",
    "jp": "ビーチタオル"
  },
  {
    "label": "Ftr_03471",
    "en": "light switch",
    "jp": "スイッチ"
  },
  {
    "label": "Ftr_03472",
    "en": "golden toilet",
    "jp": "おうごんのトイレ"
  },
  {
    "label": "Ftr_03473",
    "en": "golden seat",
    "jp": "おうごんのベンチ"
  },
  {
    "label": "Ftr_03490",
    "en": "wooden waste bin",
    "jp": "もくせいのくずかご"
  },
  {
    "label": "Ftr_03497",
    "en": "frozen table",
    "jp": "こおりのテーブル"
  },
  {
    "label": "Ftr_03498",
    "en": "frozen partition",
    "jp": "こおりのパーテーション"
  },
  {
    "label": "Ftr_03499",
    "en": "frozen arch",
    "jp": "こおりのアーチ"
  },
  {
    "label": "Ftr_03500",
    "en": "frozen pillar",
    "jp": "こおりのはしら"
  },
  {
    "label": "Ftr_03501",
    "en": "frozen sculpture",
    "jp": "こおりのアート"
  },
  {
    "label": "Ftr_03502",
    "en": "frozen bed",
    "jp": "こおりのベッド"
  },
  {
    "label": "Ftr_03503",
    "en": "frozen chair",
    "jp": "こおりのイス"
  },
  {
    "label": "Ftr_03504",
    "en": "frozen tree",
    "jp": "こおりのツリー"
  },
  {
    "label": "Ftr_03505",
    "en": "frozen counter",
    "jp": "こおりのカウンター"
  },
  {
    "label": "Ftr_03509",
    "en": "garden bench",
    "jp": "ガーデンベンチ"
  },
  {
    "label": "Ftr_03551",
    "en": "bamboo shelf",
    "jp": "たけのシェルフ"
  },
  {
    "label": "Ftr_03553",
    "en": "bamboo partition",
    "jp": "たけのスクリーン"
  },
  {
    "label": "Ftr_03554",
    "en": "bamboo candleholder",
    "jp": "たけのキャンドルホルダー"
  },
  {
    "label": "Ftr_03555",
    "en": "bamboo doll",
    "jp": "たけのビックリばこ"
  },
  {
    "label": "Ftr_03556",
    "en": "bamboo stopblock",
    "jp": "たけのくるまどめ"
  },
  {
    "label": "Ftr_03557",
    "en": "bamboo floor lamp",
    "jp": "たけのフロアスタンド"
  },
  {
    "label": "Ftr_03558",
    "en": "bamboo wall decoration",
    "jp": "たけのいちりんざし"
  },
  {
    "label": "Ftr_03559",
    "en": "iron wall lamp",
    "jp": "アイアンウォールランプ"
  },
  {
    "label": "Ftr_03560",
    "en": "iron worktable",
    "jp": "アイアンワークテーブル"
  },
  {
    "label": "Ftr_03561",
    "en": "iron hanger stand",
    "jp": "アイアンハンガースタンド"
  },
  {
    "label": "Ftr_03562",
    "en": "iron wall rack",
    "jp": "アイアンウォールラック"
  },
  {
    "label": "Ftr_03563",
    "en": "iron shelf",
    "jp": "アイアンシェルフ"
  },
  {
    "label": "Ftr_03580",
    "en": "bonsai shelf",
    "jp": "ぼんさいだな"
  },
  {
    "label": "Ftr_03581",
    "en": "fish-drying rack",
    "jp": "ひもの"
  },
  {
    "label": "Ftr_03582",
    "en": "book",
    "jp": "ほん"
  },
  {
    "label": "Ftr_03583",
    "en": "fishing-boat flag",
    "jp": "たいりょうき"
  },
  {
    "label": "Ftr_03584",
    "en": "study poster",
    "jp": "がくしゅうポスター"
  },
  {
    "label": "Ftr_03586",
    "en": "magazine",
    "jp": "ざっし"
  },
  {
    "label": "Ftr_03587",
    "en": "fishing-rod stand",
    "jp": "ロッドスタンド"
  },
  {
    "label": "Ftr_03588",
    "en": "signpost",
    "jp": "みちしるべ"
  },
  {
    "label": "Ftr_03590",
    "en": "desktop computer",
    "jp": "デスクトップPC"
  },
  {
    "label": "Ftr_03591",
    "en": "birthday candles",
    "jp": "バースデーキャンドル"
  },
  {
    "label": "Ftr_03592",
    "en": "birthday cake",
    "jp": "バースデーケーキ"
  },
  {
    "label": "Ftr_03593",
    "en": "birthday table",
    "jp": "バースデーテーブル"
  },
  {
    "label": "Ftr_03594",
    "en": "birthday sign",
    "jp": "バースデーボード"
  },
  {
    "label": "Ftr_03595",
    "en": "park clock",
    "jp": "こうえんのとけい"
  },
  {
    "label": "Ftr_03596",
    "en": "pool",
    "jp": "プール"
  },
  {
    "label": "Ftr_03615",
    "en": "open-frame kitchen",
    "jp": "フレームキッチン"
  },
  {
    "label": "Ftr_03616",
    "en": "system kitchen",
    "jp": "システムキッチン"
  },
  {
    "label": "Ftr_03617",
    "en": "stall",
    "jp": "やたい"
  },
  {
    "label": "Ftr_03618",
    "en": "cutting board",
    "jp": "カッティングボード"
  },
  {
    "label": "Ftr_03619",
    "en": "soup kettle",
    "jp": "スープジャー"
  },
  {
    "label": "Ftr_03620",
    "en": "toy cockroach",
    "jp": "おもちゃのゴキブリ"
  },
  {
    "label": "Ftr_03621",
    "en": "loft bed with desk",
    "jp": "ベッドデスク"
  },
  {
    "label": "Ftr_03622",
    "en": "floor seat",
    "jp": "ざいす"
  },
  {
    "label": "Ftr_03623",
    "en": "toy box",
    "jp": "おもちゃばこ"
  },
  {
    "label": "Ftr_03624",
    "en": "cute bed",
    "jp": "キュートなベッド"
  },
  {
    "label": "Ftr_03654",
    "en": "oil lamp",
    "jp": "アルコールランプ"
  },
  {
    "label": "Ftr_03658",
    "en": "bamboo basket",
    "jp": "たけのかご"
  },
  {
    "label": "Ftr_03672",
    "en": "cardboard box",
    "jp": "ダンボール"
  },
  {
    "label": "Ftr_03675",
    "en": "hay bed",
    "jp": "ほしくさのベッド"
  },
  {
    "label": "Ftr_03681",
    "en": "piano bench",
    "jp": "ピアノのイス"
  },
  {
    "label": "Ftr_03683",
    "en": "plain sink",
    "jp": "そぼくなせんめんだい"
  },
  {
    "label": "Ftr_03684",
    "en": "coconut juice",
    "jp": "ココナッツジュース"
  },
  {
    "label": "Ftr_03689",
    "en": "sauna heater",
    "jp": "サウナストーブ"
  },
  {
    "label": "Ftr_03692",
    "en": "plain wooden shop sign",
    "jp": "そぼくなもくせいかんばん"
  },
  {
    "label": "Ftr_03697",
    "en": "portable radio",
    "jp": "けいたいラジオ"
  },
  {
    "label": "Ftr_03699",
    "en": "fish print",
    "jp": "ぎょたく"
  },
  {
    "label": "Ftr_03701",
    "en": "study desk",
    "jp": "がくしゅうデスク"
  },
  {
    "label": "Ftr_03702",
    "en": "study chair",
    "jp": "がくしゅうチェア"
  },
  {
    "label": "Ftr_03772",
    "en": "golden candlestick",
    "jp": "おうごんのしょくだい"
  },
  {
    "label": "Ftr_03773",
    "en": "terrarium",
    "jp": "テラリウム"
  },
  {
    "label": "Ftr_03774",
    "en": "Libra scale",
    "jp": "リブラのてんびん"
  },
  {
    "label": "Ftr_03775",
    "en": "hanging terrarium",
    "jp": "ハンギングテラリウム"
  },
  {
    "label": "Ftr_03776",
    "en": "brick well",
    "jp": "レンガのいど"
  },
  {
    "label": "Ftr_03783",
    "en": "den desk",
    "jp": "しょさいのつくえ"
  },
  {
    "label": "Ftr_03784",
    "en": "den chair",
    "jp": "しょさいのイス"
  },
  {
    "label": "Ftr_03785",
    "en": "potted ivy",
    "jp": "かべかけのはっぱ"
  },
  {
    "label": "Ftr_03802",
    "en": "pine bonsai tree",
    "jp": "マツのぼんさい"
  },
  {
    "label": "Ftr_03805",
    "en": "mush parasol",
    "jp": "キノコのパラソル"
  },
  {
    "label": "Ftr_03806",
    "en": "mush partition",
    "jp": "キノコのスクリーン"
  },
  {
    "label": "Ftr_03808",
    "en": "mush log",
    "jp": "キノコのげんぼく"
  },
  {
    "label": "Ftr_03810",
    "en": "golden dishes",
    "jp": "おうごんのしょっき"
  },
  {
    "label": "Ftr_03816",
    "en": "streetlamp",
    "jp": "がいとう"
  },
  {
    "label": "Ftr_03817",
    "en": "spider web",
    "jp": "クモのす"
  },
  {
    "label": "Ftr_03818",
    "en": "pennant",
    "jp": "ペナント"
  },
  {
    "label": "Ftr_03819",
    "en": "oil-barrel bathtub",
    "jp": "ドラムかんぶろ"
  },
  {
    "label": "Ftr_03820",
    "en": "fan",
    "jp": "せんぷうき"
  },
  {
    "label": "Ftr_03821",
    "en": "air circulator",
    "jp": "サーキュレーター"
  },
  {
    "label": "Ftr_03822",
    "en": "pro tape recorder",
    "jp": "オープンリールデッキ"
  },
  {
    "label": "Ftr_03943",
    "en": "ironwood DIY workbench",
    "jp": "アイアンウッドDIYテーブル"
  },
  {
    "label": "Ftr_03946",
    "en": "outdoor table",
    "jp": "アウトドアテーブル"
  },
  {
    "label": "Ftr_03947",
    "en": "outdoor bench",
    "jp": "アウトドアベンチ"
  },
  {
    "label": "Ftr_03948",
    "en": "accessories stand",
    "jp": "アクセサリースタンド"
  },
  {
    "label": "Ftr_03949",
    "en": "anthurium plant",
    "jp": "アンスリウム"
  },
  {
    "label": "Ftr_03950",
    "en": "antique chair",
    "jp": "アンティークなイス"
  },
  {
    "label": "Ftr_03951",
    "en": "antique console table",
    "jp": "アンティークなコンソール"
  },
  {
    "label": "Ftr_03952",
    "en": "antique table",
    "jp": "アンティークなテーブル"
  },
  {
    "label": "Ftr_03953",
    "en": "antique phone",
    "jp": "アンティークなでんわ"
  },
  {
    "label": "Ftr_03954",
    "en": "antique clock",
    "jp": "アンティークなとけい"
  },
  {
    "label": "Ftr_03955",
    "en": "antique vanity",
    "jp": "アンティークなドレッサー"
  },
  {
    "label": "Ftr_03956",
    "en": "antique bureau",
    "jp": "アンティークなビューロ"
  },
  {
    "label": "Ftr_03957",
    "en": "antique bed",
    "jp": "アンティークなベッド"
  },
  {
    "label": "Ftr_03958",
    "en": "antique mini table",
    "jp": "アンティークなミニテーブル"
  },
  {
    "label": "Ftr_03959",
    "en": "antique wardrobe",
    "jp": "アンティークなワードローブ"
  },
  {
    "label": "Ftr_03960",
    "en": "handy water cooler",
    "jp": "ウォータージャグ"
  },
  {
    "label": "Ftr_03961",
    "en": "fortune-telling set",
    "jp": "うらないセット"
  },
  {
    "label": "Ftr_03962",
    "en": "inflatable sofa",
    "jp": "エアーソファ"
  },
  {
    "label": "Ftr_03963",
    "en": "film projector",
    "jp": "えいしゃき"
  },
  {
    "label": "Ftr_03965",
    "en": "painting set",
    "jp": "おえかきセット"
  },
  {
    "label": "Ftr_03966",
    "en": "big festive tree",
    "jp": "おおきなクリスマスツリー"
  },
  {
    "label": "Ftr_03967",
    "en": "broom and dustpan",
    "jp": "ほうきとちりとり"
  },
  {
    "label": "Ftr_03968",
    "en": "homework set",
    "jp": "おべんきょうセット"
  },
  {
    "label": "Ftr_03969",
    "en": "toy centipede",
    "jp": "おもちゃのムカデ"
  },
  {
    "label": "Ftr_03970",
    "en": "imperial decorative shelves",
    "jp": "オリエンタルなかざりだな"
  },
  {
    "label": "Ftr_03971",
    "en": "imperial partition",
    "jp": "オリエンタルなスクリーン"
  },
  {
    "label": "Ftr_03972",
    "en": "imperial chest",
    "jp": "オリエンタルなチェスト"
  },
  {
    "label": "Ftr_03973",
    "en": "imperial bed",
    "jp": "オリエンタルなベッド"
  },
  {
    "label": "Ftr_03974",
    "en": "imperial low table",
    "jp": "オリエンタルなローテーブル"
  },
  {
    "label": "Ftr_03975",
    "en": "orange end table",
    "jp": "オレンジのサイドテーブル"
  },
  {
    "label": "Ftr_03976",
    "en": "orange wall-mounted clock",
    "jp": "オレンジのかべかけどけい"
  },
  {
    "label": "Ftr_03977",
    "en": "shell arch",
    "jp": "かいがらのアーチ"
  },
  {
    "label": "Ftr_03978",
    "en": "shell partition",
    "jp": "かいがらのスクリーン"
  },
  {
    "label": "Ftr_03979",
    "en": "shell stool",
    "jp": "かいがらのスツール"
  },
  {
    "label": "Ftr_03980",
    "en": "shell table",
    "jp": "かいがらのテーブル"
  },
  {
    "label": "Ftr_03982",
    "en": "shell fountain",
    "jp": "かいがらのふんすい"
  },
  {
    "label": "Ftr_03983",
    "en": "shell bed",
    "jp": "かいがらのベッド"
  },
  {
    "label": "Ftr_03984",
    "en": "shell lamp",
    "jp": "かいがらのランプ"
  },
  {
    "label": "Ftr_03986",
    "en": "wall-mounted TV (20 in.)",
    "jp": "かべかけテレビ 20インチ"
  },
  {
    "label": "Ftr_03987",
    "en": "wall-mounted phone",
    "jp": "かべかけでんわ"
  },
  {
    "label": "Ftr_03991",
    "en": "festive tree",
    "jp": "かわいいクリスマスツリー"
  },
  {
    "label": "Ftr_03992",
    "en": "key holder",
    "jp": "キーハンガー"
  },
  {
    "label": "Ftr_03993",
    "en": "analog kitchen scale",
    "jp": "キッチンスケール"
  },
  {
    "label": "Ftr_03995",
    "en": "cute DIY table",
    "jp": "キュートなDIYテーブル"
  },
  {
    "label": "Ftr_03996",
    "en": "cute wall-mounted clock",
    "jp": "キュートなかべかけどけい"
  },
  {
    "label": "Ftr_03997",
    "en": "cute wardrobe",
    "jp": "キュートなクロゼット"
  },
  {
    "label": "Ftr_03998",
    "en": "cute sofa",
    "jp": "キュートなソファ"
  },
  {
    "label": "Ftr_03999",
    "en": "cute chair",
    "jp": "キュートなチェア"
  },
  {
    "label": "Ftr_04000",
    "en": "cute tea table",
    "jp": "キュートなティーテーブル"
  },
  {
    "label": "Ftr_04001",
    "en": "cute vanity",
    "jp": "キュートなドレッサー"
  },
  {
    "label": "Ftr_04002",
    "en": "cute floor lamp",
    "jp": "キュートなフロアランプ"
  },
  {
    "label": "Ftr_04003",
    "en": "cute music player",
    "jp": "キュートなオーディオプレーヤー"
  },
  {
    "label": "Ftr_04006",
    "en": "climbing wall",
    "jp": "クライミングウォール"
  },
  {
    "label": "Ftr_04008",
    "en": "kettle bathtub",
    "jp": "ごえもんぶろ"
  },
  {
    "label": "Ftr_04009",
    "en": "cordless phone",
    "jp": "コードレスでんわ"
  },
  {
    "label": "Ftr_04011",
    "en": "cherry speakers",
    "jp": "さくらんぼのスピーカー"
  },
  {
    "label": "Ftr_04012",
    "en": "cherry lamp",
    "jp": "さくらんぼのランプ"
  },
  {
    "label": "Ftr_04013",
    "en": "punching bag",
    "jp": "サンドバッグ"
  },
  {
    "label": "Ftr_04014",
    "en": "folding floor lamp",
    "jp": "アームのフロアランプ"
  },
  {
    "label": "Ftr_04015",
    "en": "shower booth",
    "jp": "シャワーブース"
  },
  {
    "label": "Ftr_04016",
    "en": "lab-experiments set",
    "jp": "じっけんセット"
  },
  {
    "label": "Ftr_04017",
    "en": "shower set",
    "jp": "シャワーセット"
  },
  {
    "label": "Ftr_04019",
    "en": "stand mixer",
    "jp": "スタンドミキサー"
  },
  {
    "label": "Ftr_04023",
    "en": "pants press",
    "jp": "ズボンプレッサー"
  },
  {
    "label": "Ftr_04025",
    "en": "unglazed dish set",
    "jp": "すやきのしょっき"
  },
  {
    "label": "Ftr_04026",
    "en": "utility sink",
    "jp": "スロップシンク"
  },
  {
    "label": "Ftr_04027",
    "en": "floral swag",
    "jp": "スワッグ"
  },
  {
    "label": "Ftr_04028",
    "en": "retro radiator",
    "jp": "セントラルヒーティング"
  },
  {
    "label": "Ftr_04029",
    "en": "rotary phone",
    "jp": "ダイヤルしきでんわ"
  },
  {
    "label": "Ftr_04030",
    "en": "bathroom towel rack",
    "jp": "タオルラック"
  },
  {
    "label": "Ftr_04033",
    "en": "traditional tea set",
    "jp": "チャイニーズティーセット"
  },
  {
    "label": "Ftr_04034",
    "en": "scattered papers",
    "jp": "ちらばったかみ"
  },
  {
    "label": "Ftr_04035",
    "en": "log garden lounge",
    "jp": "まるたのガーデンベッド"
  },
  {
    "label": "Ftr_04036",
    "en": "log decorative shelves",
    "jp": "まるたのかざりだな"
  },
  {
    "label": "Ftr_04037",
    "en": "log wall-mounted clock",
    "jp": "まるたのかべかけどけい"
  },
  {
    "label": "Ftr_04038",
    "en": "log stool",
    "jp": "まるたのスツール"
  },
  {
    "label": "Ftr_04039",
    "en": "log chair",
    "jp": "まるたのソファ"
  },
  {
    "label": "Ftr_04040",
    "en": "log dining table",
    "jp": "まるたのダイニングテーブル"
  },
  {
    "label": "Ftr_04041",
    "en": "log bed",
    "jp": "まるたのベッド"
  },
  {
    "label": "Ftr_04042",
    "en": "log bench",
    "jp": "まるたのベンチ"
  },
  {
    "label": "Ftr_04043",
    "en": "log round table",
    "jp": "まるたのラウンドテーブル"
  },
  {
    "label": "Ftr_04044",
    "en": "log extra-long sofa",
    "jp": "まるたのロングソファ"
  },
  {
    "label": "Ftr_04045",
    "en": "rattan waste bin",
    "jp": "ラタンのくずかご"
  },
  {
    "label": "Ftr_04046",
    "en": "rattan end table",
    "jp": "ラタンのサイドテーブル"
  },
  {
    "label": "Ftr_04047",
    "en": "rattan stool",
    "jp": "ラタンのスツール"
  },
  {
    "label": "Ftr_04048",
    "en": "rattan towel basket",
    "jp": "ラタンのタオルバスケット"
  },
  {
    "label": "Ftr_04049",
    "en": "rattan wardrobe",
    "jp": "ラタンのクロゼット"
  },
  {
    "label": "Ftr_04050",
    "en": "rattan table lamp",
    "jp": "ラタンのテーブルランプ"
  },
  {
    "label": "Ftr_04051",
    "en": "rattan vanity",
    "jp": "ラタンのドレッサー"
  },
  {
    "label": "Ftr_04052",
    "en": "rattan bed",
    "jp": "ラタンのベッド"
  },
  {
    "label": "Ftr_04053",
    "en": "rattan armchair",
    "jp": "ラタンのソファ"
  },
  {
    "label": "Ftr_04054",
    "en": "rattan low table",
    "jp": "ラタンのローテーブル"
  },
  {
    "label": "Ftr_04066",
    "en": "illuminated tree",
    "jp": "ツリーのイルミネーション"
  },
  {
    "label": "Ftr_04067",
    "en": "tabletop festive tree",
    "jp": "テーブルクリスマスツリー"
  },
  {
    "label": "Ftr_04068",
    "en": "table setting",
    "jp": "テーブルセッティング"
  },
  {
    "label": "Ftr_04069",
    "en": "table lamp",
    "jp": "テーブルランプ"
  },
  {
    "label": "Ftr_04070",
    "en": "street organ",
    "jp": "てまわしオルガン"
  },
  {
    "label": "Ftr_04071",
    "en": "electronics kit",
    "jp": "でんしこうさくセット"
  },
  {
    "label": "Ftr_04072",
    "en": "toilet-cleaning set",
    "jp": "トイレそうじセット"
  },
  {
    "label": "Ftr_04073",
    "en": "classic pitcher",
    "jp": "とうきのジャグ"
  },
  {
    "label": "Ftr_04074",
    "en": "illuminated reindeer",
    "jp": "トナカイのイルミネーション"
  },
  {
    "label": "Ftr_04075",
    "en": "gong",
    "jp": "どら"
  },
  {
    "label": "Ftr_04076",
    "en": "nail-art set",
    "jp": "ネイルアートセット"
  },
  {
    "label": "Ftr_04077",
    "en": "party garland",
    "jp": "パーティーのかざり"
  },
  {
    "label": "Ftr_04078",
    "en": "barbell",
    "jp": "バーベル"
  },
  {
    "label": "Ftr_04080",
    "en": "long bathtub",
    "jp": "バスタブ"
  },
  {
    "label": "Ftr_04081",
    "en": "camping cot",
    "jp": "キャンプベッド"
  },
  {
    "label": "Ftr_04083",
    "en": "spooky arch",
    "jp": "ハロウィンなアーチ"
  },
  {
    "label": "Ftr_04084",
    "en": "spooky scarecrow",
    "jp": "ハロウィンなかかし"
  },
  {
    "label": "Ftr_04086",
    "en": "spooky tower",
    "jp": "ハロウィンなタワー"
  },
  {
    "label": "Ftr_04087",
    "en": "spooky carriage",
    "jp": "ハロウィンなばしゃ"
  },
  {
    "label": "Ftr_04088",
    "en": "spooky lantern",
    "jp": "ハロウィンなランタン"
  },
  {
    "label": "Ftr_04089",
    "en": "spooky chair",
    "jp": "ハロウィンなチェア"
  },
  {
    "label": "Ftr_04090",
    "en": "spooky table",
    "jp": "ハロウィンなテーブル"
  },
  {
    "label": "Ftr_04092",
    "en": "spooky lantern set",
    "jp": "ハロウィンなランタンセット"
  },
  {
    "label": "Ftr_04093",
    "en": "bamboo drum",
    "jp": "バンブードラム"
  },
  {
    "label": "Ftr_04094",
    "en": "floating-biotope planter",
    "jp": "ビオトープ"
  },
  {
    "label": "Ftr_04098",
    "en": "bidet",
    "jp": "ビデ"
  },
  {
    "label": "Ftr_04099",
    "en": "formal paper",
    "jp": "ひょうしょうじょう"
  },
  {
    "label": "Ftr_04100",
    "en": "fire pit",
    "jp": "ファイヤーピット"
  },
  {
    "label": "Ftr_04101",
    "en": "fax machine",
    "jp": "ファクシミリ"
  },
  {
    "label": "Ftr_04102",
    "en": "poolside bed",
    "jp": "プールサイドベッド"
  },
  {
    "label": "Ftr_04104",
    "en": "frying pan",
    "jp": "フライパン"
  },
  {
    "label": "Ftr_04105",
    "en": "plasma ball",
    "jp": "プラズマボール"
  },
  {
    "label": "Ftr_04106",
    "en": "pendulum clock",
    "jp": "ふりこどけい"
  },
  {
    "label": "Ftr_04107",
    "en": "infused-water dispenser",
    "jp": "フルーツウォーターサーバー"
  },
  {
    "label": "Ftr_04108",
    "en": "illuminated present",
    "jp": "プレゼントのイルミネーション"
  },
  {
    "label": "Ftr_04109",
    "en": "double-door refrigerator",
    "jp": "フレンチドアれいぞうこ"
  },
  {
    "label": "Ftr_04110",
    "en": "essay set",
    "jp": "ぶんごうセット"
  },
  {
    "label": "Ftr_04111",
    "en": "old-fashioned alarm clock",
    "jp": "ベルつきアラームクロック"
  },
  {
    "label": "Ftr_04113",
    "en": "hose reel",
    "jp": "ホースリール"
  },
  {
    "label": "Ftr_04114",
    "en": "tissue box",
    "jp": "ボックスティッシュ"
  },
  {
    "label": "Ftr_04116",
    "en": "whiteboard",
    "jp": "ホワイトボード"
  },
  {
    "label": "Ftr_04117",
    "en": "wood-burning stove",
    "jp": "まきストーブ"
  },
  {
    "label": "Ftr_04118",
    "en": "magnetic knife rack",
    "jp": "マグネットナイフラック"
  },
  {
    "label": "Ftr_04119",
    "en": "macrame tapestry",
    "jp": "マクラメタペストリー"
  },
  {
    "label": "Ftr_04121",
    "en": "marimba",
    "jp": "マリンバ"
  },
  {
    "label": "Ftr_04122",
    "en": "cartoonist's set",
    "jp": "まんがかセット"
  },
  {
    "label": "Ftr_04123",
    "en": "mini-cactus set",
    "jp": "ミニサボテンセット"
  },
  {
    "label": "Ftr_04124",
    "en": "wooden fish",
    "jp": "もくぎょ"
  },
  {
    "label": "Ftr_04125",
    "en": "wooden bookshelf",
    "jp": "もくせいのほんだな"
  },
  {
    "label": "Ftr_04127",
    "en": "peach chair",
    "jp": "モモのチェア"
  },
  {
    "label": "Ftr_04128",
    "en": "peach surprise box",
    "jp": "モモのビックリばこ"
  },
  {
    "label": "Ftr_04129",
    "en": "monstera",
    "jp": "モンステラ"
  },
  {
    "label": "Ftr_04130",
    "en": "coconut wall planter",
    "jp": "ヤシのウォールプランター"
  },
  {
    "label": "Ftr_04131",
    "en": "illuminated snowflakes",
    "jp": "ゆきのイルミネーション"
  },
  {
    "label": "Ftr_04132",
    "en": "yucca",
    "jp": "ユッカ"
  },
  {
    "label": "Ftr_04133",
    "en": "double-sided wall clock",
    "jp": "りょうめんウォールクロック"
  },
  {
    "label": "Ftr_04134",
    "en": "apple chair",
    "jp": "リンゴのチェア"
  },
  {
    "label": "Ftr_04135",
    "en": "freezer",
    "jp": "れいとうこ"
  },
  {
    "label": "Ftr_04137",
    "en": "diner chair",
    "jp": "ダイナーなイス"
  },
  {
    "label": "Ftr_04138",
    "en": "diner counter chair",
    "jp": "ダイナーなカウンターチェア"
  },
  {
    "label": "Ftr_04139",
    "en": "diner counter table",
    "jp": "ダイナーなカウンターテーブル"
  },
  {
    "label": "Ftr_04140",
    "en": "retro gas pump",
    "jp": "レトロなきゅうゆき"
  },
  {
    "label": "Ftr_04141",
    "en": "diner sofa",
    "jp": "ダイナーなソファ"
  },
  {
    "label": "Ftr_04142",
    "en": "diner dining table",
    "jp": "ダイナーなダイニングテーブル"
  },
  {
    "label": "Ftr_04143",
    "en": "diner neon sign",
    "jp": "ダイナーなネオンかんばん"
  },
  {
    "label": "Ftr_04144",
    "en": "diner neon clock",
    "jp": "ダイナーなネオンクロック"
  },
  {
    "label": "Ftr_04226",
    "en": "basketball hoop",
    "jp": "バスケットのゴール"
  },
  {
    "label": "Ftr_04230",
    "en": "glass holder with candle",
    "jp": "ガラスのキャンドルホルダー"
  },
  {
    "label": "Ftr_04269",
    "en": "green-leaf pile",
    "jp": "みどりのおちば"
  },
  {
    "label": "Ftr_04270",
    "en": "yellow-leaf pile",
    "jp": "きいろのおちば"
  },
  {
    "label": "Ftr_04271",
    "en": "red-leaf pile",
    "jp": "あかいおちば"
  },
  {
    "label": "Ftr_04279",
    "en": "frozen-treat set",
    "jp": "アイスキャンディー"
  },
  {
    "label": "Ftr_04308",
    "en": "unfinished puzzle",
    "jp": "つくりかけのパズル"
  },
  {
    "label": "Ftr_04309",
    "en": "destinations signpost",
    "jp": "せかいのみちしるべ"
  },
  {
    "label": "Ftr_04338",
    "en": "portable record player",
    "jp": "ポータブルレコードプレーヤー"
  },
  {
    "label": "Ftr_04379",
    "en": "springy ride-on",
    "jp": "スプリングゆうぐ"
  },
  {
    "label": "Ftr_04381",
    "en": "football",
    "jp": "アメフトボール"
  },
  {
    "label": "Ftr_04392",
    "en": "magic kit",
    "jp": "てじなセット"
  },
  {
    "label": "Ftr_04393",
    "en": "old-fashioned washtub",
    "jp": "せんたくおけ"
  },
  {
    "label": "Ftr_04412",
    "en": "cotton-candy stall",
    "jp": "わたあめのやたい"
  },
  {
    "label": "Ftr_04441",
    "en": "diner mini table",
    "jp": "ダイナーなミニテーブル"
  },
  {
    "label": "Ftr_04445",
    "en": "vintage TV tray",
    "jp": "TVトレイ"
  },
  {
    "label": "Ftr_04546",
    "en": "pear bed",
    "jp": "ナシのベッド"
  },
  {
    "label": "Ftr_04572",
    "en": "shaded floor lamp",
    "jp": "マウントシェードのフロアランプ"
  },
  {
    "label": "Ftr_04687",
    "en": "toolbox",
    "jp": "こうぐばこ"
  },
  {
    "label": "Ftr_04708",
    "en": "mush low stool",
    "jp": "キノコのスツール"
  },
  {
    "label": "Ftr_04719",
    "en": "celebratory candles",
    "jp": "うたげのキャンドル"
  },
  {
    "label": "Ftr_04722",
    "en": "monster statue",
    "jp": "かいじゅう"
  },
  {
    "label": "Ftr_04753",
    "en": "throwback wrestling figure",
    "jp": "TOYなフィギュア"
  },
  {
    "label": "Ftr_04754",
    "en": "throwback gothic mirror",
    "jp": "TOYなミラー"
  },
  {
    "label": "Ftr_04756",
    "en": "throwback wall clock",
    "jp": "TOYなウォールクロック"
  },
  {
    "label": "Ftr_04757",
    "en": "throwback skull radio",
    "jp": "TOYなオーディオ"
  },
  {
    "label": "Ftr_04758",
    "en": "throwback mitt chair",
    "jp": "TOYなチェア"
  },
  {
    "label": "Ftr_04759",
    "en": "throwback race-car bed",
    "jp": "TOYなベッド"
  },
  {
    "label": "Ftr_04760",
    "en": "throwback hat table",
    "jp": "TOYなテーブル"
  },
  {
    "label": "Ftr_04761",
    "en": "throwback rocket",
    "jp": "TOYなクロゼット"
  },
  {
    "label": "Ftr_04762",
    "en": "throwback container",
    "jp": "TOYなコンテナ"
  },
  {
    "label": "Ftr_04763",
    "en": "throwback dino screen",
    "jp": "TOYなスクリーン"
  },
  {
    "label": "Ftr_05150",
    "en": "shell speaker",
    "jp": "かいがらのスピーカー"
  },
  {
    "label": "Ftr_05165",
    "en": "wall-mounted candle",
    "jp": "かべかけのキャンドル"
  },
  {
    "label": "Ftr_05337",
    "en": "three-tiered snowperson",
    "jp": "3だんゆきだるま"
  },
  {
    "label": "Ftr_05338",
    "en": "simple panel",
    "jp": "シンプルなパネル"
  },
  {
    "label": "Ftr_05543",
    "en": "wooden-block stool",
    "jp": "つみきスツール"
  },
  {
    "label": "Ftr_05635",
    "en": "tiny library",
    "jp": "マイクロライブラリー"
  },
  {
    "label": "Ftr_05636",
    "en": "wooden-plank sign",
    "jp": "いちまいいたのかんばん"
  },
  {
    "label": "Ftr_05676",
    "en": "crewed spaceship",
    "jp": "ゆうじんうちゅうせん"
  },
  {
    "label": "Ftr_05931",
    "en": "jail bars",
    "jp": "おり"
  },
  {
    "label": "Ftr_05941",
    "en": "golden dung beetle",
    "jp": "きんのスカラベ"
  },
  {
    "label": "Ftr_05954",
    "en": "Aries rocking chair",
    "jp": "アリエスのもくば"
  },
  {
    "label": "Ftr_05955",
    "en": "Virgo harp",
    "jp": "ヴァルゴのハープ"
  },
  {
    "label": "Ftr_05956",
    "en": "Aquarius urn",
    "jp": "アクエリアスのみずがめ"
  },
  {
    "label": "Ftr_05957",
    "en": "Capricorn ornament",
    "jp": "カプリコーンのおきもの"
  },
  {
    "label": "Ftr_05958",
    "en": "Sagittarius arrow",
    "jp": "サジタリアスのや"
  },
  {
    "label": "Ftr_05959",
    "en": "Cancer table",
    "jp": "キャンサーのテーブル"
  },
  {
    "label": "Ftr_05960",
    "en": "Gemini closet",
    "jp": "ジェミニのクロゼット"
  },
  {
    "label": "Ftr_05961",
    "en": "Taurus bathtub",
    "jp": "タウラスのバスタブ"
  },
  {
    "label": "Ftr_05962",
    "en": "Scorpio lamp",
    "jp": "スコーピオのランプ"
  },
  {
    "label": "Ftr_05963",
    "en": "Pisces lamp",
    "jp": "ピスケスのランプ"
  },
  {
    "label": "Ftr_05964",
    "en": "Leo sculpture",
    "jp": "レオのちょうこく"
  },
  {
    "label": "Ftr_05970",
    "en": "firewood",
    "jp": "まき"
  },
  {
    "label": "Ftr_05972",
    "en": "wild log bench",
    "jp": "ワイルドなまるたのベンチ"
  },
  {
    "label": "Ftr_05973",
    "en": "log stakes",
    "jp": "まるたのくい"
  },
  {
    "label": "Ftr_05975",
    "en": "traditional balancing toy",
    "jp": "やじろべえ"
  },
  {
    "label": "Ftr_05976",
    "en": "bamboo sphere",
    "jp": "たけのまり"
  },
  {
    "label": "Ftr_05977",
    "en": "bamboo-shoot lamp",
    "jp": "たけのこランプ"
  },
  {
    "label": "Ftr_05978",
    "en": "bamboo lunch box",
    "jp": "たけのべんとうばこ"
  },
  {
    "label": "Ftr_05979",
    "en": "bamboo noodle slide",
    "jp": "ながしそうめん"
  },
  {
    "label": "Ftr_06030",
    "en": "cherry-blossom bonsai",
    "jp": "さくらのぼんさい"
  },
  {
    "label": "Ftr_06031",
    "en": "cherry-blossom branches",
    "jp": "さくらのえだ"
  },
  {
    "label": "Ftr_06032",
    "en": "cherry-blossom-petal pile",
    "jp": "さくらのはなびらのやま"
  },
  {
    "label": "Ftr_06033",
    "en": "outdoor picnic set",
    "jp": "おはなみセット"
  },
  {
    "label": "Ftr_06075",
    "en": "tree's bounty mobile",
    "jp": "きのみのモビール"
  },
  {
    "label": "Ftr_06078",
    "en": "tree's bounty lamp",
    "jp": "きのみのランプ"
  },
  {
    "label": "Ftr_06079",
    "en": "tree's bounty little tree",
    "jp": "ちいさなきのみのツリー"
  },
  {
    "label": "Ftr_06080",
    "en": "tree's bounty big tree",
    "jp": "おおきなきのみのツリー"
  },
  {
    "label": "Ftr_06081",
    "en": "tree's bounty arch",
    "jp": "きのみのアーチ"
  },
  {
    "label": "Ftr_06818",
    "en": "ornament mobile",
    "jp": "オーナメントのモビール"
  },
  {
    "label": "Ftr_06826",
    "en": "nova light",
    "jp": "スターライト"
  },
  {
    "label": "Ftr_06827",
    "en": "starry garland",
    "jp": "スターなガーランド"
  },
  {
    "label": "Ftr_06829",
    "en": "crescent-moon chair",
    "jp": "みかづきチェア"
  },
  {
    "label": "Ftr_06831",
    "en": "blossom-viewing lantern",
    "jp": "おはなみのちょうちん"
  },
  {
    "label": "Ftr_06832",
    "en": "cherry-blossom clock",
    "jp": "さくらクロック"
  },
  {
    "label": "Ftr_07032",
    "en": "gold HHA trophy",
    "jp": "きんのおうちトロフィー"
  },
  {
    "label": "Ftr_07035",
    "en": "gold HHA plaque",
    "jp": "アカデミーのきんのたて"
  },
  {
    "label": "Ftr_07036",
    "en": "silver HHA plaque",
    "jp": "アカデミーのぎんのたて"
  },
  {
    "label": "Ftr_07037",
    "en": "bronze HHA plaque",
    "jp": "アカデミーのどうのたて"
  },
  {
    "label": "Ftr_07040",
    "en": "HHA pennant",
    "jp": "アカデミーのペナント"
  },
  {
    "label": "Ftr_07043",
    "en": "Stonehenge",
    "jp": "ストーンヘンジ"
  },
  {
    "label": "Ftr_07045",
    "en": "recycled-can thumb piano",
    "jp": "あきかんカリンバ"
  },
  {
    "label": "Ftr_07047",
    "en": "zen cushion",
    "jp": "ざぶとん"
  },
  {
    "label": "Ftr_07048",
    "en": "pile of zen cushions",
    "jp": "ざぶとんのやま"
  },
  {
    "label": "Ftr_07098",
    "en": "bronze HHA trophy",
    "jp": "どうのおうちトロフィー"
  },
  {
    "label": "Ftr_07100",
    "en": "silver HHA trophy",
    "jp": "ぎんのおうちトロフィー"
  },
  {
    "label": "Ftr_07132",
    "en": "wooden double bed",
    "jp": "もくせいダブルベッド"
  },
  {
    "label": "Ftr_07133",
    "en": "wooden mini table",
    "jp": "もくせいミニテーブル"
  },
  {
    "label": "Ftr_07134",
    "en": "wooden low table",
    "jp": "もくせいローテーブル"
  },
  {
    "label": "Ftr_07135",
    "en": "floor light",
    "jp": "グランドライト"
  },
  {
    "label": "Ftr_07136",
    "en": "cat grass",
    "jp": "ネコぐさ"
  },
  {
    "label": "Ftr_07137",
    "en": "wooden full-length mirror",
    "jp": "もくせいのすがたみ"
  },
  {
    "label": "Ftr_07138",
    "en": "Mom's tea cozy",
    "jp": "ははのポットカバー"
  },
  {
    "label": "Ftr_07139",
    "en": "Mom's art",
    "jp": "ははのアート"
  },
  {
    "label": "Ftr_07140",
    "en": "Mom's tissue box",
    "jp": "ははのティッシュケース"
  },
  {
    "label": "Ftr_07141",
    "en": "Mom's pen stand",
    "jp": "ははのペンたて"
  },
  {
    "label": "Ftr_07142",
    "en": "simple DIY workbench",
    "jp": "そぼくなDIYさぎょうだい"
  },
  {
    "label": "Ftr_07143",
    "en": "Mom's candle set",
    "jp": "ははのキャンドル"
  },
  {
    "label": "Ftr_07144",
    "en": "Mom's cushion",
    "jp": "ははのクッション"
  },
  {
    "label": "Ftr_07145",
    "en": "Mom's embroidery",
    "jp": "ははのししゅうかざり"
  },
  {
    "label": "Ftr_07146",
    "en": "Mom's homemade cake",
    "jp": "ははのてづくりケーキ"
  },
  {
    "label": "Ftr_07147",
    "en": "Mom's plushie",
    "jp": "ははのぬいぐるみ"
  },
  {
    "label": "Ftr_07148",
    "en": "life ring",
    "jp": "うきわ"
  },
  {
    "label": "Ftr_07150",
    "en": "blue corner",
    "jp": "あおコーナー"
  },
  {
    "label": "Ftr_07151",
    "en": "red corner",
    "jp": "あかコーナー"
  },
  {
    "label": "Ftr_07152",
    "en": "neutral corner",
    "jp": "ニュートラルコーナー"
  },
  {
    "label": "Ftr_07153",
    "en": "cypress bathtub",
    "jp": "ひのきぶろ"
  },
  {
    "label": "Ftr_07159",
    "en": "cardboard sofa",
    "jp": "ダンボールソファ"
  },
  {
    "label": "Ftr_07160",
    "en": "cardboard table",
    "jp": "ダンボールテーブル"
  },
  {
    "label": "Ftr_07161",
    "en": "cardboard bed",
    "jp": "ダンボールベッド"
  },
  {
    "label": "Ftr_07163",
    "en": "cardboard chair",
    "jp": "ダンボールチェア"
  },
  {
    "label": "Ftr_07189",
    "en": "studio spotlight",
    "jp": "スポットライト"
  },
  {
    "label": "Ftr_07190",
    "en": "studio wall spotlight",
    "jp": "かべかけスポットライト"
  },
  {
    "label": "Ftr_07229",
    "en": "handcart",
    "jp": "ネコぐるま"
  },
  {
    "label": "Ftr_07230",
    "en": "cosmos shower",
    "jp": "コスモスのシャワー"
  },
  {
    "label": "Ftr_07231",
    "en": "tulip surprise box",
    "jp": "チューリップのビックリばこ"
  },
  {
    "label": "Ftr_07232",
    "en": "mum cushion",
    "jp": "キクのクッション"
  },
  {
    "label": "Ftr_07233",
    "en": "windflower fan",
    "jp": "アネモネのせんぷうき"
  },
  {
    "label": "Ftr_07234",
    "en": "hyacinth lamp",
    "jp": "ヒヤシンスのランプ"
  },
  {
    "label": "Ftr_07235",
    "en": "rose bed",
    "jp": "バラのベッド"
  },
  {
    "label": "Ftr_07236",
    "en": "lily record player",
    "jp": "ユリのレコードプレーヤー"
  },
  {
    "label": "Ftr_07237",
    "en": "pansy table",
    "jp": "パンジーのテーブル"
  },
  {
    "label": "Ftr_07238",
    "en": "anchor statue",
    "jp": "いかりのオブジェ"
  },
  {
    "label": "Ftr_07247",
    "en": "silo",
    "jp": "サイロ"
  },
  {
    "label": "Ftr_07253",
    "en": "star clock",
    "jp": "スタークロック"
  },
  {
    "label": "Ftr_07257",
    "en": "pedal board",
    "jp": "エフェクターセット"
  },
  {
    "label": "Ftr_07258",
    "en": "modeling clay",
    "jp": "ねんどのおもちゃ"
  },
  {
    "label": "Ftr_07259",
    "en": "palm-tree lamp",
    "jp": "パームツリーランプ"
  },
  {
    "label": "Ftr_07260",
    "en": "floor sign",
    "jp": "フロアサイン"
  },
  {
    "label": "Ftr_07261",
    "en": "trophy case",
    "jp": "トロフィーケース"
  },
  {
    "label": "Ftr_07262",
    "en": "metal can",
    "jp": "いっとかん"
  },
  {
    "label": "Ftr_07264",
    "en": "champion's pennant",
    "jp": "ゆうしょうき"
  },
  {
    "label": "Ftr_07280",
    "en": "gears",
    "jp": "はぐるま"
  },
  {
    "label": "Ftr_07281",
    "en": "sleigh",
    "jp": "そり"
  },
  {
    "label": "Ftr_07282",
    "en": "hanging scroll",
    "jp": "かけじく"
  },
  {
    "label": "Ftr_07284",
    "en": "nutcracker",
    "jp": "くるみわりにんぎょう"
  },
  {
    "label": "Ftr_07317",
    "en": "zen-style stone",
    "jp": "わふうのはかいし"
  },
  {
    "label": "Ftr_07379",
    "en": "wind turbine",
    "jp": "ふうりょくはつでんき"
  },
  {
    "label": "Ftr_07390",
    "en": "leaf stool",
    "jp": "おちばスツール"
  },
  {
    "label": "Ftr_07391",
    "en": "tatami bed",
    "jp": "タタミのベッド"
  },
  {
    "label": "Ftr_07392",
    "en": "candy machine",
    "jp": "キャンディマシン"
  },
  {
    "label": "Ftr_07393",
    "en": "pond stone",
    "jp": "いしのみずうけ"
  },
  {
    "label": "Ftr_07408",
    "en": "maple-leaf pond stone",
    "jp": "いしのみずうけ～もみじ～"
  },
  {
    "label": "Ftr_07409",
    "en": "cherry-blossom pond stone",
    "jp": "いしのみずうけ～さくら～"
  },
  {
    "label": "Ftr_07452",
    "en": "raccoon figurine",
    "jp": "たぬきのおきもの"
  },
  {
    "label": "Ftr_07453",
    "en": "aluminum briefcase",
    "jp": "ジュラルミンケース"
  },
  {
    "label": "Ftr_07454",
    "en": "wooden toolbox",
    "jp": "もくせいのこうぐばこ"
  },
  {
    "label": "Ftr_07525",
    "en": "tool shelf",
    "jp": "こうぐだな"
  },
  {
    "label": "Ftr_07526",
    "en": "outdoor generator",
    "jp": "アウトドアはつでんき"
  },
  {
    "label": "Ftr_07527",
    "en": "flower stand",
    "jp": "スタンドフラワー"
  },
  {
    "label": "Ftr_07528",
    "en": "tool cart",
    "jp": "ツールカート"
  },
  {
    "label": "Ftr_07529",
    "en": "folding chair",
    "jp": "パイプイス"
  },
  {
    "label": "Ftr_07531",
    "en": "ironing board",
    "jp": "アイロンだい"
  },
  {
    "label": "Ftr_07535",
    "en": "kettlebell",
    "jp": "ケトルベル"
  },
  {
    "label": "Ftr_07599",
    "en": "board game",
    "jp": "ボードゲーム"
  },
  {
    "label": "Ftr_07653",
    "en": "speed bag",
    "jp": "スピードバッグ"
  },
  {
    "label": "Ftr_07654",
    "en": "electric kick scooter",
    "jp": "でんどうキックボード"
  },
  {
    "label": "Ftr_07681",
    "en": "loom",
    "jp": "はたおりき"
  },
  {
    "label": "Ftr_07682",
    "en": "kimono stand",
    "jp": "きものスタンド"
  },
  {
    "label": "Ftr_07788",
    "en": "leaf campfire",
    "jp": "おちばのたきび"
  },
  {
    "label": "Ftr_07789",
    "en": "drying rack",
    "jp": "ものほしスタンド"
  },
  {
    "label": "Ftr_07795",
    "en": "stone lion-dog",
    "jp": "せきしし"
  },
  {
    "label": "Ftr_07796",
    "en": "imperial dining table",
    "jp": "ちゅうかテーブル"
  },
  {
    "label": "Ftr_07797",
    "en": "imperial dining chair",
    "jp": "ちゅうかなイス"
  },
  {
    "label": "Ftr_07800",
    "en": "protein shaker bottle",
    "jp": "プロテインシェイカー"
  },
  {
    "label": "Ftr_07801",
    "en": "pet food bowl",
    "jp": "ペットのごはん"
  },
  {
    "label": "Ftr_07802",
    "en": "pet bed",
    "jp": "ペットのベッド"
  },
  {
    "label": "Ftr_07803",
    "en": "kitty litter box",
    "jp": "ネコのトイレ"
  },
  {
    "label": "Ftr_07804",
    "en": "knife block",
    "jp": "ほうちょうスタンド"
  },
  {
    "label": "Ftr_07805",
    "en": "butter churn",
    "jp": "バターかくはんき"
  },
  {
    "label": "Ftr_07838",
    "en": "fresh cooler",
    "jp": "イカすクーラーボックス"
  },
  {
    "label": "Ftr_07839",
    "en": "artisanal bug cage",
    "jp": "アリがたいムシかご"
  },
  {
    "label": "Ftr_07845",
    "en": "pull-up-bar stand",
    "jp": "けんすいスタンド"
  },
  {
    "label": "Ftr_07865",
    "en": "elaborate kimono stand",
    "jp": "ごうかなきものスタンド"
  },
  {
    "label": "Ftr_07867",
    "en": "angled signpost",
    "jp": "ナナメのみちしるべ"
  },
  {
    "label": "Ftr_07868",
    "en": "surfboard",
    "jp": "サーフボード"
  },
  {
    "label": "Ftr_08031",
    "en": "fountain",
    "jp": "ふんすい"
  },
  {
    "label": "Ftr_08096",
    "en": "record box",
    "jp": "レコードボックス"
  },
  {
    "label": "Ftr_08150",
    "en": "South Pole",
    "jp": "なんきょくてん"
  },
  {
    "label": "Ftr_08225",
    "en": "arcade fighting game",
    "jp": "アーケードゲーム（FTG）"
  },
  {
    "label": "Ftr_08226",
    "en": "arcade combat game",
    "jp": "アーケードゲーム（STG）"
  },
  {
    "label": "Ftr_08227",
    "en": "arcade mahjong game",
    "jp": "アーケードゲーム（TBL）"
  },
  {
    "label": "Ftr_08297",
    "en": "stovetop espresso maker",
    "jp": "エスプレッソメーカー"
  },
  {
    "label": "Ftr_08298",
    "en": "bunk bed",
    "jp": "にだんベッド"
  },
  {
    "label": "Ftr_08415",
    "en": "imperial dining lantern",
    "jp": "ちゅうかなランタン"
  },
  {
    "label": "Ftr_08417",
    "en": "wall-mounted tool board",
    "jp": "かべかけツールハンガー"
  },
  {
    "label": "Ftr_08418",
    "en": "fragrance diffuser",
    "jp": "アロマディフューザー"
  },
  {
    "label": "Ftr_08419",
    "en": "garden wagon",
    "jp": "えんげいワゴン"
  },
  {
    "label": "Ftr_08464",
    "en": "Newton's cradle",
    "jp": "ニュートンのゆりかご"
  },
  {
    "label": "Ftr_08465",
    "en": "velvet stool",
    "jp": "ピアノのまるいす"
  },
  {
    "label": "Ftr_08608",
    "en": "pyramid",
    "jp": "ピラミッド"
  },
  {
    "label": "Ftr_08702",
    "en": "sphinx",
    "jp": "スフィンクス"
  },
  {
    "label": "Ftr_08825",
    "en": "golden casket",
    "jp": "おうごんのひつぎ"
  },
  {
    "label": "Ftr_08826",
    "en": "wooden table mirror",
    "jp": "もくせいテーブルミラー"
  },
  {
    "label": "Ftr_09502",
    "en": "clothes closet",
    "jp": "ファッションケース"
  },
  {
    "label": "Ftr_09503",
    "en": "mic stand",
    "jp": "スタンドマイク"
  },
  {
    "label": "Ftr_09565",
    "en": "mobile",
    "jp": "モビール"
  },
  {
    "label": "Ftr_09568",
    "en": "construction sign",
    "jp": "こうじちゅうかんばん"
  },
  {
    "label": "Ftr_09584",
    "en": "beach ball",
    "jp": "ビーチボール"
  },
  {
    "label": "Ftr_09619",
    "en": "utility pole",
    "jp": "でんちゅう"
  },
  {
    "label": "Ftr_09642",
    "en": "iron closet",
    "jp": "アイアンクロゼット"
  },
  {
    "label": "Ftr_09698",
    "en": "Baby panda",
    "jp": "パンダのシャオシャオ"
  },
  {
    "label": "Ftr_09699",
    "en": "Mama panda",
    "jp": "パンダのチュンチュン"
  },
  {
    "label": "Ftr_09700",
    "en": "Papa panda",
    "jp": "パンダのタアタア"
  },
  {
    "label": "Ftr_09766",
    "en": "mini fridge",
    "jp": "ミニれいぞうこ"
  },
  {
    "label": "Ftr_09767",
    "en": "garbage bin",
    "jp": "キャスターペール"
  },
  {
    "label": "Ftr_09814",
    "en": "lucky gold cat",
    "jp": "きんのまねきねこ"
  },
  {
    "label": "Ftr_10244",
    "en": "fragrance sticks",
    "jp": "アロマスティック"
  },
  {
    "label": "Ftr_10742",
    "en": "bamboo stool",
    "jp": "たけのスツール"
  },
  {
    "label": "Ftr_10743",
    "en": "bamboo speaker",
    "jp": "たけのスピーカー"
  },
  {
    "label": "Ftr_11098",
    "en": "mantis-head model",
    "jp": "カマキリヘッド"
  },
  {
    "label": "Ftr_11099",
    "en": "grasshopper-head model",
    "jp": "バッタヘッド"
  },
  {
    "label": "Ftr_11100",
    "en": "wasp-head model",
    "jp": "ハチヘッド"
  },
  {
    "label": "Ftr_11127",
    "en": "mounted black bass",
    "jp": "かべかけブラックバス"
  },
  {
    "label": "Ftr_11128",
    "en": "mounted blue marlin",
    "jp": "かべかけカジキ"
  },
  {
    "label": "Ftr_11182",
    "en": "butterfly-fish model",
    "jp": "かべかけチョウチョウウオ"
  },
  {
    "label": "Ftr_11260",
    "en": "golden arowana model",
    "jp": "きんのアロワナ"
  },
  {
    "label": "Ftr_11261",
    "en": "golden gears",
    "jp": "おうごんのはぐるま"
  },
  {
    "label": "Ftr_11283",
    "en": "brine-shrimp aquarium",
    "jp": "アルテミアすいそう"
  },
  {
    "label": "Ftr_11866",
    "en": "ant farm",
    "jp": "アントファーム"
  },
  {
    "label": "Ftr_11941",
    "en": "stone arch",
    "jp": "ストーンアーチ"
  },
  {
    "label": "Ftr_11942",
    "en": "street piano",
    "jp": "ストリートピアノ"
  },
  {
    "label": "Ftr_11943",
    "en": "stone tablet",
    "jp": "せきひ"
  },
  {
    "label": "Ftr_12139",
    "en": "DAL mug",
    "jp": "ＤＡＬマグカップ"
  },
  {
    "label": "Ftr_12140",
    "en": "DAL model plane",
    "jp": "ＤＡＬのひこうきもけい"
  },
  {
    "label": "Ftr_12206",
    "en": "flat garden rock",
    "jp": "ひくいにわいし"
  },
  {
    "label": "Ftr_12207",
    "en": "arcade seat",
    "jp": "ゲームセンターのイス"
  },
  {
    "label": "Ftr_12208",
    "en": "mossy garden rock",
    "jp": "こけむしたにわいし"
  },
  {
    "label": "Ftr_12230",
    "en": "festive top set",
    "jp": "おまつりのコマ"
  },
  {
    "label": "Ftr_12241",
    "en": "Hello Kitty drawers",
    "jp": "ハローキティなタンス"
  },
  {
    "label": "Ftr_12242",
    "en": "Kiki & Lala clock",
    "jp": "キキ&ララなとけい"
  },
  {
    "label": "Ftr_12243",
    "en": "Kiki & Lala table",
    "jp": "キキ&ララなテーブル"
  },
  {
    "label": "Ftr_12244",
    "en": "Kiki & Lala sofa",
    "jp": "キキ&ララなソファ"
  },
  {
    "label": "Ftr_12245",
    "en": "Kiki & Lala cloud maker",
    "jp": "キキ&ララなくもせいぞうき"
  },
  {
    "label": "Ftr_12246",
    "en": "Cinnamoroll table",
    "jp": "シナモロールなテーブル"
  },
  {
    "label": "Ftr_12247",
    "en": "Cinnamoroll parasol",
    "jp": "シナモロールなパラソル"
  },
  {
    "label": "Ftr_12248",
    "en": "Cinnamoroll signage",
    "jp": "シナモロールなボード"
  },
  {
    "label": "Ftr_12249",
    "en": "Kerokerokeroppi hallway",
    "jp": "けろけろけろっぴなろうか"
  },
  {
    "label": "Ftr_12250",
    "en": "Cinnamoroll stool",
    "jp": "シナモロールなスツール"
  },
  {
    "label": "Ftr_12251",
    "en": "Cinnamoroll tray",
    "jp": "シナモロールなトレー"
  },
  {
    "label": "Ftr_12252",
    "en": "Kerokerokeroppi tray",
    "jp": "けろけろけろっぴなおぜん"
  },
  {
    "label": "Ftr_12253",
    "en": "Kerokerokeroppi snack",
    "jp": "けろけろけろっぴなおかし"
  },
  {
    "label": "Ftr_12254",
    "en": "Kerokerokeroppi lantern",
    "jp": "けろけろけろっぴなあかり"
  },
  {
    "label": "Ftr_12255",
    "en": "Kerokerokeroppi bridge",
    "jp": "けろけろけろっぴなはし"
  },
  {
    "label": "Ftr_12256",
    "en": "Kiki & Lala bed",
    "jp": "キキ&ララなベッド"
  },
  {
    "label": "Ftr_12257",
    "en": "Pompompurin TV",
    "jp": "ポムポムプリンなテレビ"
  },
  {
    "label": "Ftr_12258",
    "en": "Pompompurin pudding",
    "jp": "ポムポムプリンなプリン"
  },
  {
    "label": "Ftr_12259",
    "en": "Pompompurin table",
    "jp": "ポムポムプリンなテーブル"
  },
  {
    "label": "Ftr_12260",
    "en": "Pompompurin rack",
    "jp": "ポムポムプリンなラック"
  },
  {
    "label": "Ftr_12261",
    "en": "Pompompurin chair",
    "jp": "ポムポムプリンなチェア"
  },
  {
    "label": "Ftr_12262",
    "en": "Pompompurin bed",
    "jp": "ポムポムプリンなベッド"
  },
  {
    "label": "Ftr_12263",
    "en": "My Melody table",
    "jp": "マイメロディなテーブル"
  },
  {
    "label": "Ftr_12264",
    "en": "My Melody dresser",
    "jp": "マイメロディなドレッサー"
  },
  {
    "label": "Ftr_12265",
    "en": "My Melody chair",
    "jp": "マイメロディなイス"
  },
  {
    "label": "Ftr_12266",
    "en": "My Melody clock",
    "jp": "マイメロディなとけい"
  },
  {
    "label": "Ftr_12267",
    "en": "My Melody bed",
    "jp": "マイメロディなベッド"
  },
  {
    "label": "Ftr_12268",
    "en": "Hello Kitty clock",
    "jp": "ハローキティなとけい"
  },
  {
    "label": "Ftr_12269",
    "en": "Hello Kitty chair",
    "jp": "ハローキティなイス"
  },
  {
    "label": "Ftr_12270",
    "en": "Hello Kitty table",
    "jp": "ハローキティなテーブル"
  },
  {
    "label": "Ftr_12271",
    "en": "Hello Kitty bed",
    "jp": "ハローキティなベッド"
  },
  {
    "label": "Ftr_12272",
    "en": "Hello Kitty planter",
    "jp": "ハローキティなプランター"
  },
  {
    "label": "Ftr_12273",
    "en": "Cinnamoroll sofa",
    "jp": "シナモロールなソファ"
  },
  {
    "label": "Ftr_12274",
    "en": "Kerokerokeroppi doll",
    "jp": "てるてるなにんぎょう"
  },
  {
    "label": "Ftr_12332",
    "en": "natural square table",
    "jp": "ナチュラルなスクエアテーブル"
  },
  {
    "label": "Ftr_12368",
    "en": "Market Place decoration",
    "jp": "こもれびひろばのかざり"
  },
  {
    "label": "Ftr_12369",
    "en": "fortune-cookie cart",
    "jp": "フォーチュンクッキーワゴン"
  },
  {
    "label": "Ftr_12370",
    "en": "Brake Tapper",
    "jp": "OKゲームマシン"
  },
  {
    "label": "Ftr_12371",
    "en": "OK Motors sign",
    "jp": "OKモータースのかんばん"
  },
  {
    "label": "Ftr_12372",
    "en": "Pocket modern camper",
    "jp": "キャンピングカーのもけいB"
  },
  {
    "label": "Ftr_12373",
    "en": "Pocket vintage camper",
    "jp": "キャンピングカーのもけいA"
  },
  {
    "label": "Ftr_12374",
    "en": "campsite sign",
    "jp": "キャンプじょうのかんばん"
  },
  {
    "label": "Ftr_12398",
    "en": "Bunny Day arch",
    "jp": "イースターなアーチ"
  },
  {
    "label": "Ftr_12401",
    "en": "wedding bench",
    "jp": "ウェディングなベンチ"
  },
  {
    "label": "Ftr_12402",
    "en": "wedding arch",
    "jp": "ウェディングなアーチ"
  },
  {
    "label": "Ftr_12403",
    "en": "wedding cake",
    "jp": "ウェディングケーキ"
  },
  {
    "label": "Ftr_12404",
    "en": "wedding head table",
    "jp": "ウェディングなメインテーブル"
  },
  {
    "label": "Ftr_12405",
    "en": "wedding chair",
    "jp": "ウェディングなチェア"
  },
  {
    "label": "Ftr_12406",
    "en": "wedding table",
    "jp": "ウェディングなテーブル"
  },
  {
    "label": "Ftr_12407",
    "en": "wedding decoration",
    "jp": "ウェディングなかべかざり"
  },
  {
    "label": "Ftr_12408",
    "en": "wedding candle set",
    "jp": "ウェディングなキャンドル"
  },
  {
    "label": "Ftr_12409",
    "en": "wedding pipe organ",
    "jp": "ウェディングなパイプオルガン"
  },
  {
    "label": "Ftr_12410",
    "en": "wedding welcome board",
    "jp": "ウェディングなウェルカムボード"
  },
  {
    "label": "Ftr_12411",
    "en": "wedding flower stand",
    "jp": "ウェディングなフラワースタンド"
  },
  {
    "label": "Ftr_12412",
    "en": "wobbling Zipper toy",
    "jp": "ぴょんたろうのおきあがりこぼし"
  },
  {
    "label": "Ftr_12413",
    "en": "Bunny Day lamp",
    "jp": "イースターなランプ"
  },
  {
    "label": "Ftr_12414",
    "en": "Bunny Day bed",
    "jp": "イースターなベッド"
  },
  {
    "label": "Ftr_12415",
    "en": "Bunny Day stool",
    "jp": "イースターなスツール"
  },
  {
    "label": "Ftr_12417",
    "en": "Bunny Day glowy garland",
    "jp": "イースターなライトガーランド"
  },
  {
    "label": "Ftr_12418",
    "en": "Bunny Day wall clock",
    "jp": "イースターなウォールクロック"
  },
  {
    "label": "Ftr_12419",
    "en": "Bunny Day merry balloons",
    "jp": "イースターなバルーンA"
  },
  {
    "label": "Ftr_12420",
    "en": "Bunny Day vanity",
    "jp": "イースターなドレッサー"
  },
  {
    "label": "Ftr_12421",
    "en": "Bunny Day festive balloons",
    "jp": "イースターなバルーンB"
  },
  {
    "label": "Ftr_12436",
    "en": "Bunny Day table",
    "jp": "イースターなテーブル"
  },
  {
    "label": "Ftr_12437",
    "en": "Bunny Day wardrobe",
    "jp": "イースターなクロゼット"
  },
  {
    "label": "Ftr_12438",
    "en": "Bunny Day basket",
    "jp": "イースターなバスケット"
  },
  {
    "label": "Ftr_12470",
    "en": "thank-you Mom mug",
    "jp": "ははのひサンキューマグカップ"
  },
  {
    "label": "Ftr_12471",
    "en": "thank-you Dad mug",
    "jp": "ちちのひサンキューマグカップ"
  },
  {
    "label": "Ftr_12472",
    "en": "Rover's briefcase",
    "jp": "みしらぬネコのかばん"
  },
  {
    "label": "Ftr_12484",
    "en": "fossil plaque",
    "jp": "かせきのかべかざり"
  },
  {
    "label": "Ftr_12485",
    "en": "bug plaque",
    "jp": "ムシのかべかざり"
  },
  {
    "label": "Ftr_12486",
    "en": "fish plaque",
    "jp": "サカナのかべかざり"
  },
  {
    "label": "Ftr_12543",
    "en": "Nintendo Switch",
    "jp": "Nintendo Switch"
  },
  {
    "label": "Ftr_12552",
    "en": "mermaid table",
    "jp": "マーメイドなテーブル"
  },
  {
    "label": "Ftr_12553",
    "en": "mermaid shelf",
    "jp": "マーメイドなシェルフ"
  },
  {
    "label": "Ftr_12554",
    "en": "mermaid vanity",
    "jp": "マーメイドなドレッサー"
  },
  {
    "label": "Ftr_12555",
    "en": "mermaid screen",
    "jp": "マーメイドなスクリーン"
  },
  {
    "label": "Ftr_12556",
    "en": "mermaid lamp",
    "jp": "マーメイドなランプ"
  },
  {
    "label": "Ftr_12557",
    "en": "mermaid wall clock",
    "jp": "マーメイドなウォールクロック"
  },
  {
    "label": "Ftr_12558",
    "en": "mermaid bed",
    "jp": "マーメイドなベッド"
  },
  {
    "label": "Ftr_12559",
    "en": "mermaid closet",
    "jp": "マーメイドなクロゼット"
  },
  {
    "label": "Ftr_12560",
    "en": "mermaid sofa",
    "jp": "マーメイドなソファ"
  },
  {
    "label": "Ftr_12561",
    "en": "mermaid dresser",
    "jp": "マーメイドなチェスト"
  },
  {
    "label": "Ftr_12562",
    "en": "mermaid chair",
    "jp": "マーメイドなチェア"
  },
  {
    "label": "Ftr_12565",
    "en": "Reese & Cyrus photo plate",
    "jp": "リサとカイゾーのえざら"
  },
  {
    "label": "Ftr_12572",
    "en": "sideways pirate barrel",
    "jp": "よこむきのかいぞくのたる"
  },
  {
    "label": "Ftr_12573",
    "en": "pirate-treasure chest",
    "jp": "かいぞくのたからばこ"
  },
  {
    "label": "Ftr_12574",
    "en": "pirate barrel",
    "jp": "かいぞくのたる"
  },
  {
    "label": "Ftr_12579",
    "en": "ACNH Nintendo Switch",
    "jp": "どうぶつのもりのSwitch"
  },
  {
    "label": "Ftr_12741",
    "en": "world map",
    "jp": "せかいちず"
  },
  {
    "label": "Ftr_12921",
    "en": "rodeo-style springy ride-on",
    "jp": "ロデオふうスプリングゆうぐ"
  },
  {
    "label": "Ftr_12949",
    "en": "spooky standing lamp",
    "jp": "ハロウィンなスタンド"
  },
  {
    "label": "Ftr_12951",
    "en": "spooky candy set",
    "jp": "ハロウィンなおかしプレート"
  },
  {
    "label": "Ftr_13221",
    "en": "Luna's bed",
    "jp": "ゆめみのベッド"
  },
  {
    "label": "Ftr_13222",
    "en": "spooky garland",
    "jp": "ハロウィンなガーランド"
  },
  {
    "label": "Ftr_13223",
    "en": "spooky table setting",
    "jp": "ハロウィンテーブルセッティング"
  },
  {
    "label": "Ftr_13241",
    "en": "Toy Day sleigh",
    "jp": "クリスマスなそり"
  },
  {
    "label": "Ftr_13242",
    "en": "RC helicopter",
    "jp": "ラジコンヘリコプター"
  },
  {
    "label": "Ftr_13243",
    "en": "puppy plushie",
    "jp": "いぬのぬいぐるみ"
  },
  {
    "label": "Ftr_13244",
    "en": "gift pile",
    "jp": "プレゼントのやま"
  },
  {
    "label": "Ftr_13245",
    "en": "Yule log",
    "jp": "ブッシュ・ド・ノエル"
  },
  {
    "label": "Ftr_13246",
    "en": "pop-up book",
    "jp": "しかけえほん"
  },
  {
    "label": "Ftr_13247",
    "en": "tin robot",
    "jp": "ブリキのロボット"
  },
  {
    "label": "Ftr_13248",
    "en": "Toy Day stockings",
    "jp": "クリスマスなかべかけソックス"
  },
  {
    "label": "Ftr_13249",
    "en": "kids' tent",
    "jp": "キッズテント"
  },
  {
    "label": "Ftr_13250",
    "en": "mini circuit",
    "jp": "ミニサーキット"
  },
  {
    "label": "Ftr_13251",
    "en": "dinosaur toy",
    "jp": "きょうりゅうのおもちゃ"
  },
  {
    "label": "Ftr_13252",
    "en": "dollhouse",
    "jp": "ドールハウス"
  },
  {
    "label": "Ftr_13293",
    "en": "Ring-Con",
    "jp": "リングコン"
  },
  {
    "label": "Ftr_13315",
    "en": "Nook Inc. poster",
    "jp": "たぬきかいはつのポスター"
  },
  {
    "label": "Ftr_13353",
    "en": "Jack's portrait",
    "jp": "パンプキングのしょうぞうが"
  },
  {
    "label": "Ftr_13447",
    "en": "Turkey Day garden stand",
    "jp": "サンクスギビングベーススタンド"
  },
  {
    "label": "Ftr_13448",
    "en": "Turkey Day hearth",
    "jp": "サンクスギビングなだんろ"
  },
  {
    "label": "Ftr_13449",
    "en": "Turkey Day decorations",
    "jp": "サンクスギビングデコレーション"
  },
  {
    "label": "Ftr_13450",
    "en": "Turkey Day chair",
    "jp": "サンクスギビングなチェア"
  },
  {
    "label": "Ftr_13453",
    "en": "Turkey Day table",
    "jp": "サンクスギビングなテーブル"
  },
  {
    "label": "Ftr_13459",
    "en": "Yut Nori",
    "jp": "ユンノリ"
  },
  {
    "label": "Ftr_13462",
    "en": "twelve-grape dish",
    "jp": "12つぶのぶどう"
  },
  {
    "label": "Ftr_13463",
    "en": "berliner",
    "jp": "ベルリーナー"
  },
  {
    "label": "Ftr_13488",
    "en": "chocolate heart",
    "jp": "ハートのチョコレート"
  },
  {
    "label": "Ftr_13490",
    "en": "zodiac ox figurine",
    "jp": "うしのおきもの"
  },
  {
    "label": "Ftr_13543",
    "en": "2021 celebratory arch",
    "jp": "2021ねんのアーチ"
  },
  {
    "label": "Ftr_13767",
    "en": "Festivale garland",
    "jp": "カーニバルなガーランド"
  },
  {
    "label": "Ftr_13770",
    "en": "Festivale parasol",
    "jp": "カーニバルなパラソル"
  },
  {
    "label": "Ftr_13771",
    "en": "Festivale float",
    "jp": "カーニバルなフロート"
  },
  {
    "label": "Ftr_13772",
    "en": "Festivale balloon lamp",
    "jp": "カーニバルなバルーンランプ"
  },
  {
    "label": "Ftr_13773",
    "en": "Festivale stall",
    "jp": "カーニバルなやたい"
  },
  {
    "label": "Ftr_13774",
    "en": "Festivale drum",
    "jp": "カーニバルなパーカッション"
  },
  {
    "label": "Ftr_13775",
    "en": "Festivale stage",
    "jp": "カーニバルなステージ"
  },
  {
    "label": "Ftr_13776",
    "en": "Festivale confetti machine",
    "jp": "カーニバルなかみふぶきマシン"
  },
  {
    "label": "Ftr_13777",
    "en": "Festivale lamp",
    "jp": "カーニバルなランプ"
  },
  {
    "label": "Ftr_13778",
    "en": "Festivale flag",
    "jp": "カーニバルなフラッグ"
  },
  {
    "label": "Ftr_13797",
    "en": "New Year's noodles",
    "jp": "としこしそば"
  },
  {
    "label": "Ftr_13799",
    "en": "Olivier salad",
    "jp": "オリビエサラダ"
  },
  {
    "label": "Ftr_13818",
    "en": "Turkey Day casserole",
    "jp": "サンクスギビングなキャセロール"
  },
  {
    "label": "Ftr_13819",
    "en": "Turkey Day wheat decor",
    "jp": "サンクスギビングなむぎかざり"
  },
  {
    "label": "Ftr_13820",
    "en": "Turkey Day table setting",
    "jp": "サンクスギビングテーブルウェア"
  },
  {
    "label": "Ftr_13821",
    "en": "? Block",
    "jp": "ハテナブロック"
  },
  {
    "label": "Ftr_13822",
    "en": "block",
    "jp": "レンガブロック"
  },
  {
    "label": "Ftr_13823",
    "en": "pipe",
    "jp": "どかん"
  },
  {
    "label": "Ftr_13824",
    "en": "Goal Pole",
    "jp": "ゴールポール"
  },
  {
    "label": "Ftr_13825",
    "en": "Super Star",
    "jp": "スーパースター"
  },
  {
    "label": "Ftr_13826",
    "en": "Fire Flower",
    "jp": "ファイアフラワー"
  },
  {
    "label": "Ftr_13827",
    "en": "Super Mushroom",
    "jp": "スーパーキノコ"
  },
  {
    "label": "Ftr_13828",
    "en": "1-Up Mushroom",
    "jp": "1UPキノコ"
  },
  {
    "label": "Ftr_13829",
    "en": "Shell",
    "jp": "こうら"
  },
  {
    "label": "Ftr_13830",
    "en": "coin",
    "jp": "コイン"
  },
  {
    "label": "Ftr_13831",
    "en": "large Mushroom Platform",
    "jp": "キノコちけいL"
  },
  {
    "label": "Ftr_13832",
    "en": "small Mushroom Platform",
    "jp": "キノコちけいS"
  },
  {
    "label": "Ftr_13833",
    "en": "Thwomp",
    "jp": "ドッスン"
  },
  {
    "label": "Ftr_13867",
    "en": "Resetti model",
    "jp": "グラウンドホッグのもけい"
  },
  {
    "label": "Ftr_13927",
    "en": "Nintendo Switch Lite",
    "jp": "Nintendo Switch Lite"
  },
  {
    "label": "Ftr_13930",
    "en": "set of stockings",
    "jp": "かべかけソックス"
  },
  {
    "label": "Ftr_14005",
    "en": "Bunny Day topiary",
    "jp": "イースターなトピアリー"
  },
  {
    "label": "Ftr_14006",
    "en": "Bunny Day tree",
    "jp": "イースターなツリー"
  },
  {
    "label": "Ftr_14007",
    "en": "Bunny Day garden flag",
    "jp": "イースターなガーデンフラッグ"
  },
  {
    "label": "Ftr_14008",
    "en": "Bunny Day planter box",
    "jp": "イースターなプランター"
  },
  {
    "label": "Ftr_14009",
    "en": "Bunny Day candy",
    "jp": "イースターなおかし"
  },
  {
    "label": "Ftr_14020",
    "en": "π pie",
    "jp": "πパイ"
  },
  {
    "label": "Ftr_14023",
    "en": "cool globe",
    "jp": "かっこいいちきゅうぎ"
  },
  {
    "label": "Ftr_14024",
    "en": "carnations",
    "jp": "カーネーション"
  },
  {
    "label": "Ftr_14029",
    "en": "heart-shaped bouquet",
    "jp": "ハートのバラブーケ"
  },
  {
    "label": "Ftr_14041",
    "en": "forsythia",
    "jp": "レンギョウ"
  },
  {
    "label": "Ftr_14142",
    "en": "first-anniversary cake",
    "jp": "1stアニバーサリーケーキ"
  },
  {
    "label": "Ftr_14266",
    "en": "floating block",
    "jp": "くうちゅうのレンガブロック"
  },
  {
    "label": "Ftr_14298",
    "en": "aloha-edition carrying case",
    "jp": "たぬきアロハSwitchケース"
  },
  {
    "label": "Ftr_14340",
    "en": "whoopee cushion",
    "jp": "ブーブークッション"
  },
  {
    "label": "Ftr_14355",
    "en": "festival zongzi",
    "jp": "たんごせつのちまき"
  },
  {
    "label": "Ftr_14356",
    "en": "surichwi tteok",
    "jp": "スリチトック"
  },
  {
    "label": "Ftr_14357",
    "en": "double Gloucester cheese",
    "jp": "ダブルグロスターチーズ"
  },
  {
    "label": "Ftr_14476",
    "en": "nuptial bell",
    "jp": "ウェディングベル"
  },
  {
    "label": "Ftr_14477",
    "en": "nuptial ring pillow",
    "jp": "リングピロー"
  },
  {
    "label": "Ftr_14532",
    "en": "art plaque",
    "jp": "アートのかべかざり"
  }
];

itemNames.art = [
  {
    "label": "Picture_00002",
    "en": "scenic painting",
    "jp": "みごとなめいが"
  },
  {
    "label": "Picture_00006",
    "en": "graceful painting",
    "jp": "しなやかなめいが"
  },
  {
    "label": "Picture_00010",
    "en": "quaint painting",
    "jp": "おちついためいが"
  },
  {
    "label": "Picture_00014",
    "en": "basic painting",
    "jp": "いさましいめいが"
  },
  {
    "label": "Picture_00018",
    "en": "famous painting",
    "jp": "ゆうめいなめいが"
  },
  {
    "label": "Picture_00020",
    "en": "perfect painting",
    "jp": "すばらしいめいが"
  },
  {
    "label": "Picture_00024",
    "en": "serene painting",
    "jp": "たおやかなめいが"
  },
  {
    "label": "Picture_00028",
    "en": "wistful painting",
    "jp": "すてきなめいが"
  },
  {
    "label": "Picture_00032",
    "en": "moving painting",
    "jp": "きれいなめいが"
  },
  {
    "label": "Picture_00034",
    "en": "warm painting",
    "jp": "いいかんじのめいが"
  },
  {
    "label": "Picture_00038",
    "en": "dynamic painting",
    "jp": "いきなめいが"
  },
  {
    "label": "Picture_00042",
    "en": "jolly painting",
    "jp": "おもしろいめいが"
  },
  {
    "label": "Picture_00044",
    "en": "common painting",
    "jp": "よくみるめいが"
  },
  {
    "label": "Picture_00046",
    "en": "proper painting",
    "jp": "にぎやかなめいが"
  },
  {
    "label": "Picture_00048",
    "en": "nice painting",
    "jp": "いいめいが"
  },
  {
    "label": "Picture_00050",
    "en": "flowery painting",
    "jp": "たぐいまれなるめいが"
  },
  {
    "label": "Picture_00052",
    "en": "moody painting",
    "jp": "ちからづよいめいが"
  },
  {
    "label": "Picture_00056",
    "en": "amazing painting",
    "jp": "すごいめいが"
  },
  {
    "label": "Picture_00066",
    "en": "scary painting",
    "jp": "いなせなめいが"
  },
  {
    "label": "Picture_00068",
    "en": "worthy painting",
    "jp": "かちのあるめいが"
  },
  {
    "label": "Picture_00072",
    "en": "solemn painting",
    "jp": "おごそかなめいが"
  },
  {
    "label": "Picture_00078",
    "en": "calm painting",
    "jp": "おだやかなめいが"
  },
  {
    "label": "Picture_12618",
    "en": "twinkling painting",
    "jp": "またたくめいが"
  },
  {
    "label": "Picture_12619",
    "en": "academic painting",
    "jp": "アカデミックなめいが"
  },
  {
    "label": "Picture_12621",
    "en": "sinking painting",
    "jp": "しずみゆくめいが"
  },
  {
    "label": "Picture_12622",
    "en": "detailed painting",
    "jp": "ちみつなめいが"
  },
  {
    "label": "Picture_12624",
    "en": "glowing painting",
    "jp": "ひかりのめいが"
  },
  {
    "label": "Picture_12625",
    "en": "mysterious painting",
    "jp": "なぞめいためいが"
  },
  {
    "label": "PictureFake_00005",
    "en": "graceful painting",
    "jp": "しなやかなめいが"
  },
  {
    "label": "PictureFake_00009",
    "en": "quaint painting",
    "jp": "おちついためいが"
  },
  {
    "label": "PictureFake_00013",
    "en": "basic painting",
    "jp": "いさましいめいが"
  },
  {
    "label": "PictureFake_00017",
    "en": "famous painting",
    "jp": "ゆうめいなめいが"
  },
  {
    "label": "PictureFake_00023",
    "en": "serene painting",
    "jp": "たおやかなめいが"
  },
  {
    "label": "PictureFake_00027",
    "en": "wistful painting",
    "jp": "すてきなめいが"
  },
  {
    "label": "PictureFake_00031",
    "en": "moving painting",
    "jp": "きれいなめいが"
  },
  {
    "label": "PictureFake_00041",
    "en": "jolly painting",
    "jp": "おもしろいめいが"
  },
  {
    "label": "PictureFake_00055",
    "en": "amazing painting",
    "jp": "すごいめいが"
  },
  {
    "label": "PictureFake_00065",
    "en": "scary painting",
    "jp": "いなせなめいが"
  },
  {
    "label": "PictureFake_00071",
    "en": "solemn painting",
    "jp": "おごそかなめいが"
  },
  {
    "label": "PictureFake_12620",
    "en": "academic painting",
    "jp": "アカデミックなめいが"
  },
  {
    "label": "PictureFake_12623",
    "en": "detailed painting",
    "jp": "ちみつなめいが"
  },
  {
    "label": "PictureFake_12629",
    "en": "scenic painting",
    "jp": "みごとなめいが"
  },
  {
    "label": "Sculpture_00076",
    "en": "wild painting right half",
    "jp": "あらぶるめいがのみぎ"
  },
  {
    "label": "Sculpture_01331",
    "en": "motherly statue",
    "jp": "ぼせいあふれるちょうこく"
  },
  {
    "label": "Sculpture_01333",
    "en": "gallant statue",
    "jp": "りりしいちょうこく"
  },
  {
    "label": "Sculpture_01335",
    "en": "robust statue",
    "jp": "たくましいちょうこく"
  },
  {
    "label": "Sculpture_01337",
    "en": "ancient statue",
    "jp": "いにしえのちょうこく"
  },
  {
    "label": "Sculpture_01339",
    "en": "great statue",
    "jp": "いだいなちょうこく"
  },
  {
    "label": "Sculpture_01341",
    "en": "beautiful statue",
    "jp": "うつくしいちょうこく"
  },
  {
    "label": "Sculpture_01343",
    "en": "mystic statue",
    "jp": "しんぴてきなちょうこく"
  },
  {
    "label": "Sculpture_01345",
    "en": "valiant statue",
    "jp": "こうごうしいちょうこく"
  },
  {
    "label": "Sculpture_12533",
    "en": "rock-head statue",
    "jp": "いしあたまなちょうこく"
  },
  {
    "label": "Sculpture_12535",
    "en": "informative statue",
    "jp": "てがかりのちょうこく"
  },
  {
    "label": "Sculpture_12537",
    "en": "tremendous statue",
    "jp": "とてつもないちょうこく"
  },
  {
    "label": "Sculpture_12539",
    "en": "warrior statue",
    "jp": "もののふのちょうこく"
  },
  {
    "label": "Sculpture_12541",
    "en": "familiar statue",
    "jp": "なじみのあるちょうこく"
  },
  {
    "label": "Sculpture_12570",
    "en": "wild painting left half",
    "jp": "あらぶるめいがのひだり"
  },
  {
    "label": "SculptureFake_00075",
    "en": "wild painting right half",
    "jp": "あらぶるめいがのみぎ"
  },
  {
    "label": "SculptureFake_01332",
    "en": "motherly statue",
    "jp": "ぼせいあふれるちょうこく"
  },
  {
    "label": "SculptureFake_01334",
    "en": "gallant statue",
    "jp": "りりしいちょうこく"
  },
  {
    "label": "SculptureFake_01336",
    "en": "robust statue",
    "jp": "たくましいちょうこく"
  },
  {
    "label": "SculptureFake_01338",
    "en": "ancient statue",
    "jp": "いにしえのちょうこく"
  },
  {
    "label": "SculptureFake_01342",
    "en": "beautiful statue",
    "jp": "うつくしいちょうこく"
  },
  {
    "label": "SculptureFake_01344",
    "en": "mystic statue",
    "jp": "しんぴてきなちょうこく"
  },
  {
    "label": "SculptureFake_01346",
    "en": "valiant statue",
    "jp": "こうごうしいちょうこく"
  },
  {
    "label": "SculptureFake_12534",
    "en": "rock-head statue",
    "jp": "いしあたまなちょうこく"
  },
  {
    "label": "SculptureFake_12536",
    "en": "informative statue",
    "jp": "てがかりのちょうこく"
  },
  {
    "label": "SculptureFake_12538",
    "en": "tremendous statue",
    "jp": "とてつもないちょうこく"
  },
  {
    "label": "SculptureFake_12540",
    "en": "warrior statue",
    "jp": "もののふのちょうこく"
  },
  {
    "label": "SculptureFake_12571",
    "en": "wild painting left half",
    "jp": "あらぶるめいがのひだり"
  }
];

itemNames.tools = [
  {
    "label": "Axe_02100",
    "en": "axe",
    "jp": "オノ"
  },
  {
    "label": "Axe_03068",
    "en": "flimsy axe",
    "jp": "ショボいオノ"
  },
  {
    "label": "Axe_05856",
    "en": "stone axe",
    "jp": "いしのオノ"
  },
  {
    "label": "Axe_09617",
    "en": "golden axe",
    "jp": "きんのオノ"
  },
  {
    "label": "Axe_12615",
    "en": "worn axe",
    "jp": "こわれかけのオノ"
  },
  {
    "label": "ChangeStick_02544",
    "en": "star wand",
    "jp": "スターなステッキ"
  },
  {
    "label": "ChangeStick_05083",
    "en": "hyacinth wand",
    "jp": "ヒヤシンスのステッキ"
  },
  {
    "label": "ChangeStick_05084",
    "en": "windflower wand",
    "jp": "アネモネのステッキ"
  },
  {
    "label": "ChangeStick_05085",
    "en": "tulip wand",
    "jp": "チューリップのステッキ"
  },
  {
    "label": "ChangeStick_05091",
    "en": "pansy wand",
    "jp": "パンジーのステッキ"
  },
  {
    "label": "ChangeStick_05092",
    "en": "cosmos wand",
    "jp": "コスモスのステッキ"
  },
  {
    "label": "ChangeStick_05093",
    "en": "rose wand",
    "jp": "バラのステッキ"
  },
  {
    "label": "ChangeStick_05094",
    "en": "lily wand",
    "jp": "ユリのステッキ"
  },
  {
    "label": "ChangeStick_05095",
    "en": "mums wand",
    "jp": "キクのステッキ"
  },
  {
    "label": "ChangeStick_07584",
    "en": "wand",
    "jp": "ステッキ"
  },
  {
    "label": "ChangeStick_07585",
    "en": "ice wand",
    "jp": "こおりのステッキ"
  },
  {
    "label": "ChangeStick_07586",
    "en": "shell wand",
    "jp": "かいがらのステッキ"
  },
  {
    "label": "ChangeStick_07587",
    "en": "tree-branch wand",
    "jp": "きのえだのステッキ"
  },
  {
    "label": "ChangeStick_07588",
    "en": "mushroom wand",
    "jp": "キノコのステッキ"
  },
  {
    "label": "ChangeStick_07589",
    "en": "cherry-blossom wand",
    "jp": "さくらのステッキ"
  },
  {
    "label": "ChangeStick_07590",
    "en": "bamboo wand",
    "jp": "たけのステッキ"
  },
  {
    "label": "ChangeStick_07591",
    "en": "golden wand",
    "jp": "おうごんのステッキ"
  },
  {
    "label": "ChangeStick_07592",
    "en": "iron wand",
    "jp": "てつのステッキ"
  },
  {
    "label": "ChangeStick_08769",
    "en": "bug wand",
    "jp": "ムシのステッキ"
  },
  {
    "label": "ChangeStick_08770",
    "en": "fish wand",
    "jp": "おサカナのステッキ"
  },
  {
    "label": "ChangeStick_12578",
    "en": "Bunny Day wand",
    "jp": "イースターなステッキ"
  },
  {
    "label": "ChangeStick_12695",
    "en": "wedding wand",
    "jp": "ウェディングなステッキ"
  },
  {
    "label": "ChangeStick_13173",
    "en": "Kiki & Lala wand",
    "jp": "キキ&ララなステッキ"
  },
  {
    "label": "ChangeStick_13237",
    "en": "spooky wand",
    "jp": "ハロウィンなステッキ"
  },
  {
    "label": "ChangeStick_14239",
    "en": "shamrock wand",
    "jp": "シャムロックステッキ"
  },
  {
    "label": "CliffMaker_02543",
    "en": "cliff construction permit",
    "jp": "がけこうじライセンス"
  },
  {
    "label": "FishingRod_02377",
    "en": "fishing rod",
    "jp": "つりざお"
  },
  {
    "label": "FishingRod_03084",
    "en": "flimsy fishing rod",
    "jp": "ショボいつりざお"
  },
  {
    "label": "FishingRod_08471",
    "en": "fish fishing rod",
    "jp": "おサカナつりざお"
  },
  {
    "label": "FishingRod_08472",
    "en": "colorful fishing rod",
    "jp": "カラフルなつりざお"
  },
  {
    "label": "FishingRod_08473",
    "en": "outdoorsy fishing rod",
    "jp": "アウトドアなつりざお"
  },
  {
    "label": "FishingRod_08660",
    "en": "golden rod",
    "jp": "きんのつりざお"
  },
  {
    "label": "GroundMaker_03075",
    "en": "path construction permit",
    "jp": "どうろこうじライセンス"
  },
  {
    "label": "Ladder_02615",
    "en": "ladder",
    "jp": "はしご"
  },
  {
    "label": "Net_02376",
    "en": "flimsy net",
    "jp": "ショボいあみ"
  },
  {
    "label": "Net_05784",
    "en": "net",
    "jp": "あみ"
  },
  {
    "label": "Net_08176",
    "en": "star net",
    "jp": "スターなあみ"
  },
  {
    "label": "Net_08177",
    "en": "colorful net",
    "jp": "カラフルなあみ"
  },
  {
    "label": "Net_08178",
    "en": "outdoorsy net",
    "jp": "アウトドアなあみ"
  },
  {
    "label": "Net_08179",
    "en": "golden net",
    "jp": "きんのあみ"
  },
  {
    "label": "RiverMaker_03247",
    "en": "waterscaping permit",
    "jp": "かせんこうじライセンス"
  },
  {
    "label": "Shovel_02099",
    "en": "shovel",
    "jp": "スコップ"
  },
  {
    "label": "Shovel_03082",
    "en": "flimsy shovel",
    "jp": "ショボいスコップ"
  },
  {
    "label": "Shovel_08574",
    "en": "golden shovel",
    "jp": "きんのスコップ"
  },
  {
    "label": "Shovel_08575",
    "en": "outdoorsy shovel",
    "jp": "アウトドアなスコップ"
  },
  {
    "label": "Shovel_08576",
    "en": "printed-design shovel",
    "jp": "がらものスコップ"
  },
  {
    "label": "Shovel_08577",
    "en": "colorful shovel",
    "jp": "カラフルなスコップ"
  },
  {
    "label": "Slingshot_02822",
    "en": "slingshot",
    "jp": "パチンコ"
  },
  {
    "label": "Slingshot_08578",
    "en": "golden slingshot",
    "jp": "きんのパチンコ"
  },
  {
    "label": "Slingshot_08579",
    "en": "outdoorsy slingshot",
    "jp": "アウトドアなパチンコ"
  },
  {
    "label": "Slingshot_08580",
    "en": "colorful slingshot",
    "jp": "カラフルなパチンコ"
  },
  {
    "label": "Timer_03331",
    "en": "timer",
    "jp": "タイマー"
  },
  {
    "label": "Watering_02379",
    "en": "watering can",
    "jp": "ジョウロ"
  },
  {
    "label": "Watering_03083",
    "en": "flimsy watering can",
    "jp": "ショボいジョウロ"
  },
  {
    "label": "Watering_08533",
    "en": "golden watering can",
    "jp": "きんのジョウロ"
  },
  {
    "label": "Watering_08534",
    "en": "colorful watering can",
    "jp": "カラフルなジョウロ"
  },
  {
    "label": "Watering_08535",
    "en": "elephant watering can",
    "jp": "ゾウさんジョウロ"
  },
  {
    "label": "Watering_08536",
    "en": "outdoorsy watering can",
    "jp": "アウトドアなジョウロ"
  },
  {
    "label": "WoodenStickTool_04703",
    "en": "vaulting pole",
    "jp": "たかとびぼう"
  }
];

itemNames.fossils = [
  {
    "label": "Fossil_00169",
    "en": "ankylo skull",
    "jp": "アンキロサウルスのあたま"
  },
  {
    "label": "Fossil_00170",
    "en": "ankylo torso",
    "jp": "アンキロサウルスのからだ"
  },
  {
    "label": "Fossil_00171",
    "en": "ankylo tail",
    "jp": "アンキロサウルスのしっぽ"
  },
  {
    "label": "Fossil_00177",
    "en": "archelon skull",
    "jp": "アーケロンのあたま"
  },
  {
    "label": "Fossil_00178",
    "en": "archelon tail",
    "jp": "アーケロンのからだ"
  },
  {
    "label": "Fossil_00180",
    "en": "megacero skull",
    "jp": "メガセロプスのあたま"
  },
  {
    "label": "Fossil_00181",
    "en": "megacero torso",
    "jp": "メガセロプスのからだ"
  },
  {
    "label": "Fossil_00182",
    "en": "megacero tail",
    "jp": "メガセロプスのしっぽ"
  },
  {
    "label": "Fossil_00184",
    "en": "dimetrodon skull",
    "jp": "ディメトロドンのあたま"
  },
  {
    "label": "Fossil_00185",
    "en": "dimetrodon torso",
    "jp": "ディメトロドンのからだ"
  },
  {
    "label": "Fossil_00188",
    "en": "iguanodon skull",
    "jp": "イグアノドンのあたま"
  },
  {
    "label": "Fossil_00189",
    "en": "iguanodon torso",
    "jp": "イグアノドンのからだ"
  },
  {
    "label": "Fossil_00190",
    "en": "iguanodon tail",
    "jp": "イグアノドンのしっぽ"
  },
  {
    "label": "Fossil_00192",
    "en": "ophthalmo skull",
    "jp": "オフタルモサウルスのあたま"
  },
  {
    "label": "Fossil_00193",
    "en": "ophthalmo torso",
    "jp": "オフタルモサウルスのからだ"
  },
  {
    "label": "Fossil_00195",
    "en": "mammoth skull",
    "jp": "マンモスのあたま"
  },
  {
    "label": "Fossil_00196",
    "en": "mammoth torso",
    "jp": "マンモスのからだ"
  },
  {
    "label": "Fossil_00198",
    "en": "pachy skull",
    "jp": "パキケファロのあたま"
  },
  {
    "label": "Fossil_00199",
    "en": "pachy tail",
    "jp": "パキケファロのからだ"
  },
  {
    "label": "Fossil_00202",
    "en": "parasaur skull",
    "jp": "パラサウロロフスのあたま"
  },
  {
    "label": "Fossil_00203",
    "en": "parasaur torso",
    "jp": "パラサウロロフスのからだ"
  },
  {
    "label": "Fossil_00204",
    "en": "parasaur tail",
    "jp": "パラサウロロフスのしっぽ"
  },
  {
    "label": "Fossil_00206",
    "en": "ptera body",
    "jp": "プテラノドンのあたま"
  },
  {
    "label": "Fossil_00207",
    "en": "right ptera wing",
    "jp": "プテラノドンのうよく"
  },
  {
    "label": "Fossil_00208",
    "en": "left ptera wing",
    "jp": "プテラノドンのさよく"
  },
  {
    "label": "Fossil_00210",
    "en": "deinony torso",
    "jp": "ディノニクスのあたま"
  },
  {
    "label": "Fossil_00211",
    "en": "deinony tail",
    "jp": "ディノニクスのしっぽ"
  },
  {
    "label": "Fossil_00213",
    "en": "sabertooth skull",
    "jp": "スミロドンのあたま"
  },
  {
    "label": "Fossil_00214",
    "en": "sabertooth tail",
    "jp": "スミロドンのからだ"
  },
  {
    "label": "Fossil_00216",
    "en": "diplo skull",
    "jp": "ディプロドクスのあたま"
  },
  {
    "label": "Fossil_00217",
    "en": "diplo neck",
    "jp": "ディプロドクスのくび"
  },
  {
    "label": "Fossil_00218",
    "en": "diplo chest",
    "jp": "ディプロドクスのむね"
  },
  {
    "label": "Fossil_00219",
    "en": "diplo pelvis",
    "jp": "ディプロドクスのこし"
  },
  {
    "label": "Fossil_00220",
    "en": "diplo tail",
    "jp": "ディプロドクスのしっぽ"
  },
  {
    "label": "Fossil_00222",
    "en": "spino skull",
    "jp": "スピノサウルスのあたま"
  },
  {
    "label": "Fossil_00223",
    "en": "spino torso",
    "jp": "スピノサウルスのからだ"
  },
  {
    "label": "Fossil_00224",
    "en": "spino tail",
    "jp": "スピノサウルスのしっぽ"
  },
  {
    "label": "Fossil_00226",
    "en": "stego skull",
    "jp": "ステゴサウルスのあたま"
  },
  {
    "label": "Fossil_00227",
    "en": "stego torso",
    "jp": "ステゴサウルスのからだ"
  },
  {
    "label": "Fossil_00228",
    "en": "stego tail",
    "jp": "ステゴサウルスのしっぽ"
  },
  {
    "label": "Fossil_00234",
    "en": "plesio skull",
    "jp": "フタバサウルスのあたま"
  },
  {
    "label": "Fossil_00235",
    "en": "plesio torso",
    "jp": "フタバサウルスのからだ"
  },
  {
    "label": "Fossil_00236",
    "en": "plesio tail",
    "jp": "フタバサウルスのしっぽ"
  },
  {
    "label": "Fossil_00238",
    "en": "T. rex skull",
    "jp": "Tレックスのあたま"
  },
  {
    "label": "Fossil_00239",
    "en": "T. rex torso",
    "jp": "Tレックスのからだ"
  },
  {
    "label": "Fossil_00240",
    "en": "T. rex tail",
    "jp": "Tレックスのしっぽ"
  },
  {
    "label": "Fossil_00242",
    "en": "tricera skull",
    "jp": "トリケラトプスのあたま"
  },
  {
    "label": "Fossil_00243",
    "en": "tricera torso",
    "jp": "トリケラトプスのからだ"
  },
  {
    "label": "Fossil_00244",
    "en": "tricera tail",
    "jp": "トリケラトプスのしっぽ"
  },
  {
    "label": "Fossil_00294",
    "en": "amber",
    "jp": "コハク"
  },
  {
    "label": "Fossil_00295",
    "en": "ammonite",
    "jp": "アンモナイト"
  },
  {
    "label": "Fossil_00296",
    "en": "coprolite",
    "jp": "ウンコのかせき"
  },
  {
    "label": "Fossil_00298",
    "en": "archaeopteryx",
    "jp": "しそちょう"
  },
  {
    "label": "Fossil_00300",
    "en": "dinosaur track",
    "jp": "あしあとのかせき"
  },
  {
    "label": "Fossil_00301",
    "en": "australopith",
    "jp": "アウストラロピテクス"
  },
  {
    "label": "Fossil_00302",
    "en": "shark-tooth pattern",
    "jp": "サメのはのかせき"
  },
  {
    "label": "Fossil_00303",
    "en": "trilobite",
    "jp": "さんようちゅう"
  },
  {
    "label": "Fossil_04651",
    "en": "anomalocaris",
    "jp": "アノマロカリス"
  },
  {
    "label": "Fossil_04658",
    "en": "right megalo side",
    "jp": "メガロケロスのみぎはんしん"
  },
  {
    "label": "Fossil_04659",
    "en": "left megalo side",
    "jp": "メガロケロスのひだりはんしん"
  },
  {
    "label": "Fossil_04660",
    "en": "dunkleosteus",
    "jp": "ダンクルオステウス"
  },
  {
    "label": "Fossil_04662",
    "en": "myllokunmingia",
    "jp": "ミロクンミンギア"
  },
  {
    "label": "Fossil_04663",
    "en": "eusthenopteron",
    "jp": "ユーステノプテロン"
  },
  {
    "label": "Fossil_04664",
    "en": "acanthostega",
    "jp": "アカントステガ"
  },
  {
    "label": "Fossil_04665",
    "en": "juramaia",
    "jp": "ジュラマイア"
  },
  {
    "label": "Fossil_04688",
    "en": "brachio skull",
    "jp": "ブラキオサウルスのあたま"
  },
  {
    "label": "Fossil_04689",
    "en": "brachio chest",
    "jp": "ブラキオサウルスのむね"
  },
  {
    "label": "Fossil_04690",
    "en": "brachio pelvis",
    "jp": "ブラキオサウルスのこし"
  },
  {
    "label": "Fossil_04691",
    "en": "brachio tail",
    "jp": "ブラキオサウルスのしっぽ"
  },
  {
    "label": "Fossil_04697",
    "en": "quetzal torso",
    "jp": "ケツァルコアトルスのあたま"
  },
  {
    "label": "Fossil_04698",
    "en": "right quetzal wing",
    "jp": "ケツァルコアトルスのうよく"
  },
  {
    "label": "Fossil_04699",
    "en": "left quetzal wing",
    "jp": "ケツァルコアトルスのさよく"
  },
  {
    "label": "Fossil_07251",
    "en": "diplo tail tip",
    "jp": "ディプロドクスのしっぽのさき"
  },
  {
    "label": "FossilUnknown_02579",
    "en": "fossil",
    "jp": "かせき"
  }
];

itemNames.fishModels = [
  {
    "label": "FishToy_06929",
    "en": "crucian carp model",
    "jp": "フナのもけい"
  },
  {
    "label": "FishToy_06930",
    "en": "goldfish model",
    "jp": "キンギョのもけい"
  },
  {
    "label": "FishToy_06931",
    "en": "bitterling model",
    "jp": "タナゴのもけい"
  },
  {
    "label": "FishToy_06932",
    "en": "horse mackerel model",
    "jp": "アジのもけい"
  },
  {
    "label": "FishToy_06933",
    "en": "angelfish model",
    "jp": "エンゼルフィッシュのもけい"
  },
  {
    "label": "FishToy_06935",
    "en": "arowana model",
    "jp": "アロワナのもけい"
  },
  {
    "label": "FishToy_06936",
    "en": "sweetfish model",
    "jp": "アユのもけい"
  },
  {
    "label": "FishToy_06937",
    "en": "betta model",
    "jp": "ベタのもけい"
  },
  {
    "label": "FishToy_06938",
    "en": "black bass model",
    "jp": "ブラックバスのもけい"
  },
  {
    "label": "FishToy_06939",
    "en": "bluegill model",
    "jp": "ブルーギルのもけい"
  },
  {
    "label": "FishToy_06940",
    "en": "football fish model",
    "jp": "チョウチンアンコウのもけい"
  },
  {
    "label": "FishToy_06941",
    "en": "butterfly fish model",
    "jp": "チョウチョウウオのもけい"
  },
  {
    "label": "FishToy_06942",
    "en": "pop-eyed goldfish model",
    "jp": "デメキンのもけい"
  },
  {
    "label": "FishToy_06943",
    "en": "barreleye model",
    "jp": "デメニギスのもけい"
  },
  {
    "label": "FishToy_06944",
    "en": "loach model",
    "jp": "ドジョウのもけい"
  },
  {
    "label": "FishToy_06945",
    "en": "nibble fish model",
    "jp": "ドクターフィッシュのもけい"
  },
  {
    "label": "FishToy_06946",
    "en": "freshwater goby model",
    "jp": "ドンコのもけい"
  },
  {
    "label": "FishToy_06949",
    "en": "ray model",
    "jp": "エイのもけい"
  },
  {
    "label": "FishToy_06950",
    "en": "saddled bichir model",
    "jp": "エンドリケリーのもけい"
  },
  {
    "label": "FishToy_06951",
    "en": "blowfish model",
    "jp": "フグのもけい"
  },
  {
    "label": "FishToy_06952",
    "en": "gar model",
    "jp": "ガーのもけい"
  },
  {
    "label": "FishToy_06953",
    "en": "golden trout model",
    "jp": "ゴールデントラウトのもけい"
  },
  {
    "label": "FishToy_06954",
    "en": "guppy model",
    "jp": "グッピーのもけい"
  },
  {
    "label": "FishToy_06955",
    "en": "ribbon eel model",
    "jp": "ハナヒゲウツボのもけい"
  },
  {
    "label": "FishToy_06956",
    "en": "puffer fish model",
    "jp": "ハリセンボンのもけい"
  },
  {
    "label": "FishToy_06957",
    "en": "olive flounder model",
    "jp": "ヒラメのもけい"
  },
  {
    "label": "FishToy_06958",
    "en": "squid model",
    "jp": "イカのもけい"
  },
  {
    "label": "FishToy_06959",
    "en": "barred knifejaw model",
    "jp": "イシダイのもけい"
  },
  {
    "label": "FishToy_06960",
    "en": "stringfish model",
    "jp": "イトウのもけい"
  },
  {
    "label": "FishToy_06961",
    "en": "whale shark model",
    "jp": "ジンベエザメのもけい"
  },
  {
    "label": "FishToy_06962",
    "en": "frog model",
    "jp": "カエルのもけい"
  },
  {
    "label": "FishToy_06963",
    "en": "blue marlin model",
    "jp": "カジキのもけい"
  },
  {
    "label": "FishToy_06964",
    "en": "snapping turtle model",
    "jp": "カミツキガメのもけい"
  },
  {
    "label": "FishToy_06965",
    "en": "dab model",
    "jp": "カレイのもけい"
  },
  {
    "label": "FishToy_06978",
    "en": "king salmon model",
    "jp": "キングサーモンのもけい"
  },
  {
    "label": "FishToy_06979",
    "en": "suckerfish model",
    "jp": "コバンザメのもけい"
  },
  {
    "label": "FishToy_06980",
    "en": "carp model",
    "jp": "コイのもけい"
  },
  {
    "label": "FishToy_06981",
    "en": "clown fish model",
    "jp": "クマノミのもけい"
  },
  {
    "label": "FishToy_06982",
    "en": "sea butterfly model",
    "jp": "クリオネのもけい"
  },
  {
    "label": "FishToy_06983",
    "en": "tuna model",
    "jp": "マグロのもけい"
  },
  {
    "label": "FishToy_06984",
    "en": "ocean sunfish model",
    "jp": "マンボウのもけい"
  },
  {
    "label": "FishToy_06985",
    "en": "killifish model",
    "jp": "メダカのもけい"
  },
  {
    "label": "FishToy_06987",
    "en": "catfish model",
    "jp": "ナマズのもけい"
  },
  {
    "label": "FishToy_06988",
    "en": "surgeonfish model",
    "jp": "ナンヨウハギのもけい"
  },
  {
    "label": "FishToy_06989",
    "en": "Napoleonfish model",
    "jp": "ナポレオンフィッシュのもけい"
  },
  {
    "label": "FishToy_06990",
    "en": "neon tetra model",
    "jp": "ネオンテトラのもけい"
  },
  {
    "label": "FishToy_06991",
    "en": "koi model",
    "jp": "ニシキゴイのもけい"
  },
  {
    "label": "FishToy_06999",
    "en": "anchovy model",
    "jp": "アンチョビのもけい"
  },
  {
    "label": "FishToy_07000",
    "en": "pale chub model",
    "jp": "オイカワのもけい"
  },
  {
    "label": "FishToy_07001",
    "en": "tadpole model",
    "jp": "オタマジャクシのもけい"
  },
  {
    "label": "FishToy_07002",
    "en": "saw shark model",
    "jp": "ノコギリザメのもけい"
  },
  {
    "label": "FishToy_07003",
    "en": "char model",
    "jp": "オオイワナのもけい"
  },
  {
    "label": "FishToy_07004",
    "en": "pike model",
    "jp": "パイクのもけい"
  },
  {
    "label": "FishToy_07005",
    "en": "piranha model",
    "jp": "ピラニアのもけい"
  },
  {
    "label": "FishToy_07006",
    "en": "arapaima model",
    "jp": "ピラルクのもけい"
  },
  {
    "label": "FishToy_07007",
    "en": "giant snakehead model",
    "jp": "ライギョのもけい"
  },
  {
    "label": "FishToy_07008",
    "en": "rainbowfish model",
    "jp": "レインボーフィッシュのもけい"
  },
  {
    "label": "FishToy_07009",
    "en": "ranchu goldfish model",
    "jp": "ランチュウのもけい"
  },
  {
    "label": "FishToy_07010",
    "en": "giant trevally model",
    "jp": "ロウニンアジのもけい"
  },
  {
    "label": "FishToy_07011",
    "en": "oarfish model",
    "jp": "リュウグウノツカイのもけい"
  },
  {
    "label": "FishToy_07012",
    "en": "salmon model",
    "jp": "サケのもけい"
  },
  {
    "label": "FishToy_07013",
    "en": "great white shark model",
    "jp": "サメのもけい"
  },
  {
    "label": "FishToy_07014",
    "en": "mahi-mahi model",
    "jp": "シイラのもけい"
  },
  {
    "label": "FishToy_07015",
    "en": "hammerhead shark model",
    "jp": "シュモクザメのもけい"
  },
  {
    "label": "FishToy_07016",
    "en": "coelacanth model",
    "jp": "シーラカンスのもけい"
  },
  {
    "label": "FishToy_07017",
    "en": "soft-shelled turtle model",
    "jp": "スッポンのもけい"
  },
  {
    "label": "FishToy_07018",
    "en": "sea bass model",
    "jp": "スズキのもけい"
  },
  {
    "label": "FishToy_07019",
    "en": "mitten crab model",
    "jp": "シャンハイガニのもけい"
  },
  {
    "label": "FishToy_07020",
    "en": "red snapper model",
    "jp": "タイのもけい"
  },
  {
    "label": "FishToy_07021",
    "en": "sea horse model",
    "jp": "タツノオトシゴのもけい"
  },
  {
    "label": "FishToy_07022",
    "en": "tilapia model",
    "jp": "ティラピアのもけい"
  },
  {
    "label": "FishToy_07023",
    "en": "sturgeon model",
    "jp": "チョウザメのもけい"
  },
  {
    "label": "FishToy_07024",
    "en": "dace model",
    "jp": "ウグイのもけい"
  },
  {
    "label": "FishToy_07025",
    "en": "moray eel model",
    "jp": "ウツボのもけい"
  },
  {
    "label": "FishToy_07026",
    "en": "pond smelt model",
    "jp": "ワカサギのもけい"
  },
  {
    "label": "FishToy_07027",
    "en": "cherry salmon model",
    "jp": "ヤマメのもけい"
  },
  {
    "label": "FishToy_07028",
    "en": "yellow perch model",
    "jp": "イエローパーチのもけい"
  },
  {
    "label": "FishToy_07029",
    "en": "crawfish model",
    "jp": "ザリガニのもけい"
  },
  {
    "label": "FishToy_07836",
    "en": "zebra turkeyfish model",
    "jp": "ミノカサゴのもけい"
  },
  {
    "label": "FishToy_07837",
    "en": "dorado model",
    "jp": "ドラドのもけい"
  }
];

itemNames.insectModels = [
  {
    "label": "InsectToy_05922",
    "en": "saw stag model",
    "jp": "ノコギリクワガタのもけい"
  },
  {
    "label": "InsectToy_05924",
    "en": "grand h. hercules model",
    "jp": "おおいなるカブトのもけい"
  },
  {
    "label": "InsectToy_05927",
    "en": "wasp model",
    "jp": "ハチのもけい"
  },
  {
    "label": "InsectToy_05928",
    "en": "honeybee model",
    "jp": "ミツバチのもけい"
  },
  {
    "label": "InsectToy_05929",
    "en": "scarab beetle model",
    "jp": "プラチナコガネのもけい"
  },
  {
    "label": "InsectToy_05935",
    "en": "flea model",
    "jp": "ノミのもけい"
  },
  {
    "label": "InsectToy_05936",
    "en": "mosquito model",
    "jp": "カのもけい"
  },
  {
    "label": "InsectToy_05938",
    "en": "horned dynastid model",
    "jp": "カブトムシのもけい"
  },
  {
    "label": "InsectToy_05944",
    "en": "tiger butterfly model",
    "jp": "アゲハチョウのもけい"
  },
  {
    "label": "InsectToy_07046",
    "en": "brown cicada model",
    "jp": "アブラゼミのもけい"
  },
  {
    "label": "InsectToy_07049",
    "en": "R. Brooke's birdwing model",
    "jp": "アカエリトリバネアゲハのもけい"
  },
  {
    "label": "InsectToy_07050",
    "en": "red dragonfly model",
    "jp": "アキアカネのもけい"
  },
  {
    "label": "InsectToy_07051",
    "en": "grand Q. A. birdwing model",
    "jp": "おおいなるチョウのもけい"
  },
  {
    "label": "InsectToy_07052",
    "en": "pondskater model",
    "jp": "アメンボのもけい"
  },
  {
    "label": "InsectToy_07053",
    "en": "ant model",
    "jp": "アリのもけい"
  },
  {
    "label": "InsectToy_07054",
    "en": "pill bug model",
    "jp": "ダンゴムシのもけい"
  },
  {
    "label": "InsectToy_07055",
    "en": "wharf roach model",
    "jp": "フナムシのもけい"
  },
  {
    "label": "InsectToy_07056",
    "en": "moth model",
    "jp": "ガのもけい"
  },
  {
    "label": "InsectToy_07057",
    "en": "diving beetle model",
    "jp": "ゲンゴロウのもけい"
  },
  {
    "label": "InsectToy_07058",
    "en": "darner dragonfly model",
    "jp": "ギンヤンマのもけい"
  },
  {
    "label": "InsectToy_07059",
    "en": "grand goliath beetle model",
    "jp": "おおいなるハナムグリのもけい"
  },
  {
    "label": "InsectToy_07060",
    "en": "fly model",
    "jp": "ハエのもけい"
  },
  {
    "label": "InsectToy_07061",
    "en": "orchid mantis model",
    "jp": "ハナカマキリのもけい"
  },
  {
    "label": "InsectToy_07062",
    "en": "tiger beetle model",
    "jp": "ハンミョウのもけい"
  },
  {
    "label": "InsectToy_07063",
    "en": "evening cicada model",
    "jp": "ヒグラシのもけい"
  },
  {
    "label": "InsectToy_07064",
    "en": "cyclommatus stag model",
    "jp": "ホソアカクワガタのもけい"
  },
  {
    "label": "InsectToy_07065",
    "en": "firefly model",
    "jp": "ホタルのもけい"
  },
  {
    "label": "InsectToy_07066",
    "en": "dung beetle model",
    "jp": "フンコロガシのもけい"
  },
  {
    "label": "InsectToy_07067",
    "en": "rice grasshopper model",
    "jp": "イナゴのもけい"
  },
  {
    "label": "InsectToy_07068",
    "en": "mantis model",
    "jp": "カマキリのもけい"
  },
  {
    "label": "InsectToy_07069",
    "en": "stinkbug model",
    "jp": "カメムシのもけい"
  },
  {
    "label": "InsectToy_07070",
    "en": "citrus long-horned b. model",
    "jp": "ゴマダラカミキリのもけい"
  },
  {
    "label": "InsectToy_07071",
    "en": "peacock butterfly model",
    "jp": "カラスアゲハのもけい"
  },
  {
    "label": "InsectToy_07072",
    "en": "snail model",
    "jp": "カタツムリのもけい"
  },
  {
    "label": "InsectToy_07073",
    "en": "grasshopper model",
    "jp": "キリギリスのもけい"
  },
  {
    "label": "InsectToy_07074",
    "en": "earth-boring dung b. model",
    "jp": "オオセンチコガネのもけい"
  },
  {
    "label": "InsectToy_07075",
    "en": "horned atlas model",
    "jp": "コーカサスオオカブトのもけい"
  },
  {
    "label": "InsectToy_07076",
    "en": "walking leaf model",
    "jp": "コノハムシのもけい"
  },
  {
    "label": "InsectToy_07077",
    "en": "cricket model",
    "jp": "コオロギのもけい"
  },
  {
    "label": "InsectToy_07078",
    "en": "giant cicada model",
    "jp": "クマゼミのもけい"
  },
  {
    "label": "InsectToy_07079",
    "en": "spider model",
    "jp": "クモのもけい"
  },
  {
    "label": "InsectToy_07080",
    "en": "agrias butterfly model",
    "jp": "ミイロタテハのもけい"
  },
  {
    "label": "InsectToy_07081",
    "en": "robust cicada model",
    "jp": "ミンミンゼミのもけい"
  },
  {
    "label": "InsectToy_07082",
    "en": "bagworm model",
    "jp": "ミノムシのもけい"
  },
  {
    "label": "InsectToy_07083",
    "en": "miyama stag model",
    "jp": "ミヤマクワガタのもけい"
  },
  {
    "label": "InsectToy_07084",
    "en": "yellow butterfly model",
    "jp": "モンキチョウのもけい"
  },
  {
    "label": "InsectToy_07085",
    "en": "common butterfly model",
    "jp": "モンシロチョウのもけい"
  },
  {
    "label": "InsectToy_07086",
    "en": "emperor butterfly model",
    "jp": "モルフォチョウのもけい"
  },
  {
    "label": "InsectToy_07087",
    "en": "walking stick model",
    "jp": "ナナフシのもけい"
  },
  {
    "label": "InsectToy_07088",
    "en": "rainbow stag model",
    "jp": "ニジイロクワガタのもけい"
  },
  {
    "label": "InsectToy_07089",
    "en": "mole cricket model",
    "jp": "オケラのもけい"
  },
  {
    "label": "InsectToy_07090",
    "en": "grand b. dragonfly model",
    "jp": "おおいなるトンボのもけい"
  },
  {
    "label": "InsectToy_07091",
    "en": "monarch butterfly model",
    "jp": "オオカバマダラのもけい"
  },
  {
    "label": "InsectToy_07092",
    "en": "giant stag model",
    "jp": "オオクワガタのもけい"
  },
  {
    "label": "InsectToy_07093",
    "en": "golden stag model",
    "jp": "オウゴンオニクワガタのもけい"
  },
  {
    "label": "InsectToy_07094",
    "en": "scorpion model",
    "jp": "サソリのもけい"
  },
  {
    "label": "InsectToy_07095",
    "en": "cicada shell model",
    "jp": "セミのぬけがらのもけい"
  },
  {
    "label": "InsectToy_07096",
    "en": "bell cricket model",
    "jp": "スズムシのもけい"
  },
  {
    "label": "InsectToy_07097",
    "en": "long locust model",
    "jp": "ショウリョウバッタのもけい"
  },
  {
    "label": "InsectToy_07099",
    "en": "jewel beetle model",
    "jp": "タマムシのもけい"
  },
  {
    "label": "InsectToy_07101",
    "en": "tarantula model",
    "jp": "タランチュラのもけい"
  },
  {
    "label": "InsectToy_07102",
    "en": "ladybug model",
    "jp": "テントウムシのもけい"
  },
  {
    "label": "InsectToy_07103",
    "en": "migratory locust model",
    "jp": "トノサマバッタのもけい"
  },
  {
    "label": "InsectToy_07104",
    "en": "walker cicada model",
    "jp": "ツクツクホウシのもけい"
  },
  {
    "label": "InsectToy_07105",
    "en": "violin beetle model",
    "jp": "バイオリンムシのもけい"
  },
  {
    "label": "InsectToy_07108",
    "en": "hermit crab model",
    "jp": "ヤドカリのもけい"
  },
  {
    "label": "InsectToy_07109",
    "en": "grand Atlas moth model",
    "jp": "おおいなるガのもけい"
  },
  {
    "label": "InsectToy_07110",
    "en": "horned elephant model",
    "jp": "ゾウカブトのもけい"
  },
  {
    "label": "InsectToy_07111",
    "en": "common bluebottle model",
    "jp": "アオスジアゲハのもけい"
  },
  {
    "label": "InsectToy_07112",
    "en": "paper kite butterfly model",
    "jp": "オオゴマダラのもけい"
  },
  {
    "label": "InsectToy_07113",
    "en": "great purple emperor model",
    "jp": "オオムラサキのもけい"
  },
  {
    "label": "InsectToy_07114",
    "en": "drone beetle model",
    "jp": "カナブンのもけい"
  },
  {
    "label": "InsectToy_07115",
    "en": "grand giraffe stag model",
    "jp": "おおいなるクワガタのもけい"
  },
  {
    "label": "InsectToy_07116",
    "en": "man-faced stink bug model",
    "jp": "ジンメンカメムシのもけい"
  },
  {
    "label": "InsectToy_07117",
    "en": "M. sunset moth model",
    "jp": "ニシキオオツバメガのもけい"
  },
  {
    "label": "InsectToy_07118",
    "en": "blue weevil beetle model",
    "jp": "ホウセキゾウムシのもけい"
  },
  {
    "label": "InsectToy_07119",
    "en": "rosalia batesi beetle model",
    "jp": "ルリボシカミキリのもけい"
  },
  {
    "label": "InsectToy_07120",
    "en": "giant water bug model",
    "jp": "タガメのもけい"
  },
  {
    "label": "InsectToy_07121",
    "en": "damselfly model",
    "jp": "イトトンボのもけい"
  },
  {
    "label": "InsectToy_07407",
    "en": "centipede model",
    "jp": "ムカデのもけい"
  }
];

itemNames.wallpaper = [
  {
    "label": "RoomWall_04795",
    "en": "common wall",
    "jp": "よくあるかべ"
  },
  {
    "label": "RoomWall_04801",
    "en": "steel-frame wall",
    "jp": "てっこつのかべ"
  },
  {
    "label": "RoomWall_04802",
    "en": "pink painted-wood wall",
    "jp": "ピンクのペイントウッドのかべ"
  },
  {
    "label": "RoomWall_04803",
    "en": "white painted-wood wall",
    "jp": "しろいペイントウッドのかべ"
  },
  {
    "label": "RoomWall_04804",
    "en": "brown herringbone wall",
    "jp": "ちゃいろいヘリンボーンのかべ"
  },
  {
    "label": "RoomWall_04805",
    "en": "chocolate herringbone wall",
    "jp": "こげちゃのヘリンボーンのかべ"
  },
  {
    "label": "RoomWall_04806",
    "en": "brown hallway wall",
    "jp": "ちゃいろいホールのかべ"
  },
  {
    "label": "RoomWall_04807",
    "en": "chocolate hallway wall",
    "jp": "こげちゃのホールのかべ"
  },
  {
    "label": "RoomWall_04808",
    "en": "yellow-paint wall",
    "jp": "きいろいペイントウォール"
  },
  {
    "label": "RoomWall_04809",
    "en": "orange-paint wall",
    "jp": "オレンジのペイントウォール"
  },
  {
    "label": "RoomWall_04811",
    "en": "blue-paint wall",
    "jp": "あおいペイントウォール"
  },
  {
    "label": "RoomWall_04812",
    "en": "green-paint wall",
    "jp": "みどりのペイントウォール"
  },
  {
    "label": "RoomWall_04813",
    "en": "rustic-stone wall",
    "jp": "ランダムストーンのかべ"
  },
  {
    "label": "RoomWall_04814",
    "en": "blue-crown wall",
    "jp": "ブルークラウンのかべがみ"
  },
  {
    "label": "RoomWall_04815",
    "en": "black-crown wall",
    "jp": "ブラッククラウンのかべがみ"
  },
  {
    "label": "RoomWall_04816",
    "en": "pink-crown wall",
    "jp": "ピンククラウンのかべがみ"
  },
  {
    "label": "RoomWall_04817",
    "en": "beige art-deco wall",
    "jp": "ベージュのアールデコかべがみ"
  },
  {
    "label": "RoomWall_04818",
    "en": "red art-deco wall",
    "jp": "レッドのアールデコかべがみ"
  },
  {
    "label": "RoomWall_04819",
    "en": "screen wall",
    "jp": "ふすま"
  },
  {
    "label": "RoomWall_04820",
    "en": "gold-screen wall",
    "jp": "きんぱくのふすま"
  },
  {
    "label": "RoomWall_04821",
    "en": "circuit-board wall",
    "jp": "きばんのかべ"
  },
  {
    "label": "RoomWall_04825",
    "en": "shutter wall",
    "jp": "シャッターのかべ"
  },
  {
    "label": "RoomWall_04826",
    "en": "white botanical-tile wall",
    "jp": "しろいボタニカルタイルのかべ"
  },
  {
    "label": "RoomWall_04827",
    "en": "brown botanical-tile wall",
    "jp": "ブラウンボタニカルタイルのかべ"
  },
  {
    "label": "RoomWall_04828",
    "en": "chic wall",
    "jp": "クラシックなかべがみ"
  },
  {
    "label": "RoomWall_04830",
    "en": "lattice wall",
    "jp": "オリエンタルなラティス"
  },
  {
    "label": "RoomWall_04831",
    "en": "beige blossoming wall",
    "jp": "ベージュのくさばなもようのかべ"
  },
  {
    "label": "RoomWall_04832",
    "en": "wavy-tile wall",
    "jp": "ウェーブタイルのかべ"
  },
  {
    "label": "RoomWall_04833",
    "en": "bamboo wall",
    "jp": "バンブーなかべ"
  },
  {
    "label": "RoomWall_04834",
    "en": "beige desert-tile wall",
    "jp": "ベージュのモロッカンタイルかべ"
  },
  {
    "label": "RoomWall_04835",
    "en": "blue desert-tile wall",
    "jp": "ブルーのモロッカンタイルかべ"
  },
  {
    "label": "RoomWall_04836",
    "en": "bamboo-screen wall",
    "jp": "すだれのかべ"
  },
  {
    "label": "RoomWall_04837",
    "en": "classic-library wall",
    "jp": "ライブラリーなかべ"
  },
  {
    "label": "RoomWall_04838",
    "en": "manga-library wall",
    "jp": "マンガライブラリーなかべ"
  },
  {
    "label": "RoomWall_04839",
    "en": "bank-vault wall",
    "jp": "かしきんこのかべ"
  },
  {
    "label": "RoomWall_04840",
    "en": "cabin wall",
    "jp": "ログハウスのかべ"
  },
  {
    "label": "RoomWall_04841",
    "en": "crepe-design wall",
    "jp": "ちりめんもようのかべがみ"
  },
  {
    "label": "RoomWall_04843",
    "en": "construction-site wall",
    "jp": "こうじげんばのかべ"
  },
  {
    "label": "RoomWall_04844",
    "en": "stacked-wood wall",
    "jp": "ウッディなかべ"
  },
  {
    "label": "RoomWall_04845",
    "en": "rammed-earth wall",
    "jp": "はんちくのかべ"
  },
  {
    "label": "RoomWall_04846",
    "en": "groovy wall",
    "jp": "サイケなかべがみ"
  },
  {
    "label": "RoomWall_04847",
    "en": "retro flower-print wall",
    "jp": "レトロなはながらのかべがみ"
  },
  {
    "label": "RoomWall_04848",
    "en": "blue intricate wall",
    "jp": "あおいテキスタイルのかべ"
  },
  {
    "label": "RoomWall_04849",
    "en": "yellow intricate wall",
    "jp": "きいろいテキスタイルのかべ"
  },
  {
    "label": "RoomWall_04850",
    "en": "ivy wall",
    "jp": "つたのかべ"
  },
  {
    "label": "RoomWall_04851",
    "en": "rock-climbing wall",
    "jp": "ボルダリングのかべ"
  },
  {
    "label": "RoomWall_04852",
    "en": "skyscraper wall",
    "jp": "まてんろうのかべ"
  },
  {
    "label": "RoomWall_04853",
    "en": "bamboo-grove wall",
    "jp": "ちくりんのかべ"
  },
  {
    "label": "RoomWall_04854",
    "en": "paintball wall",
    "jp": "アトリエのかべ"
  },
  {
    "label": "RoomWall_04855",
    "en": "snowflake wall",
    "jp": "スノーフレークのかべがみ"
  },
  {
    "label": "RoomWall_04856",
    "en": "dirt-clod wall",
    "jp": "ボロいつちかべ"
  },
  {
    "label": "RoomWall_04857",
    "en": "old wallpaper",
    "jp": "ボロいかべがみ"
  },
  {
    "label": "RoomWall_04858",
    "en": "wild-wood wall",
    "jp": "ワイルドウッドのかべ"
  },
  {
    "label": "RoomWall_04859",
    "en": "wooden-mosaic wall",
    "jp": "よせぎのかべ"
  },
  {
    "label": "RoomWall_04860",
    "en": "dark wooden-mosaic wall",
    "jp": "ダークなよせぎのかべ"
  },
  {
    "label": "RoomWall_04861",
    "en": "stately wall",
    "jp": "ルネッサンスなかべ"
  },
  {
    "label": "RoomWall_04862",
    "en": "mosaic-tile wall",
    "jp": "アートモザイクタイルのかべ"
  },
  {
    "label": "RoomWall_04863",
    "en": "shoji screen",
    "jp": "しょうじ"
  },
  {
    "label": "RoomWall_04864",
    "en": "modern shoji-screen wall",
    "jp": "モダンなしょうじ"
  },
  {
    "label": "RoomWall_04865",
    "en": "honeycomb wall",
    "jp": "ビーハイブなかべ"
  },
  {
    "label": "RoomWall_04866",
    "en": "exquisite wall",
    "jp": "チャイナなかべ"
  },
  {
    "label": "RoomWall_04867",
    "en": "yellow simple-cloth wall",
    "jp": "ベージュのシンプルクロス"
  },
  {
    "label": "RoomWall_04868",
    "en": "pink simple-cloth wall",
    "jp": "ピンクのシンプルクロス"
  },
  {
    "label": "RoomWall_04869",
    "en": "blue simple-cloth wall",
    "jp": "あおいシンプルクロス"
  },
  {
    "label": "RoomWall_04870",
    "en": "orange molded-panel wall",
    "jp": "オレンジのパネルモールドかべ"
  },
  {
    "label": "RoomWall_04871",
    "en": "blue molded-panel wall",
    "jp": "あおいパネルモールドかべ"
  },
  {
    "label": "RoomWall_04872",
    "en": "gray molded-panel wall",
    "jp": "グレーのパネルモールドかべ"
  },
  {
    "label": "RoomWall_04873",
    "en": "abstract wall",
    "jp": "アブストラクトなかべ"
  },
  {
    "label": "RoomWall_04874",
    "en": "blue heart-pattern wall",
    "jp": "ブルーハートのかべがみ"
  },
  {
    "label": "RoomWall_04875",
    "en": "pink heart-pattern wall",
    "jp": "ピンクハートのかべがみ"
  },
  {
    "label": "RoomWall_04876",
    "en": "industrial wall",
    "jp": "ファクトリーなかべ"
  },
  {
    "label": "RoomWall_04877",
    "en": "beaded-curtain wall",
    "jp": "たまのれんのかべ"
  },
  {
    "label": "RoomWall_04878",
    "en": "heavy-curtain wall",
    "jp": "どんちょうのかべ"
  },
  {
    "label": "RoomWall_04879",
    "en": "marine pop wall",
    "jp": "おサカナのかべがみ"
  },
  {
    "label": "RoomWall_04880",
    "en": "butterflies wall",
    "jp": "バタフライなかべがみ"
  },
  {
    "label": "RoomWall_04881",
    "en": "kisses wall",
    "jp": "キッスのかべがみ"
  },
  {
    "label": "RoomWall_04882",
    "en": "blackboard wall",
    "jp": "こくばんのかべ"
  },
  {
    "label": "RoomWall_04883",
    "en": "camo wall",
    "jp": "めいさいのかべがみ"
  },
  {
    "label": "RoomWall_04884",
    "en": "blue camo wall",
    "jp": "ブルーめいさいのかべがみ"
  },
  {
    "label": "RoomWall_04885",
    "en": "purple camo wall",
    "jp": "パープルめいさいのかべがみ"
  },
  {
    "label": "RoomWall_04886",
    "en": "pastel puzzle wall",
    "jp": "パステルパズルかべがみ"
  },
  {
    "label": "RoomWall_04887",
    "en": "colorful puzzle wall",
    "jp": "カラフルパズルかべがみ"
  },
  {
    "label": "RoomWall_04888",
    "en": "blue playroom wall",
    "jp": "あおいキッズルームのかべがみ"
  },
  {
    "label": "RoomWall_04889",
    "en": "pink playroom wall",
    "jp": "ピンクのキッズルームのかべがみ"
  },
  {
    "label": "RoomWall_04890",
    "en": "concrete wall",
    "jp": "コンクリートのかべ"
  },
  {
    "label": "RoomWall_04891",
    "en": "white delicate-blooms wall",
    "jp": "しろいこばながらのかべがみ"
  },
  {
    "label": "RoomWall_04892",
    "en": "monochromatic dotted wall",
    "jp": "モノクロドットのかべがみ"
  },
  {
    "label": "RoomWall_04893",
    "en": "pink flower-print wall",
    "jp": "ピンクのはながらのかべがみ"
  },
  {
    "label": "RoomWall_04894",
    "en": "golden wall",
    "jp": "おうごんのかべ"
  },
  {
    "label": "RoomWall_04895",
    "en": "pink blossoming wall",
    "jp": "ピンクのくさばなもようのかべ"
  },
  {
    "label": "RoomWall_04896",
    "en": "blue blossoming wall",
    "jp": "あおいくさばなもようのかべ"
  },
  {
    "label": "RoomWall_04897",
    "en": "red delicate-blooms wall",
    "jp": "あかいこばながらのかべがみ"
  },
  {
    "label": "RoomWall_04898",
    "en": "green delicate-blooms wall",
    "jp": "グリーンのこばながらのかべがみ"
  },
  {
    "label": "RoomWall_04899",
    "en": "pastel dotted wall",
    "jp": "パステルドットのかべがみ"
  },
  {
    "label": "RoomWall_04900",
    "en": "red dotted wall",
    "jp": "レッドドットのかべがみ"
  },
  {
    "label": "RoomWall_04902",
    "en": "purple dotted wall",
    "jp": "パープルドットのかべがみ"
  },
  {
    "label": "RoomWall_04903",
    "en": "green blossoming wall",
    "jp": "みどりのくさばなもようのかべ"
  },
  {
    "label": "RoomWall_04904",
    "en": "modern wood wall",
    "jp": "ミックスウッドのかべ"
  },
  {
    "label": "RoomWall_04905",
    "en": "autumn wall",
    "jp": "こうようのかべ"
  },
  {
    "label": "RoomWall_04906",
    "en": "rose wall",
    "jp": "バラのかべがみ"
  },
  {
    "label": "RoomWall_04907",
    "en": "purple-rose wall",
    "jp": "むらさきのバラのかべがみ"
  },
  {
    "label": "RoomWall_04908",
    "en": "mod wall",
    "jp": "キャッチーなかべ"
  },
  {
    "label": "RoomWall_04909",
    "en": "honeycomb-tile wall",
    "jp": "ハニカムタイルのかべ"
  },
  {
    "label": "RoomWall_04910",
    "en": "monochromatic-tile wall",
    "jp": "モノクロタイルのかべ"
  },
  {
    "label": "RoomWall_04911",
    "en": "wooden-knot wall",
    "jp": "ふしありウッドウォール"
  },
  {
    "label": "RoomWall_04912",
    "en": "blue honeycomb-tile wall",
    "jp": "あおいハニカムタイルのかべ"
  },
  {
    "label": "RoomWall_04913",
    "en": "green honeycomb-tile wall",
    "jp": "みどりのハニカムタイルのかべ"
  },
  {
    "label": "RoomWall_04914",
    "en": "white honeycomb-tile wall",
    "jp": "しろいハニカムタイルのかべ"
  },
  {
    "label": "RoomWall_04915",
    "en": "orange wall",
    "jp": "オレンジのかべがみ"
  },
  {
    "label": "RoomWall_04916",
    "en": "apple wall",
    "jp": "リンゴのかべがみ"
  },
  {
    "label": "RoomWall_04917",
    "en": "pear wall",
    "jp": "ナシのかべがみ"
  },
  {
    "label": "RoomWall_04918",
    "en": "peach wall",
    "jp": "モモのかべがみ"
  },
  {
    "label": "RoomWall_04919",
    "en": "cherry wall",
    "jp": "さくらんぼのかべがみ"
  },
  {
    "label": "RoomWall_04920",
    "en": "white perforated-board wall",
    "jp": "しろいパンチングボードのかべ"
  },
  {
    "label": "RoomWall_04921",
    "en": "perforated-board wall",
    "jp": "パンチングボードのかべ"
  },
  {
    "label": "RoomWall_04922",
    "en": "black perforated-board wall",
    "jp": "くろいパンチングボードのかべ"
  },
  {
    "label": "RoomWall_04923",
    "en": "gray shanty wall",
    "jp": "グレーのトタンかべ"
  },
  {
    "label": "RoomWall_04924",
    "en": "pink shanty wall",
    "jp": "ピンクのトタンかべ"
  },
  {
    "label": "RoomWall_04925",
    "en": "blue shanty wall",
    "jp": "ブルーのトタンかべ"
  },
  {
    "label": "RoomWall_04926",
    "en": "brown shanty wall",
    "jp": "ちゃいろのトタンかべ"
  },
  {
    "label": "RoomWall_04927",
    "en": "white-brick wall",
    "jp": "しろレンガのかべ"
  },
  {
    "label": "RoomWall_04928",
    "en": "red-brick wall",
    "jp": "あかレンガのかべ"
  },
  {
    "label": "RoomWall_04929",
    "en": "black-brick wall",
    "jp": "くろレンガのかべ"
  },
  {
    "label": "RoomWall_04930",
    "en": "aqua tile wall",
    "jp": "みずいろタイルのかべ"
  },
  {
    "label": "RoomWall_04931",
    "en": "colorful-tile wall",
    "jp": "カラフルタイルのかべ"
  },
  {
    "label": "RoomWall_04932",
    "en": "dark-chocolate wall",
    "jp": "ビターチョコなかべ"
  },
  {
    "label": "RoomWall_04933",
    "en": "white-chocolate wall",
    "jp": "ホワイトチョコなかべ"
  },
  {
    "label": "RoomWall_04934",
    "en": "strawberry-chocolate wall",
    "jp": "いちごチョコなかべ"
  },
  {
    "label": "RoomWall_04935",
    "en": "green flower-print wall",
    "jp": "グリーンのはながらかべがみ"
  },
  {
    "label": "RoomWall_04936",
    "en": "ancient wall",
    "jp": "エジプトなかべ"
  },
  {
    "label": "RoomWall_04939",
    "en": "white simple-cloth wall",
    "jp": "しろいシンプルクロス"
  },
  {
    "label": "RoomWall_04940",
    "en": "blue subway-tile wall",
    "jp": "あおいメトロタイルのかべ"
  },
  {
    "label": "RoomWall_04941",
    "en": "white subway-tile wall",
    "jp": "しろいメトロタイルのかべ"
  },
  {
    "label": "RoomWall_04943",
    "en": "pink-striped wall",
    "jp": "ピンクストライプのかべがみ"
  },
  {
    "label": "RoomWall_04944",
    "en": "gray-striped wall",
    "jp": "モノクロストライプのかべがみ"
  },
  {
    "label": "RoomWall_04945",
    "en": "blue-striped wall",
    "jp": "ブルーストライプのかべがみ"
  },
  {
    "label": "RoomWall_04946",
    "en": "yellow-striped wall",
    "jp": "イエローストライプのかべがみ"
  },
  {
    "label": "RoomWall_04947",
    "en": "sakura-wood wall",
    "jp": "さくらのウッドウォール"
  },
  {
    "label": "RoomWall_04948",
    "en": "blue painted-wood wall",
    "jp": "あおいペイントウッドのかべ"
  },
  {
    "label": "RoomWall_04949",
    "en": "green painted-wood wall",
    "jp": "みどりのペイントウッドのかべ"
  },
  {
    "label": "RoomWall_05164",
    "en": "mush wall",
    "jp": "キノコのかべがみ"
  },
  {
    "label": "RoomWall_05215",
    "en": "mortar wall",
    "jp": "しっくいのへい"
  },
  {
    "label": "RoomWall_05216",
    "en": "stone wall",
    "jp": "いしのかべ"
  },
  {
    "label": "RoomWall_05217",
    "en": "straw wall",
    "jp": "ストローなかべ"
  },
  {
    "label": "RoomWall_05218",
    "en": "office wall",
    "jp": "オフィスのかべ"
  },
  {
    "label": "RoomWall_05221",
    "en": "street-art wall",
    "jp": "ストリートアートのかべ"
  },
  {
    "label": "RoomWall_05222",
    "en": "dig-site wall",
    "jp": "ちそうのかべがみ"
  },
  {
    "label": "RoomWall_05223",
    "en": "woodland wall",
    "jp": "じゅかいなかべ"
  },
  {
    "label": "RoomWall_05224",
    "en": "imperial wall",
    "jp": "おうちょうのかべ"
  },
  {
    "label": "RoomWall_05225",
    "en": "ramshackle wall",
    "jp": "はいきょのかべ"
  },
  {
    "label": "RoomWall_05226",
    "en": "party wall",
    "jp": "パーティーなかべがみ"
  },
  {
    "label": "RoomWall_05227",
    "en": "dojo wall",
    "jp": "けいこべやのかべ"
  },
  {
    "label": "RoomWall_05228",
    "en": "ruins wall",
    "jp": "いせきのかべ"
  },
  {
    "label": "RoomWall_05229",
    "en": "garbage-heap wall",
    "jp": "ゴミのやまなかべ"
  },
  {
    "label": "RoomWall_05230",
    "en": "Jingle wall",
    "jp": "クリスマスなかべ"
  },
  {
    "label": "RoomWall_05231",
    "en": "Bunny Day wall",
    "jp": "イースターなかべがみ"
  },
  {
    "label": "RoomWall_05400",
    "en": "cityscape wall",
    "jp": "やけいのかべ"
  },
  {
    "label": "RoomWall_05456",
    "en": "tree-lined wall",
    "jp": "がいろじゅのかべ"
  },
  {
    "label": "RoomWall_05457",
    "en": "jungle wall",
    "jp": "ジャングルのかべがみ"
  },
  {
    "label": "RoomWall_05458",
    "en": "mossy-garden wall",
    "jp": "こけにわのかべ"
  },
  {
    "label": "RoomWall_05481",
    "en": "backyard-fence wall",
    "jp": "うらにわのかべ"
  },
  {
    "label": "RoomWall_05482",
    "en": "arched-window wall",
    "jp": "きれいなガラスのかべ"
  },
  {
    "label": "RoomWall_05483",
    "en": "café-curtain wall",
    "jp": "カフェカーテンのかべ"
  },
  {
    "label": "RoomWall_05484",
    "en": "meadow vista",
    "jp": "こうげんなかべ"
  },
  {
    "label": "RoomWall_05485",
    "en": "chain-link fence",
    "jp": "あきちのかべ"
  },
  {
    "label": "RoomWall_05486",
    "en": "ocean-horizon wall",
    "jp": "すいへいせんのかべ"
  },
  {
    "label": "RoomWall_05487",
    "en": "rice-paddy wall",
    "jp": "でんえんふうけいのかべ"
  },
  {
    "label": "RoomWall_05488",
    "en": "desert vista",
    "jp": "さばくなかべ"
  },
  {
    "label": "RoomWall_05489",
    "en": "western vista",
    "jp": "こうやのかべ"
  },
  {
    "label": "RoomWall_05490",
    "en": "server-room wall",
    "jp": "サーバールームのかべ"
  },
  {
    "label": "RoomWall_05491",
    "en": "security-monitors wall",
    "jp": "モニタールームのかべ"
  },
  {
    "label": "RoomWall_05494",
    "en": "future-tech wall",
    "jp": "オーバーテクノロジーなかべ"
  },
  {
    "label": "RoomWall_05495",
    "en": "laboratory wall",
    "jp": "ラボのかべ"
  },
  {
    "label": "RoomWall_05498",
    "en": "ski-slope wall",
    "jp": "ゲレンデなかべがみ"
  },
  {
    "label": "RoomWall_05499",
    "en": "stormy-night wall",
    "jp": "あらしのよるのかべ"
  },
  {
    "label": "RoomWall_05500",
    "en": "starry-sky wall",
    "jp": "ほしぞらのかべ"
  },
  {
    "label": "RoomWall_05501",
    "en": "sea view",
    "jp": "おおうなばらのかべ"
  },
  {
    "label": "RoomWall_05502",
    "en": "palace wall",
    "jp": "きゅうでんのかべ"
  },
  {
    "label": "RoomWall_05503",
    "en": "stadium wall",
    "jp": "スタジアムのかべ"
  },
  {
    "label": "RoomWall_05504",
    "en": "sky wall",
    "jp": "くものうえのかべ"
  },
  {
    "label": "RoomWall_05505",
    "en": "ice wall",
    "jp": "アイスなかべがみ"
  },
  {
    "label": "RoomWall_05506",
    "en": "magma-cavern wall",
    "jp": "かざんどうくつのかべ"
  },
  {
    "label": "RoomWall_05508",
    "en": "underwater wall",
    "jp": "すいちゅうのかべがみ"
  },
  {
    "label": "RoomWall_05509",
    "en": "dungeon wall",
    "jp": "ちかろうのかべ"
  },
  {
    "label": "RoomWall_05510",
    "en": "sci-fi wall",
    "jp": "うちゅうせんのかべ"
  },
  {
    "label": "RoomWall_05512",
    "en": "ringside seating",
    "jp": "プロレスのかべ"
  },
  {
    "label": "RoomWall_05513",
    "en": "summit wall",
    "jp": "さんちょうのかべ"
  },
  {
    "label": "RoomWall_05514",
    "en": "mangrove wall",
    "jp": "マングローブのかべ"
  },
  {
    "label": "RoomWall_05520",
    "en": "skull wall",
    "jp": "スカルなかべがみ"
  },
  {
    "label": "RoomWall_05521",
    "en": "standard tearoom wall",
    "jp": "スタンダードなちゃしつのかべ"
  },
  {
    "label": "RoomWall_05528",
    "en": "starry wall",
    "jp": "スターなかべ"
  },
  {
    "label": "RoomWall_05559",
    "en": "basic wall",
    "jp": "シンプルパネルのかべ"
  },
  {
    "label": "RoomWall_05661",
    "en": "tropical vista",
    "jp": "みなみのうみなかべ"
  },
  {
    "label": "RoomWall_05662",
    "en": "iceberg wall",
    "jp": "ひょうざんのかべ"
  },
  {
    "label": "RoomWall_06004",
    "en": "Nook Inc. wall",
    "jp": "たぬきかいはつのかべがみ"
  },
  {
    "label": "RoomWall_06850",
    "en": "brown-brick wall",
    "jp": "ちゃいろいレンガのかべ"
  },
  {
    "label": "RoomWall_06851",
    "en": "brown-crown wall",
    "jp": "ブラウンクラウンのかべがみ"
  },
  {
    "label": "RoomWall_06852",
    "en": "blue delicate-blooms wall",
    "jp": "あおいこばながらのかべがみ"
  },
  {
    "label": "RoomWall_06853",
    "en": "red perforated-board wall",
    "jp": "あかいパンチングボードのかべ"
  },
  {
    "label": "RoomWall_06854",
    "en": "green molded-panel wall",
    "jp": "みどりのパネルモールドかべ"
  },
  {
    "label": "RoomWall_06855",
    "en": "orange camo wall",
    "jp": "オレンジめいさいのかべがみ"
  },
  {
    "label": "RoomWall_06856",
    "en": "red two-toned tile wall",
    "jp": "あかいツートンタイルのかべ"
  },
  {
    "label": "RoomWall_06857",
    "en": "peach two-toned tile wall",
    "jp": "ももいろツートンタイルのかべ"
  },
  {
    "label": "RoomWall_06858",
    "en": "blue two-toned tile wall",
    "jp": "あおいツートンタイルのかべ"
  },
  {
    "label": "RoomWall_06859",
    "en": "black two-toned tile wall",
    "jp": "モノクロツートンタイルのかべ"
  },
  {
    "label": "RoomWall_06861",
    "en": "white hallway wall",
    "jp": "しろいホールのかべ"
  },
  {
    "label": "RoomWall_06862",
    "en": "black hallway wall",
    "jp": "くろいホールのかべ"
  },
  {
    "label": "RoomWall_06863",
    "en": "olive desert-tile wall",
    "jp": "きみどりモロッカンタイルかべ"
  },
  {
    "label": "RoomWall_06864",
    "en": "purple desert-tile wall",
    "jp": "むらさきのモロッカンタイルかべ"
  },
  {
    "label": "RoomWall_06865",
    "en": "yellow playroom wall",
    "jp": "きいろいキッズルームのかべがみ"
  },
  {
    "label": "RoomWall_06866",
    "en": "green playroom wall",
    "jp": "みどりのキッズルームのかべがみ"
  },
  {
    "label": "RoomWall_06868",
    "en": "white-rose wall",
    "jp": "しろいバラのかべがみ"
  },
  {
    "label": "RoomWall_06869",
    "en": "blue-rose wall",
    "jp": "あおいバラのかべがみ"
  },
  {
    "label": "RoomWall_06870",
    "en": "red heart-pattern wall",
    "jp": "レッドハートのかべがみ"
  },
  {
    "label": "RoomWall_06871",
    "en": "yellow heart-pattern wall",
    "jp": "イエローハートのかべがみ"
  },
  {
    "label": "RoomWall_06872",
    "en": "yellow flower-print wall",
    "jp": "きいろいはながらかべがみ"
  },
  {
    "label": "RoomWall_06873",
    "en": "blue flower-print wall",
    "jp": "ブルーのはながらかべがみ"
  },
  {
    "label": "RoomWall_06874",
    "en": "sepia puzzle wall",
    "jp": "セピアパズルかべがみ"
  },
  {
    "label": "RoomWall_06875",
    "en": "purple puzzle wall",
    "jp": "パープルパズルかべがみ"
  },
  {
    "label": "RoomWall_06876",
    "en": "botanical-tile wall",
    "jp": "ボタニカルタイルのかべ"
  },
  {
    "label": "RoomWall_06877",
    "en": "black botanical-tile wall",
    "jp": "くろいボタニカルタイルのかべ"
  },
  {
    "label": "RoomWall_06878",
    "en": "green intricate wall",
    "jp": "みどりのテキスタイルのかべ"
  },
  {
    "label": "RoomWall_06879",
    "en": "red intricate wall",
    "jp": "あかいテキスタイルのかべ"
  },
  {
    "label": "RoomWall_07127",
    "en": "blue tile wall",
    "jp": "あおいタイルのかべ"
  },
  {
    "label": "RoomWall_07187",
    "en": "forest wall",
    "jp": "キノコのもりのかべ"
  },
  {
    "label": "RoomWall_07205",
    "en": "cherry-blossom-trees wall",
    "jp": "さくらなみきのかべ"
  },
  {
    "label": "RoomWall_07215",
    "en": "cute white wall",
    "jp": "しろいキュートなかべ"
  },
  {
    "label": "RoomWall_07216",
    "en": "cute red wall",
    "jp": "あかいキュートなかべ"
  },
  {
    "label": "RoomWall_07217",
    "en": "cute blue wall",
    "jp": "ブルーなキュートのかべ"
  },
  {
    "label": "RoomWall_07218",
    "en": "cute yellow wall",
    "jp": "きいろいキュートなかべ"
  },
  {
    "label": "RoomWall_07241",
    "en": "blue diner wall",
    "jp": "あおいダイナーのかべ"
  },
  {
    "label": "RoomWall_07242",
    "en": "pink diner wall",
    "jp": "ももいろダイナーのかべ"
  },
  {
    "label": "RoomWall_07243",
    "en": "gray diner wall",
    "jp": "しろいダイナーのかべ"
  },
  {
    "label": "RoomWall_07244",
    "en": "brown diner wall",
    "jp": "ちゃいろいダイナーのかべ"
  },
  {
    "label": "RoomWall_07274",
    "en": "pink quilt wall",
    "jp": "ピンクキルトのかべ"
  },
  {
    "label": "RoomWall_07275",
    "en": "purple quilt wall",
    "jp": "パープルキルトのかべ"
  },
  {
    "label": "RoomWall_07276",
    "en": "yellow quilt wall",
    "jp": "イエローキルトのかべ"
  },
  {
    "label": "RoomWall_07277",
    "en": "blue quilt wall",
    "jp": "ブルーキルトのかべ"
  },
  {
    "label": "RoomWall_10171",
    "en": "Hello Kitty wall",
    "jp": "ハローキティなかべ"
  },
  {
    "label": "RoomWall_10172",
    "en": "Cinnamoroll wall",
    "jp": "シナモロールなかべ"
  },
  {
    "label": "RoomWall_10173",
    "en": "My Melody wall",
    "jp": "マイメロディなかべ"
  },
  {
    "label": "RoomWall_10174",
    "en": "Pompompurin wall",
    "jp": "ポムポムプリンなかべ"
  },
  {
    "label": "RoomWall_10175",
    "en": "Kerokerokeroppi wall",
    "jp": "けろけろけろっぴなかべ"
  },
  {
    "label": "RoomWall_10176",
    "en": "Kiki & Lala wall",
    "jp": "キキ&ララなかべ"
  },
  {
    "label": "RoomWall_11176",
    "en": "chic tearoom wall",
    "jp": "シックなちゃしつのかべ"
  },
  {
    "label": "RoomWall_11177",
    "en": "soothing tearoom wall",
    "jp": "おちついたちゃしつのかべ"
  },
  {
    "label": "RoomWall_11178",
    "en": "modern tearoom wall",
    "jp": "モダンなちゃしつのかべ"
  },
  {
    "label": "RoomWall_11180",
    "en": "harmonious wall",
    "jp": "オリエンタルなかべ"
  },
  {
    "label": "RoomWall_11915",
    "en": "misty-garden wall",
    "jp": "こさめのふるかべ"
  },
  {
    "label": "RoomWall_12461",
    "en": "wedding-party wall",
    "jp": "ウェディングパーティーのかべ"
  },
  {
    "label": "RoomWall_12466",
    "en": "white wedding wall",
    "jp": "ウェディングなかべ・ホワイト"
  },
  {
    "label": "RoomWall_12468",
    "en": "brown wedding wall",
    "jp": "ウェディングなかべ・ブラウン"
  },
  {
    "label": "RoomWall_12469",
    "en": "green wedding wall",
    "jp": "ウェディングなかべ・グリーン"
  },
  {
    "label": "RoomWall_12566",
    "en": "mermaid wall",
    "jp": "マーメイドなかべがみ"
  },
  {
    "label": "RoomWall_12567",
    "en": "pirate wall",
    "jp": "かいぞくのかべがみ"
  },
  {
    "label": "RoomWall_13224",
    "en": "spooky wall",
    "jp": "ハロウィンなかべ"
  },
  {
    "label": "RoomWall_13230",
    "en": "fireworks-show wall",
    "jp": "はなびたいかいのかべ"
  },
  {
    "label": "RoomWall_13318",
    "en": "Turkey Day wall",
    "jp": "サンクスギビングなかべ"
  },
  {
    "label": "RoomWall_13603",
    "en": "falling-snow wall",
    "jp": "ゆきのふるかべ"
  },
  {
    "label": "RoomWall_13609",
    "en": "aurora wall",
    "jp": "オーロラのかべ"
  },
  {
    "label": "RoomWall_13805",
    "en": "mushroom mural",
    "jp": "スーパーマリオのかべ"
  },
  {
    "label": "RoomWall_14252",
    "en": "prom wall",
    "jp": "プロムのかべ"
  }
];

itemNames.floors = [
  {
    "label": "RoomFloor_04797",
    "en": "basement flooring",
    "jp": "ちかしつのゆか"
  },
  {
    "label": "RoomFloor_04950",
    "en": "ship deck",
    "jp": "かんぱんのゆか"
  },
  {
    "label": "RoomFloor_04951",
    "en": "concrete flooring",
    "jp": "コンクリートのゆか"
  },
  {
    "label": "RoomFloor_04952",
    "en": "green rubber flooring",
    "jp": "グリーンラバーのゆか"
  },
  {
    "label": "RoomFloor_04953",
    "en": "arabesque flooring",
    "jp": "アラベスクなゆか"
  },
  {
    "label": "RoomFloor_04954",
    "en": "blue rubber flooring",
    "jp": "ブルーラバーのゆか"
  },
  {
    "label": "RoomFloor_04955",
    "en": "jointed-mat flooring",
    "jp": "ジョイントマットのゆか"
  },
  {
    "label": "RoomFloor_04956",
    "en": "pastel puzzle flooring",
    "jp": "パステルパズルのゆか"
  },
  {
    "label": "RoomFloor_04957",
    "en": "colorful puzzle flooring",
    "jp": "カラフルパズルのゆか"
  },
  {
    "label": "RoomFloor_04958",
    "en": "rose flooring",
    "jp": "バラのじゅうたん"
  },
  {
    "label": "RoomFloor_04959",
    "en": "leopard-print flooring",
    "jp": "レオパードなゆか"
  },
  {
    "label": "RoomFloor_04960",
    "en": "steel flooring",
    "jp": "てっぱんのゆか"
  },
  {
    "label": "RoomFloor_04961",
    "en": "giraffe-print flooring",
    "jp": "ジラフなゆか"
  },
  {
    "label": "RoomFloor_04962",
    "en": "zebra-print flooring",
    "jp": "ゼブラなゆか"
  },
  {
    "label": "RoomFloor_04963",
    "en": "stripe flooring",
    "jp": "ストライプなゆか"
  },
  {
    "label": "RoomFloor_04964",
    "en": "bamboo flooring",
    "jp": "バンブーなゆか"
  },
  {
    "label": "RoomFloor_04965",
    "en": "beige desert-tile flooring",
    "jp": "ベージュのモロッカンタイルゆか"
  },
  {
    "label": "RoomFloor_04966",
    "en": "blue desert-tile flooring",
    "jp": "ブルーのモロッカンタイルゆか"
  },
  {
    "label": "RoomFloor_04967",
    "en": "rattan flooring",
    "jp": "ラタンのゆか"
  },
  {
    "label": "RoomFloor_04968",
    "en": "lunar surface",
    "jp": "げつめんのゆか"
  },
  {
    "label": "RoomFloor_04969",
    "en": "cork flooring",
    "jp": "コルクフローリング"
  },
  {
    "label": "RoomFloor_04970",
    "en": "sandy-beach flooring",
    "jp": "すなはまのゆか"
  },
  {
    "label": "RoomFloor_04971",
    "en": "terra-cotta flooring",
    "jp": "テラコッタタイルのゆか"
  },
  {
    "label": "RoomFloor_04972",
    "en": "hexagonal floral flooring",
    "jp": "あさのはタイルのゆか"
  },
  {
    "label": "RoomFloor_04973",
    "en": "random-square-tile flooring",
    "jp": "ランダムスクエアタイルのゆか"
  },
  {
    "label": "RoomFloor_04974",
    "en": "white-brick flooring",
    "jp": "しろレンガのゆか"
  },
  {
    "label": "RoomFloor_04975",
    "en": "red-brick flooring",
    "jp": "あかレンガのゆか"
  },
  {
    "label": "RoomFloor_04976",
    "en": "black-brick flooring",
    "jp": "くろレンガのゆか"
  },
  {
    "label": "RoomFloor_04977",
    "en": "floral rush-mat flooring",
    "jp": "はなござ"
  },
  {
    "label": "RoomFloor_04978",
    "en": "gravel flooring",
    "jp": "たまじゃりのゆか"
  },
  {
    "label": "RoomFloor_04979",
    "en": "backyard lawn",
    "jp": "しばふのゆか"
  },
  {
    "label": "RoomFloor_04980",
    "en": "field flooring",
    "jp": "はたけのゆか"
  },
  {
    "label": "RoomFloor_04981",
    "en": "dirt flooring",
    "jp": "つちのゆか"
  },
  {
    "label": "RoomFloor_04982",
    "en": "boxing-ring mat",
    "jp": "プロレスのゆか"
  },
  {
    "label": "RoomFloor_04983",
    "en": "Saharah's desert",
    "jp": "さばくなゆか"
  },
  {
    "label": "RoomFloor_04984",
    "en": "western desert",
    "jp": "こうやのゆか"
  },
  {
    "label": "RoomFloor_04985",
    "en": "sandlot",
    "jp": "あきちのゆか"
  },
  {
    "label": "RoomFloor_04986",
    "en": "money flooring",
    "jp": "マネーなゆか"
  },
  {
    "label": "RoomFloor_04987",
    "en": "cubic parquet flooring",
    "jp": "キュービックなよせぎのゆか"
  },
  {
    "label": "RoomFloor_04988",
    "en": "paintball flooring",
    "jp": "アトリエのゆか"
  },
  {
    "label": "RoomFloor_04989",
    "en": "ski-slope flooring",
    "jp": "ゲレンデのゆか"
  },
  {
    "label": "RoomFloor_04990",
    "en": "colored-leaves flooring",
    "jp": "こうようのゆか"
  },
  {
    "label": "RoomFloor_04991",
    "en": "light wood-pattern flooring",
    "jp": "ライトなよせぎざいくのゆか"
  },
  {
    "label": "RoomFloor_04992",
    "en": "dark wood-pattern flooring",
    "jp": "ダークなよせぎざいくのゆか"
  },
  {
    "label": "RoomFloor_04993",
    "en": "floral mosaic-tile flooring",
    "jp": "フローラルなモザイクタイル"
  },
  {
    "label": "RoomFloor_04994",
    "en": "argyle tile flooring",
    "jp": "アーガイルなタイルのゆか"
  },
  {
    "label": "RoomFloor_04995",
    "en": "patchwork-tile flooring",
    "jp": "パッチワークタイルのゆか"
  },
  {
    "label": "RoomFloor_04996",
    "en": "racetrack flooring",
    "jp": "レーストラックのゆか"
  },
  {
    "label": "RoomFloor_04997",
    "en": "parking flooring",
    "jp": "パーキングのゆか"
  },
  {
    "label": "RoomFloor_04998",
    "en": "arched-brick flooring",
    "jp": "アーチレンガのゆか"
  },
  {
    "label": "RoomFloor_04999",
    "en": "honeycomb flooring",
    "jp": "ハチミツなゆか"
  },
  {
    "label": "RoomFloor_05000",
    "en": "simple red flooring",
    "jp": "あかいシンプルカーペット"
  },
  {
    "label": "RoomFloor_05001",
    "en": "simple blue flooring",
    "jp": "あおいシンプルカーペット"
  },
  {
    "label": "RoomFloor_05003",
    "en": "simple purple flooring",
    "jp": "むらさきのシンプルカーペット"
  },
  {
    "label": "RoomFloor_05004",
    "en": "simple white flooring",
    "jp": "しろいシンプルカーペット"
  },
  {
    "label": "RoomFloor_05005",
    "en": "daisy meadow",
    "jp": "そうげんのゆか"
  },
  {
    "label": "RoomFloor_05006",
    "en": "wildflower meadow",
    "jp": "くさばなのじゅうたん"
  },
  {
    "label": "RoomFloor_05007",
    "en": "crosswalk flooring",
    "jp": "おうだんほどうのゆか"
  },
  {
    "label": "RoomFloor_05008",
    "en": "sidewalk flooring",
    "jp": "ほどうのゆか"
  },
  {
    "label": "RoomFloor_05009",
    "en": "train-station flooring",
    "jp": "えきのホームなゆか"
  },
  {
    "label": "RoomFloor_05010",
    "en": "scramble crosswalk",
    "jp": "スクランブルこうさてん"
  },
  {
    "label": "RoomFloor_05011",
    "en": "dig-site flooring",
    "jp": "ちていのゆか"
  },
  {
    "label": "RoomFloor_05012",
    "en": "imperial tile",
    "jp": "おうちょうなゆか"
  },
  {
    "label": "RoomFloor_05013",
    "en": "sumo ring",
    "jp": "どひょう"
  },
  {
    "label": "RoomFloor_05015",
    "en": "camo flooring",
    "jp": "めいさいのゆか"
  },
  {
    "label": "RoomFloor_05016",
    "en": "blue camo flooring",
    "jp": "ブルーめいさいのゆか"
  },
  {
    "label": "RoomFloor_05017",
    "en": "purple camo flooring",
    "jp": "パープルめいさいのゆか"
  },
  {
    "label": "RoomFloor_05018",
    "en": "common flooring",
    "jp": "よくあるゆかいた"
  },
  {
    "label": "RoomFloor_05019",
    "en": "pine-board flooring",
    "jp": "パインざいフローリング"
  },
  {
    "label": "RoomFloor_05020",
    "en": "white mosaic-tile flooring",
    "jp": "しろいモザイクタイルのゆか"
  },
  {
    "label": "RoomFloor_05021",
    "en": "golden flooring",
    "jp": "おうごんのゆか"
  },
  {
    "label": "RoomFloor_05022",
    "en": "light parquet flooring",
    "jp": "ライトなパーケットフローリング"
  },
  {
    "label": "RoomFloor_05023",
    "en": "monochromatic dot flooring",
    "jp": "モノクロドットカーペット"
  },
  {
    "label": "RoomFloor_05024",
    "en": "marine pop flooring",
    "jp": "なみもようのゆか"
  },
  {
    "label": "RoomFloor_05025",
    "en": "dark parquet flooring",
    "jp": "ダークなパーケットフローリング"
  },
  {
    "label": "RoomFloor_05026",
    "en": "mint dot flooring",
    "jp": "ミントドットカーペット"
  },
  {
    "label": "RoomFloor_05027",
    "en": "red dot flooring",
    "jp": "レッドドットカーペット"
  },
  {
    "label": "RoomFloor_05028",
    "en": "blue dot flooring",
    "jp": "ブルードットカーペット"
  },
  {
    "label": "RoomFloor_05030",
    "en": "water flooring",
    "jp": "みなものゆか"
  },
  {
    "label": "RoomFloor_05031",
    "en": "flagstone flooring",
    "jp": "フラッグストーンなゆか"
  },
  {
    "label": "RoomFloor_05032",
    "en": "birch flooring",
    "jp": "しらきのフローリング"
  },
  {
    "label": "RoomFloor_05033",
    "en": "natural-block flooring",
    "jp": "ナチュラルフローリングブロック"
  },
  {
    "label": "RoomFloor_05034",
    "en": "lobby flooring",
    "jp": "ロビーのゆか"
  },
  {
    "label": "RoomFloor_05035",
    "en": "dark-block flooring",
    "jp": "ダークなフローリングブロック"
  },
  {
    "label": "RoomFloor_05036",
    "en": "aqua tile flooring",
    "jp": "みずいろモザイクタイルのゆか"
  },
  {
    "label": "RoomFloor_05037",
    "en": "colorful mosaic-tile flooring",
    "jp": "カラフルモザイクタイルのゆか"
  },
  {
    "label": "RoomFloor_05038",
    "en": "brown honeycomb tile",
    "jp": "ブラウンハニカムタイルのゆか"
  },
  {
    "label": "RoomFloor_05039",
    "en": "tatami",
    "jp": "たたみ"
  },
  {
    "label": "RoomFloor_05040",
    "en": "blue honeycomb tile",
    "jp": "ブルーハニカムタイルのゆか"
  },
  {
    "label": "RoomFloor_05041",
    "en": "green honeycomb tile",
    "jp": "グリーンハニカムタイルのゆか"
  },
  {
    "label": "RoomFloor_05042",
    "en": "white honeycomb tile",
    "jp": "ホワイトハニカムタイルのゆか"
  },
  {
    "label": "RoomFloor_05043",
    "en": "orange retro flooring",
    "jp": "オレンジレトロなゆか"
  },
  {
    "label": "RoomFloor_05044",
    "en": "modern wood flooring",
    "jp": "ミックスウッドのフローリング"
  },
  {
    "label": "RoomFloor_05045",
    "en": "green retro flooring",
    "jp": "グリーンレトロなゆか"
  },
  {
    "label": "RoomFloor_05046",
    "en": "gray vinyl flooring",
    "jp": "モノクロピータイル"
  },
  {
    "label": "RoomFloor_05047",
    "en": "red-and-black vinyl flooring",
    "jp": "あかくろピータイル"
  },
  {
    "label": "RoomFloor_05048",
    "en": "green vinyl flooring",
    "jp": "みどりのピータイル"
  },
  {
    "label": "RoomFloor_05049",
    "en": "wooden-knot flooring",
    "jp": "ふしありフローリング"
  },
  {
    "label": "RoomFloor_05050",
    "en": "dark-chocolates flooring",
    "jp": "ビターチョコアソートなゆか"
  },
  {
    "label": "RoomFloor_05051",
    "en": "palace tile",
    "jp": "きゅうでんのゆか"
  },
  {
    "label": "RoomFloor_05052",
    "en": "white-chocolates flooring",
    "jp": "ホワイトチョコアソートなゆか"
  },
  {
    "label": "RoomFloor_05053",
    "en": "berry-chocolates flooring",
    "jp": "いちごチョコアソートなゆか"
  },
  {
    "label": "RoomFloor_05054",
    "en": "pyramid tile",
    "jp": "ピラミッドのゆか"
  },
  {
    "label": "RoomFloor_05056",
    "en": "sakura-wood flooring",
    "jp": "さくらのウッドフローリング"
  },
  {
    "label": "RoomFloor_05057",
    "en": "blue-paint flooring",
    "jp": "あおいペイントフローリング"
  },
  {
    "label": "RoomFloor_05058",
    "en": "green-paint flooring",
    "jp": "みどりのペイントフローリング"
  },
  {
    "label": "RoomFloor_05059",
    "en": "pink-paint flooring",
    "jp": "ピンクのペイントフローリング"
  },
  {
    "label": "RoomFloor_05060",
    "en": "white-paint flooring",
    "jp": "しろいペイントフローリング"
  },
  {
    "label": "RoomFloor_05061",
    "en": "light herringbone flooring",
    "jp": "ライトなヘリンボーンのゆか"
  },
  {
    "label": "RoomFloor_05062",
    "en": "dark herringbone flooring",
    "jp": "ダークなヘリンボーンのゆか"
  },
  {
    "label": "RoomFloor_05063",
    "en": "rosewood flooring",
    "jp": "ローズウッドのゆか"
  },
  {
    "label": "RoomFloor_05064",
    "en": "gold iron-parquet flooring",
    "jp": "きんのアイアンパーケットのゆか"
  },
  {
    "label": "RoomFloor_05065",
    "en": "brown iron-parquet flooring",
    "jp": "ぎんのアイアンパーケットのゆか"
  },
  {
    "label": "RoomFloor_05066",
    "en": "black iron-parquet flooring",
    "jp": "くろいアイアンパーケットのゆか"
  },
  {
    "label": "RoomFloor_05067",
    "en": "monochromatic tile flooring",
    "jp": "モノクロパネルカーペット"
  },
  {
    "label": "RoomFloor_05068",
    "en": "colorful tile flooring",
    "jp": "カラフルパネルカーペット"
  },
  {
    "label": "RoomFloor_05069",
    "en": "stone tile",
    "jp": "だいりせきのゆか"
  },
  {
    "label": "RoomFloor_05070",
    "en": "cute-paint flooring",
    "jp": "キュートなペイントフローリング"
  },
  {
    "label": "RoomFloor_05071",
    "en": "cool-paint flooring",
    "jp": "クールなペイントフローリング"
  },
  {
    "label": "RoomFloor_05073",
    "en": "yellow floral flooring",
    "jp": "きいろいフラワーフローリング"
  },
  {
    "label": "RoomFloor_05074",
    "en": "blue floral flooring",
    "jp": "あおいフラワーフローリング"
  },
  {
    "label": "RoomFloor_05075",
    "en": "brown floral flooring",
    "jp": "ちゃいろいフラワーフローリング"
  },
  {
    "label": "RoomFloor_05076",
    "en": "kitschy tile",
    "jp": "キッチュなゆか"
  },
  {
    "label": "RoomFloor_05077",
    "en": "tatami flooring",
    "jp": "ふちなしたたみ"
  },
  {
    "label": "RoomFloor_05078",
    "en": "rush tatami flooring",
    "jp": "いぐさのふちなしたたみ"
  },
  {
    "label": "RoomFloor_05079",
    "en": "rush tatami",
    "jp": "いぐさのたたみ"
  },
  {
    "label": "RoomFloor_05080",
    "en": "gray argyle-tile flooring",
    "jp": "グレーのアーガイルタイルゆか"
  },
  {
    "label": "RoomFloor_05081",
    "en": "brown argyle-tile flooring",
    "jp": "ブラウンのアーガイルタイルゆか"
  },
  {
    "label": "RoomFloor_05082",
    "en": "circuit-board flooring",
    "jp": "きばんのゆか"
  },
  {
    "label": "RoomFloor_05163",
    "en": "rubber-tile flooring",
    "jp": "ゴムタイルのゆか"
  },
  {
    "label": "RoomFloor_05232",
    "en": "artsy parquet flooring",
    "jp": "アートなよせぎざいくのゆか"
  },
  {
    "label": "RoomFloor_05233",
    "en": "slate flooring",
    "jp": "ランダムなしきいし"
  },
  {
    "label": "RoomFloor_05234",
    "en": "mossy-garden flooring",
    "jp": "こけにわのゆか"
  },
  {
    "label": "RoomFloor_05235",
    "en": "construction-site flooring",
    "jp": "こうじげんばのゆか"
  },
  {
    "label": "RoomFloor_05236",
    "en": "garbage-heap flooring",
    "jp": "おへやのゆか"
  },
  {
    "label": "RoomFloor_05237",
    "en": "highway flooring",
    "jp": "ハイウェイのゆか"
  },
  {
    "label": "RoomFloor_05238",
    "en": "swamp flooring",
    "jp": "どろぬまなゆか"
  },
  {
    "label": "RoomFloor_05239",
    "en": "rocky-mountain flooring",
    "jp": "いわやまのゆか"
  },
  {
    "label": "RoomFloor_05240",
    "en": "ramshackle flooring",
    "jp": "はいきょのゆか"
  },
  {
    "label": "RoomFloor_05241",
    "en": "party flooring",
    "jp": "パーティーのゆか"
  },
  {
    "label": "RoomFloor_05243",
    "en": "crop-circles flooring",
    "jp": "ミステリーサークルなゆか"
  },
  {
    "label": "RoomFloor_05248",
    "en": "skull-print flooring",
    "jp": "スカルなゆか"
  },
  {
    "label": "RoomFloor_05250",
    "en": "future-tech flooring",
    "jp": "オーバーテクノロジーなゆか"
  },
  {
    "label": "RoomFloor_05253",
    "en": "iceberg flooring",
    "jp": "りゅうひょうのゆか"
  },
  {
    "label": "RoomFloor_05255",
    "en": "oasis flooring",
    "jp": "オアシスなゆか"
  },
  {
    "label": "RoomFloor_05267",
    "en": "cloud flooring",
    "jp": "くものうえ"
  },
  {
    "label": "RoomFloor_05268",
    "en": "underwater flooring",
    "jp": "うみのそこのゆか"
  },
  {
    "label": "RoomFloor_05269",
    "en": "galaxy flooring",
    "jp": "ぎんがけいのゆか"
  },
  {
    "label": "RoomFloor_05270",
    "en": "sci-fi flooring",
    "jp": "うちゅうせんのゆか"
  },
  {
    "label": "RoomFloor_05273",
    "en": "flowing-river flooring",
    "jp": "かわのながれるゆか"
  },
  {
    "label": "RoomFloor_05274",
    "en": "lava flooring",
    "jp": "ようがんのゆか"
  },
  {
    "label": "RoomFloor_05515",
    "en": "jungle flooring",
    "jp": "ジャングルのゆか"
  },
  {
    "label": "RoomFloor_05516",
    "en": "ice flooring",
    "jp": "アイスなゆか"
  },
  {
    "label": "RoomFloor_06005",
    "en": "Nook Inc. flooring",
    "jp": "たぬきかいはつのフローリング"
  },
  {
    "label": "RoomFloor_06843",
    "en": "white iron-parquet flooring",
    "jp": "しろいアイアンパーケットのゆか"
  },
  {
    "label": "RoomFloor_06844",
    "en": "cool vinyl flooring",
    "jp": "クールなピータイル"
  },
  {
    "label": "RoomFloor_06845",
    "en": "orange camo flooring",
    "jp": "オレンジめいさいのゆか"
  },
  {
    "label": "RoomFloor_06846",
    "en": "blue mosaic-tile flooring",
    "jp": "ブルーモザイクタイルのゆか"
  },
  {
    "label": "RoomFloor_06847",
    "en": "green floral flooring",
    "jp": "グリーンのフラワーフローリング"
  },
  {
    "label": "RoomFloor_06848",
    "en": "tiger-print flooring",
    "jp": "タイガーなじゅうたん"
  },
  {
    "label": "RoomFloor_06849",
    "en": "brown-brick flooring",
    "jp": "ちゃいろいレンガのゆか"
  },
  {
    "label": "RoomFloor_06927",
    "en": "purple desert-tile flooring",
    "jp": "むらさきのモロッカンタイルゆか"
  },
  {
    "label": "RoomFloor_06928",
    "en": "olive desert-tile flooring",
    "jp": "きみどりモロッカンタイルゆか"
  },
  {
    "label": "RoomFloor_07184",
    "en": "sepia puzzle flooring",
    "jp": "セピアパズルのゆか"
  },
  {
    "label": "RoomFloor_07185",
    "en": "purple puzzle flooring",
    "jp": "パープルパズルのゆか"
  },
  {
    "label": "RoomFloor_07186",
    "en": "forest flooring",
    "jp": "キノコのもりのゆか"
  },
  {
    "label": "RoomFloor_07204",
    "en": "cherry-blossom flooring",
    "jp": "さくらのじゅうたん"
  },
  {
    "label": "RoomFloor_07219",
    "en": "cute white-tile flooring",
    "jp": "しろいキュートなフロアタイル"
  },
  {
    "label": "RoomFloor_07220",
    "en": "cute red-tile flooring",
    "jp": "あかいキュートなフロアタイル"
  },
  {
    "label": "RoomFloor_07221",
    "en": "cute blue-tile flooring",
    "jp": "ブルーのキュートなフロアタイル"
  },
  {
    "label": "RoomFloor_07222",
    "en": "cute yellow-tile flooring",
    "jp": "きいろいキュートなフロアタイル"
  },
  {
    "label": "RoomFloor_07239",
    "en": "starry-sands flooring",
    "jp": "ほしのすなはまのゆか"
  },
  {
    "label": "RoomFloor_10178",
    "en": "Kerokerokeroppi flooring",
    "jp": "けろけろけろっぴなゆか"
  },
  {
    "label": "RoomFloor_10179",
    "en": "Kiki & Lala flooring",
    "jp": "キキ&ララなゆか"
  },
  {
    "label": "RoomFloor_10180",
    "en": "My Melody flooring",
    "jp": "マイメロディなゆか"
  },
  {
    "label": "RoomFloor_10181",
    "en": "Pompompurin flooring",
    "jp": "ポムポムプリンなゆか"
  },
  {
    "label": "RoomFloor_10182",
    "en": "Cinnamoroll flooring",
    "jp": "シナモロールなゆか"
  },
  {
    "label": "RoomFloor_10183",
    "en": "Hello Kitty flooring",
    "jp": "ハローキティなゆか"
  },
  {
    "label": "RoomFloor_12423",
    "en": "Bunny Day flooring",
    "jp": "イースターなゆか"
  },
  {
    "label": "RoomFloor_12431",
    "en": "white wedding flooring",
    "jp": "ウェディングなホワイトタイル"
  },
  {
    "label": "RoomFloor_12433",
    "en": "brown wedding flooring",
    "jp": "ウェディングなブラウンタイル"
  },
  {
    "label": "RoomFloor_12434",
    "en": "green wedding flooring",
    "jp": "ウェディングなグリーンタイル"
  },
  {
    "label": "RoomFloor_12568",
    "en": "mermaid flooring",
    "jp": "マーメイドなゆか"
  },
  {
    "label": "RoomFloor_12569",
    "en": "pirate flooring",
    "jp": "かいぞくのゆか"
  },
  {
    "label": "RoomFloor_13225",
    "en": "spooky flooring",
    "jp": "ハロウィンなゆか"
  },
  {
    "label": "RoomFloor_13319",
    "en": "Turkey Day flooring",
    "jp": "サンクスギビングなゆか"
  },
  {
    "label": "RoomFloor_13804",
    "en": "block flooring",
    "jp": "スーパーマリオのゆか"
  },
  {
    "label": "RoomFloor_14253",
    "en": "prom flooring",
    "jp": "プロムのゆか"
  }
];

itemNames.rugs = [
  {
    "label": "Rug_07322",
    "en": "pink heart rug",
    "jp": "ピンクハートのラグ"
  },
  {
    "label": "Rug_07323",
    "en": "brown wooden-deck rug",
    "jp": "ちゃいろいウッドデッキのラグ"
  },
  {
    "label": "Rug_07324",
    "en": "rough rug",
    "jp": "ハードマット"
  },
  {
    "label": "Rug_07325",
    "en": "ivory medium round mat",
    "jp": "アイボリーのラウンドマット・M"
  },
  {
    "label": "Rug_07327",
    "en": "apple rug",
    "jp": "リンゴのラグ"
  },
  {
    "label": "Rug_07328",
    "en": "cherry rug",
    "jp": "さくらんぼのラグ"
  },
  {
    "label": "Rug_07329",
    "en": "fluffy rug",
    "jp": "もくもくのラグ"
  },
  {
    "label": "Rug_07330",
    "en": "orange rug",
    "jp": "オレンジのラグ"
  },
  {
    "label": "Rug_07331",
    "en": "peach rug",
    "jp": "モモのラグ"
  },
  {
    "label": "Rug_07332",
    "en": "pear rug",
    "jp": "ナシのラグ"
  },
  {
    "label": "Rug_07333",
    "en": "ivory simple bath mat",
    "jp": "アイボリーのシンプルバスマット"
  },
  {
    "label": "Rug_07334",
    "en": "ivory small round mat",
    "jp": "アイボリーのラウンドマット・S"
  },
  {
    "label": "Rug_07335",
    "en": "white simple medium mat",
    "jp": "しろいシンプルマット・M"
  },
  {
    "label": "Rug_07336",
    "en": "white simple small mat",
    "jp": "しろいシンプルマット・S"
  },
  {
    "label": "Rug_07337",
    "en": "iron entrance mat",
    "jp": "アイアンなげんかんマット"
  },
  {
    "label": "Rug_07338",
    "en": "white message mat",
    "jp": "しろいメッセージマット"
  },
  {
    "label": "Rug_07339",
    "en": "rubber mud mat",
    "jp": "ゴムのどろふきマット"
  },
  {
    "label": "Rug_07340",
    "en": "red-design kitchen mat",
    "jp": "あかいパターンキッチンマット"
  },
  {
    "label": "Rug_07341",
    "en": "brown kitchen mat",
    "jp": "ちゃいろいキッチンマット"
  },
  {
    "label": "Rug_07343",
    "en": "red-and-blue checked rug",
    "jp": "あかあおチェックキルトのラグ"
  },
  {
    "label": "Rug_07345",
    "en": "shanty mat",
    "jp": "ふるいむしろのラグ"
  },
  {
    "label": "Rug_07346",
    "en": "snowflake rug",
    "jp": "スノーフレークなラグ"
  },
  {
    "label": "Rug_07347",
    "en": "red Persian rug",
    "jp": "あかいペルシャじゅうたん"
  },
  {
    "label": "Rug_07348",
    "en": "red carpet",
    "jp": "レッドカーペット"
  },
  {
    "label": "Rug_07349",
    "en": "monochromatic dotted rug",
    "jp": "モノクロドットのラグ"
  },
  {
    "label": "Rug_07350",
    "en": "modern wavy rug",
    "jp": "モダンなウェーブのラグ"
  },
  {
    "label": "Rug_07351",
    "en": "yellow stripes rug",
    "jp": "きいろボーダーのラグ"
  },
  {
    "label": "Rug_07352",
    "en": "yellow argyle rug",
    "jp": "きいろいアーガイルのラグ"
  },
  {
    "label": "Rug_07353",
    "en": "botanical rug",
    "jp": "ボタニカルなラグ"
  },
  {
    "label": "Rug_07354",
    "en": "green shaggy rug",
    "jp": "みどりのシャギーなラグ"
  },
  {
    "label": "Rug_07356",
    "en": "aluminum rug",
    "jp": "アルミマット"
  },
  {
    "label": "Rug_07357",
    "en": "Earth rug",
    "jp": "ちきゅうのラグ"
  },
  {
    "label": "Rug_07358",
    "en": "tropical rug",
    "jp": "みなみのしまのラグ"
  },
  {
    "label": "Rug_07359",
    "en": "colorful vinyl sheet",
    "jp": "カラフルなビニールシート"
  },
  {
    "label": "Rug_07360",
    "en": "ladybug rug",
    "jp": "テントウムシのラグ"
  },
  {
    "label": "Rug_07361",
    "en": "fish rug",
    "jp": "おサカナのラグ"
  },
  {
    "label": "Rug_07362",
    "en": "shell rug",
    "jp": "かいがらのラグ"
  },
  {
    "label": "Rug_07363",
    "en": "mush rug",
    "jp": "キノコのラグ"
  },
  {
    "label": "Rug_07364",
    "en": "Nook Inc. rug",
    "jp": "たぬきかいはつのラグ"
  },
  {
    "label": "Rug_07365",
    "en": "pink rose rug",
    "jp": "ピンクローズのラグ"
  },
  {
    "label": "Rug_07366",
    "en": "fossil rug",
    "jp": "かせきのラグ"
  },
  {
    "label": "Rug_07367",
    "en": "magic-circle rug",
    "jp": "まほうじんのラグ"
  },
  {
    "label": "Rug_07368",
    "en": "lacy rug",
    "jp": "レースのラグ"
  },
  {
    "label": "Rug_07369",
    "en": "tatami mat",
    "jp": "いちじょうのたたみ"
  },
  {
    "label": "Rug_07370",
    "en": "oval entrance mat",
    "jp": "オーバルなげんかんマット"
  },
  {
    "label": "Rug_07371",
    "en": "sloppy rug",
    "jp": "だらしないラグ"
  },
  {
    "label": "Rug_07380",
    "en": "natural wooden-deck rug",
    "jp": "ナチュラルなウッドデッキのラグ"
  },
  {
    "label": "Rug_07381",
    "en": "white wooden-deck rug",
    "jp": "しろいウッドデッキのラグ"
  },
  {
    "label": "Rug_07382",
    "en": "black wooden-deck rug",
    "jp": "くろいウッドデッキのラグ"
  },
  {
    "label": "Rug_07402",
    "en": "Mom's cool kitchen mat",
    "jp": "クールなははのキッチンマット"
  },
  {
    "label": "Rug_07403",
    "en": "yellow vinyl sheet",
    "jp": "きいろいビニールシート"
  },
  {
    "label": "Rug_07404",
    "en": "blue vinyl sheet",
    "jp": "あおいビニールシート"
  },
  {
    "label": "Rug_07405",
    "en": "red vinyl sheet",
    "jp": "あかいビニールシート"
  },
  {
    "label": "Rug_07456",
    "en": "monochromatic wavy rug",
    "jp": "モノクロウェーブのラグ"
  },
  {
    "label": "Rug_07457",
    "en": "red wavy rug",
    "jp": "あかいウェーブのラグ"
  },
  {
    "label": "Rug_07458",
    "en": "blue wavy rug",
    "jp": "あおいウェーブのラグ"
  },
  {
    "label": "Rug_07462",
    "en": "yellow checked rug",
    "jp": "きいろいチェックキルトのラグ"
  },
  {
    "label": "Rug_07463",
    "en": "peach checked rug",
    "jp": "ももいろチェックキルトのラグ"
  },
  {
    "label": "Rug_07464",
    "en": "green checked rug",
    "jp": "みどりのチェックキルトのラグ"
  },
  {
    "label": "Rug_07465",
    "en": "red dotted rug",
    "jp": "レッドドットのラグ"
  },
  {
    "label": "Rug_07466",
    "en": "retro dotted rug",
    "jp": "レトロドットのラグ"
  },
  {
    "label": "Rug_07467",
    "en": "blue dotted rug",
    "jp": "ブルードットのラグ"
  },
  {
    "label": "Rug_07516",
    "en": "simple green bath mat",
    "jp": "グリーンのシンプルバスマット"
  },
  {
    "label": "Rug_07517",
    "en": "simple pink bath mat",
    "jp": "ピンクのシンプルバスマット"
  },
  {
    "label": "Rug_07518",
    "en": "simple navy bath mat",
    "jp": "ネイビーのシンプルバスマット"
  },
  {
    "label": "Rug_07519",
    "en": "simple medium brown mat",
    "jp": "ちゃいろいシンプルマット・M"
  },
  {
    "label": "Rug_07520",
    "en": "simple small avocado mat",
    "jp": "カーキのシンプルマット・S"
  },
  {
    "label": "Rug_07521",
    "en": "simple small blue mat",
    "jp": "あおいシンプルマット・S"
  },
  {
    "label": "Rug_07522",
    "en": "simple small brown mat",
    "jp": "ちゃいろいシンプルマット・S"
  },
  {
    "label": "Rug_07523",
    "en": "simple medium blue mat",
    "jp": "あおいシンプルマット・M"
  },
  {
    "label": "Rug_07524",
    "en": "simple medium avocado mat",
    "jp": "カーキのシンプルマット・M"
  },
  {
    "label": "Rug_07532",
    "en": "peach stripes rug",
    "jp": "ももいろボーダーのラグ"
  },
  {
    "label": "Rug_07533",
    "en": "blue stripes rug",
    "jp": "あおボーダーのラグ"
  },
  {
    "label": "Rug_07534",
    "en": "green stripes rug",
    "jp": "みどりボーダーのラグ"
  },
  {
    "label": "Rug_07536",
    "en": "simple medium orange mat",
    "jp": "オレンジのシンプルマット・M"
  },
  {
    "label": "Rug_07537",
    "en": "simple small red mat",
    "jp": "あかいシンプルマット・S"
  },
  {
    "label": "Rug_07538",
    "en": "simple medium purple mat",
    "jp": "むらさきのシンプルマット・M"
  },
  {
    "label": "Rug_07539",
    "en": "simple medium black mat",
    "jp": "くろいシンプルマット・M"
  },
  {
    "label": "Rug_07540",
    "en": "simple medium red mat",
    "jp": "あかいシンプルマット・M"
  },
  {
    "label": "Rug_07541",
    "en": "simple small orange mat",
    "jp": "オレンジのシンプルマット・S"
  },
  {
    "label": "Rug_07542",
    "en": "simple small purple mat",
    "jp": "むらさきのシンプルマット・S"
  },
  {
    "label": "Rug_07543",
    "en": "simple small black mat",
    "jp": "くろいシンプルマット・S"
  },
  {
    "label": "Rug_07544",
    "en": "festive rug",
    "jp": "クリスマスなラグ"
  },
  {
    "label": "Rug_07545",
    "en": "spooky rug",
    "jp": "ハロウィンなラグ"
  },
  {
    "label": "Rug_07546",
    "en": "Bunny Day rug",
    "jp": "イースターなラグ"
  },
  {
    "label": "Rug_07547",
    "en": "shamrock rug",
    "jp": "シャムロックのラグ"
  },
  {
    "label": "Rug_07578",
    "en": "white heart rug",
    "jp": "ホワイトハートのラグ"
  },
  {
    "label": "Rug_07579",
    "en": "turquoise heart rug",
    "jp": "ブルーハートのラグ"
  },
  {
    "label": "Rug_07580",
    "en": "purple heart rug",
    "jp": "パープルハートのラグ"
  },
  {
    "label": "Rug_07594",
    "en": "black-design kitchen mat",
    "jp": "くろいパターンキッチンマット"
  },
  {
    "label": "Rug_07595",
    "en": "blue-design kitchen mat",
    "jp": "あおいパターンキッチンマット"
  },
  {
    "label": "Rug_07596",
    "en": "yellow-design kitchen mat",
    "jp": "きいろパターンキッチンマット"
  },
  {
    "label": "Rug_08035",
    "en": "blue Persian rug",
    "jp": "あおいペルシャじゅうたん"
  },
  {
    "label": "Rug_08036",
    "en": "yellow Persian rug",
    "jp": "きいろいペルシャじゅうたん"
  },
  {
    "label": "Rug_08037",
    "en": "purple Persian rug",
    "jp": "むらさきのペルシャじゅうたん"
  },
  {
    "label": "Rug_08393",
    "en": "green kitchen mat",
    "jp": "みどりのキッチンマット"
  },
  {
    "label": "Rug_08394",
    "en": "blue kitchen mat",
    "jp": "あおいキッチンマット"
  },
  {
    "label": "Rug_08395",
    "en": "yellow kitchen mat",
    "jp": "きいろいキッチンマット"
  },
  {
    "label": "Rug_08466",
    "en": "red argyle rug",
    "jp": "あかいアーガイルのラグ"
  },
  {
    "label": "Rug_08467",
    "en": "blue argyle rug",
    "jp": "あおいアーガイルのラグ"
  },
  {
    "label": "Rug_08468",
    "en": "brown argyle rug",
    "jp": "ちゃいろいアーガイルのラグ"
  },
  {
    "label": "Rug_08757",
    "en": "white rose rug",
    "jp": "ホワイトローズのラグ"
  },
  {
    "label": "Rug_08758",
    "en": "red rose rug",
    "jp": "レッドローズのラグ"
  },
  {
    "label": "Rug_08759",
    "en": "yellow rose rug",
    "jp": "イエローローズのラグ"
  },
  {
    "label": "Rug_09310",
    "en": "blue message mat",
    "jp": "あおいメッセージマット"
  },
  {
    "label": "Rug_09311",
    "en": "yellow message mat",
    "jp": "きいろいメッセージマット"
  },
  {
    "label": "Rug_09312",
    "en": "red message mat",
    "jp": "あかいメッセージマット"
  },
  {
    "label": "Rug_09313",
    "en": "red kilim-style carpet",
    "jp": "あかいキリムのカーペット"
  },
  {
    "label": "Rug_09314",
    "en": "green kilim-style carpet",
    "jp": "みどりのキリムのカーペット"
  },
  {
    "label": "Rug_09315",
    "en": "yellow kilim-style carpet",
    "jp": "きいろいキリムのカーペット"
  },
  {
    "label": "Rug_09316",
    "en": "blue kilim-style carpet",
    "jp": "あおいキリムのカーペット"
  },
  {
    "label": "Rug_09541",
    "en": "Mom's reliable kitchen mat",
    "jp": "たよれるははのキッチンマット"
  },
  {
    "label": "Rug_09542",
    "en": "Mom's playful kitchen mat",
    "jp": "オチャメなははのキッチンマット"
  },
  {
    "label": "Rug_09543",
    "en": "Mom's lively kitchen mat",
    "jp": "げんきなははのキッチンマット"
  },
  {
    "label": "Rug_09544",
    "en": "yellow medium round mat",
    "jp": "きいろいラウンドマット・M"
  },
  {
    "label": "Rug_09545",
    "en": "red medium round mat",
    "jp": "あかいラウンドマット・M"
  },
  {
    "label": "Rug_09546",
    "en": "blue medium round mat",
    "jp": "あおいラウンドマット・M"
  },
  {
    "label": "Rug_09547",
    "en": "yellow small round mat",
    "jp": "きいろいラウンドマット・S"
  },
  {
    "label": "Rug_09548",
    "en": "red small round mat",
    "jp": "あかいラウンドマット・S"
  },
  {
    "label": "Rug_09549",
    "en": "blue small round mat",
    "jp": "あおいラウンドマット・S"
  },
  {
    "label": "Rug_09562",
    "en": "purple shaggy rug",
    "jp": "むらさきのシャギーなラグ"
  },
  {
    "label": "Rug_09563",
    "en": "brown shaggy rug",
    "jp": "ちゃいろいシャギーなラグ"
  },
  {
    "label": "Rug_09564",
    "en": "blue shaggy rug",
    "jp": "あおいシャギーなラグ"
  },
  {
    "label": "Rug_11101",
    "en": "red blocks rug",
    "jp": "あかブロックのラグ"
  },
  {
    "label": "Rug_11102",
    "en": "blue blocks rug",
    "jp": "あおブロックのラグ"
  },
  {
    "label": "Rug_11103",
    "en": "yellow blocks rug",
    "jp": "きいろブロックのラグ"
  },
  {
    "label": "Rug_11104",
    "en": "black blocks rug",
    "jp": "モノクロブロックのラグ"
  },
  {
    "label": "Rug_11113",
    "en": "light bamboo rug",
    "jp": "ライトなバンブーラグ"
  },
  {
    "label": "Rug_11114",
    "en": "dark bamboo rug",
    "jp": "ダークなバンブーラグ"
  },
  {
    "label": "Rug_12214",
    "en": "Bell-bag rug",
    "jp": "ベルぶくろのラグ"
  },
  {
    "label": "Rug_12217",
    "en": "summer-shell rug",
    "jp": "なつのかいがらのラグ"
  },
  {
    "label": "Rug_12288",
    "en": "Cinnamoroll rug",
    "jp": "シナモロールなラグ"
  },
  {
    "label": "Rug_12289",
    "en": "Kerokerokeroppi rug",
    "jp": "けろけろけろっぴなラグ"
  },
  {
    "label": "Rug_12290",
    "en": "Kiki & Lala rug",
    "jp": "キキ&ララなラグ"
  },
  {
    "label": "Rug_12291",
    "en": "Hello Kitty rug",
    "jp": "ハローキティなラグ"
  },
  {
    "label": "Rug_12292",
    "en": "My Melody rug",
    "jp": "マイメロディなラグ"
  },
  {
    "label": "Rug_12293",
    "en": "Pompompurin rug",
    "jp": "ポムポムプリンなラグ"
  },
  {
    "label": "Rug_12325",
    "en": "Nook Inc. botanical rug",
    "jp": "たぬきかいはつのボタニカルラグ"
  },
  {
    "label": "Rug_12396",
    "en": "Nook Inc. silk rug",
    "jp": "たぬきかいはつのスクエアラグ"
  },
  {
    "label": "Rug_12462",
    "en": "blue wedding rug",
    "jp": "ウェディングなラグ・ブルー"
  },
  {
    "label": "Rug_12464",
    "en": "white wedding rug",
    "jp": "ウェディングなラグ・ホワイト"
  },
  {
    "label": "Rug_12465",
    "en": "red wedding rug",
    "jp": "ウェディングなラグ・レッド"
  },
  {
    "label": "Rug_12563",
    "en": "mermaid rug",
    "jp": "マーメイドなラグ"
  },
  {
    "label": "Rug_12564",
    "en": "pirate rug",
    "jp": "かいぞくのラグ"
  },
  {
    "label": "Rug_13287",
    "en": "moon rug",
    "jp": "つきのラグ"
  },
  {
    "label": "Rug_13525",
    "en": "Turkey Day rug",
    "jp": "サンクスギビングなラグ"
  },
  {
    "label": "Rug_13596",
    "en": "sunflower rug",
    "jp": "ひまわりのラグ"
  },
  {
    "label": "Rug_13872",
    "en": "Yoshi's Egg rug",
    "jp": "ヨッシーのタマゴのラグ"
  },
  {
    "label": "Rug_13873",
    "en": "Lakitu's Cloud rug",
    "jp": "ジュゲムのくものラグ"
  },
  {
    "label": "Rug_13904",
    "en": "football rug",
    "jp": "アメフトのラグ"
  },
  {
    "label": "RugMyDesign_08823",
    "en": "custom-design rug",
    "jp": "マイデザインのラグ"
  }
];

itemNames.photos = [
  {
    "label": "Bromide_06426",
    "en": "Cyrano's photo",
    "jp": "さくらじまのしゃしん"
  },
  {
    "label": "Bromide_06427",
    "en": "Curt's photo",
    "jp": "ガンテツのしゃしん"
  },
  {
    "label": "Bromide_06428",
    "en": "Zell's photo",
    "jp": "ネルソンのしゃしん"
  },
  {
    "label": "Bromide_06429",
    "en": "Bruce's photo",
    "jp": "ブルースのしゃしん"
  },
  {
    "label": "Bromide_06430",
    "en": "Deirdre's photo",
    "jp": "ナディアのしゃしん"
  },
  {
    "label": "Bromide_06431",
    "en": "Lopez's photo",
    "jp": "トムソンのしゃしん"
  },
  {
    "label": "Bromide_06432",
    "en": "Fuchsia's photo",
    "jp": "ジェシカのしゃしん"
  },
  {
    "label": "Bromide_06433",
    "en": "Beau's photo",
    "jp": "ペーターのしゃしん"
  },
  {
    "label": "Bromide_06434",
    "en": "Diana's photo",
    "jp": "ナタリーのしゃしん"
  },
  {
    "label": "Bromide_06435",
    "en": "Erik's photo",
    "jp": "チャックのしゃしん"
  },
  {
    "label": "Bromide_06436",
    "en": "Goldie's photo",
    "jp": "キャラメルのしゃしん"
  },
  {
    "label": "Bromide_06437",
    "en": "Butch's photo",
    "jp": "ジョンのしゃしん"
  },
  {
    "label": "Bromide_06438",
    "en": "Chow's photo",
    "jp": "チャウヤンのしゃしん"
  },
  {
    "label": "Bromide_06439",
    "en": "Lucky's photo",
    "jp": "ラッキーのしゃしん"
  },
  {
    "label": "Bromide_06440",
    "en": "Biskit's photo",
    "jp": "ロビンのしゃしん"
  },
  {
    "label": "Bromide_06441",
    "en": "Bones's photo",
    "jp": "トミのしゃしん"
  },
  {
    "label": "Bromide_06442",
    "en": "Portia's photo",
    "jp": "ブレンダのしゃしん"
  },
  {
    "label": "Bromide_06443",
    "en": "Walker's photo",
    "jp": "ベンのしゃしん"
  },
  {
    "label": "Bromide_06444",
    "en": "Daisy's photo",
    "jp": "バニラのしゃしん"
  },
  {
    "label": "Bromide_06445",
    "en": "Cookie's photo",
    "jp": "ペリーヌのしゃしん"
  },
  {
    "label": "Bromide_06446",
    "en": "Maddie's photo",
    "jp": "マロンのしゃしん"
  },
  {
    "label": "Bromide_06447",
    "en": "Bea's photo",
    "jp": "ベーグルのしゃしん"
  },
  {
    "label": "Bromide_06448",
    "en": "Mac's photo",
    "jp": "チャンプのしゃしん"
  },
  {
    "label": "Bromide_06449",
    "en": "Nate's photo",
    "jp": "バッカスのしゃしん"
  },
  {
    "label": "Bromide_06450",
    "en": "Marcel's photo",
    "jp": "もんじゃのしゃしん"
  },
  {
    "label": "Bromide_06451",
    "en": "Benjamin's photo",
    "jp": "ハチのしゃしん"
  },
  {
    "label": "Bromide_06452",
    "en": "Cherry's photo",
    "jp": "ハンナのしゃしん"
  },
  {
    "label": "Bromide_06453",
    "en": "Shep's photo",
    "jp": "ボブのしゃしん"
  },
  {
    "label": "Bromide_06454",
    "en": "Bill's photo",
    "jp": "ピータンのしゃしん"
  },
  {
    "label": "Bromide_06455",
    "en": "Joey's photo",
    "jp": "リチャードのしゃしん"
  },
  {
    "label": "Bromide_06456",
    "en": "Pate's photo",
    "jp": "ナッキーのしゃしん"
  },
  {
    "label": "Bromide_06457",
    "en": "Maelle's photo",
    "jp": "アンヌのしゃしん"
  },
  {
    "label": "Bromide_06458",
    "en": "Deena's photo",
    "jp": "まりものしゃしん"
  },
  {
    "label": "Bromide_06459",
    "en": "Pompom's photo",
    "jp": "のりっぺのしゃしん"
  },
  {
    "label": "Bromide_06460",
    "en": "Groucho's photo",
    "jp": "クローのしゃしん"
  },
  {
    "label": "Bromide_06461",
    "en": "Mallary's photo",
    "jp": "スミモモのしゃしん"
  },
  {
    "label": "Bromide_06462",
    "en": "Freckles's photo",
    "jp": "マグロのしゃしん"
  },
  {
    "label": "Bromide_06463",
    "en": "Derwin's photo",
    "jp": "ボンのしゃしん"
  },
  {
    "label": "Bromide_06464",
    "en": "Drake's photo",
    "jp": "フォアグラのしゃしん"
  },
  {
    "label": "Bromide_06465",
    "en": "Scoot's photo",
    "jp": "マモルのしゃしん"
  },
  {
    "label": "Bromide_06466",
    "en": "Weber's photo",
    "jp": "アチョットのしゃしん"
  },
  {
    "label": "Bromide_06467",
    "en": "Miranda's photo",
    "jp": "ミランダのしゃしん"
  },
  {
    "label": "Bromide_06468",
    "en": "Ketchup's photo",
    "jp": "ケチャップのしゃしん"
  },
  {
    "label": "Bromide_06469",
    "en": "Gloria's photo",
    "jp": "スワンソンのしゃしん"
  },
  {
    "label": "Bromide_06470",
    "en": "Molly's photo",
    "jp": "カモミのしゃしん"
  },
  {
    "label": "Bromide_06471",
    "en": "Tutu's photo",
    "jp": "れんにゅうのしゃしん"
  },
  {
    "label": "Bromide_06472",
    "en": "Quillson's photo",
    "jp": "タックンのしゃしん"
  },
  {
    "label": "Bromide_06473",
    "en": "Opal's photo",
    "jp": "オパールのしゃしん"
  },
  {
    "label": "Bromide_06474",
    "en": "Dizzy's photo",
    "jp": "ヒュージのしゃしん"
  },
  {
    "label": "Bromide_06475",
    "en": "Big Top's photo",
    "jp": "３ごうのしゃしん"
  },
  {
    "label": "Bromide_06476",
    "en": "Eloise's photo",
    "jp": "エレフィンのしゃしん"
  },
  {
    "label": "Bromide_06477",
    "en": "Margie's photo",
    "jp": "サリーのしゃしん"
  },
  {
    "label": "Bromide_06478",
    "en": "Paolo's photo",
    "jp": "パオロのしゃしん"
  },
  {
    "label": "Bromide_06479",
    "en": "Axel's photo",
    "jp": "エックスエルのしゃしん"
  },
  {
    "label": "Bromide_06480",
    "en": "Ellie's photo",
    "jp": "エクレアのしゃしん"
  },
  {
    "label": "Bromide_06481",
    "en": "Tucker's photo",
    "jp": "はじめのしゃしん"
  },
  {
    "label": "Bromide_06482",
    "en": "Ursala's photo",
    "jp": "ネーヤのしゃしん"
  },
  {
    "label": "Bromide_06483",
    "en": "Tia's photo",
    "jp": "ティーナのしゃしん"
  },
  {
    "label": "Bromide_06484",
    "en": "Lily's photo",
    "jp": "レイニーのしゃしん"
  },
  {
    "label": "Bromide_06485",
    "en": "Ribbot's photo",
    "jp": "ガチャのしゃしん"
  },
  {
    "label": "Bromide_06486",
    "en": "Frobert's photo",
    "jp": "コージィのしゃしん"
  },
  {
    "label": "Bromide_06487",
    "en": "Camofrog's photo",
    "jp": "フルメタルのしゃしん"
  },
  {
    "label": "Bromide_06488",
    "en": "Drift's photo",
    "jp": "ドクのしゃしん"
  },
  {
    "label": "Bromide_06489",
    "en": "Wart Jr.'s photo",
    "jp": "サムのしゃしん"
  },
  {
    "label": "Bromide_06490",
    "en": "Puddles's photo",
    "jp": "チョキのしゃしん"
  },
  {
    "label": "Bromide_06491",
    "en": "Jeremiah's photo",
    "jp": "クワトロのしゃしん"
  },
  {
    "label": "Bromide_06492",
    "en": "Tad's photo",
    "jp": "タンボのしゃしん"
  },
  {
    "label": "Bromide_06493",
    "en": "Grizzly's photo",
    "jp": "ムーのしゃしん"
  },
  {
    "label": "Bromide_06494",
    "en": "Cousteau's photo",
    "jp": "ハルマキのしゃしん"
  },
  {
    "label": "Bromide_06495",
    "en": "Huck's photo",
    "jp": "ストローのしゃしん"
  },
  {
    "label": "Bromide_06496",
    "en": "Prince's photo",
    "jp": "カールのしゃしん"
  },
  {
    "label": "Bromide_06497",
    "en": "Jambette's photo",
    "jp": "エスメラルダのしゃしん"
  },
  {
    "label": "Bromide_06498",
    "en": "Raddle's photo",
    "jp": "カックンのしゃしん"
  },
  {
    "label": "Bromide_06499",
    "en": "Gigi's photo",
    "jp": "リンダのしゃしん"
  },
  {
    "label": "Bromide_06500",
    "en": "Croque's photo",
    "jp": "タイシのしゃしん"
  },
  {
    "label": "Bromide_06501",
    "en": "Diva's photo",
    "jp": "アイーダのしゃしん"
  },
  {
    "label": "Bromide_06502",
    "en": "Henry's photo",
    "jp": "ヘンリーのしゃしん"
  },
  {
    "label": "Bromide_06503",
    "en": "Chevre's photo",
    "jp": "ユキのしゃしん"
  },
  {
    "label": "Bromide_06504",
    "en": "Paula's photo",
    "jp": "レイチェルのしゃしん"
  },
  {
    "label": "Bromide_06505",
    "en": "Nan's photo",
    "jp": "スミのしゃしん"
  },
  {
    "label": "Bromide_06506",
    "en": "Billy's photo",
    "jp": "アーシンドのしゃしん"
  },
  {
    "label": "Bromide_06507",
    "en": "Gruff's photo",
    "jp": "ビリーのしゃしん"
  },
  {
    "label": "Bromide_06508",
    "en": "Velma's photo",
    "jp": "ピティエのしゃしん"
  },
  {
    "label": "Bromide_06509",
    "en": "Kidd's photo",
    "jp": "やさおのしゃしん"
  },
  {
    "label": "Bromide_06510",
    "en": "Pashmina's photo",
    "jp": "バーバラのしゃしん"
  },
  {
    "label": "Bromide_06511",
    "en": "Cesar's photo",
    "jp": "アランのしゃしん"
  },
  {
    "label": "Bromide_06512",
    "en": "Peewee's photo",
    "jp": "ダンベルのしゃしん"
  },
  {
    "label": "Bromide_06513",
    "en": "Boone's photo",
    "jp": "まんたろうのしゃしん"
  },
  {
    "label": "Bromide_06514",
    "en": "Louie's photo",
    "jp": "マッスルのしゃしん"
  },
  {
    "label": "Bromide_06515",
    "en": "Ike's photo",
    "jp": "ダイクのしゃしん"
  },
  {
    "label": "Bromide_06516",
    "en": "Boyd's photo",
    "jp": "ボイドのしゃしん"
  },
  {
    "label": "Bromide_06517",
    "en": "Violet's photo",
    "jp": "ウズメのしゃしん"
  },
  {
    "label": "Bromide_06518",
    "en": "Al's photo",
    "jp": "たもつのしゃしん"
  },
  {
    "label": "Bromide_06519",
    "en": "Rocket's photo",
    "jp": "４ごうのしゃしん"
  },
  {
    "label": "Bromide_06520",
    "en": "Hans's photo",
    "jp": "スナイルのしゃしん"
  },
  {
    "label": "Bromide_06521",
    "en": "Hamlet's photo",
    "jp": "ハムスケのしゃしん"
  },
  {
    "label": "Bromide_06522",
    "en": "Apple's photo",
    "jp": "アップルのしゃしん"
  },
  {
    "label": "Bromide_06523",
    "en": "Graham's photo",
    "jp": "グラハムのしゃしん"
  },
  {
    "label": "Bromide_06524",
    "en": "Rodney's photo",
    "jp": "ジミーのしゃしん"
  },
  {
    "label": "Bromide_06525",
    "en": "Soleil's photo",
    "jp": "シャンティのしゃしん"
  },
  {
    "label": "Bromide_06526",
    "en": "Charlise's photo",
    "jp": "チャーミーのしゃしん"
  },
  {
    "label": "Bromide_06527",
    "en": "Clay's photo",
    "jp": "どぐろうのしゃしん"
  },
  {
    "label": "Bromide_06528",
    "en": "Flurry's photo",
    "jp": "ゆきみのしゃしん"
  },
  {
    "label": "Bromide_06529",
    "en": "Hamphrey's photo",
    "jp": "ハムジのしゃしん"
  },
  {
    "label": "Bromide_06530",
    "en": "Rocco's photo",
    "jp": "ゴンザレスのしゃしん"
  },
  {
    "label": "Bromide_06531",
    "en": "Bubbles's photo",
    "jp": "チャコのしゃしん"
  },
  {
    "label": "Bromide_06532",
    "en": "Bertha's photo",
    "jp": "あんこのしゃしん"
  },
  {
    "label": "Bromide_06533",
    "en": "Biff's photo",
    "jp": "ガブリエルのしゃしん"
  },
  {
    "label": "Bromide_06534",
    "en": "Bitty's photo",
    "jp": "エーミーのしゃしん"
  },
  {
    "label": "Bromide_06535",
    "en": "Harry's photo",
    "jp": "オリバーのしゃしん"
  },
  {
    "label": "Bromide_06536",
    "en": "Hippeux's photo",
    "jp": "ディビッドのしゃしん"
  },
  {
    "label": "Bromide_06537",
    "en": "Antonio's photo",
    "jp": "マコトのしゃしん"
  },
  {
    "label": "Bromide_06538",
    "en": "Beardo's photo",
    "jp": "ベアードのしゃしん"
  },
  {
    "label": "Bromide_06539",
    "en": "Buck's photo",
    "jp": "ヴァヤシコフのしゃしん"
  },
  {
    "label": "Bromide_06540",
    "en": "Victoria's photo",
    "jp": "セントアローのしゃしん"
  },
  {
    "label": "Bromide_06541",
    "en": "Savannah's photo",
    "jp": "サバンナのしゃしん"
  },
  {
    "label": "Bromide_06542",
    "en": "Elmer's photo",
    "jp": "サブレのしゃしん"
  },
  {
    "label": "Bromide_06543",
    "en": "Roscoe's photo",
    "jp": "シュバルツのしゃしん"
  },
  {
    "label": "Bromide_06544",
    "en": "Winnie's photo",
    "jp": "マキバスターのしゃしん"
  },
  {
    "label": "Bromide_06545",
    "en": "Ed's photo",
    "jp": "キザノホマレのしゃしん"
  },
  {
    "label": "Bromide_06546",
    "en": "Cleo's photo",
    "jp": "アイソトープのしゃしん"
  },
  {
    "label": "Bromide_06547",
    "en": "Peaches's photo",
    "jp": "ドサコのしゃしん"
  },
  {
    "label": "Bromide_06548",
    "en": "Annalise's photo",
    "jp": "シルブプレのしゃしん"
  },
  {
    "label": "Bromide_06549",
    "en": "Klaus's photo",
    "jp": "クマロスのしゃしん"
  },
  {
    "label": "Bromide_06550",
    "en": "Clyde's photo",
    "jp": "デースケのしゃしん"
  },
  {
    "label": "Bromide_06551",
    "en": "Colton's photo",
    "jp": "アンソニーのしゃしん"
  },
  {
    "label": "Bromide_06552",
    "en": "Papi's photo",
    "jp": "オカッピのしゃしん"
  },
  {
    "label": "Bromide_06553",
    "en": "Julian's photo",
    "jp": "ジュリーのしゃしん"
  },
  {
    "label": "Bromide_06554",
    "en": "Yuka's photo",
    "jp": "ユーカリのしゃしん"
  },
  {
    "label": "Bromide_06555",
    "en": "Alice's photo",
    "jp": "メルボルンのしゃしん"
  },
  {
    "label": "Bromide_06556",
    "en": "Melba's photo",
    "jp": "アデレードのしゃしん"
  },
  {
    "label": "Bromide_06557",
    "en": "Sydney's photo",
    "jp": "シドニーのしゃしん"
  },
  {
    "label": "Bromide_06558",
    "en": "Gonzo's photo",
    "jp": "ゴンゾーのしゃしん"
  },
  {
    "label": "Bromide_06559",
    "en": "Ozzie's photo",
    "jp": "ドングリのしゃしん"
  },
  {
    "label": "Bromide_06560",
    "en": "Jay's photo",
    "jp": "ツバクロのしゃしん"
  },
  {
    "label": "Bromide_06561",
    "en": "Canberra's photo",
    "jp": "キャンベラのしゃしん"
  },
  {
    "label": "Bromide_06562",
    "en": "Lyman's photo",
    "jp": "オズモンドのしゃしん"
  },
  {
    "label": "Bromide_06563",
    "en": "Eugene's photo",
    "jp": "ロッキーのしゃしん"
  },
  {
    "label": "Bromide_06564",
    "en": "Kitt's photo",
    "jp": "アップリケのしゃしん"
  },
  {
    "label": "Bromide_06565",
    "en": "Mathilda's photo",
    "jp": "アザラクのしゃしん"
  },
  {
    "label": "Bromide_06566",
    "en": "Carrie's photo",
    "jp": "マミィのしゃしん"
  },
  {
    "label": "Bromide_06567",
    "en": "Astrid's photo",
    "jp": "キッズのしゃしん"
  },
  {
    "label": "Bromide_06568",
    "en": "Sylvia's photo",
    "jp": "シルビアのしゃしん"
  },
  {
    "label": "Bromide_06569",
    "en": "Walt's photo",
    "jp": "カンロクのしゃしん"
  },
  {
    "label": "Bromide_06570",
    "en": "Rooney's photo",
    "jp": "マイクのしゃしん"
  },
  {
    "label": "Bromide_06571",
    "en": "Robin's photo",
    "jp": "パーチクのしゃしん"
  },
  {
    "label": "Bromide_06572",
    "en": "Marcie's photo",
    "jp": "マリアのしゃしん"
  },
  {
    "label": "Bromide_06573",
    "en": "Bud's photo",
    "jp": "グラさんのしゃしん"
  },
  {
    "label": "Bromide_06574",
    "en": "Elvis's photo",
    "jp": "キングのしゃしん"
  },
  {
    "label": "Bromide_06575",
    "en": "Rex's photo",
    "jp": "サンデーのしゃしん"
  },
  {
    "label": "Bromide_06576",
    "en": "Leopold's photo",
    "jp": "ティーチャーのしゃしん"
  },
  {
    "label": "Bromide_06577",
    "en": "Mott's photo",
    "jp": "リックのしゃしん"
  },
  {
    "label": "Bromide_06578",
    "en": "Rory's photo",
    "jp": "アーサーのしゃしん"
  },
  {
    "label": "Bromide_06579",
    "en": "Lionel's photo",
    "jp": "ライオネルのしゃしん"
  },
  {
    "label": "Bromide_06580",
    "en": "Nana's photo",
    "jp": "チッチのしゃしん"
  },
  {
    "label": "Bromide_06581",
    "en": "Simon's photo",
    "jp": "エテキチのしゃしん"
  },
  {
    "label": "Bromide_06582",
    "en": "Anchovy's photo",
    "jp": "アンチョビのしゃしん"
  },
  {
    "label": "Bromide_06583",
    "en": "Tammi's photo",
    "jp": "エイプリルのしゃしん"
  },
  {
    "label": "Bromide_06584",
    "en": "Monty's photo",
    "jp": "サルモンティのしゃしん"
  },
  {
    "label": "Bromide_06585",
    "en": "Elise's photo",
    "jp": "モンこのしゃしん"
  },
  {
    "label": "Bromide_06586",
    "en": "Flip's photo",
    "jp": "さすけのしゃしん"
  },
  {
    "label": "Bromide_06587",
    "en": "Shari's photo",
    "jp": "シェリーのしゃしん"
  },
  {
    "label": "Bromide_06588",
    "en": "Deli's photo",
    "jp": "デリーのしゃしん"
  },
  {
    "label": "Bromide_06589",
    "en": "Dora's photo",
    "jp": "とめのしゃしん"
  },
  {
    "label": "Bromide_06590",
    "en": "Limberg's photo",
    "jp": "らっきょのしゃしん"
  },
  {
    "label": "Bromide_06591",
    "en": "Bella's photo",
    "jp": "イザベラのしゃしん"
  },
  {
    "label": "Bromide_06592",
    "en": "Bree's photo",
    "jp": "サラのしゃしん"
  },
  {
    "label": "Bromide_06593",
    "en": "Twiggy's photo",
    "jp": "ピーチクのしゃしん"
  },
  {
    "label": "Bromide_06594",
    "en": "Samson's photo",
    "jp": "ピースのしゃしん"
  },
  {
    "label": "Bromide_06595",
    "en": "Rod's photo",
    "jp": "ジャンのしゃしん"
  },
  {
    "label": "Bromide_06596",
    "en": "Candi's photo",
    "jp": "かんゆのしゃしん"
  },
  {
    "label": "Bromide_06597",
    "en": "Rizzo's photo",
    "jp": "ちょろきちのしゃしん"
  },
  {
    "label": "Bromide_06598",
    "en": "Anicotti's photo",
    "jp": "ラザニアのしゃしん"
  },
  {
    "label": "Bromide_06599",
    "en": "Broccolo's photo",
    "jp": "ブロッコリーのしゃしん"
  },
  {
    "label": "Bromide_06600",
    "en": "Moose's photo",
    "jp": "ピンのしゃしん"
  },
  {
    "label": "Bromide_06601",
    "en": "Bettina's photo",
    "jp": "マルコのしゃしん"
  },
  {
    "label": "Bromide_06602",
    "en": "Greta's photo",
    "jp": "ふくこのしゃしん"
  },
  {
    "label": "Bromide_06603",
    "en": "Penelope's photo",
    "jp": "チューこのしゃしん"
  },
  {
    "label": "Bromide_06604",
    "en": "Jitters's photo",
    "jp": "ジーニョのしゃしん"
  },
  {
    "label": "Bromide_06605",
    "en": "Chadder's photo",
    "jp": "チーズのしゃしん"
  },
  {
    "label": "Bromide_06606",
    "en": "Octavian's photo",
    "jp": "おくたろうのしゃしん"
  },
  {
    "label": "Bromide_06607",
    "en": "Marina's photo",
    "jp": "タコリーナのしゃしん"
  },
  {
    "label": "Bromide_06608",
    "en": "Zucker's photo",
    "jp": "タコヤのしゃしん"
  },
  {
    "label": "Bromide_06609",
    "en": "Queenie's photo",
    "jp": "タキュのしゃしん"
  },
  {
    "label": "Bromide_06610",
    "en": "Gladys's photo",
    "jp": "ちとせのしゃしん"
  },
  {
    "label": "Bromide_06611",
    "en": "Sandy's photo",
    "jp": "ランのしゃしん"
  },
  {
    "label": "Bromide_06612",
    "en": "Sprocket's photo",
    "jp": "ヘルツのしゃしん"
  },
  {
    "label": "Bromide_06613",
    "en": "Julia's photo",
    "jp": "ジュリアのしゃしん"
  },
  {
    "label": "Bromide_06614",
    "en": "Cranston's photo",
    "jp": "トキオのしゃしん"
  },
  {
    "label": "Bromide_06615",
    "en": "Piper's photo",
    "jp": "レイコのしゃしん"
  },
  {
    "label": "Bromide_06616",
    "en": "Phil's photo",
    "jp": "ケインのしゃしん"
  },
  {
    "label": "Bromide_06617",
    "en": "Blanche's photo",
    "jp": "しのぶのしゃしん"
  },
  {
    "label": "Bromide_06618",
    "en": "Flora's photo",
    "jp": "フララのしゃしん"
  },
  {
    "label": "Bromide_06619",
    "en": "Phoebe's photo",
    "jp": "ヒノコのしゃしん"
  },
  {
    "label": "Bromide_06620",
    "en": "Apollo's photo",
    "jp": "アポロのしゃしん"
  },
  {
    "label": "Bromide_06621",
    "en": "Amelia's photo",
    "jp": "アンデスのしゃしん"
  },
  {
    "label": "Bromide_06622",
    "en": "Pierce's photo",
    "jp": "セバスチャンのしゃしん"
  },
  {
    "label": "Bromide_06623",
    "en": "Buzz's photo",
    "jp": "ひでよしのしゃしん"
  },
  {
    "label": "Bromide_06624",
    "en": "Avery's photo",
    "jp": "クスケチャのしゃしん"
  },
  {
    "label": "Bromide_06625",
    "en": "Frank's photo",
    "jp": "ハルクのしゃしん"
  },
  {
    "label": "Bromide_06626",
    "en": "Admiral's photo",
    "jp": "イッテツのしゃしん"
  },
  {
    "label": "Bromide_06627",
    "en": "Sterling's photo",
    "jp": "ギンカクのしゃしん"
  },
  {
    "label": "Bromide_06628",
    "en": "Keaton's photo",
    "jp": "フランクのしゃしん"
  },
  {
    "label": "Bromide_06629",
    "en": "Celia's photo",
    "jp": "ティファニーのしゃしん"
  },
  {
    "label": "Bromide_06630",
    "en": "Aurora's photo",
    "jp": "オーロラのしゃしん"
  },
  {
    "label": "Bromide_06631",
    "en": "Roald's photo",
    "jp": "ペンタのしゃしん"
  },
  {
    "label": "Bromide_06632",
    "en": "Cube's photo",
    "jp": "ビスのしゃしん"
  },
  {
    "label": "Bromide_06633",
    "en": "Hopper's photo",
    "jp": "ダルマンのしゃしん"
  },
  {
    "label": "Bromide_06634",
    "en": "Friga's photo",
    "jp": "サブリナのしゃしん"
  },
  {
    "label": "Bromide_06635",
    "en": "Gwen's photo",
    "jp": "ポーラのしゃしん"
  },
  {
    "label": "Bromide_06636",
    "en": "Puck's photo",
    "jp": "ホッケーのしゃしん"
  },
  {
    "label": "Bromide_06637",
    "en": "Midge's photo",
    "jp": "うずまきのしゃしん"
  },
  {
    "label": "Bromide_06638",
    "en": "Wade's photo",
    "jp": "カマボコのしゃしん"
  },
  {
    "label": "Bromide_06639",
    "en": "Boomer's photo",
    "jp": "ショーイのしゃしん"
  },
  {
    "label": "Bromide_06640",
    "en": "Iggly's photo",
    "jp": "のりまきのしゃしん"
  },
  {
    "label": "Bromide_06641",
    "en": "Tex's photo",
    "jp": "ボルトのしゃしん"
  },
  {
    "label": "Bromide_06642",
    "en": "Flo's photo",
    "jp": "レイラのしゃしん"
  },
  {
    "label": "Bromide_06643",
    "en": "Sprinkle's photo",
    "jp": "フラッペのしゃしん"
  },
  {
    "label": "Bromide_06644",
    "en": "Curly's photo",
    "jp": "ハムカツのしゃしん"
  },
  {
    "label": "Bromide_06645",
    "en": "Truffles's photo",
    "jp": "トンコのしゃしん"
  },
  {
    "label": "Bromide_06646",
    "en": "Rasher's photo",
    "jp": "グレオのしゃしん"
  },
  {
    "label": "Bromide_06647",
    "en": "Hugh's photo",
    "jp": "クッチャネのしゃしん"
  },
  {
    "label": "Bromide_06648",
    "en": "Pango's photo",
    "jp": "パトラのしゃしん"
  },
  {
    "label": "Bromide_06649",
    "en": "Jacob's photo",
    "jp": "ジャコテンのしゃしん"
  },
  {
    "label": "Bromide_06650",
    "en": "Lucy's photo",
    "jp": "ルーシーのしゃしん"
  },
  {
    "label": "Bromide_06651",
    "en": "Spork's photo",
    "jp": "ポークのしゃしん"
  },
  {
    "label": "Bromide_06652",
    "en": "Cobb's photo",
    "jp": "ハカセのしゃしん"
  },
  {
    "label": "Bromide_06653",
    "en": "Boris's photo",
    "jp": "ダリーのしゃしん"
  },
  {
    "label": "Bromide_06654",
    "en": "Maggie's photo",
    "jp": "マーガレットのしゃしん"
  },
  {
    "label": "Bromide_06655",
    "en": "Peggy's photo",
    "jp": "ちえりのしゃしん"
  },
  {
    "label": "Bromide_06656",
    "en": "Gala's photo",
    "jp": "ためこのしゃしん"
  },
  {
    "label": "Bromide_06657",
    "en": "Chops's photo",
    "jp": "トンファンのしゃしん"
  },
  {
    "label": "Bromide_06658",
    "en": "Kevin's photo",
    "jp": "イノッチのしゃしん"
  },
  {
    "label": "Bromide_06659",
    "en": "Pancetti's photo",
    "jp": "ブリトニーのしゃしん"
  },
  {
    "label": "Bromide_06660",
    "en": "Lucha's photo",
    "jp": "マスカラスのしゃしん"
  },
  {
    "label": "Bromide_06661",
    "en": "Agnes's photo",
    "jp": "アグネスのしゃしん"
  },
  {
    "label": "Bromide_06662",
    "en": "Bunnie's photo",
    "jp": "リリアンのしゃしん"
  },
  {
    "label": "Bromide_06663",
    "en": "Dotty's photo",
    "jp": "マーサのしゃしん"
  },
  {
    "label": "Bromide_06664",
    "en": "Coco's photo",
    "jp": "やよいのしゃしん"
  },
  {
    "label": "Bromide_06665",
    "en": "Snake's photo",
    "jp": "モモチのしゃしん"
  },
  {
    "label": "Bromide_06666",
    "en": "Gaston's photo",
    "jp": "モサキチのしゃしん"
  },
  {
    "label": "Bromide_06667",
    "en": "Gabi's photo",
    "jp": "ペチカのしゃしん"
  },
  {
    "label": "Bromide_06668",
    "en": "Pippy's photo",
    "jp": "ロッタのしゃしん"
  },
  {
    "label": "Bromide_06669",
    "en": "Tiffany's photo",
    "jp": "バズレーのしゃしん"
  },
  {
    "label": "Bromide_06670",
    "en": "Genji's photo",
    "jp": "ゲンジのしゃしん"
  },
  {
    "label": "Bromide_06671",
    "en": "Jacques's photo",
    "jp": "ジョッキーのしゃしん"
  },
  {
    "label": "Bromide_06672",
    "en": "Ruby's photo",
    "jp": "ルナのしゃしん"
  },
  {
    "label": "Bromide_06673",
    "en": "Doc's photo",
    "jp": "トビオのしゃしん"
  },
  {
    "label": "Bromide_06674",
    "en": "Claude's photo",
    "jp": "ビネガーのしゃしん"
  },
  {
    "label": "Bromide_06675",
    "en": "Francine's photo",
    "jp": "フランソワのしゃしん"
  },
  {
    "label": "Bromide_06676",
    "en": "Chrissy's photo",
    "jp": "クリスチーヌのしゃしん"
  },
  {
    "label": "Bromide_06677",
    "en": "Hopkins's photo",
    "jp": "プースケのしゃしん"
  },
  {
    "label": "Bromide_06678",
    "en": "O'Hare's photo",
    "jp": "サントスのしゃしん"
  },
  {
    "label": "Bromide_06679",
    "en": "Carmen's photo",
    "jp": "チョコのしゃしん"
  },
  {
    "label": "Bromide_06680",
    "en": "Bonbon's photo",
    "jp": "ミミィのしゃしん"
  },
  {
    "label": "Bromide_06681",
    "en": "Cole's photo",
    "jp": "アマミンのしゃしん"
  },
  {
    "label": "Bromide_06682",
    "en": "Peck's photo",
    "jp": "ふみたろうのしゃしん"
  },
  {
    "label": "Bromide_06683",
    "en": "Mira's photo",
    "jp": "ミラコのしゃしん"
  },
  {
    "label": "Bromide_06684",
    "en": "Tank's photo",
    "jp": "くるぶしのしゃしん"
  },
  {
    "label": "Bromide_06685",
    "en": "Rhonda's photo",
    "jp": "ユメコのしゃしん"
  },
  {
    "label": "Bromide_06686",
    "en": "Spike's photo",
    "jp": "スクワットのしゃしん"
  },
  {
    "label": "Bromide_06687",
    "en": "Hornsby's photo",
    "jp": "みつおのしゃしん"
  },
  {
    "label": "Bromide_06688",
    "en": "Merengue's photo",
    "jp": "パティのしゃしん"
  },
  {
    "label": "Bromide_06689",
    "en": "Renée's photo",
    "jp": "おさいのしゃしん"
  },
  {
    "label": "Bromide_06690",
    "en": "Vesta's photo",
    "jp": "メリヤスのしゃしん"
  },
  {
    "label": "Bromide_06691",
    "en": "Baabara's photo",
    "jp": "トロワのしゃしん"
  },
  {
    "label": "Bromide_06692",
    "en": "Eunice's photo",
    "jp": "モヘアのしゃしん"
  },
  {
    "label": "Bromide_06693",
    "en": "Sparro's photo",
    "jp": "ちゅんのすけのしゃしん"
  },
  {
    "label": "Bromide_06694",
    "en": "Stella's photo",
    "jp": "アクリルのしゃしん"
  },
  {
    "label": "Bromide_06695",
    "en": "Cashmere's photo",
    "jp": "ラムールのしゃしん"
  },
  {
    "label": "Bromide_06696",
    "en": "Willow's photo",
    "jp": "マリーのしゃしん"
  },
  {
    "label": "Bromide_06697",
    "en": "Curlos's photo",
    "jp": "カルロスのしゃしん"
  },
  {
    "label": "Bromide_06698",
    "en": "Wendy's photo",
    "jp": "みぞれのしゃしん"
  },
  {
    "label": "Bromide_06699",
    "en": "Timbra's photo",
    "jp": "つかさのしゃしん"
  },
  {
    "label": "Bromide_06700",
    "en": "Frita's photo",
    "jp": "ウェンディのしゃしん"
  },
  {
    "label": "Bromide_06701",
    "en": "Muffy's photo",
    "jp": "フリルのしゃしん"
  },
  {
    "label": "Bromide_06702",
    "en": "Pietro's photo",
    "jp": "ジュペッティのしゃしん"
  },
  {
    "label": "Bromide_06703",
    "en": "Peanut's photo",
    "jp": "ももこのしゃしん"
  },
  {
    "label": "Bromide_06704",
    "en": "Angus's photo",
    "jp": "セルバンテスのしゃしん"
  },
  {
    "label": "Bromide_06705",
    "en": "Blaire's photo",
    "jp": "シルエットのしゃしん"
  },
  {
    "label": "Bromide_06706",
    "en": "Filbert's photo",
    "jp": "リッキーのしゃしん"
  },
  {
    "label": "Bromide_06707",
    "en": "Pecan's photo",
    "jp": "レベッカのしゃしん"
  },
  {
    "label": "Bromide_06708",
    "en": "Nibbles's photo",
    "jp": "ガリガリのしゃしん"
  },
  {
    "label": "Bromide_06709",
    "en": "Agent S's photo",
    "jp": "２ごうのしゃしん"
  },
  {
    "label": "Bromide_06710",
    "en": "Caroline's photo",
    "jp": "キャロラインのしゃしん"
  },
  {
    "label": "Bromide_06711",
    "en": "Sally's photo",
    "jp": "ララミーのしゃしん"
  },
  {
    "label": "Bromide_06712",
    "en": "Static's photo",
    "jp": "スパークのしゃしん"
  },
  {
    "label": "Bromide_06713",
    "en": "Mint's photo",
    "jp": "ミントのしゃしん"
  },
  {
    "label": "Bromide_06714",
    "en": "Ricky's photo",
    "jp": "カジロウのしゃしん"
  },
  {
    "label": "Bromide_06715",
    "en": "Rodeo's photo",
    "jp": "ロデオのしゃしん"
  },
  {
    "label": "Bromide_06716",
    "en": "Cally's photo",
    "jp": "パセリのしゃしん"
  },
  {
    "label": "Bromide_06717",
    "en": "Tasha's photo",
    "jp": "ナターシャのしゃしん"
  },
  {
    "label": "Bromide_06718",
    "en": "Sylvana's photo",
    "jp": "もんぺのしゃしん"
  },
  {
    "label": "Bromide_06719",
    "en": "Poppy's photo",
    "jp": "グミのしゃしん"
  },
  {
    "label": "Bromide_06720",
    "en": "Sheldon's photo",
    "jp": "クリスのしゃしん"
  },
  {
    "label": "Bromide_06721",
    "en": "Marshal's photo",
    "jp": "ジュンのしゃしん"
  },
  {
    "label": "Bromide_06722",
    "en": "Hazel's photo",
    "jp": "アイリスのしゃしん"
  },
  {
    "label": "Bromide_06723",
    "en": "Rolf's photo",
    "jp": "チョモランのしゃしん"
  },
  {
    "label": "Bromide_06724",
    "en": "Rowan's photo",
    "jp": "ゴメスのしゃしん"
  },
  {
    "label": "Bromide_06725",
    "en": "Tybalt's photo",
    "jp": "ハリマオのしゃしん"
  },
  {
    "label": "Bromide_06726",
    "en": "Stu's photo",
    "jp": "モーリスのしゃしん"
  },
  {
    "label": "Bromide_06727",
    "en": "Bangle's photo",
    "jp": "ルーズのしゃしん"
  },
  {
    "label": "Bromide_06728",
    "en": "Leonardo's photo",
    "jp": "ヒョウタのしゃしん"
  },
  {
    "label": "Bromide_06729",
    "en": "Claudia's photo",
    "jp": "マリリンのしゃしん"
  },
  {
    "label": "Bromide_06730",
    "en": "Bianca's photo",
    "jp": "コユキのしゃしん"
  },
  {
    "label": "Bromide_06731",
    "en": "Chief's photo",
    "jp": "チーフのしゃしん"
  },
  {
    "label": "Bromide_06732",
    "en": "Lobo's photo",
    "jp": "ブンジロウのしゃしん"
  },
  {
    "label": "Bromide_06733",
    "en": "Wolfgang's photo",
    "jp": "ロボのしゃしん"
  },
  {
    "label": "Bromide_06734",
    "en": "Whitney's photo",
    "jp": "ビアンカのしゃしん"
  },
  {
    "label": "Bromide_06735",
    "en": "Dobie's photo",
    "jp": "けんのしゃしん"
  },
  {
    "label": "Bromide_06736",
    "en": "Freya's photo",
    "jp": "ツンドラのしゃしん"
  },
  {
    "label": "Bromide_06737",
    "en": "T-Bone's photo",
    "jp": "ボルシチのしゃしん"
  },
  {
    "label": "Bromide_06738",
    "en": "Fang's photo",
    "jp": "シベリアのしゃしん"
  },
  {
    "label": "Bromide_06739",
    "en": "Vivian's photo",
    "jp": "ヴァネッサのしゃしん"
  },
  {
    "label": "Bromide_06740",
    "en": "Skye's photo",
    "jp": "リリィのしゃしん"
  },
  {
    "label": "Bromide_06741",
    "en": "Kyle's photo",
    "jp": "リカルドのしゃしん"
  },
  {
    "label": "Bromide_06742",
    "en": "Coach's photo",
    "jp": "テッチャンのしゃしん"
  },
  {
    "label": "Bromide_06743",
    "en": "Anabelle's photo",
    "jp": "あるみのしゃしん"
  },
  {
    "label": "Bromide_06744",
    "en": "Vic's photo",
    "jp": "ノルマンのしゃしん"
  },
  {
    "label": "Bromide_06745",
    "en": "Bob's photo",
    "jp": "ニコバンのしゃしん"
  },
  {
    "label": "Bromide_06746",
    "en": "Mitzi's photo",
    "jp": "マールのしゃしん"
  },
  {
    "label": "Bromide_06747",
    "en": "Rosie's photo",
    "jp": "ブーケのしゃしん"
  },
  {
    "label": "Bromide_06748",
    "en": "Olivia's photo",
    "jp": "オリビアのしゃしん"
  },
  {
    "label": "Bromide_06749",
    "en": "Kiki's photo",
    "jp": "キャビアのしゃしん"
  },
  {
    "label": "Bromide_06750",
    "en": "Tangy's photo",
    "jp": "ヒャクパーのしゃしん"
  },
  {
    "label": "Bromide_06751",
    "en": "Punchy's photo",
    "jp": "ビンタのしゃしん"
  },
  {
    "label": "Bromide_06752",
    "en": "Purrl's photo",
    "jp": "たまのしゃしん"
  },
  {
    "label": "Bromide_06753",
    "en": "Moe's photo",
    "jp": "ジンペイのしゃしん"
  },
  {
    "label": "Bromide_06754",
    "en": "Snooty's photo",
    "jp": "こまちのしゃしん"
  },
  {
    "label": "Bromide_06755",
    "en": "Kabuki's photo",
    "jp": "かぶきちのしゃしん"
  },
  {
    "label": "Bromide_06756",
    "en": "Kid Cat's photo",
    "jp": "１ごうのしゃしん"
  },
  {
    "label": "Bromide_06757",
    "en": "Monique's photo",
    "jp": "ジェーンのしゃしん"
  },
  {
    "label": "Bromide_06758",
    "en": "Tabby's photo",
    "jp": "トラこのしゃしん"
  },
  {
    "label": "Bromide_06759",
    "en": "Stinky's photo",
    "jp": "アセクサのしゃしん"
  },
  {
    "label": "Bromide_06760",
    "en": "Kitty's photo",
    "jp": "ショコラのしゃしん"
  },
  {
    "label": "Bromide_06761",
    "en": "Tom's photo",
    "jp": "バンタムのしゃしん"
  },
  {
    "label": "Bromide_06762",
    "en": "Merry's photo",
    "jp": "さっちのしゃしん"
  },
  {
    "label": "Bromide_06763",
    "en": "Felicity's photo",
    "jp": "みかっちのしゃしん"
  },
  {
    "label": "Bromide_06764",
    "en": "Lolly's photo",
    "jp": "ラムネのしゃしん"
  },
  {
    "label": "Bromide_06765",
    "en": "Annalisa's photo",
    "jp": "みやびのしゃしん"
  },
  {
    "label": "Bromide_06766",
    "en": "Ankha's photo",
    "jp": "ナイルのしゃしん"
  },
  {
    "label": "Bromide_06767",
    "en": "Rudy's photo",
    "jp": "チャスのしゃしん"
  },
  {
    "label": "Bromide_06768",
    "en": "Katt's photo",
    "jp": "ちょいのしゃしん"
  },
  {
    "label": "Bromide_06769",
    "en": "Bluebear's photo",
    "jp": "グルミンのしゃしん"
  },
  {
    "label": "Bromide_06770",
    "en": "Maple's photo",
    "jp": "メープルのしゃしん"
  },
  {
    "label": "Bromide_06771",
    "en": "Poncho's photo",
    "jp": "ポンチョのしゃしん"
  },
  {
    "label": "Bromide_06772",
    "en": "Pudge's photo",
    "jp": "きんぞうのしゃしん"
  },
  {
    "label": "Bromide_06773",
    "en": "Kody's photo",
    "jp": "アイダホのしゃしん"
  },
  {
    "label": "Bromide_06774",
    "en": "Stitches's photo",
    "jp": "パッチのしゃしん"
  },
  {
    "label": "Bromide_06775",
    "en": "Vladimir's photo",
    "jp": "ガビのしゃしん"
  },
  {
    "label": "Bromide_06776",
    "en": "Olaf's photo",
    "jp": "アントニオのしゃしん"
  },
  {
    "label": "Bromide_06777",
    "en": "Murphy's photo",
    "jp": "のりおのしゃしん"
  },
  {
    "label": "Bromide_06778",
    "en": "Olive's photo",
    "jp": "ピッコロのしゃしん"
  },
  {
    "label": "Bromide_06779",
    "en": "Cheri's photo",
    "jp": "アセロラのしゃしん"
  },
  {
    "label": "Bromide_06780",
    "en": "June's photo",
    "jp": "メイのしゃしん"
  },
  {
    "label": "Bromide_06781",
    "en": "Pekoe's photo",
    "jp": "ジャスミンのしゃしん"
  },
  {
    "label": "Bromide_06782",
    "en": "Chester's photo",
    "jp": "パンタのしゃしん"
  },
  {
    "label": "Bromide_06783",
    "en": "Barold's photo",
    "jp": "ニッシーのしゃしん"
  },
  {
    "label": "Bromide_06784",
    "en": "Tammy's photo",
    "jp": "アネッサのしゃしん"
  },
  {
    "label": "Bromide_06785",
    "en": "Goose's photo",
    "jp": "ケンタのしゃしん"
  },
  {
    "label": "Bromide_06786",
    "en": "Benedict's photo",
    "jp": "ぺしみちのしゃしん"
  },
  {
    "label": "Bromide_06787",
    "en": "Teddy's photo",
    "jp": "たいへいたのしゃしん"
  },
  {
    "label": "Bromide_06788",
    "en": "Egbert's photo",
    "jp": "しもやけのしゃしん"
  },
  {
    "label": "Bromide_06789",
    "en": "Ava's photo",
    "jp": "ドミグラのしゃしん"
  },
  {
    "label": "Bromide_06790",
    "en": "Becky's photo",
    "jp": "アリアのしゃしん"
  },
  {
    "label": "Bromide_06791",
    "en": "Plucky's photo",
    "jp": "パタヤのしゃしん"
  },
  {
    "label": "Bromide_06792",
    "en": "Knox's photo",
    "jp": "キンカクのしゃしん"
  },
  {
    "label": "Bromide_06793",
    "en": "Broffina's photo",
    "jp": "カサンドラのしゃしん"
  },
  {
    "label": "Bromide_06794",
    "en": "Ken's photo",
    "jp": "クロベエのしゃしん"
  },
  {
    "label": "Bromide_06795",
    "en": "Patty's photo",
    "jp": "カルピのしゃしん"
  },
  {
    "label": "Bromide_06796",
    "en": "Tipper's photo",
    "jp": "まきばのしゃしん"
  },
  {
    "label": "Bromide_06797",
    "en": "Norma's photo",
    "jp": "いさこのしゃしん"
  },
  {
    "label": "Bromide_06798",
    "en": "Pinky's photo",
    "jp": "タンタンのしゃしん"
  },
  {
    "label": "Bromide_06799",
    "en": "Naomi's photo",
    "jp": "ハナコのしゃしん"
  },
  {
    "label": "Bromide_06800",
    "en": "Alfonso's photo",
    "jp": "アルベルトのしゃしん"
  },
  {
    "label": "Bromide_06801",
    "en": "Alli's photo",
    "jp": "クロコのしゃしん"
  },
  {
    "label": "Bromide_06802",
    "en": "Boots's photo",
    "jp": "ホウサクのしゃしん"
  },
  {
    "label": "Bromide_06803",
    "en": "Del's photo",
    "jp": "ヤマトのしゃしん"
  },
  {
    "label": "Bromide_06804",
    "en": "Sly's photo",
    "jp": "ハイドのしゃしん"
  },
  {
    "label": "Bromide_06805",
    "en": "Gayle's photo",
    "jp": "アリゲッティのしゃしん"
  },
  {
    "label": "Bromide_06806",
    "en": "Drago's photo",
    "jp": "タツオのしゃしん"
  },
  {
    "label": "Bromide_06807",
    "en": "Fauna's photo",
    "jp": "ドレミのしゃしん"
  },
  {
    "label": "Bromide_06808",
    "en": "Bam's photo",
    "jp": "タケルのしゃしん"
  },
  {
    "label": "Bromide_06992",
    "en": "Reneigh's photo",
    "jp": "リアーナのしゃしん"
  },
  {
    "label": "Bromide_06993",
    "en": "Judy's photo",
    "jp": "みすずのしゃしん"
  },
  {
    "label": "Bromide_06994",
    "en": "Audie's photo",
    "jp": "モニカのしゃしん"
  },
  {
    "label": "Bromide_06995",
    "en": "Megan's photo",
    "jp": "キャンディのしゃしん"
  },
  {
    "label": "Bromide_06996",
    "en": "Raymond's photo",
    "jp": "ジャックのしゃしん"
  },
  {
    "label": "Bromide_06997",
    "en": "Cyd's photo",
    "jp": "パンクスのしゃしん"
  },
  {
    "label": "Bromide_07212",
    "en": "Sherb's photo",
    "jp": "レムのしゃしん"
  },
  {
    "label": "Bromide_07213",
    "en": "Dom's photo",
    "jp": "ちゃちゃまるのしゃしん"
  },
  {
    "label": "Bromide_11115",
    "en": "Rilla's photo",
    "jp": "リラのしゃしん"
  },
  {
    "label": "Bromide_11116",
    "en": "Marty's photo",
    "jp": "マーティーのしゃしん"
  },
  {
    "label": "Bromide_11117",
    "en": "Étoile's photo",
    "jp": "エトワールのしゃしん"
  },
  {
    "label": "Bromide_11118",
    "en": "Chai's photo",
    "jp": "フィーカのしゃしん"
  },
  {
    "label": "Bromide_11119",
    "en": "Chelsea's photo",
    "jp": "チェルシーのしゃしん"
  },
  {
    "label": "Bromide_11120",
    "en": "Toby's photo",
    "jp": "トビーのしゃしん"
  },
  {
    "label": "Bromide_13862",
    "en": "Jingle's photo",
    "jp": "ジングルのしゃしん"
  },
  {
    "label": "Bromide_14254",
    "en": "Tom Nook's photo",
    "jp": "たぬきちのしゃしん"
  },
  {
    "label": "Bromide_14255",
    "en": "Timmy and Tommy's photo",
    "jp": "まめきち&つぶきちのしゃしん"
  },
  {
    "label": "Bromide_14256",
    "en": "Isabelle's photo",
    "jp": "しずえのしゃしん"
  },
  {
    "label": "Bromide_14472",
    "en": "Rover's photo",
    "jp": "みしらぬネコのしゃしん"
  }
];

itemNames.posters = [
  {
    "label": "Poster_10312",
    "en": "Isabelle's poster",
    "jp": "しずえのポスター"
  },
  {
    "label": "Poster_10313",
    "en": "Resetti's poster",
    "jp": "リセットさんのポスター"
  },
  {
    "label": "Poster_10314",
    "en": "Pancetti's poster",
    "jp": "ブリトニーのポスター"
  },
  {
    "label": "Poster_10315",
    "en": "Chief's poster",
    "jp": "チーフのポスター"
  },
  {
    "label": "Poster_10316",
    "en": "Bunnie's poster",
    "jp": "リリアンのポスター"
  },
  {
    "label": "Poster_10317",
    "en": "Clay's poster",
    "jp": "どぐろうのポスター"
  },
  {
    "label": "Poster_10318",
    "en": "Diana's poster",
    "jp": "ナタリーのポスター"
  },
  {
    "label": "Poster_10319",
    "en": "Axel's poster",
    "jp": "エックスエルのポスター"
  },
  {
    "label": "Poster_10320",
    "en": "Muffy's poster",
    "jp": "フリルのポスター"
  },
  {
    "label": "Poster_10321",
    "en": "Henry's poster",
    "jp": "ヘンリーのポスター"
  },
  {
    "label": "Poster_10322",
    "en": "Bertha's poster",
    "jp": "あんこのポスター"
  },
  {
    "label": "Poster_10323",
    "en": "Cyrano's poster",
    "jp": "さくらじまのポスター"
  },
  {
    "label": "Poster_10324",
    "en": "Blathers's poster",
    "jp": "フータのポスター"
  },
  {
    "label": "Poster_10325",
    "en": "Peanut's poster",
    "jp": "ももこのポスター"
  },
  {
    "label": "Poster_10326",
    "en": "Cole's poster",
    "jp": "アマミンのポスター"
  },
  {
    "label": "Poster_10327",
    "en": "Willow's poster",
    "jp": "マリーのポスター"
  },
  {
    "label": "Poster_10328",
    "en": "Roald's poster",
    "jp": "ペンタのポスター"
  },
  {
    "label": "Poster_10329",
    "en": "Molly's poster",
    "jp": "カモミのポスター"
  },
  {
    "label": "Poster_10330",
    "en": "Walker's poster",
    "jp": "ベンのポスター"
  },
  {
    "label": "Poster_10331",
    "en": "K.K.'s poster",
    "jp": "とたけけのポスター"
  },
  {
    "label": "Poster_10332",
    "en": "Kicks's poster",
    "jp": "シャンクのポスター"
  },
  {
    "label": "Poster_10333",
    "en": "Label's poster",
    "jp": "ことののポスター"
  },
  {
    "label": "Poster_10334",
    "en": "Celeste's poster",
    "jp": "フーコのポスター"
  },
  {
    "label": "Poster_10335",
    "en": "Copper's poster",
    "jp": "おまわりさんのポスター"
  },
  {
    "label": "Poster_10336",
    "en": "Booker's poster",
    "jp": "おまわりさんのポスター"
  },
  {
    "label": "Poster_10337",
    "en": "Katie's poster",
    "jp": "まいこちゃんのポスター"
  },
  {
    "label": "Poster_10338",
    "en": "Tommy's poster",
    "jp": "つぶきちのポスター"
  },
  {
    "label": "Poster_10339",
    "en": "Porter's poster",
    "jp": "えきいんさんのポスター"
  },
  {
    "label": "Poster_10340",
    "en": "Leila's poster",
    "jp": "ククのポスター"
  },
  {
    "label": "Poster_10341",
    "en": "Shrunk's poster",
    "jp": "ししょーのポスター"
  },
  {
    "label": "Poster_10342",
    "en": "Don's poster",
    "jp": "ラケットさんのポスター"
  },
  {
    "label": "Poster_10343",
    "en": "Blanca's poster",
    "jp": "あやしいネコのポスター"
  },
  {
    "label": "Poster_10344",
    "en": "Nat's poster",
    "jp": "カメヤマさんのポスター"
  },
  {
    "label": "Poster_10345",
    "en": "Chip's poster",
    "jp": "うおまさのポスター"
  },
  {
    "label": "Poster_10346",
    "en": "Jack's poster",
    "jp": "パンプキングのポスター"
  },
  {
    "label": "Poster_10347",
    "en": "Poncho's poster",
    "jp": "ポンチョのポスター"
  },
  {
    "label": "Poster_10348",
    "en": "Felicity's poster",
    "jp": "みかっちのポスター"
  },
  {
    "label": "Poster_10349",
    "en": "Ozzie's poster",
    "jp": "ドングリのポスター"
  },
  {
    "label": "Poster_10350",
    "en": "Tia's poster",
    "jp": "ティーナのポスター"
  },
  {
    "label": "Poster_10351",
    "en": "Lucha's poster",
    "jp": "マスカラスのポスター"
  },
  {
    "label": "Poster_10352",
    "en": "Fuchsia's poster",
    "jp": "ジェシカのポスター"
  },
  {
    "label": "Poster_10353",
    "en": "Harry's poster",
    "jp": "オリバーのポスター"
  },
  {
    "label": "Poster_10354",
    "en": "Kapp'n's poster",
    "jp": "かっぺいのポスター"
  },
  {
    "label": "Poster_10355",
    "en": "Gwen's poster",
    "jp": "ポーラのポスター"
  },
  {
    "label": "Poster_10356",
    "en": "Coach's poster",
    "jp": "テッチャンのポスター"
  },
  {
    "label": "Poster_10357",
    "en": "Kitt's poster",
    "jp": "アップリケのポスター"
  },
  {
    "label": "Poster_10358",
    "en": "Tom's poster",
    "jp": "バンタムのポスター"
  },
  {
    "label": "Poster_10359",
    "en": "Tipper's poster",
    "jp": "まきばのポスター"
  },
  {
    "label": "Poster_10360",
    "en": "Prince's poster",
    "jp": "カールのポスター"
  },
  {
    "label": "Poster_10361",
    "en": "Pate's poster",
    "jp": "ナッキーのポスター"
  },
  {
    "label": "Poster_10362",
    "en": "Vladimir's poster",
    "jp": "ガビのポスター"
  },
  {
    "label": "Poster_10363",
    "en": "Savannah's poster",
    "jp": "サバンナのポスター"
  },
  {
    "label": "Poster_10364",
    "en": "Kidd's poster",
    "jp": "やさおのポスター"
  },
  {
    "label": "Poster_10365",
    "en": "Phoebe's poster",
    "jp": "ヒノコのポスター"
  },
  {
    "label": "Poster_10366",
    "en": "Egbert's poster",
    "jp": "しもやけのポスター"
  },
  {
    "label": "Poster_10367",
    "en": "Cookie's poster",
    "jp": "ペリーヌのポスター"
  },
  {
    "label": "Poster_10368",
    "en": "Sly's poster",
    "jp": "ハイドのポスター"
  },
  {
    "label": "Poster_10369",
    "en": "Blaire's poster",
    "jp": "シルエットのポスター"
  },
  {
    "label": "Poster_10370",
    "en": "Avery's poster",
    "jp": "クスケチャのポスター"
  },
  {
    "label": "Poster_10371",
    "en": "Nana's poster",
    "jp": "チッチのポスター"
  },
  {
    "label": "Poster_10372",
    "en": "Peck's poster",
    "jp": "ふみたろうのポスター"
  },
  {
    "label": "Poster_10373",
    "en": "Cesar's poster",
    "jp": "アランのポスター"
  },
  {
    "label": "Poster_10374",
    "en": "Carmen's poster",
    "jp": "チョコのポスター"
  },
  {
    "label": "Poster_10375",
    "en": "Rodney's poster",
    "jp": "ジミーのポスター"
  },
  {
    "label": "Poster_10376",
    "en": "Scoot's poster",
    "jp": "マモルのポスター"
  },
  {
    "label": "Poster_10377",
    "en": "Whitney's poster",
    "jp": "ビアンカのポスター"
  },
  {
    "label": "Poster_10378",
    "en": "Broccolo's poster",
    "jp": "ブロッコリーのポスター"
  },
  {
    "label": "Poster_10379",
    "en": "Coco's poster",
    "jp": "やよいのポスター"
  },
  {
    "label": "Poster_10380",
    "en": "Groucho's poster",
    "jp": "クローのポスター"
  },
  {
    "label": "Poster_10381",
    "en": "Wendy's poster",
    "jp": "みぞれのポスター"
  },
  {
    "label": "Poster_10382",
    "en": "Alfonso's poster",
    "jp": "アルベルトのポスター"
  },
  {
    "label": "Poster_10383",
    "en": "Rhonda's poster",
    "jp": "ユメコのポスター"
  },
  {
    "label": "Poster_10384",
    "en": "Tom Nook's poster",
    "jp": "たぬきちのポスター"
  },
  {
    "label": "Poster_10385",
    "en": "Butch's poster",
    "jp": "ジョンのポスター"
  },
  {
    "label": "Poster_10386",
    "en": "Gabi's poster",
    "jp": "ペチカのポスター"
  },
  {
    "label": "Poster_10387",
    "en": "Moose's poster",
    "jp": "ピンのポスター"
  },
  {
    "label": "Poster_10388",
    "en": "Timbra's poster",
    "jp": "つかさのポスター"
  },
  {
    "label": "Poster_10389",
    "en": "Zell's poster",
    "jp": "ネルソンのポスター"
  },
  {
    "label": "Poster_10390",
    "en": "Pekoe's poster",
    "jp": "ジャスミンのポスター"
  },
  {
    "label": "Poster_10391",
    "en": "Mathilda's poster",
    "jp": "アザラクのポスター"
  },
  {
    "label": "Poster_10392",
    "en": "Ed's poster",
    "jp": "キザノホマレのポスター"
  },
  {
    "label": "Poster_10393",
    "en": "Bianca's poster",
    "jp": "コユキのポスター"
  },
  {
    "label": "Poster_10394",
    "en": "Filbert's poster",
    "jp": "リッキーのポスター"
  },
  {
    "label": "Poster_10395",
    "en": "Kitty's poster",
    "jp": "ショコラのポスター"
  },
  {
    "label": "Poster_10396",
    "en": "Beau's poster",
    "jp": "ペーターのポスター"
  },
  {
    "label": "Poster_10397",
    "en": "Nan's poster",
    "jp": "スミのポスター"
  },
  {
    "label": "Poster_10398",
    "en": "Bud's poster",
    "jp": "グラさんのポスター"
  },
  {
    "label": "Poster_10399",
    "en": "Ruby's poster",
    "jp": "ルナのポスター"
  },
  {
    "label": "Poster_10400",
    "en": "Benedict's poster",
    "jp": "ぺしみちのポスター"
  },
  {
    "label": "Poster_10401",
    "en": "Agnes's poster",
    "jp": "アグネスのポスター"
  },
  {
    "label": "Poster_10402",
    "en": "Julian's poster",
    "jp": "ジュリーのポスター"
  },
  {
    "label": "Poster_10403",
    "en": "Bettina's poster",
    "jp": "マルコのポスター"
  },
  {
    "label": "Poster_10404",
    "en": "Jay's poster",
    "jp": "ツバクロのポスター"
  },
  {
    "label": "Poster_10405",
    "en": "Sprinkle's poster",
    "jp": "フラッペのポスター"
  },
  {
    "label": "Poster_10406",
    "en": "Flip's poster",
    "jp": "さすけのポスター"
  },
  {
    "label": "Poster_10407",
    "en": "Hugh's poster",
    "jp": "クッチャネのポスター"
  },
  {
    "label": "Poster_10408",
    "en": "Hopper's poster",
    "jp": "ダルマンのポスター"
  },
  {
    "label": "Poster_10409",
    "en": "Pecan's poster",
    "jp": "レベッカのポスター"
  },
  {
    "label": "Poster_10410",
    "en": "Drake's poster",
    "jp": "フォアグラのポスター"
  },
  {
    "label": "Poster_10411",
    "en": "Alice's poster",
    "jp": "メルボルンのポスター"
  },
  {
    "label": "Poster_10412",
    "en": "Camofrog's poster",
    "jp": "フルメタルのポスター"
  },
  {
    "label": "Poster_10413",
    "en": "Anicotti's poster",
    "jp": "ラザニアのポスター"
  },
  {
    "label": "Poster_10414",
    "en": "Chops's poster",
    "jp": "トンファンのポスター"
  },
  {
    "label": "Poster_10415",
    "en": "Vic's poster",
    "jp": "ノルマンのポスター"
  },
  {
    "label": "Poster_10416",
    "en": "Ankha's poster",
    "jp": "ナイルのポスター"
  },
  {
    "label": "Poster_10417",
    "en": "Drift's poster",
    "jp": "ドクのポスター"
  },
  {
    "label": "Poster_10418",
    "en": "Vesta's poster",
    "jp": "メリヤスのポスター"
  },
  {
    "label": "Poster_10419",
    "en": "Marcel's poster",
    "jp": "もんじゃのポスター"
  },
  {
    "label": "Poster_10420",
    "en": "Pango's poster",
    "jp": "パトラのポスター"
  },
  {
    "label": "Poster_10421",
    "en": "Keaton's poster",
    "jp": "フランクのポスター"
  },
  {
    "label": "Poster_10422",
    "en": "Gladys's poster",
    "jp": "ちとせのポスター"
  },
  {
    "label": "Poster_10423",
    "en": "Hamphrey's poster",
    "jp": "ハムジのポスター"
  },
  {
    "label": "Poster_10424",
    "en": "Freya's poster",
    "jp": "ツンドラのポスター"
  },
  {
    "label": "Poster_10425",
    "en": "Agent S's poster",
    "jp": "２ごうのポスター"
  },
  {
    "label": "Poster_10426",
    "en": "Big Top's poster",
    "jp": "３ごうのポスター"
  },
  {
    "label": "Poster_10427",
    "en": "Rocket's poster",
    "jp": "４ごうのポスター"
  },
  {
    "label": "Poster_10428",
    "en": "Rover's poster",
    "jp": "みしらぬネコのポスター"
  },
  {
    "label": "Poster_10429",
    "en": "Pelly's poster",
    "jp": "ぺりこのポスター"
  },
  {
    "label": "Poster_10430",
    "en": "Joan's poster",
    "jp": "カブリバのポスター"
  },
  {
    "label": "Poster_10431",
    "en": "Phyllis's poster",
    "jp": "ぺりみのポスター"
  },
  {
    "label": "Poster_10432",
    "en": "Mabel's poster",
    "jp": "きぬよのポスター"
  },
  {
    "label": "Poster_10433",
    "en": "Leif's poster",
    "jp": "レイジのポスター"
  },
  {
    "label": "Poster_10434",
    "en": "Wendell's poster",
    "jp": "セイイチのポスター"
  },
  {
    "label": "Poster_10435",
    "en": "Cyrus's poster",
    "jp": "カイゾーのポスター"
  },
  {
    "label": "Poster_10436",
    "en": "Grams's poster",
    "jp": "ゲコのポスター"
  },
  {
    "label": "Poster_10437",
    "en": "Timmy's poster",
    "jp": "まめきちのポスター"
  },
  {
    "label": "Poster_10438",
    "en": "Digby's poster",
    "jp": "ケントのポスター"
  },
  {
    "label": "Poster_10439",
    "en": "Jingle's poster",
    "jp": "ジングルのポスター"
  },
  {
    "label": "Poster_10440",
    "en": "Lily's poster",
    "jp": "レイニーのポスター"
  },
  {
    "label": "Poster_10441",
    "en": "Tabby's poster",
    "jp": "トラこのポスター"
  },
  {
    "label": "Poster_10442",
    "en": "Kody's poster",
    "jp": "アイダホのポスター"
  },
  {
    "label": "Poster_10443",
    "en": "Miranda's poster",
    "jp": "ミランダのポスター"
  },
  {
    "label": "Poster_10444",
    "en": "Del's poster",
    "jp": "ヤマトのポスター"
  },
  {
    "label": "Poster_10445",
    "en": "Ken's poster",
    "jp": "クロベエのポスター"
  },
  {
    "label": "Poster_10446",
    "en": "Rodeo's poster",
    "jp": "ロデオのポスター"
  },
  {
    "label": "Poster_10447",
    "en": "Bubbles's poster",
    "jp": "チャコのポスター"
  },
  {
    "label": "Poster_10448",
    "en": "Cousteau's poster",
    "jp": "ハルマキのポスター"
  },
  {
    "label": "Poster_10449",
    "en": "Velma's poster",
    "jp": "ピティエのポスター"
  },
  {
    "label": "Poster_10450",
    "en": "Elvis's poster",
    "jp": "キングのポスター"
  },
  {
    "label": "Poster_10451",
    "en": "Canberra's poster",
    "jp": "キャンベラのポスター"
  },
  {
    "label": "Poster_10452",
    "en": "Colton's poster",
    "jp": "アンソニーのポスター"
  },
  {
    "label": "Poster_10453",
    "en": "Marina's poster",
    "jp": "タコリーナのポスター"
  },
  {
    "label": "Poster_10454",
    "en": "Spork's poster",
    "jp": "ポークのポスター"
  },
  {
    "label": "Poster_10455",
    "en": "Freckles's poster",
    "jp": "マグロのポスター"
  },
  {
    "label": "Poster_10456",
    "en": "Bam's poster",
    "jp": "タケルのポスター"
  },
  {
    "label": "Poster_10457",
    "en": "Friga's poster",
    "jp": "サブリナのポスター"
  },
  {
    "label": "Poster_10458",
    "en": "Ricky's poster",
    "jp": "カジロウのポスター"
  },
  {
    "label": "Poster_10459",
    "en": "Deirdre's poster",
    "jp": "ナディアのポスター"
  },
  {
    "label": "Poster_10460",
    "en": "Hans's poster",
    "jp": "スナイルのポスター"
  },
  {
    "label": "Poster_10461",
    "en": "Chevre's poster",
    "jp": "ユキのポスター"
  },
  {
    "label": "Poster_10462",
    "en": "Drago's poster",
    "jp": "タツオのポスター"
  },
  {
    "label": "Poster_10463",
    "en": "Mac's poster",
    "jp": "チャンプのポスター"
  },
  {
    "label": "Poster_10464",
    "en": "Eloise's poster",
    "jp": "エレフィンのポスター"
  },
  {
    "label": "Poster_10465",
    "en": "Wart Jr.'s poster",
    "jp": "サムのポスター"
  },
  {
    "label": "Poster_10466",
    "en": "Hazel's poster",
    "jp": "アイリスのポスター"
  },
  {
    "label": "Poster_10467",
    "en": "Ava's poster",
    "jp": "ドミグラのポスター"
  },
  {
    "label": "Poster_10468",
    "en": "Chester's poster",
    "jp": "パンタのポスター"
  },
  {
    "label": "Poster_10469",
    "en": "Genji's poster",
    "jp": "ゲンジのポスター"
  },
  {
    "label": "Poster_10470",
    "en": "Greta's poster",
    "jp": "ふくこのポスター"
  },
  {
    "label": "Poster_10471",
    "en": "Redd's poster",
    "jp": "つねきちのポスター"
  },
  {
    "label": "Poster_10472",
    "en": "Wolfgang's poster",
    "jp": "ロボのポスター"
  },
  {
    "label": "Poster_10473",
    "en": "Diva's poster",
    "jp": "アイーダのポスター"
  },
  {
    "label": "Poster_10474",
    "en": "Daisy's poster",
    "jp": "バニラのポスター"
  },
  {
    "label": "Poster_10475",
    "en": "Stinky's poster",
    "jp": "アセクサのポスター"
  },
  {
    "label": "Poster_10476",
    "en": "Tammi's poster",
    "jp": "エイプリルのポスター"
  },
  {
    "label": "Poster_10477",
    "en": "Tucker's poster",
    "jp": "はじめのポスター"
  },
  {
    "label": "Poster_10478",
    "en": "Blanche's poster",
    "jp": "しのぶのポスター"
  },
  {
    "label": "Poster_10479",
    "en": "Gaston's poster",
    "jp": "モサキチのポスター"
  },
  {
    "label": "Poster_10480",
    "en": "Marshal's poster",
    "jp": "ジュンのポスター"
  },
  {
    "label": "Poster_10481",
    "en": "Saharah's poster",
    "jp": "ローランのポスター"
  },
  {
    "label": "Poster_10482",
    "en": "Gala's poster",
    "jp": "ためこのポスター"
  },
  {
    "label": "Poster_10483",
    "en": "Joey's poster",
    "jp": "リチャードのポスター"
  },
  {
    "label": "Poster_10484",
    "en": "Pippy's poster",
    "jp": "ロッタのポスター"
  },
  {
    "label": "Poster_10485",
    "en": "Buck's poster",
    "jp": "ヴァヤシコフのポスター"
  },
  {
    "label": "Poster_10486",
    "en": "Bree's poster",
    "jp": "サラのポスター"
  },
  {
    "label": "Poster_10487",
    "en": "Rooney's poster",
    "jp": "マイクのポスター"
  },
  {
    "label": "Poster_10488",
    "en": "Curlos's poster",
    "jp": "カルロスのポスター"
  },
  {
    "label": "Poster_10489",
    "en": "Skye's poster",
    "jp": "リリィのポスター"
  },
  {
    "label": "Poster_10490",
    "en": "Flora's poster",
    "jp": "フララのポスター"
  },
  {
    "label": "Poster_10491",
    "en": "Luna's poster",
    "jp": "ゆめみのポスター"
  },
  {
    "label": "Poster_10492",
    "en": "Hamlet's poster",
    "jp": "ハムスケのポスター"
  },
  {
    "label": "Poster_10493",
    "en": "Astrid's poster",
    "jp": "キッズのポスター"
  },
  {
    "label": "Poster_10494",
    "en": "Monty's poster",
    "jp": "サルモンティのポスター"
  },
  {
    "label": "Poster_10495",
    "en": "Dora's poster",
    "jp": "とめのポスター"
  },
  {
    "label": "Poster_10496",
    "en": "Biskit's poster",
    "jp": "ロビンのポスター"
  },
  {
    "label": "Poster_10497",
    "en": "Victoria's poster",
    "jp": "セントアローのポスター"
  },
  {
    "label": "Poster_10498",
    "en": "Lyman's poster",
    "jp": "オズモンドのポスター"
  },
  {
    "label": "Poster_10499",
    "en": "Violet's poster",
    "jp": "ウズメのポスター"
  },
  {
    "label": "Poster_10500",
    "en": "Frank's poster",
    "jp": "ハルクのポスター"
  },
  {
    "label": "Poster_10501",
    "en": "Chadder's poster",
    "jp": "チーズのポスター"
  },
  {
    "label": "Poster_10502",
    "en": "Merengue's poster",
    "jp": "パティのポスター"
  },
  {
    "label": "Poster_10503",
    "en": "Cube's poster",
    "jp": "ビスのポスター"
  },
  {
    "label": "Poster_10504",
    "en": "Claudia's poster",
    "jp": "マリリンのポスター"
  },
  {
    "label": "Poster_10505",
    "en": "Curly's poster",
    "jp": "ハムカツのポスター"
  },
  {
    "label": "Poster_10506",
    "en": "Boomer's poster",
    "jp": "ショーイのポスター"
  },
  {
    "label": "Poster_10507",
    "en": "Caroline's poster",
    "jp": "キャロラインのポスター"
  },
  {
    "label": "Poster_10508",
    "en": "Baabara's poster",
    "jp": "トロワのポスター"
  },
  {
    "label": "Poster_10509",
    "en": "Rolf's poster",
    "jp": "チョモランのポスター"
  },
  {
    "label": "Poster_10510",
    "en": "Maple's poster",
    "jp": "メープルのポスター"
  },
  {
    "label": "Poster_10511",
    "en": "Soleil's poster",
    "jp": "シャンティのポスター"
  },
  {
    "label": "Poster_10512",
    "en": "Apollo's poster",
    "jp": "アポロのポスター"
  },
  {
    "label": "Poster_10513",
    "en": "Derwin's poster",
    "jp": "ボンのポスター"
  },
  {
    "label": "Poster_10514",
    "en": "Francine's poster",
    "jp": "フランソワのポスター"
  },
  {
    "label": "Poster_10515",
    "en": "Chrissy's poster",
    "jp": "クリスチーヌのポスター"
  },
  {
    "label": "Poster_10516",
    "en": "Brewster's poster",
    "jp": "マスターのポスター"
  },
  {
    "label": "Poster_10517",
    "en": "Katrina's poster",
    "jp": "ハッケミィのポスター"
  },
  {
    "label": "Poster_10518",
    "en": "Gracie's poster",
    "jp": "グレースのポスター"
  },
  {
    "label": "Poster_10519",
    "en": "Leilani's poster",
    "jp": "クーコのポスター"
  },
  {
    "label": "Poster_10520",
    "en": "Pavé's poster",
    "jp": "ベルリーナのポスター"
  },
  {
    "label": "Poster_10521",
    "en": "Gulliver's poster",
    "jp": "ジョニーのポスター"
  },
  {
    "label": "Poster_10522",
    "en": "Zipper's poster",
    "jp": "ぴょんたろうのポスター"
  },
  {
    "label": "Poster_10523",
    "en": "Goldie's poster",
    "jp": "キャラメルのポスター"
  },
  {
    "label": "Poster_10524",
    "en": "Stitches's poster",
    "jp": "パッチのポスター"
  },
  {
    "label": "Poster_10525",
    "en": "Mott's poster",
    "jp": "リックのポスター"
  },
  {
    "label": "Poster_10526",
    "en": "Mallary's poster",
    "jp": "スミモモのポスター"
  },
  {
    "label": "Poster_10527",
    "en": "Rocco's poster",
    "jp": "ゴンザレスのポスター"
  },
  {
    "label": "Poster_10528",
    "en": "Katt's poster",
    "jp": "ちょいのポスター"
  },
  {
    "label": "Poster_10529",
    "en": "Graham's poster",
    "jp": "グラハムのポスター"
  },
  {
    "label": "Poster_10530",
    "en": "Fauna's poster",
    "jp": "ドレミのポスター"
  },
  {
    "label": "Poster_10531",
    "en": "Peaches's poster",
    "jp": "ドサコのポスター"
  },
  {
    "label": "Poster_10532",
    "en": "Dizzy's poster",
    "jp": "ヒュージのポスター"
  },
  {
    "label": "Poster_10533",
    "en": "Penelope's poster",
    "jp": "チューこのポスター"
  },
  {
    "label": "Poster_10534",
    "en": "Boone's poster",
    "jp": "まんたろうのポスター"
  },
  {
    "label": "Poster_10535",
    "en": "Broffina's poster",
    "jp": "カサンドラのポスター"
  },
  {
    "label": "Poster_10536",
    "en": "Croque's poster",
    "jp": "タイシのポスター"
  },
  {
    "label": "Poster_10537",
    "en": "Pashmina's poster",
    "jp": "バーバラのポスター"
  },
  {
    "label": "Poster_10538",
    "en": "Shep's poster",
    "jp": "ボブのポスター"
  },
  {
    "label": "Poster_10539",
    "en": "Lolly's poster",
    "jp": "ラムネのポスター"
  },
  {
    "label": "Poster_10540",
    "en": "Erik's poster",
    "jp": "チャックのポスター"
  },
  {
    "label": "Poster_10541",
    "en": "Dotty's poster",
    "jp": "マーサのポスター"
  },
  {
    "label": "Poster_10542",
    "en": "Pierce's poster",
    "jp": "セバスチャンのポスター"
  },
  {
    "label": "Poster_10543",
    "en": "Queenie's poster",
    "jp": "タキュのポスター"
  },
  {
    "label": "Poster_10544",
    "en": "Fang's poster",
    "jp": "シベリアのポスター"
  },
  {
    "label": "Poster_10545",
    "en": "Frita's poster",
    "jp": "ウェンディのポスター"
  },
  {
    "label": "Poster_10546",
    "en": "Tex's poster",
    "jp": "ボルトのポスター"
  },
  {
    "label": "Poster_10547",
    "en": "Melba's poster",
    "jp": "アデレードのポスター"
  },
  {
    "label": "Poster_10548",
    "en": "Bones's poster",
    "jp": "トミのポスター"
  },
  {
    "label": "Poster_10549",
    "en": "Rudy's poster",
    "jp": "チャスのポスター"
  },
  {
    "label": "Poster_10550",
    "en": "Portia's poster",
    "jp": "ブレンダのポスター"
  },
  {
    "label": "Poster_10551",
    "en": "Naomi's poster",
    "jp": "ハナコのポスター"
  },
  {
    "label": "Poster_10552",
    "en": "Peewee's poster",
    "jp": "ダンベルのポスター"
  },
  {
    "label": "Poster_10553",
    "en": "Tammy's poster",
    "jp": "アネッサのポスター"
  },
  {
    "label": "Poster_10554",
    "en": "Lucy's poster",
    "jp": "ルーシーのポスター"
  },
  {
    "label": "Poster_10555",
    "en": "Elmer's poster",
    "jp": "サブレのポスター"
  },
  {
    "label": "Poster_10556",
    "en": "Puddles's poster",
    "jp": "チョキのポスター"
  },
  {
    "label": "Poster_10557",
    "en": "Rory's poster",
    "jp": "アーサーのポスター"
  },
  {
    "label": "Poster_10558",
    "en": "Elise's poster",
    "jp": "モンこのポスター"
  },
  {
    "label": "Poster_10559",
    "en": "Walt's poster",
    "jp": "カンロクのポスター"
  },
  {
    "label": "Poster_10560",
    "en": "Leonardo's poster",
    "jp": "ヒョウタのポスター"
  },
  {
    "label": "Poster_10561",
    "en": "Mira's poster",
    "jp": "ミラコのポスター"
  },
  {
    "label": "Poster_10562",
    "en": "Pietro's poster",
    "jp": "ジュペッティのポスター"
  },
  {
    "label": "Poster_10563",
    "en": "Aurora's poster",
    "jp": "オーロラのポスター"
  },
  {
    "label": "Poster_10564",
    "en": "Papi's poster",
    "jp": "オカッピのポスター"
  },
  {
    "label": "Poster_10565",
    "en": "Apple's poster",
    "jp": "アップルのポスター"
  },
  {
    "label": "Poster_10566",
    "en": "Rod's poster",
    "jp": "ジャンのポスター"
  },
  {
    "label": "Poster_10567",
    "en": "Static's poster",
    "jp": "スパークのポスター"
  },
  {
    "label": "Poster_10568",
    "en": "Celia's poster",
    "jp": "ティファニーのポスター"
  },
  {
    "label": "Poster_10569",
    "en": "Zucker's poster",
    "jp": "タコヤのポスター"
  },
  {
    "label": "Poster_10570",
    "en": "Cheri's poster",
    "jp": "アセロラのポスター"
  },
  {
    "label": "Poster_10571",
    "en": "Peggy's poster",
    "jp": "ちえりのポスター"
  },
  {
    "label": "Poster_10572",
    "en": "Ribbot's poster",
    "jp": "ガチャのポスター"
  },
  {
    "label": "Poster_10573",
    "en": "Annalise's poster",
    "jp": "シルブプレのポスター"
  },
  {
    "label": "Poster_10574",
    "en": "Sylvia's poster",
    "jp": "シルビアのポスター"
  },
  {
    "label": "Poster_10575",
    "en": "Sally's poster",
    "jp": "ララミーのポスター"
  },
  {
    "label": "Poster_10576",
    "en": "Doc's poster",
    "jp": "トビオのポスター"
  },
  {
    "label": "Poster_10577",
    "en": "Pompom's poster",
    "jp": "のりっぺのポスター"
  },
  {
    "label": "Poster_10578",
    "en": "Tank's poster",
    "jp": "くるぶしのポスター"
  },
  {
    "label": "Poster_10579",
    "en": "Kyle's poster",
    "jp": "リカルドのポスター"
  },
  {
    "label": "Poster_10580",
    "en": "Becky's poster",
    "jp": "アリアのポスター"
  },
  {
    "label": "Poster_10581",
    "en": "Rizzo's poster",
    "jp": "ちょろきちのポスター"
  },
  {
    "label": "Poster_10582",
    "en": "Sydney's poster",
    "jp": "シドニーのポスター"
  },
  {
    "label": "Poster_10583",
    "en": "Barold's poster",
    "jp": "ニッシーのポスター"
  },
  {
    "label": "Poster_10584",
    "en": "Nibbles's poster",
    "jp": "ガリガリのポスター"
  },
  {
    "label": "Poster_10585",
    "en": "Kevin's poster",
    "jp": "イノッチのポスター"
  },
  {
    "label": "Poster_10586",
    "en": "Gloria's poster",
    "jp": "スワンソンのポスター"
  },
  {
    "label": "Poster_10587",
    "en": "Lobo's poster",
    "jp": "ブンジロウのポスター"
  },
  {
    "label": "Poster_10588",
    "en": "Hippeux's poster",
    "jp": "ディビッドのポスター"
  },
  {
    "label": "Poster_10589",
    "en": "Margie's poster",
    "jp": "サリーのポスター"
  },
  {
    "label": "Poster_10590",
    "en": "Al's poster",
    "jp": "たもつのポスター"
  },
  {
    "label": "Poster_10591",
    "en": "Lucky's poster",
    "jp": "ラッキーのポスター"
  },
  {
    "label": "Poster_10592",
    "en": "Rowan's poster",
    "jp": "ゴメスのポスター"
  },
  {
    "label": "Poster_10593",
    "en": "Maelle's poster",
    "jp": "アンヌのポスター"
  },
  {
    "label": "Poster_10594",
    "en": "Bruce's poster",
    "jp": "ブルースのポスター"
  },
  {
    "label": "Poster_10595",
    "en": "O'Hare's poster",
    "jp": "サントスのポスター"
  },
  {
    "label": "Poster_10596",
    "en": "Gayle's poster",
    "jp": "アリゲッティのポスター"
  },
  {
    "label": "Poster_10597",
    "en": "Cranston's poster",
    "jp": "トキオのポスター"
  },
  {
    "label": "Poster_10598",
    "en": "Frobert's poster",
    "jp": "コージィのポスター"
  },
  {
    "label": "Poster_10599",
    "en": "Renée's poster",
    "jp": "おさいのポスター"
  },
  {
    "label": "Poster_10600",
    "en": "Cally's poster",
    "jp": "パセリのポスター"
  },
  {
    "label": "Poster_10601",
    "en": "Simon's poster",
    "jp": "エテキチのポスター"
  },
  {
    "label": "Poster_10602",
    "en": "Iggly's poster",
    "jp": "のりまきのポスター"
  },
  {
    "label": "Poster_10603",
    "en": "Vivian's poster",
    "jp": "ヴァネッサのポスター"
  },
  {
    "label": "Poster_10604",
    "en": "Hopkins's poster",
    "jp": "プースケのポスター"
  },
  {
    "label": "Poster_10605",
    "en": "June's poster",
    "jp": "メイのポスター"
  },
  {
    "label": "Poster_10606",
    "en": "Lopez's poster",
    "jp": "トムソンのポスター"
  },
  {
    "label": "Poster_10607",
    "en": "Paolo's poster",
    "jp": "パオロのポスター"
  },
  {
    "label": "Poster_10608",
    "en": "Hornsby's poster",
    "jp": "みつおのポスター"
  },
  {
    "label": "Poster_10609",
    "en": "Stella's poster",
    "jp": "アクリルのポスター"
  },
  {
    "label": "Poster_10610",
    "en": "Tybalt's poster",
    "jp": "ハリマオのポスター"
  },
  {
    "label": "Poster_10611",
    "en": "Huck's poster",
    "jp": "ストローのポスター"
  },
  {
    "label": "Poster_10612",
    "en": "Sylvana's poster",
    "jp": "もんぺのポスター"
  },
  {
    "label": "Poster_10613",
    "en": "Boris's poster",
    "jp": "ダリーのポスター"
  },
  {
    "label": "Poster_10614",
    "en": "Wade's poster",
    "jp": "カマボコのポスター"
  },
  {
    "label": "Poster_10615",
    "en": "Carrie's poster",
    "jp": "マミィのポスター"
  },
  {
    "label": "Poster_10616",
    "en": "Ketchup's poster",
    "jp": "ケチャップのポスター"
  },
  {
    "label": "Poster_10617",
    "en": "Jambette's poster",
    "jp": "エスメラルダのポスター"
  },
  {
    "label": "Poster_10618",
    "en": "Rex's poster",
    "jp": "サンデーのポスター"
  },
  {
    "label": "Poster_10619",
    "en": "Maddie's poster",
    "jp": "マロンのポスター"
  },
  {
    "label": "Poster_10620",
    "en": "Billy's poster",
    "jp": "アーシンドのポスター"
  },
  {
    "label": "Poster_10621",
    "en": "Boyd's poster",
    "jp": "ボイドのポスター"
  },
  {
    "label": "Poster_10622",
    "en": "Bitty's poster",
    "jp": "エーミーのポスター"
  },
  {
    "label": "Poster_10623",
    "en": "Maggie's poster",
    "jp": "マーガレットのポスター"
  },
  {
    "label": "Poster_10624",
    "en": "Murphy's poster",
    "jp": "のりおのポスター"
  },
  {
    "label": "Poster_10625",
    "en": "Rasher's poster",
    "jp": "グレオのポスター"
  },
  {
    "label": "Poster_10626",
    "en": "Plucky's poster",
    "jp": "パタヤのポスター"
  },
  {
    "label": "Poster_10627",
    "en": "Sandy's poster",
    "jp": "ランのポスター"
  },
  {
    "label": "Poster_10628",
    "en": "Claude's poster",
    "jp": "ビネガーのポスター"
  },
  {
    "label": "Poster_10629",
    "en": "Raddle's poster",
    "jp": "カックンのポスター"
  },
  {
    "label": "Poster_10630",
    "en": "Julia's poster",
    "jp": "ジュリアのポスター"
  },
  {
    "label": "Poster_10631",
    "en": "Louie's poster",
    "jp": "マッスルのポスター"
  },
  {
    "label": "Poster_10632",
    "en": "Bea's poster",
    "jp": "ベーグルのポスター"
  },
  {
    "label": "Poster_10633",
    "en": "Ellie's poster",
    "jp": "エクレアのポスター"
  },
  {
    "label": "Poster_10634",
    "en": "Boots's poster",
    "jp": "ホウサクのポスター"
  },
  {
    "label": "Poster_10635",
    "en": "Tiffany's poster",
    "jp": "バズレーのポスター"
  },
  {
    "label": "Poster_10636",
    "en": "Weber's poster",
    "jp": "アチョットのポスター"
  },
  {
    "label": "Poster_10637",
    "en": "Candi's poster",
    "jp": "かんゆのポスター"
  },
  {
    "label": "Poster_10638",
    "en": "Leopold's poster",
    "jp": "ティーチャーのポスター"
  },
  {
    "label": "Poster_10639",
    "en": "Spike's poster",
    "jp": "スクワットのポスター"
  },
  {
    "label": "Poster_10640",
    "en": "Cashmere's poster",
    "jp": "ラムールのポスター"
  },
  {
    "label": "Poster_10641",
    "en": "Tad's poster",
    "jp": "タンボのポスター"
  },
  {
    "label": "Poster_10642",
    "en": "Norma's poster",
    "jp": "いさこのポスター"
  },
  {
    "label": "Poster_10643",
    "en": "Gonzo's poster",
    "jp": "ゴンゾーのポスター"
  },
  {
    "label": "Poster_10644",
    "en": "Sprocket's poster",
    "jp": "ヘルツのポスター"
  },
  {
    "label": "Poster_10645",
    "en": "Sheldon's poster",
    "jp": "クリスのポスター"
  },
  {
    "label": "Poster_10646",
    "en": "Olive's poster",
    "jp": "ピッコロのポスター"
  },
  {
    "label": "Poster_10647",
    "en": "Dobie's poster",
    "jp": "けんのポスター"
  },
  {
    "label": "Poster_10648",
    "en": "Buzz's poster",
    "jp": "ひでよしのポスター"
  },
  {
    "label": "Poster_10649",
    "en": "Cleo's poster",
    "jp": "アイソトープのポスター"
  },
  {
    "label": "Poster_10650",
    "en": "Ike's poster",
    "jp": "ダイクのポスター"
  },
  {
    "label": "Poster_10651",
    "en": "Tasha's poster",
    "jp": "ナターシャのポスター"
  },
  {
    "label": "Poster_10652",
    "en": "Bluebear's poster",
    "jp": "グルミンのポスター"
  },
  {
    "label": "Poster_10653",
    "en": "Bill's poster",
    "jp": "ピータンのポスター"
  },
  {
    "label": "Poster_10654",
    "en": "Deli's poster",
    "jp": "デリーのポスター"
  },
  {
    "label": "Poster_10655",
    "en": "Alli's poster",
    "jp": "クロコのポスター"
  },
  {
    "label": "Poster_10656",
    "en": "Patty's poster",
    "jp": "カルピのポスター"
  },
  {
    "label": "Poster_10657",
    "en": "Gigi's poster",
    "jp": "リンダのポスター"
  },
  {
    "label": "Poster_10658",
    "en": "Quillson's poster",
    "jp": "タックンのポスター"
  },
  {
    "label": "Poster_10659",
    "en": "Marcie's poster",
    "jp": "マリアのポスター"
  },
  {
    "label": "Poster_10660",
    "en": "Puck's poster",
    "jp": "ホッケーのポスター"
  },
  {
    "label": "Poster_10661",
    "en": "Shari's poster",
    "jp": "シェリーのポスター"
  },
  {
    "label": "Poster_10662",
    "en": "Octavian's poster",
    "jp": "おくたろうのポスター"
  },
  {
    "label": "Poster_10663",
    "en": "Winnie's poster",
    "jp": "マキバスターのポスター"
  },
  {
    "label": "Poster_10664",
    "en": "Knox's poster",
    "jp": "キンカクのポスター"
  },
  {
    "label": "Poster_10665",
    "en": "Sterling's poster",
    "jp": "ギンカクのポスター"
  },
  {
    "label": "Poster_10666",
    "en": "Bonbon's poster",
    "jp": "ミミィのポスター"
  },
  {
    "label": "Poster_10667",
    "en": "Opal's poster",
    "jp": "オパールのポスター"
  },
  {
    "label": "Poster_10668",
    "en": "Poppy's poster",
    "jp": "グミのポスター"
  },
  {
    "label": "Poster_10669",
    "en": "Limberg's poster",
    "jp": "らっきょのポスター"
  },
  {
    "label": "Poster_10670",
    "en": "Deena's poster",
    "jp": "まりものポスター"
  },
  {
    "label": "Poster_10671",
    "en": "Snake's poster",
    "jp": "モモチのポスター"
  },
  {
    "label": "Poster_10672",
    "en": "Bangle's poster",
    "jp": "ルーズのポスター"
  },
  {
    "label": "Poster_10673",
    "en": "Phil's poster",
    "jp": "ケインのポスター"
  },
  {
    "label": "Poster_10674",
    "en": "Samson's poster",
    "jp": "ピースのポスター"
  },
  {
    "label": "Poster_10675",
    "en": "Mint's poster",
    "jp": "ミントのポスター"
  },
  {
    "label": "Poster_10676",
    "en": "Pudge's poster",
    "jp": "きんぞうのポスター"
  },
  {
    "label": "Poster_10677",
    "en": "Midge's poster",
    "jp": "うずまきのポスター"
  },
  {
    "label": "Poster_10678",
    "en": "Gruff's poster",
    "jp": "ビリーのポスター"
  },
  {
    "label": "Poster_10679",
    "en": "Flurry's poster",
    "jp": "ゆきみのポスター"
  },
  {
    "label": "Poster_10680",
    "en": "Clyde's poster",
    "jp": "デースケのポスター"
  },
  {
    "label": "Poster_10681",
    "en": "Bella's poster",
    "jp": "イザベラのポスター"
  },
  {
    "label": "Poster_10682",
    "en": "Biff's poster",
    "jp": "ガブリエルのポスター"
  },
  {
    "label": "Poster_10683",
    "en": "Yuka's poster",
    "jp": "ユーカリのポスター"
  },
  {
    "label": "Poster_10684",
    "en": "Lionel's poster",
    "jp": "ライオネルのポスター"
  },
  {
    "label": "Poster_10685",
    "en": "Flo's poster",
    "jp": "レイラのポスター"
  },
  {
    "label": "Poster_10686",
    "en": "Cobb's poster",
    "jp": "ハカセのポスター"
  },
  {
    "label": "Poster_10687",
    "en": "Amelia's poster",
    "jp": "アンデスのポスター"
  },
  {
    "label": "Poster_10688",
    "en": "Jeremiah's poster",
    "jp": "クワトロのポスター"
  },
  {
    "label": "Poster_10689",
    "en": "Cherry's poster",
    "jp": "ハンナのポスター"
  },
  {
    "label": "Poster_10690",
    "en": "Roscoe's poster",
    "jp": "シュバルツのポスター"
  },
  {
    "label": "Poster_10691",
    "en": "Truffles's poster",
    "jp": "トンコのポスター"
  },
  {
    "label": "Poster_10692",
    "en": "Eugene's poster",
    "jp": "ロッキーのポスター"
  },
  {
    "label": "Poster_10693",
    "en": "Eunice's poster",
    "jp": "モヘアのポスター"
  },
  {
    "label": "Poster_10694",
    "en": "Goose's poster",
    "jp": "ケンタのポスター"
  },
  {
    "label": "Poster_10695",
    "en": "Benjamin's poster",
    "jp": "ハチのポスター"
  },
  {
    "label": "Poster_10741",
    "en": "Villager's poster",
    "jp": "むらびとのポスター"
  },
  {
    "label": "Poster_10772",
    "en": "Reese's poster",
    "jp": "リサのポスター"
  },
  {
    "label": "Poster_10773",
    "en": "Lottie's poster",
    "jp": "タクミのポスター"
  },
  {
    "label": "Poster_10774",
    "en": "Olivia's poster",
    "jp": "オリビアのポスター"
  },
  {
    "label": "Poster_10775",
    "en": "Teddy's poster",
    "jp": "たいへいたのポスター"
  },
  {
    "label": "Poster_10776",
    "en": "DJ KK's poster",
    "jp": "DJ K.Kのポスター"
  },
  {
    "label": "Poster_10777",
    "en": "Sable's poster",
    "jp": "あさみのポスター"
  },
  {
    "label": "Poster_10778",
    "en": "Charlise's poster",
    "jp": "チャーミーのポスター"
  },
  {
    "label": "Poster_10779",
    "en": "Kid Cat's poster",
    "jp": "１ごうのポスター"
  },
  {
    "label": "Poster_10780",
    "en": "Pete's poster",
    "jp": "ぺりおのポスター"
  },
  {
    "label": "Poster_10781",
    "en": "Franklin's poster",
    "jp": "フランクリンのポスター"
  },
  {
    "label": "Poster_10782",
    "en": "Anchovy's poster",
    "jp": "アンチョビのポスター"
  },
  {
    "label": "Poster_10783",
    "en": "Paula's poster",
    "jp": "レイチェルのポスター"
  },
  {
    "label": "Poster_10784",
    "en": "Mitzi's poster",
    "jp": "マールのポスター"
  },
  {
    "label": "Poster_10785",
    "en": "Pascal's poster",
    "jp": "ラコスケのポスター"
  },
  {
    "label": "Poster_10786",
    "en": "Tangy's poster",
    "jp": "ヒャクパーのポスター"
  },
  {
    "label": "Poster_10787",
    "en": "Harriet's poster",
    "jp": "カットリーヌのポスター"
  },
  {
    "label": "Poster_10788",
    "en": "Beardo's poster",
    "jp": "ベアードのポスター"
  },
  {
    "label": "Poster_10789",
    "en": "Merry's poster",
    "jp": "さっちのポスター"
  },
  {
    "label": "Poster_10790",
    "en": "Klaus's poster",
    "jp": "クマロスのポスター"
  },
  {
    "label": "Poster_10791",
    "en": "Moe's poster",
    "jp": "ジンペイのポスター"
  },
  {
    "label": "Poster_10792",
    "en": "Tortimer's poster",
    "jp": "コトブキのポスター"
  },
  {
    "label": "Poster_10793",
    "en": "Sparro's poster",
    "jp": "ちゅんのすけのポスター"
  },
  {
    "label": "Poster_10794",
    "en": "Lyle's poster",
    "jp": "ホンマさんのポスター"
  },
  {
    "label": "Poster_10795",
    "en": "Antonio's poster",
    "jp": "マコトのポスター"
  },
  {
    "label": "Poster_10796",
    "en": "Phineas's poster",
    "jp": "パロンチーノのポスター"
  },
  {
    "label": "Poster_10797",
    "en": "Bob's poster",
    "jp": "ニコバンのポスター"
  },
  {
    "label": "Poster_10798",
    "en": "Pinky's poster",
    "jp": "タンタンのポスター"
  },
  {
    "label": "Poster_10799",
    "en": "Curt's poster",
    "jp": "ガンテツのポスター"
  },
  {
    "label": "Poster_10800",
    "en": "Anabelle's poster",
    "jp": "あるみのポスター"
  },
  {
    "label": "Poster_10801",
    "en": "Olaf's poster",
    "jp": "アントニオのポスター"
  },
  {
    "label": "Poster_10802",
    "en": "Purrl's poster",
    "jp": "たまのポスター"
  },
  {
    "label": "Poster_10803",
    "en": "Chow's poster",
    "jp": "チャウヤンのポスター"
  },
  {
    "label": "Poster_10804",
    "en": "Jacques's poster",
    "jp": "ジョッキーのポスター"
  },
  {
    "label": "Poster_10805",
    "en": "Rosie's poster",
    "jp": "ブーケのポスター"
  },
  {
    "label": "Poster_10806",
    "en": "Grizzly's poster",
    "jp": "ムーのポスター"
  },
  {
    "label": "Poster_10807",
    "en": "Angus's poster",
    "jp": "セルバンテスのポスター"
  },
  {
    "label": "Poster_10808",
    "en": "Twiggy's poster",
    "jp": "ピーチクのポスター"
  },
  {
    "label": "Poster_10809",
    "en": "Robin's poster",
    "jp": "パーチクのポスター"
  },
  {
    "label": "Poster_10810",
    "en": "Piper's poster",
    "jp": "レイコのポスター"
  },
  {
    "label": "Poster_10811",
    "en": "Stu's poster",
    "jp": "モーリスのポスター"
  },
  {
    "label": "Poster_10812",
    "en": "Ursala's poster",
    "jp": "ネーヤのポスター"
  },
  {
    "label": "Poster_10813",
    "en": "Jacob's poster",
    "jp": "ジャコテンのポスター"
  },
  {
    "label": "Poster_10814",
    "en": "Admiral's poster",
    "jp": "イッテツのポスター"
  },
  {
    "label": "Poster_10815",
    "en": "Snooty's poster",
    "jp": "こまちのポスター"
  },
  {
    "label": "Poster_10816",
    "en": "Kiki's poster",
    "jp": "キャビアのポスター"
  },
  {
    "label": "Poster_10817",
    "en": "Kabuki's poster",
    "jp": "かぶきちのポスター"
  },
  {
    "label": "Poster_10818",
    "en": "Jitters's poster",
    "jp": "ジーニョのポスター"
  },
  {
    "label": "Poster_10819",
    "en": "Punchy's poster",
    "jp": "ビンタのポスター"
  },
  {
    "label": "Poster_10820",
    "en": "Monique's poster",
    "jp": "ジェーンのポスター"
  },
  {
    "label": "Poster_10821",
    "en": "Nate's poster",
    "jp": "バッカスのポスター"
  },
  {
    "label": "Poster_10822",
    "en": "Tutu's poster",
    "jp": "れんにゅうのポスター"
  },
  {
    "label": "Poster_10823",
    "en": "T-Bone's poster",
    "jp": "ボルシチのポスター"
  },
  {
    "label": "Poster_10824",
    "en": "Annalisa's poster",
    "jp": "みやびのポスター"
  },
  {
    "label": "Poster_10857",
    "en": "Reneigh's poster",
    "jp": "リアーナのポスター"
  },
  {
    "label": "Poster_10858",
    "en": "Judy's poster",
    "jp": "みすずのポスター"
  },
  {
    "label": "Poster_10859",
    "en": "Audie's poster",
    "jp": "モニカのポスター"
  },
  {
    "label": "Poster_10860",
    "en": "Megan's poster",
    "jp": "キャンディのポスター"
  },
  {
    "label": "Poster_10861",
    "en": "Raymond's poster",
    "jp": "ジャックのポスター"
  },
  {
    "label": "Poster_10862",
    "en": "Cyd's poster",
    "jp": "パンクスのポスター"
  },
  {
    "label": "Poster_10863",
    "en": "Sherb's poster",
    "jp": "レムのポスター"
  },
  {
    "label": "Poster_10864",
    "en": "Dom's poster",
    "jp": "ちゃちゃまるのポスター"
  },
  {
    "label": "Poster_11121",
    "en": "Hello Kitty poster",
    "jp": "ハローキティなポスター"
  },
  {
    "label": "Poster_11122",
    "en": "Pompompurin poster",
    "jp": "ポムポムプリンなポスター"
  },
  {
    "label": "Poster_11123",
    "en": "Kiki & Lala poster",
    "jp": "キキ&ララなポスター"
  },
  {
    "label": "Poster_11124",
    "en": "Cinnamoroll poster",
    "jp": "シナモロールなポスター"
  },
  {
    "label": "Poster_11125",
    "en": "My Melody poster",
    "jp": "マイメロディなポスター"
  },
  {
    "label": "Poster_11126",
    "en": "Kerokerokeroppi poster",
    "jp": "けろけろけろっぴなポスター"
  },
  {
    "label": "Poster_13033",
    "en": "Rilla's poster",
    "jp": "リラのポスター"
  },
  {
    "label": "Poster_13034",
    "en": "Marty's poster",
    "jp": "マーティーのポスター"
  },
  {
    "label": "Poster_13035",
    "en": "Étoile's poster",
    "jp": "エトワールのポスター"
  },
  {
    "label": "Poster_13036",
    "en": "Chai's poster",
    "jp": "フィーカのポスター"
  },
  {
    "label": "Poster_13037",
    "en": "Chelsea's poster",
    "jp": "チェルシーのポスター"
  },
  {
    "label": "Poster_13038",
    "en": "Toby's poster",
    "jp": "トビーのポスター"
  }
];

itemNames.fencing = [
  {
    "label": "Fence_03080",
    "en": "brick fence",
    "jp": "レンガのカベ"
  },
  {
    "label": "Fence_03080_pl",
    "en": "brick fencing",
    "jp": "レンガのカベ"
  },
  {
    "label": "Fence_03402",
    "en": "vertical-board fence",
    "jp": "たていたのさく"
  },
  {
    "label": "Fence_03402_pl",
    "en": "vertical-board fencing",
    "jp": "たていたのさく"
  },
  {
    "label": "Fence_03403",
    "en": "bamboo lattice fence",
    "jp": "たけがき"
  },
  {
    "label": "Fence_03403_pl",
    "en": "bamboo lattice fencing",
    "jp": "たけがき"
  },
  {
    "label": "Fence_04349",
    "en": "corral fence",
    "jp": "よこいたのさく"
  },
  {
    "label": "Fence_04349_pl",
    "en": "corral fencing",
    "jp": "よこいたのさく"
  },
  {
    "label": "Fence_04350",
    "en": "country fence",
    "jp": "まるたのさく"
  },
  {
    "label": "Fence_04350_pl",
    "en": "country fencing",
    "jp": "まるたのさく"
  },
  {
    "label": "Fence_04352",
    "en": "rope fence",
    "jp": "ペグとロープ"
  },
  {
    "label": "Fence_04352_pl",
    "en": "rope fencing",
    "jp": "ペグとロープ"
  },
  {
    "label": "Fence_04354",
    "en": "imperial fence",
    "jp": "オリエンタルなさく"
  },
  {
    "label": "Fence_04354_pl",
    "en": "imperial fencing",
    "jp": "オリエンタルなさく"
  },
  {
    "label": "Fence_04356",
    "en": "straw fence",
    "jp": "わらぼしのさく"
  },
  {
    "label": "Fence_04356_pl",
    "en": "straw fencing",
    "jp": "わらぼしのさく"
  },
  {
    "label": "Fence_04357",
    "en": "iron fence",
    "jp": "てつのさく"
  },
  {
    "label": "Fence_04357_pl",
    "en": "iron fencing",
    "jp": "てつのさく"
  },
  {
    "label": "Fence_04358",
    "en": "spiky fence",
    "jp": "トゲトゲのさく"
  },
  {
    "label": "Fence_04358_pl",
    "en": "spiky fencing",
    "jp": "トゲトゲのさく"
  },
  {
    "label": "Fence_05206",
    "en": "iron-and-stone fence",
    "jp": "ようふうのさく"
  },
  {
    "label": "Fence_05206_pl",
    "en": "iron-and-stone fencing",
    "jp": "ようふうのさく"
  },
  {
    "label": "Fence_05207",
    "en": "zen fence",
    "jp": "わふうのさく"
  },
  {
    "label": "Fence_05207_pl",
    "en": "zen fencing",
    "jp": "わふうのさく"
  },
  {
    "label": "Fence_05212",
    "en": "stone fence",
    "jp": "いしかべ"
  },
  {
    "label": "Fence_05212_pl",
    "en": "stone fencing",
    "jp": "いしかべ"
  },
  {
    "label": "Fence_05213",
    "en": "barbed-wire fence",
    "jp": "ゆうしてっせん"
  },
  {
    "label": "Fence_05213_pl",
    "en": "barbed-wire fencing",
    "jp": "ゆうしてっせん"
  },
  {
    "label": "Fence_11711",
    "en": "simple wooden fence",
    "jp": "そぼくなもくせいのさく"
  },
  {
    "label": "Fence_11711_pl",
    "en": "simple wooden fencing",
    "jp": "そぼくなもくせいのさく"
  },
  {
    "label": "Fence_11712",
    "en": "lattice fence",
    "jp": "ラティス"
  },
  {
    "label": "Fence_11712_pl",
    "en": "lattice fencing",
    "jp": "ラティス"
  },
  {
    "label": "Fence_12630",
    "en": "Bunny Day fence",
    "jp": "イースターなさく"
  },
  {
    "label": "Fence_12630_pl",
    "en": "Bunny Day fencing",
    "jp": "イースターなさく"
  },
  {
    "label": "Fence_12758",
    "en": "hedge",
    "jp": "いけがき"
  },
  {
    "label": "Fence_12758_pl",
    "en": "hedges",
    "jp": "いけがき"
  },
  {
    "label": "Fence_12894",
    "en": "wedding fence",
    "jp": "ウェディングなさく"
  },
  {
    "label": "Fence_12894_pl",
    "en": "wedding fencing",
    "jp": "ウェディングなさく"
  },
  {
    "label": "Fence_13275",
    "en": "spooky fence",
    "jp": "ハロウィンなさく"
  },
  {
    "label": "Fence_13275_pl",
    "en": "spooky fencing",
    "jp": "ハロウィンなさく"
  },
  {
    "label": "Fence_14278",
    "en": "mermaid fence",
    "jp": "マーメイドなさく"
  },
  {
    "label": "Fence_14278_pl",
    "en": "mermaid fencing",
    "jp": "マーメイドなさく"
  }
];

itemNames.music = [
  {
    "label": "Music_02405",
    "en": "K.K. Chorale",
    "jp": "けけさんびか"
  },
  {
    "label": "Music_02406",
    "en": "K.K. March",
    "jp": "けけマーチ"
  },
  {
    "label": "Music_02407",
    "en": "K.K. Waltz",
    "jp": "けけワルツ"
  },
  {
    "label": "Music_02408",
    "en": "K.K. Swing",
    "jp": "けけスウィング"
  },
  {
    "label": "Music_02409",
    "en": "K.K. Jazz",
    "jp": "けけジャズ"
  },
  {
    "label": "Music_02410",
    "en": "K.K. Fusion",
    "jp": "けけフュージョン"
  },
  {
    "label": "Music_02411",
    "en": "K.K. Étude",
    "jp": "けけのエチュード"
  },
  {
    "label": "Music_02412",
    "en": "K.K. Lullaby",
    "jp": "けけララバイ"
  },
  {
    "label": "Music_02413",
    "en": "K.K. Aria",
    "jp": "けけマリア"
  },
  {
    "label": "Music_02414",
    "en": "K.K. Samba",
    "jp": "けけサンバ"
  },
  {
    "label": "Music_02415",
    "en": "K.K. Bossa",
    "jp": "けけボッサ"
  },
  {
    "label": "Music_02416",
    "en": "K.K. Calypso",
    "jp": "けけカリプソ"
  },
  {
    "label": "Music_02417",
    "en": "K.K. Salsa",
    "jp": "けけサルサ"
  },
  {
    "label": "Music_02418",
    "en": "K.K. Mambo",
    "jp": "けけマンボ"
  },
  {
    "label": "Music_02419",
    "en": "K.K. Reggae",
    "jp": "けけレゲエ"
  },
  {
    "label": "Music_02420",
    "en": "K.K. Ska",
    "jp": "けけスカ"
  },
  {
    "label": "Music_02421",
    "en": "K.K. Tango",
    "jp": "けけタンゴ"
  },
  {
    "label": "Music_02422",
    "en": "K.K. Faire",
    "jp": "ハイサイけけ"
  },
  {
    "label": "Music_02423",
    "en": "Aloha K.K.",
    "jp": "アロハけけ"
  },
  {
    "label": "Music_02424",
    "en": "Lucky K.K.",
    "jp": "アイリッシュそんぐ"
  },
  {
    "label": "Music_02425",
    "en": "K.K. Condor",
    "jp": "ペルーのうた"
  },
  {
    "label": "Music_02426",
    "en": "K.K. Steppe",
    "jp": "コサックそんぐ"
  },
  {
    "label": "Music_02427",
    "en": "Imperial K.K.",
    "jp": "けけチャイナ"
  },
  {
    "label": "Music_02428",
    "en": "K.K. Casbah",
    "jp": "トルコそんぐ"
  },
  {
    "label": "Music_02429",
    "en": "K.K. Safari",
    "jp": "けけアフロ"
  },
  {
    "label": "Music_02430",
    "en": "K.K. Folk",
    "jp": "けけみんよう"
  },
  {
    "label": "Music_02431",
    "en": "K.K. Rock",
    "jp": "けけロック"
  },
  {
    "label": "Music_02432",
    "en": "Rockin' K.K.",
    "jp": "けけのロケンロール"
  },
  {
    "label": "Music_02433",
    "en": "K.K. Ragtime",
    "jp": "ラグタイム"
  },
  {
    "label": "Music_02434",
    "en": "K.K. Gumbo",
    "jp": "ニューオリンズそんぐ"
  },
  {
    "label": "Music_02435",
    "en": "The K. Funk",
    "jp": "けけファンク"
  },
  {
    "label": "Music_02436",
    "en": "K.K. Blues",
    "jp": "けけブルース"
  },
  {
    "label": "Music_02437",
    "en": "Soulful K.K.",
    "jp": "けけゴスペル"
  },
  {
    "label": "Music_02438",
    "en": "K.K. Soul",
    "jp": "けけソウル"
  },
  {
    "label": "Music_02439",
    "en": "K.K. Cruisin'",
    "jp": "アーバンけけ"
  },
  {
    "label": "Music_02440",
    "en": "K.K. Love Song",
    "jp": "けけラヴソング"
  },
  {
    "label": "Music_02441",
    "en": "K.K. D&B",
    "jp": "ドラムンベース"
  },
  {
    "label": "Music_02442",
    "en": "K.K. Technopop",
    "jp": "テクノビート"
  },
  {
    "label": "Music_02443",
    "en": "DJ K.K.",
    "jp": "ユーロビート"
  },
  {
    "label": "Music_02444",
    "en": "Only Me",
    "jp": "オンリーミー"
  },
  {
    "label": "Music_02445",
    "en": "K.K. Country",
    "jp": "けけカントリー"
  },
  {
    "label": "Music_02446",
    "en": "Surfin' K.K.",
    "jp": "エレキそんぐ"
  },
  {
    "label": "Music_02447",
    "en": "K.K. Ballad",
    "jp": "けけバラッド"
  },
  {
    "label": "Music_02448",
    "en": "Comrade K.K.",
    "jp": "しょうわけけかよう"
  },
  {
    "label": "Music_02449",
    "en": "K.K. Lament",
    "jp": "けけえんか"
  },
  {
    "label": "Music_02450",
    "en": "Go K.K. Rider",
    "jp": "ゆけ!けけライダー"
  },
  {
    "label": "Music_02451",
    "en": "K.K. Dirge",
    "jp": "こわいうた"
  },
  {
    "label": "Music_02452",
    "en": "K.K. Western",
    "jp": "けけウェスタン"
  },
  {
    "label": "Music_02453",
    "en": "Mr. K.K.",
    "jp": "けけせんせい"
  },
  {
    "label": "Music_02454",
    "en": "Café K.K.",
    "jp": "けけパリ"
  },
  {
    "label": "Music_02455",
    "en": "K.K. Parade",
    "jp": "けけパレード"
  },
  {
    "label": "Music_02456",
    "en": "K.K. Mariachi",
    "jp": "セニョールけけ"
  },
  {
    "label": "Music_02457",
    "en": "K.K. Song",
    "jp": "けけソング"
  },
  {
    "label": "Music_02458",
    "en": "I Love You",
    "jp": "だいすき"
  },
  {
    "label": "Music_02459",
    "en": "Two Days Ago",
    "jp": "おととい"
  },
  {
    "label": "Music_02460",
    "en": "My Place",
    "jp": "ぼくのばしょ"
  },
  {
    "label": "Music_02461",
    "en": "Forest Life",
    "jp": "もりのせいかつ"
  },
  {
    "label": "Music_02462",
    "en": "To the Edge",
    "jp": "ナミナミ"
  },
  {
    "label": "Music_02463",
    "en": "Pondering",
    "jp": "かんがえちゅう"
  },
  {
    "label": "Music_02464",
    "en": "K.K. Dixie",
    "jp": "けけディキシー"
  },
  {
    "label": "Music_02465",
    "en": "K.K. Marathon",
    "jp": "けけガムラン"
  },
  {
    "label": "Music_02466",
    "en": "King K.K.",
    "jp": "けけだいみょう"
  },
  {
    "label": "Music_02467",
    "en": "Mountain Song",
    "jp": "アルペンそんぐ"
  },
  {
    "label": "Music_02468",
    "en": "Marine Song 2001",
    "jp": "ふなうた2001"
  },
  {
    "label": "Music_02469",
    "en": "Neapolitan",
    "jp": "ナポリタン"
  },
  {
    "label": "Music_02470",
    "en": "Steep Hill",
    "jp": "にだんざか"
  },
  {
    "label": "Music_02471",
    "en": "K.K. Rockabilly",
    "jp": "けけビリー"
  },
  {
    "label": "Music_02472",
    "en": "Agent K.K.",
    "jp": "けけけいじ"
  },
  {
    "label": "Music_02473",
    "en": "K.K. Rally",
    "jp": "けけおんど"
  },
  {
    "label": "Music_02474",
    "en": "K.K. Metal",
    "jp": "けけメタル"
  },
  {
    "label": "Music_02475",
    "en": "Stale Cupcakes",
    "jp": "ブルーおにぎり"
  },
  {
    "label": "Music_02476",
    "en": "Spring Blossoms",
    "jp": "はるのこもれび"
  },
  {
    "label": "Music_02477",
    "en": "Wandering",
    "jp": "ほうろう"
  },
  {
    "label": "Music_02478",
    "en": "K.K. House",
    "jp": "けけハウス"
  },
  {
    "label": "Music_02479",
    "en": "K.K. Sonata",
    "jp": "けけのソナタ"
  },
  {
    "label": "Music_02480",
    "en": "Hypno K.K.",
    "jp": "うたたねのゆめ"
  },
  {
    "label": "Music_02481",
    "en": "K.K. Stroll",
    "jp": "おさんぽ"
  },
  {
    "label": "Music_02482",
    "en": "K.K. Island",
    "jp": "どうぶつのしま"
  },
  {
    "label": "Music_02483",
    "en": "Space K.K.",
    "jp": "ミニマルおんがく"
  },
  {
    "label": "Music_02484",
    "en": "K.K. Adventure",
    "jp": "けけハリウッド"
  },
  {
    "label": "Music_02485",
    "en": "K.K. Oasis",
    "jp": "けけマハラジャ"
  },
  {
    "label": "Music_02486",
    "en": "K.K. Bazaar",
    "jp": "けけロマ"
  },
  {
    "label": "Music_02487",
    "en": "K.K. Milonga",
    "jp": "けけのミロンガ"
  },
  {
    "label": "Music_02488",
    "en": "K.K. Groove",
    "jp": "けけグルーヴ"
  },
  {
    "label": "Music_02489",
    "en": "K.K. Jongara",
    "jp": "けけじょんがら"
  },
  {
    "label": "Music_02490",
    "en": "K.K. Flamenco",
    "jp": "けけフラメンコ"
  },
  {
    "label": "Music_02491",
    "en": "K.K. Moody",
    "jp": "けけボレロ"
  },
  {
    "label": "Music_02492",
    "en": "Bubblegum K.K.",
    "jp": "けけアイドル"
  },
  {
    "label": "Music_02493",
    "en": "K.K. Synth",
    "jp": "けけトロニカ"
  },
  {
    "label": "Music_02494",
    "en": "K.K. Disco",
    "jp": "けけディスコ"
  },
  {
    "label": "Music_02495",
    "en": "K.K. Birthday",
    "jp": "きみのたんじょうび"
  },
  {
    "label": "Music_04312",
    "en": "Animal City",
    "jp": "どうぶつのまち"
  },
  {
    "label": "Music_04313",
    "en": "Farewell",
    "jp": "さよなら"
  },
  {
    "label": "Music_04314",
    "en": "Drivin'",
    "jp": "ドライブ"
  },
  {
    "label": "Music_04318",
    "en": "Welcome Horizons",
    "jp": "みんなあつまれ"
  },
  {
    "label": "MusicMiss_04315",
    "en": "はずれ01",
    "jp": "はずれ01"
  },
  {
    "label": "MusicMiss_04316",
    "en": "はずれ02",
    "jp": "はずれ02"
  },
  {
    "label": "MusicMiss_04317",
    "en": "はずれ03",
    "jp": "はずれ03"
  }
];

itemNames.materials = [
  {
    "label": "AutumnLeaf_07374",
    "en": "maple leaf",
    "jp": "もみじのはっぱ"
  },
  {
    "label": "AutumnLeaf_07374_pl",
    "en": "maple leaves",
    "jp": "もみじのはっぱ"
  },
  {
    "label": "CraftMaterial_02500",
    "en": "tree branch",
    "jp": "きのえだ"
  },
  {
    "label": "CraftMaterial_02500_pl",
    "en": "tree branches",
    "jp": "きのえだ"
  },
  {
    "label": "CraftMaterial_02501",
    "en": "bamboo piece",
    "jp": "バンブー"
  },
  {
    "label": "CraftMaterial_02501_pl",
    "en": "bamboo pieces",
    "jp": "バンブー"
  },
  {
    "label": "CraftMaterial_02767",
    "en": "softwood",
    "jp": "やわらかいもくざい"
  },
  {
    "label": "CraftMaterial_02767_pl",
    "en": "softwood",
    "jp": "やわらかいもくざい"
  },
  {
    "label": "CraftMaterial_02768",
    "en": "wood",
    "jp": "もくざい"
  },
  {
    "label": "CraftMaterial_02768_pl",
    "en": "wood",
    "jp": "もくざい"
  },
  {
    "label": "CraftMaterial_02769",
    "en": "hardwood",
    "jp": "かたいもくざい"
  },
  {
    "label": "CraftMaterial_02769_pl",
    "en": "hardwood",
    "jp": "かたいもくざい"
  },
  {
    "label": "CraftMaterial_05727",
    "en": "acorn",
    "jp": "どんぐり"
  },
  {
    "label": "CraftMaterial_05727_pl",
    "en": "acorns",
    "jp": "どんぐり"
  },
  {
    "label": "CraftMaterial_05728",
    "en": "pine cone",
    "jp": "まつぼっくり"
  },
  {
    "label": "CraftMaterial_05728_pl",
    "en": "pine cones",
    "jp": "まつぼっくり"
  },
  {
    "label": "CraftMaterial_05729",
    "en": "young spring bamboo",
    "jp": "はるのわかたけ"
  },
  {
    "label": "CraftMaterial_05729_pl",
    "en": "young spring bamboo",
    "jp": "はるのわかたけ"
  },
  {
    "label": "CraftMaterial_05730",
    "en": "red ornament",
    "jp": "あかいオーナメント"
  },
  {
    "label": "CraftMaterial_05730_pl",
    "en": "red ornaments",
    "jp": "あかいオーナメント"
  },
  {
    "label": "CraftMaterial_05731",
    "en": "blue ornament",
    "jp": "あおいオーナメント"
  },
  {
    "label": "CraftMaterial_05731_pl",
    "en": "blue ornaments",
    "jp": "あおいオーナメント"
  },
  {
    "label": "CraftMaterial_05732",
    "en": "gold ornament",
    "jp": "きんのオーナメント"
  },
  {
    "label": "CraftMaterial_05732_pl",
    "en": "gold ornaments",
    "jp": "きんのオーナメント"
  },
  {
    "label": "CraftMaterial_12968",
    "en": "pearl",
    "jp": "しんじゅ"
  },
  {
    "label": "CraftMaterial_12968_pl",
    "en": "pearls",
    "jp": "しんじゅ"
  },
  {
    "label": "CraftPhoneCase_08760",
    "en": "customizable phone case kit",
    "jp": "スマホケースリメイクキット"
  },
  {
    "label": "CraftPhoneCase_13439",
    "en": "Pocket Camp phone case",
    "jp": "ポケットキャンプのスマホケース"
  },
  {
    "label": "CraftRemake_02513",
    "en": "customization kit",
    "jp": "リメイクキット"
  },
  {
    "label": "CraftRemake_02513_pl",
    "en": "customization kits",
    "jp": "リメイクキット"
  },
  {
    "label": "Ore_02502",
    "en": "stone",
    "jp": "いし"
  },
  {
    "label": "Ore_02502_pl",
    "en": "stones",
    "jp": "いし"
  },
  {
    "label": "Ore_02505",
    "en": "gold nugget",
    "jp": "きんこうせき"
  },
  {
    "label": "Ore_02505_pl",
    "en": "gold nuggets",
    "jp": "きんこうせき"
  },
  {
    "label": "Ore_02511",
    "en": "iron nugget",
    "jp": "てっこうせき"
  },
  {
    "label": "Ore_02511_pl",
    "en": "iron nuggets",
    "jp": "てっこうせき"
  },
  {
    "label": "Ore_03090",
    "en": "clay",
    "jp": "ねんど"
  },
  {
    "label": "Ore_03090_pl",
    "en": "clay",
    "jp": "ねんど"
  },
  {
    "label": "Sakurapetal_05859",
    "en": "cherry-blossom petal",
    "jp": "さくらのはなびら"
  },
  {
    "label": "Sakurapetal_05859_pl",
    "en": "cherry-blossom petals",
    "jp": "さくらのはなびら"
  },
  {
    "label": "SnowCrystal_03539",
    "en": "snowflake",
    "jp": "ゆきのけっしょう"
  },
  {
    "label": "SnowCrystal_03539_pl",
    "en": "snowflakes",
    "jp": "ゆきのけっしょう"
  },
  {
    "label": "SnowCrystal_03540",
    "en": "large snowflake",
    "jp": "ゆきのだいけっしょう"
  },
  {
    "label": "SnowCrystal_03540_pl",
    "en": "large snowflakes",
    "jp": "ゆきのだいけっしょう"
  },
  {
    "label": "StarPiece_05983",
    "en": "star fragment",
    "jp": "ほしのかけら"
  },
  {
    "label": "StarPiece_05983_pl",
    "en": "star fragments",
    "jp": "ほしのかけら"
  },
  {
    "label": "StarPiece_05984",
    "en": "large star fragment",
    "jp": "おおきなほしのかけら"
  },
  {
    "label": "StarPiece_05984_pl",
    "en": "large star fragments",
    "jp": "おおきなほしのかけら"
  },
  {
    "label": "StarPiece_05985",
    "en": "Capricorn fragment",
    "jp": "やぎざのかけら"
  },
  {
    "label": "StarPiece_05985_pl",
    "en": "Capricorn fragments",
    "jp": "やぎざのかけら"
  },
  {
    "label": "StarPiece_05986",
    "en": "Aquarius fragment",
    "jp": "みずがめざのかけら"
  },
  {
    "label": "StarPiece_05986_pl",
    "en": "Aquarius fragments",
    "jp": "みずがめざのかけら"
  },
  {
    "label": "StarPiece_05987",
    "en": "Pisces fragment",
    "jp": "うおざのかけら"
  },
  {
    "label": "StarPiece_05987_pl",
    "en": "Pisces fragments",
    "jp": "うおざのかけら"
  },
  {
    "label": "StarPiece_05988",
    "en": "Aries fragment",
    "jp": "おひつじざのかけら"
  },
  {
    "label": "StarPiece_05988_pl",
    "en": "Aries fragments",
    "jp": "おひつじざのかけら"
  },
  {
    "label": "StarPiece_05989",
    "en": "Taurus fragment",
    "jp": "おうしざのかけら"
  },
  {
    "label": "StarPiece_05989_pl",
    "en": "Taurus fragments",
    "jp": "おうしざのかけら"
  },
  {
    "label": "StarPiece_05990",
    "en": "Gemini fragment",
    "jp": "ふたござのかけら"
  },
  {
    "label": "StarPiece_05990_pl",
    "en": "Gemini fragments",
    "jp": "ふたござのかけら"
  },
  {
    "label": "StarPiece_05991",
    "en": "Cancer fragment",
    "jp": "かにざのかけら"
  },
  {
    "label": "StarPiece_05991_pl",
    "en": "Cancer fragments",
    "jp": "かにざのかけら"
  },
  {
    "label": "StarPiece_05992",
    "en": "Leo fragment",
    "jp": "ししざのかけら"
  },
  {
    "label": "StarPiece_05992_pl",
    "en": "Leo fragments",
    "jp": "ししざのかけら"
  },
  {
    "label": "StarPiece_05993",
    "en": "Virgo fragment",
    "jp": "おとめざのかけら"
  },
  {
    "label": "StarPiece_05993_pl",
    "en": "Virgo fragments",
    "jp": "おとめざのかけら"
  },
  {
    "label": "StarPiece_05994",
    "en": "Libra fragment",
    "jp": "てんびんざのかけら"
  },
  {
    "label": "StarPiece_05994_pl",
    "en": "Libra fragments",
    "jp": "てんびんざのかけら"
  },
  {
    "label": "StarPiece_05995",
    "en": "Scorpius fragment",
    "jp": "さそりざのかけら"
  },
  {
    "label": "StarPiece_05995_pl",
    "en": "Scorpius fragments",
    "jp": "さそりざのかけら"
  },
  {
    "label": "StarPiece_05996",
    "en": "Sagittarius fragment",
    "jp": "いてざのかけら"
  },
  {
    "label": "StarPiece_05996_pl",
    "en": "Sagittarius fragments",
    "jp": "いてざのかけら"
  }
];

itemNames.recipes = [];

itemNames.etc = [
  {
    "label": "Balloon_07869",
    "en": "blue balloon",
    "jp": "あおいふうせん"
  },
  {
    "label": "Balloon_13123",
    "en": "red balloon",
    "jp": "あかいふうせん"
  },
  {
    "label": "Balloon_13124",
    "en": "yellow balloon",
    "jp": "きいろのふうせん"
  },
  {
    "label": "Balloon_13125",
    "en": "green balloon",
    "jp": "みどりのふうせん"
  },
  {
    "label": "Balloon_13126",
    "en": "pink balloon",
    "jp": "ピンクのふうせん"
  },
  {
    "label": "BigbagPresent_13836",
    "en": "magic bag",
    "jp": "プレゼントぶくろ"
  },
  {
    "label": "BlowBubble_04386",
    "en": "bubble blower",
    "jp": "シャボンだま"
  },
  {
    "label": "BlowBubble_04386_pl",
    "en": "bubble blowers",
    "jp": "シャボンだま"
  },
  {
    "label": "DummyCardboard_04645",
    "en": "delivery",
    "jp": "おとどけもの"
  },
  {
    "label": "DummyDIYRecipe_09046",
    "en": "Vaulting Pole Recipe",
    "jp": "たかとびぼうのDIYレシピ"
  },
  {
    "label": "DummyDIYRecipe_09047",
    "en": "Flimsy Shovel Recipe",
    "jp": "ショボいスコップのDIYレシピ"
  },
  {
    "label": "DummyDIYRecipe_09048",
    "en": "Flimsy Watering Can Recipe",
    "jp": "ショボいジョウロのDIYレシピ"
  },
  {
    "label": "DummyDIYRecipe_10309",
    "en": "Slingshot Recipe",
    "jp": "パチンコのDIYレシピ"
  },
  {
    "label": "DummyDIYRecipe_12294",
    "en": "Flimsy Axe Recipe",
    "jp": "ショボいオノのDIYレシピ"
  },
  {
    "label": "DummyDIYRecipe_12327",
    "en": "Ladder Recipe",
    "jp": "はしごのDIYレシピ"
  },
  {
    "label": "DummyHowtoBook_09049",
    "en": "Top 8 Pop Hairstyles",
    "jp": "ポップ！ヘアアレンジBEST8"
  },
  {
    "label": "DummyHowtoBook_09050",
    "en": "Top 8 Cool Hairstyles",
    "jp": "クール！ヘアアレンジBEST8"
  },
  {
    "label": "DummyHowtoBook_09051",
    "en": "Top 8 Stylish Hair Colors",
    "jp": "おしゃれ！ヘアカラーBEST8"
  },
  {
    "label": "DummyHowtoBook_09052",
    "en": "Pocket Organization Guide",
    "jp": "ポケットせいとんテクニック"
  },
  {
    "label": "DummyHowtoBook_09221",
    "en": "Pretty Good Tools Recipes",
    "jp": "フツーにつかえる！どうぐレシピ"
  },
  {
    "label": "DummyHowtoBook_09616",
    "en": "Tool Ring: It's Essential!",
    "jp": "どうぐスッキリ！おきにリング"
  },
  {
    "label": "DummyHowtoBook_11140",
    "en": "Ultimate Pocket Stuffing",
    "jp": "ポケットつめこみウルトラテク"
  },
  {
    "label": "DummyHowtoBook_12185",
    "en": "Custom Design Pro Editor",
    "jp": "マイデザインPROエディタ"
  },
  {
    "label": "DummyHowtoBook_13195",
    "en": "Custom Design Pro Editor+",
    "jp": "マイデザインPROエディタ＋"
  },
  {
    "label": "DummyHowtoBook_13256",
    "en": "Body-Paint Costume Tips",
    "jp": "へんしん！ボディカラーペイント"
  },
  {
    "label": "DummyHowtoBook_13257",
    "en": "Exploring New Eye Colors",
    "jp": "みせる！カラーコンタクト"
  },
  {
    "label": "DummyHowtoBook_13610",
    "en": "Hip Reaction Collection",
    "jp": "ナウい！リアクションずかん"
  },
  {
    "label": "DummyHowtoBook_13766",
    "en": "Top 6 Stylish Hairstyles",
    "jp": "もっと！ヘアアレンジ×6"
  },
  {
    "label": "DummyHowtoBook_14030",
    "en": "Viva Festivale Reaction Set",
    "jp": "ビバ！カーニバルリアクション"
  },
  {
    "label": "DummyHowtoBook_14158",
    "en": "Custom Designs Portal",
    "jp": "マイデザイン・ショーケース"
  },
  {
    "label": "DummyPresentbox_04480",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyRecipe_02695",
    "en": "ダミーDIYレシピ",
    "jp": "ダミーDIYレシピ"
  },
  {
    "label": "DummyRecipe_05603",
    "en": "DIY for Beginners",
    "jp": "はじめてのDIYレシピ"
  },
  {
    "label": "DummyRecipe_05604",
    "en": "Test Your DIY Skills",
    "jp": "チャレンジ！DIYレシピ"
  },
  {
    "label": "DummyRecipe_05605",
    "en": "Wildest Dreams DIY",
    "jp": "こんなモノまで？！DIY"
  },
  {
    "label": "DummyRecipe_13787",
    "en": "Cozy Turkey Day DIY",
    "jp": "いろどりサンクスギビングDIY"
  },
  {
    "label": "DummyWrapping_07699",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07700",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07701",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07702",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07703",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07704",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07705",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07706",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07707",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07708",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07709",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07710",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07711",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07712",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07713",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_07714",
    "en": "present",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrapping_13793",
    "en": "gift",
    "jp": "プレゼント"
  },
  {
    "label": "DummyWrappingOtoshidama_14042",
    "en": "lucky money",
    "jp": "しゅんせつのおとしだま"
  },
  {
    "label": "DummyWrappingOtoshidama_14043",
    "en": "sebaetdon",
    "jp": "ソルラルのおとしだま"
  },
  {
    "label": "FierworkHand_05743",
    "en": "red sparkler",
    "jp": "あかいてもちはなび"
  },
  {
    "label": "FierworkHand_05743_pl",
    "en": "red sparklers",
    "jp": "あかいてもちはなび"
  },
  {
    "label": "FierworkHand_12974",
    "en": "blue sparkler",
    "jp": "あおいてもちはなび"
  },
  {
    "label": "FierworkHand_12974_pl",
    "en": "blue sparklers",
    "jp": "あおいてもちはなび"
  },
  {
    "label": "FireworkM_13106",
    "en": "fountain firework",
    "jp": "おきはなび"
  },
  {
    "label": "FishBait_04549",
    "en": "fish bait",
    "jp": "サカナのまきエサ"
  },
  {
    "label": "FishBait_04549_pl",
    "en": "fish bait",
    "jp": "サカナのまきエサ"
  },
  {
    "label": "FlowerShower_14284",
    "en": "flower-petal basket",
    "jp": "フラワーシャワー"
  },
  {
    "label": "HandheldPennant_13128",
    "en": "Nook Inc. handheld pennant",
    "jp": "たぬきかいはつのてもちペナント"
  },
  {
    "label": "Honeycomb_03263",
    "en": "wasp nest",
    "jp": "ハチのす"
  },
  {
    "label": "Honeycomb_03263_pl",
    "en": "wasp nests",
    "jp": "ハチのす"
  },
  {
    "label": "HousingKit_02750",
    "en": "tent",
    "jp": "テント"
  },
  {
    "label": "HousingKit_02755",
    "en": "Blathers's tent marker",
    "jp": "フータさんのテントよていち"
  },
  {
    "label": "HousingKit_02756",
    "en": "shop construction kit",
    "jp": "おみせのこうじかんばん"
  },
  {
    "label": "HousingKit_02757",
    "en": "'s tent",
    "jp": "のテント"
  },
  {
    "label": "HousingKit_03349",
    "en": "housing kit",
    "jp": "ハウジングキット"
  },
  {
    "label": "HousingKit_04311",
    "en": "incline marker kit",
    "jp": "さかよていちキット"
  },
  {
    "label": "HousingKit_04411",
    "en": "tailors construction kit",
    "jp": "したてやのこうじかんばん"
  },
  {
    "label": "HousingKit_05166",
    "en": "campsite construction kit",
    "jp": "キャンプサイトこうじキット"
  },
  {
    "label": "HousingKit_05357",
    "en": "'s kit",
    "jp": "・いせつキット"
  },
  {
    "label": "HousingKit_05358",
    "en": "moving kit",
    "jp": "いせつキット"
  },
  {
    "label": "HousingKit_05359",
    "en": "tailors moving kit",
    "jp": "したてや・いせつキット"
  },
  {
    "label": "HousingKit_05360",
    "en": "shop moving kit",
    "jp": "おみせ・いせつキット"
  },
  {
    "label": "HousingKit_05361",
    "en": "museum moving kit",
    "jp": "はくぶつかん・いせつキット"
  },
  {
    "label": "HousingKit_06841",
    "en": "campsite moving kit",
    "jp": "キャンプサイト・いせつキット"
  },
  {
    "label": "HousingKit_13346",
    "en": "transfer kit",
    "jp": "ひっこしキット"
  },
  {
    "label": "HousingKitBirdge_04310",
    "en": "bridge marker kit",
    "jp": "はしよていちキット"
  },
  {
    "label": "HousingKitBirdge_07211",
    "en": "bridge construction kit",
    "jp": "はしのこうじキット"
  },
  {
    "label": "HousingKitRcoQuest_05827",
    "en": "plot 1 housing kit",
    "jp": "ハウジングキット・1ごうち"
  },
  {
    "label": "HousingKitRcoQuest_05828",
    "en": "plot 2 housing kit",
    "jp": "ハウジングキット・2ごうち"
  },
  {
    "label": "HousingKitRcoQuest_05829",
    "en": "plot 3 housing kit",
    "jp": "ハウジングキット・3ごうち"
  },
  {
    "label": "JuiceFuzzyapple_13835",
    "en": "sparkling cider",
    "jp": "スパークリングサイダー"
  },
  {
    "label": "JuiceFuzzyapple_14028",
    "en": "shamrock soda",
    "jp": "シャムロックソーダ"
  },
  {
    "label": "LicenseItem_08773",
    "en": "stone path permit",
    "jp": "どうろこうじ・いしだたみ"
  },
  {
    "label": "LicenseItem_08774",
    "en": "brick path permit",
    "jp": "どうろこうじ・レンガのみち"
  },
  {
    "label": "LicenseItem_08775",
    "en": "dark dirt path permit",
    "jp": "どうろこうじ・くろつちのみち"
  },
  {
    "label": "LicenseItem_08776",
    "en": "arched tile path permit",
    "jp": "どうろこうじ・アーチタイル"
  },
  {
    "label": "LicenseItem_08777",
    "en": "sand path permit",
    "jp": "どうろこうじ・すなのみち"
  },
  {
    "label": "LicenseItem_08778",
    "en": "terra-cotta tile permit",
    "jp": "どうろこうじ・テラコッタタイル"
  },
  {
    "label": "LicenseItem_08779",
    "en": "wooden path permit",
    "jp": "どうろこうじ・くみきのみち"
  },
  {
    "label": "LicenseItem_08780",
    "en": "waterscaping permit",
    "jp": "かせんこうじライセンス"
  },
  {
    "label": "LicenseItem_08781",
    "en": "cliff construction permit",
    "jp": "がけこうじライセンス"
  },
  {
    "label": "LicenseItem_09771",
    "en": "custom design path permit",
    "jp": "どうろこうじ・マイデザイン"
  },
  {
    "label": "MaracasCarnival_13958",
    "en": "maracas",
    "jp": "マラカス"
  },
  {
    "label": "Medicine_02777",
    "en": "medicine",
    "jp": "おくすり"
  },
  {
    "label": "Medicine_02777_pl",
    "en": "medicine",
    "jp": "おくすり"
  },
  {
    "label": "Megaphone_13913",
    "en": "football cheer megaphone",
    "jp": "おうえんメガホン・アメフト"
  },
  {
    "label": "Megaphone_14013",
    "en": "fiery cheer megaphone",
    "jp": "おうえんメガホン・ファイアー"
  },
  {
    "label": "Megaphone_14014",
    "en": "starry cheer megaphone",
    "jp": "おうえんメガホン・スター"
  },
  {
    "label": "Megaphone_14015",
    "en": "glittery cheer megaphone",
    "jp": "おうえんメガホン・グリッター"
  },
  {
    "label": "MessageBottle_05793",
    "en": "message bottle",
    "jp": "メッセージボトル"
  },
  {
    "label": "MessageBottle_12544",
    "en": "egg message bottle",
    "jp": "たまごのメッセージボトル"
  },
  {
    "label": "MilePlaneTicket_05851",
    "en": "Nook Miles Ticket",
    "jp": "マイルりょこうけん"
  },
  {
    "label": "MilePlaneTicket_05851_pl",
    "en": "Nook Miles Tickets",
    "jp": "マイルりょこうけん"
  },
  {
    "label": "MilePlaneTicket_09964",
    "en": "Bell voucher",
    "jp": "ベルひきかえけん"
  },
  {
    "label": "MilePlaneTicket_09964_pl",
    "en": "Bell vouchers",
    "jp": "ベルひきかえけん"
  },
  {
    "label": "MilePlaneTicket_13228",
    "en": "Dream Bell exchange ticket",
    "jp": "ゆめのベルひきかえけん"
  },
  {
    "label": "MilePlaneTicket_13228_pl",
    "en": "Dream Bell exchange tickets",
    "jp": "ゆめのベルひきかえけん"
  },
  {
    "label": "Ocarina_05320",
    "en": "ocarina",
    "jp": "オカリナ"
  },
  {
    "label": "Otoshidama_13954",
    "en": "lucky red envelope",
    "jp": "しゅんせつのおとしだま"
  },
  {
    "label": "Otoshidama_13954_pl",
    "en": "lucky red envelopes",
    "jp": "しゅんせつのおとしだま"
  },
  {
    "label": "Otoshidama_13955",
    "en": "bokjumeoni lucky pouch",
    "jp": "ソルラルのおとしだま"
  },
  {
    "label": "Otoshidama_13955_pl",
    "en": "bokjumeoni lucky pouches",
    "jp": "ソルラルのおとしだま"
  },
  {
    "label": "Panflute_05517",
    "en": "pan flute",
    "jp": "パンフルート"
  },
  {
    "label": "Partyhorn_05742",
    "en": "tweeter",
    "jp": "ふきもどし"
  },
  {
    "label": "PartyPopper_02753",
    "en": "party popper",
    "jp": "クラッカー"
  },
  {
    "label": "PartyPopper_02753_pl",
    "en": "party poppers",
    "jp": "クラッカー"
  },
  {
    "label": "PitFallSeed_02578",
    "en": "pitfall seed",
    "jp": "おとしあなのタネ"
  },
  {
    "label": "PitFallSeed_02578_pl",
    "en": "pitfall seeds",
    "jp": "おとしあなのタネ"
  },
  {
    "label": "QuestChristmasPresentbox_13869",
    "en": "someone's gift",
    "jp": "だれかのプレゼント"
  },
  {
    "label": "QuestWrapping_04245",
    "en": "delivery box",
    "jp": "はいたつボックス"
  },
  {
    "label": "SoySet_13914",
    "en": "bean-tossing kit",
    "jp": "まめまきセット"
  },
  {
    "label": "StickLight_05741",
    "en": "light stick",
    "jp": "スティックライト"
  },
  {
    "label": "Tambourine_05430",
    "en": "tambourine",
    "jp": "タンバリン"
  },
  {
    "label": "Trash_03466",
    "en": "empty can",
    "jp": "あきカン"
  },
  {
    "label": "Trash_03469",
    "en": "boot",
    "jp": "ながぐつ"
  },
  {
    "label": "Trash_03470",
    "en": "old tire",
    "jp": "タイヤ"
  },
  {
    "label": "Trash_13107",
    "en": "used fountain firework",
    "jp": "おきはなびのもえかす"
  },
  {
    "label": "Uchiwa_05319",
    "en": "uchiwa fan",
    "jp": "うちわ"
  },
  {
    "label": "Uchiwa_09762",
    "en": "Nook Inc. uchiwa fan",
    "jp": "たぬきかいはつうちわ"
  },
  {
    "label": "Windmill_05744",
    "en": "pinwheel",
    "jp": "かざぐるま"
  },
  {
    "label": "WrappingPaper_07683",
    "en": "yellow wrapping paper",
    "jp": "きいろいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07683_pl",
    "en": "yellow wrapping paper",
    "jp": "きいろいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07684",
    "en": "pink wrapping paper",
    "jp": "ピンクのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07684_pl",
    "en": "pink wrapping paper",
    "jp": "ピンクのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07685",
    "en": "orange wrapping paper",
    "jp": "オレンジのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07685_pl",
    "en": "orange wrapping paper",
    "jp": "オレンジのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07686",
    "en": "chartreuse wrapping paper",
    "jp": "きみどりのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07686_pl",
    "en": "chartreuse wrapping paper",
    "jp": "きみどりのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07687",
    "en": "green wrapping paper",
    "jp": "みどりのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07687_pl",
    "en": "green wrapping paper",
    "jp": "みどりのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07688",
    "en": "mint wrapping paper",
    "jp": "ミントのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07688_pl",
    "en": "mint wrapping paper",
    "jp": "ミントのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07689",
    "en": "light-blue wrapping paper",
    "jp": "みずいろのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07689_pl",
    "en": "light-blue wrapping paper",
    "jp": "みずいろのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07690",
    "en": "purple wrapping paper",
    "jp": "むらさきのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07690_pl",
    "en": "purple wrapping paper",
    "jp": "むらさきのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07691",
    "en": "navy wrapping paper",
    "jp": "こんいろのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07691_pl",
    "en": "navy wrapping paper",
    "jp": "こんいろのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07692",
    "en": "blue wrapping paper",
    "jp": "あおいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07692_pl",
    "en": "blue wrapping paper",
    "jp": "あおいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07693",
    "en": "white wrapping paper",
    "jp": "しろいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07693_pl",
    "en": "white wrapping paper",
    "jp": "しろいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07694",
    "en": "red wrapping paper",
    "jp": "あかいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07694_pl",
    "en": "red wrapping paper",
    "jp": "あかいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07695",
    "en": "gold wrapping paper",
    "jp": "きんいろのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07695_pl",
    "en": "gold wrapping paper",
    "jp": "きんいろのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07696",
    "en": "brown wrapping paper",
    "jp": "ちゃいろのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07696_pl",
    "en": "brown wrapping paper",
    "jp": "ちゃいろのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07697",
    "en": "gray wrapping paper",
    "jp": "グレーのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07697_pl",
    "en": "gray wrapping paper",
    "jp": "グレーのラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07698",
    "en": "black wrapping paper",
    "jp": "くろいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_07698_pl",
    "en": "black wrapping paper",
    "jp": "くろいラッピングペーパー"
  },
  {
    "label": "WrappingPaper_13792",
    "en": "festive wrapping paper",
    "jp": "クリスマスなラッピングペーパー"
  },
  {
    "label": "WrappingPaper_13792_pl",
    "en": "festive wrapping paper",
    "jp": "クリスマスなラッピングペーパー"
  }
];

let npcRace = [
  {
    "label": "ant_M",
    "en": "anteater",
    "jp": "アリクイ"
  },
  {
    "label": "ant_F",
    "en": "anteater",
    "jp": "アリクイ"
  },
  {
    "label": "bea_M",
    "en": "bear",
    "jp": "クマ"
  },
  {
    "label": "bea_F",
    "en": "bear",
    "jp": "クマ"
  },
  {
    "label": "brd_M",
    "en": "bird",
    "jp": "トリ"
  },
  {
    "label": "brd_F",
    "en": "bird",
    "jp": "トリ"
  },
  {
    "label": "bul_M",
    "en": "bull",
    "jp": "オウシ"
  },
  {
    "label": "cat_M",
    "en": "cat",
    "jp": "ネコ"
  },
  {
    "label": "cat_F",
    "en": "cat",
    "jp": "ネコ"
  },
  {
    "label": "cbr_M",
    "en": "bear cub",
    "jp": "コグマ"
  },
  {
    "label": "cbr_F",
    "en": "bear cub",
    "jp": "コグマ"
  },
  {
    "label": "chn_M",
    "en": "chicken",
    "jp": "ニワトリ"
  },
  {
    "label": "chn_F",
    "en": "chicken",
    "jp": "ニワトリ"
  },
  {
    "label": "cow_F",
    "en": "cow",
    "jp": "メウシ"
  },
  {
    "label": "crd_M",
    "en": "alligator",
    "jp": "ワニ"
  },
  {
    "label": "crd_F",
    "en": "alligator",
    "jp": "ワニ"
  },
  {
    "label": "der_M",
    "en": "deer",
    "jp": "コジカ"
  },
  {
    "label": "der_F",
    "en": "deer",
    "jp": "コジカ"
  },
  {
    "label": "dog_M",
    "en": "dog",
    "jp": "イヌ"
  },
  {
    "label": "dog_F",
    "en": "dog",
    "jp": "イヌ"
  },
  {
    "label": "duk_M",
    "en": "duck",
    "jp": "アヒル"
  },
  {
    "label": "duk_F",
    "en": "duck",
    "jp": "アヒル"
  },
  {
    "label": "elp_M",
    "en": "elephant",
    "jp": "ゾウ"
  },
  {
    "label": "elp_F",
    "en": "elephant",
    "jp": "ゾウ"
  },
  {
    "label": "flg_M",
    "en": "frog",
    "jp": "カエル"
  },
  {
    "label": "flg_F",
    "en": "frog",
    "jp": "カエル"
  },
  {
    "label": "goa_M",
    "en": "goat",
    "jp": "ヤギ"
  },
  {
    "label": "goa_F",
    "en": "goat",
    "jp": "ヤギ"
  },
  {
    "label": "gor_M",
    "en": "gorilla",
    "jp": "ゴリラ"
  },
  {
    "label": "gor_F",
    "en": "gorilla",
    "jp": "ゴリラ"
  },
  {
    "label": "ham_M",
    "en": "hamster",
    "jp": "ハムスター"
  },
  {
    "label": "ham_F",
    "en": "hamster",
    "jp": "ハムスター"
  },
  {
    "label": "hip_M",
    "en": "hippo",
    "jp": "カバ"
  },
  {
    "label": "hip_F",
    "en": "hippo",
    "jp": "カバ"
  },
  {
    "label": "hrs_M",
    "en": "horse",
    "jp": "ウマ"
  },
  {
    "label": "hrs_F",
    "en": "horse",
    "jp": "ウマ"
  },
  {
    "label": "kal_M",
    "en": "koala",
    "jp": "コアラ"
  },
  {
    "label": "kal_F",
    "en": "koala",
    "jp": "コアラ"
  },
  {
    "label": "kgr_M",
    "en": "kangaroo",
    "jp": "カンガルー"
  },
  {
    "label": "kgr_F",
    "en": "kangaroo",
    "jp": "カンガルー"
  },
  {
    "label": "lon_M",
    "en": "lion",
    "jp": "ライオン"
  },
  {
    "label": "lon_F",
    "en": "lion",
    "jp": "ライオン"
  },
  {
    "label": "mnk_M",
    "en": "monkey",
    "jp": "サル"
  },
  {
    "label": "mnk_F",
    "en": "monkey",
    "jp": "サル"
  },
  {
    "label": "mus_M",
    "en": "mouse",
    "jp": "マウス"
  },
  {
    "label": "mus_F",
    "en": "mouse",
    "jp": "マウス"
  },
  {
    "label": "ocp_M",
    "en": "octopus",
    "jp": "タコ"
  },
  {
    "label": "ocp_F",
    "en": "octopus",
    "jp": "タコ"
  },
  {
    "label": "ost_M",
    "en": "ostrich",
    "jp": "ダチョウ"
  },
  {
    "label": "ost_F",
    "en": "ostrich",
    "jp": "ダチョウ"
  },
  {
    "label": "pbr_M",
    "en": "eagle",
    "jp": "ワシ"
  },
  {
    "label": "pbr_F",
    "en": "eagle",
    "jp": "ワシ"
  },
  {
    "label": "pgn_M",
    "en": "penguin",
    "jp": "ペンギン"
  },
  {
    "label": "pgn_F",
    "en": "penguin",
    "jp": "ペンギン"
  },
  {
    "label": "pig_M",
    "en": "pig",
    "jp": "ブタ"
  },
  {
    "label": "pig_F",
    "en": "pig",
    "jp": "ブタ"
  },
  {
    "label": "rbt_M",
    "en": "rabbit",
    "jp": "ウサギ"
  },
  {
    "label": "rbt_F",
    "en": "rabbit",
    "jp": "ウサギ"
  },
  {
    "label": "rhn_M",
    "en": "rhinoceros",
    "jp": "サイ"
  },
  {
    "label": "rhn_F",
    "en": "rhinoceros",
    "jp": "サイ"
  },
  {
    "label": "shp_M",
    "en": "sheep",
    "jp": "ヒツジ"
  },
  {
    "label": "shp_F",
    "en": "sheep",
    "jp": "ヒツジ"
  },
  {
    "label": "squ_M",
    "en": "squirrel",
    "jp": "リス"
  },
  {
    "label": "squ_F",
    "en": "squirrel",
    "jp": "リス"
  },
  {
    "label": "tig_M",
    "en": "tiger",
    "jp": "トラ"
  },
  {
    "label": "tig_F",
    "en": "tiger",
    "jp": "トラ"
  },
  {
    "label": "wol_M",
    "en": "wolf",
    "jp": "オオカミ"
  },
  {
    "label": "wol_F",
    "en": "wolf",
    "jp": "オオカミ"
  }
];
