/*
1. En la carpeta raíz del proyecto, crear un nuevo archivo (extra.js).
2. Crear un array de números y asignarle un total de diez (10) valores numéricos.
3. Crear variables que contengan los valores numéricos dispuestos en el array en la
posición (0, 2 y 4) y con el resto de los valores numéricos crear un nuevo array. Utiliza
los recursos aprendidos en esta clase: Destructuring y Spread operator.
4. Crear un objeto literal para almacenar los datos de nuestra mascota, considerando
los atributos:
a. nombre
b. tipo de mascota (Perro - Gato)
c. color
d. raza
Haciendo uso de la desestructuración, crea una variable por cada una de las
claves del objeto literal y al final mostrar al usuario:
*/

let numeros = [23 , 54, 65, 12, 19, 55, 71, 29, 8, 84];

//let num1 = numeros[0];
//let num2 = numeros[2];
//let num3 = numeros[4];

let [num1, , num2, , num3, ] = numeros; // se crean 3 variables con los contenidos respectivos del array numeros

//creo 2 variables y un array
let [ ,x , ,y, ,...nuevoArray] = numeros;

//creao nuevo array con los 7 numeros restantes
let sieteNumeros = [x, y, ...nuevoArray];

console.log(num1, num2, num3);

console.log(sieteNumeros);

let mascota = {
            nombre : "Roco",
            tipoMascota : "perro",
            color : "blanco",
            raza : "caniche"
             };

let {nombre,tipoMascota,color,raza} = mascota; // cada elemento es una nueva variable con su valor

console.log(nombre, tipoMascota, color, raza);

            