/* eslint-env mocha */

import { expect } from 'chai'
import BinarySearchTree from './queue'

describe('BinarySearchTree tests', () => {
  describe('smoke test', () => {
    it('should successfully create instance', () => {
      const binarySearchTree = new BinarySearchTree()
      expect(binarySearchTree).not.to.be.null()
    })
  })
})
