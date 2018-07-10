const gulp = require('gulp');
const pug = require('gulp-pug');
const notify = require('gulp-notify');

gulp.task('pugRender', () => {
    return gulp.src('./src/pug/*.pug')
        .pipe(pug())
        .on('error', notify.onError((error) => {
            return {
                title: "Pug",
                message: error.message
            };
        }))
        .on('error', (error) => {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./dist'));
});