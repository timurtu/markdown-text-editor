/**
 * Created by timur on 3/16/2016.
 */
const gulp = require('gulp');
const changed = require('gulp-changed');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

const paths = {
  src: {
    all: 'src/**/*',
    main: 'src/main.js',
    js: 'src/js/**/*.js',
    sass: 'src/sass/**/*.scss'
  },
  dest: {
    main: './',
    js: './dist/js',
    sass: './dist/css'
  }
};

gulp.task('build', ['main', 'js', 'sass']);

/**
 * Watch for changes and rebuild only those changes.
 */
gulp.task('watch', ['build'], function () {
  gulp.watch(paths.src.all, ['build']);
});

/**
 * Transpile the main javascript file separately because
 * it is required in the root of an electron app.
 */
gulp.task('main', () => {
  return gulp.src(paths.src.main)
    // .pipe(changed(paths.dest.main))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.dest.main));
});

gulp.task('js', () => {
  return gulp.src(paths.src.js)
    // .pipe(changed(paths.dest.js))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.dest.js));
});

gulp.task('sass', () => {
  return gulp.src(paths.src.sass)
    // .pipe(changed(paths.dest.sass))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dest.sass));
});
