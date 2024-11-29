import { Box, Text, Flex, Link, Image, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionLink = motion(Link);
const MotionImage = motion(Image);
const MotionBox = motion(Box);
const whatsappLink = "https://wa.me/5491100000000?text=¡Hola!%20Quiero%20hacer%20una%20consulta.%20";

const Inicio = () => {
    // Defino las imagenes que se van a usar para cada tamaño de pantalla
    const images = useBreakpointValue({
        xl: "./public/image.png",
        lg: "./public/imagenPie.jpg",
        sm: "./public/imagenPie2.jpg",
        base: "./public/imagenPie3.jpg",
    });

    return (
        <Box overflow='hidden' display='flex' flexDirection='column' alignItems='center' backgroundColor='#f7f4f2' id='Inicio'>
            {/* Boton de contacto whatsapp */}
            <Link
                href="https://wa.me/2954529859?text=¡Hola!%20Estoy%20interesado%20en%20más%20información."
                isExternal
                position="fixed"
                bottom="10px"
                right="20px"
                zIndex="1000"
            >
                <IconButton
                    icon={<FaWhatsapp />}
                    aria-label="WhatsApp Chat"
                    colorScheme="green"
                    size="lg"
                    isRound
                    boxShadow="lg"
                    transition="all 0.3s"
                    _hover={{ transform: "scale(1.1)" }}
                />
            </Link>

            {/* Contenedores del menu dividido por mascotas */}
            <MotionFlex width='70%' display='flex' justifyContent='space-between' paddingTop='70px'>
                <MotionText
                    as='h2'
                    fontSize={{ base: '20px', xl: '30px', lg: '29px', md: '27px', sm: '25px' }}
                    fontWeight='light'
                    initial={{ x: '0', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    Menú por mascotas
                </MotionText>

                <MotionLink
                    transition='all 0.2s ease-in-out'
                    paddingTop='10px'
                    fontSize={{ base: '13px', xl: '16px', lg: '15px', md: '14px', sm: '13px' }}
                    _hover={{ color: "#ff7300", textDecoration: 'none', fontSize: "17px", fontWeight: 'bold' }}
                    initial={{ x: '0', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    Ver todo
                </MotionLink>
            </MotionFlex>

            <Box width='70%' display='flex' justifyContent='space-between' paddingTop='20px' id='mascotas'>
                <Flex display='flex' flexDirection='column' alignItems='center'>
                    <MotionImage
                        src='../public/perro.jpg'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2.5, ease: 'easeInOut' }}
                        width={{ base: '70px', xl: '200px', lg: '170px', md: '130px', sm: '100px' }}
                        height={{ base: '70px', xl: '200px', lg: '170px', md: '130px', sm: '100px' }}
                        borderRadius='200px'
                    />
                    <MotionLink
                        fontSize={{ base: '13px', xl: '16px', lg: '15px', md: '14px', sm: '13px' }}
                        paddingTop='10px'
                        transition='all 0.2s ease-in-out'
                        _hover={{ color: "#ff7300", textDecoration: 'none', fontWeight: 'bold' }}
                        initial={{ x: '0', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    >
                        Perros
                    </MotionLink>
                </Flex>
                <Flex display='flex' flexDirection='column' alignItems='center'>
                    <MotionImage
                        src='../public/gato2.png'
                        width={{ base: '70px', xl: '200px', lg: '170px', md: '130px', sm: '100px' }}
                        height={{ base: '70px', xl: '200px', lg: '170px', md: '130px', sm: '100px' }}
                        borderRadius='200px'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2.5, ease: 'easeInOut' }}
                    />
                    <MotionLink
                        fontSize={{ base: '13px', xl: '16px', lg: '15px', md: '14px', sm: '13px' }}
                        paddingTop='10px'
                        transition='all 0.2s ease-in-out'
                        _hover={{ color: "#ff7300", textDecoration: 'none', fontSize: "17px", fontWeight: 'bold' }}
                        initial={{ x: '0', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    >
                        Gatos
                    </MotionLink>
                </Flex>
                {/* Continúa de forma similar para los demás Flex */}
            </Box>

            
        </Box>
    );
};

export default Inicio;
