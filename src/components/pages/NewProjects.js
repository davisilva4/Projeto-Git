import React from 'react'
import ProjectForm from '../layout/ProjectForm'
import styles from './NewProjects.module.css'

function NewProjects() {

  return (
    <div className={styles.newprojects_container}>
        <h2>Crie seu projeto agora mesmo!</h2>
        <ProjectForm/>
    </div>
  )
}

export default NewProjects