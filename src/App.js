
import React ,{useState} from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandle=()=>{
    setCartIsShown(true)
  }

  const hideCartHandle =()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>

      {cartIsShown && <Cart onClose={hideCartHandle} />}
      <Header onShowCart={showCartHandle} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
