import React, {useState} from 'react';
import Header from './components/Header/Header';
import useFetchData from './hooks/useFetchData';
import { Countries} from './types/types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import CountryCard from './components/CountryCard/CountryCard';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

interface Props {
  data: Countries
}

// let country: any = 'Finland';

function App() {
  const {  data }: Props = useFetchData('all')
  const [search, setSearch] = useState('')
  

  return (
    <Router>
      <div className="App">
        <Header search={search} setSearch={setSearch} />
      
      <Routes>
        <Route path='/' element={<Home data={data} searchQuery={search} />} />
        <Route path={`/country/:name`} element={<CountryCard />} />
      </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
