// [ P * ( 100 - D)] /100 --> fórmula de descuento

/* console.log({ precioOriginal, precioFinal, porcentajeDescuento, descuento }) */

const inputPrice = document.querySelector('.precioJs');
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
    const discount = inputDiscount.value
    const funcionDescuento = aplicarDescuento(price, discount);
    parrafPrice.innerHTML = funcionDescuento;

}

buttonCalcular.addEventListener('click', discountOnClick);