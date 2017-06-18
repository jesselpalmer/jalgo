/* eslint-env mocha */

import { expect } from 'chai'
import Stack from './stack'

describe('SuperStack class', () => {
  describe('clear() method', () => {
    it('should clear an array with elements', () => {
      const stack = new Stack()
      stack.push('stanford')
      stack.push('cmu')
      stack.clear()
      expect(stack.size()).to.be.equal(0)
    })
  })

  describe('isEmpty() method', () => {
    it('should return true if empty', () => {
      const stack = new Stack()
      expect(stack.isEmpty()).to.be.true
    })

    it('should return false if not empty', () => {
      const testArray = [1, 2, 3]
      const stack = new Stack(testArray)
      expect(stack.isEmpty()).to.be.false
    })

    it('should return false if empty array is passed to it', () => {
      const testArray = []
      const stack = new Stack(testArray)
      expect(stack.isEmpty()).to.be.true
    })
  })

  describe('peek() method', () => {
    it('should return the only element', () => {
      const stack = new Stack()
      stack.push('hopper')
      expect(stack.peek()).to.be.equal('hopper')
    })

    it('should return the first element', () => {
      const stack = new Stack()
      stack.push('babbage')
      stack.push('hopper')
      stack.push('knuth')
      expect(stack.peek()).to.be.equal('babbage')
    })
  })

  describe('size() method', () => {
    it('should return the correct size', () => {
      const stack = new Stack()
      stack.push(4)
      expect(stack.size()).to.be.equal(1)
    })
  })

  describe('toString() method', () => {
    it('should return [] when stack is empty', () => {
      const stack = new Stack()
      expect(stack.toString()).to.be.equal('[]')
    })
  })
})