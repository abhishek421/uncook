import Head from 'next/head';
import styles from '../styles/Mobile.module.css';


class Home extends React.Component{
  render(){
      return(
        <div className={styles.background}>
        <Head>
          <title>UnCook</title>
          <link rel="icon" href="/logo-r.svg" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <div className={styles.navbar}>
            <div className={styles.menu}></div>
            <div className={styles.logo}></div>
            <div className={styles.profile}></div>
        </div>
        <div className={styles.quote}>"A recipe has no soul. You as the cook must bring soul to the recipe."</div>
        <div className={styles.container}>

        </div>
        <div className={styles.tabs}>
            <div className={styles.tab}>
                <div className={styles.tabi} style={{backgroundImage:"url(../assets/logo.svg)"}}></div>
                <p className={styles.tabp}>UnCook</p>
            </div>
            <div className={styles.tab}>
                <div className={styles.tabi} style={{backgroundImage:"url(../assets/search.svg)"}}></div>
                <p className={styles.tabp}>Search</p>
            </div>
            <div className={styles.tab}>
                <div className={styles.tabi} style={{backgroundImage:"url(../assets/order.svg)"}}></div>
                <p className={styles.tabp}>Order</p>
            </div>
            <div className={styles.tab}>
                <div className={styles.tabi} style={{backgroundImage:"url(../assets/cart.svg)"}}></div>
                <p className={styles.tabp}>Cart</p>
            </div>
            <div className={styles.tab}>
                <div className={styles.tabi} style={{backgroundImage:"url(../assets/settings.svg)"}}></div>
                <p className={styles.tabp}>Settings</p>
            </div>
        </div>
      </div>
      )
  }
}

export default Home;
