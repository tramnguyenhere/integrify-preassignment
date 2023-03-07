import { useState, useEffect } from 'react';

const baseUrl = 'https://restcountries.com/v3.1'

const useFetchData = (query:string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}/${query}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [query]);

  return { data };
}

export default useFetchData;
