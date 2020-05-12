//cb callback
/*var arreglo =[]
var nombreNuevo= 'Raúl'
function anadir(arreglo,nombre,indice,cb){
    //arreglo.push(nombre);
    arreglo[indice]= nombre
    //json
    cb({
        mensaje : 'exito',
        arreglo
    })
}

anadir(arreglo, nombreNuevo,(mensaje)=>{
    console.log(mensaje);
});*/

//tarea callback crear un usuario (json)-> buscar si ya existe el usuario imprimir ya existe y sino crearlo 
//(nombre,edad,fechanacimiento,telefono)
// editar un usuario callback
//eliminar un usuario callback
// listar los usuarios callback

//actualizar
//crear funcion 
var arreglousu= [1,2,3,4,5]

function crearusu(arreglo,cb){
    arreglo
    .forEach(
        usuario => {
            console.log(usuario);
        });
        
     cb({
        mensaje : 'lista de usuario'
    })
}
crearusu (arreglousu, (respuestaMensaje)=>{
    console.log(respuestaMensaje);
})
// dato vacio null valor en 0  undefined si esta definido o no 
//=== '1' comparar el contenido y el tipo de dato 
// == revis el contenido y el tipo de dato 
//npm 

function primerPaso() {
    console.log("Este es el primer paso");
     };
    
     function segundoPaso() {
     console.log("Este es el segundo paso");
     };
    
     primerPaso();
     segundoPaso();
    //Con Callbacks:
    function primerPaso(callback) {
     console.log("Este es el primer paso");
     callback();
     };
    
     function segundoPaso() {
     console.log("Este es el segundo paso");
     };
    
     primerPaso(segundoPaso);
    



