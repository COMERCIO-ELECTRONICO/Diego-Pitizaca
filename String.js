var nombre = 'diego' 

console.log(nombre.length);
//extrae  letras a consultar
console.log(nombre.indexOf('o'));
//
console.log(nombre.search('o'));
//divide a la palabra
console.log(nombre.slice(1,3));
// mejor control 
console.log(nombre.substr(1,3));
//minuscula
console.log(nombre.toLocaleLowerCase());
//mayuscula 
console.log(nombre.toLocaleUpperCase());
//palabra que se busca en el texto y remplazar 
var texto = 'clase de javascript'
console.log(texto.replace('clase', 'dia'));
//expresiones regulares var a= //(texto.replace(/Hola/g,"b"))
//concatenar 2 parametros 
console.log(texto.concat(' ', nombre));
// resultado de concatenar 
console.log(`${texto}mas mi nombre: ${nombre}` );
//quita los espacios de los extremos 
console.log(texto.trim() );
console.log(texto.split('') );
//la posición en la que esta la letra dependiendo de la posición que se encuentra 
console.log(nombre.charAt(3) );
// tarea 
//'COMERCIO ELECTRONICO ' ,INVERTIR LA PALABRA
//CAMBIA primera palabra, LA PALABRA DE LA MITAD MAYUSCULA UTILIZAR FUNCIONES, ultima palabra mayuscula,sumar todos los puntos y comas 