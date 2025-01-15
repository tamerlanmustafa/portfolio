import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar.jsx';
import Hero from "./components/Hero/Hero.jsx";
import AllProjects from "./components/Projects/AllProjects.jsx"

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });
    const hiddenELs = document.querySelectorAll('.hidden')
    hiddenELs.forEach((el) => {
      observer.observe(el)
})
},[])

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
