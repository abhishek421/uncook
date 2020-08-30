import Link from "next/link";
import styles from '../styles/ResCard.module.css'

class ResCard extends React.Component{
    render(){
        return(
            <Link href="/restaurant/[slug]" as={`/restaurant/${this.props.name}`}>
            <a className={styles.wrapper}>
                <div className={styles.image} style={{backgroundImage:"url()"}}></div>
                <div className={styles.details}>
                    <div className={styles.name}>MS Dhabha </div>
                    <div className={styles.address}>teri galiyo, me guzra krunga, mai</div>
                    <div className={styles.tags}>Chingz CHinese, NOrth indian</div>
                    <div className={styles.info}>
                        <div className={styles.rating}>4.9</div>
                        <div className={styles.reviews}>652</div>
                    </div>
                </div>
            </a>
            </Link>
        )
    }
}

export default ResCard