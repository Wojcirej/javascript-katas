let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
jasmine.getEnv().clearReporters();  
jasmine.getEnv().addReporter(new SpecReporter({
  displayFailuresSummary: true,
  displayFailuredSpec: true,
  displaySuiteNumber: true,
  displaySpecDuration: true
}));