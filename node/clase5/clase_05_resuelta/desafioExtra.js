// Desafío extra (opcional)

/* 

Para que no te quedes con las ganas y puedas seguir practicando, te proponemos que
desarrolles las siguientes funciones. Verás que presentan una dificultad extra, por lo que
tendrás que buscar algunos conceptos para poder resolverlos. Es recomendable que crees
este hábito ya que es algo muy común que los programadores realizamos todos los días.

En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función.

1. Crear una función que recibe un string en minúscula, lo convierte a mayúsculas
y lo retorna. Investiga qué hace el método de strings .toUpperCase()

2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro. Investiga qué hace la palabra reservada typeof().

3. Crear una función que calcule la edad de los perros, considerando que 1 año para
nosotros son 7 de ellos.

4. Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta que
dicha función recibe tres parámetros: El salario mensual, la cantidad de días
trabajados y la cantidad de horas que regularmente trabajada por día.

Cuando tengas alguna duda que te impida avanzar, puedes preguntarle a tus profesores.

*/


/* 1. Crear una función que recibe un string en minúscula, lo convierte a mayúsculas
y lo retorna. Investiga qué hace el método de strings .toUpperCase() */

function mayuscula(string) {
    return string.toUpperCase();
}

/* 2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro. Investiga qué hace la palabra reservada typeof(). */

function tipoDeDato(dato) {
    return typeof(dato);
}

/* 3. Crear una función que calcule la edad de los perros, considerando que 1 año para
nosotros son 7 de ellos. */

function edadPerro(edad) {
    return edad * 7;
}

/* 4. Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta que
dicha función recibe tres parámetros: El salario mensual, la cantidad de días
trabajados y la cantidad de horas que regularmente trabajada por día. */

function calcularHoraTrabajo (salarioMensual, diasTrabajados, horasTrabajadas) {
    return salarioMensual / (diasTrabajados * horasTrabajadas);
}

console.log(mayuscula("guido"));
console.log(tipoDeDato("guido"));
console.log(edadPerro(5));
console.log(calcularHoraTrabajo(120000, 28, 7));