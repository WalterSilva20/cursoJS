//                  METODO .ready()

$( document ).ready(function(){
    console.log( "El DOM esta listo" );
});


//                  Forma corta de ready()
$(function() {
    console.log('El DOM esta listo');
    });


//                  Forma corta con arrow function
$(() => {
    console.log('El DOM esta listo');
    });


//                  READY VS. LOAD
$( document ).ready(function() {
    console.log('El DOM esta listo ');
    });

 window.addEventListener ('load', function() {
    console.log( 'Todos los elementos de la ventana están cargados ' );
    });