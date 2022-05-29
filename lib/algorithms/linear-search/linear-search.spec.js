"use strict";

var _chai = require("chai");

var _linearSearch = _interopRequireDefault(require("./linear-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('Linear Search tests', function () {
  it('should return the corerect index of the element if it is contained in the list', function () {
    var list = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    var element = 3;
    (0, _chai.expect)((0, _linearSearch.default)(list, element)).to.be.equal(4);
  });
  it('should return -1 if the element is not in the list', function () {
    var list = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    var element = 17;
    (0, _chai.expect)((0, _linearSearch.default)(list, element)).to.be.equal(-1);
  });
});