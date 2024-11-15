import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Components/Header/Header"
import Presentacion from "./Components/Presentacion/Presentacion"
import Inicio from "./Components/Inicio/Inicio"


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Header/>
      <Presentacion/>
      <Inicio/>
    </ChakraProvider>
  )
}
export default App
