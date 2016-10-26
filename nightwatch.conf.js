
module.exports = (function(settings) {
  if (process.env.sel_grid == 'local') {
    settings.test_settings.default.selenium_host = 'localhost.nike.com';
  }
  if (process.env.test_runner == 'mocha') {
    settings.test_runner = {
      "type": "mocha",
      "options": {
        "ui": "bdd",
        "reporter": "mochawesome",
        "reporterOptions": {
          "reportName": "Test Report",
          "reportTitle": "Functional Test Report",
          "reportDir": __dirname + '/test/e2e_reports'
        }
      }};
  }
  if (process.env.browser == 'chrome') {
  	settings.test_settings.default.desiredCapabilities.browserName = 'chrome';
  }
  if (process.env.browser == 'phantomjs') {
      settings.test_settings.default.desiredCapabilities.browserName = 'phantomjs';
  }

  if (process.env.testWorkers == 'true'){
    if (process.env.workers == 'undefined'){
      settings.test_workers = true;
    } else {
      settings.test_workers = JSON.parse('{"enabled" : true, "workers" : ' + process.env.workers +'}');
    }
  }
  return settings;
})(require( __dirname + '/nightwatch.json'));
