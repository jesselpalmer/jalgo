/* eslint-env mocha */

import { expect } from 'chai'
import BinarySearchTree from './binary-search-tree'

describe('BinarySearchTree tests', () => {
  describe('smoke test', () => {
    it('should successfully create instance', () => {
      const binarySearchTree = new BinarySearchTree()
      expect(binarySearchTree).not.equal(null)
    })
  })

  describe('contains() test', () => {
    it('should return true if tree contains value', () => {
      const binarySearchTree = new BinarySearchTree(1982)
      binarySearchTree.insert(1955)
      binarySearchTree.insert(1999)
      binarySearchTree.insert('a')
      binarySearchTree.insert(false)
      binarySearchTree.insert(-12345)
      expect(binarySearchTree.contains(1955)).to.equal(true)
      expect(binarySearchTree.contains(1999)).to.equal(true)
      expect(binarySearchTree.contains(-12345)).to.equal(true)
    })
  })
})
