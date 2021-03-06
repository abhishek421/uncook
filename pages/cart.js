import Head from 'next/head';
import styles from '../styles/Mobile.module.css';
import Navbar from '../components/navbar'
import React,{useState} from 'react';



function Cart(){
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
        <div className={styles.cart}>Sorry, Cart Empty</div>
          <div className={styles.cartimg}></div>
          
        </div>
        <Navbar />
        </div>
      )
  }

export default Cart;
