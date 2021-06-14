let newData = [];
    prevID = 0,
    index = 0,
    category = 'housewares',
    categoryV = '_umbrella_',
    data = csv[category];
    variants = [],
    itemID = 'InternalID',
    variantID = 'VariantID';

function createNewDataFromSheet(data, itemTranslationData, variantTranslationData, hasVariants = true) {
  let currentItem,
      newData = [];

  for (let i = 0; i < data.length; i++) {
    let item = data[i];

    if (i !== 0) {
      let prevItem = item[i-1];

      if (prevItem[itemID] === item[itemID]) {
        newData[i-1].variants.push(
        );
      } else {
        newData.push({
          name: {
            en: item.Name,
            jp: getTranslation(itemTranslationData, item[itemID])
          },
          id: item[itemID],
          source: {
            en: item.Source,
            jp: item.Source
          },
          map: 0,
          event: item.Event,
          eventExclusive: item.Exclusive,
          version: item.Version,
          catalog: item.Catalog,
          category: category,
          diy: item.DIY,
          tag: item.Tag,
          price: {
            buy: item.Buy,
            sell: item.Sell,
          },
          variants: [{
            id: item[variantID],
            name: {
              en: item.Variation,
              jp: getTranslation(variantTranslationData, searchID)
            },
            imageName: item.Filename
          }]
        });
      }
    }
  }
  return newData;
}

trimData(translationNames.fencing)

function itemsWithVariants() {
  data.push({lastFakeItem: true});

  for (var i = 0; i < data.length; i++) {
    // let  item = data[i];

    // if (i !== 0) {
    //   newData.push({
    //     name: {
    //       en: item.Name,
    //       jp: 'getNameTranslation(fashionNames[category], prevItem[itemID])'
    //     },
    //     id: item[itemID],
    //     source: {
    //       en: prevItem.Source,
    //       jp: prevItem.Source
    //     },
    //     map: 0,
    //     catalog: prevItem.Catalog,
    //     category: category,
    //     diy: prevItem.DIY,
    //     tag: prevItem.Tag,
    //     price: {
    //       buy: prevItem.Buy,
    //       sell: prevItem.Sell,
    //     },
    //     count: variants.length,
    //     variants: variants
    //   });
    // }

    let prevItem,
        item = data[i],
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
          // jp: getNameTranslation(itemNames[category], prevItem[itemID])
          jp: ''
        },
        id: prevItem[itemID],
        source: {
          en: prevItem.Source,
          jp: prevItem.Source
        },
        map: 0,
        event: 0,
        catalog: prevItem.Catalog,
        category: category,
        diy: prevItem.DIY,
        pattern: prevItem.Pattern,
        tag: prevItem.Tag,
        price: {
          buy: prevItem.Buy,
          sell: prevItem.Sell,
        },
        count: variants.length,
        variants: variants
      });

      prevID = item[itemID]
      index = 0;
      variants = [];
    }
    // let string = item[variantID];
    // let trim = (item[variantID] !== 'NA') ? string.charAt(0) : false;
    let string = item[variantID];
    let hasPattern = string ? string.includes('_') : false;
    let newVariantID = hasPattern ? string.charAt(0) : string;
    let searchID = item[itemID]+'_'+newVariantID;

    variants.push({
      id: item[variantID],
      name: {
        en: item.Variation,
        // jp: getVariantTranslation(itemVariantNames, searchID)
        jp: ''
      },
      fileName: item.Filename
    });
  }
}


function fashionNoVariants() {
  for (var i = 0; i < data.length; i++) {

    let item = data[i];

      newData.push({
        name: {
          en: item.Name,
          jp: getNameTranslation(fashionNames[category], item[variantID])
        },
        id: item[variantID],
        source: {
          en: item.Source,
          jp: item.Source
        },
        map: 0,
        catalog: item.Catalog,
        category: category,
        diy: item.DIY,
        tag: item.Tag,
        price: {
          buy: item.Buy,
          sell: item.Sell,
        },
        variants: [{
          fileName: item.Filename
        }]
      });

  }
}

function fashionWithVariants() {
  data.push({lastFakeItem: true});

  for (var i = 0; i < data.length; i++) {

    let prevItem,
        item = data[i],
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
          jp: getNameTranslation(fashionNames[category], prevItem[itemID])
        },
        id: prevItem[itemID],
        source: {
          en: prevItem.Source,
          jp: prevItem.Source
        },
        map: 0,
        catalog: prevItem.Catalog,
        category: category,
        diy: prevItem.DIY,
        tag: prevItem.Tag,
        price: {
          buy: prevItem.Buy,
          sell: prevItem.Sell,
        },
        count: variants.length,
        variants: variants
      });

      prevID = item[itemID]
      index = 0;
      variants = [];
    }

    let searchID = item[itemID]+categoryV+item[variantID];

    variants.push({
      id: item[variantID],
      name: {
        en: item.Variation,
        jp: getVariantTranslation(fashionVariants[category], searchID)
      },
      fileName: item.Filename
    });
  }
}

itemsWithVariants();

// let html = createList(fashion[category].sort(compareValues('count')));
let html = createList(fashion['bottoms']);
$('#js-item-list').html(html);
