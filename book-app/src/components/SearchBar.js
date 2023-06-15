import React, {useState} from 'react'

const SearchBar = ({searchBooks}) => {
  const [query, setQuery] = useState('')

  const handleQueryChange = (event) => setQuery(event.target.value)

  return (
    <div>
      <h1>Search for books</h1>
      <input 
        type="search" 
        onChange={handleQueryChange} 
        value={query}
      />
      <button type="submit" onClick={() => searchBooks(query)}>Search</button>
    </div>
  )
}

export default SearchBar
