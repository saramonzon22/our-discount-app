// [ P * ( 100 - D)] /100 --> fórmula de descuento

/* console.log({ precioOriginal, precioFinal, porcentajeDescuento, descuento }) */

const inputPrice = document.querySelector('.precioJs');
const cupon = document.querySelector('.cupon');
const inputDiscount = document.querySelector('.discountJs');
const buttonCalcular = document.querySelector('.buttonJs');
const parrafPrice = document.querySelector('.priceFinal');



function aplicarDescuento(precio, descuento) {
    const porcentajeDescuento = 100 - descuento;
    const precioFinal = (precio * porcentajeDescuento) / 100;


    return precioFinal;
}

function discountOnClick() {
    const price = inputPrice.value;
    const discount = inputDiscount.value;
    const funcionDescuento = aplicarDescuento(price, discount);
    parrafPrice.innerHTML = 'El precio con el descuento es:' + ' ' + funcionDescuento + '€';
}

const cupones = [
    {
        name: "Descuentito",
        discount: 15,
    },
    {
        name: "Casi-Ultra-Descuento",
        discount: 30,
    },
    {
        name: "PapitaTxismosa",
        discount: 50,
    }

]

buttonCalcular.addEventListener('click', discountOnClick);