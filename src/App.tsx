import React, {useState} from 'react';
import Header from './components/Header/Header';
import useFetchData from './hooks/useFetchData';
import { Country} from './types/types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import CountryCard from './components/CountryCard/CountryCard';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

interface Props {
  data: Country[] | null
}

function App() {
  const {  data }: Props = useFetchData('all')
  const [search, setSearch] = useState('')
  
  const isDarkMode = useSelector((state: RootState) => state.colorMode.darkMode)

  return (
    <Router>
      <div className={`App ${isDarkMode && 'dark-mode'}`}>
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
