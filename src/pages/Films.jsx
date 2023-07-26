import React, { useState, useEffect } from 'react';
import { Footer } from '../component/Footer';
import { Navbar } from '../component/Navbar';
import { Film } from '../component/Movies';
import { Search } from '../component/Search';
import { GetData } from '../API/data';

export const Films = () => {
  //valor de busqueda
  const [searchKey, setSearchKey] = useState('');
  //muestra la busqueda o las peliculas
  const [showSearchResults, setShowSearchResults] = useState(false);
  //almacena las peliculas
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //se define el valor de contentType
      const contentType = showSearchResults ? encodeURIComponent(searchKey) : 'movie/popular';

      if (showSearchResults) {
        const data = await GetData( `https://api.themoviedb.org/3/search/movie?query=${contentType}`);
        setMovies(data.results);
      } else {
        const data = await GetData(`https://api.themoviedb.org/3/${contentType}`);
        setMovies(data.results);
      }
    };

    fetchData();
  }, [searchKey, showSearchResults]);

  //cambia el estado de variables cuando se realiza una busqueda
  //se dispara desde search
  const handleSearchKey = (key) => {
    setSearchKey(key);
    setShowSearchResults(true);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Search avisarAlPadre={handleSearchKey} />
      <section role="section">
        <Film movies={movies} />
      </section>
      <Footer />
    </React.Fragment>
  );
};
