/* eslint-env mocha */

import Bag from './bag';
import {expect} from 'chai';

describe('Bag tests', () => {
  describe('add() tests', () => {
    it('should add one new element', () => {
      const bag = new Bag();

      bag.add(1917);

      expect(bag.size()).to.be.equal(1);
    });
  });

  describe('count() tests', () => {
    it('should return a count of 2', () => {
      const bag = new Bag();

      bag.add(1917);
      bag.add(true);
      bag.add(true);
      bag.add('test');
      bag.add(1917);
      expect(bag.count(1917)).to.be.equal(2);
    });
  });
});
