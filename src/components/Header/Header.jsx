import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchFilms from '../SearchFilms/SearchFilms'
import "./Header.scss"
import { AiOutlineHeart } from 'react-icons/ai'

function Header() {
  return (
    <header className='Header'>
      <NavLink to="/" className="Header-Logo">
        <img src="https://png.pngtree.com/png-vector/20190816/ourlarge/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg" />
      </NavLink>
      <div className='Header-Right'>
        <NavLink to="/favorits" >
          <AiOutlineHeart className='favorit' />
        </NavLink>
        <SearchFilms />
        <NavLink>
          Login
        </NavLink>
      </div>
    </header>
  )
}

export default Header