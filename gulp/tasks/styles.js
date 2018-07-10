import gulp from 'gulp';
import sass from 'gulp-sass';
import { onError } from 'gulp-notify';
import sassImporter from 'sass-module-importer';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('styles', () => {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ importer: sassImporter() }))
        .on('error', onError((error) => {
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