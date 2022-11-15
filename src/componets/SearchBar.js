import {useState} from 'react'

function SearchBar({search, setSearch}) {

    

    function handleChange(e) {
        /* console.log(e.target.value) */
        setSearch(e.target.value);
      }




  return (
    <div className='search'>
      
      <label>Search: </label>
      <input type="text" value={search} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;