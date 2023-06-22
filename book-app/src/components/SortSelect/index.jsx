import React from 'react'
import './style.css'

const SortSelect = ({sortings, onChange}) => {

  const handleSortingChange = (event) => {
    const value = event.target.value
    const id = sortings.indexOf(value)
    onChange(id)
  }

  return (
    <div className="bookSelect">
      <h3 className="bookSelect__name">Sorting by</h3>
      <select id="sortings" name="sortings" 
        className="bookSelect__select" onChange={handleSortingChange}>
        {sortings.map((sort, index) => <option value={sort} key={index}>{sort}</option>)}
      </select>
    </div>
  )
}

export default SortSelect
