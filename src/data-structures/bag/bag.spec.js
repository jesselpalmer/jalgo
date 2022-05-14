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

      bag.add(2022);
      bag.add(true);
      bag.add(true);
      bag.add('test');
      bag.add(2022);

      expect(bag.count(2022)).to.be.equal(2);
    });

    it('should return 0 if nothing has been added', () => {
      const bag = new Bag();

      expect(bag.count()).to.be.equal(0);
    });
  });
});
