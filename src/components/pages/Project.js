import React, { useEffect, useState } from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Input from '../form_components/Input'
import Select from '../form_components/Select'
import Submit from '../form_components/Submit'
import Loading from '../layout/Loading'
import Message from '../layout/Message'


function Project() {

    //get project id
    const {id} = useParams()

    //server url
    const url = 'http://localhost:5000/projects'
    
    //get project data and set it to a variable
    const [project, setProject] = useState([])

    useEffect(() => {
        axios.get(`${url}/${id}`).then(resp => setProject(resp.data))
    }, [id])

    //function to render form
    const [showProjectForm, setShowProjectForm] = useState(false)

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    //set the format for data manipulation and get the data from form inputs
    const [data, setData] = useState({
        name: '',
        email:'',
        budget: '',
        category:''
    })

    function handle(e){
      const newData = {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
    }

    //edit project data
    function editProject(e){
        e.preventDefault()
        axios.patch(`${url}/${id}`, {
        name: data.name,
        email: data.email,
        budget: data.budget,
        category: data.category
        })
        .catch(err => console.log(err))
        .then(setShowProjectForm(false))
        .then(setProject(data))
        .then(setType('success'))
        .then(setMessage('Projeto atualizado com sucesso!'))
    }

    //messages
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    return (
        <>
           {project.name ? (
            <div className={styles.edit_page}>
                {message && <Message type={type} msgText={message}/>}
                <h1>{project.name}</h1>
                <button onClick={toggleProjectForm}>{!showProjectForm ? ('Editar projeto') : ('Fechar')}</button>
                {!showProjectForm ? 
                    (<div className={styles.project_info}>
                        <p><span>Email:</span> {project.email}</p>
                        <p><span>Categoria:</span> {project.category}</p>
                        <p><span>Orçamento:</span> {project.budget}</p>
                    </div>) :
                    (<div className={styles.update_form}>
                        <form onSubmit={(e) => editProject(e)}>
                            <Input type='text' name='name' text='Digite o nome do projeto' handleChange={handle}/>
                            <Input type='text' name='email' text='Digite seu email' handleChange={handle}/>
                            <Input type='number' name='budget' text='Digite seu orçamento' handleChange={handle}/>
                            <Select name='category' handleChange={handle}/>
                            <Submit text='Concluir edição'/>
                        </form>
                    </div>)
                }
            </div>
           ) : (<Loading/>)}
        </>
    )
}

export default Project