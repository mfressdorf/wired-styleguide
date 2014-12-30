var gulp = require("gulp");

var concat = require("gulp-concat");

gulp.task("css", function() {
    return gulp.src("css/*.css")
        .pipe(concat("styleguide/wired.css"))
        .pipe(gulp.dest(""));
});

gulp.task("default", ["css"]);