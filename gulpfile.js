var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('test', function () {
	connect.server({
    	root: ['app'],
    	port: 9000,
    	livereload: true
  	});
});