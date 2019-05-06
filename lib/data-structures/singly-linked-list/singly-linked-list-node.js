"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Singly Linked List Node
 * -----------------------
 * Node to be used with singly linked lists.
 * 
 * @property {any} value - any value to be stored in the node
 * @property {SinglyLinkedListNode} next - reference to the next node
 */
var SinglyLinkedListNode = function SinglyLinkedListNode() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  _classCallCheck(this, SinglyLinkedListNode);

  this.value = value;
  this.next = null;
};

exports.default = SinglyLinkedListNode;