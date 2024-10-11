import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from './Components/Header/Header'
import Inicio from './Components/Inicio/Inicio'
import InicioRedes from './Components/InicioRedes/InicioRedes'
import SobreMi from './Components/SobreMi/SobreMi'
import Trabajos from './Components/Trabajos/Trabajos'
import Reseñas from './Components/Reseñas/Reseñas'
import Servicios from './Components/Servicios/Servicios'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <ChakraProvider>
      <Header/>
      <Inicio/>
      <InicioRedes/>
      <SobreMi/>
      <Trabajos/>
      <Reseñas/>
      <Servicios/>
      <Footer/>
    </ChakraProvider>
  )
}

export default App
