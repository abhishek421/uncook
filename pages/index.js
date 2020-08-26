import Head from 'next/head';
import styles from '../styles/Mobile.module.css';
import Navbar from '../components/navbar'
import CirCard from '../components/circard';
import LocBar from '../components/locationbar'
import Link from 'next/link';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        zomKEY:'e5a967bf43adaa8f07126651250ae95c',
        region: '',
        city:'Loading... ',
        zip:'',
        lat:'',
        lng:'',
        city_id:'',
        cuisines:[],
        zone:'',
        zone_id:''
    };
  }

  componentDidMount(){
    fetch("http://ip-api.com/json/?fields=regionName,city,zip,isp")
    .then(res => res.json())
    .then(
        (result) => {
        this.setState({
            region:result.regionName,
            city:result.city,
            zip:result.zip,
            isLoaded: true,
        });
        },
        (error) => {
        this.setState({
            isLoaded: true,
            error
        });
        }
    )
    }

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
          <LocBar city={this.state.city}/>
          <div className={styles.mhscroll}>

          </div>
        </div>
        <Navbar />
        </div>
      )
  }
}

export default Home;
