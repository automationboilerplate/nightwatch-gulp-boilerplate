# Javascript Test Automation Framework
This is a boilerplate Test Automation framework with Nightwatchjs and gulp as Task Runner.

# Installation Steps:
Windows:
1. Install Nodejs and NPM.
2. Install Nightwatchjs globally as npm install -g nightwatch.
3. Install Gulp globally as npm install --global gulp-cli.
4. Install Selenium using npm install selenium-download --save-dev.
5. Download Selenium-server-standalone jar and have it on your local, for executing locally.

Mac:
1. Install XCODE developer tools.
2. Install Homebrew, using homebrew install node and NPM.
3. Using Homebrew install nightwatchjs,selenium-download and gulpjs.
4. Download Selenium-server-standalond jar and have it on your local, for executing locally.

# Project Overview:
  Clone this project from git and have it on your local. Navigate to this project on the command prompt and do an "npm install".

## Files and its usages:
  * Package.json and gulpfile.js are required by gulp for building and executing the tasks.
  * Nightwatch.json and nightwatch.conf.js are the configuration files required for nightwatch test execution.
  * e2e.js is the executable gulp task.
  * All the other required gulp tasks are inside the gulp folder.
  * test/e2e_spec/views contain the executable test cases and it is configured in nightwatch.json file.

  ## How to Execute?
  On a command prompt run the Selenium-server-standalone jar by providing
  `java -jar selenium-server-standalone-v#.jar`(Replace # with your version)
Open another command prompt and navigate to the project path and provide
`gulp e2e --selGrid local --tag default`. You can also run the gulp tests using the mocha test runner by providing the command `gulp e2e --selGrid local --testRunner mocha`.
You can pass all the arguments supported by nightwatch and it is provided in e2e.js file. I have a default configuration in nightwatch.json file and update the required ones at runtime by passing them as args.

Feel free to update this repo, by creating a pull request. For more information contact vicky.008@gmail.com.
