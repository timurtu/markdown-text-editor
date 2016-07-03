/**
 * Created by timur on 7/2/16.
 */

const path = require('path')
const exec = require('child_process').exec

const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const del = require('del')
const gutil = require('gulp-util')


const paths = {
  in: {
    all: path.resolve('src/**/*'),
    js: path.resolve('src/**/*.js'),
    html: path.resolve('src/**/*.html'),
    sass: path.resolve('src/**/*.scss')
  },
  out: {
    all: 'dist',
    main: 'dist/main.js'
  },
  electron: 'node_modules/.bin/electron'
}

gulp.task('watch', ['electron'], () => {
  gulp.watch(paths.in.all, ['build'])
})

gulp.task('electron', ['build'], () => {

  return new Promise((resolve, reject) => {
    exec(`${paths.electron} ${paths.out.main}`, (err, stdout, stderr) => {

      if (err) {
        throw err
      }

      gutil.log(gutil.colors.magenta(stdout))

      gutil.log(gutil.colors.magenta(stderr))

    })
  })
})


gulp.task('build', ['transpile', 'sass', 'copy'])

gulp.task('transpile', () => {

  return gulp.src(paths.in.js)
    .pipe(babel())
    .pipe(gulp.dest(paths.out.all))

})

gulp.task('sass', () => {

  return gulp.src(paths.in.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.out.all))
})

gulp.task('copy', () => {

  return gulp.src([paths.in.html])
    .pipe(gulp.dest(paths.out.all))

})

gulp.task('clean', () => {

  return del(paths.out.all)
})