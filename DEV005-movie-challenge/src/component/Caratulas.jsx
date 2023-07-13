import Styles from './caratulas.module.css';


export const Caratulas = ({imgUrl , title})=>{
    return(
        <section className={Styles.section} >
            <div className={Styles.containerimg}>
              <img className={Styles.img} src={imgUrl} alt={title} />
            </div>
            <h5>{title}</h5>
          </section>
    )
}