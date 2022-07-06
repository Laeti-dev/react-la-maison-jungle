import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'

const ShoppingList = ( { cart, updateCart }) => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )

  return (
    <div className='lmj-shopping-list'>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, light, water }) => (
          <div key={id}>
            <PlantItem
              cover={cover}
              name={name}
              light={light}
              water={water}
            />
            <button onClick={() => updateCart(cart + 1)}>
              Ajouter
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
