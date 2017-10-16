export default class Stack {
  constructor (elements = []) {
    this._elements = elements
  }

  clear () {
    this._elements.length = 0
  }

  isEmpty () {
    return this._elements.length === 0
  }

  peek () {
    return this._elements[0]
  }

  pop () {
    return this._elements.splice(0, 1)[0]
  }

  push (element) {
    this._elements.push(element)
  }

  size () {
    return this._elements.length
  }

  toString () {
    const numElements = this._elements.length
    let resultString = ''

    if (this._elements.length === 0) {
      return '[]'
    }

    if (this._elements.length === 1) {
      return `[ ${this._elements[0]} ]`
    }

    for (let i = 0; i < numElements; i++) {
      const currentElement = this._elements[i]
      const lastElementIndex = this._elements.length - 1

      if (i === 0) {
        resultString += `[ ${currentElement}, `
      } else if (i === lastElementIndex) {
        resultString += ` ${currentElement} ]`
      } else {
        resultString += `${currentElement},`
      }
    }

    return resultString
  }
}
