// 1 - creando una funcion
function miFuncion() {
    console.log('Testeando');
};

miFuncion();

const miFuncionEnVariable = function() {
    console.log("Funcion en variable");
};

miFuncionEnVariable();

function funcionConParametro(txt) {
    console.log(`Imprimiendo: ${txt}`);
}

funcionConParametro('Hola');

// 2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function suma(n1, n2) {
    return n1 + n2;
}

const resultado = suma(a, b);

console.log(resultado);
console.log(suma(c, d));

// 3 - alcance de la función
let y = 10;

function testeandoAlcance() {
    let y = 20;
    console.log(`Y dentro de la funcion ${y}`)
}

console.log(`Y fuera de la funcion ${y}`)

testeandoAlcance();

// 4 - alcance anidado
let m = 10;

function alcanceAnidado() {
    let m = 20;

    if(true) {
        let m = 30;
        console.log(m)
    }

    console.log(m)
}

alcanceAnidado();

console.log(m)

// 5 - función flecha
const pruebaFuncionFlecha = () => {
    console.log("Esta es una funcion de flecha");
}

pruebaFuncionFlecha();

const parOImpar = (n) => {
    if (n %2 === 0) {
        console.log("Par");
        return;
    }
    console.log("Impar");
}

parOImpar(5);
parOImpar(6);

// 6 - más sobre funciones de flecha
const raizCuadrada = (x) => {
    return x * x;
}

const raizCuadrada2 = (n) => n * n;

console.log(raizCuadrada(4));
console.log(raizCuadrada2(4));

const helloWorld = () => console.log("Hello");

helloWorld();

// 7 - parámetro opcional
const multiplicacion = function (n, m) {
    if (m === undefined) {
        return n * 2;
    } else {
        return m * n;
    }
}

console.log(multiplicacion(4, 4));
console.log(multiplicacion(4));

const saludo = (name) => {
    if (!name) {
        console.log('Hola');
        return;
    }
    console.log(`Hola ${name}`);
}

saludo();
saludo('Franco');

// 8 - valor predeterminado

const saludoPersonalizado = (nombre, saludo = "Hola") => {
    return `${saludo}, ${nombre}`;
};

console.log(saludoPersonalizado("Franco"));
console.log(saludoPersonalizado("Franco", "Buen dia"));

// 9 - clausura o closure
function algunaFuncion() {
    let txt = "Alguna cosa";

    function mostrar() {
        console.log(txt)
    }

    mostrar();
}

algunaFuncion();

// 10 - mas sobre clausura o closure
const multiplicacionClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const c1 = multiplicacionClosure(5);
const c2 = multiplicacionClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// 11 - recursividad
const hastaDiez = (n, m) => {
    if (n < 20) {
        console.log("¡La función ha dejado de ejecutarse!");
    } else {
        const x = n - m;
        console.log(x)
        hastaDiez(x, m);
    }
};

hastaDiez(100, 7);

// recursividad infinita, cuidado
function ejecutar() {
    console.assert.log("Ejecutando");
    ejecutar();
}

// ejecutar();

function factorial(x) {
    if ( x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;

const result = factorial(num);

console.log(`El factorial del numero ${num} es ${result}`);
