import React from 'react';
import '../css/carrito_compras.css';
import carrito from '../images/carrito.png';

function CarritoCompras() {
    return(
    <div className='carrito-compras'>
        <img
        className='carrito-compras-img'
        src={carrito}
        alt='Imagen de carrito de compras' />
        <p className='carrito-compras-num'>5</p>
    </div>
    )
};


export default CarritoCompras;