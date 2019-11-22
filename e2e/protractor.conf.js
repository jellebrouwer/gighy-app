// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const path = require('path');
const protractorMock = path.resolve(__dirname, '../dist/mocking/protractor.mock.js');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['lang=nl-NL', '--headless', '--no-sandbox'],
      prefs: {
        intl: { accept_languages: 'nl-NL' },
      },
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  ngApimockOpts: {
    angularVersion: 7,  // {number} provide major version of Angular
    hybrid: false // optional boolean which can be used for testing Angular apps within an AngularJs app.
  },
  onPrepare() {
    global.ngApimock = require(protractorMock);
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};