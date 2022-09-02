import React, {useState} from 'react'
import Input from '../form_components/Input'
import Submit from '../form_components/Submit'
import Select from '../form_components/Select'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProjectForm() {
  const navigate = useNavigate()
  const url = 'http://localhost:5000/projects'
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

  function submit(e){
    e.preventDefault()
    axios.post(url, {
        name: data.name,
        email: data.email,
        budget: data.budget,
        category: data.category
    }).then(navigate('/projects', {state:{message: 'Projeto criado com sucesso!'}}))
  }  

  return (
    <form onSubmit={(e) => submit(e)}>
        <Input type='text' name='name' text='Digite o nome do projeto' handleChange={handle}/>
        <Input type='text' name='email' text='Digite seu email' handleChange={handle}/>
        <Input type='number' name='budget' text='Digite seu orçamento' handleChange={handle}/>
        <Select name='category' handleChange={handle}/>
        <Submit text='Enviar Formulário'/>
    </form>
  )
}

export default ProjectForm