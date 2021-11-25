import isEmpty from '../src/isEmpty'

describe('tests for isEmpty function', () => {
  test('tests with valid params', () => {
    expect(isEmpty(null)).toBe(true)
  })
  test('empty array', () => {
    expect(isEmpty([])).toBe(true)
  })
  test('empty buffer', () => {
    expect(isEmpty(Buffer.alloc(0))).toBe(true)
  })
  test('object with stuff', () => {
    expect(isEmpty({'teppo': 'matti'})).toBe(false)
  })
  test('empty object', () => {
    expect(isEmpty({})).toBe(true)
  })
  test('empty set', () => {
    expect(isEmpty(new Set([]))).toBe(true)
  })
})