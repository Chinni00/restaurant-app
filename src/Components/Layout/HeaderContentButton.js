import React, { useContext,useEffect ,useState} from "react";
import CartContext from "../../Store/Cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderContentButton.module.css";

const HeaderContentButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
  const cartCtx = useContext(CartContext);
   const {items} = cartCtx;
  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

 

  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`
  useEffect(()=>{
    if(items.length === 0 ){
      return ;
    }
    setBtnIsHighLighted(true)

   const timer = setTimeout(()=>{
      setBtnIsHighLighted(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }

  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <CartIcon className={classes.icon} />
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderContentButton;
