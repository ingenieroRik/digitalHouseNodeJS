/* Necesitan un código que permita determinar el
promedio de alumnos egresados por curso. Para lograrlo debemos realizar lo
siguiente:
a. Crear cuatro variables y asignar a cada una las siguientes cadenas de texto:
i. Graduados de HTML5: “30 45 25 34 18 23 16 50 72 70”
ii. Graduados de CSS3: “50 45 71 34 23 45 65 75 63 43 74 70”
iii. Graduados de JAVASCRIPT: “70 65 58 45 23 57 34 17 72”
iv. Graduados de NODEJS: “45 56 73 34 65 72 70 32”
b. A cada una de las variables que contienen las cadenas de texto, habrá que
convertirlas a arrays, separando cada elemento por una coma
c. Crear una función que reciba como parámetros los cuatro arrays de los
alumnos graduados y un número comprendido entre el 1 y el 4, donde:
i. 1 = HTML5
ii. 2 = CSS3
iii. 3 = JAVASCRIPT
iv. 4 = NODEJS
La función tendrá la responsabilidad de calcular y devolver el promedio de
graduados del curso indicado. Si el parámetro del curso es un valor diferente
del 1 al 4, deberá retornar un mensaje al usuario indicando cuales son los
valores asignados a cada curso. */


let graduadosHtml = "30 45 25 34 18 23 16 50 72 70";
let graduadosCss = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJavaScript = "70 65 58 45 23 57 34 17 72";
let graduadosNodeJs = "45 56 73 34 65 72 70 32";

// convertimos strings separados por espacio a array
graduadosHtml = graduadosHtml.split(" ");
graduadosCss = graduadosCss.split( " ");
graduadosJavaScript = graduadosJavaScript.split (" ");
graduadosNodeJs = graduadosNodeJs.split (" ");

function calcularProm (curso){
    let aux = 0;
    for (let i=0; i< curso.length; i++){
        sumador = parseInt(curso[i]);
        aux += sumador
    }
    return (aux / curso.length);
}

//tambien podemos usar " for of"

function calcularPromedio (curso){
    let aux = 0;
    for (let elemento of curso){
        sumador = parseInt(elemento);
        aux += sumador
    }
    return (aux / curso.length);
}


function promedioGraduados (curso1, curso2, curso3, curso4, numero){

    let nombreCurso;
    let promedio;      
    if (numero == 1){
        nombreCurso = "HTML5";
        promedio = calcularPromedio(curso1);
    } else if (numero == 2){
        nombreCurso = "CSS3";
        promedio = calcularPromedio(curso2);
    } else if (numero == 3){
        nombreCurso = "JAVASCRIPT";
        promedio = calcularPromedio(curso3);
    } else if (numero == 4){
        nombreCurso = "NODEJS";
        promedio = calcularPromedio(curso4);
    } else {
        return console.log("Debe ingresar una de las opciones correctas: 1-html 2-css 3-javascript 4-nodejs")
    }

    return ("El promedio de graduados del curso" + nombreCurso + " es de: " + promedio)

}

console.log(promedioGraduados (graduadosHtml, graduadosCss, graduadosJavaScript, graduadosNodeJs, 3));
console.log(promedioGraduados (graduadosHtml, graduadosCss, graduadosJavaScript, graduadosNodeJs, 2));


/*
let promedioGraduados = (curso1, curso2, curso3, curso4, numero)=>{
    let acumulador = 0;
    let sumador = 0;
    let promedio= 1;

    switch (numero) {
        case 1:
            for (let i=0; i< curso1.length; i++){
                sumador = parseInt(curso1[i]);
                acumulador += sumador
            }
            promedio = acumulador / curso1.length;
        break;
        case 2:
            for (let i=0; i< curso2.length; i++){
                sumador = parseInt(curso2[i]);
                acumulador += sumador
            }
            promedio = acumulador / curso2.length;
        break;
        case 3:
            for (let i=0; i< curso3.length; i++){
                sumador = parseInt(curso3[i]);
                acumulador += sumador
            }
            promedio = acumulador / curso3.length;
        break;
        case 4:
            for (let i=0; i< curso4.length; i++){
                sumador = parseInt(curso4[i]);
                acumulador += sumador
            }
            promedio = acumulador / curso4.length;
        break;
        default:
           return console.log("Debe ingresar una de las opciones correctas: 1-html 2-css 3-javascript 4-nodejs")
            
    }
    return console.log("el promedio de graduados del curso es de: " + parseInt(promedio));
}

promedioGraduados(graduadosHtml, graduadosCss, graduadosJavaScript, graduadosNodeJs, 3);
*/