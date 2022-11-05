// sumatorioa parte4
function gananciaTotal(unPeriodo) {
  let sumatoria = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
      let mes = unPeriodo[i];
      sumatoria = sumatoria + mes;
  }
  return sumatoria;
}
console.log(gananciaTotal([]));
console.log(gananciaTotal([100]));
console.log(gananciaTotal([100,2]));
console.log(gananciaTotal([2,10,-20]));
console.log(gananciaTotal([2,10,-20,0,0,10,10]));


// filtrados
function saldosDeMesesConGanancia(unPeriodo) {
  let ganancias = [];
  for (let i=0; i<unPeriodo.length; i++){
      if (unPeriodo[i]>0){
          ganancias.push(unPeriodo[i]);
      }
  }
  return ganancias;
}
console.log(saldosDeMesesConGanancia([100,20,0,-10,10]));

//mas conteos
function cantidadDeMesesConPerdida(unPeriodo){
  let mesesPerdidas = 0;
  for (let i=0; i<unPeriodo.length;i++){
      if (unPeriodo[i] < 0){
          mesesPerdidas++;
      }
  }
  return mesesPerdidas;

}

console.log("La cantidad de meses con pérdidas es: "+ cantidadDeMesesConPerdida([100,20,0,-10,10]));