/*
1. Crear un nuevo archivo (app.js). En este, deberás importar el módulo creado
(datosBici.js) y crear un objeto literal con el nombre de (dhBici). Este último
tendrá como primer atributo (bicicletas), y debe contener la lista de las
bicicletas importadas.
2. Dentro del objeto literal crea las funcionalidades que el Tech Leader requiere
que desarrollemos en base a lo exigido por el cliente:
a. Crear una funcionalidad (buscarBici) que reciba por parámetro el (id) de
la bicicleta y devuelva la bici que corresponde. En caso de no
encontrarla, deberá retornar null. Estamos optimizando nuestro código,
por lo que deberíamos utilizar el método filter.
b. Crear una funcionalidad de (venderBici) que reciba el (id). En caso de
encontrar la bicicleta, debe asignarle el estado de vendida (si) y retornar
todos los datos de la bicicleta. En el caso de no encontrar la bicicleta,
debe retornar al usuario: “Bicicleta no encontrada”. Puedes aprovechar
la función (buscarBici).
c. Crear la funcionalidad (biciParaLaVenta). Tendrá la responsabilidad de
devolver todas aquellas bicicletas que aún no estén vendidas. Recuerda
que estamos optimizando nuestro código, por lo que deberíamos utilizar
el método filter.
d. Finalmente el Tech Leader nos felicita por todo el trabajo y nos pide un
último esfuerzo. Tenemos que desarrollar una funcionalidad
(totalDeVentas) que retorne la suma del valor de todas las ventas
realizadas. Se recomienda utilizar la función reduce.

3. Una vez hechas todas estas tareas, debemos comprobar la funcionalidad de las
mismas, usando el console.log() e invocando cada una de ellas pasando los
parámetros.
*/
let bicicletas = require ("./datosBici.js");

//console.log(bicicletas);

let dhBici = {
    bicis : bicicletas,
    buscarBici : function (id) {
        let bici = this.bicis.filter(function(bicicleta){
            // que el id del objeto sea igual que el id que le pasamos a la funcion
            return bicicleta.id == id ;
        });
        // condicional
        if (bici.length > 0){
            return bici[0];
        } else {
            return null;
        }
    },

    

    venderBici :function (id){
        biciVendida = this.buscarBici(id);
        if (biciVendida != null){
            biciVendida.vendida = "si";
            return biciVendida;
        }else {
            return "Bicicleta no encontrada";
        } 
    },

    biciParaLaVenta : function(){
        let biciParaLaVenta= [];

        for ( let j=0 ; j < this.bicis.length; j++) {
        if (this.bicis[j].Vendida == "no"){    //ojo que la propiedad Vendida esta con mayuscula
            biciParaLaVenta.push(this.bicis[j]);
        }
    }
    return biciParaLaVenta;
},
   

    /*
    biciParaLaVenta : function(){
        let biciParaLaVenta = this.bicis.filter(function(bicicleta){
            //
            return bicicleta.vendida == "no";
        });
        return biciParaLaVenta;
    },
   */



    totalDeVentas : function(){

        let bicisVendidas  = this.bicis.filter(function(bicicleta){
            return bicicleta.Vendida == "si";
        });
        let totalVentas = 0;
         totalVentas = bicisVendidas.reduce(function(acumulador, bici ){
            return acumulador + bici.Precio;
        },0);
        return totalVentas;

    },

    aumentoBici : function(porcentageAumento){
        let coeficiente = porcentageAumento/100 + 1;
        let nuevaListaDePrecios = this.bicis.map(function(bicicleta){
                return parseInt(bicicleta.Precio * coeficiente);  //para que no devuelta con coma
        });
        return nuevaListaDePrecios;
    },

    biciPorRodado : function (rodado){

        let biciPorRodado = this.bicis.filter(function(bicicleta){
            return bicicleta.Rodado == rodado;
        });
        return biciPorRodado;
    },

    listarTodasLasBici : function(){
        this.bicis.forEach(function(elemento){
            console.table(elemento);
        });
        
    },

    listarBicis : function(){
        for(let bicicleta of this.bicis)    //debe ser este array de  bicis (this)
        console.table (bicicleta);
    }

    
};
//console.log(dhBici.buscarBici(2));
//console.log(dhBici.venderBici(2));
//console.log(dhBici.biciParaLaVenta());
//console.log (dhBici.totalDeVentas());
//console.log(dhBici.aumentoBici(10));
//console.log(dhBici.biciPorRodado(26));
//dhBici.listarTodasLasBici();
dhBici.listarBicis();