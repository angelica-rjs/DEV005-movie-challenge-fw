import React, { useState, useEffect } from 'react';
import { Footer } from '../component/Footer';
import { Navbar } from '../component/Navbar';
import { Search } from '../component/Search';
import { Film } from '../component/Movies';
import { GetData, GetDataSearchTv } from '../API/data';

export const Home = () => {
  const [searchKey, setSearchKey] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [recommendations, setRecommendations] = useState({ movies: [], series: [] });

  useEffect(() => {
    const fetchData = async () => {
      if (showSearchResults) {
        const movieResults = await GetDataSearchTv(searchKey);
        const seriesResults = await GetDataSearchTv(`search/tv?query=${searchKey}`);
        setRecommendations({ movies: movieResults.results.slice(0, 5), series: seriesResults.results.slice(0, 5) });
      } else {
        const movieData = await GetData('trending/movie/day?language=en-US');
        const seriesData = await GetData('trending/tv/day?language=en-US');
        setRecommendations({ movies: movieData.results.slice(0, 5), series: seriesData.results.slice(0, 5) });
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
      <Film movies={recommendations.movies} />
      <Film movies={recommendations.series} />
      <Footer />
    </React.Fragment>
  );
};
