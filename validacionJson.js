const Joi= require('joi')

const jsonPersona = {
    nombre: Joi.string().min(2).max(10).required(),
    apellido: Joi.string().min(3).max(30).required(),
    edad: Joi.number().min(18).max(50).required(),
}
 const jsonValidacionPersona = Joi.
 object().
 keys(jsonPersona).
 with('nombre','apellido')
 const JsonPrueba={
     nombre: 'jjjj',
     apellido:'dddd'
 }
 Joi.validate(JsonPrueba,jsonValidacionPersona,(error,valor)=>{
     console.log(error);
     console.log(valor);
 })

 
