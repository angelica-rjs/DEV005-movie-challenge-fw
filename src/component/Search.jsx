import React, { useState } from 'react';
import Styles from '../home.module.css';

export const Search = ({ avisarAlPadre }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    avisarAlPadre(searchValue);
  };

  return (
    <form role="form" className={Styles.containerSearch}>
      <input
        role="input"
        placeholder="Busca películas o series"
        type="text"
        className={Styles.inputSearch}
        value={searchValue}
        onChange={handleSearch}
      />
      <button className={Styles.btnSearch} type="submit" onClick={handleClick}>
        Buscar
        <img
          src="./src/imagenes/lupa.png"
          alt="Icono de búsqueda"
          className={Styles.iconBtnSearch}
        />
      </button>
    </form>
  );
};

