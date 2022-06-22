import React from "react";
import logo from '../assets/logo.png';
import Banner from "./Banner";
// import Cart from "./Cart";
import QuestionForm from "./QuestionForm";
import ShoppingList from "./ShoppingList";

function App() {

  return (
    <React.Fragment>
      <Banner>
        <img src={logo} alt='La maison jungle' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      {/* <Cart /> */}
      <ShoppingList />
      <QuestionForm />
    </React.Fragment>
  )
}

export default App;
