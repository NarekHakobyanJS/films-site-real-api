import React from 'react'
import "./FavoritsPage.scss"
import { useSelector } from 'react-redux'
import Favorits from '../../components/Favorits/Favorits'
function FavoritsPage() {
    const favorits = useSelector((state) => state.favoritsPage.favorites)
    // {!favorits.lengt<p>'dont you have a favorite movie ' </p>}
  return (
    <div className='FavoritsPage'>
        {favorits.length === 0 ? <h2 className='FavoritTitle'>dont you have a favorite movie </h2>
         : favorits.map(favorit => <Favorits favorit={favorit}/>)
        }
    </div>
  )
}

export default FavoritsPage