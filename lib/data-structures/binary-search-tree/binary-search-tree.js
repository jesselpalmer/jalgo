"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Node);

  this.value = value;
  this.left = left;
  this.right = right;
};

var BinarySearchTree = function () {
  function BinarySearchTree(value) {
    _classCallCheck(this, BinarySearchTree);

    var node = new Node(value);
    this.root = node;
  }

  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(value) {
      var node = new Node(value);
      this._appendNode(this.root, node);
    }
  }, {
    key: "_appendNode",
    value: function _appendNode(node, newNode) {
      if (node.value > newNode.value) {
        if (node.left === null) {
          node.left = newNode;
        }

        this._appendNode(node.left, newNode);
      }

      if (node.value < newNode.value) {
        if (node.right === null) {
          node.right = newNode;
        }

        this._appendNode(node.right, newNode);
      }
    }
  }, {
    key: "printInOrder",
    value: function printInOrder() {
      this._walkTree(this.root);
    }
  }, {
    key: "_printInOrder",
    value: function _printInOrder(node) {
      if (node === null) return;

      this._printInOrder(node.left);
      console.log(node.value);
      this._printInOrder(node.right);
    }
  }]);

  return BinarySearchTree;
}();

exports.default = BinarySearchTree;