/*
Etapa2
En esta primera etapa, necesitamos requerir tu módulo autos y guardarlo en la variable autosImportados que se encuentra en la misma carpeta del archivo donde estás trabajando. Recordá que es el mismo archivo que creaste en la etapa anterior. 

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.
*/
/* requerir módulo autos */
let autosImportados = require("./autos.js");

let persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 300000,
};

const concesionaria = {
  autos: autosImportados,
  /*
  buscarAuto2 : function (patenteBuscada) {

      let autoBuscado = this.autos.filter(function(auto){
            
            return auto.patente == patenteBuscada ;
        });
        if (autoBuscado.length == 0){
          return null
        } else {
        return autoBuscado;
        }
    },
  */
  buscarAuto2: function (patenteBuscada) {
    let autoBuscado = null;
    for (let i = 0; i < this.autos.length; i++) {
      if (this.autos[i].patente == patenteBuscada) {
        autoBuscado = this.autos[i];
      }
    }

    return autoBuscado;
  },
  // otra forma mejor y mas rápida porque retorna apenas lo encuentra
  
    buscarAuto : function (patenteBuscada) {
        for (let i=0; i < this.autos.length; i++) {
            if (this.autos[i].patente == patenteBuscada){
               return this.autos[i];
            }
        }
      
        return null;
    },
    
  // otra forma :

  // buscarAuto3 : function(patenteBuscada){
  //  let autoBuscado = this.autos.find(function(auto){
  //   return auto.patente == patenteBUscada;
  //

  venderAuto: function (patenteBuscada) {
    let autoVender = this.buscarAuto(patenteBuscada);
    if (autoVender == null) {
      return "patente no disponible";
    } else {
      autoVender.vendido = true;
      this.autos.vendido = true;
    }
    return autoVender;
  },

  autosParaLaVenta: function () {
    let autosParaVender = this.autos.filter(function (auto) {
      return auto.vendido == false;
    });

    return autosParaVender;
  },

  autosNuevos: function () {
    let autosNuevos = this.autosParaLaVenta().filter(function (auto) {
      return auto.km < 100;
    });
    /* let autosNuevos = this.autosParaLaVenta().filter(auto => auto.km < 100) */
    return autosNuevos;
  },

  /*
    autosNuevos : function () {

      let autosNuevos = this.autos.filter(function(auto){
            
            return (auto.vendido == false && auto.km <100) ;
        });
        return autosNuevos;
    },
    */
  // esta funcion devuelve una lista que contiene el precio de venta de cada auto vendido
  listaDeVentas: function () {
    let listaVentas = [];
    for (let i = 0; i < this.autos.length; i++) {
      if (this.autos[i].vendido) {
        listaVentas.push(this.autos[i].precio);
      }
    }
    return listaVentas;
  },

  listaDeVentas2: function () {
    let listaVentas2 = this.autos.filter((a) => a.vendido).map((a) => a.precio);
    return listaVentas2;
  },


  // esta funcion devuelve la suma total de las ventas
  totalDeVentas: function () {
    let totalDeVentas = this.listaDeVentas().reduce(function (
      acumulador,
      ventaActual
    ) {
      return acumulador + ventaActual;
    },
    0);

    //return "La venta total es: " + totalDeVentas;

    return "La venta total es: " + totalDeVentas;
  },

  //recibe por parámetro un auto y una persona y devuelva true si la misma puede
  // comprar el auto.
  puedeComprar2: function (patente, persona) {
    let auto = this.buscarAuto(patente);

    if (
      persona.capacidadDePagoTotal >= auto.precio &&
      persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas
    ) {
      return true; //persona.nombre + " puede comprar el auto " + autoAcomprar.marca;
    } else {
      return false;
    } //"No lo puede comprar"};
  },
  puedeComprar: function (auto, persona) {
    if (
      persona.capacidadDePagoTotal >= auto.precio &&
      persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas
    ) {
      return true; //persona.nombre + " puede comprar el auto " + autoAcomprar.marca;
    } else {
      return false;
    } //"No lo puede comprar"};
  },

  // otra alternativa
  //  return (persona.capacidadDePagoTotal >= auto.precio &&
  //     persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas))

  //recibe una persona y devuelve la lista de autos que puede comprar.
  autosQuePuedeComprar3: function (persona) {
    let autos = this.autosParaLaVenta();

    let autosPuedeComprar = autos.filter(function (auto) {
      return (
        auto.precio <= persona.capacidadDePagoTotal &&
        auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
      );
    });

    return autosPuedeComprar;
  },

  // otra forma
  autosQuePuedeComprar: function (persona) {
    //primero obtengo un array con los autos que se pueden vender
    let autos = this.autosParaLaVenta();

    //ahora filtro de los que se pueden vender aquellos que la persona
    //puede comprar en un nuevo array
    let autosPuedeComprar = autos.filter((auto) =>
      this.puedeComprar(auto, persona)
    );

    return autosPuedeComprar;
  },

  autosQuePuedeComprar2: function (persona) {
    //primero obtengo un array con los autos que se pueden vender
    //let autos = this.autosParaLaVenta();

    //ahora filtro de los que se pueden vender aquellos que la persona
    //puede comprar en un nuevo array
    let autosPuedeComprar = this.autosParaLaVenta().filter((auto) =>
      this.puedeComprar(auto, persona)
    );

    return autosPuedeComprar;
  },
};

//console.table(concesionaria.venderAuto("JJK116"));
//console.table(concesionaria.autosParaLaVenta());
//console.table(concesionaria.autosNuevos());
console.table(concesionaria.listaDeVentas2());
console.table(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.puedeComprar("MAQ222", persona));
//console.table(concesionaria.autosQuePuedeComprar(persona));
//console.table(concesionaria.autosQuePuedeComprar2(persona));
