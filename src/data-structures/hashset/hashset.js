export default class HashSet {
  constructor() {
    this.values = {}
  }

  add(val) {
    this.values[val] = true
  }

  clear() {
    this.values = {}
  }

  has(val) {
    return this.values[val] === true
  }

  remove(val) {
    delete this.values[val]
  }

  size() {
    return this.getValues().length
  }
}
