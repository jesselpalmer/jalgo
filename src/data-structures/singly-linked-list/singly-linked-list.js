/**
 * Singly Linked List
 * ------------------
 * Implementation of a singley linked list.
 * 
 * @property {SinglyLinkedListNode} list - the list starts of as null. The first added sinlgly list node will become the
 *    parent. All other nodes will be added to the parent as children.
 */
export default class SinglyLinkedList {
  constructor() {
    this.list = null
    this._size = 0
  }

  /**
   * add()
   * -----
   * Takes in a node and appends the node to the end of the sinlgly linked list.
   * 
   * @alias (addToEnd)
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
   * Adds node to the end of the singly linked list. Alias for add() method.
   * 
   * @alias (add)
   * 
   * @param {SinglyLinkedListNode} node - an instance of the SinglyLinkedListNode class
   */
  addToEnd(node) {
    add(node)
  }

  get(index) {
    if (index > this._size) return null

    let currentNode = this.list
    let currentIndex = 0

    while(currentIndex !== index) {
      currentNode = currentNode.next
      currentIndex++
    }

    return currentNode
  }

  getFirst() {
    return this.list
  }

  getLast() {
    let currentNode = this.list
    
    if (!currentNode.next) return currentNode

    while(currentNode.next !== null) {
      currentNode = currentNode.next
      currentIndex++
    }

    return currentNode
  }

  /**
   * size()
   * ----------
   * Returns the size of the singly linked list.
   * 
   * @returns {number} - the size of the singly linked list.
   */
  size() {
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
