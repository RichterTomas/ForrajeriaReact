import '../Inicio/Inicio.css';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';

const SobreMi = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './CV - Tomas Richter.docx'; 
    link.download = 'CV - Tomas Richter.docx'; 
    link.click();
  };

  return (
    <Box as='section' id='sobre-mi' bg='rgb(37,37,37)' display='flex' justifyContent='space-evenly' p='130px 0px 110px 0px' ref={ref}>
      <motion.div
        initial = {{opacity:0, scale: 1.1}}
        animate = {inView ? {opacity:1} : {opacity:0}}
        transition={{duration: 3}}
      >
        <Image src='./imgperfil2.png' 
        display = {{base:'none',sm:'none',md:'block',lg:'block'}}
        maxW={{md:'90%', lg:'100%'}}/>
      </motion.div>
      

      <Flex as='div' 
      width={{base: '80%',md:'38%'}} 
      display='flex' 
      flexDirection='column' 
      minH={{ base: '50vh', md: 'auto' }}
      justifyContent='space-evenly' 
      alignItems={{base: 'center',md:'end'}} 
      >

        <Text as='h2' textAlign = {{base:'center', md: 'end'}} fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}>Sobre</Text>
        <Text as='h1' textAlign = {{base:'center', md: 'end'}}fontWeight='bold' fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}>Mi</Text>
        <motion.div
          initial = {{opacity:0}}
          animate = {inView ? {opacity:1} : {opacity:0}}
          transition={{duration: 4}}
        >
          <Text as='p' color='white' textAlign={{base:'center', md: 'end'}} pb='30px' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>
            ¡Hola! Soy Tomás Richter, un estudiante de Ingeniería en Sistemas con experiencia en Python, HTML y CSS. Aunque aún estoy en proceso de aprendizaje, estoy enfocado en convertirme en un desarrollador fullstack. Mi pasión por la programación se extiende a través de todas las capas del desarrollo, desde el frontend hasta el backend. Estoy emocionado por aprender nuevas tecnologías y enfrentar desafíos para convertirme en un experto en desarrollo fullstack. ¡Estoy listo para sumergirme en este apasionante viaje!
          </Text>
        </motion.div>
        

        <Box display='flex' justifyContent='flex-end'>
          <motion.div
            initial = {{opacity:0}}
            animate = {inView ? {opacity:1} : {opacity:0}}
            transition={{duration: 4}}
          >
               <Button
               onClick = {handleDownload}
            sx={{
              fontFamily: '"Helvetica neue", Arial, Helvetica, sans-serif',
              letterSpacing: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: {base: '90px'},
              width: {base: '410px',md: '310px',lg: '410px'},
              background: 'linear-gradient(to right, rgb(167,115,74), transparent 75%)',
              transition: 'background-position 1s ease',
              backgroundSize: '200% 100%',
              backgroundPosition: '150% 100%',
              _hover: {
                backgroundPosition: '200% 100%',
                cursor: 'pointer',
              },
              color: 'white',
              border: 'none',
              borderRadius: 'none',
            }}
          >
            <Image
              src="./arrow-narrow-left-svgrepo-com.svg"
              width='60px'
              height='60px'
              marginRight='15%'
              filter='grayscale(300%) brightness(600%)'
            />
            <Text color='white' ml = '30px' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>Descargar CV</Text>
          </Button>
          </motion.div>
       
        </Box>
      </Flex>
    </Box>
  );
}

export default SobreMi;
