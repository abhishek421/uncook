import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Home from '../pages/index';
import Link from 'next/link'

export default function Login() {
  return (
    <div className={styles.cover}>
    <div className={styles.loginbox}>
      <h3 style={{textAlign:"center"}}>Login</h3>
        <Link href="/">
          <a><h1 style={{textAlign:"center"}}>X</h1></a>
        </Link>
    </div>
    <div style={{filter:"brightness(0.5)"}}>
      <Home />
    </div>
    </div>
  )
}

