const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const header = require('gulp-header');

const pkg = require('./package.json');

// Header Copyright Content For Minify File
const banner = `/*
 * ${pkg.name} - ${pkg.description}
 * @author ${pkg.author.name}
 * @version ${pkg.version}
 * @license ${pkg.license}
 */
`;

// Compound cache test file for Travis test
gulp.task('test', function () {
    gulp.src(['./src/for-test.js', './src/list.js'])
        .pipe(concat('proxy-pac.test.js'))
        .pipe(gulp.dest('./test/'));
});

// Compound proxy-pac.js file
gulp.task('main', function () {
    gulp.src(['./src/list.js', './src/pac-main.js'])
        .pipe(concat('proxy-pac.js'))
        .pipe(gulp.dest('./dist/'));
});

// Minify file & Generate proxy-pac.min.js
gulp.task('min', function () {
    gulp.src('./dist/proxy-pac.js')
        .pipe(uglify())
        .pipe(header(banner))
        .pipe(rename({
            basename: 'proxy-pac',
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/'));
});

// Default task
gulp.task('default', ['main', 'min']);
