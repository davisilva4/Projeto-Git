import React, {useState, useEffect} from 'react'
import Message from '../layout/Message'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Projects.module.css'
import LinkButton from '../layout/LinkButton'
import Card from '../project/Card'
import axios from 'axios'

function Projects() {

  //redirect function
  const navigate = useNavigate()

  //get project data from server
  const url = 'http://localhost:5000/projects'
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get(url)
    .then(resp => setProjects(resp.data))
    .catch(err => console.log(err))
  }, [])

  //set a message
  const [projectMessage, setProjectMessage] = useState([])


  //get message from a previous page state
  const location = useLocation()
  let message = ''

  if(location.state){
    message = location.state.message
  }

  //function to redirect to update page 
  function redirectUpdatePage(id) {
    navigate(`/project/${id}`)
  }

  //delete project function
  function deleteProject(id){
    axios.delete(`${url}/${id}`)
    .then(setProjects(projects.filter((project) => project.id !== id)))
    .then(setProjectMessage('Projeto removido com sucesso'))
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Meus Projetos</h1>
        <LinkButton path='/newprojects' text='Novo projeto'/>
      </div>
      <div className={styles.container}>
        {message && <Message type='success' msgText={message}/>}
        {projectMessage && <Message type='success' msgText={projectMessage}/>}
      </div>
      <div className={styles.cards_container}>
        {projects.length > 0 &&
          projects.map((project) => (<Card name={project.name}
          id={project.id}
          budget={project.budget}
          category={project.category}
          key={project.id}
          handleUpdate={redirectUpdatePage}
          handleRemove={deleteProject}/>))}
      </div>
    </>
  )
}

export default Projects