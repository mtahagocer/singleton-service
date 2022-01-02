"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingletonContainer = function () {
    function SingletonContainer() {
        _classCallCheck(this, SingletonContainer);
    }

    _createClass(SingletonContainer, null, [{
        key: "set",

        // Create `{any}` instance with `{string}` key
        value: function set(key, value) {
            var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!SingletonContainer._has(key) || SingletonContainer._has(key) && force) SingletonContainer._container.set(key, value);else throw new Error(key + " is already in the container, force if you want to update it");
        }
    }]);

    return SingletonContainer;
}();

exports.default = SingletonContainer;

SingletonContainer._container = new Map();
SingletonContainer._has = function (key) {
    return SingletonContainer._container.has(key);
};
// Get created `{any}` instance from container with `{string}` key
SingletonContainer.get = function (key) {
    return SingletonContainer._container.get(key);
};
// Delete instance with key
SingletonContainer.delete = function (key) {
    return SingletonContainer._container.delete(key);
};