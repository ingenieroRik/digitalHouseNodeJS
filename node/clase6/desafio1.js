
// crear array de 6 electrodomesticos
let miArray = ["heladera", "microondas", "plancha", "licuadora","batidora","freezer"];

console.table(miArray);

// mostrar 3 elementos cualñquiera
console.log(miArray[2]);
console.log(miArray[4]);
console.log(miArray[3]);

//extraer el primer elemento y agregarlo al final
let elemento = miArray.shift();
miArray.push(elemento);
// se puede hacer asi tambien
//miArray.push(miArray.shift());


console.log(miArray);

//agregar al final dos nuevos electrodomesticos
miArray.push("televisor");
miArray.push("juguera");
// asi tambien
//miArray.push("televisor", "juguera");

console.log(miArray);

//mostrar cantidad de elementos del array
console.log(miArray.length);

// buscar un elemento, en esta caso "freezer",  y mostrar si existe, sino indicar no existe
let indice = miArray.indexOf("freezer");
if (indice == -1) {
    console.log("El producto buscado no existe");
} else {
    console.log("Producto encontrado: " + miArray[indice]);
}
// otra forma
// if (miArray.includes("freezer")){
// console.log("El producto buscado no existe")
// }
// else{console.log("Producto encontrado")}

//convertir los elemntos del array en una cadena de texto separadas por espacio
let cadena = miArray.join(" ");
console.log(cadena);

// aca pide cantidad de elementos de la cadena de texto
console.log(cadena.length);

//intercambiar palabras(electrodomesticos) de la cadena de texto
console.log(cadena);
cadena = cadena.replace("plancha", "cafetera");
console.log(cadena);

//con la cadena de texto, usar cada palabra para generar un array nuevo

cadenaNueva = miArray.join(); // primero creo una cadena con las palabras separadas por ,

arrayNuevo =cadenaNueva.split(","); // creo nuevo array a partir de la cadena

console.table(arrayNuevo);

