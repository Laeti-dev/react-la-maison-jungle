import '../styles/Cart.css'

const Cart = () => {
  const monsteraPrice = 8
  const lierrePrice = 10
  const bouquetPrice = 15
  return (
    <div className='lmj-cart'>
      <h1>Panier</h1>
      <ul>
        <li>Monstera : {monsteraPrice}€</li>
        <li>Lierre : {lierrePrice}€</li>
        <li>Bouquet de fleurs : {bouquetPrice}€</li>
      </ul>
      <p>Total : {monsteraPrice + lierrePrice + bouquetPrice}€</p>
    </div>
  )
}

export default Cart
