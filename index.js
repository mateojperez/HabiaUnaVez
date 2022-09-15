
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

let contenedor = document.getElementById("vidriera")
let vidriera = document.getElementsByClassName("vidrieraProducto")
let productosCreados = [];
let productosFinal = [vidriera, productosCreados]
let buscador = prompt("ingrese el producto a buscar")
let producto = productosFinal.find(item => item.nombre === nombre);

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
console.log(productosFinal);