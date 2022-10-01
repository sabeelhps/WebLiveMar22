import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/allfoods">React Foods</Link></li>
                <li><Link to="/mycart">Cart</Link></li>
            </ul>
        </nav>
    )
}

export default MainNavigation;