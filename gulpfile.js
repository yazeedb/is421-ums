var gulp = require('gulp'),
	less = require('gulp-less'),
	nodemon = require('gulp-nodemon');

var cssPath = './public/assets/style';

gulp.task('compileLess', function () {
	return gulp.src(cssPath + '/style.less')
		.pipe(less())
		.pipe(gulp.dest(cssPath));
});

gulp.task('watchLess', function () {
	gulp.watch(cssPath + '/style.less', ['compileLess']);
});

gulp.task('startServer', function () {
	nodemon({ script: 'server.js' });
});

gulp.task('default', Object.keys(gulp.tasks));