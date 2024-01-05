import React, { useContext} from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../store/Cartcontext';

const Cart = (props) => {
  const cartCtx=useContext(CartContext);

  const increaseQuantity=(item)=>{
    cartCtx.addItem({ ...item, quantity: 1 })
  }

  const decreaseQuantity=(item)=>{
    cartCtx.removeItem(item)
  }

  const cartItems=(
    <ul>
        {cartCtx.items.map((item)=>{
          return( 
            <li> 
              <div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
              </div>
              <div>
                <button onClick={()=>increaseQuantity(item)}>+</button>
              </div>
              <div>
                <button onClick={()=>decreaseQuantity(item)}>-</button>
              </div>
            </li>
          )
        })}
    </ul>
    );

      let total=0;
      cartCtx.items.forEach((item)=>{
        total+= item.price * item.quantity;
      })
  
      
  return (
    <Modal onClose={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{total.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart