import React, { useState, useEffect } from 'react'
import styles from './Select.module.css'
import axios from 'axios'

function Select({name, handleChange}) {
  const [categories, setCategories] = useState([])
  const url = 'http://localhost:5000/categories'

  useEffect(() => {
    axios.get(url)
    .then(resp => {
        setCategories(resp.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className={styles.select_container}>
        <label htmlFor={name}>Selecione a categoria:</label>
        <select id={name} onChange={(e) => handleChange(e)}>
            <option selected disabled>Selecione a categoria</option>
            {categories.map((option) => <option key={option.id}>{option.category}</option>)}
        </select>
    </div>
  )
}

export default Select