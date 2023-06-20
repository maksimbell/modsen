import React from 'react'

const CategoryFilter = ({categories, onChange}) => {
  
  const handleCategoryChange = (event) => {
    const value = event.target.value
    const id = categories.indexOf(value)
    onChange(id)
  }

  return (
    <div>
      <h3>Categories</h3>
      <select id="categories" name="categories" onChange={handleCategoryChange}>
        {categories.map((cat, index) => <option value={cat} key={index}>{cat}</option>)}
      </select>
    </div>
  )
}

export default CategoryFilter
