import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const Servicios = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box as = 'section' id = 'servicios' display='flex' flexDirection='column' bg='rgb(33,33,33)' justifyContent='center' alignContent='center' pt='200px'>
      <Box display='flex' justifyContent='space-around' width='100%' marginBottom='8%' alignItems='center' ref={ref}>
        <Flex display='flex' flexDirection='column' marginRight='28%' alignContent='initial'>
          <Text as='h2' fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }} pb= '10px'>Mis</Text>
          <Text as='h1' fontWeight='bold' fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}>Servicios</Text>
        </Flex>
        <Image
          src='./reshot-icon-down-arrow-VUE5WQFCX2.svg'
          width='60px'
          height='60px'
          filter='grayscale(300%) brightness(600%)'
        />
      </Box>

      <Box display='flex' justifyContent='center' width='100%' marginBottom='10%'>
        <Flex display='flex' flexDirection='column' width='52%' justifyContent='space-evenly'>
          <MotionText as='h1' fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}  width='90%' initial={{ x: -100, opacity: 0 }} animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }} transition={{ duration: 1, delay: 0 }}>
            Desarrollo Fullstack para aplicaciones
          </MotionText>
          <MotionText color='white' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }} pb = '20px' width='70%' initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 1, delay: 1.5 }} >
            Desarrollo tanto en el frontend (interfaz de usuario) como en el backend (lógica y funcionalidad del sistema) para aplicaciones web, brindando soluciones completas y robustas.
          </MotionText>
          <MotionButton
            sx={{
              letterSpacing: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: {base: '90px'},
              width: {base: '250px',md: '310px',lg: '410px'},
              background: 'linear-gradient(to left, rgb(167,115,74), transparent 75%)',
              transition: 'background-position 1s ease',
              backgroundSize: '200% 100%',
              backgroundPosition: '150% 50%',
              _hover: {
                backgroundPosition: '100% 200%',
                cursor: 'pointer',
              },
              color: 'white',
              border: 'none',
              borderRadius: 'none',
            }}
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} 
            transition={{ duration: 1, delay: 2.5 }} 
          >
            <Text color='white' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>Ver más</Text>
            <Image
              src="./arrow-narrow-left-svgrepo-com.svg"
              width='60px'
              height='60px'
              filter='grayscale(300%) brightness(600%)'
              transform="scaleX(-1)"
              marginLeft='15%'
            />
          </MotionButton>
        </Flex>
        <MotionImage 
          src='./servicio1.png' 
          width='20%' 
          height={{base:'200px',md:'300px',lg:'400px'}}
          bg='black' 
          borderRadius='10%' 
          initial={{ opacity: 0 }} 
          animate={{ opacity: inView ? 1 : 0 }} 
          transition={{ duration: 1.5, delay: 1 }} 
        />
      </Box>

      <Box display='flex' justifyContent='center' width='100%' marginBottom='10%'>
        <MotionImage 
          src='./servicio2.png' 
          width='22%' 
          height={{base:'200px',md:'300px',lg:'350px'}} 
          bg='black' 
          borderRadius='10%' 
          initial={{ opacity: 0 }} 
          animate={{ opacity: inView ? 1 : 0 }} 
          transition={{ duration: 1.5, delay: 5.5 }} 
        />
        <Flex display='flex' flexDirection='column' textAlign='end' alignItems='end' width='52%' justifyContent='space-evenly'>
          <MotionText as='h1'  fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }} width='65%' initial={{ x: 50, opacity: 0 }} animate={{ x: inView ? 0 : 50, opacity: inView ? 1 : 0 }} transition={{ duration: 1, delay: 4.5 }}>
            Desarrollo de interfaces
          </MotionText>
          <MotionText color='white' pb = '20px' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }} width='70%' initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 1, delay: 6 }}>
            Componentes gráficos personalizados y diseños de la interfaces de usuario en aplicaciones web, aprovechando conocimientos en HTML, CSS y JavaScript para garantizar una presentación visualmente atractiva y coherente.
          </MotionText>
          <MotionButton
            sx={{
              fontFamily: '"Helvetica neue", Arial, Helvetica, sans-serif',
              letterSpacing: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: {base: '90px'},
              width: {base: '250px',md: '310px',lg: '410px'},
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
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }} 
            transition={{ duration: 1, delay: 7.5 }} 
          >
            <Image
              src="./arrow-narrow-left-svgrepo-com.svg"
              width='60px'
              height='60px'
              marginRight='15%'
              filter='grayscale(300%) brightness(600%)'
            />
            <Text color='white' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>Ver más</Text>
          </MotionButton>
        </Flex>
      </Box>

      <Box display='flex' justifyContent='center' width='100%' marginBottom='7%'>
        <Flex display='flex' flexDirection='column' width='52%' justifyContent='space-evenly'>
          <MotionText as='h1' fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }} width='65%' initial={{ x: -100, opacity: 0 }} animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }} transition={{ duration: 1, delay: 9 }}>
            Desarrollo de productos personalizados
          </MotionText>
          <MotionText color='white'  pb = '20px' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }} width='70%' initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 1, delay: 10.5 }}>
            Implementación de productos de software a medida utilizando Python y otras tecnologías relacionadas con el desarrollo fullstack, adaptándolos a los requerimientos específicos del usuario final.
          </MotionText>
          <MotionButton
            sx={{
              letterSpacing: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: {base: '90px'},
              width: {base: '250px',md: '310px',lg: '410px'},
              background: 'linear-gradient(to left, rgb(167,115,74), transparent 75%)',
              transition: 'background-position 1s ease',
              backgroundSize: '200% 100%',
              backgroundPosition: '150% 50%',
              _hover: {
                backgroundPosition: '100% 200%',
                cursor: 'pointer',
              },
              color: 'white',
              border: 'none',
              borderRadius: 'none',
            }}
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} 
            transition={{ duration: 1, delay: 12 }} 
          >
            <Text color='white' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>Ver más</Text>
            <Image
              src="./arrow-narrow-left-svgrepo-com.svg"
              width='60px'
              height='60px'
              filter='grayscale(300%) brightness(600%)'
              transform="scaleX(-1)"
              marginLeft='15%'
            />
          </MotionButton>
        </Flex>
        <MotionImage 
          src='./servicio3.png' 
          width='20%' 
          height={{base:'200px',md:'300px',lg:'350px'}}
          bg='black' 
          borderRadius='10%' 
          marginTop='20px' 
          initial={{ opacity: 0 }} 
          animate={{ opacity: inView ? 1 : 0 }} 
          transition={{ duration: 1.5, delay: 10 }} 
        />
      </Box>

      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' width='100%'
        bgImage='./pie_main.png'
        borderTop='2px black inset'
        borderBottom='2px black inset'
        boxShadow='0 0 80px rgba(0, 0, 0, 1)'
        mt='50px'
        pb='40px'>
        <Text as='p' 
          marginTop='3%' 
          color='white' 
          fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>
            Listo para transformar tu negocio?
        </Text>
          
        <Image 
          src='flecha_abajo.svg'
          marginTop='1%'
          width='90px'
          height='90px'
          filter='grayscale(300%) brightness(600%)'
        />
        
        <MotionText 
          as='h1' 
          initial={{ opacity: 0 }} 
          animate={{ opacity: inView ? 1 : 0 }} 
          transition={{ duration: 1, delay: 14 }} 
          fontSize = {{ base: '20px', sm: '32px', md: '45px',lg: '58px', xl: '60px' }}
        >
          Trabajemos En Ello
        </MotionText>
      </Box>
    </Box>
  );
}

export default Servicios;
