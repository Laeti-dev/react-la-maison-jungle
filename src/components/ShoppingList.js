import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'

const ShoppingList = ( { cart, updateCart }) => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )

  const addToCart = (name, price) => {
    const currentPlantAdded = cart.find((plant) => plant.name === name )
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 }
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div className='lmj-shopping-list'>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, light, water, price }) => (
          <div key={id}>
            <PlantItem
              cover={cover}
              name={name}
              light={light}
              water={water}
              price={price}
            />
            <button onClick={() => addToCart(name, price)}>
              Ajouter
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
