import React from 'react'
import './style.css'

const CategoryFilter = ({categories, onChange}) => {
  
  const handleCategoryChange = (event) => {
    const value = event.target.value
    const id = categories.indexOf(value)
    onChange(id)
  }

  return (
    <div className="bookSelect">
      <h3 className="bookSelect__name">Categories</h3>
      <select id="categories" name="categories" 
        className="bookSelect__select" onChange={handleCategoryChange} >
        {categories.map((cat, index) => <option value={cat} key={index}>{cat}</option>)}
      </select>
    </div>
  )
}

export default CategoryFilter
