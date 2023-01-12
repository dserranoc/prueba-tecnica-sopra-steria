/*

  Desarrolle un algoritmo para el cálculo del salario de un trabajador.
  El importe liquidado (sueldo) depende de una tarifa o precio por hora establecida y de un condicionante sobre las horas trabajadas:
  si la cantidad de horas trabajadas es mayor a 40 horas, la tarifa se incrementa en un 50% para las horas extras.
  Calcular el sueldo recibido por el trabajador en base las horas trabajadas y la tarifa.

*/

export const computeSalary = (rate, hours) => {
  return hours <= 40
    ? rate * hours
    : rate * 40 + (rate * 1.5) * (hours - 40)
}
