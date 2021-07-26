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
        key: "_has",

        /**
         *
         * @param {string} key
         */
        value: function _has(key) {
            return this._container.has(key);
        }
        /**
         * Create `{any}` instance with `{string}` key
         * @param {string} key
         * @param {any} value
         */

    }, {
        key: "set",
        value: function set(key, value) {
            !this._has(key) && this._container.set(key, value);
        }
        /**
         * Get created `{any}` instance from container with `{string}` key
         * @param {string} key
         */

    }, {
        key: "get",
        value: function get(key) {
            return this._container.get(key);
        }
        /**
         * Delete instance with key
         * @param {string} key
         */

    }, {
        key: "delete",
        value: function _delete(key) {
            this._container.delete(key);
        }
    }]);

    return SingletonContainer;
}();

SingletonContainer._container = new Map();
exports.default = SingletonContainer;