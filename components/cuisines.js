import CirCard from './circard'
import styles from '../styles/Content.module.css'

function Cuisines(props){
    const list = props.cuisines.map((text) =>
    <CirCard key={text} name={text} img="https://b.zmtcdn.com/data/collections/e40960514831cb9b74c552d69eceee0f_1418387628_l.jpg"/>
    );
    return(
        <div className={styles.mhscroll}>
            {list}
        </div>
    )
}

export default Cuisines