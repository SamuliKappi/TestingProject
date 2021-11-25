import map from "../src/map"

describe('tests for map function', () => {
  test('testing with correct args', () => {
    const square = (n) => n * n
    expect(map([4, 8], square)).toEqual([16, 64])
  })
  test('testing with null as array', () => {
    const square = (n) => n * n
    expect(map(null, square)).toEqual([])
  })

})