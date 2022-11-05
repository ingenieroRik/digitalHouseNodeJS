// se debio instalar primero un paqute con : npm install prompt-sync

const prompt = require ("prompt-sync")({signint:true})

//  paso a entero lo que ingreso por teclado como string por las dudas
let velocidad =parseInt(prompt("ingrese la velocidad: "));
let altura =parseInt(prompt("ingrese la altura: "));


// se pueden pasar a numero las entradas por teclado de esta forma tambien
// velocidad = Number(velocidad);
// altura = Number (altura);


// ingresamos velocidad y altura como argumentos
// por ejemplo:  node defafioExtra 270 290

//let velocidad = process.argv[2];
//let altura = process.argv[3];

// con if ternario
let aterrizaje = (velocidad >=268 &&  velocidad <=278 && altura >=150 && altura <=300 ) ? "Las condiciones son correctas para aterrizar" : " No hay condiciones apropiadas";


console.log(aterrizaje);


// con if tradicional
if (velocidad >=268 &&  velocidad <=278 && altura >=150 && altura <=300 ){
    
    console.log ("Las condiciones son correctas para aterrizar");
} else {

        console.log (" No hay condiciones apropiadas");
}