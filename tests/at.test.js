import at from '../src/at'

describe('at funciton testing', () => {
  test('Testing at with valid values', () => {
    const object = {
      'a': {
        'b' : 'big stuff',
        'c' : 'stuff'
      },
      'd' : 'nothing'
    }
    expect(at(object, ['a.b'])).toEqual(['big stuff'])
  })
  test('Testing at with null value', () => {
    const object = {undefined: null}
    expect(at(object, ['a.b'])).toEqual([undefined])
  })
  test('No paths given',() => {
    const object = {
      'a': {
        'b' : 'big stuff',
        'c' : 'stuff'
      },
      'd' : 'nothing'
    }
    expect(at(object, ['a.c', 'd', 'f', 'a[2]'])).toEqual(['stuff', 'nothing', undefined, undefined])
  })
})