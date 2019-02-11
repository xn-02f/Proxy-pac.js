const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const header = require('gulp-header');
const del = require('del');

const pkg = require('./package.json');

// Header Copyright Content For Minify File
const banner = `/*! ${pkg.name} | ${pkg.license} | ${pkg.version} - ${pkg.description}  */`;

// Clean build and cache files
gulp.task('clean', async () => {
    await del('dist');
});
gulp.task('clean').description = 'Clean build and cache files';

// Compound cache test file for test tools.
gulp.task('test', async () => {
    await gulp.src(['./src/list.js', './src/for-test.js'])
              .pipe(concat('proxy-pac.test.js'))
              .pipe(gulp.dest('./test/'));
    await gulp.src(['./src/gfwlist.js', './src/for-test.js'])
              .pipe(concat('gfwlist.test.js'))
              .pipe(gulp.dest('./test/'));
});
gulp.task('test').description = 'Compound cache test file for Travis test';

// Compound proxy-pac.js file
gulp.task('main', async () => {
    await gulp.src(['./src/list.js', './src/pac-main.js'])
              .pipe(concat('proxy-pac.js'))
              .pipe(gulp.dest('./dist/'));
});
gulp.task('main').description = 'Compound proxy-pac.js file';

// Minify file & Generate proxy-pac.min.js
gulp.task('min', async () => {
    await gulp.src('./dist/proxy-pac.js')
              .pipe(uglify())
              .pipe(header(banner))
              .pipe(rename({
                  basename: 'proxy-pac',
                  suffix: '.min'
              }))
              .pipe(gulp.dest('./dist/'));
});
gulp.task('min').description = 'Minify file & Generate proxy-pac.min.js';

// Default task
// gulp.task('default', gulp.series('main', gulp.series('min')));
