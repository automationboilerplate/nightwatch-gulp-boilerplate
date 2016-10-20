var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch'),
    args = require('yargs').argv;

// Single of run of unit tests, with code-coverage reporting.
module.exports = function(opts) {
    opts = opts || {};

    gulp.task('e2e', function(){

        var cliArgs = {};

        [
            'config',
            'output',
            'reporter',
            'env',
            'verbose',
            'test',
            'testcase',
            'group',
            'skipgroup',
            'filter',
            'tag',
            'skiptags',
            'retries',
            'suiteRetries'
        ].forEach(function(name) {
            if(args[name]) {
                process.env[name] = args[name];
                cliArgs[name] = args[name];
            }
        });

        process.env.buildNumber = args.buildNumber;
        process.env.planKey = args.planKey;
        process.env.test_env = args.testEnv;
        process.env.test_port = args.testPort;
        process.env.sel_grid = args.selGrid;
        process.env.test_branch = args.testBranch || '';
        process.env.httpProtocol = args.httpProtocol;
        process.env.browser = args.browser;
        process.env.authUrl = args.authUrl;
        process.env.appRoute = args.appRoute;
        process.env.testWorkers = args.testWorkers;
        process.env.workers = args.workers;
        //argument for the Feature toggling functionality.
        process.env.featureToggle = args.featureToggle;
        process.env.tags = process.env.tag || null;
        process.env.ignoreInvalidCerts = args.ignoreInvalidCerts || undefined;

        return gulp.src([])
            .pipe(nightwatch({
                configFile: __dirname + '/nightwatch.conf.js',
                cliArgs: cliArgs
            }));
    });
};
