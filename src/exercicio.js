"use strict";
const multiplicar = (numero1 = 0, numero2 = 0) => numero1 * numero2;
console.log(multiplicar());
const ola = (nome = "") => {
    console.log(`Olá ${nome}`);
};
multiplicar();
ola();
