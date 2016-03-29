"use strict";

const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('default', function () {
  return gulp.src('lib/eventcontroller.js')
    .pipe(rename('lib/eventcontroller.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});