let gulp = require('gulp');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let nesting = require('postcss-nesting');


gulp.task('css', function () {

    let plugins = [
        nesting,
        autoprefixer()
    ];

    return gulp.src('src/css/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    gulp.watch('src/css/*.css', gulp.series('css'));
});

function defaultTask(cb) {

    cb();
}
exports.default = defaultTask

