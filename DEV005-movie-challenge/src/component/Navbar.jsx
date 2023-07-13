import {NavLink} from 'react-router-dom';

import Styles from './header.module.css';
export const Navbar = ({estado}) => {
    return (
      <div className={Styles.header}>
        <div className={Styles.logo}>
          <img className={Styles.logoimg} src="./src/imagenes/thor.png" alt="logo" />
        </div>
        <ul className={Styles.sectionButton}>
          <li className={Styles.btn}>
            <NavLink to="/" className={Styles.btn}>Home</NavLink>
          {estado ? (
            <img className={Styles.iconButton} src="./src/imagenes/hogar.png" alt="logo" />
            ) : (
            <img className={Styles.iconButton} src="./src/imagenes/hogar1.png" alt="logo" />
            )}
          </li>
          <li className={Styles.btn}>
            <NavLink to="/Films" className={Styles.btn}>Films</NavLink>
            {estado ? (
            <img className={Styles.iconButton} src="./src/imagenes/pelicula.png" alt="logo" />
            ) : (
            <img className={Styles.iconButton} src="./src/imagenes/pelicula1.png" alt="logo" />
            )}
          </li>
          <li className={Styles.btn}>
            <NavLink to="/Series" className={Styles.btn}>Series</NavLink>
            {estado ? (
            <img className={Styles.iconButton} src="./src/imagenes/serie.png" alt="logo" />
            ) : (
            <img className={Styles.iconButton} src="./src/imagenes/serie1.png" alt="logo" />
            )}
          </li>
        </ul>
      </div>
    );
  };
  
