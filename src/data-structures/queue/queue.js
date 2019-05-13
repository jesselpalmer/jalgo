export default class Queue {
  constructor(elements = []) {
    this._elements = elements
  }

  enqueue (element) {
    this._elements.push(element)
  }

  back () {
    const lastElementIndex = this._elements.length - 1
    return this._elements[lastElementIndex]
  }

  size () {
    return this._elements.length
  }
}
