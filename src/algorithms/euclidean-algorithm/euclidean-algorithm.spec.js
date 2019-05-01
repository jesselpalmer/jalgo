/* eslint-env mocha */

import { expect } from 'chai'
import { euclideanAlgorithm } from './euclidean-algorithm'

describe('Euclidean Algorithm tests', () => {
  it('should return the corerect greates common denominator', () => {
    expect(euclideanAlgorithm(125, 625)).to.be.equal(125)
  })

  it('should return -1 if the element is not in the list', () => {
    expect(euclideanAlgorithm(0, 123)).to.be.equal(-1)
  })
})
