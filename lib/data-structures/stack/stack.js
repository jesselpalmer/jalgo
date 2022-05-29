"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Stack = /*#__PURE__*/function () {
  function Stack() {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Stack);

    this._elements = elements;
  }

  _createClass(Stack, [{
    key: "clear",
    value: function clear() {
      this._elements = [];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._elements.length === 0;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this._elements[0];
    }
  }, {
    key: "pop",
    value: function pop() {
      return this._elements.splice(0, 1)[0];
    }
  }, {
    key: "push",
    value: function push(element) {
      this._elements.push(element);
    }
  }, {
    key: "size",
    value: function size() {
      return this._elements.length;
    }
  }, {
    key: "search",
    value: function search(element) {
      return this._elements.indexOf(element);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this._elements.toString();
    }
  }]);

  return Stack;
}();

exports.default = Stack;