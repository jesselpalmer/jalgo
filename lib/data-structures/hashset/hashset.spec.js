"use strict";

var _chai = require("chai");

var _hashset = _interopRequireDefault(require("./hashset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('HashSet tests', function () {
  describe('add() tests', function () {
    it('should add an element correctly', function () {
      var hashSet = new _hashset.default();
      hashSet.add(35);
      (0, _chai.expect)(hashSet.has(35)).equal(true);
    });
  });
  describe('clear() tests', function () {
    it('should clear out all the elements', function () {
      var hashSet = new _hashset.default();
      hashSet.add(10);
      hashSet.add(11);
      hashSet.add(999);
      hashSet.clear();
      (0, _chai.expect)(hashSet.size()).equal(0);
    });
  });
  describe('has() tests', function () {
    it('should be true if hashset contains value', function () {
      var hashSet = new _hashset.default();
      hashSet.add(5);
      (0, _chai.expect)(hashSet.has(5)).equal(true);
    });
    it('should be false if hashset does not contain value', function () {
      var hashSet = new _hashset.default();
      (0, _chai.expect)(hashSet.has(5)).equal(false);
    });
  });
  describe('remove() tests', function () {
    it('should return the correct number of elements', function () {
      var hashSet = new _hashset.default();
      hashSet.add(10);
      hashSet.add(11);
      (0, _chai.expect)(hashSet.has(11)).equal(true);
      hashSet.remove(11);
      hashSet.add(999);
      (0, _chai.expect)(hashSet.has(11)).equal(false);
    });
  });
  describe('size() tests', function () {
    it('should return the correct number of elements', function () {
      var hashSet = new _hashset.default();
      hashSet.add(10);
      hashSet.add(11);
      hashSet.add(999);
      (0, _chai.expect)(hashSet.size()).equal(3);
    });
  });
});