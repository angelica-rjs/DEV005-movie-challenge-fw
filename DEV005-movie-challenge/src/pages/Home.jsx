import React from 'react'
import { Footer} from '../component/Footer'
import { Navbar } from '../component/Navbar';
import { Search } from '../component/Search';
import { Recommendations } from '../component/Recommendations';

export const Home = () => {
    
    return (
      <React.Fragment>
        <Navbar />
        <Search />
        <Recommendations title="Películas que puedes ver hoy" />
        <Recommendations title="Series que puedes ver hoy"/>
        <Footer />
      </React.Fragment>
    );
  };