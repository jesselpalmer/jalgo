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
});