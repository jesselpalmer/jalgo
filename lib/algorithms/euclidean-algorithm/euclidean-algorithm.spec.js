'use strict';

var _chai = require('chai');

var _euclideanAlgorithm = require('./euclidean-algorithm');

/* eslint-env mocha */

describe('euclideanAlgorithm tests', function () {
  it('should return the corerect greates common denominator', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm.euclideanAlgorithm)(125, 625)).to.be.equal(125);
  });

  it('should return -1 if the element is not in the list', function () {
    (0, _chai.expect)((0, _euclideanAlgorithm.euclideanAlgorithm)(0, 123)).to.be.equal(-1);
  });
});