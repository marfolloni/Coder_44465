/* Simulador interactico tienda de ropa 
Producto: Camisa
Descuento 15%

*/
let cantidad, precio, descuento, compra, pagar;

precio = parseFloat(prompt("Ingresar precio"));
cantidad = parseFloat(prompt("Ingresar cantidad"));

compra = precio*cantidad;
descuento = compra*0.15;
pagar = compra-descuento;

document.write("El descuento es: "+descuento);
document.write("<br>El total a pagar es: "+pagar);