
var dia;

//let dia="jueves";
function finDeSemana(dia){
    switch(dia){
        case "viernes":
            console.log("buen finde");
            break;
        case "lunes":
            console.log("buena semana");
            break;
        default:
            console.log("buen día");
            

    }
}
//ingreso de datos por teclado con la terminal standard metodo1
process.stdout.write("Ingresa el dia:");
process.stdin.on('data', function(data){
     dia=data.toString().trim();
     console.log(finDeSemana(dia));
     process.exit();
});

/*
//ingreso de datos por teclado con la terminal standard metodo2
const readline = require('readline');

let interfazCaptura = readline.createInterface({
     input: process.stdin,
     output: process.stdout
    });

interfazCaptura.question('Ingresa el dia:', function(dia){
        console.log(finDeSemana(dia));
        interfazCaptura.close();
    });
*/

//console.log(finDeSemana(dia));
