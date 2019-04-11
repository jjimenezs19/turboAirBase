const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync').create(),
        useref = require('gulp-useref'),
        cleanCSS = require('gulp-clean-css'),
        autoprefixier = require('gulp-autoprefixer'),
        uglify = require('gulp-uglify'),
        plumber = require('gulp-plumber'),
        uncss = require('gulp-uncss');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(plumber(function(error) {
            // Output an error message
            console.log('We have an Error on (' + error.plugin + '): ' + error.message);
            // emit the end event, to properly end the task
            this.emit('end');
        }))
        .pipe(sass())
        .pipe(autoprefixier())
        .pipe(cleanCSS())
        .pipe(useref())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass'])
    gulp.watch('app/*.html', browserSync.reload)
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('unCss', function () {
    return gulp.src('app/css/**/*.css')
        .pipe(uncss({
            html: ['http://localhost:3000/', 'index.html']
        }))
        .pipe(gulp.dest('app/css'))
});