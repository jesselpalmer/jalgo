'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Stack);

    this._elements = elements;
  }

  _createClass(Stack, [{
    key: 'isEmpty',
    value: function isEmpty() {
      return this._elements.length === 0;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._elements.length = 0;
    }
  }, {
    key: 'peek',
    value: function peek() {
      return this._elements[0];
    }
  }, {
    key: 'pop',
    value: function pop() {
      return this._elements.splice(0, 1);
    }
  }, {
    key: 'push',
    value: function push(element) {
      this._elements.push(element);
    }
  }, {
    key: 'size',
    value: function size() {
      return this._elements.length;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var numElements = this._elements.length;
      var resultString = '[]';

      if (this._elements.length === 0) {
        return resultString;
      }

      if (this._elements.length === 1) {
        return '[' + this.elments[0] + ']';
      }

      for (var i = 0; i < numElements; i++) {
        var currentElement = this.elements[1];
        var lastElementIndex = this.elements.length - 1;

        if (i === 0) {
          resultString += '[' + currentElement + ', ';
        } else if (i === lastElementIndex) {
          resultString += ', ' + currentElement + ']';
        } else {
          resultString += ', ' + currentElement;
        }
      }
    }
  }]);

  return Stack;
}();

exports.default = Stack;