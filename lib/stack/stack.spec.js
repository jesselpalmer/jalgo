'use strict';

var _chai = require('chai');

var _stack = require('./stack');

var _stack2 = _interopRequireDefault(_stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('SuperStack class', function () {
  describe('isEmpty() method', function () {
    it('should return true if empty', function () {
      var stack = new _stack2.default();
      (0, _chai.expect)(stack.isEmpty()).to.be.true;
    });

    it('should return false if not empty', function () {
      var testArray = [1, 2, 3];
      var stack = new _stack2.default(testArray);
      (0, _chai.expect)(stack.isEmpty()).to.be.false;
    });

    it('should return false if empty array is passed to it', function () {
      var testArray = [];
      var stack = new _stack2.default(testArray);
      (0, _chai.expect)(stack.isEmpty()).to.be.true;
    });
  });

  describe('size() method', function () {
    it('should return the correct size', function () {
      var stack = new _stack2.default();
      stack.push(4);
      (0, _chai.expect)(stack.size()).to.be.equal(1);
    });
  });

  describe('toString() method', function () {
    it('should return [] when stack is empty', function () {
      var stack = new _stack2.default();
      (0, _chai.expect)(stack.toString()).to.be.equal('[]');
    });
  });
});