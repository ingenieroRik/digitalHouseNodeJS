
// aqui debemos invocar el sript pasando como parametros los dos numeros a sumar
let operando1 = process.argv[2];
let operando2 = process.argv[3];



/*
// esto verifica que esten los dos operandos
if (!operando1 || !operando2) {
    // Windows: \
    // Unix: /
    const aplicacion = process.argv[1].split(path.sep).pop();

    console.error('Falta uno o dos argumentos.')
    console.error('Ejemplo: %s OPERANDO_1 OPERANDO_2', aplicacion);

    process.exit(1);
}
*/

// para que los tome como numeros enteros
//const suma = parseInt(operando1) + parseInt(operando2);

const suma = parseInt(operando1) + parseInt(operando2);

console.log(`La suma de ${operando1} y ${operando2} es igual ${suma}.`);