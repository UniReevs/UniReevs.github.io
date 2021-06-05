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

function getJapaneseTranslation(key, object) {
  return key in object ? object[key] : false;
}


let find = [' ', '\''],
replace = ['-', ''],
html = '',
index = 0,
newData = [],
clothing = ['Tops', 'Bottoms', 'Dress-Up', 'Headwear', 'Accessories', 'Socks', 'Shoes', 'Bags', 'Umbrellas', 'Clothing-Other'],
duplicate = '';

for (let i = 0; i < items.length; i++) {
  let item = items[i],
      variants = item.variants,
      object = {
        variants: []
      },
      buy = 0,
      sell = 0,
      id = '',
      source = '',
      variation = '',
      nameInJapanese = '',
      sourceInJapanse = '',
      variationInJapanese = '',
      obtained = '',
      count = variants.length;

  for (let j = 0; j < variants.length; j++) {
    let variant = variants[j];

    id = variant.internalId;
    source = variant.source[0];
    variation = variant.variation ? variant.variation : -1;
    nameInJapanese = getJapaneseTranslation(id, itemsInJapanese);
    sourceInJapanse = getJapaneseTranslation(source, sourceInJapanese);
    variationInJapanese = getJapaneseTranslation(id+'_'+j, variantsInJapanese),
    buy = variant.buy;
    sell = variant.sell;
    obtained = variant.source[0].replaceArray(find, replace),
    unique = variants.length === 1;

    if (nameInJapanese == false) {
      nameInJapanese = getJapaneseTranslation('c_'+id, itemsInJapanese);
    }

    if (duplicate !== item.name + variation) {
      object.variants.push({
        name: {
          en: variation,
          jp: variationInJapanese ? variationInJapanese : unique
        },
        image: variant.image ? variant.image : variant.storageImage,
      });
      duplicate = item.name + variation
    }
  }

  newData.push({
    name: {
      en: item.name,
      jp: nameInJapanese
    },
    series: item.series,
    setName: item.set,
    catalog: item.catalog,
    patternCustomize: item.patternCustomize,
    category: item.sourceSheet.replaceArray(find, replace),
    id: id,
    diy: item.diy,
    price: {
      buy: buy,
      sell: sell,
    },
    unique: unique,
    obtained: {
      en: obtained,
      jp: sourceInJapanse
    },
    count: count,
    variants: object.variants,
  });
}
// clothing = ['Tops', 'Bottoms', 'Dress-Up', 'Headwear', 'Accessories', 'Socks', 'Shoes', 'Bags', 'Umbrellas', 'Clothing-Other'],

for (let i = 0; i < newData.length; i++) {
  let item = newData[i],
      isNotForSale = item.buy < 0,
      isTrue = item.category == 'Clothing-Other';

  if (true) {

    html += `
    <li class="item count-${item.count}" data-name="${item.name.en}" data-id="${item.id}" data-category="${item.category}" data-obtained="${item.obtained.en}">
      <div class="item-header">
        <div class="name">${item.name.jp}</div>
        <div class="info">
          <span class="price" data-price="${item.price.buy}"><img src="assets/img/icons/bells.png" alt="">${item.price.buy}</span>
          <div class="info">
            <i class="category"></i>
            <i class="icon"></i>
          </div>
        </div>
      </div>
      <ul class="variants">
    `;

  for (let j = 0; j < item.variants.length; j++) {
    let variant = item.variants[j];

    html += `
      <li class="item-variant ${item.unique}" data-varitant-id="${item.id}_${j}">
        <div class="variant" data-variant="${variant.name.en}" data-name="${item.name.jp}"><span class="brackets">${variant.name.jp}</span></div>
        <img class="item-image" src="assets/img/1.10.0/${variant.image}" alt="">
      </li>
    `;
  }

  html += `
      </ul>
    </li>
    `;

  }
}

let arr = [];
for (let i = 0; i < newData.length; i++) {
  let item = newData[i];
  arr.push(item.obtained.en);
}

$('#js-item-list').html(html);
