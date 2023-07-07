import {NavLink} from 'react-router-dom';

import Styles from './header.module.css';
export const Navbar = () => {
    return (
      <div className={Styles.header}>
        <div className={Styles.logo}>
          <img className={Styles.logoimg} src="./src/imagenes/thor.png" alt="logo" />
        </div>
        <ul className={Styles.sectionButton}>
          <li className={Styles.btn}>
            <NavLink to="/" className={Styles.btn}>Home</NavLink>
            <img className={Styles.iconButton} src="./src/imagenes/hogar.png" alt="logo" />
          </li>
          <li className={Styles.btn}>
            <NavLink to="/Films" className={Styles.btn}>Films</NavLink>
            <img className={Styles.iconButton} src="./src/imagenes/serie.png" alt="logo" />
          </li>
          <li className={Styles.btn}>
            <NavLink to="/Series" className={Styles.btn}>Series</NavLink>
            <img className={Styles.iconButton} src="./src/imagenes/pelicula.png" alt="logo"></img>
          </li>
        </ul>
      </div>
    );
  };
  
