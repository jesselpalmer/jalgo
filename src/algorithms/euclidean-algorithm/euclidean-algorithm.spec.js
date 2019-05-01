/* eslint-env mocha */

import { expect } from 'chai'
import { euclideanAlgorithm } from './euclidean-algorithm'

describe('Euclidean Algorithm tests', () => {
  it('should return the corerect greatest common denominator', () => {
    expect(euclideanAlgorithm(125, 625)).to.be.equal(125)
  })

  it('should return -1 if their are no common denominators', () => {
    expect(euclideanAlgorithm(0, 123)).to.be.equal(-1)
  })

  it('should return -1 if only one parameter is passed in', () => {
    expect(euclideanAlgorithm(123)).to.be.equal(-1)
  })

  it('should return -1 if no parameters are passed in', () => {
    expect(euclideanAlgorithm()).to.be.equal(-1)
  })
})
