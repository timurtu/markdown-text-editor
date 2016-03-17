/**
 * Created by timur on 3/16/2016.
 */
const gulp = require('gulp');
const changed = require('gulp-changed');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('build', ['main', 'js', 'sass']);

/**
 * Watch for changes and rebuild only those changes.
 */
gulp.task('watch', ['build'], function () {
  gulp.watch('src/**/*', ['build']);
});

/**
 * Transpile the main javascript file separately because
 * it is required in the root of an electron app.
 */
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
