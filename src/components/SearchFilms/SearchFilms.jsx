import React, { useEffect, useState } from 'react'
import "./SearchFilms.scss"
import { BiSearchAlt2 } from "react-icons/bi"
import axios from 'axios'
import Search from './Search';

const apiKey = 'f36f23edf6e10fd2ddcf939916b1f67a';

function SearchFilms() {
  const [open, setOpen] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`)
      .then(response => setSearchResult(response.data.results))
  }, [searchText])

  console.log(searchResult)

  return (
    <div className='search-block'>
    <div className='search-films'>
      {open && <input
        className='search-films-input'
        type="text"
        placeholder='Search...'
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />}
      <BiSearchAlt2 onClick={() => setOpen(!open)} />
    </div>
    {open && <div className='search-content'>
        {searchResult &&
          searchResult.map(film => <Search film={film}/>)
        }
    </div>}
    </div>
  )
}

export default SearchFilms