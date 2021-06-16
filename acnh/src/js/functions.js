Array.prototype.unique = function() {
  return Array.from(new Set(this));
}

String.prototype.replaceArray = function(find, replace) {
  let replaceString = this,
  regex;
  for (let i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], 'g');
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function getTranslation(array, searchID, isVariant = false) {
  let value = '';
  for (var i = 0; i < array.length; i++) {
    let label = isVariant ? array[i].label : parseInt(array[i].label),
        id = isVariant ? searchID : parseInt(searchID);
    if (label === id) {
      value = array[i].jp;
      break;
    }
  }
  return value;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

function csvTranlation(data) {
  let  newData = [];
  for (var i = 0; i < data.length; i++) {
    let item = data[i];
    newData.push({
      label: item.label,
      en: item.English,
      jp: item.Japanese
    })

  }
  return newData;
}

function createNpcMenu() {
  let html = '';
  let data = others.events.unique()
  for (var i = 0; i < data.length; i++) {
    let npc = data[i];
    html += `
    <div class="menu">
      <a href="#" class="js-menu" data-category="${npc.en}">${npc.jp}</a>
    </div>
    `;
  }
  $('#js-event-nav').html(html);
}
// createNpcMenu();
function islandMap() {
  let html = '';
  for (var i = 0; i < 154; i++) {
    html += `<li class="area area-${i+1}"></li>`
  }
  $('.island-map').html(html);
}

function createList(data) {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    let item = data[i],
        cropped = '', // Cropped
        isTrue = item.price.buy < 0 && !item.diy;
        isTrue =
        item.source !== 'Able Sisters'
        && item.source !== 'Nook Shopping Daily Selection'
        && item.source !== 'Crafting'
        && item.source !== 'Dodo Airlines'
        && item.source !== 'Flick'
        && item.source !== 'C.J.'
        && item.catalog !== 'Not in catalog'
        && item.source !== 'Nook Shopping Seasonal'
        && item.source !== 'Mom'
        && item.source !== 'Gullivarrr'
        && item.source !== 'Label'
        && item.source !==  'Recycle box';
        isTrue = item.source === 'Able Sisters';
        isTrue = true;

    if (isTrue) {
        html += `
        <li class="item" data-sell="${item.price.sell}" data-buy="${item.price.buy}" data-id="${item.id}" data-category="${item.category}" data-source="${item.source}" data-event="${item.event}">
          <div class="item-header">
            <div class="name">${item.name.jp}</div>
            <div class="name en">${item.name.en}</div>
            <div class="info">
              <div class="scount">${item.count.variants}</div>
              <i class="category"></i>
              <i class="icon"></i>
              <div class="price">
                <span class="buy">${item.price.buy}</span>
                <span class="sell">${item.price.sell}</span>
              </div>
            </div>
            <ul class="variants">
        `;

      for (let j = 0; j < item.variants.length; j++) {
        let variant = item.variants[j];
        let folder = item.folder ? item.folder : 'FtrIcon';
        if (!variant.isPattern) {
          html += `
          <li class="variant">
            <img src="assets/img/1.10.0/${folder}/${variant.imageName}.png">
            <div class="name">${variant.name.jp}</div>
            <div class="name en">${variant.name.en}</div>
          </li>
          `;
        }
      }

      html += `
          </ul>
          </div>
        </li>
      `;

    }
  }
  return html;
}



function itemsWithVariants(data) {

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


function fashionNoVariants(data) {
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
