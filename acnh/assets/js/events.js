const className = {
  active: 'is-active'
},
element = {
  nav: {
    main: '#js-main-nav'
  }
};

$(element.nav.main).on('click', 'a', function(event) {
  event.preventDefault();
  let $this = $(this),
  $parent = $this.parent();
  $('.menu').removeClass(className.active);
  $parent.addClass(className.active);
});

$('.js-menu').on('click', function(event) {
  event.preventDefault();
  let $this = $(this),
  $parent = $this.parent();
  $('.menu').removeClass(className.active);
  $parent.addClass(className.active);
});
