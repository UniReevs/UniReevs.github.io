let itemID = 'InternalID',
    category = 'housewares',
    searchText = '_'+capitalizeFirstLetter(category)+'_',
    nameTranslations = translationNames[category],
    patternTranslations = translationPatterns[category],
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
        title: {
          body: prevItem.BodyTitle,
          pattern: prevItem.patternTitle
        },
        diy: prevItem.DIY,
        customize: {
          body: prevItem.BodyCustomize,
          pattern: prevItem.PatternCustomize
        },
        kit: {
          cost: prevItem.kitCost,
          type: prevItem.KitType
        },
        colors: [prevItem.Color1, prevItem.Color2],
        size: prevItem.Size,
        surface: prevItem.Surface,
        exchange: {
          price: prevItem.ExchangePrice,
          currency: prevItem.ExchangeCurrency
        },
        source: prevItem.Source,
        map: 0,
        event: prevItem.Event,
        exclusive: prevItem.EventExclusive,
        hha: {
          points: prevItem.HhaPoints,
          concepts: [prevItem.HhaConcept1, prevItem.HhaConcept2],
          series: prevItem.HhaSeries,
          set: prevItem.HhaSet,
          category: prevItem.Category
        },
        interact: prevItem.Interact,
        tag: prevItem.Tag,
        outdoor: prevItem.Outdoor,
        type: {
          speaker: prevItem.SpeakerType,
          lighting: prevItem.LightingType
        },
        catalog: prevItem.Catalog,
        version: prevItem.Version,
        category: category,
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
        if (item.variantID === fileNamePatterns[k]) {
          isPattern = true;
          count++;
          break;
        }
      }
    }

    let hasVariantID = item.VariantID != null,
        splits = hasVariantID ? item.VariantID.split('_') : false,
        variantNumber = hasVariantID ? splits[0] : '',
        patternNumber = hasVariantID ? splits[1] : '';

    let searchID = {
      variatnt: item[itemID] + '_' + variantNumber,
      pattern: item[itemID] + '_' + patternNumber
    };

    let translation = {
      variant: hasVariantID ? getTranslation(variantTranslations, searchID.variatnt, true) : null,
      pattern: hasVariantID ? getTranslation(patternTranslations, searchID.pattern, true) : null
    };

    variants.push({
      id: item.variantID,
      pattern: {
        name: {
          en: item.Pattern,
          jp: translation.pattern
        }
      },
      variant: {
        name: {
          en: item.Variation,
          jp: translation.variant
        },
      },
      isPattern: isPattern,
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



let newData = createNewDataFromSheet(csv[category], nameTranslations, variantTranslations);
console.log(newData);
// let translationTest = csvTranlation(test)
// console.log(translationTest);

let html = createList(items[category]);
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
