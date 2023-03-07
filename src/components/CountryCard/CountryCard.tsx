import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import ProcessingPage from '../../pages/ProcessingPage/ProcessingPage';
import CardHeader from './CardHeader/CardHeader';

const CountryCard = () => {
  const { name } = useParams();

  const {loading, data} = useFetchData(`name/${name}`)
  
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


  

  if (loading) {
    <ProcessingPage processingTerm='Loading country data...'/>
  }
  return (
    <div>
      <div>
        <CardHeader countryOfficialName={countryOfficialName} countryCommonName={countryCommonName} capitalName={countryCapitalNames} />
      </div>  
    </div>
  )
}

export default CountryCard