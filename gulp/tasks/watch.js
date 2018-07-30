import gulp from 'gulp';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';
import { start } from 'repl';

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        // this is needed to move notify popup to bottom, cause it usually
        // overlaps page elements on its default position
        notify: {
            styles: { 
                top: 'auto',
                bottom: 0
            }
        }
    });

    // pug
    watch('./src/pug/**/*.pug', () => {
        gulp.start('pugChanged');
    });

    // style
    watch('./src/sass/**/*.scss', () => {
        gulp.start('cssInject');
    })
});

gulp.task('pugChanged', ['pugRender'], () => {
    browserSync.reload();
});

gulp.task('cssInject', ['styles'], () => {
    gulp.src('./dist/styles.css')
        .pipe(browserSync.stream());
});
