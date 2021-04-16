'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      clean = require('gulp-clean'),
      fileInclude = require('gulp-file-include');

sass.compiler = require('node-sass');

const basePaths = {
        src: 'src/',
        dest: 'assets/'
      },
      paths = {
        js: {
          src: basePaths.src + 'js/',
          dest: basePaths.dest + 'js/'
        },
        css: {
          src: basePaths.src + 'scss/',
          dest: basePaths.dest + 'css/'
        },
        html: {
          src: 'src/html/',
          dest: './'
        }
      };

const files = {
  js: [
    paths.js.src + 'vendor/jquery.js',
    paths.js.src + 'globals.js',
    paths.js.src + 'app.js'
  ],
  scss: [
    paths.css.src + '**/*.scss'
  ],
  html: [
    paths.html.src + '*.html',
    paths.html.src + '**/*.html'
  ]
}

let htmlPages = {
  src: [
    'src/html/pencil-grips.html',
    'src/html/basic-2d.html',
    'src/html/terminology.html',
    'src/html/index.html'
  ],
  dest: [
    'pencil-grips.html',
    'basic-2d.html',
    // 'basic-perspective.html',
    // 'basic-3d.html',
    // 'basic-shading.html',
    // 'anatomy.html',
    'terminology.html',
    'index.html'
  ]
}

gulp.task('clean', () => {
  return gulp.src(htmlPages.dest, {read: false})
    .pipe(clean());
});

gulp.task('html', () => {
  return gulp.src(htmlPages.src)
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('css', () => {
  return gulp.src(files.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css.dest));
});

gulp.task('js', () => {
  return gulp.src(files.js)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('watch', () => {
  gulp.watch(files.scss, gulp.task('css'));
  // gulp.watch(files.js, gulp.task('js'));
  gulp.watch(files.html, gulp.task('html'));
});

gulp.task('default', gulp.series(
    // 'clean',
    // gulp.parallel('css', 'js', 'html'),
    gulp.parallel('css', 'html'),
    'watch'
  )
);

/* ============================================== */
gulp.task('js', () => {
  return gulp.src([
      // paths.js.src + 'vendor/jquery.js',
      paths.js.src + 'dict.js'
    ])
    .pipe(concat('dict.js'))
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('watch', () => {
  gulp.watch(files.scss, gulp.task('css'));
  // gulp.watch(paths.js.src + 'dict.js', gulp.task('js:dict'));
  gulp.watch(files.html, gulp.task('html'));
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('css'),
    'watch'
  )
);
