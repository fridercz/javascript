// 1 Variables
let nombre = "Frider";
console.log(nombre);

nombre = "Matheus Battista";
console.log(nombre);

const edad = 40;
console.log(edad);

//edad = 35; // Uncaught TypeError: Assignment to constant variable.

console.log(typeof nombre);
console.log(typeof edad);

// 2 Mas sobre variables
//let 2test = "invalido";
//let @test = "invalido";
let a = 10, b = 20, c = 30;
console.log(a, b, c);

const nombrecompleto = "Frider Cisneros";
const nombreCompleto = "Joao da silva";

console.log(nombrecompleto, nombreCompleto);

let _test = "valido";
let $test = "valido";

console.log(_test, $test);

// 3 Prompt
//const age = prompt("Digite su edad");
//console.log(`Usted tiene ${age} años`);

// 4 Alert
//alert("test");

const z = 10;
//alert(`El numero de z es: ${z}`);

// 5 Math
console.log(Math.max(5, 2, 4, 10));
console.log(Math.min(5, 2, 4, 10));

console.log(Math.floor(5.94));
console.log(Math.ceil(5.14));

// 6 Console
console.log("Test");
console.error("Error");
console.warn("Aviso");

// 7 if
const m = 10;

if(m > 5) {
    console.log("M es mayor que 5!");
}

const user ="Joao";

if (user === "Joao") {
    console.log("Hola Joao");
}

if (user === "Maria") {
    console.log("Hola Maria");
}

// 8 Else
const loggedIn = false;

if (loggedIn) {
    console.log("Usuario autenticado");
} else {
    console.log("Usuario no autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Numeros mas altos!");
} else {
    console.log("¡Los números no son lo suficientemente altos!")
}

// 9 Else If
if (1 > 2) {
    console.log("Test");
} else if (2 > 3) {
    console.log("Test 2");
} else if (5 > 1) {
    console.log("Ahora si");
}

const userName = "Matheus";
const userAge = 31;

if (userName === "Jose") {
    console.log("Bienvenido jose");
} else if (userName === "Matheus" && userAge === 31) {
    console.log(`Hola ${userName} usted tiene ${userAge} años`);
} else {
    console.log("Ninguna condicion es verdadera");
}

// 10 while
let p = 0;

while (p < 5) {
    console.log(`Repitiendo ${p}`)
    p++;
}

let num = 30;
while (num <= 50) {
    num++;
    console.log(num);
}

// Do While
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o = o - 1;
} while (o > 1);

// 12 For
for (let i = 0; i <= 3; i++) {
    console.log(i);
}

// Decrecer del 10 al 0
for (let i = 10; i > 0; i -= 1) {
    console.log(i);
}

// Intervalo de 5 entre el 0 a 100
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}

let r = 10;

for (r; r > 0; r = r -1) {
    console.log(`la r esta disminuyendo ${r}`);
}

// 13 Identidad
for (let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
        console.log(`Mayor que 10! ${u} ${u * 2}`);
    } else {
        if(u / 2 === 0) {
            console.log(`Dio !0 ${u / 2}`);
        }
    }
}

// 14 Break
