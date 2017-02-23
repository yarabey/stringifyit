'use strict';

var stringify = require('../stringifier').stringify;

/**
 * @type {Stringifier~stringifyCallback}
 */
module.exports = Object.prototype[stringify] = function (stringifier) {
    var keys = Object.keys(this).sort();
    var key;

    stringifier.string += '{';

    for (var i = 0; i < keys.length; i++) {
        key = keys[i];

        stringifier.string += key;
        stringifier.update(this[key]);
    }

    stringifier.string += '}';
};
