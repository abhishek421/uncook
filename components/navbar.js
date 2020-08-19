import Link from "next/link";
import style from '../styles/Navbar.module.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className={style.navbar}>
                <Link href="/">
                <a><img style={{height:"68px",margin:"0 10px"}} src="./logo-w.svg" alt="Uncook" /></a>
                </Link>
                <div className={style.navlinks}>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                    <Link href="/signup">
                        <a>Sign Up</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar