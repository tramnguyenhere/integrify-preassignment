import { useState, useEffect } from 'react';

const baseUrl = 'https://restcountries.com/v3.1'

const useFetchData = (query:string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${baseUrl}/${query}`);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [query]);

  return { data, loading };
}

export default useFetchData;
