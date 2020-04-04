"use strict";

var _chai = require("chai");

var _hashset = _interopRequireDefault(require("./hashset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-env mocha */
describe('HashSet tests', function () {
  describe('has() tests', function () {
    it('should be true if hashset contains value', function () {
      var hashSet = new _hashset["default"]();
      hashSet.add(5);
      (0, _chai.expect)(hashSet.has(5)).equal(true);
    });
    it('should be false if hashset does not contain value', function () {
      var hashSet = new _hashset["default"]();
      (0, _chai.expect)(hashSet.has(5)).equal(false);
    });
  });
});