var GooglePage = require('../pages/GooglePage');

module.exports = {
  tags: ['default'],
  'demo test google' : function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 3000);
  },

  'part two' : function(client) {
    client
      .setValue(GooglePage.txtSearch, ['nightwatch', client.Keys.ENTER])
      .pause(5000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
