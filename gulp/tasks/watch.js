import gulp from 'gulp';
import browserSync from 'browser-sync';
import watch from 'gulp-watch';
// import { start } from 'repl';

const dirs = {
  pug: './src/pug/**/*.pug',
  sass: './src/sass/**/*.scss',
  css: './dist/styles.css',
  js: './src/js/**/*.js'
};

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    // this is needed to move notify popup to bottom, cause it usually overlaps page elements on its default position
    notify: {
      styles: {
        top: 'auto',
        bottom: 0
      }
    }
  });

  // pug
  watch(dirs.pug, () => {
    gulp.start('pugChanged');
  });

  // style
  watch(dirs.sass, () => {
    gulp.start('cssInject');
  });

  // scripts
  watch(dirs.js, () => {
    gulp.start('jsChanged');
  });
});

// pug
gulp.task('pugChanged', ['pugRender'], () => {
  browserSync.reload();
});

// styles
gulp.task('cssInject', ['styles'], () => {
  gulp.src(dirs.css)
    .pipe(browserSync.stream());
});

// scripts
gulp.task('jsChanged', ['scripts'], () => {
  browserSync.reload();
});
