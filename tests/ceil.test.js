import ceil from '../src/ceil'

describe('ceil function tests', () => {
  test('rounding up to 2 decimals', () => {
    expect(ceil(420,69, 2)).toEqual(420,70)
  })
  test('rounding with no precision', () =>{
    expect(ceil(5)).toEqual(5)
  })
})