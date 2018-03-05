import gulp from 'gulp';
import xlsx2Json from './gulp-task/xlsx2Json';

gulp.task('build', () => xlsx2Json.build('./xlsx/sample.xlsx', 'dist'));
