/**
 * Created by timur on 3/16/2016.
 */
var gulp = require('gulp');
var changed = require('gulp-changed');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('default', ['main', 'js', 'sass']);

/**
 * Transpile the main javascript file separately because
 * it is required in the root of an electron app.
 * */
gulp.task('main', () => {

  const DEST = './';

  return gulp.src('src/main.js')
    .pipe(changed(DEST))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(DEST));

});

gulp.task('js', () => {

  const DEST = './dist/js';

  return gulp.src('src/js/**/*.js')
    .pipe(changed(DEST))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(DEST));

});

gulp.task('sass', () => {

  const DEST = './dist/css';

  return gulp.src('src/sass/**/*.scss')
    .pipe(changed(DEST))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(DEST));

});
