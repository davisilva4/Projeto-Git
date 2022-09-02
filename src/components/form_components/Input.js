import React from 'react'
import styles from './Input.module.css'

function Input({type, text, name, handleChange}) {
  return (
    <div className={styles.input_container}>
        <label htmlFor={name}>{text}:</label>
        <input type={type} name={name} id={name} placeholder={text} onChange={(e) => handleChange(e)}/>
    </div>
  )
}

export default Input