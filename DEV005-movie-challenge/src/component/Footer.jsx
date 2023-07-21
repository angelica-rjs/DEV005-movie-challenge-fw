import React from 'react'
import Styles from './Header_Footer.module.css';

//TODO: Definir logo y nombre de la pagina

export const Footer = ()=>{
    return(
        <footer  role={"footer"} className={Styles.footer}>
            <p className={Styles.pFooter}>Derechos reservados</p>
        </footer>
    )
}



