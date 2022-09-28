const botonCrear = document.getElementById("crear");
const buscador = document.getElementById("buscador")
let contenedor = document.getElementById("vidriera");
let vidriera = document.getElementsByClassName("vidrieraProducto");
const carritoContenedor = document.getElementById("modal-carrito");
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
    actualizarCarrito();
    console.log(carrito);
}

const actualizarCarrito = () =>{
    carritoContenedor.innerHTML = "";

    carrito.forEach((producto) =>{
        const div = document.createElement('div')
        div.className = "carritoContenedor"
        div.innerHTML = `<p>Nombre: ${producto.nombre} .  </p>
                         <p> Precio: ${producto.precio} . </p>
                         <button class="borrarProducto" onclick="eliminarDelCarrito(${producto.id})">Borrar</button>`;
        carritoContenedor.appendChild(div);
    })
} 

let cerrarCarrito = document.getElementById("botonCerrarCarrito");

cerrarCarrito.addEventListener("click", () => {
    let menuCarrito = document.getElementById("menuCarrito");
    menuCarrito.className = "modal-desactive";
})

let abrirCarrito = document.getElementById("abrirCarrito");

abrirCarrito.addEventListener("click", () => {
    let menuCarrito = document.getElementById("menuCarrito");
    menuCarrito.className = "modal-active";
})

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}












// let productosGenerados = [];

// class Producto{
//     constructor(nombre, precio, imagen){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.imagen = imagen;
//     }
// }

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
