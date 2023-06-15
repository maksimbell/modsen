import React, {useState,} from 'react'

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
const sortings = ['relevance', 'newest']

const Form = ({searchBooks}) => {
  const [searchParams, setParams] = useState({
    query: '',
    category: categories[0],
    sorting: sortings[0], 
  })
  
  const onQueryChange = (event) => setParams({...searchParams, query: event.target.value})
  const onCategoryChange = (event) => setParams({...searchParams, category: event.target.value})
  const onSortChange = (event) => setParams({...searchParams, sorting: event.target.value})

  return (
    <div>
      <h1>Search for books</h1>
      <input 
        type="search" 
        onChange={onQueryChange} 
        value={searchParams.query}
      />
      <button type="submit" onClick={() => searchBooks(searchParams)}>Search</button>

      <h2>Categories</h2>
      <select id="categories" name="categories" onChange={onCategoryChange} value={searchParams.category}>
        {categories.map((cat, index) => <option value={cat} key={index}>{cat}</option>)}
      </select>

      <h2>Sorting by</h2>
      <select id="sortings" name="sortings" onChange={onSortChange} value={searchParams.sort}>
        {sortings.map((sort, index) => <option value={sort} key={index}>{sort}</option>)}
      </select>
    </div>
  )
}

export default Form
