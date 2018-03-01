const gulp = require('gulp');
const xlsx2Json = require('./gulp-task/xlsx2Json');

gulp.task('build', () => xlsx2Json.build('./xlsx/sample.xlsx', 'dist'));
