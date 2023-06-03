import React from 'react'

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderContentButton.module.css'

const HeaderContentButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick} >
        
        <CartIcon className={classes.icon} />
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderContentButton;