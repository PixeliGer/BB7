var gulp = require('gulp');
var minify = require('gulp-minify');
var plumber = require('gulp-plumber');

// Global Resources Directory
var resources = './resources/';
// Resources Paths
var paths = {
    js : resources + 'js/**/*.js',
    minJs: resources + "js/**/*.min.js",
    css: resources + "css/**/*.css",
    minCss: resources + "css/**/*.min.css",
    jsframeworks : resources + "js/Frameworks/*"
}

// Minify all js files individually
gulp.task("min:js", function () {
    return gulp.src([
        paths.js,
        "!" + paths.minJs,
        "!" + paths.jsframeworks,               // don't include Frameworks Directory
        "!" + resources + 'alertify.min.js',    // don't include alertify
        "!" + resources + 'autoNumeric.js',     // don't include autoNumeric
        "!" + resources + 'easytimer.min.js',   // don't include easytimer
        "!" + resources + 'vmouse.js',          // don't include vmouse
    ], { base: "." })
    .pipe(minify())
    .pipe(gulp.dest("."));
});
