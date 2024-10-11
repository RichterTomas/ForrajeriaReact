import { Box, Flex, Text, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionBox = motion(Box);

const Footer = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <Box id='contacto' 
        ref={ref} 
        bg='rgb(12,12,12)' 
        display='flex' 
        flexDirection = {{base: 'column',md:'row'}} 
        justifyContent={{md:'center'}} 
        alignItems={{base:'center'}} 
        padding='120px 0px'>
            <Flex display='flex' flexDirection='column' width={{base: '80%',md:'41.5%'}} justifyContent='space-around' >
                <MotionImage 
                    src='./marca_logo.svg' 
                    width='60px'
                    display = {{base:'none',md: 'block'}} 
                    height='60px' 
                    filter='grayscale(300%) brightness(600%)' 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: inView ? 1 : 0 }} 
                    transition={{ duration: 2 }} 
                />
                <MotionText 
                    as='p' 
                    width={{base: '100%',md:'80%'}} 
                    color='white' 
                    fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }}
                    mt = '3%'
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: inView ? 1 : 0 }} 
                    transition={{ duration: 2 }} 
                    textAlign={{base:'center', md: 'initial'}}

                    
                >
                    Comprometido a superar las expectativas en el desarrollo fullstack. Como estudiante de Ingeniería en Sistemas, estoy enfocado en aprender y crecer en el mundo del desarrollo. Especializado en crear experiencias inmersivas e interfaces visualmente impresionantes que elevan las marcas y garantizan la participación del usuario. Te invito a explorar mi portafolio y ser parte de este emocionante viaje hacia un diseño intuitivo y experiencias de usuario encantadoras.
                </MotionText>
            </Flex>

            <MotionBox 
                as='div' 
                bg='rgb(255, 255, 255)' 
                marginTop='20px'
                marginBottom='20px' 
                width={{base:'90%',md:'3px'}} 
                height={{base:'3px',md:'240px'}} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: inView ? 1 : 0 }} 
                transition={{ duration: 2 }} 
            />

            <Flex display='flex' flexDirection='column' justifyContent='space-evenly' width= {{base:'80%',md:'30%'}} textAlign={{base: 'center', md:'end'}} 
            alignItems={{base:'center', md: 'end'}}>
                <MotionText 
                    as='h1' 
                    fontSize = {{ base: '23px', sm: '31px', md: '39px',lg: '47px', xl: '55px' }}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: inView ? 1 : 0 }} 
                    transition={{ duration: 2 }} 
                >
                    Contacto
                </MotionText>
                <MotionText color='white' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 2 }}>
                    <span>Direccion:</span> Córdoba, Argentina.
                </MotionText>
                <MotionText color='white' fontSize = {{ base: '10px', sm: '12px', md: '14px',lg: '16px', xl: '18px' }} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 2 }}>
                    <span>E</span>-mail: tomaspappalardo94@gmail.com
                </MotionText>
                <Flex display='flex' justifyContent='end' marginTop='3%'>
                    <Link href="https://github.com/RichterTomas" isExternal rel="noopener noreferrer">
                        <MotionImage 
                            src='./github-142-svgrepo-com.svg' 
                            width='50px' 
                            height='30px' 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: inView ? 1 : 0 }} 
                            transition={{ duration: 2 }} 
                        />
                    </Link>
                    <Link href="https://ar.linkedin.com/" isExternal rel="noopener noreferrer">
                        <MotionImage 
                            src='./linkedin-svgrepo-com.svg' 
                            width='50px' 
                            height='30px' 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: inView ? 1 : 0 }} 
                            transition={{ duration: 2 }} 
                        />
                    </Link>
                    <Link href="https://www.instagram.com/richter_tomy" isExternal rel="noopener noreferrer">
                        <MotionImage 
                            src='./instagram-logo-svgrepo-com.svg' 
                            width='50px' 
                            height='30px' 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: inView ? 1 : 0 }} 
                            transition={{ duration: 2 }} 
                        />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Footer;
