const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const header = require('gulp-header');

const pkg = require('./package.json');

// Header Copyright Content For Minify File
const banner = [
    '/*',
    ' * ' + pkg.name + ' - ' + pkg.description,
    ' * @author ' + pkg.author.name + ' ' + pkg.author.email,
    ' * @version v' + pkg.version,
    ' * @license ' + pkg.license,
    ' */',
    ''
].join('\n');

// Travis Test
gulp.task('test', function () {
    gulp.src(['./src/list.js', './src/for-test.js', './src/pac-main.js'])
        .pipe(concat('proxy-pac.test.js'))
        .pipe(gulp.dest('./test/'));
});

// Compound proxy-pac.js File
gulp.task('main', function () {
    gulp.src(['./src/list.js', './src/pac-main.js'])
        .pipe(concat('proxy-pac.js'))
        .pipe(gulp.dest('./dist/'));
});

// Minify File & Generate proxy-pac.min.js
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

// Dev
gulp.task('devFile', function dev () {
    gulp.src(['./src/list.js', './src/pac-main.js'])
        .pipe(concat('proxy-pac.js'))
        .pipe(rename({
            basename: 'proxy-pac',
            suffix: '.dev'
        }))
        .pipe(gulp.dest('./dist/'));
});

// Dev Watch
gulp.task('dev', function() {
    gulp.watch('./src/*.js', ['devFile']);
});
