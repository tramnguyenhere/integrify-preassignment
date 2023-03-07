import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import ProcessingPage from '../../pages/ProcessingPage/ProcessingPage';
import CardHeader from './CardHeader/CardHeader';

import './CountryCard.scss'
import CardBody from './CardBody/CardBody';
import CardFooter from './CardFooter/CardFooter';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CountryCard = () => {
  const isDarkMode = useSelector((state: RootState) => state.colorMode.darkMode)

  const { name } = useParams();

  const {data} = useFetchData(`name/${name}`)
  
  const country = data && data.length > 0 ? data[0] : null;

  const countryOfficialName = country?.name?.official
  const countryCommonName = country?.name?.common
  const countryCapitalNames = country?.capital

  const countryFlagImage = country?.flags?.png
  const countryFlagDescription = country?.flags?.alt
  const countryRegionName = country?.region
  const countrySubRegionName = country?.subregion
  const countryLanguages = country?.language
  const countryPopulation = country?.population
  const isIndependent = country?.independent
  const countryLatlgn = country?.latlng
  const countryMap = country?.maps?.googleMaps
  
  if (!data) {
    return <ProcessingPage processingTerm='Loading country data...'/>
  }

  return (
    <div className={`card__wrapper ${isDarkMode && 'dark-mode'}`}>
      <CardHeader
        countryOfficialName={countryOfficialName}
        countryCommonName={countryCommonName}
        capitalNames={countryCapitalNames} />
      <CardBody
        isIndependent={isIndependent}
        countryFlagDescription={countryFlagDescription}
        countryFlagImage={countryFlagImage}
        countryLanguages={countryLanguages}
        countryPopulation={countryPopulation}
        countryRegionName={countryRegionName}
        countrySubRegionName={countrySubRegionName}
        countryLatlgn={countryLatlgn} /> 
      <CardFooter countryMap={countryMap} />
    </div>
  )
}

export default CountryCard