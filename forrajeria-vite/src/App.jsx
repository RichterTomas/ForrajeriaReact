import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Components/Header/Header"


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Header/>
    </ChakraProvider>
  )
}
export default App
