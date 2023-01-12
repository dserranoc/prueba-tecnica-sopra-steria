/*

  Escriba un algoritmo que visualice una clasificación de 50 personas según edad y sexo. Deberá mostrar los siguientes resultados:
    a. Cantidad de personas mayores de edad (18 años o más).
    b. Cantidad de personas menores de edad.
    c. Cantidad de personas masculinas mayores de edad.
    d. Cantidad de personas femeninas menores de edad.
    e. Porcentaje que representan las personas mayores de edad respecto al total de personas.
    f. Porcentaje que representan las mujeres respecto al total de personas.

*/

export const generatePeople = () => {
  /*
    W -> Woman (Mujer)
    M -> Man (Hombre)
  */
  const people = []
  for (let i = 0; i < 50; i++) {
    const person = {
      sex: Math.random() < 0.5 ? 'M' : 'W',
      age: Math.floor(Math.random() * 100)
    }
    people.push(person)
  }
  return people
}

export const classifyPeople = async (peopleObj) => {
  const classification = {
    olderThan18: peopleObj.filter((e) => e.age >= 18).length,
    youngerThan18: peopleObj.filter((e) => e.age < 18).length,
    olderThan18Women: peopleObj.filter((e) => e.age >= 18 && e.sex === 'W').length,
    olderThan18Man: peopleObj.filter((e) => e.age >= 18 && e.sex === 'M').length,
    percentageOfPeopleOlderThan18: peopleObj.filter((e) => e.age >= 18).length / peopleObj.length * 100,
    percentageOfWomen: peopleObj.filter((e) => e.sex === 'W').length / peopleObj.length * 100
  }

  return classification
}

export const print = (classification) => {
  const text = `
    Personas mayores de edad: ${classification.olderThan18}
    Personas menores de edad: ${classification.youngerThan18}
    Personas mayores de edad mujeres: ${classification.olderThan18Women}
    Personas mayores de edad hombres: ${classification.olderThan18Man}
    Porcentaje de personas mayores de edad: ${classification.percentageOfPeopleOlderThan18}%
    Porcentaje de mujeres: ${classification.percentageOfWomen}%
  `
  console.log(text)
}
