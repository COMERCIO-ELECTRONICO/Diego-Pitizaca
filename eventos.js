//declaro constante 
const EventEmitter = require('events')
//clase con el evento 
class entrarAlaCasa extends EventEmitter{}
//declaro fuera
const entrarCasa = new entrarAlaCasa()
var nombreEvento= 'Entrar por la puerta principal'

//evento que escucha  on evento escuchar acción
entrarCasa.on('nombreEvento',(nombre)=>{
    console.log(`Saludar a ${nombre}, que ingreso por la puerta principal`);
})
//evento que emite  emit 
entrarCasa.emit('Entrar por la puerta principal','diego')