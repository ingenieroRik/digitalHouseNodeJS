// Microdesafio 2

let string1 = 'Graduados de HTML5: "30 45 25 34 18 23 16 50 72 70"';
let string2 = 'Graduados de CSS3: "50 45 71 34 23 45 65 75 63 43 74 70"';
let string3 = 'Graduados de JAVASCRIPT: "70 65 58 45 23 57 34 17 72"';
let string4 = 'Graduados de NODEJS: "45 56 73 34 65 72 70 32"';

function convertirAArray (string) {

    /* array original = 'Graduados de HTML5: "30 45 25 34 18 23 16 50 72 70"' */

    // Buscamos el indice de la primer comilla doble
    let indice_comillas = string.indexOf('"');

    // Cortamos el array para quedarnos con todo lo que hay desde la comilla doble en adelante
    let numeros_con_comillas = string.slice(indice_comillas, string.length-1);
    // numeros_con_comillas = '30 45 25 34 18 23 16 50 72 70"'

    // Eliminamos la última comilla
    let numeros_sin_comillas = numeros_con_comillas.replace('"', '');
    // numeros_sin_comillas = '30 45 25 34 18 23 16 50 72 70'

    // Convertimos el string a array (atentos que los elementos internos siguen siendo strings)
    let arrayFinal = numeros_sin_comillas.split(" ");
    // arrayFinal = ['30', '45', '25', '34', '18', '23', '16', '50', '72', '70']

    // Recorremos el array convirtiendo los strings a numeros, para poder hacer calculos luego
    for (let i = 0; i < arrayFinal.length; i++) {
        arrayFinal[i] = parseInt(arrayFinal[i])
    }
    // arrayFinal = [30, 45, 25, 34, 18, 23, 16, 50, 72, 70]

    // Devolvemos el array
    return arrayFinal
}

// Llamamos a la función de arriba con los distintos strings, y guardamos los resultados
let array1 = convertirAArray(string1);
let array2 = convertirAArray(string2);
let array3 = convertirAArray(string3);
let array4 = convertirAArray(string4);

/* console.table(array1);
console.table(array2);
console.table(array3);
console.table(array4); */

function calcularPromedio (curso1, curso2, curso3, curso4, numeroCurso) {

    let cursoAUtilizar;
    switch (numeroCurso) {
        case 1:
            cursoAUtilizar = curso1
            break;
        case 2:
            cursoAUtilizar = curso2
            break;
        case 3:
            cursoAUtilizar = curso3
            break;
        case 4:
            cursoAUtilizar = curso4
            break;
        default:
            return "Ingrese un valor del 1 al 4"
    }
    
    let promedioTemporal = 0;

    for (let i = 0; i < cursoAUtilizar.length; i++) {
        promedioTemporal += cursoAUtilizar[i]
    }

    let promedioFinal = promedioTemporal / cursoAUtilizar.length;
    
    return promedioFinal
}

/* console.log(calcularPromedio(array1, array2, array3, array4, 4)) */