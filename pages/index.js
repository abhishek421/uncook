import Head from 'next/head';
import styles from '../styles/Mobile.module.css';
import Navbar from '../components/navbar'
import LocBar from '../components/locationbar';
import {useState,useEffect} from 'react';
import zomato from '../pages/api/zomato'
import Content from '../components/content'



function Home(){
      const [location, setLocation] = useState();

      function getLocation(searchApi){
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((e)=>{searchApi(e.coords.latitude,e.coords.longitude)})
        }
        else{
          console.log("GeoLocation not supported by browser")
        }
      }

      const searchApi = async (lat,lon)=>{
        try{
            const response = await zomato.get(`/geocode?lat=${lat}&lon=${lon}`);
            setLocation(response.data);
        }catch(err){
            console.log(err)
        }
      }

      useEffect(()=>{
        getLocation(searchApi)
      },[])

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
          {
            location?
            <LocBar zone={location.location.title} city={location.location.city_name}/>
            :
            <div onClick={getLocation}>
            <LocBar default="Set Location"/>
            </div>
          }
          {
            location?
            <Content loc={location.location}/>
            :
            <div>TMKOC</div>
          }
          
        </div>
        <Navbar />
        </div>
      )
  }

export default Home;
