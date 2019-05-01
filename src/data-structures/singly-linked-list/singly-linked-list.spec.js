/* eslint-env mocha */

import { expect } from 'chai'
import { SinglyLinkedList } from './singly-linked-list'
import { SinglyLinkedListNode } from './singly-linked-list'

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
     
      expect(singlyLinkedList.size).to.be.equal(3)
      singlyLinkedList.clear()
      expect(singlyLinkedList.size).to.be.equal(0)
    })
  })

  describe('size() tests', () => {
    it('should return the correct size', () => {
      const singlyLinkedList = new SinglyLinkedList()
      const singlyListNode1 = new SinglyLinkedListNode(500000000)
      const singlyListNode2 = new SinglyLinkedListNode({place: 'rapture'})
      const singlyListNode3 = new SinglyLinkedListNode(false)

      singlyLinkedList.add(singlyListNode1)
      singlyLinkedList.add(singlyListNode2)
      singlyLinkedList.add(singlyListNode3)
     
      expect(singlyLinkedList.size).to.be.equal(3)
      singlyLinkedList.clear()
      expect(singlyLinkedList.size).to.be.equal(0)
    })
  })
})
