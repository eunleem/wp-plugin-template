const gulp = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const zip = require('gulp-zip');

const outputDir = "dist/";

gulp.task('php', function() {
  return gulp.src('src/**/*.php')
    .pipe(gulp.dest(outputDir))
});

gulp.task('html', function() {
  return gulp.src('src/assets/**/*.html')
    .pipe(gulp.dest(outputDir+"assets/"))
});

gulp.task('img', function() {
  return gulp.src('src/assets/img/**')
    .pipe(gulp.dest(outputDir+"assets/img"))
});

gulp.task('script', function() {
  return gulp.src('src/assets/js/frontend')
    .pipe(plumber())
    .pipe( webpack( require('./webpack.config.js') ) )
    .pipe(gulp.dest(outputDir + 'assets/js/'))
});

gulp.task('scss', function() {
  return gulp.src('src/assets/css/**/*.scss')
    .pipe(sass({
      // outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest(outputDir + 'assets/css/'))
});

gulp.task('zip', () =>
    gulp.src('dist/**/*')
        .pipe(zip('wp-plugin-template.zip'))
        .pipe(gulp.dest('./'))
);

gulp.task('newzip', ['php', 'script', 'scss', 'html'], () => {
  gulp.start('zip');
});


gulp.task('watch', ['php', 'script', 'scss', 'html', 'img'], function() {
  gulp.watch('src/**/*.php', ['php']);

  gulp.watch('src/assets/js/**', ['script']);
  gulp.watch('src/assets/img/**', ['img']);
  gulp.watch('src/assets/css/**', ['scss']);

  gulp.watch('src/assets/**/*.html', ['html']);
});


gulp.task('default', ['php', 'script', 'scss', 'html', 'img'], function() {
});
