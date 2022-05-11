export default class Bag {
  #elements = [];

  constructor(elements = []) {
    this.#elements = elements;
  }

  add(element) {
    this.#elements.push(element);
  }

  size() {
    return this.#elements.length;
  }
}
