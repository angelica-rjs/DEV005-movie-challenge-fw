import React, { useEffect, useState } from 'react';
import { GetData } from '../data';
import Styles from './caratulas.module.css';

export const Seriess = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetData('tv/popular?');
      console.log(data.results);
      setSeries(data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      {series.map((serie) => {
        const imgUrl = `https://image.tmdb.org/t/p/original/${serie.poster_path}`;

        return (
            <section className={Styles.section} key={serie.id}>
            <div className={Styles.containerimg}>
              <img className={Styles.img} src={imgUrl} alt={serie.title} />
            </div>
            <h5>{serie.name}</h5>
          </section>
        );
      })}
    </div>
  );
};