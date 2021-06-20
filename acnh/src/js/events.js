// let observer = new intersectionObserver(function(entries, self) {
//   // iterate over each entry
//   entries.forEach(entry => {
//     // process just the images that are intersecting.
//     // isIntersecting is a property exposed by the interface
//     if(entry.isIntersecting) {
//       // custom function that copies the path to the img
//       // from data-src to src
//       preloadImage(entry.target);
//       // the image is now in place, stop watching
//       self.unobserve(entry.target);
//     }
//   });
// });

// const imgs = document.querySelectorAll('[data-src]');
// imgs.forEach(img => {
//   observer.observe(img);
// });

const className = {
  active: 'is-active',
  selected: 'is-selected'
},
element = {
  nav: {
    main: '#js-main-nav'
  },
  itemList: '#js-item-list',
  menu: '.js-menu',
  view: '.js-switch-view'
};


// function changeActiveMenu(className, targetElement) {
//   $(targetElement).removeClass(className);
//   $(this).addClass(className);
// }
let filterList = [
  'everything',
  'bags',
  'swimwear',
  'miscellaneous',
  'housewares',
  'villagers',
  'materials',
  'bottoms',
  'tops',
  'art',
  'recipes',
  'dresses',
  'umbrellas',
  'wall-mounted',
  'fossils',
  'tools',
  'headwear',
  'floors',
  'photos',
  'music',
  'events',
  'shoes',
  'rugs',
  'posters',
  'accessories',
  'socks',
  'wallpaper',
  'special',
  'fencing'
];
$(element.nav.main)
.on('click', element.menu, function(event) {
  event.preventDefault();
  let $this = $(this),
      attribute = 'data-'+$this.data('category'),
      $parent = $this.parent();
  $('.menu').removeClass(className.active);
  $parent.addClass(className.active);

  for (var i = 0; i < filterList.length; i++) {
    $('#js-category-filter').attr('data-'+filterList[i], false);
  }

  $('#js-category-filter').attr(attribute, true);
})

.on('click', element.view, function(event) {;
  event.preventDefault();
  let $this = $(this),
      value = $this.data('view');
  $(element.view).removeClass(className.active);
  $this.addClass(className.active);
  $(element.itemList).attr('data-view', value);
});

$('#js-item-list').on('click', '.js-user-input', function(event) {
  event.stopPropagation();
});

$('#js-item-list').on('click', '.item-pattern, .item-variant', function() {
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

$('#js-npc-nav').on('click', '.js-not', function() {
  $(this).parents('.js-menu').attr('data-filter', 'not');
}).on('click', '.js-and', function() {
  $(this).parents('.js-menu').attr('data-filter', 'and');

}).on('click', '.js-only', function() {
  $(this).parents('.js-menu').attr('data-filter', 'only');
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

