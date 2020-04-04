'use strict';

var _chai = require('chai');

var _hashset = require('./hashset');

var _hashset2 = _interopRequireDefault(_hashset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('HashSet tests', function () {
  describe('has() tests', function () {
    it('should be true if hashset contains value', function () {
      var hashSet = new _hashset2.default();
      hashSet.add(5);
      (0, _chai.expect)(hashSet.has(5)).equal(true);
    });

    it('should be false if hashset does not contain value', function () {
      var hashSet = new _hashset2.default();
      (0, _chai.expect)(hashSet.has(5)).equal(false);
    });
  });
});