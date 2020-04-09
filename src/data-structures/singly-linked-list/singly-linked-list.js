import SinglyLinkedListNode from './singly-linked-list-node'

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
   * Adds a node to the end of the singly linked list.
   *
   * @alias (addToEnd)
   *
   * @param {value} any - any value to be appeneded to the end of the singly linked list.
   */
  add(value) {
    const node = new SinglyLinkedListNode(value)

    if (!this.list) {
      this.list = node
      this._size++
    } else {
      let currentNode = this.list

      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }

      currentNode.next = node
      this._size++
    }
  }

  /**
   * addToEnd()
   * ----------
   * Adds a node to the end of the singly linked list. Alias for add() method.
   *
   * @alias (add)
   *
   * @param {SinglyLinkedListNode} node - an instance of the SinglyLinkedListNode class
   */
  addToEnd(node) {
    this.add(node)
  }

  contains(value) {
    let currentNode = this.list

    while (currentNode) {
      if (currentNode.value === value) return true
      currentNode = currentNode.next
    }

    return false
  }

  /**
   * get()
   * -----
   * Gets a value using the passed in index. If no index is passed into as a paramenter the first element will be selected.
   *
   * @param {index} number - the index that will be used to select an element.
   */
  get(index = 0) {
    if (!this.list) return null
    if (index > this._size) return null

    let currentNode = this.list
    let currentIndex = 0

    while (currentIndex !== index) {
      currentNode = currentNode.next
      currentIndex++
    }

    return currentNode.value
  }

  /**
   * getFirst()
   * -----
   * Gets the first value of the list.
   */
  getFirst() {
    return this.get()
  }

  /**
   * getLast()
   * -----
   * Gets the last value of the list.
   */
  getLast() {
    return this.get(this._size - 1)
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

    while (currentNode.next !== null) {
      console.log(currentNode)
      console.log('\n')
      currentNode = currentNode.next
    }

    console.log(currentNode)
  }
}
