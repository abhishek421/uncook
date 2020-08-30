import styles from '../styles/Locbar.module.css'

function LocBar(props){
        return(
            <div className={styles.wrapper}>
                <div className={styles.location}>
                    {
                        props.default?
                        <div className={styles.from}>Set Location</div>
                        :
                        <div className={styles.from}>{props.zone}, {props.city}</div>}
                </div>
                <div className={styles.locedit}></div> 
            </div>
        )
    }

export default LocBar