import sum from '../src/add';

describe('add function tests', () => {
  test('adding of two positive integers', () => {
    expect(sum(1,2)).toBe(3)
  })
  test('sum of non numerals', () => {
    expect(sum("a","b")).toBe("ab")
  })
  test('sum of integer and null', () => {
    expect(sum(1,null)).toBe(1)
  })
  test('sum of two undefineds', () => {
    expect(sum(undefined, undefined)).toBe(0)
  })
  test('sum of undefined and integer', () => {
    expect(sum(undefined, 1)).toBe(1)
  })
  test('sum of integer and undefined', () => {
    expect(sum(1, undefined)).toBe(1)
  })
  test('sum array and integer', () => {
    expect(sum([1,2,3], 1)).toBe(NaN)
  })
})
