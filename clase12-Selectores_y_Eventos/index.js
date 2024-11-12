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


//                          PRACTICA CON NUEVOS PRODUCTOS

const elementos = [
    {id: 1, nombre: "plato", precio: 1500},
    {id: 2, nombre: "vaso", precio: 1000},
    {id: 3, nombre: "tenedor", precio: 1200},
    {id: 4, nombre: "cuchillo", precio: 1300},
];

for (const elemento of elementos) {
    //Por cada elemento además de los datos agregamos un botón
    $("#prod").append(`<div>
                            <br>
                            <h4> Producto: ${elemento.nombre}</h4>
                            <b> $ ${elemento.precio}</b>
                            <br>
                            <button id="btn${elemento.id}">Comprar</button>
    </div>`);

    $(`#btn${elemento.id}`).on('click', ()=> {console.log(`Compraste ${elemento.nombre}`)});
        }