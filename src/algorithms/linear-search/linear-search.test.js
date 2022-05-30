import linearSearch from './linear-search';

describe('Linear Search tests', () => {
  test('should return the correct index of the element if it is contained in the list', () => {
    const list = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    const element = 3;

    expect(linearSearch(list, element)).toBe(4);
  });

  test('should return -1 if the element is not in the list', () => {
    const list = [-121, 0, 1, 2, 3, 4, 5, 1000, 9999];
    const element = 17;

    expect(linearSearch(list, element)).toBe(-1);
  });
});
