import React, { useState, useEffect } from 'react';

const ApiUrl = 'https://www.themoviedb.org/3';
const ApiKey = '083fce0ea2f60c4c7b3fdc9b9abe4ed3';
const ApiImage = 'https://image.tmdb.org/t/p/original';

export const GetData = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const type = searchKey ? 'search' : 'discover';
      const url = `${ApiUrl}/${type}/movie?api_key=${ApiKey}&query=${searchKey}`;

      try {
        const response = await fetch(url);
        const { results } = await response.json();
        setMovies(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [searchKey]);
};

export function Search(e){
  e.preventDefaul();
  GetData(searchKey)
}

