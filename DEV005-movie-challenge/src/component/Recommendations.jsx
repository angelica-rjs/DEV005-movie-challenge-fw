import React, { useEffect, useState } from 'react';
import Styles from '../home.module.css';

import Styles2 from './caratulas.module.css';
import { GetData } from '../API/data';

export const RecommendationsMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetData('trending/movie/day?language=en-US');
      console.log(data.results);
      if (data.results) {
        setMovies(data.results);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={Styles.sectionRecommendations}>
      {movies.slice(0, 3).map((film) => {
        const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;

        return (
          <section className={Styles2.section} key={film.id}>
            <div className={Styles2.containerimg}>
              <img className={Styles2.img} src={imgUrl} alt={film.title} />
            </div>
            <h5>{film.title}</h5>
          </section>
        );
      })}
    </section>
  );
};

