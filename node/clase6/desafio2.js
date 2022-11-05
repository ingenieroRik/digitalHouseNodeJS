// crear array
let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick","Elvis", "Thor:amor y trueno"];
console.table(peliculas);
// poner "Thor ....." en primer lugar
let indice = peliculas.indexOf("Thor:amor y trueno"); // devuelve indice de la pelicula "Thor........"
let peliMasVendida = peliculas[indice].toUpperCase();  //la mas vendida en mayusculas
peliculas.splice(indice,1); // borro la pelicula "Thor......" en el indice que esta
console.log(peliculas);
peliculas.push(peliMasVendida);  // agrego "Thor ......." que es la mas vendida al principio
console.table(peliculas);


let pelisAestrenar = " Counter-Strike , NOP , Vértigo , Nick , Avatar" ; // creamos cadena de texto
let peliculasEstrenar = pelisAestrenar.split(",");  // creamos array a partir del string
console.table(peliculasEstrenar);
peliculasEstrenar.shift(); // eliminamos primer elemento

// fusionar los dos array anteriores en uno nuevo
todasLasPeliculas = peliculas.concat(peliculasEstrenar);
console.table(todasLasPeliculas);