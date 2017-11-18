var gulp        = require('gulp'),
    autoprefixer= require('gulp-autoprefixer'),
    concat      = require('gulp-concat'),
    livereload  = require('gulp-livereload'),
    notify      = require('gulp-notify'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify'),
    gulpif      = require('gulp-if'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    sassLint    = require('gulp-sass-lint'),
    sourcemaps  = require('gulp-sourcemaps');

var debug       = false;
var assets      = 'assets/';

gulp.task('styles', function() {
    var output = debug ? 'nested' : 'compressed';
    return gulp.src(assets + '/css/styles.scss')
        .pipe(gulpif(debug,sourcemaps.init()))
        .pipe(gulpif(debug,sassLint()))
        .pipe(gulpif(debug,sassLint.format()))
        .pipe(gulpif(debug,sassLint.failOnError()))
        .pipe(sass({errLogToConsole: true, outputStyle: output}).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%'] }))
        .pipe(gulpif(debug,sourcemaps.write()))
        .pipe(gulp.dest(assets + '/css'))
        .pipe(livereload())
        .pipe(notify({ message: 'CSS complete' }));
});
gulp.task('scripts', function() {
    return gulp.src(assets + '/js/contacts/*.js')
        .pipe(gulpif(!debug, uglify().on('error', swallowError)))
        .pipe(gulpif(debug,jshint()))
        .pipe(gulpif(debug,jshint.reporter(stylish)))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(assets + '/js'))
        .pipe(livereload())
        .pipe(notify({ message: 'JS complete' }));
});
gulp.task('watch', function() {
    livereload.listen();

    gulp.watch([assets + '/css/**/*.scss', assets + '/css/**/*.sass' ], ['styles'])
        .on('change', function(event) {
                console.log('File ' + event.path + ' was ' + event.type + ', running CSS task...');
            }
        );

    gulp.watch(assets + '/js/contacts/*.js', ['scripts'])
        .on('change', function(event) {
                console.log('File ' + event.path + ' was ' + event.type + ', running JS task...');
            }
        );
});

gulp.task('default', function() {
    gulp.start('styles','scripts','watch');
});

gulp.task('debug', function(){
    debug = true;
    gulp.start('styles', 'scripts');
});

/**
 * Handle errors and displays them in console
 * @param error
 */
function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}
