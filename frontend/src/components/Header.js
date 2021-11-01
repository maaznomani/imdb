import React from 'react'
import {Route} from 'react-router-dom'
import SearchBox from './SearchBox'
import menu from '../imgs/menu.svg'
import imdb from '../imgs/IMDB.png'
import whtchlist from '../imgs/whtchlist.svg'

const Header = () => {
  
  return (
    <nav id='imdb-nav'>
      <img src={menu} alt='f-menu' id='mimg' class='first-menu' />
      <img src={imdb} alt='imdb' id='imdb' />
      <p id='menu'>
        <img src={menu} alt='menu' id='mimg' />
        Menu
      </p>
      <Route render={({history})=><SearchBox history={history}/>}/>
      <div id='pro'>IMDBPro</div>
      <div id='vline'></div>
      <div id='wlist'>
        <img src={whtchlist} id='wl-img' alt='watchlist'/>
        Watchlist
      </div>
      <div id='sin'>Sign In</div>
    </nav>
  )
}

export default Header
