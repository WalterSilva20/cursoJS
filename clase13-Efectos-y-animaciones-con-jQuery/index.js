// //Agregemos <h3> con jQuery ocultos con style="display: none;"
// $("body").prepend('<h3 style="display: none" >¡Hola Coder1!</h3>');
// $("body").prepend('<h3 style="display: none" >¡Hola Coder2!</h3>');
// //Mostramos con show() todos los <h3>
// $("h3").show();


// //Agregamos <h3> con jQuery
// $("body").prepend('<h3>¡Hola Coder1!</h3>');
// $("body").prepend('<h3>¡Hola Coder2!</h3>');
// //Ocultamos con hide() todos los <h3>
// $("h3").hide();


// //Agreguemos <h3> con jQuery ocultos con style="display: none;"
// $("body").prepend('<h3 style="display: none" >¡Hola Coder1!</h3>');
// $("body").prepend('<h3 style="display: none" >¡Hola Coder2!</h3>');
// //Mostramos con fadeIn() todos los <h3>
// $("h3").fadeIn();


// //Agregemos <h3> con jQuery"
// $("body").prepend('<h3>¡Hola Coder1!</h3>');
// $("body").prepend('<h3>¡Hola Coder2!</h3>');
// //Ocultamos con fadeOut() todos los <h3>
// $("h3").fadeOut();


// //Agregamos <h3> con jQuery
// $("body").prepend('<h3>¡Hola Coder1!</h3>');
// //Ocultamos con fadeOut() todos los <h3>
// $("h3").fadeOut("slow", function(){
// //Cuando termina de ocultarse el elemento lo mostramos nuevamente
// $("h3").fadeIn(1000);
// });


//Agregamos un botón y un div con jQuery
$("body").prepend('<button id="btn1">Mostrar</button>');
$("body").prepend(`<div id="div1" style="height: 120px">
<h3>¡Hola Coder!</h3>
<h4>Sorpresa 2</h4>
</div>`);
//Usamos slideDown sobre div1 en respuesta al click del boton btn1
$("#btn1").click(() => {
$("#div1").slideDown("fast");
});