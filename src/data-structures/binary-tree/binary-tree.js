class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root
  }

  insert(node) {
    if (!this.root) this.root = node
  }
}
