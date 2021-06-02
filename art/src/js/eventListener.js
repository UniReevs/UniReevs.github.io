const elements = {
  nav: $('#js-nav'),
  navControlls: $('#js-nav-controlls')
};

$(elements.nav).on('click', '.js-toggle', function(event) {
  event.preventDefault();
  $(this).closest('li').toggleClass(className.collapsed);

}).on('click', '.js-bone-name', function() {
  let checkboxState = $(this).prop('checked'),
      parent = $(this).closest('li'),
      userInputs = parent.find('.js-user-input');
  userInputs.prop('checked', checkboxState);
  checkboxState = !checkboxState;

}).on('click', '.js-left-bone', function() {
  let checkboxState = $(this).prop('checked'),
      sibling = $(this).sibling();
  if (sibling.prop('checked')) {

  } else {

  }

}).on('click', 'label', function() {
  $(this).toggleClass('off');

}).on('change', '.js-bone-name', function() {
  let targetId = $(this).data('target'),
      isChecked = $(this).prop('checked');
  if (isChecked) {
    $(targetId).removeClass(className.hidden)
  } else {
    $(targetId).addClass(className.hidden)
  }
})

$(elements.navControlls).on('click', '#js-nav-close-all', function() {
  $(elements.nav).find('li').addClass(className.collapsed);
}).on('click', '#js-nav-open-all', function(event) {
  event.preventDefault();
  $(elements.nav).find('li').removeClass(className.collapsed);
});

