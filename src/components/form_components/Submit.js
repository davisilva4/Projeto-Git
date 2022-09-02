import React from 'react'
import styles from './Submit.module.css'

function Submit({text}) {
  return (
    <div className={styles.submit_container}>
        <input type='submit' value={text}/>
    </div>
  )
}

export default Submit