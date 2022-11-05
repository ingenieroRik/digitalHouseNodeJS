/*
Instrucciones
DH-Bici
El Tech Leader presenta al equipo un nuevo proyecto de compra y venta de bicicletas. Hay
llevar un control del stock de bicicletas y generar código que permita analizar los datos de las
mismas. Para lograr estos objetivos, nos encarga las siguientes tareas:
1. Crear una carpeta de trabajo y dentro de ella un archivo (bicicletas.json). Este
último debe contener un array de objetos literales con todos las bicicletas que se
tienen en stock. Por cada bicicleta se necesita conocer la siguiente información:
a. Marca (Fierce, Shifter, Olmo, Battle, TopMega,SLP, Halley, Fixie, etc ).
b. Modelo (FM18SI29AM211, FM18F29AM210, Regal, Sunshine, Techno,
Ruta).
c. Rodado (16, 26, 28, 29 ).
d. Año de fabricación (2019, 2020, 2021, 2022, etc);
e. Color (Celeste, negro, gris, amarillo, rosa, rojo, verde, Naranja, etc).
f. Peso en Kilogramos(13, 15, 16, 17 );
g. Tipo (Montañera, Paseo, Retro, Triatlón ).
h. Precio (Coloque el precio que usted desee).
i. Vendida (si ó no).
Con esta información, puedes realizar todos los registros que quieras.
2. Crear un archivo (datosBici.js). Este archivo será un módulo propio, en el que
debes construir una función que tendrá la responsabilidad de importar el archivo
de (bicicletas.json). Para esto, seguramente nos convenga usar el módulo
nativo de NodeJs. File System - FS.
3. Guardar el contenido del archivo (bicicletas.json) en una variable y convertirla
a un tipo de dato array. ¿Se te ocurre cómo? Te dejamos un enlace para
profundizar sobre el recurso a utilizar.

Este archivo es un módulo propio y por tal motivo una vez que se crea.. ¿Recuerdas
cuál debe serla última línea del archivo?.
*/

let fs = require('fs');
let ruta = "./bicicletas.json";
let bicicletasJSON = fs.readFileSync(ruta, "utf-8") ;
let bicicletas = JSON.parse(bicicletasJSON);


//console.log(bicicletasJSON);
//console.log(bicicletas);

module.exports = bicicletas;
