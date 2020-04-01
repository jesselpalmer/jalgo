class HashSet {
  constructor() {
    this.values = {}
  }

  add(val) {
    this.values[val] = true
  }

  has(val) {
    return this.values[val] === true
  }

  remove(val) {
    delete this.values[val]
  }

  getValues() {
    return Object.keys(this.values)
  }
}
