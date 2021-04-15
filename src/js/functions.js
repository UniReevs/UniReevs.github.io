function hasListOfBones(region) {
  return region.bones ? true : false;
}

function createOpenCloseToggle(bone) {
  let html = '',
      className = '';
  if (bone.collapsed) {
    // className = ' is-collapsed';
  }
  html += `
  <a href="#" class="toggle js-toggle${className}">
    <img class="close" src="src/img/icons/down.svg" alt="close">
    <img class="open" src="src/img/icons/right.svg" alt="open">
  </a>
  `;
  return html;
}

function createImages(bone) {
  let html = '';

  if (bone.unique) {
    html += `
      <input class="user-input js-user-input" id="${bone.image}" type="checkbox" checked>
      <img class="bone-image" src="src/img/resized/${bone.image}.png" alt="${bone.name}">
    `;
  } else {
    html += `
      <input class="user-input js-user-input" id="${bone.image}-l" type="checkbox" checked>
      <img class="bone-image" src="src/img/resized/${bone.image}-l.png" alt="${bone.name} - Left">
      <input class="user-input js-user-input" id="${bone.image}-r" type="checkbox" checked>
      <img class="bone-image" src="src/img/resized/${bone.image}-r.png" alt="${bone.name} - Right">
      `;
  }
  return html;
}

function createHeading(bone, headerTagLevel) {
  let id = bone.image ? `#${bone.image}` : 'child';

  let html = `
  <h${headerTagLevel} class="title">
    <label for="${bone.image}">
      <span class="fake-checkbox"></span>
      <span class="name">${bone.name}</span>
      <span class="nickname">${bone.nickname}</span>
    </label>
  </h${headerTagLevel}>
  `;
  return html;
}

function createIDs(bone) {
  let id = [];
  if (bone.unique) {
    id.push(bone.image);
  } else {
    id.push(bone.image + '-l');
    id.push(bone.image + '-r');
  }
  return id;
}

function createLeftRightToggle(bone) {
  let html = '',
      id = bone.image ? `#${bone.image}` : 'child';
  if (!bone.unique) {
    html = `
    <div class="paired-bones">
      <label for="${bone.image}-l"><span class="fake-checkbox"></span> Left</label>
      <label for="${bone.image}-r"><span class="fake-checkbox"></span> Right</label>
    </div>
    `;
  }
  return html;
}

function createListOfBones(bones, headerTagLevel) {
  let html = '<ol class="bones">';
  for (let i = 0; i < bones.length; i++) {
    let bone = bones[i];
    html += '<li class="bone">';
    html += createHeading(bone, headerTagLevel);
    html += createLeftRightToggle(bone);
    html += '</li>';
    htmlImages += createImages(bone);
  }
  html += '</ol>';
  return html;
}

function createOpeningBlock(bone, headerTagLevel) {
  let html = '',
      collapsed = bone.collapsed ? className.collapsed : '';
  html += `<li class="bones ${collapsed}">`;
  html += createOpenCloseToggle(bone);
  html += createHeading(bone, headerTagLevel);
  html += createLeftRightToggle(bone);
  return html;
}



/*for dev tool*/
// var aaa = $('.image-gallery .user-input');
// var bbb = [];
// for (var i = 0; i < aaa.length; i++) {
//   bbb.push($(aaa[i]).attr('id'));
// }
