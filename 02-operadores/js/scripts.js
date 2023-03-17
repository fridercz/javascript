// 1- Numerico
console.log(typeof 2);
console.log(typeof 2.2);
console.log(typeof -4);

// 2 Operaciones aritmeticas
console.log(2+4);
console.log(10-5);
console.log(5+4);
console.log(10/2);

// 3 Numeros Especiales
console.log(typeof Infinty);
console.log(12*"asd");
console.log(typeof NaN);

// 4 String
console.log("texto");
console.log(`Mas de un texto`);
console.log(typeof "Opa");

// 5 Simbolos espaeciales en string
console.log("testeando \n salto de linea");
console.log("Separación \t de tabulador");

// 6 Concatenacion
console.log("Hoy," + " esta" + " todo" + " bien");
console.log(`Testeando ` + `concatenacion`);

// 7 Interpolacion
console.log(`La suma de 2 + 2 es: ${2 + 2}`);
console.log(`Podemos ejecutar cualquier cosa ${console.log("teste")}`);

// 8 Boleanos
console.log(5 > 2);
console.log(30 > 100);
console.log(typeof true);

// 9 Comparaciones
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 Indentico
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

// 11 Operación lógica en la práctica
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Matheus" === 1);
console.log(10 > 2 || 5 > 100);
console.log(!50 > 10);

// 12 Valores vacios
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// Cambio de tipos
console.log(5 * null);
console.log("Test" * "Opa");
console.log("10" + 1);
console.log("10" - 1);