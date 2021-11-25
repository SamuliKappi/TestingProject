import filter from '../src/filter'

describe('tests for filter function', () => {
  test('filter with valid params', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ]
    expect(filter(users, ({active}) => active)).toEqual([{ 'user': 'barney', 'active': true }])
  })
  test('filter with empty array', () => {
    const users = null
    expect(filter(users, ({active}) => active)).toEqual([[]])
  })
})