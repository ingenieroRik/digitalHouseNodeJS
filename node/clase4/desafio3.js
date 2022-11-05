let palabra= "";


//ingreso de datos por teclado con la terminal standard metodo1
process.stdout.write("Ingrese palabra:");
process.stdin.on('data', function(data){
     palabra=data.toString().trim().toLowerCase();

     //palabra = palabra.toLowerCase();
     switch(palabra){
        case "gato":
            console.log("cat");
            break;
        case "perro":
            console.log("dog");
            break;
            case "puerta":
            console.log("door");
            break;
        case "ventana":
            return console.log("window");
            //break;  
        case "mesa":
            console.log("table");
            break;
        default:
            console.log("debe ingresar palabra correcta");
    }
     process.exit();
});

