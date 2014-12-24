var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var streamify = require('gulp-streamify');
//var sass = require('gulp-sass');
//var prefix = require('gulp-autoprefixer');

gulp.task('scripts', function() {
  browserify('./src/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build'));
});
