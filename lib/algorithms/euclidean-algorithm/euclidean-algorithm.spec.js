'use strict';

var _chai = require('chai');

var _euclideanAlgorithm = require('./euclidean-algorithm');

/* eslint-env mocha */

describe('Euclidean Algorithm tests', function () {
  it('should return the corerect greatest common denominator', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm.euclideanAlgorithm)(125, 625)).to.be.equal(125);
  });

  it('should return -1 if their are no common denominators', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm.euclideanAlgorithm)(0, 123)).to.be.equal(-1);
  });

  it('should return -1 if only one parameter is passed in', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm.euclideanAlgorithm)(123)).to.be.equal(-1);
  });

  it('should return -1 if no parameters are passed in', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm.euclideanAlgorithm)()).to.be.equal(-1);
  });
});