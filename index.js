//Arrays (1-4)
let arrayVacio = [];
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
let arrayNumerosPares = [0,2,4,6,8];
let arrayBidimensional = [[0,1,2],['a','b','c']];

//Funciones (5-9)
function suma(a,b) {
    return a + b;
};
function potenciacion(c,d) { 
    return Math.pow(c, d);
}

function separarPalabras(frase) {
    return frase.split(' ');
}
function repetirString(string, numero) {
    return string.repeat(numero);
}
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
}

//Mezclando arrays y funciones (10-14)
function ordenarArray(arrayNumeros) {
    return arrayNumeros.sort();
}
function ordenarArray (arrayNumeros) {
    if (arrayNumeros[0]%2===0) return 
};