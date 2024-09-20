import { sum } from './kata0'

describe('kata #0: sumatori', () => {
  test('sumatori de 0 és 0', () => {
    expect(sum(0)).toBe(0)
  })

  test('sumatori de 1 és 1', () => {
    expect(sum(1)).toBe(1)
  })

  test('sumatori de 2 és 3', () => {
    expect(sum(2)).toBe(3)
  })

  test('sumatori de 3 és 6', () => {
    expect(sum(3)).toBe(6)
  })

  test('sumatori de 4 és 10', () => {
    expect(sum(4)).toBe(10)
  })
})
