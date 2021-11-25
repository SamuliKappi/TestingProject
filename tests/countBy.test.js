import countBy from '../src/countBy'

describe('countBy function tests', () => {
  test('using correct data', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 })
  })
  test('using invalid iteratee', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
    expect(countBy(users, value => value.beep)).toEqual({})
  })
  test('using empty array', () => {
    const users = []
    expect(countBy(users, value => value.beep)).toEqual({})
  })
  test('using empty object', () => {
    const users = {}
    expect(countBy(users, value => value.beep)).toEqual({})
  })
})