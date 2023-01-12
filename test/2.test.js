import { classifyPeople } from '../src/ejer2/2'

const peopleTest = [
  { sex: 'M', age: 18 },
  { sex: 'W', age: 13 },
  { sex: 'W', age: 18 },
  { sex: 'W', age: 27 },
  { sex: 'W', age: 1 },
  { sex: 'M', age: 19 },
  { sex: 'M', age: 21 },
  { sex: 'M', age: 16 },
  { sex: 'W', age: 67 },
  { sex: 'M', age: 50 }
]

describe('classifyPeople', () => {
  it('should return the correct classification', async () => {
    const classification = classifyPeople(peopleTest)
    expect(classification).toEqual({
      olderThan18: 7,
      youngerThan18: 3,
      olderThan18Women: 3,
      olderThan18Man: 4,
      percentageOfPeopleOlderThan18: 70,
      percentageOfWomen: 50
    })
  })
})
