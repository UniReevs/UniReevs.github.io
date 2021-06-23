
// let newData = createNewDataFromSheetMusic();
// console.log(newData);

// let translationTest = csvTranlation(test)
// console.log(translationTest);

function createNewDataFromCSV(category, isFashion = false) {
  let nameTranslations = translationNames[category],
      patternTranslations = translationPatterns[category],
      variantTranslations = translationVariants[category],
      data = csv[category],
      newData = [];

  data.push({lastFakeItem: true}),
  variants = [],
  count = 0;

  for (let i = 0; i < data.length; i++) {
    let item = data[i],
    prevItem,
    isLastItem = i === data.length - 1;

    if (i === 0) {
      prevItem = item[i];
      prevID = item.InternalID;
    } else {
      prevItem = data[i-1];
    }

    if ((prevID !== item.InternalID) || isLastItem) {

      newData.push({
        name: {
          en: prevItem.Name,
          jp: getTranslation(nameTranslations, parseInt(prevItem.InternalID))
        },
        id: prevItem.InternalID,
        source: prevItem.Source,
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
          cost: prevItem.KitCost,
          type: prevItem.KitType
        },
        size: prevItem.Size,
        surface: prevItem.Surface,
        uses: prevItem.Uses,
        event: prevItem.Event,
        exclusive: prevItem.EventExclusive,
        hha: {
          points: prevItem.HHA_Points,
          concepts: [prevItem.HHA_Concept1, prevItem.HHA_Concept2],
          series: prevItem.HHA_Series,
          set: prevItem.HHA_Set,
          category: prevItem.HHA_Category
        },
        fashion: {
          availability: prevItem.Availability,
          seasonality: prevItem.Seasonality,
          season: prevItem.MannequinSeason,
          gender: prevItem.Gender,
          villager: {
            gender: prevItem.VillagerGender,
            equippable: prevItem.VillagerEquippable
          },
          styles: [prevItem.Style1, prevItem.Style2],
          labelThemes: prevItem.LabelThemes,
          shapes: [prevItem.PrimaryShape, prevItem.SecondaryShape],
          Type: prevItem.Type
        },
        interact: prevItem.Interact,
        stackSize: prevItem.StackSize,
        tag: prevItem.Tag,
        set: prevItem.Set,
        group: prevItem.Group,
        museum: prevItem.Museum,
        vfx: prevItem.VFX,
        genuine: prevItem.Genuine,
        outdoor: prevItem.Outdoor,
        type: {
          speaker: prevItem.SpeakerType,
          lighting: prevItem.LightingType,
          doorDeco: prevItem.DoorDeco,
          window: prevItem.WindowType,
          windowColor: prevItem.WindowColor,
          pane: prevItem.PaneType,
          curtain: prevItem.CurtainType,
          ceiling: prevItem.CeilingType,
          art: prevItem.ArtType,
          curtainColor: prevItem.CurtainColor
        },
        catalog: prevItem.Catalog,
        version: prevItem.Version,
        category: category,
        price: {
          buy: prevItem.Buy,
          sell: prevItem.Sell,
          currency: prevItem.ExchangeCurrency,
          exchange: prevItem.ExchangePrice,
        },
        count: {
          variants: variants.length - count,
          patterns: count
        },
        variants: variants
      });

      prevID = item.InternalID
      count = 0;
      variants = [];
    }

    if (isFashion) {
      let searchID = item.InternalID+'_'+item.VariantID;
      let translation = getTranslation(variantTranslations, searchID, true);

      variants.push({
        id: item.VariantID,
        colors: [item.Color1, item.Color2],
        variant: {
          name: {
            en: item.Variation,
            jp: translation
          },
        },
        imageName: item.Filename
      });


    } else {
      let hasVariantID = item.VariantID != null ? true : false,
          splits = hasVariantID ? item.VariantID.split('_') : false,
          variantNumber = hasVariantID ? splits[0] : '',
          patternNumber = hasVariantID ? splits[1] : '';

      let searchID = {
        variatnt: item.InternalID + '_' + variantNumber,
        pattern: item.InternalID + '_' + patternNumber
      };

      let translation = {
        variant: hasVariantID ? getTranslation(variantTranslations, searchID.variatnt, true) : null,
        pattern: hasVariantID ? getTranslation(patternTranslations, searchID.pattern, true) : null
      };

      if (patternNumber != 0) {
        count++;
      }

      variants.push({
        id: item.VariantID,
        colors: [item.Color1, item.Color2],
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
        imageName: item.Filename
      });
    }
  }

  return newData;
}
let category = 'seaCreatures';
// let newData = createNewDataFromCSV(category, true);
// console.log(newData)

function createList(category, folder = 'FtrIcon') {
  let data = itemData[category],
      html = '';
  for (let i = 0; i < data.length; i++) {
    let item = data[i];

    let kitCost = typeof(item.kit) !== 'undefined' && item.kit.cost !== null && typeof(item.kit.cost) !== 'undefined' ? `<span class="kit-cost" data-cost="${item.kit.cost}">${item.kit.cost}</span>` : '';
    let buyCost = item.price.buy > 0 ? `<span class="buy">${new Intl.NumberFormat('en-IN').format(item.price.buy)}</span>` : '';
    let sellCost = item.price.sell > 0 ? `<span class="sell">${new Intl.NumberFormat('en-IN').format(item.price.sell)}</span>` : '';
    let imageFolder = item.folder ? item.folder : folder;

        html += `

        <li>
          <input class="item-data"
            data-Source="${item.source}"
            data-category="${item.category}"
            data-Buy="${item.price.buy}"
            data-Sell="${item.price.sell}"
            data-Catalog="${item.catalog}"
            type="hidden">

          <div class="item">
            <div class="item-header">
              <div class="name jp">${item.name.jp}</div>
              <div class="item-info">
                <div class="icons">
                  <i class="category"></i>
                  <i class="source"></i>
                </div>
                <div class="price">
                  ${kitCost}
                  ${buyCost}
                  ${sellCost}
                </div>
              </div>
            </div>
            <ul class="variants-patterns">
           `;

      for (let j = 0; j < item.variants.length; j++) {

        let variant = item.variants[j];
        let variantName = variant.variant.name.en ? `
            <div class="name jp variant-name">${variant.variant.name.jp}</div>
        ` : '';
        let patternName = typeof(variant.pattern) !== 'undefined' && variant.pattern.name.en ? `
            <div class="name jp pattern-name">${variant.pattern.name.jp}</div>
        ` : '';

          // <input class="variant-data"
          //   data-VariantID="${variant.id}"
          //   data-Color1="${variant.colors[0]}"
          //   data-Color2="${variant.colors[1]}"
          //   type="hidden">
        html += `
          <li class="item-variant">
            <img class="js-load-image" data-src="assets/img/1.10.0/${imageFolder}/${variant.imageName}Cropped.png">
            ${variantName}
            ${patternName}
          </li>
        `;

      }

        html += `
        </ul>
      </div>
    </li>
  `;

  }
  return html;
}
let folder = 'FtrIcon';
// folder = 'ClosetIcon';
// let html = createList(category, folder);
// $('#js-item-list').html(html);
