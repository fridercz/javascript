// objetos literales

let nombre = "Boby", edad = 7

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function() {
        console.log("guauu guauu!!!")
    }
}

console.log(perro)
perro.ladrar()

const dog = {
    nombre,
    edad,
    ladrar() {
        console.log("guauu guauu guauu!!!")
    }
    // funcion de flecha no recomebdado
    // ladrar: () => console.log("guauu guauu guauu!!!")
}

console.log(dog)
dog.ladrar()