import React from "react";
import logo from '../assets/logo.png';
import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
/* import QuestionForm from "./QuestionForm"; */
import ShoppingList from "./ShoppingList";
import '../styles/Layout.css';

function App() {

  return (
    <React.Fragment>
      <Banner>
        <img src={logo} alt='La maison jungle' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart />
        <ShoppingList />
      </div>
      {/* <QuestionForm /> */}
      <Footer />
    </React.Fragment>
  )
}

export default App;
