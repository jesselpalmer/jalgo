"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Queue);

    this._elements = elements;
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(element) {
      this._elements.push(element);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this._elements.pop();
    }
  }, {
    key: "back",
    value: function back() {
      var lastElementIndex = this._elements.length - 1;
      return this._elements[lastElementIndex];
    }
  }, {
    key: "clear",
    value: function clear() {
      this._elements = [];
    }
  }, {
    key: "size",
    value: function size() {
      return this._elements.length;
    }
  }]);

  return Queue;
}();

exports.default = Queue;