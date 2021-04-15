const bones = humanBones;
for (let i = 0; i < bones.length; i++) {
  let division = bones[i],
  regions = division.list;
  headingLevel = 2;
  html += '<li>';
  html += createOpenCloseToggle(division);
  html += createHeading(division, 2);

  html += '<ol>';
  for (let j = 0; j < regions.length; j++) {
    let region = regions[j];
    html += createOpeningBlock(region, 3);

    if (hasListOfBones(region)) {
      html += createListOfBones(region.bones, 4);
    }
    else {
      let sections = region.list;
      html += `
      <ol>`;
      for (let k = 0; k < sections.length; k++) {
        let section = sections[k];
        html += createOpeningBlock(section, 4);

        if (hasListOfBones(section)) {
          html += createListOfBones(section.bones, 5);
        } else {
          let groups = section.list;
          html += '<ol>';
          for (let l = 0; l < groups.length; l++) {
            let group = groups[l];
            html += createOpeningBlock(group, 5);

            if (hasListOfBones(group)) {
              html += createListOfBones(group.bones, 6);
            }
            html += '</li>'
          }
          html += '</ol>';
        }
        html += '</li>';
      }
      html += '</ol>';
    }
html += '</li>';
}
html += '</ol>';
html += '</li>';
}

$('#js-nav').html(html);
// $('#js-image-gallery').html(htmlImages);

// console.log(htmlImages)
