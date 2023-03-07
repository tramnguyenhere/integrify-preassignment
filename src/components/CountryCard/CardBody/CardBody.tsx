import React from 'react'
import './CardBody.scss'

interface Props {
  countryFlagImage: string,
  countryFlagDescription: string,
  countryRegionName: string,
  countrySubRegionName: string,
  countryLanguages: string[]
  countryPopulation: number,
  isIndependent: boolean,
  countryLatlgn: number[]
}

const CardBody = ({ countryFlagImage, countryFlagDescription, countryRegionName, countrySubRegionName, countryLanguages, countryPopulation, isIndependent, countryLatlgn }: Props) => {
  
  console.log(countryLatlgn)
  
  const independentConfirmation = isIndependent ? 'gained the independent ' : 'not gained the independent'

  return (
    <div className='card-body__wrapper'>
      <img className='card__image' src={countryFlagImage} alt={countryFlagDescription} />
      <div className='card__description'>
        The country belongs to <span className='card__figure'>{countryRegionName}</span> region and <span className='card__figure'>{countrySubRegionName}</span> sub-region.
        Located at the latitude of <span className='card__figure'>{countryLatlgn && countryLatlgn[0]}</span> and the longitude of <span className='card__figure'>{countryLatlgn && countryLatlgn[1]}</span>,
        this country has population of <span className='card__figure'>{countryPopulation}</span> and it has {independentConfirmation}.
      </div>
    </div>
  )
}

export default CardBody