import React from 'react';
import Styles from '../home.module.css';
import { Caratulas } from './Caratulas';

export const Recommendations = ({ title, movies }) => {
  return (
    <section className={Styles.sectionRecommendations}>
      <h2>{title}</h2>
      <div className={Styles.container}>
        {movies.map((film) => {
          const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
          const title = film.title || film.name;

          return (
            <Caratulas key={film.id} imgUrl={imgUrl} title={title} />
          );
        })}
      </div>
    </section>
  );
};
