import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterGenresAction } from '../../redux/filmsReducer';
import './Genres.scss';

const apiKey = 'f36f23edf6e10fd2ddcf939916b1f67a';

function Genres() {
  const dispatch = useDispatch()
  const genres = useSelector((state) => state.genresPage.genres)
  const pageNumber = useSelector((state) => state.films.pageNumber)

  const setGenres = (genresId) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genresId}&page=${pageNumber}`)
      .then(response => dispatch(setFilterGenresAction(response.data.results)))
  }

  return (
    <div className='Genres'>
      {genres.map(genre => <button className='Genre-Btn' onClick={() => setGenres(genre.id)}>{genre.name}</button>)}
    </div>
  )
}

export default Genres