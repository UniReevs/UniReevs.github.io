const className = {
  active: 'is-active',
  selected: 'is-selected'
},
element = {
  nav: {
    main: '#js-main-nav',
    source: '#js-source-nav',
    filter: {
      or: '.nav[data-search-type="or"]',
      and: '.nav[data-search-type="and"]',
      not: '.nav[data-search-type="not"]'
    }
  },
  mainContent: '#js-main',
  itemList: '#js-item-list',
  menu: '.js-menu',
  view: '.js-switch-view'
};

let currentSelected = {
  category: 'data-housewares',
  source: 'data-all'
};

function updateCurrentSelectedMenu(attribute, isMainNav) {
    $(element.mainContent).attr(currentSelected.category, 'false');
    $(element.mainContent).attr(currentSelected.source, 'false');
  if (isMainNav) {
    currentSelected.category = attribute;
  } else {
    currentSelected.source = attribute;
  }
  $(element.mainContent).attr(attribute, 'true');
}

$(element.nav.filter.or).on('click', element.menu, function(event) {
  event.preventDefault();
  let $this = $(this),
      attribute = $this.data('filter'),
      $menu = $this.parent('.menu'),
      $nav = $this.closest('.nav'),
      isMainNav = $nav.attr('id') === 'js-main-nav';
  $nav.find('.menu').removeClass(className.selected);
  $menu.addClass(className.selected);
  updateCurrentSelectedMenu(attribute, isMainNav);
});

$(element.itemList).on('click', '.item-pattern, .item-variant', function() {
  let $this = $(this),
      $parent = $this.parents('.item');
  $this.toggleClass(className.selected);
  let selectedVariants = $parent.find('.'+className.selected);
  if (selectedVariants.length) {
    $parent.addClass(className.selected);
  } else {
    $parent.removeClass(className.selected);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var lazyloadImages = document.querySelectorAll('.js-load-image');
  var lazyloadThrottleTimeout;

  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('js-load-image');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationChange', lazyload);
        }
    }, 20);
  }

  document.addEventListener('scroll', lazyload);
  window.addEventListener('resize', lazyload);
  window.addEventListener('orientationChange', lazyload);
});
