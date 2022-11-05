/*
El Tech Leader está muy agradecido por todo el esfuerzo realizado en el desafío anterior.
Ahora quiere saber si tenemos claro el uso de los módulos nativos de Node.JS. Por eso,
nos encomienda la siguiente tarea:
Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo (mensaje.txt).
2. En el archivo creado, escribe el mensaje que quieras. Por ejemplo: “Node.js® es un
entorno de ejecución para JavaScript construido con V8, motor de JavaScript
de Chrome.”
3. Dentro del archivo (app.js), crea una variable a la que se le asigne la ruta del archivo
(mensaje.txt) y luego llama al módulo nativo de Node.js que te permita leer el
contenido del archivo (mensaje.txt).
4. Una vez leído, muestra al usuario por la consola el contenido del mismo.
*/
let ruta ="./mensaje.txt"

let fs = require('fs');

fs.readFile(ruta, 'utf-8' ,function(error, datos) {  //si no ponemos utf8 salen los ascii de los caracteres
      console.log(datos);        // podemos omitir 'utf8' y poner datos.toString()
  });
/*
fs.readFile(ruta, (error, datos) => {
    if (error)
      console.log(error)
    else
      console.log(datos.toString())
  })
  */

// pra imprimir fecha y hora por consola
let dayjs = require ("dayjs");
let fechaActual = dayjs().format();
console.log(fechaActual);