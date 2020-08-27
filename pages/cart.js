import Head from 'next/head';
import styles from '../styles/Mobile.module.css';
import Navbar from '../components/navbar'
import React,{useState} from 'react';



function Cart(){
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
        <div className="container">
          <div>Cart</div>
          <div className={styles.mhscroll}>
          </div>
        </div>
        <style jsx>{`
        .container{
            position: fixed;
            bottom: 0;
            height: 90%;
            width: 100%;
            border-radius: 30px 30px 0px 0px;
            background-color: #F2F2F2;
            box-shadow: 0px -6px 16px #00000036;
            padding: 25px;
        }
      `}</style>
        <Navbar />
        </div>
      )
  }

export default Cart;
