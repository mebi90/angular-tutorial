var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch');
 
gulp.task('test', function () {
	connect.server({
    	root: ['app'],
    	port: 9000,
    	livereload: true
  	});
});

gulp.task('livereload', function () {
    watch('app/**/*')
        .pipe(connect.reload());
});
