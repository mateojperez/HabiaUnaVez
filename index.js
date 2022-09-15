
// const productos = [];

// class Producto{
//     constructor(nombre, precio, stock){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//         this.vendido = false;
//     }

//     vender(){
//         this.vendido = true;
//     }
// }

// for(let i = 0; i < 3; i++){
//     let nombre = prompt("ingrese nombre");
//     let precio = parseInt(prompt("ingrese precio"));
//     let stock = parseInt(prompt("ingrese cantidad en stock"));

//     let productoFinal = new Producto(nombre, precio, stock);

//     productos.push(productoFinal);

// }

// let nombre = prompt("ingrese el producto a buscar");
// let producto = productos.find(item => item.nombre === nombre);
// console.log(producto);

// const carrito = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
// console.log(carrito);

// let productos = document.getElementsByClassName("vidrieraProducto");

// console.log(productos);

// let carrito = [];

// console.log(productosFinal);

// if (true){

// }

let contenedor = document.getElementById("vidriera");
let vidriera = document.getElementsByClassName("vidrieraProducto");
let botonComprar = document.getElementsByClassName("botonComprar");
let botonCarrito = document.getElementsByClassName("botonCarrito");
let productosCreados = [
{ nombre: "Zapatillas Adidas", precio:2000 , imagen:"./images/zapatillas/zapas 11.png", botonComprar, botonCarrito},
{ nombre: "Remera De Tigre", precio:1500 , imagen:"./images/remeras/remera 1.png", botonComprar, botonCarrito},
{ nombre: "Buzo Mickey", precio:1800 , imagen:"./images/buzos/buzo 2.png", botonComprar, botonCarrito},
{ nombre: "Zapatillas Converse", precio:2000 , imagen:"./images/zapatillas/zapas 12.png", botonComprar, botonCarrito},
{ nombre: "Remera Rosa", precio:1200 , imagen:"./images/remeras/remera 2.png", botonComprar, botonCarrito},
{ nombre: "Buzo Militar", precio:1400 , imagen:"./images/buzos/buzo 1.png", botonComprar, botonCarrito},
{ nombre: "Zapatillas Violeta", precio:1800 , imagen:"./images/zapatillas/zapas 13.png", botonComprar, botonCarrito},
{ nombre: "Remera Girafa", precio:1000 , imagen:"./images/remeras/remera 3.png", botonComprar, botonCarrito},
{ nombre: "Buzo Gris Monstruo", precio:1350 , imagen:"./images/buzos/buzo 3.png", botonComprar, botonCarrito},
];




class Producto{
    constructor(nombre, precio, imagen, botonComprar, botonCarrito){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.botonComprar = botonComprar;
        this.botonCarrito = botonCarrito;
    }
}

for(let i = 0; i < 1; i++){
        let nombre = prompt("ingrese nombre");
        let precio = parseInt(prompt("ingrese precio"));
        let imagen = prompt("ingrese la imagen");
    
        let productoFinal = new Producto(nombre, precio, imagen);
    
        productosCreados.push(productoFinal);
    
    }



    for (const producto of productosCreados){
        let div = document.createElement("div");
        div.className = "vidrieraProducto"
        div.innerHTML = `<div class="vidriera__datos">
                        <img src="${producto.imagen}" width="300px" class="vidrieraImagen">
                        <h4 class="vidriera__titulo"> ${producto.nombre}</h4>
                        <h4 class="vidriera__precio">${producto.precio}</h4>
                        <input type="button" value="COMPRAR" class="botonComprar">
                        <input type="button" width="75px"  class="botonCarrito">
                        </div>`;
    
        contenedor.append(div)
    }
console.log(productosCreados);





    // let buscador = prompt("ingrese el producto a buscar");
    // let productosEncontrados = productosCreados.find(item => item.nombre === buscador);
    // console.log(productosEncontrados);
    // let div = document.createElement("div");
    // div.className = "vidrieraProducto"
    // div.innerHTML = `<div class="vidriera__datos">
    //                 <img src="${productosEncontrados.imagen}" width="300px" class="vidrieraImagen">
    //                 <h4 class="vidriera__titulo"> ${productosEncontrados.nombre}</h4>
    //                 <h4 class="vidriera__precio">${productosEncontrados.precio}</h4>
    //                 <input type="button" value="COMPRAR" class="botonComprar">
    //                 <input type="button" width="75px"  class="botonCarrito">
    //                 </div>`;

    // contenedor.append(div)

    
  
// let botonBuscar = document.getElementById("buscar")
// botonBuscar.addEventListener("click", buscar);

