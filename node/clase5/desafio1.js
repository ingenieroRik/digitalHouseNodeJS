
const COMPACTO = 14000;
const MEDIANO = 17000;
const CAMIONETA = 28000;
const SILLABB = 1200;

function alquilerVehiculo  ( tipoVehiculo, diasAlquiiler, sillaBebe ){

    switch (tipoVehiculo) {
        case "compacto":
            tipoVehiculo = COMPACTO;
            break;
        case "mediano":
            tipoVehiculo = MEDIANO;
            break;
        case "camioneta":
            tipoVehiculo = CAMIONETA;
            break;
       
        default:
            console.log("Debe especificar un tipo de vehicilo válido.");
            return; // pongo return para que salga de la funcion
    }

    if (sillaBebe) {
    console.log ("Estimado cliente: en base al tipo de vehículo compacto alquilado y que incluyo silla para bebé, considerando los "
    + diasAlquiiler + " días utilizados, el monto total a pagar es de : $" + ((tipoVehiculo + SILLABB) * diasAlquiiler))
    } 
    else {console.log ("Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los "
    + diasAlquiiler + " días utilizados, el monto total a pagar es de : $" + (tipoVehiculo * diasAlquiiler));

    }
    
}

alquilerVehiculo("camioneta", 4 , true);
alquilerVehiculo("compacto", 3 , false);
