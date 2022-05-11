"use strict";

var _chai = require("chai");

var _binarySearchTree = _interopRequireDefault(require("./binary-search-tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-env mocha */
describe('BinarySearchTree tests', function () {
  describe('smoke test', function () {
    it('should successfully create instance', function () {
      var binarySearchTree = new _binarySearchTree["default"]();
      (0, _chai.expect)(binarySearchTree).not.equal(null);
    });
  });
  describe('contains() test', function () {
    it('should return true if tree contains value', function () {
      var binarySearchTree = new _binarySearchTree["default"](1982);
      binarySearchTree.insert(1955);
      binarySearchTree.insert(1999);
      binarySearchTree.insert('a');
      binarySearchTree.insert(false);
      binarySearchTree.insert(-12345);
      (0, _chai.expect)(binarySearchTree.contains(1955)).to.equal(true);
      (0, _chai.expect)(binarySearchTree.contains(1999)).to.equal(true);
      (0, _chai.expect)(binarySearchTree.contains(-12345)).to.equal(true);
    });
  });
});