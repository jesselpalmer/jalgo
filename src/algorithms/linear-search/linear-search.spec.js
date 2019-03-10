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
})
