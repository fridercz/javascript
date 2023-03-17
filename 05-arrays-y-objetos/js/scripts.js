// 1 - arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log(typeof lista)

const items = ["mario", true, 2, 4, 4.12]

console.log(items)

// 2 - mas sobre arrayas
const arr = ["a", "b", "c", "d"]

console.log(arr[0])
console.log(arr[2])
console.log(arr[10])

// 3 - propiedades
const numbers = [5, 12, 4, 22]

console.log(numbers.length)
console.log(numbers["length"])

const myName = "Matheus"

console.log(myName.length)

// 4 - metodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = "algun texto"

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase)

console.log(text.indexOf("g"))

// 5- objetos
const persona = {
    nombre: "Matheus",
    edad: 35,
    trabajo: "Programador"
}

console.log(persona.nombre)

console.log(persona.nombre.length)

console.log(typeof persona)

// 6 -  creando y eliminando propiedades
const carro = {
    motor: 2.0,
    marca: "VM",
    modelo: "Tiguan",
    km: 20000,
}

console.log(carro)

delete carro.km

console.log(carro)

// 7 - mas sobre objetos
const obj = {
    a: "Test",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c: [],
}

Object.assign(obj2, obj)

console.log(obj2)

// 8 - conociendo mejor los objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(persona))

console.log(Object.entries(obj))

// 9 - mutacion
const a = {
    nombre: "Matheus",
}

const b = a;

console.log(a)
console.log(b)

console.log(a === b)

a.edad = 35

console.log(b)

delete b.edad;

console.log(a)
console.log(b)

// 10 - loop en array
const array = ["a", "b", "c"]

array.push("d")

console.log(array)

console.log(array.length)

array.pop()

const itemRemovido = array.pop()

console.log(itemRemovido)
console.log(array)
console.log(array.length)

array.push("De", "Para", "Inseir", "Varios")

console.log(array)

// 12 - shitf y unshitf

const letras = ["a", "b", "c"]

const letra = letras.shift

console.log(letra)
console.log(letras)

letras.unshift("z", "x", "y")

letras.unshift("p")

console.log(letras)

// 13 - indexof y lastindexof

const myElements = ["Morango", "Maca", "Abacate", "Pera", "Abacate"]

console.log(myElements.indexOf("Maca"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("Abacate"))

console.log(myElements.lastIndexOf("Maca"))

console.log(myElements.indexOf("Mamao"))
console.log(myElements.lastIndexOf("Mamao"))

// 14 - slice
const testSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testSlice.slice(2, 4)

console.log(subArray)

const subArray2 = testSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testSlice.slice(10, 20)

console.log(subArray3)

// 2 en adelante

const subArray4 = testSlice.slice(2)

console.log(subArray4)

// 15 - foreach
const nums = [1, 2, 3, 4, 5]

nums.forEach((n) => [
    console.log(`El número actual es: ${n}`)
])

const posts = [
    {title: "Primer post", category: "PHP"},
    {title: "Segundo post", category: "Javascript"},
    {title: "Tercer post", category: "Python"},
]

posts.forEach((post) => {
    console.log(`Mostrando post ${post.title} de la categoria: ${post.category}`)
})

// 16 - includes
const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("Fiat"))

console.log(brands.includes("Kia"))

if (brands.includes("BMW")) {
    console.log("¡Tiene carros de la marca BMW!")
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest)

// 18 - trim
const trimTest = "  Testeando \n  "

console.log(trimTest.trim())

console.log(trimTest)

console.log(trimTest.trim().length)

console.log(trimTest.length)

// 19 - padstart
const testPadStart = "1"

const newNumber = testPadStart.padStart(4, "0")

console.log(testPadStart)

console.log(newNumber)

const testPadEnd = newNumber.padEnd(10, "0")

console.log(testPadEnd)

// 20 - split
const frase = "La rata mordió la ropa del rey de Roma"

const arrayDeFrase = frase.split()

console.log(arrayDeFrase)

// 21 - join
const itemsParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar ${itemsParaComprar.join(", ")}.`

console.log(fraseDeCompra)

// 22 - repeat
const palabra = "Testeando"

console.log(palabra.repeat(5))

// 23 - rest operator
const sumaInfinita = (...args) => {
    let total = 0

    for ( let i =0; i < args.length; i++) {
        total += args[i]
    }

    return total
}

console.log(sumaInfinita(1, 5, 10))

console.log(sumaInfinita(1, 2, 3, 4, 5, 6, 7, 8, 9))

// 24 - for...of
const sumaInfinita2 = (...args) => {
    let total = 0
    for (num of args) {
        total += num
    }

    return total
}

console.log(sumaInfinita2(1, 5, 10))

console.log(sumaInfinita2(1, 2, 3, 4, 5, 6, 7, 8, 9))

// 25 - destructuring de objetos
const userDetails = {
    firstName: "Matias",
    lastName: "Castro",
    job: "Programador"
}

const { firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

// renobrado variables
const {firstName: primerNombre} = userDetails

console.log(primerNombre)

// 26 - destructuring de arrays
const myList = ["Avion", "Sumarino", "Carro"]

const [vehiculoA, vehiculoB, vehiculoC] = myList

console.log(vehiculoA, vehiculoB, vehiculoC)

// 27 - json
const myJson =
    '{"name": "Matias", "age": 35, "skills": ["PHP", "JavaScript", "Python"]}'

// 28 - json para objeto y objeto para json
const myObject = JSON.parse(myJson)

console.log(myObject)