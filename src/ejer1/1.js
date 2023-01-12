/*

 Escriba un algoritmo que lea un número entero y determine si es par o impar.
 Si es par, que escriba todos los pares de manera descendiente desde sí mismo y hasta el cero.
 Si es impar, que escriba todos los impares de manera descendiente desde si sí mismo hasta el uno.
 Utilice la instrucción LEER NUMERO al inicio del programa para cargar un número en la variable NUMERO.

 */

export const evenOrOdd = (number) => {
  const reversedSequence = [...Array(number + 1).keys()].reverse()

  return number % 2 === 0
    ? { evenOrOdd: 'even', sequence: reversedSequence.filter((e) => e % 2 === 0) }
    : { evenOrOdd: 'odd', sequence: reversedSequence.filter((e) => e % 2 !== 0) }
}
