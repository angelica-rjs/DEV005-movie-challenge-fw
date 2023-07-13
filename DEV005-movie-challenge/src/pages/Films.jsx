import { Footer} from '../component/Footer'
import { Navbar } from '../component/Navbar';
import { Search } from '../component/Search';
import { Film } from '../component/Movies';
import React, { useState } from 'react';


export const Films = () => {
  const [searchKey, setSearchKey] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearchKey = (key) => {
    setSearchKey(key);
    setShowSearchResults(true);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Search setSearchKey={handleSearchKey} />
      {showSearchResults ? (
        <Film contentType={`search/${searchKey}`} />
      ) : (
        <Film contentType="movie/popular" />
      )}
      <Footer />
    </React.Fragment>
  );
};