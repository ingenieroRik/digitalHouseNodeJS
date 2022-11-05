let notas = [10,4,5,8,9,2,7];

let sumaNotas = notas.reduce(function(suma , numero){
    return suma + numero;
},10);  // el 10 equivale a poner suma = 10 como valor inicial

console.log(sumaNotas);

/*
Filter con números
Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobado
s para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los 
aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados 
respectivamente
*/
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(elemento){
    return elemento.aprobado ;
});

let desaprobados = estudiantes.filter(function(elemento){
    return elemento.aprobado == false;
});

console.log(aprobados);
console.log(desaprobados);

/*
map ()
Este método recibe una función como parámetro (callback).
Recorre el array y devuelve un nuevo array modificado.
Las modificaciones serán aquellas que programemos en nuestra función de
callback.

Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce 
directamente en las pantallas del aeropuerto y, a modo de travesura, queremos adelantar una hora cada
 partida. Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista 
 en una variable nueva llamada horariosAtrasados.
*/

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(hora){
    return hora - 1;
});
console.log(horariosAtrasados);

/*
reduce ()
Este método recorre el array y devuelve un único valor.
Recibe un callback que se va a ejecutar sobre cada elemento del array. Este, a
su vez, recibe dos parámetros: un acumulador y el elemento actual que esté
recorriendo.

Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
*/
let vueltas = [5,8,12,3,22];
let totalVueltas = vueltas.reduce(function(acumulador, vueltaActual){
    return acumulador + vueltaActual;
});


// con objetos
let personas = [
    {
    nombre : "Maria",
    puntaje : 17
    },
    {
    nombre : "Juan",
    puntaje : 21
    }  
]

let sumatoriaPuntajes = personas.reduce (function (acumulador,persona){
    return acumulador + persona.puntaje
},0);

console.log(sumatoriaPuntajes);

/*
forEach
La finalidad de este método es iterar sobre un array.
Recibe un callback como parámetro y, a diferencia de los métodos anteriores,
este no retorna nada.

Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será mostrar cada ítem de esa lista
 por consola utilizando un foreach
*/

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(elemento){
    console.log(elemento);
});


/*
for of
Con ES6 disponemos una nueva estructura repetitiva para recorrer todos los elementos de un array, string, map, set etc.
const cadena='Hola Mundo';
  for(let letra of cadena)
      console.log(letra);
*/

const vector=[10, 40, 60, 5];
  let suma=0;
  for(let elemento of vector)
      suma+=elemento;
  console.log(`La suma de todos los elementos del vector es:${suma}`);