import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss'

interface Props {
  search: string,
  setSearch: (params: string) => void
}

const Header = ({search, setSearch}:Props) => {

  const searchInputHandler = (e: { target: { value: string; }; }) => {
    const searchTerm = e.target.value
    setSearch(searchTerm.toLowerCase())
  }

  return (
    <div className='header'>
      <a href="/" className="title">Country</a>
      <div className="search-input__wrapper">
        <SearchIcon />
        <input max={30} type="text" className="search-input__box" onChange={searchInputHandler} value={search} />
      </div>
    </div>
  )
}

export default Header