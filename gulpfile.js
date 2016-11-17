var gulp = require('gulp'),
    connect = require('gulp-connect'),
    chimp = require('gulp-chimp'),
    karma = require('karma').Server;

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./app/src/**/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src('./app/assets/styles/**/*.css')
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('./app/src/**/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./app/assets/styles/**/*.css'], ['css']);
    gulp.watch(['./app/**/*.html'], ['html']);
    gulp.watch(['./app/src/**/*.js',], ['js']);
});

gulp.task('bdd', ['connect'], function() {
    return chimp({
        features: './test/bdd', // Cucumber features files
        browser: 'phantomjs',
        singleRun: true,
        debug: false,
        output: {
            screenshotsPath: './e2e_output/screenshots',
            jsonOutput: './e2e_output/cucumber.json'
        },
        htmlReport: {
            enable: true,
            jsonFile: './e2e_output/cucumber.json',
            output: './e2e_output/report/cucumber.html',
            reportSuiteAsScenarios: true,
            launchReport: true
        }
    });
});

gulp.task('tdd', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, function(code) {
        if (code == 1) {
            process.exit(code);
        } else {
            done();
        }
    });
});

gulp.task('default', ['connect', 'watch']);
