// Microdesafio 1

/* 

1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
Vamos a afianzar nuestros conocimientos sobre arrays y strings realizando diferentes
acciones sobre ellos. Verificaremos si se comportan como esperamos u ocurren resultados
diferentes a los esperados.

2. Define un array que contenga un conjunto de seis (6) productos de
electrodomésticos.

3. Ejecutar sobre el array creado las siguientes acciones:

    ● Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por
    la consola los resultados.
    ● Extraer el primer elemento del array y agregarlo al final del mismo.
    ● Agregar al final del array dos (2) nuevos productos.
    ● Mostrar por la consola la cantidad de elementos que contiene el array.
    ● Buscar un elemento del array y crear una condición responsable de establecer si
    existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
    “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
    no existe”.
    ● Unificar todos los elementos del array en una cadena de texto (string), separando los
    elementos por espacios en blanco.
    ● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
    ● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
    función adecuada para ello.
    ● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
    de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
    una coma.

*/


let electrodomesticos = ["lavarropas","microondas","televisor","licuadora","motoniveladora","estufa"];

/* ● Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por
    la consola los resultados. */

/* console.log(electrodomesticos[2]);
console.log(electrodomesticos[0]);
console.log(electrodomesticos[5]); */


/*  ● Extraer el primer elemento del array y agregarlo al final del mismo. */

/* console.log(electrodomesticos);
let primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento)
console.log(electrodomesticos); */

/* ● Agregar al final del array dos (2) nuevos productos. */

/* console.log(electrodomesticos);
electrodomesticos.push("tostadora");
electrodomesticos.push("notebook");
console.log(electrodomesticos); */

/* ● Mostrar por la consola la cantidad de elementos que contiene el array. */

/* console.log(electrodomesticos.length); */

/*  ● Buscar un elemento del array y crear una condición responsable de establecer si
    existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
    “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
    no existe”. */

/* console.log(electrodomesticos);
if (electrodomesticos.includes("motoniveladora")) {
    console.log("Producto encontrado")
} else {
    console.log("Producto no encontrado")
} */

/* ● Unificar todos los elementos del array en una cadena de texto (string), separando los
    elementos por espacios en blanco. */

/* console.log(electrodomesticos);
let electrodomesticosString = electrodomesticos.join(" ");
console.log(electrodomesticosString); */

/* ● Determinar la cantidad de elementos que posee la cadena de texto obtenida. */

/* let electrodomesticosString = electrodomesticos.join(" ");
let cantidadElementos = electrodomesticosString.split(" ").length;
console.log(cantidadElementos); */

/* ● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
    función adecuada para ello. */

/* let electrodomesticosString = electrodomesticos.join(" "); 
console.log(electrodomesticosString);
let stringNuevo = electrodomesticosString.replace("lavarropas", "tostadora");
console.log(stringNuevo); */

/* ● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
    de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
    una coma. */

/* let electrodomesticosString = electrodomesticos.join(" ");
let electrodomesticosOriginal = electrodomesticosString.split(" ");
console.log(electrodomesticosOriginal) */