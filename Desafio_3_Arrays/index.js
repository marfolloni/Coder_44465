/* const productos = [ 
    { id: 1, nombre: "hamburguesa", precio: 500 },
    { id: 2, nombre: "pizza", precio: 1000 },
    { id: 3, nombre: "pasta", precio: 1500 },
    { id: 4, nombre: "pescado", precio: 3000 },
];
 */
/* let nombre = prompt("Ingrese el nombre de la comida");

let encontrado = productos.find((comida) => comida.nombre === nombre);
let mostrar = `
    nombre: ${encontrado.nombre}
    $${encontrado.precio}
    `;
alert(mostrar); */

const productos = [ 
    { id: 1, nombre: "hamburguesa", precio: 500 },
    { id: 2, nombre: "pizza", precio: 1000 },
    { id: 3, nombre: "pasta", precio: 1500 },
    { id: 4, nombre: "pescado", precio: 3000 },
];

let precios = productos.map(item => item.precio);
let nombres = productos.map(item => item.nombre);
let preciodescuento = productos.map(item => {
    return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio - item.precio*0.10
    };
});
console.log(nombres);  
console.log(precios);
console.log(preciodescuento);

