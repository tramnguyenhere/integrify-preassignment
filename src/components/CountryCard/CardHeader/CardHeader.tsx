import React from 'react'

interface Props {
    countryOfficialName: string,
    countryCommonName: string,
    capitalName: string[]
}

const CardHeader = ({ countryOfficialName, countryCommonName, capitalName }: Props) => {
    
    const firstCharacterOfCountryName = countryCommonName.charAt(0)

  return (
      <div>
          <div>
              {firstCharacterOfCountryName}
          </div>
          {countryOfficialName}</div>
  )
}

export default CardHeader