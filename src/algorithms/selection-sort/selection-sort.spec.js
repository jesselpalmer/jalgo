/* eslint-env mocha */

import {expect} from 'chai';
import selectionSort from './selection-sort';

describe('Selection Sort tests', () => {
  it('should sort a list of numbers', () => {
    const list = [2, 9, 12, 0, 3, -121, -2, 4];
    const expected = [-121, -2, 0, 2, 3, 4, 9, 12];
    const actual = selectionSort(list);
    expect(actual).eql(expected);
  });

  it('should sort a list of strings', () => {
    const list = ['stanford', 'berkeley', 'mit', 'cmu'];
    const expected = ['berkeley', 'cmu', 'mit', 'stanford'];
    const actual = selectionSort(list);
    expect(actual).eql(expected);
  });
});
