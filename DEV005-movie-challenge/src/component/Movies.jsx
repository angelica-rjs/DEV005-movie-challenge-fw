import React, { useEffect, useState } from 'react';
import { GetData, GetDataSearch } from '../API/data';
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

  useEffect(
    ()=>{
      const fetchData = async ()=>{
        const data = await GetDataSearch(contentType);
        console.log(data.results, "desde search")
        setMovies(data.results)
      };
      fetchData();
    }, [movies]);

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





      