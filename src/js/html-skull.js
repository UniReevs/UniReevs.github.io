for (let i = 0; i < skullBones.length; i++) {
  let region = skullBones[i];
  headingLevel = 2;
  html += '<li>';
  html += createOpenCloseToggle(region);
  html += createHeading(region, 2);
  html += '<ol>';
  html += createListOfBones(region.bones, 6);
  html += '</ol>';
  html += '</li>';
}

$('#js-nav').html(html);
$('#js-image-gallery').html(htmlImages);

// console.log(htmlImages)
