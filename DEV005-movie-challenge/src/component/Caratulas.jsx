//import Styles from './caratulas.module.css';
import Styles from './cars.module.css';


export const Caratulas = ({ imgUrl, title }) => {
  return (
    <section className={Styles.section}>
      <div className={Styles.containerimg}>
        <img role={"img"} className={Styles.img} src={imgUrl} alt={title} />
      </div>
    </section>
  )
}