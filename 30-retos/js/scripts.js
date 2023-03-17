// 1
const numeros = [1, 2, 3, 4, ,5]

const res = numeros.reduce((acc, item) => {
    console.log(acc)
    console.log(item)
    return (acc += item)
}, [])

console.log(res, typeof res)


// 2
const name = "John"
//window.name = "Taylor"

const getName = () => {
    const name = "Jeff"
    console.log(this)
    return this.name
}

console.log(getName())

// 3
const numbers = [1, 2, 3, 4, 5]

function applyOperation(n) {
    return new Promise((resolve, reject) => {
        resolve(n)
    })
}

const result = numbers
    .filter(async num => {
        return await applyOperation(num) > 3
    })

//console.log(result)

function applyOp(n){
    return new Promise((resolve) => {
        resolve(n)
    })
}

( async () => {
    //hace todas las peticiones del array a la función asincrona y las resuelve o rechaza.
    ////Esto puede ser muy útil cuando estemos llamando algo asincrono, como una petición a una BD o a un servicio web.
    const numSolicitados = await Promise.all(numbers.map(num => applyOp(num)))

    //luego filtra, ya que filter es síncrono.
    const result = numSolicitados.filter(num => {
        return num > 3
    })

    //por último, las muestra
    console.log (result)

})()

// Hallar factorial de un munero
function factorial(n) {
    if ( n == 0 || n == 1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial(3))

// 4
const obj = {
    "a": 1,
    "b": 2,
    "c": 3
}

let {a, b} = obj

console.log(b)

// 5 
let y = 25
let z = "25"

console.log(y == z)
console.log(y === z)

// 6
let arrayNumeros = [2, 3, 4]

let arrayResultado = arrayNumeros.map(n => n + 2)

console.log(arrayResultado)

// 7 loteria
const randonIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function lottery() {
    const result = []

    while(result.length < 6) {
        const number = randonIntFromInterval(1, 45)
        if (!result.includes(number)) result.push(number)
    }

    return result
}

console.log(lottery())

/*
* 1. Programa que pida dos numeros y que nos diga
* cual es el mayor, el menor y si son iguales
*/

function numerosDemo(num1, num2) {
    if (num1 > num2) {
        return `El primer numero ${num1} es mayor que el segundo numero ${num2}`
    } else if ( num1 < num2) {
        return `El primer numero ${num1} es menor que el segundo numero ${num2}`
    } else {
        return `El primer numero ${num1} es igual al segundo numero ${num2}`
    }
}

console.log(numerosDemo(3, 4))
console.log(numerosDemo(6, 4))
console.log(numerosDemo(4, 4))

/*
* 2. Comprobar si un texto es palidromo
* Resolucion
* Crear una funcion con un parametro
* Separa el texto en un array de letras
* Darle vuelta al array
* Unir el array de letras en un string
* Comparar el strinf con el parametro
*/

function palidromo(texto) {
    let invertido = texto
    // separar texto                
    .split('')
    // revertir el array
    .reverse()
    // unir el array de letras
    .join('')
    return (
        // comparar con el parametro
        invertido === texto
    )                
}

console.log(palidromo('otto'))
