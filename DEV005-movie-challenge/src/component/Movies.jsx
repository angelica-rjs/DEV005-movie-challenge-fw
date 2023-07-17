import React from 'react';
import { Caratulas } from './Caratulas';

export const Film = ({ movies }) => {
  return (
    <div>
      {movies.map((film) => {
        const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
        const title = film.title || film.name;

        return <Caratulas key={film.id} imgUrl={imgUrl} title={title} />;
      })}
    </div>
  );
};
