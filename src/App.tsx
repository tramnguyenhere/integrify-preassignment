import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import useFetchData from './hooks/useFetchData';
import { Countries} from './types/types';
import MUITable from './components/MUITable/MUITable';
import { sortedDataByAlphabet } from './utils/utils';
import LoadingPage from './pages/LoadingPage/LoadingPage';

interface Props {
  loading: boolean,
  data: Countries
}

function App() {
  const { loading, data }: Props = useFetchData('all')

  return (
    <div className="App">
      <Header />
      {loading ? <LoadingPage /> : <MUITable data={sortedDataByAlphabet(data)} />}
    </div>
  );
}

export default App;
