import { NavLink } from 'react-router-dom';
import { BiSolidCameraMovie, BiHomeAlt2 } from 'react-icons/bi';
import { RiMovieLine } from 'react-icons/ri';
import Styles from './Header_Footer.module.css';

export const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <div className={Styles.header}>
      <div className={Styles.logo}>
        <img className={Styles.logoimg} src="./src/imagenes/thor.png" alt="logo" />
      </div>
      <ul className={Styles.sectionButton}>
        <li className={`${Styles.btn} ${currentPath === '/' ? Styles.active : ''}`}>
          <NavLink to="/" className={Styles.link}>
            <span className={Styles.text}>Home</span>
            <BiHomeAlt2 className={Styles.icon} />
          </NavLink>
        </li>
        <li className={`${Styles.btn} ${currentPath === '/Films' ? Styles.active : ''}`}>
          <NavLink to="/Films" className={Styles.link}>
            <span className={Styles.text}>Films</span>
            <BiSolidCameraMovie className={Styles.icon} />
          </NavLink>
        </li>
        <li className={`${Styles.btn} ${currentPath === '/Series' ? Styles.active : ''}`}>
          <NavLink to="/Series" className={Styles.link}>
            <span className={Styles.text}>Series</span>
            <RiMovieLine className={Styles.icon} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
