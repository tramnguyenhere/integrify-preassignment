import React from 'react'
import MUITable from '../../components/MUITable/MUITable'
import { sortedDataByAlphabet } from '../../utils/utils'
import { Countries } from '../../types/types'
import ProcessingPage from '../ProcessingPage/ProcessingPage'

interface Props {
    data: Countries,
    searchQuery: string
}

const Home = ({ data, searchQuery }: Props) => {
    
    const sortedData = sortedDataByAlphabet(data)

    const searchedResultsData = sortedData?.filter(data => data.name.common.toLowerCase().includes(searchQuery))
    

    if (!data) {
        return <ProcessingPage processingTerm='loading...' />
    }

    if (searchQuery && searchedResultsData!.length === 0) {
        return <ProcessingPage processingTerm='No results found...' />
    }

    return ( 
        <div>
            {searchedResultsData!.length > 0 ? <MUITable data={searchedResultsData} /> : <MUITable data={sortedData} /> }
      </div>
  )
}

export default Home