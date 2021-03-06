import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'

const ShoppingList = ({ cart, updateCart }) => {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )

  const addToCart = (name, price) => {
    const addCurrentPlant = cart.find((plant) => plant.name === name )
    if (addCurrentPlant) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: addCurrentPlant.amount + 1 }
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div className='lmj-shopping-list'>
      {/* <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul> */}

      <Categories
        categories = {categories}
        activeCategory = {activeCategory}
        setActiveCategory = {setActiveCategory}
      />
      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, light, water, price, category }) =>
          !activeCategory || activeCategory === category ? (
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
          ) : null
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
