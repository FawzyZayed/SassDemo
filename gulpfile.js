// gulp file js
    'use strict';
    var gulp = require('gulp');
    var sass = require('gulp-sass');

// SCSS to CSS Converter 
    gulp.task('sass', function () {
        return gulp.src('SassDemo/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('SassDemo/assets/css'))
    });
// Watch task for SCSS
    gulp.task('sass:watch', function () {
        gulp.watch('SassDemo/assets/scss/styles.scss', ['sass']);
    });


