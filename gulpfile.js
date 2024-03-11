var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync");
var concat = require("gulp-concat");
var uglify = require("gulp-uglifyjs");

gulp.task("sass-compile", function () {
  return gulp
    .src("./app/sass/**/*.sass")
    .pipe(sass())
    .pipe(gulp.dest("./app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", ["browser-sync", "sass-compile", "scripts"], function () {
  gulp.watch("./app/sass/**/*.sass", ["sass"]);
});

gulp.task("browser-sync", function () {
  browserSync({
    server: {
      baseDir: "app",
    },
    notify: false,
  });
});

gulp.task("scripts", function () {
    gulp.src([
        "app/jquery/dist/jquery.min.js",
        "app/magnific-popup/dist/jquery.magnific-popup.min.js",
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
    
});
