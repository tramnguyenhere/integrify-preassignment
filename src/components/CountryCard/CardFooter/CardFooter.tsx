import React from 'react'
import {LocationOn, ArrowBack} from '@mui/icons-material';
import './CardFooter.scss'

interface Props {
  countryMap: string
}

const CardFooter = ({countryMap}: Props) => {
  return (
    <div className='card-footer__wrapper'>
      <a href='/' className='card-footer__link'>
        <ArrowBack />
      </a>
      <a href={countryMap} className='card-footer__link'>
        <LocationOn />
      </a>
    </div>
  )
}

export default CardFooter