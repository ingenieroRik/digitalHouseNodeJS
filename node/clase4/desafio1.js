// puedo ingresar el perfil como argumento al invocar el programa
// ejemplo node desafio1 asistente
let perfil = process.argv[2];
//perfil=perfil.toLowerCase();

//let perfil="Invitado";


//se pasa todo a minusculas para evitar errores
perfil=perfil.toLowerCase();

switch(perfil){
    case "administrador":
        console.log("Usted tiene todos los privilegios de administrador");
        break;
    case "asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break;
    case "invitado":
        console.log("Usted sólo tiene permisos de consultar datos");
        break;
    case "":
        console.log("Debe especificar el perfil del usuario");
        break;
    default:
        console.log("Debe especificar un perfil válido.");
    
}