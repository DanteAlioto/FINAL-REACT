import React from 'react';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {
const {totalProducts} = useCartContext();
    return (
      <>
        <i className="bi bi-minecart text-dark"></i>
        <span className='h5 mx-auto px-2 text-dark' >{totalProducts() || ''}</span>
      </>
    );
}

export default CartWidget;