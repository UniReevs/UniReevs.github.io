'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      clean = require('gulp-clean'),
      fileInclude = require('gulp-file-include');

sass.compiler = require('node-sass');

const basePaths = {
        src: 'anatomy/src/',
        dist: 'anatomy/assets/'
      },
      paths = {
        js: {
          src: basePaths.src + 'js/',
          dist: basePaths.dist + 'js/'
        },
        css: {
          src: basePaths.src + 'scss/',
          dist: basePaths.dist + 'css/'
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
    'src/**/*.html'
  ]
}

gulp.task('clean', () => {
  return gulp.src(paths.css.dist, {read: false})
    .pipe(clean());
});

gulp.task('html', () => {
  return gulp.src(['./src/index.html', './src/dict.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('css', () => {
  return gulp.src(files.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css.dist));
});

gulp.task('js', () => {
  return gulp.src(files.js)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(paths.js.dist));
});

gulp.task('watch', () => {
  gulp.watch(files.scss, gulp.task('css'));
  gulp.watch(files.js, gulp.task('js'));
  gulp.watch(files.html, gulp.task('html'));
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('css', 'js', 'html'),
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
    .pipe(gulp.dest(paths.js.dist));
});

gulp.task('watch', () => {
  gulp.watch(files.scss, gulp.task('css'));
  // gulp.watch(paths.js.src + 'dict.js', gulp.task('js:dict'));
  // gulp.watch(files.html, gulp.task('html'));
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('css'),
    'watch'
  )
);
