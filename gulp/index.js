var fs = require('fs'),
    scriptsFilter = require('./utils/scripts_filter'),
    tasks = fs.readdirSync(__dirname + '/tasks/').filter(scriptsFilter);

tasks.forEach(function(task) {
    require('./tasks/' + task);
});
require('../e2e')();
