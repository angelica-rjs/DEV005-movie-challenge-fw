import React from 'react'
import Styles from '../home.module.css';

export const Recommendations = ({ title })=>{
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
