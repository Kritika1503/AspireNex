import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Experiences from "./components/Experiences"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Design from './components/Design';
// import "./styles/about.css"
// import "./styles/header.css"

function App() {
  return (
    
    
    <Router>  
    <div  >
    <div className='wfull hscreen relative'>
    <Header/>
    
    </div>
    <div className='absolute top0 left0 wfull hscreen'>
      <Design/>
    </div>
    
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About/>} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
        
        
    </Routes>
    
    <Footer/>
    </div> 
    </Router>

  );
}

export default App;
