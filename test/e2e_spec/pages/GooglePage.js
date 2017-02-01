'use strict'
var BasePageObject = require('./BasePage.js');

var GooglePage = BasePageObject.extend({
    route: '/',

    getUrl: function () {
        var url = GooglePage.super.getUrl.apply(this);
        console.log('Test URL: ' + url);
        return url;
    },

    bindElements: function() {
        this.txtSearch = 'input[type=text]';
        this.btnGoogleSearch = 'input[name=btnK]';
    }
});

module.exports = new GooglePage();
