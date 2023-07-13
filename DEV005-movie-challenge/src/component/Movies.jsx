import React, { useEffect, useState } from 'react';
import { GetData } from '../data';
import Styles from './caratulas.module.css';

export const Film = ({contentType}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetData(contentType);
      console.log(data.results);
      setMovies(data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      {movies.map((film) => {
        const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;

        return (
            <section className={Styles.section} key={film.id}>
            <div className={Styles.containerimg}>
              <img className={Styles.img} src={imgUrl} alt={film.title} />
            </div>
            <h5>{film.title}</h5>
          </section>
        );
      })}
    </div>
  );
};
