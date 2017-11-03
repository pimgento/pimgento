/* ==========================================
 *
 *  Gulpfile.js for Magento 1 custom theme
 *  Author: Agence Dn'D
 *
 *    Table of content :
 *
 *    - GULP LIBRARIES
 *        > gulp
 *        > gulp-compass
 *        > gulp-image-optimization
 *        > browserSync
 *
 *    - SOURCE FILE PATHS
 *    - WATCHED TASKS LIST
 *        > Compass task
 *        > Watch task
 *        > Default task
 *    - MANUAL TASKS LIST
 *        > Image optimization
 *
 * ==========================================/

/* ==========================================
    GULP LIBRARIES
   ========================================== */

const gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

/* ==========================================
    SOURCE FILE PATHS
   ========================================== */

const paths = {
    scss: ['scss/*.scss', 'scss/*/*.scss', 'scss/*/*/*.scss', 'scss/*/*/*/*.scss'],
    scripts: [
        'js/**/*.js',
        '!js/_vendor/**/*.js',
        '!js/_includes/**/*.js'
    ]
};

/* ==========================================
    WATCHED TASKS LIST
   ========================================== */

gulp.task('sass', function (){
    gulp.src(['scss/*.scss'])
        .pipe(sass({
            includePaths: ['scss'],
            outputStyle: 'expanded'
        }))
        .pipe(prefix(
            "last 1 version", "> 1%", "ie 8", "ie 7"
        ))
        .pipe(gulp.dest('css'));
});

gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['sass']);
});