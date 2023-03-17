// Parametros REST
function sumar(a, b, ...c) {
    let resultado = a + b

    c.forEach(function(n) {
        resultado += n
    })

    return resultado
}

console.log(sumar(1, 2))
console.log(sumar(1, 2, 3))
console.log(sumar(1, 2, 3, 4))
console.log(sumar(1, 2, 3, 4, 5))
console.log(sumar(1, 2, 3, 4, 5, 6))
console.log(sumar(1, 2, 3, 4, 5, 6, 7))

// Operador Spread
const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 0]

console.log(array1, array2)

const array3 = [...array1, ...array2]

console.log(array3)

const name = "John"
//window.name = "Taylor"

const getName = () => {
    const name = "Jeff"
    console.log(this)
    return this.name
}

console.log(getName())