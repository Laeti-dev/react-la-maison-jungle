import '../styles/Cart.css'
/* state 1 = import useState from react */
import { useState } from 'react'

const Cart = ( {cart, updateCart}) => {
  /* state 2 = create the state cart, the actual value & the updateCart function [decomposition] */
  /* then set the initial value to 0 */
  /* const [cart, updateCart] = useState(0); */
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price, 0
  )

  /* const monsteraPrice = 8
  const lierrePrice = 10
  const bouquetPrice = 15 */

  return isOpen ? (
    <div className='lmj-cart'>
      <button
        className='lmj-toggle-button'
        onClick = { () => setIsOpen(false)}
      >
          Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <li key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </li>
            ))}
          </ul>
          <p>Total : {total}€</p>
          <button onClick={() => updateCart([])}>
            Vider le panier
          </button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
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
