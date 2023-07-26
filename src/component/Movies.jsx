import React from 'react';
import { Caratulas } from './Caratulas';
import Styles from './cars.module.css';

export const Film = ({ movies }) => {
  return (
    <div className={Styles.container}>
      {movies.map((film) => {
        const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
        const title = film.title || film.name;

        return <Caratulas key={film.id} imgUrl={imgUrl} title={title} />;
      })}
    </div>
  );
};



