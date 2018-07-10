const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const sassImporter = require('sass-module-importer');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ importer: sassImporter() }))
        .on('error', notify.onError((error) => {
            return {
                title: 'Styles',
                message: error.message
            }
        }))
        .on('error', (error) => {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'));
});