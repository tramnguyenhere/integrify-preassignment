import React from 'react'
import './CardHeader.scss'

interface Props {
    countryOfficialName: string,
    countryCommonName: string,
    capitalNames: string[]
}

const CardHeader = ({ countryOfficialName, countryCommonName, capitalNames }: Props) => {
    
    const firstCharacterOfCountryName = countryCommonName?.charAt(0)

  return (
      <div className='card-header__wrapper'>
          <div className='card-header__logo'>
              {firstCharacterOfCountryName}
          </div>
          <div className="card-header__titles">
              <span className='card-header__titles--country'>{countryOfficialName}</span>
              <ul className='card-header__titles--capitals'>
                  {capitalNames?.map((capital, index) => (
                      <li key={index}>{capital}</li>
                  ))}
              </ul>
          </div>
      </div>
  )
}

export default CardHeader