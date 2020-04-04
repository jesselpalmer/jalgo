"use strict";

var _chai = require("chai");

var _singlyLinkedList = _interopRequireDefault(require("./singly-linked-list"));

var _singlyLinkedListNode = _interopRequireDefault(require("./singly-linked-list-node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-env mocha */
describe('Singly Linked List tests', function () {
  describe('clear() tests', function () {
    it('should clear the singly linked list', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      var singlyListNode1 = new _singlyLinkedListNode["default"](-134);
      var singlyListNode2 = new _singlyLinkedListNode["default"](1337.19);
      var singlyListNode3 = new _singlyLinkedListNode["default"]('andrew ryan');
      singlyLinkedList.add(singlyListNode1);
      singlyLinkedList.add(singlyListNode2);
      singlyLinkedList.add(singlyListNode3);
      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(3);
      singlyLinkedList.clear();
      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(0);
    });
  });
  describe('size() tests', function () {
    it('should return the correct size', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      var singlyListNode1 = new _singlyLinkedListNode["default"](500000000);
      var singlyListNode2 = new _singlyLinkedListNode["default"]({
        place: 'rapture'
      });
      var singlyListNode3 = new _singlyLinkedListNode["default"](false);
      singlyLinkedList.add(singlyListNode1);
      singlyLinkedList.add(singlyListNode2);
      singlyLinkedList.add(singlyListNode3);
      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(3);
      singlyLinkedList.clear();
      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(0);
    });
  });
  describe('get() tests', function () {
    it('should get first value', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      var singlyListNode1 = new _singlyLinkedListNode["default"](1999);
      var singlyListNode2 = new _singlyLinkedListNode["default"]({
        place: 'mineravas den'
      });
      var singlyListNode3 = new _singlyLinkedListNode["default"](true);
      singlyLinkedList.add(singlyListNode1);
      singlyLinkedList.add(singlyListNode2);
      singlyLinkedList.add(singlyListNode3);
      (0, _chai.expect)(singlyLinkedList.get(0)).to.be.equal(1999);
    });
    it('should return null if the index is larger that the size of the list', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      var singlyListNode1 = new _singlyLinkedListNode["default"](1999);
      var singlyListNode2 = new _singlyLinkedListNode["default"]({
        place: 'mineravas den'
      });
      var singlyListNode3 = new _singlyLinkedListNode["default"](true);
      singlyLinkedList.add(singlyListNode1);
      singlyLinkedList.add(singlyListNode2);
      singlyLinkedList.add(singlyListNode3);
      (0, _chai.expect)(singlyLinkedList.get(4)).to.be.equal(null);
    });
    it('should retun the first value if no index is passed in', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      var singlyListNode1 = new _singlyLinkedListNode["default"](1999);
      var singlyListNode2 = new _singlyLinkedListNode["default"]({
        place: 'mineravas den'
      });
      var singlyListNode3 = new _singlyLinkedListNode["default"](true);
      singlyLinkedList.add(singlyListNode1);
      singlyLinkedList.add(singlyListNode2);
      singlyLinkedList.add(singlyListNode3);
      (0, _chai.expect)(singlyLinkedList.get()).to.be.equal(1999);
    });
    it('should return null if there are no nodes in the singly linked list', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      (0, _chai.expect)(singlyLinkedList.get()).to.be.equal(null);
    });
  });
  describe('getFirst() tests', function () {
    it('should get first value', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      var singlyListNode1 = new _singlyLinkedListNode["default"](1999);
      var singlyListNode2 = new _singlyLinkedListNode["default"]({
        place: 'mineravas den'
      });
      var singlyListNode3 = new _singlyLinkedListNode["default"](true);
      singlyLinkedList.add(singlyListNode1);
      singlyLinkedList.add(singlyListNode2);
      singlyLinkedList.add(singlyListNode3);
      (0, _chai.expect)(singlyLinkedList.getFirst()).to.be.equal(1999);
    });
    it('should return null if there are no nodes in the singly linked list', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      (0, _chai.expect)(singlyLinkedList.getFirst()).to.be.equal(null);
    });
  });
  describe('getLast() tests', function () {
    it('should get last value', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      var singlyListNode1 = new _singlyLinkedListNode["default"](1999);
      var singlyListNode2 = new _singlyLinkedListNode["default"]({
        place: 'mineravas den'
      });
      var singlyListNode3 = new _singlyLinkedListNode["default"](true);
      singlyLinkedList.add(singlyListNode1);
      singlyLinkedList.add(singlyListNode2);
      singlyLinkedList.add(singlyListNode3);
      (0, _chai.expect)(singlyLinkedList.getLast()).to.be.equal(true);
    });
    it('should return null if there are no nodes in the singly linked list', function () {
      var singlyLinkedList = new _singlyLinkedList["default"]();
      (0, _chai.expect)(singlyLinkedList.getLast()).to.be.equal(null);
    });
  });
});