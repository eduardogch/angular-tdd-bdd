module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
        // Vendor files
      'app/assets/vendor/angular/angular.js',
      'app/assets/vendor/angular-ui-router/release/angular-ui-router.min.js',
      'app/assets/vendor/angular-mocks/angular-mocks.js',
      'app/assets/vendor/angular-animate/angular-animate.min.js',
      'app/assets/vendor/angular-aria/angular-aria.min.js',
      'app/assets/vendor/angular-cookies/angular-cookies.min.js',
      'app/assets/vendor/angular-material/angular-material.min.js',
      'app/assets/vendor/angular-messages/angular-messages.min.js',
      'app/assets/vendor/mocha/mocha.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'test/tdd/**/!(*.spec|*.mock).js': ['coverage']
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage',
      subdir : 'PhantomJS'
    },
    dest: __dirname + 'coverage/PhantomJS',
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
    });
};
