import defaultToAny from '../src/defaultToAny'

describe('defaultToAny function tests', () => {
  test('testing with correct params', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1)
  })
  test('testing with null', () => {
    expect(defaultToAny(null, 10, 20)).toBe(10)
  })
})