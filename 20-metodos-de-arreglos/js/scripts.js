let miArreglo = [1, 2, 3]

// Agregar al final
miArreglo.push(4)
console.log(miArreglo)

// Agregar al inicio
miArreglo.unshift(5)
console.log(miArreglo)

// Remover el ultimo elemento
miArreglo.pop()
console.log(miArreglo)

// Remover el primer elemento
miArreglo.shift()
console.log(miArreglo)

let numeros = [1, 2, 2, 3, 3, 4]

// Eliminar duplicados
let sinDuplicados = [...new Set(numeros)]
console.log(sinDuplicados)