
import React ,{useState} from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandle=()=>{
    setCartIsShown(true)
  }

  const hideCartHandle =()=>{
    setCartIsShown(false)
  }

  return (
    <React.Fragment>

      {cartIsShown && <Cart onClose={hideCartHandle} />}
      <Header onShowCart={showCartHandle} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
