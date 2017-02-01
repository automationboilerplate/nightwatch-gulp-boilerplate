'use strict';

var BasePageObject = function() {
    this.initialize.apply(this, arguments);
    // NB: No return for constructor
};

BasePageObject.prototype = {
    localRoute: '/#',
    route: '',
    pageName: '',
    description: '',

    initialize: function() {
        this.bindElements();
        return this; // Enable chaining
    },

    getUrl: function(){
        //Subclass can extend if needed, but this should work for most cases
        //TODO: JSM - slash & protocol mgmt plus handling 'plus'
        return url;
    },

    bindElements: function() {
        //Subclass should override to add their elements
    }
};

/* Returns a new prototype based on BasePageObject */
BasePageObject.extend = function (props) {
    // `BasePageObject` in this case will be the parent
    var Parent = this;
    var Child = function() {
        return Parent.apply(this, undefined);
    };

    // We create a surrogate to avoid calling the parent's constructor
    var Surrogate = function() {
        this.constructor = Child;
    };
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();

    // Now we add the prototype properties
    for (var prop in props) {
        var value = props[prop];
        Child.prototype[prop] = value;

    }

    // Make the parent's methods available directly to the child via `super`
    Child.super = Parent.prototype;

    // Finally, provide the child class
    return Child;
}

module.exports = BasePageObject;
