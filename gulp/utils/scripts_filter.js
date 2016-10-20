var path = require('path');

// Filters out non .js (or others, add below) files.
// Prevents accidental inclusion of possible hidden files.
module.exports = function(name) {
    return /(\.(js)$)/i.test(path.extname(name));
};
