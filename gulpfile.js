var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync");
var concat = require("gulp-concat");
var uglify = require("gulp-uglifyjs");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var del = require("del");

gulp.task("clean", function () {
  return del.sync('dist')
});

gulp.task("sass-compile", function () {
  return gulp
    .src("./app/sass/**/*.sass")
    .pipe(sass())
    .pipe(gulp.dest("./app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("watch", ["browser-sync", "css-libs", "scripts"], function () {
  gulp.watch("./app/sass/**/*.sass", ["sass-compile"]);
  gulp.watch("./app/*.html", browserSync.reload);
  gulp.watch("./app/js/**/*.js", browserSync.reload);
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
    return gulp.src([
        "app/jquery/dist/jquery.min.js",
        "app/magnific-popup/dist/jquery.magnific-popup.min.js",
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
    
});

gulp.task("css-libs", ["sass-compile"], function () {
  return gulp.src('app/css/main.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
});

gulp.task("build", ["clean", "sass-compile", "scripts"], function () {
  
  var buildCss = gulp.src([
    './app/css/main.css',
    './app/css/libs.min.css'
  ])
  .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src("app/js/**/*")
    .pipe(gulp.dest("dist/js"));

  var buildHtml = gulp.src("app/*.html")
    .pipe(gulp.dest("dist"));
});