import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import useFetchData from './hooks/useFetchData';
import { Country } from './types/types';
import MUITable from './components/MUITable/MUITable';

interface Props {
  loading: boolean,
  data: Country[] | null
}

function App() {
  const {loading, data}:Props = useFetchData('all')

  return (
    <div className="App">
      <Header />
      {
        !loading && <MUITable data={data} />
      }
      
    </div>
  );
}

export default App;
