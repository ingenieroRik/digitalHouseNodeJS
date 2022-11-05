// Microdesafio 1

/* 2 - a */
let cursosPrecios = [
  ["html5", 4000],
  ["css3", 5000],
  ["javascript", 10000],
  ["react", 7000],
  ["nodejs", 15000],
];

/* 2 - b */

let cursosElegidos = ["JAVASCRIPT", "REACT", "NODEJS"];

/* 2 - c */

function calculoPrecioCursos(precios, cursosAlumno) {
  let precioTotal = 0;

  // Este for recorre el array de los cursos con su precio
  for (let i = 0; i < precios.length; i++) {
    // Este for recorre el array de los cursos que el alumno se anotó
    for (let j = 0; j < cursosAlumno.length; j++) {
      /* 
      precios[0] ---> ["html5", 4000] 
      precios[1] ---> ["css3", 5000]
      precios[2] ---> ["javascript", 10000]
      */
      if (precios[i][0].toUpperCase() === cursosAlumno[j]) {
        precioTotal += precios[i][1];
      }
    }
  }

  return precioTotal;
}

/* console.log(calculoPrecioCursos(cursosPrecios, cursosElegidos)); */


/* 2 - d */

/* let cursosElegidos = ["JAVASCRIPT", "REACT", "NODEJS"]; */

function informarAlAlumno(nombre, apellido, precios, cursosAlumno) {
  let totalAPagar = calculoPrecioCursos(precios, cursosAlumno);

  console.log("");
  console.log(
    "Estimado " +
      nombre +
      " " +
      apellido +
      ", en función de los cursos seleccionados:"
  );
  console.log("");

  for (let i = 0; i < cursosAlumno.length; i++) {
    console.log(i + 1 + " - " + cursosAlumno[i]);
    console.log("");
  }

  console.log("El monto total a pagar es de: $" + totalAPagar);
  console.log("");
  console.log("Bienvenido a la gran aventura de Digital House");
}

/* informarAlAlumno("Guido", "Maimone", cursosPrecios, cursosElegidos); */