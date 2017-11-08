/* eslint-env mocha */

import { expect } from 'chai'
import { binarySearch } from './binary-search'

describe('binarySearch tests', () => {
  it('should find an element if it exists', () => {
    const numList = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999]
    expect(binarySearch(numList, 3)).to.be.equal(4)
  })

  it('should return null an element if it exists', () => {
    const numList = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999]
    expect(binarySearch(numList, 25)).to.be.equal(null)
  })

  it('should return null an element if array is empty', () => {
    const numList = []
    expect(binarySearch(numList, 25)).to.be.equal(null)
  })
})
