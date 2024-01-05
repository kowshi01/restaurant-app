import React, { useState } from 'react';
import CartContext from './Cartcontext';

const CartProvider = (props) => {
  const [addItems, setAddItems] = useState([]);
    const addItemToCartHandler=item=>{
      let cartItems=[...addItems];
      let hasItemInCart=false;
      cartItems.forEach((storedItem)=>{
        if(storedItem.id===item.id){
          hasItemInCart=true;
          storedItem.quantity=Number(storedItem.quantity)+Number(item.quantity);
        }
      });
      if(hasItemInCart){
        setAddItems(cartItems);
      }else{
        setAddItems((prevItems)=>{
          return [...prevItems,item]
        })
      }

    };

    const removeItemToCartHandler=item=>{
      let cartItems=[...addItems];
      if(item.quantity<=1){
        const newItems=cartItems.filter((items)=>{
          return items.id!==item.id
        });
        setAddItems(newItems)
      }else{
        item.quantity-=1;
        setAddItems(cartItems)
      }
      
    };

    const cartContext={
        items : addItems,
        totalAmount : 0,
        addItem : addItemToCartHandler,
        removeItem : removeItemToCartHandler
    };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider