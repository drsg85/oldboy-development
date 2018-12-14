import gulp from 'gulp';
import { onError } from 'gulp-notify';
import webpack from 'webpack-stream';

const config = {
  entry: {
    main: './src/js/main.js',
    city: './src/js/city.js',
    branch: './src/js/branch.js',
    dummy: './src/js/dummy.js',
    scripts: './src/js/scripts.js'
  },

  output: {
    filename: '[name].js'
  },

  // mode: 'production'
  mode: 'development'
};

const dirs = {
  js: './src/js/**/*.js',
  dest: './dist'
};

gulp.task('scripts', function () {
  return gulp.src(dirs.js)
    .pipe(webpack(config))
    .on('error', onError((error) => {
      return {
        title: 'Scripts',
        message: error.message
      };
    }))
    .on('error', (error) => {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(dirs.dest));
});