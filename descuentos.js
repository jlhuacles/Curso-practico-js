// const precioOriginal = 120;
// const descuento = 18;


const coupons = [
    {
        name: 'casa1',
        discount: 15
    },
    {
        name: 'casa2',
        discount: 30
    },
    {
        name: 'supercasa',
        discount: 50
    }
];





function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
    
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputCoupon = document.getElementById("InputCoupon");
    const priceValue = inputPrice.value;
    const couponValue = inputCoupon.value;


    //funcion para validad el cupón con la base de datos 
    const isCouponValueValid = (coupon) =>{
        return coupon.name === couponValue;
    }
    //referencia la función para la búsqueda con el find
    const userCoupon = coupons.find(isCouponValueValid);

    //Enviamos el resultado para su análisis
    if(!userCoupon){
        alert(`El cupón '${couponValue}' no es valido`);
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    
 


}