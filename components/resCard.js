import Link from "next/link";
import styles from '../styles/ResCard.module.css'

function ResCard(props){
        return(
            <Link href="/restaurant/[slug]" as={`/restaurant/${props.restro.restaurant.id}`}>
            <a className={styles.wrapper}>
                <div className={styles.image} style={{backgroundImage:"url(" + props.restro.restaurant.thumb + ")"}}></div>
                <div className={styles.details}>
                    <div className={styles.name}>{props.restro.restaurant.name}</div>
                    <div className={styles.address}>{props.restro.restaurant.location.address}</div>
                    <div className={styles.tags}>{props.restro.restaurant.cuisines}</div>
                    <div className={styles.info}>
                        <div className={styles.rating}>{props.restro.restaurant.user_rating.aggregate_rating}</div>
                        <div className={styles.reviews}>{props.restro.restaurant.user_rating.votes}</div>
                    </div>
                </div>
            </a>
            </Link>
        )
    }

export default ResCard