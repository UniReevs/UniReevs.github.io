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
  active: 'is-active'
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

$(element.nav.main)
.on('click', element.menu, function(event) {
  event.preventDefault();
  let $this = $(this),
      value = $this.data('category'),
      $parent = $this.parent();
  $('.menu').removeClass(className.active);
  $parent.addClass(className.active);
  $(element.itemList).attr('data-category', value);
})

.on('click', element.view, function(event) {;
  event.preventDefault();
  let $this = $(this),
      value = $this.data('view');
  $(element.view).removeClass(className.active);
  $this.addClass(className.active);
  $(element.itemList).attr('data-view', value);
})
