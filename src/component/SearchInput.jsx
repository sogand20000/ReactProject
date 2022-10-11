import React from 'react'

function SearchInput({ searchInput, onChange }) {
  return (
    <input
      placeholder="Search"
      type="text"
      id="search"
      className="marginBottom form-control"
      value={searchInput}
      onChange={onChange}
    ></input>
  )
}

export default SearchInput
