'use strict';

var _chai = require('chai');

var _queue = require('./queue');

var _queue2 = _interopRequireDefault(_queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('Queue tests', function () {
  describe('enqueue() tests', function () {
    it('should add values to the queue', function () {
      var queue = new _queue2.default();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      (0, _chai.expect)(queue.size()).to.be.equal(3);
    });
  });

  describe('dequeue() tests', function () {
    it('should add values to the queue', function () {
      var queue = new _queue2.default();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      (0, _chai.expect)(queue.dequeue()).to.be.equal('cave johnson');
      (0, _chai.expect)(queue.size()).to.be.equal(2);
    });
  });

  describe('back() tests', function () {
    it('should return the last value in the queue', function () {
      var queue = new _queue2.default();
      queue.enqueue('wheatley');
      queue.enqueue('cave johnson');
      queue.enqueue('glados');
      (0, _chai.expect)(queue.back()).to.be.equal('glados');
    });
  });

  describe('size() tests', function () {
    it('should return the correct size', function () {
      var queue = new _queue2.default();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      (0, _chai.expect)(queue.size()).to.be.equal(2);
    });
  });

  describe('clear() tests', function () {
    it('should remove all of the elements from the queue', function () {
      var queue = new _queue2.default();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      queue.clear();
      (0, _chai.expect)(queue.size()).to.be.equal(0);
    });
  });
});