/* eslint-env mocha */

import { expect } from 'chai'
import HashSet from './hashset'

describe('HashSet tests', () => {
  describe('smoke test', () => {
    it('should successfully create instance', () => {
      const hashSet = new HashSet()
      expect(hashSet).not.to.be.null()
    })
  })
})
