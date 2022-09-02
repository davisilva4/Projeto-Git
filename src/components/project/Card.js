import React from 'react'
import styles from './Card.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function Card({id, name, budget, category, handleRemove, handleUpdate}) {

  return (
    <div className={styles.card}>
        <h4>{name}</h4>
        <p><span>Orçamento:</span> R${budget}</p>
        <p><span>Categoria:</span> {category}</p>
        <div className={styles.edit_remove}>
            <button onClick={() => handleUpdate(id)}>Editar<BsPencil/></button>
            <button onClick={() => handleRemove(id)}>Remover<BsFillTrashFill/></button>
        </div>
    </div>
  )
}

export default Card