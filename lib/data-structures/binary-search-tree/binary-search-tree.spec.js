'use strict';

var _chai = require('chai');

var _binarySearchTree = require('./binary-search-tree');

var _binarySearchTree2 = _interopRequireDefault(_binarySearchTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('Binary Search Tree tests', function () {
  describe('smoke test', function () {
    it('should successfully create instance', function () {
      var binarySearchTree = new _binarySearchTree2.default();
      (0, _chai.expect)(binarySearchTree).not.to.be(null);
    });
  });
});