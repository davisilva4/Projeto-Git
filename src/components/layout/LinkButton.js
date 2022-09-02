import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({path, text}) {
  return (
    <>
        <Link to={path} className={styles.btn}>{text}</Link>
    </>
  )
}

export default LinkButton