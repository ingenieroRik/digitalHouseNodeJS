// saldos de los meses con ganacias
function saldosDeMesesConGanancia(unPeriodo) {
    let ganancias = [];
    for (let i = 0; i < unPeriodo.length; i++) {
      if (unPeriodo[i] > 0) {
        ganancias.push(unPeriodo[i]);
      }
    }
    return ganancias;
  }
  console.log(saldosDeMesesConGanancia([100, 20, 0, -10, 10]));
  
  // saber en cuantos meses hubo perdidas
  function cantidadDeMesesConPerdida(unPeriodo) {
    let mesesPerdidas = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
      if (unPeriodo[i] < 0) {
        mesesPerdidas++;
      }
    }
    return mesesPerdidas;
  }
  console.log(
    "La cantidad de meses con perdidas es: " +
      cantidadDeMesesConPerdida([100, 20, 0, -10, 10])
  );
  
  //sumatorias de bajo importe
  function sumatoriaBajoImporte(importes) {
    let sumaGanancias = 0;
    for (let i = 0; i < importes.length; i++) {
      if (importes[i] <= 1000 && importes[i] > 0) {
        sumaGanancias += importes[i];
      }
    }
    return sumaGanancias;
  }
  
  console.log(
    sumatoriaBajoImporte([
      300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000,
    ])
  );
  


// entradas para el cine
function asientosDisponibles(disponibles, asientoOcupar) {
    if (disponibles.includes(asientoOcupar)) {
      return (
        "Felicitaciones, el asiento número " + asientoOcupar + " está disponible"
      );
    } else {
      return (
        "Lo sentimos, el asiento número " +
        asientoOcupar +
        " está ocupado, pero aún quedan " +
        disponibles.length +
        " asientos disponibles"
      );
    }
  }
  
  console.log(asientosDisponibles([15, 28, 44, 45, 70], 17));
  
  //control de pasajeros
  function reporteDePasajeros(cantEstaciones) {
    let cantInicial = 200;
    let difSubenBajan = 20;
    let cantPasajeros = 0;
    let difSubenBajanFlorida = 40;
    let vectorPasajeros = [];
    cantEstaciones++;
    for (let i = 0; i < cantEstaciones; i++) {
  
          if (i == 0){
              cantPasajeros += cantInicial;
               vectorPasajeros[i]="En la estacion " + i + " hay " + cantPasajeros + " pasajeros arriba del tren";
          }
          else if(i== 5){
              cantPasajeros += difSubenBajanFlorida;
               vectorPasajeros[i]="En la estacion " + i + " hay " + cantPasajeros + " pasajeros arriba del tren";
           }else {  
              cantPasajeros += difSubenBajan;
              vectorPasajeros[i]="En la estacion " + i + " hay " + cantPasajeros + " pasajeros arriba del tren";
           }
      }
    return vectorPasajeros;
  }
  
  console.log(reporteDePasajeros(0));
  console.log(reporteDePasajeros(6));
  
  
  // La clave secreta
  function laClaveSecreta (caracteres){
  
      caracteres.reverse(); // invierto el array
      let claveSecreta = caracteres.join(""); // lo convietro en cadena de caracteres
      for (i=1; i<claveSecreta.length;i++){  // lo debo hacer para toda la longuitus del string
          claveSecreta = claveSecreta.replace("*", "");
      }
      
      return claveSecreta
  }
  console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));
  console.log(laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]));
  