"use strict";

var _chai = require("chai");

var _euclideanAlgorithm = _interopRequireDefault(require("./euclidean-algorithm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-env mocha */
describe('Euclidean Algorithm tests', function () {
  it('should return the corerect greatest common denominator', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm["default"])(125, 625)).to.be.equal(125);
  });
  it('should return -1 if their are no common denominators', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm["default"])(5, 123)).to.be.equal(-1);
  });
  it('should return -1 if only one parameter is passed in', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm["default"])(123)).to.be.equal(-1);
  });
  it('should return -1 if no parameters are passed in', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm["default"])()).to.be.equal(-1);
  });
});