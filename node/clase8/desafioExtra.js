/*
1. Crear una función encontrar el número, que reciba por parámetros un array de
números y un número. La función deberá evaluar si el número proporcionado existe o
no en el array. De existir debe devolver el mensaje “El número XX sí existe en el
array”. En el caso contrario debe mostrar el mensaje: “El valor solicitado no existe”.

2. Crear una función Juego de trompito, que reciba dos parámetros:
a. El primero, un array con las siguientes cadenas de texto: “Toma 1” ,”Toma 2”,
“Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”
b. El segundo parámetro será la cantidad de vueltas del trompito comprendidas
entre 2 y 6.
La función tendrá como responsabilidad generar un número aleatorio comprendido
entre 0 y 5. En función del resultado obtenido, se le debe devolver al usuario alguno de
los mensajes suministrados por el trompito. Por ejemplo: “Toma todo”.
Pista: investigar sobre las funcionesMath.random() y Math.floor().

3. Crear una función sumatoria de pares e impares, que recibirá por parámetros un
array con diez valores numéricos. La función tendrá la responsabilidad de devolver al
usuario la sumatoria total de los números pares y de los números impares.
Pista: investigar sobre el operador módulo.
*/


// item 1
let numeros = [ 25, 18, 33, 41, 69, 12, 35, 67, 52];

function encontrarNumero (array, numero){
    let verdadero = array.indexOf(numero);
    
    if(verdadero >= 0){ return "El número " + numero + " sí existe en el array"}
    else { return "El valor solicitado no existe"}
}

console.log(encontrarNumero(numeros, 27));

// item 2
let array2 = ["Toma 1" , "Toma 2" , "Pon 1" , "Pon 2" , "Todos ponen" , "Toma todo"];

function juegoDeTrompito (array2, vueltas){
        let aleatorio;
        for (let i=2 ; i<vueltas ; i++){
        aleatorio = Math.floor(Math.random()* 5);
        }
        return array2[aleatorio];
}

console.log (juegoDeTrompito(array2, 4));


// item 3
let array3 = [ 2, 14, 25, 18, 9, 59, 68, 44, 37, 84];

function sumatoriaParesImpares (array3){
    let sumapar = 0;
    let sumaimpar = 0;
    for ( let i= 0; i< array3.length; i++){
         if ((array3[i] % 2) != 0 ){
            sumapar += array3[i];
         }else { sumaimpar += array3[i]}

    }
    //return [sumapar , sumaimpar];
    return "La suma de los pares es " + sumapar + " y de los impares "+ sumaimpar;
}

console.log(sumatoriaParesImpares(array3));
