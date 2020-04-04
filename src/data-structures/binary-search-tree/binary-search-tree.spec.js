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
})
