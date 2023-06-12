import React, {useState, useEffect} from 'react'


const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
const sortings = ['relevance', 'newest']

const Form = ({searchBooks}) => {
  const [searchParams, setParams] = useState('')

  useEffect(() => {
    setParams(
      {
        query: '',
        category: categories[4],
        sorting: sortings[1], 
      }
    )
  }, [])
  
  const onQueryChange = (event) => setParams({...searchParams, query: event.target.value})
  const onCategoryChange = (event) => setParams({...searchParams, category: event.target.value})
  const onSortChange = (event) => setParams({...searchParams, sorting: event.target.value})

  return (
    <header>
        <h1>Search for books</h1>
        <input type="search" onChange={onQueryChange} value={searchParams.query}></input>
        <button type="submit" onClick={() => searchBooks(searchParams)}>Search</button>

        <h2>Categories</h2>
        <select id="categories" name="categories" onChange={onCategoryChange} value={searchParams.category}>
          {categories.map((cat, index) => <option value={cat} key={index}>{cat}</option>)}
        </select>

        <h2>Sorting by</h2>
        <select id="sortings" name="sortings" onChange={onSortChange} value={searchParams.sort}>
          {sortings.map((sort, index) => <option value={sort} key={index}>{sort}</option>)}
        </select>
    </header>
  )
}

export default Form
