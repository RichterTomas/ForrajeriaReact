import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Components/Header/Header"
import Presentacion from "./Components/Presentacion/Presentacion"


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Header/>
      <Presentacion/>
    </ChakraProvider>
  )
}
export default App
