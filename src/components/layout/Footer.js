import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <p><span>Costs</span>&copy; 2022</p>
        <ul className={styles.social_links}>
            <li className={styles.social_link}><FaFacebook/></li>
            <li className={styles.social_link}><FaInstagram/></li>
            <li className={styles.social_link}><FaTwitter/></li>
            <li className={styles.social_link}><FaLinkedin/></li>
        </ul>
    </footer>
  )
}

export default Footer