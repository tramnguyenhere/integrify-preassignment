import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="title">Country</div>
      <div className="search-input__wrapper">
        <SearchIcon />
        <input type="text" className="search-input__box" />
      </div>
    </div>
  )
}

export default Header