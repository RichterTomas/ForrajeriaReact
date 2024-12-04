import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Components/Header/Header"
import Presentacion from "./Components/Presentacion/Presentacion"
import Inicio from "./Components/Inicio/Inicio"
import Footer from "./Components/Footer/Footer"
import Perros from "./Components/Perros/Perros"
import { Routes, Route } from "react-router-dom"

const Home = () => {
  return(
      <ChakraProvider>
        <Presentacion/>
        <Inicio/>
        <Footer/>
      </ChakraProvider>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ChakraProvider>
        <Header/>
      </ChakraProvider>
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/Perros' element = {<Perros />}/>
      </Routes>
    </div>
    
    
  )
}
export default App
