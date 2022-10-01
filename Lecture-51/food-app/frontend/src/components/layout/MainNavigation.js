import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css';
import CartContext from '../../store/cart-context';


const MainNavigation = () => {

    const { cartLength } = useContext(CartContext);

    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/allfoods">React Foods</Link></li>
                <li><Link to="/mycart">Cart <sup>{ cartLength}</sup></Link></li>
            </ul>
        </nav>
    )
}

export default MainNavigation;