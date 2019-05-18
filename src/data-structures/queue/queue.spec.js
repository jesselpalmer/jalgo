/* eslint-env mocha */

import { expect } from 'chai'
import Queue  from './queue'

describe('Queue tests', () => {
  describe('enqueue() tests', () => {
    it('should add values to the queue', () => {
      const queue = new Queue()
      queue.enqueue('wheatley')
      queue.enqueue('glados')
      queue.enqueue('cave johnson')
      expect(queue.size()).to.be.equal(3)
    })
  })

  describe('dequeue() tests', () => {
    it('should add values to the queue', () => {
      const queue = new Queue()
      queue.enqueue('wheatley')
      queue.enqueue('glados')
      queue.enqueue('cave johnson')
      expect(queue.dequeue()).to.be.equal('cave johnson')
      expect(queue.size()).to.be.equal(2)
    })
  })
  
  describe('back() tests', () => {
    it('should return the last value in the queue', () => {
      const queue = new Queue()
      queue.enqueue('wheatley')
      queue.enqueue('cave johnson')
      queue.enqueue('glados')
      expect(queue.back()).to.be.equal('glados')
    })
  })

  describe('size() tests', () => {
    it('should return the correct size', () => {
      const queue = new Queue()
      queue.enqueue('wheatley')
      queue.enqueue('glados')
      expect(queue.size()).to.be.equal(2)
    })
  })

  describe('clear() tests', () => {
    it('should remove all of the elements from the queue', () => {
      const queue = new Queue()
      queue.enqueue('wheatley')
      queue.enqueue('glados')
      queue.enqueue('cave johnson')
      queue.clear()
      expect(queue.size()).to.be.equal(0)
    })
  })
})
