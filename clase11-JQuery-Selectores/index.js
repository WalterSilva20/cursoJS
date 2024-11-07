//                                  jQuery y Selectores

//                  Seleccionamos por Id
$('#jquery1')

//                  Seleccionamos por Class
$('.ulFooter')

//                  Seleccionamos por Tag
$('li')


//                                  Combinacion de Selectores

//                  Selecciona todos los p
$('p')

//                  Selecciona todos los a
$('a')

//                  Selecciona todos los <p> y los <a>
$('p , a')

//                  Seleccioan un ul con clase ulFooter, que tenga un hijo <li>
$('ul.ulFooter li')

//                  Selectores Avanzados

$( "p:last" ); //Selecciona el último <p> de la página

$( "li:first-child" ); //Selecciona todos los <li> que son primeros hijos

$( "li:last-child" ); //Selecciona todos los <li> que son últimos hijos

$( "li:only-child" ); //Selecciona todos los <li> que sean hijos únicos

$( "li:nth-child(3)" ); //Selecciona todos los <li> que sean el 3er elemento

$( "tr:nth-child(odd)" ); //Selecciona todos los <tr> que sean impares

$( "tr:nth-child(even)" ); //Selecciona todos los <tr> que sean pares

$( "div:nth-child(3n)" ); //Selecciona cada tercer elemento <div>

