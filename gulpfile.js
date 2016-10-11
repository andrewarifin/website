// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

gulp.task('jade',function(){
  return gulp.src('views/**/*.jade')
  .pipe(livereload())
});

gulp.task('css',function(){
  return gulp.src('public/stylesheets/**/*.css')
  .pipe(livereload())
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('public/stylesheets/**.css', ['css'])
  gulp.watch('views/**/*.jade', ['jade'])
})


gulp.task('server', function(){
  nodemon({
    'script': 'bin/www',
    'ignore': 'public/js/*.js'
  })
})

gulp.task('serve', ['server', 'watch']);
