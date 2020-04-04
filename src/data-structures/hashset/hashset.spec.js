/* eslint-env mocha */

import { expect } from 'chai'
import HashSet from './hashset'

describe('HashSet tests', () => {
  describe('has() tests', () => {
    it('should be true if hashset contains value', () => {
      const hashSet = new HashSet()
      hashSet.add(5)
      expect(hashSet.has(5)).equal(true)
    })

    it('should be false if hashset does not contain value', () => {
      const hashSet = new HashSet()
      expect(hashSet.has(5)).equal(false)
    })
  })
})
