/* eslint-env mocha */

import { expect } from 'chai'
import { linearSearch } from './linear-search'

describe('linearSearch tests', () => {
  it('should return the corerect index the number is in the list', () => {
    const numList = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999]
    expect(linearSearch(numList, 3)).to.be.equal(4)
  })

  it('should return -1 if the number is not in the list', () => {
    const numList = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999]
    expect(linearSearch(numList, 17)).to.be.equal(-1)
  })

  it('should return -1 an element if array is empty', () => {
    const numList = []
    expect(linearSearch(numList, 97)).to.be.equal(-1)
  })

  it('should return -1 an element if array is undefined', () => {
    const numList = undefined
    expect(linearSearch(numList, 52)).to.be.equal(-1)
  })

  it('should return -1 an element if array is null', () => {
    const numList = null
    expect(linearSearch(numList, 11)).to.be.equal(-1)
  })
})
