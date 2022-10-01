import React,{useContext, useState} from 'react';
import CartContext from '../store/cart-context';
import styles from './MyCart.module.css';
import axios from 'axios';

const MyCart = () => {

  const { cart, clearCart } = useContext(CartContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrderHandler = async() => {
      try{
        const res = await axios.post('http://localhost:8000/placeOrder', { cart });
        if (res.status !== 200) {
          throw new Error('cannot place the odrer')
        }
        clearCart();
      }
      catch (err) {
        console.log('something went wrong')
      }
  }

  return (
    <ul className={styles.cart}>
            <li>My Cart</li>
            {
                cart.map((item,idx) => {

                   return <li key={idx}>
                        <p className={styles['item-name']}>{ item.name} <span className={styles['item-qty']}>x { item.qty}</span></p>
                        <p className={styles['item-desc']}>{ item.desc}</p>
                        <p className={styles['item-price']}>$ {item.price}</p>
                    </li>
                })
            }
            <li>Total:{totalPrice} <span className={styles['place-order-btn']}><button onClick={placeOrderHandler}>Place Order</button></span> </li>
        </ul>
  )
}

export default MyCart;