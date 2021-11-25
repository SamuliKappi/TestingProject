import capitalize from "../src/capitalize";

describe('capitalize function tests', () => {
  test('Normal name', () => {
    expect(capitalize('fRED bonKErs')).toEqual('Fred bonkers')
  })
  test('unicode cow', () => {
    expect(capitalize('\uD83D\uDC04')).toEqual('🐄')
  })
  test('undefined as param', () => {
    expect(capitalize(undefined)).toEqual('Undefined')
  })
  test('array as param', () => {
    expect(capitalize(['a','b', null])).toEqual('A,b,')
  })
  test('Symbol as param', () => {
    expect(capitalize(Symbol('Σ'))).toEqual('Σ')
  })
})