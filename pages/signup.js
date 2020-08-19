import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.cover}>
    <div className={styles.loginbox}>
        <h3 style={{textAlign:"center"}}>Sign Up</h3>
        <Link href="/">
          <a><h1 style={{textAlign:"center"}}>Exit</h1></a>
        </Link>
    </div>
    <div className={styles.bgcontainer} style={{filter:"brightness(0.5)"}}>
      <div className={styles.redblock}></div>
      <Head>
        <title>UnCook</title>
        <link rel="icon" href="/logo-r.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
    </div>
    </div>
  )
}

