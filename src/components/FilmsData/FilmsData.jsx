import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineHeart } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { setFilmsPageAction } from '../../redux/filmsReducer';
import "./FilmsData.scss";
import { setFavoritsAction } from '../../redux/favoritsReducer';

const IMG_URL = "https://image.tmdb.org/t/p/w300/";

function FilmsData({ films }) {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const setFavotis = (films) => {
    dispatch(setFavoritsAction(films))
  }
  const setFilmsPage = (films) => {
    const id = films.id
    navigate(`/filmsPage/${id}`)
    dispatch(setFilmsPageAction(films))
  }
  return (
    <div
      className='films-card'>
      <div
        className='films-card-img'
        style={{ background: `url(${IMG_URL + films.poster_path})` }}
        onClick={() => setFilmsPage(films)}
      >
      </div>
      <div className='films-card-description'>
        <h3>{films.original_title}</h3>
        <p>rating : 10/{films.vote_average}</p><progress value={films.vote_average} max="10"></progress>
        <AiOutlineHeart 
        onClick={() => setFavotis(films)}
        />
      </div>
    </div>
  )
}

export default FilmsData