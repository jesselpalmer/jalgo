'use strict';

var _chai = require('chai');

var _binarySearch = require('./binarySearch');

/* eslint-env mocha */

describe('binarySearch tests', function () {
  it('should find an element if it exists', function () {
    var numList = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    (0, _chai.expect)((0, _binarySearch.binarySearch)(numList, 3)).to.be.equal(4);
  });

  it('should return null an element if it exists', function () {
    var numList = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    (0, _chai.expect)((0, _binarySearch.binarySearch)(numList, 25)).to.be.equal(null);
  });
});