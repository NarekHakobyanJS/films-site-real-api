import React from 'react'
import "./Search.scss"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilmsPageAction } from '../../redux/filmsReducer';
const IMG_URL = "https://image.tmdb.org/t/p/w300";

function Search({film}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const setFilmsPage = (films) => {
    const id = films.id
    navigate(`/filmsPage/${id}`)
    dispatch(setFilmsPageAction(films))
  }

  return (
    <div className='search-item' onClick={() => setFilmsPage(film)}>
        <img src={IMG_URL + film.poster_path} />
        <h3>{film.title}</h3>
    </div>
  )
}

export default Search