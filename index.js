const iva = 0.21;
const recargoTarjeta = 0.10;
const envio = 900;

let precio;
let pago = parseInt(prompt("ingrese forma de pago (1 = efectivo o 2 = tarjeta)"));
let precioFinal = calculadora();

function calculadora (){
    switch (pago){
        case 1:
            precio = parseInt(prompt("ingrese el valor del producto que desee comprar"));
            return precio + (precio * iva) + envio;
            break;

        case 2:  
            precio = parseInt(prompt("ingrese el valor del producto que desee comprar"));
            return precio + (precio * iva) + envio + (precio * recargoTarjeta);
            break;

        default:
            return "error intente de nuevo"
            break;
    }

}

alert(precioFinal);