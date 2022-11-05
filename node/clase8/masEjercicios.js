//1- Invertir texto
//Escribir el algoritmo de la función InvertirTexto que reciba una variable “oración” de
//tipo cadena de caracteres (es decir texto) y que devuelva ese valor con los caracteres
//del texto en orden inverso.

function invertirTexto (oracion){

    //oracion= oracion.split(""); // convierto la oracion en un array con los caracteres separados
    //console.log(oracion)
    //oracion.reverse(); // invierto el array
    //console.log(oracion)
    //let oracionInvertida = oracion.join("");

    // se puede hacer todo en una sola linea
    let oracionInvertida = oracion.split("").reverse().join("");
    return oracionInvertida;

}

console.log(invertirTexto("El perro ladra"));

//2- Primera palabra
//Escribir el algoritmo de la función “PrimeraPalabra” que reciba una variable “oración”
//de tipo cadena de caracteres y que devuelva la primera palabra de dicha oración. Una
//palabra es cualquier cadena de caracteres hasta un espacio (el espacio es un carácter, y
//no es parte de la palabra).

function primeraPalabra (oracion){

    let finalPrimerPalabra = oracion.indexOf (" "); // en el primer espacio termina la primer palabra
    //console.log(finalPrimerPalabra);
    let primera = oracion.slice(0,finalPrimerPalabra);// desde el indice 0 hasta el primer espacio esta la primer palabra
    return primera;
}

console.log(primeraPalabra("Batman regrasa de nuevo"));

//3 - Última palabra
//Escribir el algoritmo de la función “UltimaPalabra” que reciba una variable “oración”
//de tipo cadena de caracteres y que devuelva la última palabra.

function ultimaPalabra (oracion){
    //Obtengo el largo de la oración para poder recorrerla
    const largo = oracion.length;
    //Inicializo la variable que contendrá la palabra que voy leyendo
    let palabraActual = "";
    //Ciclo para recorrer cada posición de la oración
    // i va de 0 a el largo-1
    for (let i = 0; i < largo; i++) {
    //Obtengo el caracter en la posición i del texto
    const caracter = oracion[i];
    //Si el caracter es un espacio
        if (caracter == " ") {
        //Reinicio la palabra
        palabraActual = "";
        } else {
        //Agrego el caracter a palabra ya que es parte
        // de la palabra
            palabraActual += caracter;
        }
    }
    //Devuelvo ultima palabra que capturé
    return palabraActual;

}

console.log(ultimaPalabra("Batman regrasa de nuevo"));

//4- Lista de palabras
//Escribir el algoritmo de la función “Lista de palabras” que reciba una variable “oración”
//de tipo cadena de caracteres y que devuelva una lista con cada una de las palabras.
//Por ejemplo, dada la oración “esta es una frase muy interesante”, debería devolver la
//lista: [“esta”,”es”,”una”,”frase”,”muy”,”interesante”]
//¿Cómo cambiarías tu algoritmo si necesitamos solo la cantidad de palabras en la
//oración?

function listaDePalabras (oracion){

    let listaPalabras = oracion.split(" ");
    return listaPalabras;
}
console.log(listaDePalabras("Batman regrasa de nuevo"));


function cantidadDePalabras (oracion){

    let cantidadPalabras = oracion.split(" "); // convierto en array
    
    return cantidadPalabras.length;
}
console.log(cantidadDePalabras("Batman regresa de nuevo"));


//5- Palabra más larga
//Escribir el algoritmo de la función “PalabraMásLarga” que reciba una variable “oración”
//de tipo cadena de caracteres y que devuelva la palabra más larga de la oración. Si dos
//o más palabras comparten el tamaño máximo, devolver la última.
//¿Cómo cambiarías tu algoritmo para que en el caso de haber muchas palabras del
//mismo tamaño en vez de devolver la última devuelva la primera?

    function palabraMasLarga(oracion) {
        
        const largo = oracion.length; //Obtengo el largo de la oración para poder recorrerla
    
        let palabraMasLarga = "";  //Inicializo la variable que contendrá la palabra más larga
        
        let palabraActual = ""; //Inicializo la variable que contendrá la palabra que voy leyendo
        //Ciclo para recorrer cada posición de la oración i va de 0 a el largo-1
        for (let i = 0; i < largo; i++) {
        
        const caracter = oracion[i];  //Obtengo el caracter en la posición i del texto
    
             if (caracter == " ") {        //Si el caracter es un espacio
                if (palabraActual.length >= palabraMasLarga.length) {
                    palabraMasLarga = palabraActual;
                }
       
                palabraActual = "";    //Reinicio la palabra
            } else {
                palabraActual += caracter;  //Agrego el caracter a palabra ya que es parte de la palabra
            }
        }
        return palabraMasLarga;

    }


    console.log(palabraMasLarga("Batman regresa de nuevo"));

    //otra forma,  ver  https://www.youtube.com/watch?v=VVySn87s8Eo 
    // https://www.youtube.com/watch?v=-IsMbQjZbZs
    function palabraLarga (oracion){

        oracion = oracion.split(" ");   // convierto el string en array de palabras
        
        // conseguimos el indice de la palabra mas larga del array
        let indice = oracion.reduce((indiceAcumulador, palabraActual, indiceActual) => {

            if (palabraActual.length > oracion[indiceAcumulador].length){
                return indiceActual;
            }
            return indiceAcumulador
        },0)

        return oracion[indice];
    }
    
    console.log(palabraLarga("Batman regresa de nuevo"));
