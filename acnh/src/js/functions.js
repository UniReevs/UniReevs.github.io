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

function trimData(data) {
  for (var i = 0; i < data.length; i++) {
    let item = data[i];
    if (parseInt(item.label) === NaN) {
      conosole.log(item.label)
    }
  }
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
    ttt.push({
      label: item.label,
      en: item.English,
      jp: item.Japanese
    })

  }
  return newData;
}

function createNpcMenu() {
  let html = '';
  for (var i = 0; i < npcNames.length; i++) {
    let npc = npcNames[i];
    html += `
    <div class="menu">
      <a href="#" class="js-menu" data-category="${npc.en}">
        <span class="menu-text">${npc.jp}</span>
        <img src="assets/img/1.10.0/NpcIcon/${npc.label}.png" alt="">
      </a>
    </div>
    `;
  }
  $('#js-npc-nav').html(html);
}
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
        isTrue = item.source.en === 'Able Sisters';
        // isTrue = true;

    if (isTrue) {
        html += `
        <li class="item" data-category="${item.category}" data-id="${item.id}" data-source="${item.source.en}">
          <div class="item-header">
            <div class="name en">${item.name.en}</div>
            <div class="info">
              <div class="count">${item.variants.length}</div>
              <i class="category"></i>
              <i class="icon"></i>
              <i class="map">${romanize(item.map)}</i>
            </div>
            <ul class="variants">
        `;

      for (let j = 0; j < item.variants.length; j++) {
        let variant = item.variants[j];
        let hasPattern = false;
        // if (item.count !== 1) {
          html += `
          <li class="variant">
            <img src="assets/img/1.10.0/FtrIcon/${variant.fileName}.png">
          </li>
          `;

            // <div class="name">${variant.name.jp}</div>
            // <div class="name en">${variant.name.en}</div>
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
