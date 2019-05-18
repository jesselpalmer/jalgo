export default class Queue {
  constructor(elements = []) {
    this._elements = elements
  }

  enqueue (element) {
    this._elements.push(element)
  }

  dequeue () {
    return this._elements.pop()
  }

  back () {
    const lastElementIndex = this._elements.length - 1
    return this._elements[lastElementIndex]
  }

  clear () {
    this._elements = []
  }

  size () {
    return this._elements.length
  }
}
