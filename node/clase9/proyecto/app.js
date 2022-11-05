

// requerimos el array peliculas que esta en otro archivo
const peliculasPremiadas = require ('./peliculas');

//con la funcion foreach recorremos e imprimimos el array peliculas
peliculasPremiadas.forEach(function(elemento) {
    console.log(elemento);
});

