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

function getTranslation(array, searchID) {
  let value = '';
  for (var i = 0; i < array.length; i++) {
    let label = parseInt(array[i].label),
        id = parseInt(searchID);
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

// function islandMap() {
//   let aaa = '';
//   for (var i = 0; i < 154; i++) {
//     aaa += `<li class="area area-${i+1}"></li>`
//   }
//   $('.island-map').html(aaa);
// }

// function csvTranlation() {
//   let  newData = [];
//   for (var i = 0; i < aaa.length; i++) {
//     let item = aaa[i];
//     newData.push({
//       label: item.label,
//       en: item.English,
//       jp: item.Japanese
//     })

//   }
//   console.log(newData)
// }
