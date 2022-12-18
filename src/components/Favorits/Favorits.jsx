import React from 'react'
import "./Favorits.scss"
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavoritsAction } from '../../redux/favoritsReducer';
import {FiDelete} from "react-icons/fi"

const IMG_URL = "https://image.tmdb.org/t/p/w300/";

function Favorits({favorit}) {
  const dispatch = useDispatch()
  const deleteFavorits = (id) => {
    dispatch(deleteFavoritsAction(id))
  }
  return (
    <div className='favorit-card'>
      <div className='favorit-card-img'>
        <img src={IMG_URL + favorit.poster_path} />
      </div>
      <div className='favorit-card-description'>
        <h1>{favorit.original_title}</h1>
        <p>{favorit.overview}</p>
        <FiDelete 
        onClick={() => deleteFavorits(favorit.id)}
        className='favorite-del'/>
      </div>
    </div>
  )
}

export default Favorits