/*
let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}
*/

let dia = 'jueves';

function finDeSemana (dia) {

	switch (dia){

		case "viernes":
			console.log ("buen finde");
			break;

		case "lunes":
			console.log ("buena semana");
			break;

		default :
			console.log ("buen dia");

	}
}
finDeSemana ("jueves");

function mayorEdad(edad, cb) {
    if (cb(edad)) {
      return true
    } else {
      return false
    }
  }
  
  function mayorEdadArgentina(edad) {
    if (edad >= 18) {
      return true
    } else {
      return false
    }
  }
  
  function mayorEdadEEUU(edad) {
    if (edad >= 21) {
      return true
    } else {
      return false
    }
  }
  
  const edadPersona = 20
  if (mayorEdad(edadPersona, mayorEdadEEUU)) {
    console.log("Es mayor de edad")
  } else {
    console.log("Es menor de edad")
  }


  // se debio instalar primero un paqute con : npm install prompt-sync

  const prompt = require ("prompt-sync")({signint:true})
  let num1 =prompt("ingrese un numero 1: ");
  let num2 =prompt("ingrese un numero 2: ");
  let operacion =prompt("ingrese operacion: ");