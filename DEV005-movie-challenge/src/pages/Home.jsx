import React, { useState, useEffect } from 'react';
import { Footer } from '../component/Footer';
import { Navbar } from '../component/Navbar';
import { Search } from '../component/Search';
import { RecommendationsMovie } from '../component/Recommendations';
import { GetData} from '../API/data';

export const Home = () => {
  const [searchKey, setSearchKey] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [recommendations, setRecommendations] = useState({ movies: [], series: [] });

  useEffect(() => {
    const fetchData = async () => {
      if (showSearchResults) {
        const movieResults = await  GetData( `https://api.themoviedb.org/3/search/movie?query=${searchKey}`);
        const seriesResults = await GetData( `https://api.themoviedb.org/3/search/tv?query=${searchKey}`);
        setRecommendations({ movies: movieResults.results.slice(0, 5), series: seriesResults.results.slice(0, 5) });
      } else {
        const movieData = await GetData('https://api.themoviedb.org/3/trending/movie/day ');
        const seriesData = await GetData('https://api.themoviedb.org/3/trending/tv/day');
        setRecommendations({ movies: movieData.results.slice(0, 5), series: seriesData.results.slice(0, 5) });
      }`https://api.themoviedb.org/3/trending/movie/day?language=en-U`
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
      <RecommendationsMovie movies={recommendations.movies} title="Peliculas que puedes ver hoy"  />
      <RecommendationsMovie movies={recommendations.series} title="Series que puedes ver hoy" />
      <Footer />
    </React.Fragment>
  );
};

     