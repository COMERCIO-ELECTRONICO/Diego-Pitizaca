
//invertir una cadena de texto 
var texto= 'COMERCIO ELCTRONICO'
function invertir(texto) {
}

console.log('PALABRA INVERSA.-',texto.split('').reverse().join(''));

//CAMBIA primera palabra, LA PALABRA DE LA MITAD MAYUSCULA UTILIZAR FUNCIONES, ultima palabra mayuscula,sumar todos los puntos y comas 
/*
Realiza fotografías de 20 megapíxeles y
puede utilizar un perfil de color Dlog-M
de 10 bits, con el que se obtiene un rango
dinámico más amplio al registrar hasta mil millones de
colores. Esto queda bastante por encima de los 16 millones de
colores de los perfiles de 8 bits, pudiendo dejar más margen y
libertad en la edición posterior del material.
Por su parte, el Mavic 2 Zoom cuenta con
un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto.
En este caso es capaz de realizar capturas de 12 megapíxeles,
disponiendo un zoom automático híbrido (que combina detección de fase y contraste)
de una función de "Superresolución" que recurre al zoom óptico para realizar nueve
fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).
*/ 
//cambiar a mayuscula primera palabra
var resumen = 'Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de "Superresolución" que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle.';
var inicio = resumen
.split(' ')[0]
.toLocaleUpperCase();
console.log('PALABRA INICIAL.-',inicio);
//palabra intermedia y cambiar a mayuscula 
var palabramedia = resumen
.split(' ');
var medio= palabramedia[(palabramedia.length - 1)/2]
.toLocaleUpperCase();
console.log('PALABRA INTERMEDIA.-',medio);
//ultima palabra mayuscula 
var fin = resumen
.split(' ');
var palabra = fin [fin.length -1 ]
.toLocaleUpperCase();
console.log('PALABRA FINAL.-',palabra);
// sumar puntos
console.log('TOTAL PUNTOS EXISTENTES.-',resumen.split('.').length-1);
//sumar comas
console.log('TOTAL COMAS EXISTENTES.-',resumen.split(',').length-1);












































