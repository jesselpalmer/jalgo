/* eslint-env mocha */

import { expect } from 'chai'
import { SinglyLinkedList } from './singly-linked-list'
import { SinglyLinkedListNode } from './singly-linked-list'

describe('SinglyLinkedList tests', () => {
  it('should clear the singly linked list', () => {
    const singlyLinkedList = new SinglyLinkedList()
    const testSinglyListNode = new SinglyLinkedListNode(4)
    singlyLinkedList.add(testSinglyListNode)

    expect(testSinglyListNode.length).to.be.equal(1)
    singlyLinkedList.clear()
    expect(testSinglyListNode.length).to.be.equal(0)
  })
})
