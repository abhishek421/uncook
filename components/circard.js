import Link from "next/link";
import styles from '../styles/CirCard.module.css'

class CirCard extends React.Component{
    render(){
        return(
            <Link href="/cuisine/[slug]" as={`/cuisine/${this.props.name}`}>
            <a className={styles.wrapper}>
                <div className={styles.image} style={{backgroundImage:"url(" + this.props.img + ")"}}></div>
                <div className={styles.name}>{this.props.name}</div>
            </a>
            </Link>
        )
    }
}

export default CirCard