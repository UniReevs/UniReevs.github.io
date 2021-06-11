  const data = csv_tops;
  let newData = [];

  let index = 0,
      prevID = 0,
      category = 'tops',
      categoryV = '_Tops_';

  let variants = [];

  const itemID = 'ClothGroupID',
      variantID = 'InternalID';


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
          jp: getTranslation(fashionNames[category], prevItem[itemID])
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

    variants.push({
      id: item[variantID],
      name: {
        en: item.Variation,
        jp: getTranslation(fashionVariants[category], item[itemID]+categoryV+item[variantID])
      },
      fileName: item.Filename
    });
  }
  console.log(newData);

function createList(data) {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    let item = data[i],
        isTrue = item.source.en === 'Able Sisters';

    if (isTrue) {
        html += `

        <li class="item" data-category="${item.category}" data-id="${item.id}">
          <div class="item-header">
            <div class="name">${item.name.jp}</div>
            <div class="name en">${item.name.en}</div>
            <div class="count">${item.variants.length}</div>
            <div class="info">
              <i class="category"></i>
              <i class="icon"></i>
              <i class="map">${item.map}</i>
            </div>
            <ul class="variants">
        `;

      for (let j = 0; j < item.variants.length; j++) {
        let variant = item.variants[j];
        if (item.count !== 1) {
          html += `
          <li class="variant">
            <div class="name">${variant.name.jp}</div>
            <div class="name en">${variant.name.en}</div>
            <img src="assets/img/1.10.0/FtrIcon/${variant.fileName}.png">
          </li>
          `;
        } else  {
        html += `
          <li class="variant">
            <img src="assets/img/1.10.0/FtrIcon/${variant.fileName}.png">
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
let html = createList(fashion.shoes.sort(compareValues('count')));
$('#js-item-list').html(html);
