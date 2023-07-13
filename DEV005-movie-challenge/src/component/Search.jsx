import React, { useState } from 'react';
import Styles from '../home.module.css';

export const Search = ({ setSearchKey }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKey(searchTerm);
  };

  return (
    <form className={Styles.containerSearch} onSubmit={handleSearch}>
      <input
        placeholder="Busca películas o series"
        type="text"
        className={Styles.inputSearch}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={Styles.btnSearch} type="submit">
        Buscar
        <img src="./src/imagenes/lupa.png" alt="Icono de búsqueda" className={Styles.iconBtnSearch} />
      </button>
    </form>
  );
};
