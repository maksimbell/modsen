import React from 'react'

const SortSelect = ({sortings, onChange}) => {

  const handleSortingChange = (event) => {
    const value = event.target.value
    const id = sortings.indexOf(value)
    onChange(id)
  }

  return (
    <div>
      <h3>Sorting by</h3>
      <select id="sortings" name="sortings" onChange={handleSortingChange}>
        {sortings.map((sort, index) => <option value={sort} key={index}>{sort}</option>)}
      </select>
    </div>
  )
}

export default SortSelect
