var gulp = require('gulp'),
  less = require('gulp-less'),
  path = require('path'),
  autoprefixer = require('gulp-autoprefixer')
  console.log()
gulp.task('v2', function () {
  return gulp.src('./example/v2/style/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
      cascade: false
    }))
    .pipe(gulp.dest('./example/v2/style'));
})

gulp.task('v1', function () {
  return gulp.src('./example/v1/style/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./example/v1/style'));
})

gulp.task('dev', ['v1', 'v2'], function () {
  gulp.watch(['src/v2/**'], ['v1', 'v2']);
  // watcher.on('change', function (event) {
  //   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  // });
})