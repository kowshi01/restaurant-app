import React, { useContext } from 'react'
import classes from './MealItemsForm.module.css';
import Input from '../../UI/Input';
import Cartcontext from '../../../store/Cartcontext';

const MealItemForm = (props) => {
  const cartCtx = useContext(Cartcontext)
  
  const addItemToCart = (e)=>{
    e.preventDefault();
    let quantity=0;
     quantity = document.getElementById("amount_"+props.id).value;
    console.log(quantity);
    cartCtx.addItem({...props.item,quantity:quantity})
    
  }
  return (
    <form  className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: "amount_"+props.id,
            type: "number",
            max: "5",
            min: "1",
            step:'1',
            defaultValue: "1"
          }}
        />
        
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
}

export default MealItemForm