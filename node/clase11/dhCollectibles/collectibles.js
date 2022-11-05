
let fs = require("fs");

let rutaArchivo1 = "./datos/figuras1.json";
let rutaArchivo2 = "./datos/figuras2.json";
let rutaArchivo3 = "./datos/figuras3.json";


let figurasArray;

function importar (marca){

    
    if (marca == "Hot Toys"){
        let figurasJSON = fs.readFileSync(rutaArchivo1, "utf-8");
        figurasArray = JSON.parse(figurasJSON);
    } else if (marca == "Bandia"){
        let figurasJSON = fs.readFileSync(rutaArchivo2, "utf-8");
        figurasArray = JSON.parse(figurasJSON);
    }else if (marca == "Star Wars"){
        let figurasJSON = fs.readFileSync(rutaArchivo3, "utf-8");
        figurasArray = JSON.parse(figurasJSON);
    }
    return figurasArray;
}




//console.table(importar("Hot Toys"));

module.exports = importar;
