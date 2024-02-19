//Arrays (1-4)
/*1*/let arrayVacio = [];
/*2*/let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/*3*/let arrayNumerosPares = [0, 2, 4, 6, 8];
/*4*/let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//Funciones (5-9)
/*5*/function suma(a, b) {
    return a + b;
};
/*6*/function potenciacion(c, d) {
    return Math.pow(c, d);
}

/*7*/function separarPalabras(frase) {
    return frase.split(' ');
}

/*8*/function repetirString(string, numero) {
    return string.repeat(numero);
}

/*9*/function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

//Mezclando arrays y funciones (10-14)
/*10*/function ordenarArray(arrayNumeros) {
    return arrayNumeros.sort((a, b) => a - b); //De menor a mayor no necesita los a y b
}
/*11*/function obtenerPares (numerosPares) {
    let dameNumero = [];
    for (let i = 0; i < numerosPares.length; i++) {
        if (numerosPares[i]%2 === 0) {
            dameNumero.push(numerosPares[i])
        }
    }
    return dameNumero
};

/*12*/function pintarArray(arrayQueSea) {
    return (`'[${arrayQueSea}]'`);
};

/*13*/

/*14*/const eliminarDuplicados = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  let arrayListo = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != arr[i+1]) {
    arrayListo.push(arr[i])
    }
};  
  return arrayListo;
};

/*function eliminarDuplicados(cosota) {
    let resultao = cosota.filter((item, index) => {
        return cosota.indexOf(item) === index;
    });
    return resultao;
};*/

//Arrays (15-18)
/*15*/let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
/*16*/let holaMundo = ['Hola','Mundo'];
/*17*/let loGuardoTodo = ['hola','que', 23,42.33,'tal'];
/*18*/let arrayDeArrays = [[756,'nombre'],[225,'apellido'],[298,'direccion']];

//Funciones (19-22)
/*19*/function multiplicacion(numero1, numero2) {
    return numero1 * numero2
};
/*20*/function division(numero1, numero2) {
    return numero1 / numero2;
};
/*21*/function esPar (numero) {
    if (numero%2===0) return true;
    return false;
}
/*22*/ function resta(numero1,numero2) {
    return numero1 - numero2
}
let arrayFunciones = [
    suma,
    resta,
    multiplicacion,
];

//Mezclando arrays y funciones (23-26)
/*23*/function ordenarArray2 (arrayNumeros) {
    return arrayNumeros.sort((a, b) => b - a);
}
/*24*/function obtenerImpares (arrayNumeros) {
    let dameNumero = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i]%2 === 1) {
            dameNumero.push(arrayNumeros[i])
        }
    }
    return dameNumero
};

/*25*/function sumarArray (arrayNumerico) {
    let sumaTotal = 0
    for (let i = 0; i < arrayNumerico.length; i++) {
        sumaTotal += arrayNumerico[i];
    }
    return sumaTotal
};

/*26*/function multiplicarArray (arrayNumerico) {
    let multiTotal = 1
    for (let i = 0; i < arrayNumerico.length; i++) {
        multiTotal *= arrayNumerico[i];
    }
    return multiTotal
};