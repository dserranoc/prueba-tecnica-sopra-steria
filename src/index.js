import { evenOrOdd } from './ejer1/1.js'
import { generatePeople, classifyPeople, print } from './ejer2/2.js'
import { computeSalary } from './ejer3/3.js'

console.log('------ Ejercicio 1 ------\n')
const evenNumber = 20
const oddNumber = 21
console.log(`El número ${evenNumber} es ${evenOrOdd(evenNumber).evenOrOdd === 'even' ? 'par' : 'impar'} y por lo tanto su secuencia es: ${evenOrOdd(evenNumber).sequence}`)
console.log(`El número ${oddNumber} es ${evenOrOdd(oddNumber).evenOrOdd === 'odd' ? 'impar' : 'par'} y por lo tanto su secuencia es: ${evenOrOdd(oddNumber).sequence}`)

console.log('\n------ Ejercicio 2 ------')
const people = generatePeople()
const classification = classifyPeople(people)
print(classification)

console.log('\n------ Ejercicio 3 ------\n')
console.log(`El sueldo de una persona que trabaja 30 horas a 10€/hora es de ${computeSalary(10, 30)}€`)
console.log(`El sueldo de una persona que trabaja 40 horas a 10€/hora es de ${computeSalary(10, 40)}€`)
console.log(`El sueldo de una persona que trabaja 50 horas a 10€/hora es de ${computeSalary(10, 50)}€`)

console.log('\n------------------------')
