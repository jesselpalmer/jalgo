export class SinglyLinkedListNode {
  constructor(value = null) {
    this.value = value
    this.next = null
  }
}

export class SinglyLinkedList {
  constructor() {
    this.list = null
    this._size = 0
  }

  /**
    * add()
    * -----
    * Takes in a node and appends the node to the end of the list.
    * 
    * @param {Node} node - an instance of the SinglyLinkedListNode class
    */
  add(node) {
    if (!this.list) {
      this.list = node
      this._size ++
    } else {
      let currentNode = this.list

      while(currentNode.next !== null) {
        currentNode = currentNode.next
      }

      currentNode.next = node
      this._size++
    }
  }

  /**
    * addToEnd()
    * ----------
    * Alias for add() method. Adds node to the end of the list.
    */
  addToEnd(node) {
    add(node)
  }

  /**
    * size()
    * ----------
    * Returns the size of the singly linked list.
    */
  get size() {
    return this._size 
  }
  

  /**
    * toString()
    * ----------
    * Print out the contents of the list to the console. Good to use for debugging.
    */
  toString() {
    if (!this.list) return

    let currentNode = this.list

      while(currentNode.next !== null) {
        console.log(currentNode)
        console.log('\n')
        currentNode = currentNode.next
      }

    console.log(currentNode)
  }

  clear() {
    this.list = null
    this._size = 0
  }
}