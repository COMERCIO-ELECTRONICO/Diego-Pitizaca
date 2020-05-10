//arreglo uno, multiplique * 2, y me filtrar los pares, usar map y filter
//arreglo dos, filter los los impares , sumar + 2

var json = {
  arreglos: {
    uno: [2, 4, 5, 8, 6, 9, 10,20],
    dos: [
      { valor: 1 },
      { valor: 4 },
      { valor: 2 },
      { valor: 24 },
      { valor: 100 },
      { valor: 23 },
      { valor: 45 },
      { valor: 23 },
    ],
  },
};

//Map Pares
var arreglouno = json.arreglos.uno.map((item) => {
  return item * 2;
});
console.log('--- Map Pares---',arreglouno);

//Filter Pares
//if (i % 2 == 0){}
var unopares = json.arreglos.uno.filter(function (pares) {
    return pares % 2== 0;
  
});

console.log('--- Filter Pares---',unopares);

//Arreglo dos Filter impares
var impares = json.arreglos.dos.filter(function (impares) {
    return (impares.valor % 2)==1;
    
});
console.log('---Filter Impares---',impares);

//Impares +2
var sumar= impares
.map(
    (suma)=>{
        return(suma.valor+2);
    }
)
console.log('---Valor +2 ---',sumar);