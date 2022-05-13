export default class Bag {
  #elements = [];

  constructor(elements = []) {
    this.#elements = elements;
  }

  add(element) {
    this.#elements.push(element);
  }

  contains(element) {
    return this.#elements.includes(element);
  }

  count(element) {
    return this.#elements
        .filter((currentElement) => currentElement === element).length;
  }

  size() {
    return this.#elements.length;
  }
}
