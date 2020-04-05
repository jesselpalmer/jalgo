/* eslint-env mocha */

import { expect } from 'chai'
import HashSet from './hashset'

describe('HashSet tests', () => {
  describe('add() tests', () => {
    it('should add an element correctly', () => {
      const hashSet = new HashSet()
      hashSet.add(35)
      expect(hashSet.has(35)).equal(true)
    })
  })

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

  describe('size() tests', () => {
    it('should return the correct number of elements', () => {
      const hashSet = new HashSet()
      hashSet.add(10)
      hashSet.add(11)
      hashSet.add(999)
      expect(hashSet.size()).equal(3)
    })
  })
})
