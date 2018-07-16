import gulp from 'gulp';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';

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
    // watch('./src/pug/**/*.pug', () => {
        
    // });
});
