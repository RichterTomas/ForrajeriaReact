import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const Trabajos = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Box as='section' id='portafolio' 
    bg='rgb(33,33,33)' 
    display='flex' 
    justifyContent='center'
    flexDirection={{base: 'column',md: 'column',lg:'row'}} 
    p='130px 0px 110px 0px'>
      <Flex display='flex' 
      textAlign = {{base:'center', lg:'initial'}}
      alignItems={{base:'center', lg:'initial'}}
      flexDirection='column' 
      >
        <Text as='h2' pb='15px'fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }} mt = '90px'>Mis</Text>
        <Text as='h1' pb='30px' fontWeight='bold' fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}>Trabajos</Text>
        <Button
          sx={{
            letterSpacing: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: {base: '90px'},
            width: {base: '410px',md: '310px',lg: '410px'},
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
            borderRadius: 'none'
          }}
        >
          <Text color='white' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }} >Ver más</Text>
          <Image
            src="./arrow-narrow-left-svgrepo-com.svg"
            width='60px'
            height='60px'
            filter='grayscale(300%) brightness(600%)'
            transform="scaleX(-1)"
            marginLeft='15%'
          />
        </Button>
      </Flex>

      <Box as='div' display='flex' justifyContent={{base:'center'}} width={{base: '93%',lg:'50%'}} mt={{base:'100px'}} ref={ref} >
        <Flex display='flex' flexDirection='column' alignItems='end' position='relative'>
          <MotionImage
            src='diseño1.jpg'
            boxSize='70%'
            marginBottom='5%'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3 }}
          />
          <MotionText
            position="absolute"
            top="48.5%"
            left="48%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}
            fontWeight="bold"
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <Text>► Landing page</Text>
          </MotionText>

          <MotionImage
            src='diseño2.jpg'
            boxSize='70%'
            marginBottom='5%'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3, delay: 0.7 }}
          />
          <MotionText
            position="absolute"
            top="69%"
            left="51%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}
            fontWeight="bold"
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3, delay: 0.7 }}
          >
            <Text>► Interfaz de login</Text>
          </MotionText>

          <MotionImage
            src='diseño3.png'
            boxSize='70%'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3, delay: 2 }}
          />
          <MotionText
            position="absolute"
            top="98.5%"
            left="53%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}
            fontWeight="bold"
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3, delay: 2 }}
          >
            <Text>►Backend biblioteca</Text>
          </MotionText>
        </Flex>

        <Flex display='flex' flexDirection='column' alignItems='center' position='relative'>
          <MotionImage
            src='diseño4.jpg'
            boxSize='70%'
            marginBottom='5%'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3 }}
          />
          <MotionText
            position="absolute"
            top="30.8%"
            left="38%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}
            fontWeight="bold"
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <Text>► Portfolio personal</Text>
          </MotionText>

          <MotionImage
            src='diseño5.jpg'
            boxSize='70%'
            marginBottom='5%'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3, delay: 0.7 }}
          />
          <MotionText
            position="absolute"
            top="64.5%"
            left="43%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}
            fontWeight="bold"
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3, delay: 0.7 }}
          >
            <Text>►Interfaz menú selectivo</Text>
          </MotionText>

          <MotionImage
            src='diseño6.png'
            boxSize='70%'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3, delay: 2 }}
          />
          <MotionText
            position="absolute"
            top="98.5%"
            left="40%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize = {{ base: '6px', sm: '8px', md: '10px',lg: '14px', xl: '18px' }}
            fontWeight="bold"
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 3, delay: 2 }}
          >
            <Text>►Backend financiero</Text>
          </MotionText>
        </Flex>
      </Box>
    </Box>
  );
};

export default Trabajos;
