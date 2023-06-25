import React from 'react'
import './style.css'

const SearchSelect = ({name, items, onChange}) => {

  const handleChange = (event) => {
    const value = event.target.value
    const id = items.indexOf(value)
    onChange(id)
  }

  return (
    <div className="bookSelect">
      <h3 className="bookSelect__name">{name}</h3>
      <select name="categories" 
        className="bookSelect__select" onChange={handleChange}>
        {items.map((item, index) => <option value={item} key={index}>{item}</option>)}
      </select>
    </div>
  )
}

export default SearchSelect
