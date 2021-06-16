let itemIdName = 'ClothGroupID';
itemIdName = 'InternalID';
let itemID = itemIdName,
    category = 'recipes',
    // searchText = '_'+capitalizeFirstLetter(category)+'_',
    searchText = '',
    variantID = 'VariantID',
    nameTranslations = translationNames[category],
    variantTranslations = translationVariants[category];
function createNewDataFromSheet(data, nameTranslations, variantTranslations, hasVariants = true) {
  let newData = [];
      data.push({lastFakeItem: true}),
      variants = [],
      count = 0;

  for (let i = 0; i < data.length; i++) {
    let item = data[i],
        prevItem,
        isLastItem = i === data.length - 1;

    if (i === 0) {
      prevItem = item[i];
      prevID = item[itemID];
    } else {
      prevItem = data[i-1];
    }

    if ((prevID !== item[itemID]) || isLastItem) {

      newData.push({
        name: {
          en: prevItem.Name,
          jp: getTranslation(nameTranslations, parseInt(prevItem[itemID]))
        },
        id: prevItem[itemID],
        source: prevItem.Source,
        map: 0,
        event: prevItem.Event,
        eventExclusive: prevItem.Exclusive,
        version: prevItem.Version,
        catalog: prevItem.Catalog,
        category: category,
        diy: prevItem.DIY,
        customize: prevItem.Customize,
        pattern: prevItem.PatternCustomize,
        tag: prevItem.Tag,
        price: {
          buy: prevItem.Buy,
          sell: prevItem.Sell,
        },
        count: {
          variants: variants.length - count,
          patterns: count
        },
        variants: variants
      });

      prevID = item[itemID]
      count = 0;
      variants = [];
    }

    let isPattern = false;
    if (item.VariantID !== null) {
      for (let k = 0; k < fileNamePatterns.length; k++) {
        let patternText = fileNamePatterns[k];
        if (item[variantID] === fileNamePatterns[k]) {
          isPattern = true;
          count++;
          break;
        }
      }
    }

    let string = item.VariantID;
    let newVariantID = item.VariantID ? string.charAt(0) : item[variantID];
    let searchID = item[itemID]+searchText+newVariantID,
        translation = (item.VariantID !== null) ? getTranslation(variantTranslations, searchID, true) : null;

    variants.push({
      id: item[variantID],
      name: {
        en: item.Variation,
        jp: translation
      },
      // isPattern: isPattern,
      imageName: item.Filename
    });
  }

  return newData;
}

function findSource(data) {
  let newData = [];
  for (var i = 0; i < data.length; i++) {
    newData.push(data[i].source);
  }
  return newData;
}
// let test = csvTranlation(ttttt);

// let sourceData = findSource(items.misc);
// let  a = sourceData.unique();



// let newData = createNewDataFromSheet(csv[category], nameTranslations, variantTranslations);
// console.log(newData);
// console.log(test);

let html = createList(diy[category]);
$('#js-item-list').html(html);

// let html = createList(fashion[category].sort(compareValues('count')));


let sourceNames = [
  // "Crafting",
  // "Flick",
  // "Kicks",
  // "DAL",
  // "CJ",
  "Shopping Seasonal",
  // "Mom",
  // "Nook Miles",
  // "Cranny",
  "Daily Selection",
  "Shopping Promotion",
  "NookLink",
  // "Birthday",
  "HHA",
  // "Zipper",
  // "Franklin",
  // "Gulliver",
  // "Pave",
  "Nintendo",
  "Starting items",
  // "Cyrus",
  // "Rover",
  // "Luna",
  // "Gullivarrr",
  // "Jack",
  // "Jingle",
  // "Able Sisters",
  // "Label",
  "Recycle",
  // "Treasure Trawler",
  // "Pascal",
  // "Blathers",
  "All villagers",
  "fossils",
  "Redd-Cranny",
  // "Isabelle",
  "Cranny-TomNook",
  "May Day Tour",
  // "Tom Nook",
  // "Saharah",
  "High Friendship",
  "Check Toy Day stockings the day after Toy Day",
  // "KK",
  // "Posters"
];
