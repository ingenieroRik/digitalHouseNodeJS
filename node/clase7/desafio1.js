/*
Instrucciones
1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).

Saldo Bancario
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.
2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.
3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log()
para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:
Estimada Gloria Medina:
El monto total de los depósitos es de: $5500.
El monto total de los retiros es de: $15000.
Por lo tanto, su saldo actual en la cuenta es de: $40000.
*/
//let operacionesBancarias = [ 300, 250, -400, 500, -400, 200];

function calcular (operacionesBancarias){

    let saldoTotal = 0;
    let totalRetiros = 0;
    let totalDepositos = 0;

    for (let i=0; i<operacionesBancarias.length; i++){
        saldoTotal += operacionesBancarias[i];
        if (operacionesBancarias[i]<0){
        totalRetiros += operacionesBancarias[i];
        }else {
        totalDepositos += operacionesBancarias[i];
        }
    }
    
    let resultados= [saldoTotal, totalDepositos,totalRetiros]; // devuelvo matriz porque no puedo devolver mas de un valor

    return resultados ;
}
//console.log(calcular(operacionesBancarias));

function operacionesCliente (nombre, apellido,operaciones){

        let datos =calcular(operaciones);
        return "Estimado/a " + nombre + " " + apellido + "\n" + "el monto total de depósitos es: $" + datos[1] + "\n" 
        + "el monto total de retiros es: $" + datos[2] + "\n" +
         "por lo tanto el saldo actual es: $" + datos[0];
        
                
}

console.log(operacionesCliente("Gloria", "Medina", [ 300, 250, -400, 500, -400, 200]));
