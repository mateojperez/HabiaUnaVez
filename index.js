const botonCrear = document.getElementById("crear");
const buscador = document.getElementById("buscador")
let contenedor = document.getElementById("vidriera");
let vidriera = document.getElementsByClassName("vidrieraProducto");

let productosCreados = [
{ id:1, nombre: "Zapatillas Adidas", precio:2000 , imagen:"./images/zapatillas/zapas 11.png" },
{ id:2, nombre: "Remera De Tigre", precio:1500 , imagen:"./images/remeras/remera 1.png" },
{ id:3, nombre: "Buzo Mickey", precio:1800 , imagen:"./images/buzos/buzo 2.png" },
{ id:4, nombre: "Zapatillas Converse", precio:2000 , imagen:"./images/zapatillas/zapas 12.png"},
{ id:5, nombre: "Remera Rosa", precio:1200 , imagen:"./images/remeras/remera 2.png"},
{ id:6, nombre: "Buzo Militar", precio:1400 , imagen:"./images/buzos/buzo 1.png"},
{ id:7, nombre: "Zapatillas Violeta", precio:1800 , imagen:"./images/zapatillas/zapas 13.png"},
{ id:8, nombre: "Remera Girafa", precio:1000 , imagen:"./images/remeras/remera 3.png"},
{ id:9, nombre: "Buzo Gris Monstruo", precio:1350 , imagen:"./images/buzos/buzo 3.png"},
];
let carrito = [];
productosCreados.forEach(producto => {
    let div = document.createElement("div");
    div.className = "vidrieraProducto"
    div.innerHTML = `<div class="vidriera__datos">
                    <img src="${producto.imagen}" width="300px" class="vidrieraImagen">
                    <h4 class="vidriera__titulo"> ${producto.nombre}</h4>
                    <h4 class="vidriera__precio">${producto.precio}</h4>
                    <botton type="button" width="75px" id="botonCarrito${producto.id}" class="botonCarrito"></botton>
                    </div>`;

    contenedor.appendChild(div)

    let boton = document.getElementById(`botonCarrito${producto.id}`)
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
    })

})

const agregarAlCarrito = (prodId) => {
    const item = productosCreados.find ((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito);
}



















let productosGenerados = [];




class Producto{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}


// let buscador = prompt("ingrese el producto a buscar");
// let productosEncontrados = productosCreados.find(item => item.nombre === buscador);
// productosEncontrados.forEach(producto => {
//     let div = document.createElement("div");
//     div.className = "vidrieraProducto"
//     div.innerHTML = `<div class="vidriera__datos">
//                     <img src="${producto.imagen}" width="300px" class="vidrieraImagen">
//                     <h4 class="vidriera__titulo"> ${producto.nombre}</h4>
//                     <h4 class="vidriera__precio">${producto.precio}</h4>
//                     <input type="button" value="COMPRAR" class="botonComprar">
//                     <input type="button" width="75px"  class="botonCarrito">
//                     </div>`;

//     contenedor.append(div)
// })


// buscador.addEventListener("keyup", () => {
//     productosCreados.filter(item => item.nombre === buscador)
//     contenedor.innerHTML = `<div class="vidriera__datos">
//     <img src="${producto.imagen}" width="300px" class="vidrieraImagen">
//     <h4 class="vidriera__titulo"> ${producto.nombre}</h4>
//     <h4 class="vidriera__precio">${producto.precio}</h4>
//     <input type="button" value="COMPRAR" class="botonComprar">
//     <input type="button" width="75px"  class="botonCarrito">
//     </div>`;
// });





























// if(productosGenerados.length > 0){
//     productosGenerados.forEach(producto => {
//         let div = document.createElement("div");
//         div.className = "vidrieraProducto"
//         div.innerHTML = `<div class="vidriera__datos">
//                         <img src="${producto.imagen}" width="300px" class="vidrieraImagen">
//                         <h4 class="vidriera__titulo"> ${producto.nombre}</h4>
//                         <h4 class="vidriera__precio">${producto.precio}</h4>
//                         <button type="button" value="COMPRAR" class="botonComprar"</botton>
//                         <button type="button" width="75px"  class="botonCarrito"</button>
//                         </div>`;
    
//         contenedor.append(div)
//     })
// }



// botonCrear.addEventListener("click", () => {
//     let nombre = prompt("ingrese nombre");
//     let precio = parseInt(prompt("ingrese precio"));
//     let imagen = prompt("ingrese la imagen");
//     let productoFinal = new Producto(nombre, precio, imagen);
//     productosGenerados.push(productoFinal);
// });



// console.log(productosCreados);
// console.log(productosGenerados);
