let combined = {
  fashion: [
  ...fashion.tops,
  ...fashion.bottoms,
  ...fashion.dresses,
  ...fashion.headwear,
  ...fashion.swimwear,
  ...fashion.accessories,
  ...fashion.socks,
  ...fashion.shoes,
  ...fashion.bags,
  ...fashion.umbrellas
  ],
  items: [
  ...items.housewares,
  ...items.misc,
  ...items.wallMounted
  ],
  house: [
  ...house.wallpaper,
  ...house.floors,
  ...house.rugs
  ],
  npc: [
  ...npc.photos,
  ...npc.posters,
  ...npc.villagers
  ],
  creatures: [
  ...creatures.insects,
  ...creatures.fish,
  ...creatures.seaCreatures
  ],
  others: [
  ...others.music,
  ...others.fossils,
  ...others.art
  ],
  diy: [
  ...diy.tools,
  ...diy.fencing,
  ...diy.materials,
  ...diy.recipes
  ]
};

let everything = [
...combined.fashion,
...combined.items,
...combined.house,
...combined.npc,
...combined.creatures,
...combined.others,
...combined.diy
]
