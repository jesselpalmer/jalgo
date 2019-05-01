/* eslint-env mocha */

import { expect } from 'chai'
import { binarySearch } from './binary-search'

describe('Binary Search tests', () => {
  it('should find an element if it exists', () => {
    const testArray = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999]
    expect(binarySearch(testArray, 3)).to.be.equal(4)
  })

  it('should return index if an element exists', () => {
    const testArray = ['a','b','c','d']
    expect(binarySearch(testArray, 'b')).to.be.equal(1)
  })

  it('should return index if an array of different data types exists', () => {
    const testArray = [-42324, "b", null, undefined]
    expect(binarySearch(testArray, null)).to.be.equal(2)
  })

  it('should return -1 if an array is empty', () => {
    const testArray = []
    expect(binarySearch(testArray, 25)).to.be.equal(-1)
  })
})
