$('input').on('click', function() {
  const clickedCheckbox = $(this),
  id = clickedCheckbox.attr('id'),
  correspondingLabel = 'label[for="'+id+'"]',
  classChecked = 'is-checked';

  if (clickedCheckbox.is(':checked')) {
    $(correspondingLabel).addClass(classChecked);
  } else {
    $(correspondingLabel).removeClass(classChecked);
  }
});

