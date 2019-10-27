let gulp = require('gulp');
let postcss = require('gulp-postcss');
let customMedia = require('postcss-custom-media');
let postcssImport = require('postcss-import');
let extend = require('postcss-extend-rule');
let autoprefixer = require('autoprefixer');
let nesting = require('postcss-nesting');
let variables = require('postcss-css-variables');
let gradients = require('postcss-easing-gradients');

gulp.task('css', function () {

    let plugins = [
        postcssImport({ root: '/src/css/' }),
        nesting,
        extend,
        customMedia({
            importFrom: '/home/spacedoc/projects/blog/web/themes/custom/blogtheme/src/css/variables.css',
        }),
        autoprefixer({grid: true}),
        variables(),
        gradients
    ];

    return gulp.src('src/css/**/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    gulp.watch('src/css/**/*.css', gulp.series('css'));
});

function defaultTask(cb) {

    cb();
}
exports.default = defaultTask

