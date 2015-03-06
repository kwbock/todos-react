var gulp        = require('gulp'),
    browserify  = require('browserify'),
    concat      = require('gulp-concat'),
    reactify    = require('reactify'),
    source      = require("vinyl-source-stream");

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./app/assets/javascripts/application.js');
  return b.bundle()
    .pipe(source('application.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['browserify']);

gulp.task('watch', ['default'], function() {
  gulp.watch('app/assets/javascripts/**/*.*', ['default']);
});
