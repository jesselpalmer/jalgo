/* eslint-env mocha */

import {expect} from 'chai';
import Queue from './queue';

describe('Queue tests', () => {
  describe('back() tests', () => {
    it('should return the last value in the queue', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('cave johnson');
      queue.enqueue('glados');
      expect(queue.back()).to.be.equal('glados');
    });

    it('should return null if queue is empty', () => {
      const queue = new Queue();
      expect(queue.back()).to.be.equal(null);
    });
  });

  describe('clear() tests', () => {
    it('should remove all of the elements from the queue', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      queue.clear();
      expect(queue.size()).to.be.equal(0);
    });
  });

  describe('dequeue() tests', () => {
    it('should add values to the queue', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      expect(queue.dequeue()).to.be.equal('cave johnson');
      expect(queue.size()).to.be.equal(2);
    });
  });

  describe('enqueue() tests', () => {
    it('should add values to the queue', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      queue.enqueue('cave johnson');
      expect(queue.size()).to.be.equal(3);
    });
  });

  describe('isEmpty()', () => {
    it('should be true if there are no elements', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).to.be.equal(true);
    });
  });

  describe('peek()', () => {
    it('should return the first element', () => {
      const queue = new Queue();
      queue.enqueue('chell');
      expect(queue.peek()).to.be.equal('chell');
    });

    it('should return null if queue is empty', () => {
      const queue = new Queue();
      expect(queue.peek()).to.be.equal(null);
    });
  });

  describe('size() tests', () => {
    it('should return the correct size', () => {
      const queue = new Queue();
      queue.enqueue('wheatley');
      queue.enqueue('glados');
      expect(queue.size()).to.be.equal(2);
    });
  });
});
