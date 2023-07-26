import React, { useState, useEffect } from 'react';
import { Footer } from '../component/Footer';
import { Navbar } from '../component/Navbar';
import { Film } from '../component/Movies';
import { Search } from '../component/Search';
import { GetData } from '../API/data';

export const Series = () => {
    const [searchKey, setSearchKey] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [series, setSeries] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const contentType = showSearchResults ? encodeURIComponent(searchKey)  : 'tv/popular?';
        
        if (showSearchResults) {
          const data = await GetData( `https://api.themoviedb.org/3/search/tv?query=${contentType}`);
          setSeries(data.results);
          console.log(data.results, "desde Series")
        } else {
          const data = await GetData(`https://api.themoviedb.org/3/${contentType}`);
          setSeries(data.results);
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
        <Film movies={series} />
        <Footer />
      </React.Fragment>
    );
  };
  