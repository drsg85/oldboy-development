'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const htmlBeautify = require('gulp-html-beautify');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const sassImporter = require('sass-module-importer');
const autoprefixer = require('gulp-autoprefixer');

const dirs = {
  pug: './src/pug/**/*.pug',
  scss: './src/scss/**/*.scss',
  styles: './src/scss/styles.scss',
  dist: './dist'
};


/**
 * Renders html from pug
 */
let pugRender = () => (
  gulp.src(dirs.pug)
    .pipe(pug())
    .pipe(htmlBeautify())
    .pipe(gulp.dest(dirs.dist))
);


/**
 * Compiles scss files to styles.css
 */
let styles = () => (
  gulp.src(dirs.scss)
    .pipe(sass({ importer: sassImporter() }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(dirs.dist))
    .pipe(browserSync.stream())
);


/**
 * Runs browserSync server
 * @param {Function} done callback
 */
let browserSyncInit = (done) => {
  browserSync.init({
    server: {
      baseDir: dirs.dist
    },
    port: 3000
  });
  done();
};


/**
 * Reloads browserSync server
 * @param {Function} done callback
 */
let browserSyncReload = (done) => {
  browserSync.reload();
  done();
};


/**
 * Watches files for changes
 */
let watchFiles = () => {
  gulp.watch(dirs.pug, gulp.series(pugRender, browserSyncReload));
  gulp.watch(dirs.scss, gulp.series(styles));
};


const watch = gulp.parallel(watchFiles, browserSyncInit);

exports.pugRender = pugRender;
exports.styles = styles;