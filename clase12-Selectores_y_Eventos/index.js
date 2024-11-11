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

const productos = [
    { id: 1, nombre: "Arroz", precio: 125 },
    { id: 2, nombre: "Fideo", precio: 70 },
    { id: 3, nombre: "Pan" , precio: 50},
    { id: 4, nombre: "Flan" , precio: 100}
];

for (const producto of productos) {
    //Por cada producto además de los datos agregamos un botón
    $("#app").append(`<div>
                            <br>
                            <h4> Producto: ${producto.nombre}</h4>
                            <b> $ ${producto.precio}</b>
                            <br>
                            <button id="btn${producto.id}">Comprar</button>
    </div>`);

    $(`#btn${producto.id}`).on('click', ()=> {console.log(`Compraste ${producto.nombre}`)});
        }