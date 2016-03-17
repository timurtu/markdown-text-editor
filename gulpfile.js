/**
 * Created by timur on 3/16/2016.
 */
var gulp = require('gulp');
var changed = require('gulp-changed');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('default', ['main', 'js', 'sass']);

gulp.task('main', () => {
  return gulp.src('src/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
