'use client';

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
  const handleSearch = () =>{};
  const [manufacturer, setManufacturer] = useState('')

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
      </div>

    </form>
  )
}

export default SearchBar
