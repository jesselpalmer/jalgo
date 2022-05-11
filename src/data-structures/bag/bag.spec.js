/* eslint-env mocha */

import Bag from "./bag";
import {expect} from "chai";

describe('Bag tests', () => {
  describe('add() tests', () => {
    it('should add one new element', () => {
      const bag = new Bag();

      bag.add(1917);

      expect(bag.size()).to.be.equal(1);
    })
  })
});
