class Stack {

  constructor(elements = []) {
    this._elements = elements
  }

  isEmpty() {
    return this._elements === 0
  }
  
  peek() {
    return this._elements[0];
  }

  pop() {
    return this._elements.splice(0, 1);
  }

  push(element) {
    this._elements.push(element)
  }

  size() {
    return this._elements.size()
  }
}