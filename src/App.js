import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenresAction } from './redux/genreReducer';
import { setFilmsCardAction, setNewFilmsCardAction } from './redux/filmsReducer';
import './App.css';
import Genres from './components/Genres/Genres';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import FavoritsPage from './pages/FavoritsPage/FavoritsPage';

const apiKey = 'f36f23edf6e10fd2ddcf939916b1f67a';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
      .then(response => dispatch(setGenresAction(response.data.genres)))
  }, [])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`)
      .then(response => dispatch(setFilmsCardAction(response.data.results)))
  }, [])

  return (
    <div className="App">
      <Header />
      <Genres />
      <div className='App-Main'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filmsPage/:id" element={<FilmsPage />} />
          <Route path="/favorits" element={<FavoritsPage /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
