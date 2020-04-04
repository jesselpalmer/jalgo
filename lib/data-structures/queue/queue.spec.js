'use strict';

var _chai = require('chai');

var _queue = require('./queue');

var _queue2 = _interopRequireDefault(_queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('Queue tests', function () {
  describe('back() tests', function () {
    it('should return the last value in the queue', function () {
      var queue = new _queue2.default();
      queue.enqueue('wheatley');
      queue.enqueue('cave johnson');
      queue.enqueue('glados');
      (0, _chai.expect)(queue.back()).to.be.equal('glados');
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

  describe('enqueue() tests', function () {
    it('should add values to the queue', function () {
      var queue = new _queue2.default();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      (0, _chai.expect)(queue.size()).to.be.equal(3);
    });
  });

  describe('isEmpty()', function () {
    it('should be true if there are no elements', function () {
      var queue = new _queue2.default();
      queue.isEmpty();
      (0, _chai.expect)(queue.isEmpty()).to.be.equal(true);
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
});