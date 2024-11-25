import { Box, Text, Flex, Link, Image } from '@chakra-ui/react';
import { motion } from "framer-motion";

const MotionBox = motion(Box)
const Footer = () => {
    return (
        <MotionBox backgroundColor = '#f7f4f2' display="flex" flexDirection="column" justifyContent="center" alignItems="center" id = 'Contacto' 
            initial = {{x: 0, opacity: 0}}
            whileInView = {{ x: 0, opacity: 1}}
            viewport={{once: true}}
            transition = {{duration: 2, ease: 'easeInOut' }}>
            <Flex width="70%" bg="black" padding="1px" marginTop="50px"></Flex>
            
            <Box width="70%" display="flex" flexDirection = {{base:'row', xl:'row', lg:'row', md:'row', sm: 'column'}}justifyContent="space-between" paddingTop='50px'>
                <Flex display="flex" flexDirection="column">
                    <Text as = 'h2' fontSize={{base: '30px', xl: '30px', lg: '29px', md: '25px', sm: '20px'}} paddingBottom='5px'>Forrajería "Los Patos"</Text>
                    <Text fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}}>Entregamos satisfacción!</Text>
                    <Text whiteSpace="nowrap" fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}}>
                        Nos mueve tu{' '}
                        <Box fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} as="span" color="#ff7300" fontWeight="bold">
                            cariño
                        </Box>{' '}
                        y{' '}
                        <Box fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} as="span" color="#ff7300" fontWeight="bold">
                            pasión
                        </Box>{' '}
                        por los animales.
                    </Text>
                    <Text fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} whiteSpace = 'nowrap'>Pedí a domicilio desde tu hogar en {' '} 
                        <Box fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} as="span" color="#ff7300" fontWeight="bold">Santa Rosa</Box>
                        ,{' '} 
                        <Box fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} as="span" color="#ff7300" fontWeight="bold">La Pampa.</Box>
                    </Text>
                </Flex>

                <Flex display = 'flex' flexDirection= 'column'>
                    <Text as = 'h2' fontSize={{base: '30px', xl: '30px', lg: '29px', md: '25px', sm: '20px'}} marginTop = {{base:'0px', xl: '0px', lg: '0px', md: '0px', sm:'10px'}}paddingBottom='5px'>Información de negocio</Text>
                    <Link fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Politica de privacidad</Link>
                    <Link fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Términos y servicios</Link>
                    <Link fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Politica de cancelación y reembolso</Link>
                    <Link fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Politica de envíos</Link>
                </Flex>
            </Box>
            
            <Flex width="70%" bg="black" padding="1px" marginTop="50px" marginBottom = '10px'></Flex>

            <Box width="70%" display="flex" justifyContent="space-between">
                <Flex>
                    <Text fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} fontWeight='bold'>© 2024 Forrajeria "Los Patos"</Text>
                </Flex>
                <Box>
                    <Flex display="flex" flexDirection="column" alignItems='center'>
                        <Text fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} paddingBottom = '10px' fontWeight='bold'>Hablanos</Text>

                        <Flex>
                            <Link>
                                <Image src = '../public/facebook.svg' width = {{base:'35px', xl: '35px', lg: '25px', md: '20px', sm:'15px'}} height= {{base:'35px', xl: '35px', lg: '25px', md: '20px', sm:'20px'}}
                                filter = 'grayscale(100%)' 
                                transition = 'filter 0.2s ease-in-out' 
                                _hover = {{filter: 'grayscale(0%)'}}/>
                            </Link>

                            <Link href="https://wa.me/5491100000000?text=¡Hola!%20Quiero%20hacer%20una%20consulta.%20">
                                <Image src = '../public/whatsapp.svg' width = {{base:'35px', xl: '35px', lg: '25px', md: '20px', sm:'15px'}} height= {{base:'35px', xl: '35px', lg: '25px', md: '20px', sm:'20px'}} 
                                filter = 'grayscale(100%)' 
                                transition = 'filter 0.2s ease-in-out' 
                                _hover = {{filter: 'grayscale(0%)'}}/>
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
                <Box display = 'flex' flexDirection='column' alignContent='end' alignItems='end' textAlign= 'end' width='20%'>
                    <Text fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '11px'}} paddingBottom = '10px' fontWeight='bold'>Aceptamos</Text>
                    <Flex display = 'flex' justifyContent = 'space-between' width = '70%'>
                        <Image src = '../public/visa.svg' width = {{base:'50px', xl: '50px', lg: '40px', md: '30px', sm: '20px'}} height={{base:'50px', xl: '50px', lg: '40px', md: '30px', sm: '20px'}}/>
                        <Image src = '../public/mastercard.svg' width = {{base:'50px', xl: '50px', lg: '40px', md: '30px', sm: '20px'}} height={{base:'50px', xl: '50px', lg: '40px', md: '30px', sm: '20px'}}/>
                        <Image src = '../public/mercadopago.png' width = {{base:'50px', xl: '50px', lg: '40px', md: '30px', sm: '20px'}} height={{base:'50px', xl: '50px', lg: '40px', md: '30px', sm: '20px'}}/>
                    </Flex>
                </Box>
            </Box>
        </MotionBox>
    );
};

export default Footer;
