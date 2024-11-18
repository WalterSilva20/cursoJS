// //                  METODO .ready()

// $( document ).ready(function(){
//     console.log( "El DOM esta listo" );
// });


// //                  Forma corta de ready()
// $(function() {
//     console.log('El DOM esta listo');
//     });


// //                  Forma corta con arrow function
// $(() => {
//     console.log('El DOM esta listo');
//     });


// //                  READY VS. LOAD
// $( document ).ready(function() {
//     console.log('El DOM esta listo ');
//     });

//  window.addEventListener ('load', function() {
//     console.log( 'Todos los elementos de la ventana están cargados ' );
//     });


// //                  MÉTODO ON
// //Agregamos un botón al body como primer elemento y Asociamos el evento un click al botón creado
// $('body').prepend('<button id="btnjQuery">CLICK</button>').on('click', function () {
//     console.log("Respuesta a un click")});

// //Asociamos el evento doble click al botón creado
//     $('#btnjQuery').on('dblclick', () => {console.log("Respuesta al doble click");});

// const productos = [
//     { id: 1, nombre: "Arroz", precio: 125 },
//     { id: 2, nombre: "Fideo", precio: 70 },
//     { id: 3, nombre: "Pan" , precio: 50},
//     { id: 4, nombre: "Flan" , precio: 100}
// ];

// for (const producto of productos) {
//     //Por cada producto además de los datos agregamos un botón
//     $("#app").append(`<div>
//                             <br>
//                             <h4> Producto: ${producto.nombre}</h4>
//                             <b> $ ${producto.precio}</b>
//                             <br>
//                             <button id="btn${producto.id}">Comprar</button>
//     </div>`);

//     $(`#btn${producto.id}`).on('click', ()=> {console.log(`Compraste ${producto.nombre}`)});
//         }


// //                  PRACTICA CON NUEVOS PRODUCTOS

// const elemen = [
//     {id: 1, nombre: "plato", precio: 1500},
//     {id: 2, nombre: "vaso", precio: 1000},
//     {id: 3, nombre: "tenedor", precio: 1200},
//     {id: 4, nombre: "cuchillo", precio: 1300},
// ];

// for (const produ of elemen) {

//     $("#prod").append(`<div>
//                             <br>
//                             <h4> Producto: ${produ.nombre}</h4>
//                             <b> $ ${produ.precio}</b>
//                             <br>
//                             <button id="boton${produ.id}">Comprar</button>
//     </div>`);

//     $(`#boton${produ.id}`).on('click', ()=> {console.log(`Compraste ${produ.nombre}`)});
// }


// //                              Agregamos dos botones con jQuery
// $("body").prepend('<button id="btn1">BUTTON</button>');
// $("body").prepend('<button id="btn2">BUTTON</button>');
// //                              Asociamos el evento click para btn1
// $("#btn1").click(function () {
// console.log(this);
// });
// //                              Evento click para btn2 con Arrow function y parámetro e
// $("#btn2").click((e) => {
// console.log(e.target);
// });


// //Agregamos inputs con jQuery
// $("body").prepend(`<input type="text" class="inputsClass">
//     <input type="number" class="inputsClass">
//     <select class="inputsClass">
//                         <option value="1" selected >ID 1</option>
//                         <option value="2">ID 2</option>
//                         <option value="3">ID 3</option>
//     </select>`);

//     //Asociamos el evento change a todos los inputs
//     $(".inputsClass").change(function (e) {
//     console.log(e.target.value);
//     console.log(this.value);
//     });


// //Agregamos un formulario con jQuery
// $("body").prepend(`<form id="myForm">
//                 <input type="text" >
//                 <input type="number">
//                 <input type="submit">
//     </form>`);
//     //Asociamos el evento submit al formulario
//     $("#myForm").submit(function (e) {
//     //Prevenimos el comportamiento de submit
//     e.preventDefault();
//     //Obtenemos hijos del formulario
//     let hijos = $(e.target).children();
//     //Primer input type="text"
//     console.log(hijos[0].value);
//     //Primer input type="number"
//     console.log(hijos[1].value);
//     });



//     //Agregamos un botón y un input
// $("body").prepend('<button id="btn1">BUTTON</button>');
// $("body").prepend('<input id="ipt1" type="text">');
// //Asociamos el evento change al ipt1
// $("#ipt1").change((e) => {
// alert("El valor es " + e.target.value);
// });
// //Asociamos el evento click para btn1 y usamos trigger
// $("#btn1").click(() => {
// //Usamos trigger para disparar el evento change de ipt1
// $("#ipt1").trigger("change");
// });


// Array de objetos para agregar información al DOM.
const productos = [{ id: 1, nombre: "Arroz", precio: 125 },
    { id: 2, nombre: "Fideo", precio: 70 },
    { id: 3, nombre: "Pan" , precio : 50},
    { id: 4, nombre: "Flan" , precio: 100}];

// Asociamos el evento click en ready luego del DOM Generado
$(document).ready(function () {
$(".btnComprar ").click(function (e) {

//Obtenemos hijos del padre <div> desde el target
let hijos = $(e.target).parent().children();

//Primer input, valor de ID oculto
console.log(hijos[0].value);
});
});
// Recorremos el array con for..of
for (const producto of productos) {

//Por cada producto además de los datos agregamos un botón
$("#app").append(`<div>
    <input value=" ${producto.id}" type="hidden">
    <h4> Producto: ${producto.nombre}</h4>
    <b> $ ${producto.precio}</b>
    <button class="btnComprar">Comprar</button>
</div>` );
}