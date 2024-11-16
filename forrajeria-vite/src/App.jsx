import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Components/Header/Header"
import Presentacion from "./Components/Presentacion/Presentacion"
import Inicio from "./Components/Inicio/Inicio"
import Footer from "./Components/Footer/Footer"


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Header/>
      <Presentacion/>
      <Inicio/>
      <Footer/>
    </ChakraProvider>
  )
}
export default App
