import SinglyLinkedListNode from './singly-linked-list-node';

/**
 * Singly Linked List
 * ------------------
 * Implementation of a single linked list.
 *
 * @property {SinglyLinkedListNode} list - the list starts of as null. The first added singly list node will become the
 *    parent. All other nodes will be added to the parent as children.
 */
export default class SinglyLinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  /**
   * add()
   * -----
   * Adds a node to the end of the singly linked list.
   *
   * @alias (addToEnd)
   *
   * @param {value} any - any value to be appended to the end of the singly
   * linked list.
   *
   * @return none
   */
  add(value) {
    const node = new SinglyLinkedListNode(value);

    if (!this.#head) {
      this.#size++;
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
      this.#size++;
    }
  }

  /**
   * addToEnd()
   * ----------
   * Adds a node to the end of the singly linked list. Alias for add() method.
   *
   * @alias (add)
   *
   * @param {value} any - any value to be appended to the end of the singly linked list.
   */
  addToEnd(value) {
    const node = new SinglyLinkedListNode(value);

    this.add(node);
  }

  addToFront(value) {
    const node = new SinglyLinkedListNode(value);
    node.next = this.#head;
    this.#head = node;
  }

  contains(value) {
    let currentNode = this.#head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  /**
   * get()
   * -----
   * Gets a value using the passed in index. If no index is passed into as a parameter the first element will be selected.
   *
   * @param {index} number - the index that will be used to select an element.
   */
  get(index = 0) {
    if (!this.#head) return null;
    if (index > this.#size) return null;

    let currentNode = this.#head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.value;
  }

  /**
   * getFirst()
   * ----------
   * Gets the first value of the list.
   */
  getFirst() {
    return this.#head?.value ?? null;
  }

  /**
   * getLast()
   * ---------
   * Gets the last value of the list.
   */
  getLast() {
    return this.#tail?.value ?? null;
  }

  /**
   * size()
   * ------
   * Returns the size of the singly linked list.
   *
   * @return {number} - the size of the singly linked list.
   */
  size() {
    return this.#size;
  }

  /**
   * clear()
   * -------
   * Clears out the singly linked list.
   */
  clear() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  /**
   * toString()
   * ----------
   * Print out the contents of the singly linked list to the console. Good to use for debugging.
   */
  toString() {
    if (!this.#head) return;

    let currentNode = this.#head;

    while (currentNode.next !== null) {
      console.log(currentNode);
      console.log('\n');
      currentNode = currentNode.next;
    }

    console.log(currentNode);
  }
}
