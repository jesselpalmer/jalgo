/* eslint-env mocha */

import { expect } from 'chai'
import SinglyLinkedList from './singly-linked-list'
import SinglyLinkedListNode from './singly-linked-list-node'

describe('Singly Linked List tests', () => {
  describe('clear() tests', () => {
    it('should clear the singly linked list', () => {
      const singlyLinkedList = new SinglyLinkedList()
      const singlyListNode1 = new SinglyLinkedListNode(-134)
      const singlyListNode2 = new SinglyLinkedListNode(1337.19)
      const singlyListNode3 = new SinglyLinkedListNode('andrew ryan')

      singlyLinkedList.add(singlyListNode1)
      singlyLinkedList.add(singlyListNode2)
      singlyLinkedList.add(singlyListNode3)

      expect(singlyLinkedList.size()).to.be.equal(3)
      singlyLinkedList.clear()
      expect(singlyLinkedList.size()).to.be.equal(0)
    })
  })

  describe('size() tests', () => {
    it('should return the correct size', () => {
      const singlyLinkedList = new SinglyLinkedList()
      const singlyListNode1 = new SinglyLinkedListNode(500000000)
      const singlyListNode2 = new SinglyLinkedListNode({ place: 'rapture' })
      const singlyListNode3 = new SinglyLinkedListNode(false)

      singlyLinkedList.add(singlyListNode1)
      singlyLinkedList.add(singlyListNode2)
      singlyLinkedList.add(singlyListNode3)

      expect(singlyLinkedList.size()).to.be.equal(3)
      singlyLinkedList.clear()
      expect(singlyLinkedList.size()).to.be.equal(0)
    })
  })

  describe('get() tests', () => {
    it('should get first value', () => {
      const singlyLinkedList = new SinglyLinkedList()
      const singlyListNode1 = new SinglyLinkedListNode(1999)
      const singlyListNode2 = new SinglyLinkedListNode({ place: 'mineravas den' })
      const singlyListNode3 = new SinglyLinkedListNode(true)

      singlyLinkedList.add(singlyListNode1)
      singlyLinkedList.add(singlyListNode2)
      singlyLinkedList.add(singlyListNode3)

      expect(singlyLinkedList.get(0)).to.be.equal(1999)
    })

    it('should return null if the index is larger that the size of the list', () => {
      const singlyLinkedList = new SinglyLinkedList()
      const singlyListNode1 = new SinglyLinkedListNode(1999)
      const singlyListNode2 = new SinglyLinkedListNode({ place: 'mineravas den' })
      const singlyListNode3 = new SinglyLinkedListNode(true)

      singlyLinkedList.add(singlyListNode1)
      singlyLinkedList.add(singlyListNode2)
      singlyLinkedList.add(singlyListNode3)

      expect(singlyLinkedList.get(4)).to.be.equal(null)
    })

    it('should retun the first value if no index is passed in', () => {
      const singlyLinkedList = new SinglyLinkedList()
      const singlyListNode1 = new SinglyLinkedListNode(1999)
      const singlyListNode2 = new SinglyLinkedListNode({ place: 'mineravas den' })
      const singlyListNode3 = new SinglyLinkedListNode(true)

      singlyLinkedList.add(singlyListNode1)
      singlyLinkedList.add(singlyListNode2)
      singlyLinkedList.add(singlyListNode3)

      expect(singlyLinkedList.get()).to.be.equal(1999)
    })

    it('should return null if there are no nodes in the singly linked list', () => {
      const singlyLinkedList = new SinglyLinkedList()

      expect(singlyLinkedList.get()).to.be.equal(null)
    })
  })

  describe('getFirst() tests', () => {
    it('should get first value', () => {
      const singlyLinkedList = new SinglyLinkedList()
      const singlyListNode1 = new SinglyLinkedListNode(1999)
      const singlyListNode2 = new SinglyLinkedListNode({ place: 'mineravas den' })
      const singlyListNode3 = new SinglyLinkedListNode(true)

      singlyLinkedList.add(singlyListNode1)
      singlyLinkedList.add(singlyListNode2)
      singlyLinkedList.add(singlyListNode3)

      expect(singlyLinkedList.getFirst()).to.be.equal(1999)
    })

    it('should return null if there are no nodes in the singly linked list', () => {
      const singlyLinkedList = new SinglyLinkedList()

      expect(singlyLinkedList.getFirst()).to.be.equal(null)
    })
  })

  describe('getLast() tests', () => {
    it('should get last value', () => {
      const singlyLinkedList = new SinglyLinkedList()
      const singlyListNode1 = new SinglyLinkedListNode(1999)
      const singlyListNode2 = new SinglyLinkedListNode({ place: 'mineravas den' })
      const singlyListNode3 = new SinglyLinkedListNode(true)

      singlyLinkedList.add(singlyListNode1)
      singlyLinkedList.add(singlyListNode2)
      singlyLinkedList.add(singlyListNode3)

      expect(singlyLinkedList.getLast()).to.be.equal(true)
    })

    it('should return null if there are no nodes in the singly linked list', () => {
      const singlyLinkedList = new SinglyLinkedList()

      expect(singlyLinkedList.getLast()).to.be.equal(null)
    })
  })
})
