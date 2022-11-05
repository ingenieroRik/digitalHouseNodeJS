function todoAmayuscula (palabra) {
    return palabra.toUpperCase();
}

function tipoDeDato (parametro) {

    return (typeof(parametro));
}

function edadDePerro (years) {

    return ( "Edad del can : " + years * 7 + " años perrunos")
}

function valorHora (salario, diasTrabajados, horasDiarias) {

    //paso a enteros , no quiero decimales
    let aux = parseInt(salario /(diasTrabajados * horasDiarias));

    return (" El valor de la hora de trabajo es : " + aux);
}


console.log(todoAmayuscula ("pedro"));

let resultado = tipoDeDato("pedro");
console.log(resultado)
console.log(edadDePerro(5));
console.log(valorHora (130000, 21, 8));