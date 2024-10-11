import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InicioRedes = () => {
  const { ref, inView } = useInView({
    threshold: 0.6, 
    triggerOnce: true, 
  });

  return (
    <Box as='section' display='flex' bg='rgb(33,33,33)' justifyContent={{base: 'space-evenly', md:'space-around'}} paddingBottom='80px' ref={ref}>
      <Box as='div' display='flex' width='43%'>
        <Flex display='flex' flexDirection='column' paddingRight='60px'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} 
            transition={{ duration: 2 }}
          >
            <Text as='h2' marginBottom='15px' fontWeight='bold' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>
              CONTACTO
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} 
            transition={{ duration: 2 }}
          >
            <Text as='a' color='white' 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tomaspappalardo94@gmail.com&su=Consulta&body=Hola Tomás, me gustaría ponerme en contacto contigo."
            target = '_blank'
            fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>
              tomaspappalardo94@gmail.com
            </Text>
          </motion.div>
        </Flex>

        <Flex display='flex' flexDirection='column'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} 
            transition={{ duration: 2 }}
          >
            <Text as='h2' marginBottom='15px' fontWeight='bold' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>
              SIGUEME
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
          >
            <Flex>
              <Text as='a' href = 'https://www.instagram.com/richter_tomy' color='white' width= {{base:'60px', md: '80px', lg: '100px'}} fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>
              Instagram |
              </Text>
              <Text as='a' href = 'https://ar.linkedin.com/' textDecoration='none' color='white'fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}>
              LinkedIn
              </Text>
            </Flex>
          </motion.div>
        </Flex>
      </Box>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }} 
        transition={{ duration: 4 }}
      >
        <Image 
          src='./reshot-icon-down-arrow-VUE5WQFCX2.svg' 
          width='60px'
          height='60px'
          display = {{base:'none', md: 'block'}}
          maxW={{md: '80%',lg: '100%'}}
          filter='grayscale(300%) brightness(600%)'
        />
      </motion.div>
    </Box>
  );
};

export default InicioRedes;
