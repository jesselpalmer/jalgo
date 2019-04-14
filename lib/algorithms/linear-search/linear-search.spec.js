'use strict';

var _chai = require('chai');

var _linearSearch = require('./linear-search');

/* eslint-env mocha */

describe('linearSearch tests', function () {
  it('should return the corerect index of the element if it is contained in the list', function () {
    var list = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    var element = 3;

    (0, _chai.expect)((0, _linearSearch.linearSearch)(list, element)).to.be.equal(4);
  });

  it('should return -1 if the element is not in the list', function () {
    var list = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    var element = 17;

    (0, _chai.expect)((0, _linearSearch.linearSearch)(list, element)).to.be.equal(-1);
  });
});