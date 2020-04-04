'use strict';

var _chai = require('chai');

var _hashset = require('./hashset');

var _hashset2 = _interopRequireDefault(_hashset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('HashSet tests', function () {
  describe('smoke test', function () {
    it('should successfully create instance', function () {
      var hashSet = new _hashset2.default();
      (0, _chai.expect)(hashSet).not.equal(null);
    });
  });
});