const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

//compile scss to css
const style = () => {
  //find scss-file
  return gulp.src('./assets/scss/**/*.scss')
    //pass it through compiler
    .pipe(sass()).on('error', sass.logError)
    //save it to css file
    .pipe(gulp.dest('./assets/css'))
    //stream changes to all browsers
    .pipe(browserSync.stream())
}

// watch for changes
const watch = () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./assets/scss/**/*.scss', style)
  gulp.watch('./index.html').on('change', browserSync.reload)
  gulp.watch('./assets/js/**/*.js').on('change', browserSync.reload)
}


exports.watch = watch
exports.style = style;