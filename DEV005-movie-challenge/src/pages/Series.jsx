import React, { useState, useEffect } from 'react';
import { Footer } from '../component/Footer';
import { Navbar } from '../component/Navbar';
import { Film } from '../component/Movies';
import { Search } from '../component/Search';
import { GetDataSearchTv, GetData } from '../API/data';

export const Series = () => {
    const [searchKey, setSearchKey] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [series, setSeries] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const contentType = showSearchResults ? `${searchKey}` : 'tv/popular?';
        
        if (showSearchResults) {
          const data = await GetDataSearchTv(contentType);
          setSeries(data.results);
          console.log(data.results, "desde Series")
        } else {
          const data = await GetData(contentType);
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
  