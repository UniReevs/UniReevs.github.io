const humanBones = [
  {
    name: 'Axial skeleton',
    unique: true,
    jp: '中軸骨格',
    nickname: '本体',
    list: [
      {
        name: 'Cranial bones',
        jp: '頭蓋骨',
        nickname: 'ヒナまつり',
        bones: [
          {
            name: 'Frontal',
            unique: true,
            jp: '前頭骨',
            nickname: '親父',
            image: 'frontal'
          },
          {
            name: 'Sphenoid',
            unique: true,
            jp: '蝶形骨',
            nickname: '若頭',
            image: 'sphenoid'
          },
          {
            name: 'Ethmoid',
            unique: true,
            jp: '篩骨',
            nickname: 'サブ',
            image: 'nsonofsd'
          },
          {
            name: 'Occipital',
            unique: true,
            jp: '後頭骨',
            nickname: '新田',
            image: 'nsonofsd'
          },
          {
            name: 'Parietal',
            jp: '頭頂骨',
            nickname: 'ヒナ',
            image: 'parietal'
          },
          {
            name: 'Temporal',
            jp: '側頭骨',
            nickname: 'アンズ',
            image: 'nsonofsd'
          }
        ]
      },
      {
        name: 'Facial bones',
        jp: '顔面骨',
        nickname: '斉木楠雄のΨ難',
        bones: [
          {
            name: 'Nasal',
            jp: '鼻骨',
            nickname: '明智 おもらし',
            image: 'nsonofsd'
          },
          {
            name: 'Lacrimal',
            jp: '涙骨',
            nickname: '亜蓮 えりあし',
            image: 'nsonofsd'
          },
          {
            name: 'Inferior nasol concha',
            jp: '下鼻殻',
            nickname: '目良 食いしん坊',
            image: 'nsonofsd'
          },
          {
            name: 'Maxilla',
            jp: '上顎骨',
            nickname: '楠雄',
            image: 'nsonofsd'
          },
          {
            name: 'Mandible',
            unique: true,
            jp: '下顎骨',
            nickname: '燃堂 ケツあご',
            image: 'nsonofsd'
          },
          {
            name: 'Palatine',
            jp: '口蓋骨',
            nickname: '鳥束 エロ霊能者',
            image: 'nsonofsd'
          },
          {
            name: 'Zygomatic',
            jp: '頬骨',
            nickname: '漆黒の翼',
            image: 'nsonofsd'
          },
          {
            name: 'Vomer',
            unique: true,
            jp: '鋤骨',
            nickname: '命 ギャル能力者',
            image: 'nsonofsd'
          }
        ]
      },
      {
        name: 'Torso',
        unique: true,
        jp: '',
        nickname: '体',
        list: [
          {
            name: 'Vertebral column',
            unique: true,
            collapsed: true,
            jp: '',
            nickname: 'Spine',
            list: [
              {
                name: 'Cervical',
                unique: true,
                collapsed: true,
                jp: '',
                nickname: 'のんのんびより',
                bones: [
                  {
                    name: 'C1 - Atlas',
                    unique: true,
                    jp: '',
                    nickname: 'カズ姉',
                    image: 'spine-c1'
                  },
                  {
                    name: 'C2 - Axis',
                    unique: true,
                    jp: '',
                    nickname: 'だがし屋',
                    image: 'spine-c2'
                  },
                  {
                    name: 'C3',
                    unique: true,
                    jp: '',
                    nickname: '兄ちゃん',
                    image: 'spine-c3'
                  },
                  {
                    name: 'C4',
                    unique: true,
                    jp: '',
                    nickname: 'こまり',
                    image: 'spine-c4'
                  },
                  {
                    name: 'C5',
                    unique: true,
                    jp: '',
                    nickname: 'なつみ',
                    image: 'spine-c5'
                  },
                  {
                    name: 'C6',
                    unique: true,
                    jp: '',
                    nickname: 'ほたる',
                    image: 'spine-c6'
                  },
                  {
                    name: 'C7',
                    unique: true,
                    jp: '',
                    nickname: 'れんげ',
                    image: 'spine-c7'
                  }
                ]
              },
              {
                name: 'Thoracic',
                unique: true,
                collapsed: true,
                jp: '',
                nickname: 'おそ松さん',
                bones: [
                  {
                    name: 'T1',
                    unique: true,
                    jp: '',
                    nickname: 'おそ松 (新)',
                    image: 'spine-t1'
                  },
                  {
                    name: 'T2',
                    unique: true,
                    jp: '',
                    nickname: 'カラ松 (新)',
                    image: 'spine-t2'
                  },
                  {
                    name: 'T3',
                    unique: true,
                    jp: '',
                    nickname: 'チョロ松 (新)',
                    image: 'spine-t3'
                  },
                  {
                    name: 'T4',
                    unique: true,
                    jp: '',
                    nickname: '一松 (新)',
                    image: 'spine-t4'
                  },
                  {
                    name: 'T5',
                    unique: true,
                    jp: '',
                    nickname: '十四松 (新)',
                    image: 'spine-t5'
                  },
                  {
                    name: 'T6',
                    unique: true,
                    jp: '',
                    nickname: 'トド松 (新)',
                    image: 'spine-t6'
                  },
                  {
                    name: 'T7',
                    unique: true,
                    jp: '',
                    nickname: 'おそ松',
                    image: 'spine-t7'
                  },
                  {
                    name: 'T8',
                    unique: true,
                    jp: '',
                    nickname: 'カラ松',
                    image: 'spine-t8'
                  },
                  {
                    name: 'T9',
                    unique: true,
                    jp: '',
                    nickname: 'チョロ松',
                    image: 'spine-t9'
                  },
                  {
                    name: 'T10',
                    unique: true,
                    jp: '',
                    nickname: '一松',
                    image: 'spine-t10'
                  },
                  {
                    name: 'T11',
                    unique: true,
                    jp: '',
                    nickname: '十四松',
                    image: 'spine-t11'
                  },
                  {
                    name: 'T12',
                    unique: true,
                    jp: '',
                    nickname: 'トド松',
                    image: 'spine-t12'
                  }
                ]
              },
              {
                name: 'Lumbar',
                unique: true,
                collapsed: true,
                jp: '',
                nickname: 'けいおん！',
                bones: [
                  {
                    name: 'L1',
                    unique: true,
                    jp: '',
                    nickname: 'ゆい',
                    image: 'spine-l1'
                  },
                  {
                    name: 'L2',
                    unique: true,
                    jp: '',
                    nickname: 'みお',
                    image: 'spine-l2'
                  },
                  {
                    name: 'L3',
                    unique: true,
                    jp: '',
                    nickname: 'りつ',
                    image: 'spine-l3'
                  },
                  {
                    name: 'L4',
                    unique: true,
                    jp: '',
                    nickname: 'つむぎ',
                    image: 'spine-l4'
                  },
                  {
                    name: 'L5',
                    unique: true,
                    jp: '',
                    nickname: 'あずさ',
                    image: 'spine-l5'
                  }
                ]
              },
              {
                name: 'Sacral',
                unique: true,
                collapsed: true,
                jp: '',
                nickname: 'らんま1/2',
                bones: [
                  {
                    name: 'Sacrum',
                    unique: true,
                    jp: '',
                    nickname: '乱馬',
                    image: 'spine-sacrum'
                  },
                  {
                    name: 'Coccyx',
                    unique: true,
                    jp: '',
                    nickname: 'シャンプー',
                    image: 'spine-coccyx'
                  }
                ]
              }
            ]
          },
          {
            name: 'Rib cage',
            collapsed: true,
            jp: '',
            nickname: 'おそ松さん',
            bones: [
              {
                name: 'Sternum',
                unique: true,
                jp: '',
                nickname: 'トト子ちゃん',
                image: 'rib-sternum'
              },
              {
                name: '1st Rib',
                jp: '',
                nickname: 'おそ松 (新)',
                image: 'rib-1'
              },
              {
                name: '2nd Rib',
                jp: '',
                nickname: 'カラ松 (新)',
                image: 'rib-2'
              },
              {
                name: '3rd Rib',
                jp: '',
                nickname: 'チョロ松 (新)',
                image: 'rib-3'
              },
              {
                name: '4th Rib',
                jp: '',
                nickname: '一松 (新)',
                image: 'rib-4'
              },
              {
                name: '5th Rib',
                jp: '',
                nickname: '十四松 (新)',
                image: 'rib-5'
              },
              {
                name: '6th Rib',
                jp: '',
                nickname: 'トド松 (新)',
                image: 'rib-6'
              },
              {
                name: '7th Rib',
                jp: '',
                nickname: 'おそ松',
                image: 'rib-7'
              },
              {
                name: '8th Rib',
                jp: '',
                nickname: 'カラ松',
                image: 'rib-8'
              },
              {
                name: '9th Rib',
                jp: '',
                nickname: 'チョロ松',
                image: 'rib-9'
              },
              {
                name: '10th Rib',
                jp: '',
                nickname: '一松',
                image: 'rib-10'
              },
              {
                name: '11th Rib',
                jp: '',
                nickname: '十四松',
                image: 'rib-11'
              },
              {
                name: '12th Rib',
                jp: '',
                nickname: 'トド松',
                image: 'rib-12'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Appendicular skeleton',
    jp: '',
    nickname: '本体にくっついてる部位',
    list: [
      {
        name: 'Shoulders',
        collapsed: true,
        jp: '',
        nickname: 'ワンパンマン',
        bones: [
          {
            name: 'Scapula',
            jp: '',
            nickname: 'ジェノス',
            image: 'arm-scapula'
          },
          {
            name: 'Clavicle',
            jp: '',
            nickname: 'サイタマ',
            image: 'arm-clavicle'
          }
        ]
      },
      {
        name: 'Arms',
        collapsed: true,
        jp: '',
        nickname: '俺物語!!',
        bones: [
          {
            name: 'Humerus',
            jp: '',
            nickname: '砂川',
            image: 'arm-humerus'
          },
          {
            name: 'Ulna',
            jp: '',
            nickname: '猛男',
            image: 'arm-ulna'
          },
          {
            name: 'Radius',
            jp: '',
            nickname: '大和',
            image: 'arm-radius'
          }
        ]
      },
      {
        name: 'Hands',
        collapsed: true,
        jp: '',
        nickname: '手',
        list: [
          {
            name: 'Carpals',
            collapsed: true,
            jp: '',
            nickname: '物語シリーズ',
            bones: [
              {
                name: 'Scaphoid',
                jp: '',
                nickname: '影縫余弦',
                image: 'carpal-scaphoid'
              },
              {
                name: 'Lunate',
                jp: '',
                nickname: '斧乃木ちゃん',
                image: 'carpal-lunate'
              },
              {
                name: 'Triquetrum',
                jp: '',
                nickname: '阿良々木くん',
                image: 'carpal-triquetrum'
              },
              {
                name: 'Pisiform',
                jp: '',
                nickname: '戦場ヶ原',
                image: 'carpal-pisiform'
              },
              {
                name: 'Trapezium',
                jp: '',
                nickname: '忍野 忍',
                image: 'carpal-trapezium'
              },
              {
                name: 'Trapezoid',
                jp: '',
                nickname: '八九寺',
                image: 'carpal-trapezoid'
              },
              {
                name: 'Capitate',
                jp: '',
                nickname: '月火ちゃん',
                image: 'carpal-capitate'
              },
              {
                name: 'Hamate',
                jp: '',
                nickname: '火憐ちゃん',
                image: 'carpal-hamate'
              }
            ]
          },
          {
            name: 'Fingers',
            collapsed: true,
            jp: '',
            nickname: '君と僕。',
            list: [
              {
                name: 'Thumb',
                collapsed: true,
                jp: '',
                nickname: '橘 千鶴',
                bones: [
                  {
                    name: 'Metacarpal',
                    jp: '',
                    nickname: '手のひらのとこ',
                    image: 'finger-1-metacarpal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'finger-1-phalanx-proximal'
                  },
                  {
                    name: 'Sesamoid',
                    jp: '',
                    nickname: 'たまたま',
                    image: 'finger-1-sesamoid'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'finger-1-phalanx-distal'
                  }
                ]
              },
              {
                name: 'Index',
                collapsed: true,
                jp: '',
                nickname: '塚原 要',
                bones: [
                  {
                    name: 'Metacarpal',
                    jp: '',
                    nickname: '手のひらのとこ',
                    image: 'finger-2-metacarpal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'finger-2-phalanx-proximal'
                  },
                  {
                    name: 'Middle Phalanx',
                    jp: '',
                    nickname: '真ん中',
                    image: 'finger-2-phalanx-middle'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'finger-2-phalanx-distal'
                  }
                ]
              },
              {
                name: 'Middle',
                collapsed: true,
                jp: '',
                nickname: '浅羽 悠太',
                bones: [
                  {
                    name: 'Metacarpal',
                    jp: '',
                    nickname: '手のひらのとこ',
                    image: 'finger-3-metacarpal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'finger-3-phalanx-proximal'
                  },
                  {
                    name: 'Middle Phalanx',
                    jp: '',
                    nickname: '真ん中',
                    image: 'finger-3-phalanx-middle'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'finger-3-phalanx-distal'
                  }
                ]
              },
              {
                name: 'Ring',
                collapsed: true,
                jp: '',
                nickname: '浅羽 祐希',
                bones: [
                  {
                    name: 'Metacarpal',
                    jp: '',
                    nickname: '手のひらのとこ',
                    image: 'finger-4-metacarpal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'finger-4-phalanx-proximal'
                  },
                  {
                    name: 'Middle Phalanx',
                    jp: '',
                    nickname: '真ん中',
                    image: 'finger-4-phalanx-middle'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'finger-4-phalanx-distal'
                  }
                ]
              },
              {
                name: 'Pinky',
                collapsed: true,
                jp: '',
                nickname: '松岡 春',
                bones: [
                  {
                    name: 'Metacarpal',
                    jp: '',
                    nickname: '手のひらのとこ',
                    image: 'finger-5-metacarpal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'finger-5-phalanx-proximal'
                  },
                  {
                    name: 'Middle Phalanx',
                    jp: '',
                    nickname: '真ん中',
                    image: 'finger-5-phalanx-middle'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'finger-5-phalanx-distal'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Pelvis',
        collapsed: true,
        jp: '',
        nickname: 'ボーカロイド',
        bones: [
          // {
          //   name: 'Female',
          //   jp: '',
          // nickname: '鏡音リン',
          //   image: 'pelvis-female'
          // },
          // {
          //   name: 'Pubic symphysis ',
          //   jp: '',
          // nickname: '鏡音レン',
          //   image: 'pubic-symphysis-male'
          // },
          {
            name: 'Hip bone',
            jp: '',
            nickname: '鏡音レン',
            image: 'pelvis-male'
          }
        ]
      },
      {
        name: 'Legs',
        collapsed: true,
        jp: '',
        nickname: '妖怪事変',
        bones: [
          {
            name: 'Femur',
            jp: '',
            nickname: '隠神さん',
            image: 'leg-femur'
          },
          {
            name: 'Patella',
            jp: '',
            nickname: '夏羽くん',
            image: 'leg-patella'
          },
          {
            name: 'Tibia',
            jp: '',
            nickname: '織',
            image: 'leg-tibia'
          },
          {
            name: 'Fibula',
            jp: '',
            nickname: '晶',
            image: 'leg-fibula'
          }
        ]
      },
      {
        name: 'Feet',
        collapsed: true,
        jp: '',
        nickname: '足',
        list: [
          {
            name: 'Tarsals',
            collapsed: true,
            jp: '',
            nickname: '七つの大罪',
            bones: [
              {
                name: 'Calcaneus',
                jp: '',
                nickname: 'メリオダス',
                image: 'tarsal-calcaneus'
              },
              {
                name: 'Talus',
                jp: '',
                nickname: 'エスカノール',
                image: 'tarsal-talus'
              },
              {
                name: 'Navicular',
                jp: '',
                nickname: 'マーリン',
                image: 'tarsal-navicular'
              },
              {
                name: 'Medial cuneiform',
                jp: '',
                nickname: 'バン',
                image: 'tarsal-cuneiform-medial'
              },
              {
                name: 'Intermediate cuneiform',
                jp: '',
                nickname: 'キング',
                image: 'tarsal-cuneiform-intermediate'
              },
              {
                name: 'Lateral cuneiform',
                jp: '',
                nickname: 'ゴウセル',
                image: 'tarsal-cuneiform-lateral'
              },
              {
                name: 'Cuboid',
                jp: '',
                nickname: 'ディアンヌ',
                image: 'tarsal-cuboid'
              }
            ]
          },
          {
            name: 'Toes',
            collapsed: true,
            jp: '',
            nickname: '君と僕。',
            list: [
              {
                name: 'Thumb',
                collapsed: true,
                jp: '',
                nickname: '橘 千鶴',
                bones: [
                  {
                    name: 'Metatarsal',
                    jp: '',
                    nickname: '足の平のとこ',
                    image: 'toe-1-metatarsal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'toe-1-phalanx-proximal'
                  },
                  {
                    name: 'Sesamoid',
                    jp: '',
                    nickname: 'たまたま',
                    image: 'toe-1-sesamoid'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'toe-1-phalanx-distal'
                  }
                ]
              },
              {
                name: 'Index',
                collapsed: true,
                jp: '',
                nickname: '塚原 要',
                bones: [
                  {
                    name: 'Metatarsal',
                    jp: '',
                    nickname: '足の平のとこ',
                    image: 'toe-2-metatarsal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'toe-2-phalanx-proximal'
                  },
                  {
                    name: 'Middle Phalanx',
                    jp: '',
                    nickname: '真ん中',
                    image: 'toe-2-phalanx-middle'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'toe-2-phalanx-distal'
                  }
                ]
              },
              {
                name: 'Middle',
                collapsed: true,
                jp: '',
                nickname: '浅羽 悠太',
                bones: [
                  {
                    name: 'Metatarsal',
                    jp: '',
                    nickname: '足の平のとこ',
                    image: 'toe-3-metatarsal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'toe-3-phalanx-proximal'
                  },
                  {
                    name: 'Middle Phalanx',
                    jp: '',
                    nickname: '真ん中',
                    image: 'toe-3-phalanx-middle'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'toe-3-phalanx-distal'
                  }
                ]
              },
              {
                name: 'Ring',
                collapsed: true,
                jp: '',
                nickname: '浅羽 祐希',
                bones: [
                  {
                    name: 'Metatarsal',
                    jp: '',
                    nickname: '足の平のとこ',
                    image: 'toe-4-metatarsal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'toe-4-phalanx-proximal'
                  },
                  {
                    name: 'Middle Phalanx',
                    jp: '',
                    nickname: '真ん中',
                    image: 'toe-4-phalanx-middle'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'toe-4-phalanx-distal'
                  }
                ]
              },
              {
                name: 'Pinky',
                collapsed: true,
                jp: '',
                nickname: '松岡 春',
                bones: [
                  {
                    name: 'Metatarsal',
                    jp: '',
                    nickname: '足の平のとこ',
                    image: 'toe-5-metatarsal'
                  },
                  {
                    name: 'Proximal Phalanx',
                    jp: '',
                    nickname: '指の始まり',
                    image: 'toe-5-phalanx-proximal'
                  },
                  {
                    name: 'Middle Phalanx',
                    jp: '',
                    nickname: '真ん中',
                    image: 'toe-5-phalanx-middle'
                  },
                  {
                    name: 'Distal Phalanx',
                    jp: '',
                    nickname: 'さきっぽ',
                    image: 'toe-5-phalanx-distal'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
