import divide from '../src/divide'

describe('tests for divide function', () => {
  test('dividing with integers', () => {
    expect(divide(4,2)).toBe(2)
  })
})