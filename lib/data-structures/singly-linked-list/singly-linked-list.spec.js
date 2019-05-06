'use strict';

var _chai = require('chai');

var _singlyLinkedList = require('./singly-linked-list');

var _singlyLinkedList2 = _interopRequireDefault(_singlyLinkedList);

var _singlyLinkedListNode = require('./singly-linked-list-node');

var _singlyLinkedListNode2 = _interopRequireDefault(_singlyLinkedListNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Singly Linked List tests', function () {
  describe('clear() tests', function () {
    it('should clear the singly linked list', function () {
      var singlyLinkedList = new _singlyLinkedList2.default();
      var singlyListNode1 = new _singlyLinkedListNode2.default(-134);
      var singlyListNode2 = new _singlyLinkedListNode2.default(1337.19);
      var singlyListNode3 = new _singlyLinkedListNode2.default('andrew ryan');

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
      var singlyLinkedList = new _singlyLinkedList2.default();
      var singlyListNode1 = new _singlyLinkedListNode2.default(500000000);
      var singlyListNode2 = new _singlyLinkedListNode2.default({ place: 'rapture' });
      var singlyListNode3 = new _singlyLinkedListNode2.default(false);

      singlyLinkedList.add(singlyListNode1);
      singlyLinkedList.add(singlyListNode2);
      singlyLinkedList.add(singlyListNode3);

      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(3);
      singlyLinkedList.clear();
      (0, _chai.expect)(singlyLinkedList.size()).to.be.equal(0);
    });
  });
}); /* eslint-env mocha */