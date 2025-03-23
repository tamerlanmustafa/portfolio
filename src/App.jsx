import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar.jsx';
import Hero from "./components/Hero/Hero.jsx";
import AllProjects from "./components/Projects/AllProjects.jsx"

function App() {

  return (
    <>
      <NavBar />      
      <Routes>
        <Route path='/' element={ <Hero/> }/>
        <Route path='/allprojects' element={ <AllProjects/> }/>
      </Routes>
    </>
  )
}

export default App
