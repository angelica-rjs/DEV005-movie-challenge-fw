import React, { useState } from 'react';
import Styles from '../home.module.css';

export const Search = ({ setSearchKey }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKey(searchTerm);
  };

  return (
    <form className={Styles.containerSearch}>
      <input
        placeholder="Busca películas o series"
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        className={Styles.inputSearch}
      />
      <button className={Styles.btnSearch} onClick={handleSearch}>
        Buscar
        <img src="./src/imagenes/lupa.png" alt="Icono de búsqueda" className={Styles.iconBtnSearch} />
      </button>
    </form>
  );
};
