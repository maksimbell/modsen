import React from 'react'

const Form = () => {
  const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']

  return (
    <header>
        <h1>Search for books</h1>
        <input type="search"></input>
        <select id="categories" name="categories">
          {categories.map(cat => <option value={cat}>{cat}</option>)}
        </select>
    </header>
  )
}

export default Form
