/*
Instrucciones
Si llegaste hasta acá, significa que vienes trabajando muy bien. ¡Felicitaciones!

Para que no te quedes con las ganas y puedas seguir practicando, te proponemos que
desarrolles las siguientes funciones:

En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función que
desarrolles.
1. Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes.
2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
100.
4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase.
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2.
*/
//1
function diezNumeros (inicial){

    for (let i=inicial; i<inicial+10;i++){
        console.log(i);
    }
    return;
}
diezNumeros(11);

//2
for ( let i=1; i<58; i +=3){
    console.log(i);
}

//3
let suma100=0;
for (let i=0; i<101; i++){
        suma100 +=i;
}
console.log(suma100);

//4
let cadena = "practicando el uso de los ciclos y bucles";
function todoMayuscula (cadena){
    return cadena.toUpperCase();

}
console.log(todoMayuscula(cadena));

//5
function soloPares (vector){
    let vectorPares = [];
    for (let i=0; i< vector.length; i++){
        if (vector[i]%2 == 0){
            vectorPares.push(vector[i]);
        }
    }
    return vectorPares;
}
console.log(soloPares([3,4,6,5,8,9,10]));

