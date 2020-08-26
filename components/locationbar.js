import styles from '../styles/LocBar.module.css'

class LocBar extends React.Component{
    render(){
        return(
            <div className={styles.wrapper}>
                <div className={styles.location}>
                    <div className={styles.from}>{this.props.city}</div>
                    <div className={styles.arrow}>→</div>
                    <div className={styles.to}>Home</div>
                </div>
                <div className={styles.locedit} onClick={this.props.getLocation}></div> 
            </div>
        )
    }
}

export default LocBar