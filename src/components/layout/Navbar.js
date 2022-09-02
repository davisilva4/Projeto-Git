import React from 'react'
import logo from '../../img/costs_logo.png'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link to='/'><img src={logo} alt='costs logo'/></Link>
        <ul className={styles.navlinks}>
            <li className={styles.navlink}><Link to='/'>Home</Link></li>
            <li className={styles.navlink}><Link to='/newprojects'>New Projects</Link></li>
            <li className={styles.navlink}><Link to='/projects'>Projects</Link></li>
            <li className={styles.navlink}><Link to='/company'>Company</Link></li>
            <li className={styles.navlink}><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar