import React, { useState } from 'react';
import Styles from '../home.module.css';
import { Film } from './Movies';

export const Search = () => {
  const [searchValue, setsearchValue] = useState('');
console.log(searchValue, "fuera del input ")

const handleSearch = (e) => {
  e.preventDefault();
  console.log(searchValue);
  Film(searchValue)

};
  return (
    <form className={Styles.containerSearch} >
      <input
        placeholder="Busca películas o series"
        type="text"
        className={Styles.inputSearch}
       value={searchValue}
        onChange={(e) =>{
           console.log(e.target.value)
           setsearchValue(e.target.value)
           
        }
          }
      />
      <button className={Styles.btnSearch} type="submit" 
        onClick={handleSearch}>
        Buscar
        <img src="./src/imagenes/lupa.png" alt="Icono de búsqueda" className={Styles.iconBtnSearch} />
      </button>
    </form>
  );
};
