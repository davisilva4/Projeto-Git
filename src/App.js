import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import NewProjects from './components/pages/NewProjects'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container>
          <Routes>
              <Route exact path= "/" element={<Home/>}/>
              <Route path= "/company" element={<Company/>}/>
              <Route path= "/contact" element={<Contact/>}/>
              <Route path= "/newprojects" element={<NewProjects/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/project/:id' element={<Project/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
