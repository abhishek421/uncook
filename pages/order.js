import Head from 'next/head';
import styles from '../styles/Mobile.module.css';
import Navbar from '../components/navbar'
import CirCard from '../components/circard';
import LocBar from '../components/locationbar';
import React,{useState} from 'react';



function Order(){
      const [location, setLocation] = useState({lat:0,lon:0});
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
        <div className={styles.container}>
        <div className={styles.cart}>404, Page not found</div>
        </div>
        <Navbar />
        </div>
      )
  }

export default Order;
