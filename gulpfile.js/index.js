'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const htmlBeautify = require('gulp-html-beautify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const sassImporter = require('sass-module-importer');
const autoprefixer = require('gulp-autoprefixer');
const webPack = require('webpack');
const webpack = require('webpack-stream');

// No need yet
// "babel": "^6.23.0",
// "babel-core": "^6.26.3",
// "babel-preset-env": "^1.7.0",
// "babel-register": "^6.26.0",
// "gulp-notify": "^3.2.0",
// "gulp-wait": "0.0.2",
// "gulp-watch": "^5.0.1",


// Paths
const dirs = {
  pug: './src/pug/**/*.pug',
  scss: './src/scss/**/*.scss',
  styles: './src/scss/styles.scss',
  js: './src/js/**/*.js',
  dist: './dist'
};

// Webpack config
const webpackConfig = {
  entry: {
    city: './src/js/city.js',
    branch: './src/js/branch.js',
    dummy: './src/js/dummy.js',
    scripts: './src/js/scripts.js',
    investment: './src/js/investment.js',
    scriptsUS: './src/js/scriptsUS.js',
    scriptsPL: './src/js/scriptsPL.js',
    scriptsME: './src/js/scriptsME.js'
  },

  output: {
    filename: '[name].js'
  },

  mode: 'production',
  //mode: 'development'

  plugins: [
    new webPack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
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
    .pipe(csso({comments: 'exclamation'}))
    .pipe(gulp.dest(dirs.dist))
    .pipe(browserSync.reload({stream: true}))
);


/**
 * Compiles js files
 */
let scripts = () => (
  gulp.src(dirs.js)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(dirs.dist))
);


/**
 * Runs browserSync server
 * @param {Function} done callback
 */
let browserSyncInit = () => {
  browserSync.init({
    server: {
      baseDir: dirs.dist
    },
    port: 3000
  });
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
let watch = () => {
  browserSyncInit();

  gulp.watch(dirs.pug, gulp.series(pugRender, browserSyncReload));
  gulp.watch(dirs.scss, gulp.parallel(styles));
  gulp.watch(dirs.js, gulp.series(scripts, browserSyncReload));
};


exports.pugRender = pugRender;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
