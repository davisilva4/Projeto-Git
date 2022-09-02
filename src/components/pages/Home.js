import React from 'react'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home_container}>
      <h1>Bem-vindo ao Costs</h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton path='/newprojects' text='Criar Projeto'/>
      <img src={savings} alt='savings'/>
    </div>
  )
}

export default Home