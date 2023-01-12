import { computeSalary } from '../src/ejer3/3'

describe('computeSalary', () => {
  it('rate <= 40 -> should return the correct salary', async () => {
    const salary = await computeSalary(10, 40)
    expect(salary).toEqual(400)
  })

  it('rate > 40 -> should return the correct salary', async () => {
    const salary = await computeSalary(10, 50)
    expect(salary).toEqual(550)
  })
})
