class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export default class BinarySearchTree {
  constructor(value) {
    const node = new Node(value)
    this.root = node
  }

  insert(value) {
    const node = new Node(value)
    this._appendNode(this.root, node)
  }

  _appendNode(node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode
      }

      this._appendNode(node.left, newNode)
    }

    if (node.value < newNode.value) {
      if (node.right === null) {
        node.right = newNode
      }

      this._appendNode(node.right, newNode)
    }
  }

  printInOrder() {
    this._printInOrder(this.root)
  }

  _printInOrder(node) {
    if (node === null) return

    this._printInOrder(node.left)
    console.log(node.value)
    this._printInOrder(node.right)
  }
}
