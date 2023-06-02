import classes from './Header.module.css';
import React from 'react';
import HeaderContentButton from './HeaderContentButton';

const Header = () => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>DELICIOUS MEALS</h1>
            <HeaderContentButton  /> 
        </header>
        <div className={classes['main-image']}>
            <img src='https://i1.wp.com/mvslim.com/wp-content/uploads/2015/04/warsaw_food_restaurant_burger_kitchen_2.jpg?w=2130' alt='a table full of delicious food' />
        </div>
    </React.Fragment>
  )
}

export default Header