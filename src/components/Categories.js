import { useState } from 'react'
import "../styles/Categories.css"

const Categories = ({ setActiveCategory, activeCategory, categories }) => {
  return (
    <div className='lmj-categories'>
      <select
        value={activeCategory}
        onChange={ (element) => setActiveCategory(element.target.value)}
        className='lmj-categories-select'
      >
        <option value=''>Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>
        Reset
      </button>
    </div>
)}

export default Categories
