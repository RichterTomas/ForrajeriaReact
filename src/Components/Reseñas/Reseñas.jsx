import { Box, Text, Flex, Avatar, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Reseñas.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const MotionText = motion(Text);
const MotionImage = motion(Image);

const Reseñas = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <Box id = 'reseñas' bg='rgb(12,12,12)' 
    display='flex' 
    flexDirection={{base:'column-reverse',lg:'row'}} 
    justifyContent='center' 
    alignContent= 'center'
    textAlign='center'
    p='6' 
    height={{base:'130vh', lg:'100vh'}}>
      <Box className='carrousel' width={{base:'50%',lg:'23%'}} mx='auto' alignContent='center'>
        <Slider {...settings}>
          <Box
            p='6'
            bg='rgb(37,37,37)' 
            borderRadius='10%'
            boxShadow='lg'
            display='flex'
            flexDirection='column'
            alignItems='center'
            textAlign='center'
            justifyContent='center'
            p={{base: '90px 0px',lg:'150px 0px'}}
          >
            <Text fontSize='lg' mb='4' color='white' marginBottom='50px'>
              "Excelente servicio y atención. ¡Estoy muy satisfecho con el resultado!"
            </Text>
            <Avatar name='Cliente 1' src='Tiago_Diaz.jpeg' className='pr' borderRadius='45%'/>
            <Text fontWeight='bold' color='white' mt='2'>
              Tiago Díaz
            </Text>
            <Text fontWeight='lighter' color='white' mt='2'>
              Emprendedor en desarrollo tecnológico
            </Text>
          </Box>

          <Box
            p='6'
            bg='rgb(37,37,37)' 
            borderRadius='10%'
            boxShadow='lg'
            display='flex'
            flexDirection='column'
            alignItems='center'
            textAlign='center'
            p={{base: '90px 0px',lg:'150px 0px'}}
          >
            <Text fontSize='lg' mb='4' color='white' marginBottom='50px'>
              "Un producto de alta calidad y un equipo de soporte muy profesional."
            </Text>
            <Avatar name='Cliente 2' src='santi_garcia.jpeg' className='pr' borderRadius='50%' />
            <Text fontWeight='bold' color='white' mt='2'>
              Santiago Garcia
            </Text>
            <Text fontWeight='lighter' color='white' mt='2'>
              Desarrollador de software
            </Text>
          </Box>

          <Box
            p='6'
            bg='rgb(37,37,37)'
            borderRadius='10%'
            boxShadow='lg'
            display='flex'
            flexDirection='column'
            alignItems='center'
            textAlign='center'
            p={{base: '90px 0px',lg:'150px 0px'}}
          >
            <Text fontSize='lg' mb='4' color='white' marginBottom='50px'>
              "Definitivamente recomendaría sus servicios a otras personas."
            </Text>
            <Avatar name='Cliente 3' src='lucas_garcia.jpeg' className='pr' borderRadius='50%' />
            <Text fontWeight='bold' color='white' mt='2'>
              Lucas Garcia
            </Text>
            <Text fontWeight='lighter' color='white' mt='2'>
              Desarrollador web
            </Text>
          </Box>
        </Slider>
      </Box>

      <Flex ref={ref} display='flex' 
      flexDirection='column' 
      alignItems='center' 
      ml={{base: '0',lg:'6'}} 
      width={{base: '100%',lg:'50%'}} 
      p='6' 
      position='relative' 
      
     
      height={{base:'50vh', lg: '90vh'}}
      >
        <MotionText 
          as='h2' 
          fontWeight='lighter' 
          fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}
          color='white' 
          position='absolute' 
          top={{base:'15%',lg:'30%'}}
          left= {{lg:'50.5%'}}
          initial={{ x: 100, opacity: 0 }} 
          animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} 
          transition={{ duration: 3 }}
        >
          Ellos
        </MotionText>
        <MotionText 
          as='h1' 
          color='white' 
          position='absolute' 
          top={{base: '30%',lg:'40%'}} 
          fontWeight='bold' 
          fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}
          initial={{ x: 100, opacity: 0 }} 
          animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} 
          transition={{ duration: 3 }}
        >
          Han dicho
        </MotionText>
        <MotionImage 
          src="./arrow-narrow-left-svgrepo-com.svg" 
          width='100px' 
          height='100px'
          position='absolute' 
          top={{base: '50%',lg:'55%'}} 
          left={{lg:'53%'}}
          initial={{ opacity: 0 }} 
          animate={inView ? { opacity: 1 } : { opacity: 0 }} 
          transition={{ duration: 4 }}
          transform={{base: 'rotate(270deg)', lg: 'rotate(0deg)' }}
        />
      </Flex>
    </Box>
  );
};

export default Reseñas;
