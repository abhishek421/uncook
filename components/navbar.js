import Link from "next/link";
import styles from '../styles/Mobile.module.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className={styles.tabs}>
                <Link href="/">
                    <a className={styles.tab}>
                    <div className={styles.tabi} style={{backgroundImage:"url(../assets/logo.svg)"}}></div>
                    <p className={styles.tabp}>UnCook</p>
                    </a>
                </Link>
                <Link href="/search">
                    <a className={styles.tab}>
                    <div className={styles.tabi} style={{backgroundImage:"url(../assets/search.svg)"}}></div>
                    <p className={styles.tabp}>Search</p>
                    </a>
                </Link>
                <Link href="/order">
                    <a className={styles.tab}>
                    <div className={styles.tabi} style={{backgroundImage:"url(../assets/order.svg)"}}></div>
                    <p className={styles.tabp}>Order</p>
                    </a>
                </Link>
                <Link href="/cart">
                    <a className={styles.tab}>
                    <div className={styles.tabi} style={{backgroundImage:"url(../assets/cart.svg)"}}></div>
                    <p className={styles.tabp}>Cart</p>
                    </a>
                </Link>
                <Link href="/settings">
                    <a className={styles.tab}>
                    <div className={styles.tabi} style={{backgroundImage:"url(../assets/settings.svg)"}}></div>
                    <p className={styles.tabp}>Settings</p>
                    </a>
                </Link>
            </div>
        )
    }
}

export default Navbar