import Link from "next/link";
import styles from '../styles/ResCard.module.css'

class ResCard extends React.Component{
    render(){
        return(
            <Link href="/restaurant/[slug]" as={`/restaurant/${this.props.restro.restaurant.id}`}>
            <a className={styles.wrapper}>
                <div className={styles.image} style={{backgroundImage:"url(" + this.props.restro.restaurant.thumb + ")"}}></div>
                <div className={styles.details}>
                    <div className={styles.name}>{this.props.restro.restaurant.name}</div>
                    <div className={styles.address}>{this.props.restro.restaurant.location.address}</div>
                    <div className={styles.tags}>{this.props.restro.restaurant.cuisines}</div>
                    <div className={styles.info}>
                        <div className={styles.rating}>{this.props.restro.restaurant.user_rating.aggregate_rating}</div>
                        <div className={styles.reviews}>{this.props.restro.restaurant.user_rating.votes}</div>
                    </div>
                </div>
            </a>
            </Link>
        )
    }
}

export default ResCard