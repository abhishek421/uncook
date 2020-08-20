import Link from "next/link";
import styles from '../styles/Landing.module.css'

class Landing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Ohooo.. Bade aaye ' + this.state.value + ' mangane wale.. Are paaji thand rkho..!!');
        event.preventDefault();
    }

    render(){
        return(
            <div className={styles.cover}>
            <div className={styles.brand}>
                <p style={{fontWeight:"600",fontSize:"60px",color:"white",margin:"auto"}}>UnCook</p>
                <p style={{fontWeight:"400",fontSize:"20px",color:"white",margin:"auto"}}>"Homemade Happiness"</p>
            </div>
            <div className={styles.tagline}>
                <p>Instant ready to be cooked food in minutes</p>
            </div>
            <form onSubmit={this.handleSubmit} className={styles.searchbar} >
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search Dishes, Cuisines, Restaurants.." className={styles.search} />
                <button type="submit" className={styles.submit}><img src="./assets/search.svg" height="24px"/></button>
            </form>
            </div>
        )
    }
}

export default Landing