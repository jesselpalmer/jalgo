export default class Queue {
  constructor(elements = []) {
    this._elements = elements
  }

  back() {
    const lastElementIndex = this._elements.length - 1
    return this._elements[lastElementIndex]
  }

  clear() {
    this._elements = []
  }

  dequeue() {
    return this._elements.pop()
  }

  enqueue(element) {
    this._elements.push(element)
  }

  isEmpty() {
    return this._elements.length === 0
  }

  size() {
    return this._elements.length
  }
}
