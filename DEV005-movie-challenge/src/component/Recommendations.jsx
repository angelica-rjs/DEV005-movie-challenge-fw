import React from 'react';
import { Caratulas } from './Caratulas';

export const RecommendationsMovie = ({ title, movies }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'400px', margin:'0px' }}>
      <div style={{ position: 'relative', width: '80%' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            width: '100%',
            height: '350px',
            background: 'black',
          }}
        ></div>
        <div style={{ position: 'relative', margin: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ zIndex: 1 }}>{title}</h2>
          <div style={{ display: 'flex', zIndex: 1 }}>
            {movies.map((film) => {
              const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
              const filmTitle = film.title || film.name;

              return (
                <div style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
                  <Caratulas key={film.id} imgUrl={imgUrl} title={filmTitle} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
