import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className={styles.bgcontainer}>
      {/* <div className={styles.redblock}></div> */}
      <Head>
        <title>UnCook</title>
        <link rel="icon" href="/logo-r.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className={styles.brand}>
        <p style={{fontWeight:"600",fontSize:"60px",color:"white",margin:"auto"}}>UnCook</p>
        <p style={{fontWeight:"400",fontSize:"20px",color:"white",margin:"auto"}}>"Homemade Happiness"</p>
      </div>
      <div className={styles.tagline}>
        <p style={{fontWeight:"500",fontSize:"30px",color:"white",margin:"auto"}}>Instant ready to be cooked food in minutes</p>
      </div>
      <input className={styles.searchbar} placeholder="Search Dishes, Cuisines, Restaurants"></input>
    </div>
  )
}
