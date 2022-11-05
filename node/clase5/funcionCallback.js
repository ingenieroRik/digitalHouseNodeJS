let doble = numero => numero *2 ;
let triple = numero => numero * 3 ;
function aplicarCallback (numero, callback) {

    return callback(numero);
}

console.log(aplicarCallback(5,doble));

let suma = (num1, num2) => num1 + num2;
let resta = (num1, num2) => num1 - num2;
let multiplicacion= (num1, num2) => num1 * num2;
let division = (num1, num2) => num1 / num2;

function calculadora (num1, num2,callback) {

    return callback(num1, num2)
}

console.log(calculadora(2,3,suma));
console.log(calculadora(6,3,resta));
console.log(calculadora(2,3,multiplicacion));
console.log(calculadora(12,3,division));

// se puede poner cualquier nombre en vez de callback
/*
function sumar(v1, v2) {
    return v1 + v2
  }
  
  function multiplicar(v1, v2) {
    return v1 * v2
  }
  
  function operar(v1, v2, cb) {
    const resultado = cb(v1, v2)
    return resultado
  }
  
  const resultado = operar(5, 10, sumar)
  console.log(resultado)
*/