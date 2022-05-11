export default class Stack {
  constructor(elements = []) {
    this._elements = elements;
  }

  clear() {
    this._elements = [];
  }

  isEmpty() {
    return this._elements.length === 0;
  }

  peek() {
    return this._elements[0];
  }

  pop() {
    return this._elements.splice(0, 1)[0];
  }

  push(element) {
    this._elements.push(element);
  }

  size() {
    return this._elements.length;
  }

  search(element) {
    return this._elements.indexOf(element);
  }

  toString() {
    return this._elements.toString();
  }
}
