import React, { useState, useEffect } from 'react';
import { Footer } from '../component/Footer';
import { Navbar } from '../component/Navbar';
import { Film } from '../component/Movies';
import { Search } from '../component/Search';
import { GetData, GetDataSearchMovie } from '../API/data';

export const Films = () => {
  const [searchKey, setSearchKey] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const contentType = showSearchResults ? `${searchKey}` : 'movie/popular';
      
      if (showSearchResults) {
        const data = await GetDataSearchMovie(contentType);
        setMovies(data.results);
        console.log(data.results, "de la ale")
      } else {
        const data = await GetData(contentType);
        setMovies(data.results);
      }
    };

    fetchData();
  }, [searchKey, showSearchResults]);

  const handleSearchKey = (key) => {
    setSearchKey(key);
    setShowSearchResults(true);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Search avisarAlPadre={handleSearchKey} />
      <Film movies={movies} />
      <Footer />
    </React.Fragment>
  );
};
