var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	nodemon = require('gulp-nodemon');

var cssPath = './public/assets/style';
var allAngularModules = './public/js/**/*.module.js',
	jsPath = './public/js/**/*.js';

var relativeJSAssets = [
	'jquery/dist/jquery.min.js',
	'bootstrap/dist/js/bootstrap.min.js',
	'angular/angular.js',
	'angular-ui-router/release/angular-ui-router.js'
];

gulp.task('concatJSAssets', function () {
	var fullJSAssets = makeLibPath(relativeJSAssets);

	return gulp.src(fullJSAssets)
			.pipe(concat('libs.js'))
			.pipe(gulp.dest('public/assets/libs'));
});

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

//function to create paths to all assets
function makeLibPath (assets) {
	//root path for libs folder
	var libsRootPath = 'public/assets/libs/';
	var i;
	var allAssetPaths = [];

	for (i = 0; i < assets.length; i++) {
		//path to current asset
		var assetPath = assets[i];

		//combine root path and current asset path
		var fullLibPath = libsRootPath + assets[i];

		//Add that to allAssetPaths array
		allAssetPaths.push(fullLibPath);
	}

	return allAssetPaths;
}