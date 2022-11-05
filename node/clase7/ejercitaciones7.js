//Micro Desafío 1: 

let cuenta = [6, 4, 6, -5, -3, 7, 4, -8, 9]

function calculoSaldos (arreglo){
    let depositos = 0;
    let retiros = 0;
    let total = 0;

    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > 0){
            depositos += arreglo[i];
        }
        else retiros += arreglo[i];
        total += arreglo[i];
    }

    return [depositos, retiros, total]
};

function mensajeAlUsuario (nombre, apellido, arreglo, funcion){
    let calculos = funcion(arreglo);
    console.log(
        'Estimado ' + nombre + ' ' + apellido +':'
    )
    console.log(
        'El monto total de los depósitos es de: ' + calculos[0] + '$.'
    )
    console.log(
        'El monto total de los retiros es de: ' + calculos[1] + '$.'
    )
    console.log(
        'Por lo tanto, su saldo actual es de: ' + calculos[2] + '$.'
    )
}

//mensajeAlUsuario('Cosme', 'Fulanito', cuenta, calculoSaldos);

//-------------------------------------------------------------------------------------------
//Micro Desafío 2:
//Acá quise avanzar un poquito e hice una función que me diera las tablas según el número por parámetro, del 1 al 10.

function tablas (num){
    console.log('Esta es la tabla del número ' + num)
    for(let i = 1; i <= 10; i++){
        console.log(num + ' * ' + i + ' = ' + (num * i) )
    }
}

//tablas(77);

//-------------------------------------------------------------------------------------------
//Micro Desafío Opcional:

//Función de los 10 números siguientes:

function siguientes10 (num){
    for(let i = num + 1; i <= num + 10; i++){
        console.log(i)
    }
}

//siguientes10(15);

//Yendo del 0 al 57 saltando de tres en tres: 

function de3en3(){
    for(i = 0; i <= 57; i += 3){
        console.log(i)
    }
}

//de3en3();

//Suma de los numeros del 1 al 100, o al número que yo quiera ;)
function sumaDel1Al (num){
    let sumaTotal = 0;
    for(let i = 1; i <= num; i++){
        sumaTotal += i
    }
    return sumaTotal
}

//console.log(sumaDel1Al(100))

//Mostrar cada letra del string en mayúsculas: 
function mayus (string){
    for(let i = 0; i < string.length; i++){
        console.log(string[i].toUpperCase())
    }
}

//mayus('Fulanito');

//Un arreglo de valores, pasarlo a un nuevo arreglo de valores pares:

let arregloNum = [1,2,3,4,5,6,7,8,9,10];

function soloPares (arreglo){
    acumuladora = []                           //Como debo retornar un arreglo, mi acumuladora es un arreglo vacío
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] % 2 == 0){               //Si el elemento actual es par...
            acumuladora.push(arreglo[i]);      //Entonces pusheo el elemento actual a mi acumuladora.
        }
    }
    return acumuladora                         //Return siempre por fuera del ciclo. SIEMPRE.
}

console.log(soloPares(arregloNum))