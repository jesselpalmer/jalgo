'use strict';

var _chai = require('chai');

var _stack = require('./stack');

var _stack2 = _interopRequireDefault(_stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('SuperStack class', function () {
  describe('clear() method', function () {
    it('should clear an array with elements', function () {
      var stack = new _stack2.default();
      stack.push('stanford');
      stack.push('cmu');
      stack.clear();
      (0, _chai.expect)(stack.size()).to.be.equal(0);
    });
  });

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

  describe('peek() method', function () {
    it('should return the only element', function () {
      var stack = new _stack2.default();
      stack.push('hopper');
      (0, _chai.expect)(stack.peek()).to.be.equal('hopper');
    });

    it('should return the first element', function () {
      var stack = new _stack2.default();
      stack.push('babbage');
      stack.push('hopper');
      stack.push('knuth');
      (0, _chai.expect)(stack.peek()).to.be.equal('babbage');
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