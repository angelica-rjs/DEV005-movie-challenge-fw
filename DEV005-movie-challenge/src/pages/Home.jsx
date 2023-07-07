import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header, Footer} from '../component/component'
import Styles from '../home.module.css';
import { Navbar } from '../component/Navbar';

const Recommendations = ({ title })=>{
    return(
    <section className={Styles.sectionRecommendations}>
        <div className={Styles.titleRecommendations}>
            <h4>{title}</h4>
        </div>
        <div className={Styles.containerRecommendations}>

        </div>
    </section>
    )
}

const Search = ()=>{
    return(
        <div className={Styles.containerSearch}>
            <input placeholder='Busca peliculas o series' className={Styles.inputSearch}/>
            <button className={Styles.btnSearch}>Buscar<img src="./src/imagenes/lupa.png" alt="Icon search" className={Styles.iconBtnSearch}/></button>
        </div>
    )
}

export const Home = ()=>{
    return(
        <React.Fragment>
            <Navbar/>
            <Search/>
            <Recommendations title="Películas que puedes ver hoy"/>
            <Recommendations title="Series que puedes ver hoy"/>
            <Footer/>
        </React.Fragment>
    )
}