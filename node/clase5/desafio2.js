
const CARNEPARRILLA = 1800;
const POLLO = 1500;
const VEGETARIANA = 1200;
const JAMON = 30;
const QUESO =25;
const SALSATOMATE =5;
const MAYONESA = 5;
const MOSTAZA = 5;
const TOMATE = 5;
const LECHUGA = 10;
const CEBOLLA = 10;

function totalPagarCliente (tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {

    switch (tipoHamburguesa) {
        case "Carne a la parrilla":
            totalPagar = CARNEPARRILLA;
            break;
        case "Pollo":
            totalPagar = POLLO;
            break;
        case "Vegetariana":
            totalPagar = VEGETARIANA;
            break;
       
        default:
            console.log("Debe especificar un tipo de hamburguesa correcto");
            return; // pongo return para que salga de la funcion
    }
    
    if (jamon){
        totalPagar += JAMON;
    }if (queso){
        totalPagar += QUESO;
    }if (salsaTomate){
        totalPagar += SALSATOMATE;
    }if (mayonesa){
        totalPagar +=MAYONESA;
    }if (mostaza){
        totalPagar += MOSTAZA;
    }if (tomate){
        totalPagar +=TOMATE;
    }if (lechuga){
        totalPagar +=LECHUGA;
    }if (cebolla){
        totalPagar +=CEBOLLA;
    }
        return totalPagar;
}

function devolverMensaje (nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla, callback){

    total =callback (tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla)
    //total =totalPagarCliente (tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla)
    // no es necesario aca usar callback, solo es para practicar
    // si cambiamos de funcion solo cambiamos el nombre en la llamada

    return ("Estimado " + nombre + " " +  apellido + " , el monto total a pagar es de: $ " + total);
}



console.log(devolverMensaje ("Daniel", "Fuentes", "Carne a la parrilla", true, true, false, false, false, false, true, false, totalPagarCliente));

