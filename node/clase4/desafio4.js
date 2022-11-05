
// introducimos los datos como argumento del programa el 1 es el nombre del programa
// por eso arrancamos en 2
//let operacion= process.argv[2];

// debo convertir num1 y 2 a enteros porque al pasarlo como argumento los toma c/string
//let num1 = parseInt(process.argv[3]);
//let num2 = parseInt(process.argv[4]);


// se debio instalar primero un paqute con : npm install prompt-sync

const prompt = require ("prompt-sync")({signint:true})
let num1 =parseInt(prompt("ingrese el numero 1: "));
let num2 =parseInt(prompt("ingrese el numero 2: "));
let operacion =(prompt("ingrese operacion: ")).trim().toLowerCase();




/*
let num1= 5;
let num2 = 4;
let operacion = "dividir";
console.log("Las operaciones aceptadas son: sumar , restar, multiplicar, dividir. Escribalas correctamente.");
*/
switch(operacion){
    case "sumar":
        return console.log("El resultado de la suma es: " + (num1 + num2));
        //break;
    case "restar":
        console.log("El resultado de la resta es: " + (num1 - num2));
        break;
    case "multiplicar":
        console.log("El resultado del producto es: "+ (num1 * num2));
        break;
    case "dividir":
        console.log("el resultado del cociente es: "+ (num1 / num2));
        break;

    default:
        console.log("las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
        

}