import React from 'react';
import "./FilmsPage.scss";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const IMG_URL = "https://image.tmdb.org/t/p/w300/";

function FilmsPage() {
    const params = useParams()
    const filmsInfo = useSelector((state) => state.films.filmsPage)
    
    return (
        <div className='filmsPage'>
            <div className='filmsPagePoster'>
                <img src={IMG_URL + filmsInfo.poster_path} />
            </div>
            <div className='filmsPageDesc'>
                <h1>{filmsInfo.title}</h1>
                <p><b>release date : </b>{filmsInfo.release_date}</p>
                <p><b>language : </b>{filmsInfo.original_language}</p>
                <p><b>vote average : </b>{filmsInfo.vote_average}</p>
                <p><b>overview : </b>{filmsInfo.overview}</p>
                <img src={IMG_URL + filmsInfo.backdrop_path} />
            </div>
        </div>
    )
}

export default FilmsPage