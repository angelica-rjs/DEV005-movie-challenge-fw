import React, { useEffect, useState } from 'react';
import { GetData } from '../data';
import { Caratulas } from './Caratulas';

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
        const title = film.title || film.name

        return (
          <Caratulas key={film.id} imgUrl={imgUrl} title={title}/>
        )
      })}
    </div>
  );
};
