import React from 'react'
import { useCartContext } from '../../context/CartContext';
import "./itemCart.css";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
  return (
    <div className='itemCart'>
        <img src={product.image} alt={product.title} />
        <div>
            <p>Cafe: - {product.title}</p>
            <p>Unidades: {product.quantity}</p>
            <p>Precio unitario: $ {product.price}</p>
            <p>Subtotal: $ {product.quantity * product.price}</p>
            <button className='text-black px-3' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart;