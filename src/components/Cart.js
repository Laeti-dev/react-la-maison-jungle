import '../styles/Cart.css'
/* state 1 = import useState from react */
import { useState } from 'react'

const Cart = () => {
  /* state 2 = create the state cart, the actual value & the updateCart function [decomposition] */
  /* then set the initial value to 0 */
  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const monsteraPrice = 8
  const lierrePrice = 10
  const bouquetPrice = 15

  return isOpen ?(
    <div className='lmj-cart'>
      <button
        className='lmj-toggle-button'
        onClick = { () => setIsOpen(false)}
      >
          Fermer
      </button>
      <h2>Panier</h2>
      <div>Monstera : {monsteraPrice}€</div>
      <button onClick = { () => updateCart(cart + 1)}>
        Ajouter
      </button>
      <p>Total : {monsteraPrice * cart}€</p>
      <button onClick={() => updateCart(0)}>
        Vider le panier
      </button>
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button
        className='lmj-cart-toggle-button'
        onClick = { () => setIsOpen(true)}
      >
        Ouvrir
      </button>
    </div>
  )
}

export default Cart
