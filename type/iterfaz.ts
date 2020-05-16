//interfaz
interface person{
    nombre:string,
    apellido:string,
    edad:number,
    escivil:boolean
}
interface correo{
    //opcional ?
    email?:string
}
interface trabajo extends correo,person{
    nombretrabajo:string


}
const policia: person | trabajo={
    apellido:'Castillo',
    edad:33,
    escivil:true,
    nombre:'Diego',
    email:'a'
}

//casteo
const valor= 1;
//as
valor as number;
//<tipo dato>variable
<number> valor
