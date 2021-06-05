const className = {
  active: 'is-active'
},
element = {
  nav: {
    main: '#js-main-nav'
  },
  itemList: '#js-item-list',
  menu: '.js-menu'
};

$(element.nav.main).on('click', element.menu, function(event) {
  event.preventDefault();
  let $this = $(this),
  category = $this.data('category'),
  $parent = $this.parent();
  $('.menu').removeClass(className.active);
  $parent.addClass(className.active);
  $(element.itemList).attr('data-category', category);
});


