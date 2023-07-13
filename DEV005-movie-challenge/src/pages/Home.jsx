import React from 'react'
import { Footer} from '../component/Footer'
import { Navbar } from '../component/Navbar';
import { Search } from '../component/Search';
import { RecommendationsMovie } from '../component/Recommendations';

export const Home = () => {
    
    return (
      <React.Fragment>
        <Navbar />
        <Search />
        <RecommendationsMovie title="Películas que puedes ver hoy" />
        <RecommendationsMovie title="Series que puedes ver hoy"/>
        <Footer />
      </React.Fragment>
    );
  };