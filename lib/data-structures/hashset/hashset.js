"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HashSet = function () {
  function HashSet() {
    _classCallCheck(this, HashSet);

    this.values = {};
  }

  _createClass(HashSet, [{
    key: "add",
    value: function add(val) {
      this.values[val] = true;
    }
  }, {
    key: "has",
    value: function has(val) {
      return this.values[val] === true;
    }
  }, {
    key: "remove",
    value: function remove(val) {
      delete this.values[val];
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return Object.keys(this.values);
    }
  }]);

  return HashSet;
}();

exports.default = HashSet;