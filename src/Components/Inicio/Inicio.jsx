import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Inicio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      as='section'
      id='inicio' 
      bg='rgb(33,33,33)'
      display='flex'
      justifyContent={{base:'center',sm:'center',md: 'space-evenly',lg:'space-evenly'}} 
      alignContent={{base:'space-evenly',sm: 'space-evenly'}}
      alignItems={{base: 'center', sm:'center', md: 'initial', lg:'initial'}}
      p='130px 0px 120px 0px'
      minH = {{base:'90vh', md:'auto'}}
    >
      <Flex as='div' 
      width={{ base: '80%', md: '38%' }}
      display='flex' 
      flexDirection='column' 
      justifyContent={{base:'center',sm:'space-evenly',md: 'space-evenly',lg:'space-evenly'}} 
      textAlign={{base: 'center', sm:'center', md: 'initial', lg:'initial'}}
      alignItems={{base:'center',md:'initial'}}
      minH={{ base: '50vh', md: 'auto' }}
      p={{ base: '10px', md: '0' }}
      ref={ref}
      >

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
          <Text as='h2' 
            fontSize = {{  base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}
          >
            Tomás Richter
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
          <Text as='h1' fontWeight='semibold'
          fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}
          >
            Desarrollador de software
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
          <Text as='p' color='white' justifyContent='initial' paddingBottom='30px'
          fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}
          >
            Adentrate en un universo de desarrollo fullstack, donde los requerimientos de usuario son el centro. Explora mi portafolio para descubrir la fusión de diseños intuitivos con sólidas soluciones backend para crear experiencias digitales satisfactorias y transformar ideas en potentes soluciones web o aplicaciones que destacan en el panorama digital.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
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
              borderRadius: 'none',
            }}
          >
            <Text color='white' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>
              CONTRATAME
              </Text>
            <Image
              src="./arrow-narrow-left-svgrepo-com.svg"
              width='60px'
              height='60px'
              filter='grayscale(300%) brightness(600%)'
              transform="scaleX(-1)"
              marginLeft='15%'
            />
          </Button>
        </motion.div> 
      </Flex>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 4 }}
      >
        <Image src='./imgperfil.png' 
        display = {{base:'none',sm:'none',md:'block',lg:'block'}}
        maxW={{md:'80%', lg:'100%'}}/>
      </motion.div>
    </Box>
  );
};

export default Inicio;
