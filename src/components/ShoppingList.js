import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'

const ShoppingList = () => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, light, water }) => (
          <PlantItem
            key={id}
            cover={cover}
            name={name}
            light={light}
            water={water}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
