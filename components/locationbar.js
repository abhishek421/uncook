import styles from '../styles/Locbar.module.css'

function LocBar(props){
        return(
            <div className={styles.wrapper}>
                <div className={styles.location}>
                    <div className={styles.from}>{props.zone}, {props.city}</div>
                    <div className={styles.arrow}>→</div>
                    <div className={styles.to}>Home</div>
                </div>
                <div className={styles.locedit}></div> 
            </div>
        )
    }

export default LocBar