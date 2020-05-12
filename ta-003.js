//tarea callback crear un usuario (json)-> buscar si ya existe el usuario imprimir ya existe y sino crearlo
//(nombre,edad,fechanacimiento,telefono)
// editar un usuario callback
//eliminar un usuario callback
// listar los usuarios callback


var json = {
  datos: {
    datousuario: ["dyegho ", " 33", " 20/10/86", "2670985"],
  },
};

//Usuarios
function listausuarios(arreglo, data) {
  arreglo.forEach((user) => {
    console.log(user);
  });
  data({
    alerta: "Lista de usuarios",
  });
}
listausuarios(json.datos.datousuario, (respuestamensaje) => {
  console.log(respuestamensaje);
});
//Agregar
  
function anadirUsuario(datos,nombre,edad,fechanac,telefono,data){
    datos.push(nombre)  
    datos.push(edad)  
    datos.push(fechanac)  
    datos.push(telefono)  

    data(
        {
        mensaje: 'Usuario Agregado',
        datos
    }
    )
}

var indice = json.datos.datousuario.indexOf("dyegho");
if(indice !== -1){
  console.log("Este usuario ya se encuentra registrado");
}else{
  anadirUsuario(json.datos.datousuario, 'diegho','32','10/20/87','0986784536',(mensaje) =>{
    console.log(mensaje);

})
}

 //Actualizar
  
 function editarUsuario(datos,nombre,edad,fecha,telefono,campo,campo1,campo2,campo3,data) {
  
    datos[campo] = nombre
  
    datos[campo1] = edad
  
    datos[campo2] = fecha
  
    datos[campo3] = telefono
  
    data({
      mensaje: "Usuario actualizado",
      datos,
    });
  }
  editarUsuario(json.datos.datousuario, "juan",'20','20/10/1997','0907684560',0,1,2,3,(respuestamensaje) => {
    console.log(respuestamensaje);
  });

//borrar
//Eliminar
  
function eliminarUsuario(datos,nombre,edad,fechanac,telefono,campo,campo1,campo2,campo3,data) {
  
    datos[campo] = nombre
  
    datos[campo1] = edad
  
    datos[campo2] = fechanac
  
    datos[campo3] = telefono
    data({
      mensaje: "Usuario eliminado",
      datos,
    });
  }
  
  eliminarUsuario(json.datos.datousuario, "",'','','',0,1,2,3,(respuestaMensaje) => {
    console.log(respuestaMensaje);
}); 
