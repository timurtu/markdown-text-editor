/**
 * Created by timur on 7/2/16.
 */

const path = require('path')
const exec = require('child_process').exec
const del = require('del')
const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const eslint = require('gulp-eslint')

const paths = {
  in: {
    all: 'src/**/*',
    js: path.resolve('src/**/*.js'),
    html: path.resolve('src/**/*.html'),
    sass: path.resolve('src/**/*.scss')
  },
  out: {
    all: 'dist',
    main: 'dist/main.js'
  },
  electron: 'node_modules/.bin/electron',
  notNodeModules: '!node_modules/**/*'
}


gulp.task('default', ['clean', 'lint', 'watch'])

gulp.task('clean', () => {
  return del(paths.out.all)
})

gulp.task('lint', ['clean'], () => {
  return gulp.src(paths.in.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('watch', ['clean', 'lint', 'electron'], () => gulp.watch(paths.in.all, ['build']))

gulp.task('electron', ['clean', 'lint', 'build'], () => {
  exec(`${paths.electron} ${paths.out.main}`, (err, stdout, stderr) => {
    if (err) {
      throw err
    }
    gutil.log(`stdout: ${stdout}`)
    gutil.log(`stderr: ${stderr}`)
  })
})

gulp.task('build', ['clean', 'lint', 'transpile', 'sass', 'copy'])

gulp.task('transpile', ['clean', 'lint'], () => {
  return gulp.src(paths.in.js)
    .pipe(babel())
    .pipe(gulp.dest(paths.out.all))
})

gulp.task('sass', ['clean', 'lint'], () => {
  return gulp.src(paths.in.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.out.all))
})

gulp.task('copy', ['clean', 'lint'], () => {
  return gulp.src([paths.in.html])
    .pipe(gulp.dest(paths.out.all))
})
