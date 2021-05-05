const element = {
  option: {
    speed: '#js-animation-speed',
    rotateBy: '#js-rotate-by'
  },
  slider: {
    range: '.js-slider',
    text: '.js-slider-number',
    axisX: '#js-x',
    axisY: '#js-y',
    axisZ: '#js-z',
  },
  shape: '.js-shape',
  userInput: '.user-input',
  button: {
    rotate: '.js-rotate-button',
    reset: '#js-reset'
  }
};

let value = {
  option: {
    speed: $(element.option.speed).val(),
    rotateBy: $(element.option.rotateBy).val()
  },
  rotate: {
    x: $(element.slider.axisX).val(),
    y: $(element.slider.axisY).val(),
    z: $(element.slider.axisZ).val()
  }
}

function debugLog() {
  console.log(value.rotate, value.option);
}

function isNumber(value) {
  return isNaN(value) ? false : true;
}

function validateRange(value) {
  if (isNumber(value)) {
    value = (value < 0) ? 0 : value;
    value = (value > 360) ? 360 : value;
  } else {
    value = 0;
  }
  return value;
}

function updateCssTransform() {
  $(element.shape).css('transform', 'rotateX('+value.rotate.x+'deg) rotateY('+value.rotate.y+'deg) rotateZ('+value.rotate.z+'deg)');
}

function updateCssAnimationSpeed() {
  $(element.shape).css('transform', 'transform '+value.option.speed+'s');
}

function updateRotationValues() {
  value.rotate.x = $(element.slider.axisX).val();
  value.rotate.y = $(element.slider.axisY).val();
  value.rotate.z = $(element.slider.axisZ).val();
}

function syncUserInput($element, value) {
  $element.siblings(element.userInput).val(value);
}

function updateRotateByValue($element) {
  value.option.rotateBy = validateRange($element.val());
}

function resetValues() {
  value.rotate.x = 0;
  value.rotate.y = 0;
  value.rotate.z = 0;
  $(element.slider.range).val(0);
  $(element.slider.text).val(0);
}


$(element.slider.range).on('input', function() {
  let $this = $(this),
  value = $this.val();
  $this.trigger('change');
  syncUserInput($this, value);
  updateRotationValues();
  updateCssTransform();
});

$(element.slider.text).on('keyup', function() {
  let $this = $(this),
      value = $this.val();

  switch (event.key) {
    case 'ArrowLeft':
    value = value - 10;
    break;

    case 'ArrowRight':
    value = 1 * value + 10;
    break;

    case 'ArrowUp':
    value++;
    break;

    case 'ArrowDown':
    value--;
    break;
  }

  value = validateRange(value);
  $this.val(value);
  syncUserInput($this, value);
  updateRotationValues();
  updateCssTransform();
});


$(element.option.rotateBy).on('keyup', function() {
  updateRotateByValue($(this));
  // value.option.rotateBy
  /*
  1. get rotateBy value
  2. check which axis
  3. check if its + || -
  4. get axis value and
     if + : value.rotate[''] + value.option.rotateBy
     if - : value.rotate[''] - value.option.rotateBy

     syncInputs

     updateCSS


  */
});


$(element.button.rotate).on('click', function() {
  let $this = $(this),
      target = $this.data('target'),
      axis = $this.data('axis');


});

$(element.userInput).on('click', function() {
  $(this).select();
});

$(element.button.reset).on('click', function() {
  resetValues();
  updateCssTransform();
});
