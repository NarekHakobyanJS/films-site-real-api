import React, {useEffect} from 'react';
import axios from 'axios';
import { setNewFilmsCardAction } from '../../redux/filmsReducer';
import FilmsData from '../../components/FilmsData/FilmsData';
import {useDispatch, useSelector } from 'react-redux';
import './HomePage.scss';

const apiKey = 'f36f23edf6e10fd2ddcf939916b1f67a';

function HomePage() {
    const dispatch = useDispatch()
    const filmsCard = useSelector((state) => state.films.filmsCard)
    const pageNumber = useSelector((state) => state.films.pageNumber)
    const filmsCardData = filmsCard.map(films => <FilmsData films={films} />)


    const setNewFilmCard = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
          .then(response => dispatch(setNewFilmsCardAction(response.data.results)))
         // window.scrollTo(0, 0)
    }
    useEffect(() => {
        setNewFilmCard()
      }, [dispatch])

    return (
        <>
            <div className='home-page'>
                {filmsCardData}
            </div>
            <button 
            className='new-data-btn'
            onClick={setNewFilmCard}
            >All films</button>
        </>
    )
}

export default HomePage