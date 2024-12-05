import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={ <Hero/> }/>
      </Routes>
    </>
  )
}

export default App
