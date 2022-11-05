
let pagoMes = 12000;
let consumoKWH = 450;
console.clear();

//pagoMes =(consumoKWH > 300)  ? pagoMes *1.2 : pagoMes *1;

//let nuevoPago=(consumoKWH > 300)  ? pagoMes *1.2 : pagoMes *1;

let nuevoPago=(consumoKWH > 300)  ? 
console.log("Debido a que su hogar tuvo un consumo de "+ consumoKWH + "KWH en base al ajuste tarifario -hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%- cumplimpos con informarle que se ha ajustado el total a pagar, que será de: $"+ pagoMes * 1.2) :
console.log ("No ha sobrepasado los 300 KWH, consumio : " + consumoKWH + "KWH, continua con subsidio, debe pagar: " + pagoMes *1);

//console.log("Debido a que su hogar tuvo un consumo de "+ consumoKWH + "KWH en base al ajuste tarifario -hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%- cumplimpos con informarle que se ha ajustado el total a pagar, que será de: $"+ nuevoPago);

/*
if (consumoKWH > 300){
    console.log("Debido a que su hogar tuvo un consumo de "+ consumoKWH + "KWH en base al ajuste tarifario -hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%- cumplimpos con informarle que se ha ajustado el total a pagar, que será de: $"+ pagoMes * 1.2);
}else {

    console.log("Debido a que su hogar tuvo un consumo de "+ consumoKWH + "KWH no tiene aumento, debe pagar: $" + pagoMes);
}
*/