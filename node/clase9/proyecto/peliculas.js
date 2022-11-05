/*
El Tech Leader presenta al equipo un nuevo proyecto de compra y venta de
películas. Quiere que mostremos que tenemos claro cómo hacer para exportar e
importar nuestros propios módulos. Para ello, seguiremos los siguientes pasos:

a. Crear una carpeta llamada proyecto.
b. Dentro de ella crear un archivo llamado peliculas.js. Este archivo será un
módulo que contiene una lista con algunas de nuestras películas favoritas.
Para eso nos recomiendan crear un array de objetos literales. No olvides
que este archivo es un módulo propio y por tal motivo una vez que se crea...
¿cuál debería ser nuestra última línea de código?
Por cada película se necesita conocer esta información:
i. Identificador único de la película (id)
ii. Calificación por parte de los usuarios (rating)
iii. Premios (awards).
iv. Duración de la película (length).
v. Precio (price).
vi. Género de la película (genre):
1. Acción
2. Animación
3. Aventuras
4. Comedia
5. Suspenso.

c. Una vez creado el módulo anterior, crear un nuevo archivo (app.js). Piensa
cómo hacer para lograr importar nuestro módulo (peliculas.js). Luego,
utilizando lo que sabemos sobre ciclos o bucles, muestra al usuario un listado
con el detalle de cada una de nuestras películas favoritas.
*/

let peliculas = [
    {
    id : 1001,
    calificacion : "buena",
    premios :"oscar",
    duracion : 118,
    precio : 1500,
    genero : "Accion"
    },
    {
    id : 1002,
    calificacion : "muy buena",
    premios :"globo de oro",
    duracion : 121,
    precio : 2500,
    genero : "Animación"
    },
    {
    id : 1003,
    calificacion : "buena",
    premios :"San sebastian",
    duracion : 135,
    precio : 1500,
    genero : "Aventuras"
    },
    {
    id : 1004,
    calificacion : "muy buena",
    premios :"globo de oro",
    duracion : 140,
    precio : 1600,
    genero : "Comedia"
    },  
]

    module.exports = peliculas;
