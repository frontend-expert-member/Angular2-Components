var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config')();
var bs = require("browser-sync");

gulp.task('sass', function() {
    return gulp.src(config.assetsPath.styles + 'style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.assetsPath.styles))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('watch-sass', function() {
    gulp.watch(config.assetsPath.styles + '**/*.scss', ['sass']);
});