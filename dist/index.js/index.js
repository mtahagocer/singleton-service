"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingletonService = function SingletonService() {
    _classCallCheck(this, SingletonService);
};

exports.default = SingletonService;

SingletonService._container = new Map();
SingletonService._has = function (key) {
    return SingletonService._container.has(key);
};
/**
 * Create `any` instance with `string` key
 */
SingletonService.set = function (key, value) {
    var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!SingletonService._has(key) || SingletonService._has(key) && force) SingletonService._container.set(key, value);else throw new Error(key + " is already in the container, force if you want to update it");
};
// Get created `any` instance from container with `string` key
SingletonService.get = function (key) {
    return SingletonService._container.get(key);
};
// Delete instance with key
SingletonService.delete = function (key) {
    return SingletonService._container.delete(key);
};