/* eslint-env mocha */

import { expect } from 'chai'
import binarySearch from './binary-search'

describe('Binary Search tests', () => {
  it('should find an element if it exists and is a number', () => {
    const testArray = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999]
    expect(binarySearch(testArray, 3)).to.be.equal(4)
  })

  it('should return index if an element exists and is a string', () => {
    const testArray = ['apple', 'facebook', 'google', 'netflix']
    expect(binarySearch(testArray, 'google')).to.be.equal(2)
  })

  it('should return index if the array contains numbers and strings and the element exists', () => {
    const testArray = [-42324, 213123, 'amazon', 'uber']
    expect(binarySearch(testArray, 'amazon')).to.be.equal(2)
  })

  it('should return -1 if an array is empty', () => {
    const testArray = []
    expect(binarySearch(testArray, 25)).to.be.equal(-1)
  })
})
