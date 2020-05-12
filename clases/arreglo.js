var  arregloReduce = [2,1,11,3,45]
//contador de un arreglo
var valorSumaArreglo =arregloReduce
.reduce(
    (acumulador,item,indice,arreglo) =>{
        return acumulador + item
//inicializo el acumulador  
    },0
    )
    console.log(valorSumaArreglo)
    //String