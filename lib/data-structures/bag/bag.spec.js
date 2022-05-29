"use strict";

var _bag = _interopRequireDefault(require("./bag"));

var _chai = require("chai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('Bag tests', function () {
  describe('add() tests', function () {
    it('should add one new element', function () {
      var bag = new _bag.default();
      bag.add(1917);
      (0, _chai.expect)(bag.size()).to.be.equal(1);
    });
  });
  describe('count() tests', function () {
    it('should return a count of 2', function () {
      var bag = new _bag.default();
      bag.add(2022);
      bag.add(true);
      bag.add(true);
      bag.add('test');
      bag.add(2022);
      (0, _chai.expect)(bag.count(2022)).to.be.equal(2);
    });
    it('should return 0 if nothing has been added', function () {
      var bag = new _bag.default();
      (0, _chai.expect)(bag.count()).to.be.equal(0);
    });
  });
});