import React, {useState} from 'react';
import Header from './components/Header/Header';
import useFetchData from './hooks/useFetchData';
import { Countries} from './types/types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import CountryCard from './components/CountryCard/CountryCard';
import Home from './pages/Home/Home';

interface Props {
  loading: boolean,
  data: Countries
}

// let country: any = 'Finland';

function App() {
  const { loading, data }: Props = useFetchData('all')
  const [search, setSearch] = useState('')
  

  return (
    <Router>
      <div className="App">
        <Header search={search} setSearch={setSearch} />
      </div>
      
      <Routes>
        <Route path='/' element={<Home loading={loading} data={data} searchQuery={search} />} />
        <Route path={`/country/:name`} element={<CountryCard />} />
      </Routes>
    </Router>
  );
}

export default App;
