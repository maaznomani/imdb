import React, { useState } from 'react'
import triangle from '../imgs/triangle.svg'
import scarch from '../imgs/scarch.svg'

const SearchBox = ({ history }) => {
  const [searched, setSearched] = useState('')
  const callApi = (s) => {
    console.log('Searhced expression ', s)
    if (s.trim()) history.push(`/movies/${s}`)
    else {
      history.push('/')
    }
  }
  
  return (
    <div id='scarch'>
      <div id='all'>
        <div id='present-list'>All</div>
        <img src={triangle} alt='triangle' id='triangle' />
      </div>
        <input
          placeholder='Search IMDb'
          onChange={(e) => setSearched(e.target.value)}
        />
        <button type='submit' onClick={() => callApi(searched)}>
          <img id='search' src={scarch} alt='search' />
        </button>
    </div>
  )
}

export default SearchBox
