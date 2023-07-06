import React from 'react'
import ReactDOM from 'react-dom/client'
import Styles from './header.module.css';

//TODO: Definir logo y nombre de la pagina
//TODO: Crear un nuevo archivo donde se renderice la vista 1 
//TODO: Crear footer 

export const Header= () =>{
    return(
        <header className={Styles.header}>
            <div className={Styles.logo}>
            <img className={Styles.logoimg} src="./src/imagenes/thor.png" alt="logo"/>
            </div>
            <section className={Styles.sectionButton}>
                <button className={Styles.btn}>SERIES <img className={Styles.iconButton} src="./src/imagenes/serie.png" alt="logo"/></button>
                <button className={Styles.btn}>PELICULAS <img className={Styles.iconButton} src="./src/imagenes/pelicula.png" alt="logo"/></button>
            </section>
        </header>
    )
}

export const Footer = ()=>{
    return(
        <footer className={Styles.footer}>
            <p>Derechos reservados</p>
        </footer>
    )
}