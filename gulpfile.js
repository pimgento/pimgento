/* ==========================================
 *
 *  Author: Agence Dn'D
 *
 * ==========================================/

/* ==========================================
    GULP LIBRARIES
   ========================================== */

const gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

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
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['scss'],
            outputStyle: 'expanded'
        }))
        .pipe(prefix(
            "last 1 version", "> 1%", "ie 8", "ie 7"
        ))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['sass']);
});