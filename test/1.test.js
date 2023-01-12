import { evenOrOdd } from '../src/ejer1/1'

describe('evenOrOdd', () => {
  it('should return an array of even numbers', () => {
    expect(evenOrOdd(20).sequence).toEqual([20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0])
  })

  it('should return an array of odd numbers', () => {
    expect(evenOrOdd(17).sequence).toEqual([17, 15, 13, 11, 9, 7, 5, 3, 1])
  })
})
