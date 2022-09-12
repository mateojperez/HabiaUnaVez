
const productos = [];

class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.vendido = false;
    }

    vender(){
        this.vendido = true;
    }
}

for(let i = 0; i < 3; i++){
    let nombre = prompt("ingrese nombre");
    let precio = parseInt(prompt("ingrese precio"));
    let stock = parseInt(prompt("ingrese cantidad en stock"));

    let productoFinal = new Producto(nombre, precio, stock);

    productos.push(productoFinal);

}

let nombre = prompt("ingrese el producto a buscar");
let producto = productos.find(item => item.nombre === nombre);
console.log(producto);

const carrito = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
console.log(carrito);