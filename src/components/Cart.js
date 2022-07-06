import '../styles/Cart.css'
/* state 1 = import useState from react */
import { useState } from 'react'

const Cart = ( {cart, updateCart}) => {
  /* state 2 = create the state cart, the actual value & the updateCart function [decomposition] */
  /* then set the initial value to 0 */
  /* const [cart, updateCart] = useState(0); */
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price
  )

  /* const monsteraPrice = 8
  const lierrePrice = 10
  const bouquetPrice = 15 */

  return isOpen ?(
    <div className='lmj-cart'>
      <button
        className='lmj-toggle-button'
        onClick = { () => setIsOpen(false)}
      >
          Fermer
      </button>
      <h2>Panier</h2>
      {/* <div>Monstera : {monsteraPrice}€</div> */}
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
        {name} {price}€ x {amount}
        </div>
      ))}
      <p>Total : {total}€</p>
      <button onClick={() => updateCart(0)}>
        Vider le
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
