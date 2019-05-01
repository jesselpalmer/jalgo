/**
 * Singly Linked List Node
 * -----------------------
 * Node to be used with singly linked lists.
 */
export class SinglyLinkedListNode {
  constructor(value = null) {
    this.value = value
    this.next = null
  }
}

/**
 * Singly Linked List
 * ------------------
 * Implementation of a singley linked list.
 */
export class SinglyLinkedList {
  constructor() {
    this.list = null
    this._size = 0
  }

  /**
   * add()
   * -----
   * Takes in a node and appends the node to the end of the sinlgly linked list.
   * 
   * @param {SinglyLinkedListNode} node - an instance of the SinglyLinkedListNode class
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
   * Alias for add() method. Adds node to the end of the singly linked list.
   * 
   * @param {SinglyLinkedListNode} node - an instance of the SinglyLinkedListNode class
   */
  addToEnd(node) {
    add(node)
  }

  /**
   * size()
   * ----------
   * Returns the size of the singly linked list.
   * 
   * @returns {number} - the size of the singly linked list.
   */
  get size() {
    return this._size 
  }

  /**
   * clear()
   * -------
   * Clears out the singly linked list.
   */
  clear() {
    this.list = null
    this._size = 0
  }

   /**
   * toString()
   * ----------
   * Print out the contents of the singly linked list to the console. Good to use for debugging.
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
}