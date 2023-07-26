import React from 'react';
import Styles from './recommendations.module.css';
import { Caratulas } from './Caratulas';

export const RecommendationsMovie = ({ title, movies }) => {
  return (
    <section className={Styles.sectionRecommendations}>
      <div className={Styles.container}>
        <div className={Styles.containertitle}>
        <h2 className={Styles.title}>{title}</h2>
        </div>
        <div className={Styles.movies}>
          {movies.map((film) => {
            const imgUrl = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
            const filmTitle = film.title || film.name;

            return (
              <div className={Styles.caratulas}>
                <Caratulas key={film.id} imgUrl={imgUrl} title={filmTitle} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};