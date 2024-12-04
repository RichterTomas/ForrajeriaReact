import { Box, Text, Flex, Link, Image } from '@chakra-ui/react';
import { motion } from "framer-motion";

const MotionBox = motion(Box)
const Footer = () => {
    return (
        <MotionBox backgroundColor = '#f7f4f2' display="flex" flexDirection="column" justifyContent="center" alignItems="center" id = 'Contacto' 
            initial = {{x: 0, opacity: 0}}
            whileInView = {{ x: 0, opacity: 1}}
            viewport={{once: true}}
            transition = {{duration: 2, ease: 'easeInOut' }}
            paddingBottom = '10px'>

            {/* Genera una linea negra que va a funcionar como "marco" para el texto que ira en medio */}
            <Flex width="70%" bg="black" padding="1px" marginTop="50px"></Flex>
            

            {/* Contenedor principal del footer */}
            <Box width="70%" display="flex" flexDirection = {{xl:'row', lg:'row', md:'row', sm: 'column', base: 'column'}}justifyContent="space-between" 
            textAlign={{xl: 'left', lg: 'left', md: 'left', sm: 'center', base: 'center'}} 
            paddingTop='50px'>

                {/* Caja contenedora de caracteristicas del negocio */}
                <Flex display="flex" flexDirection="column">
                    <Text as = 'h2' fontSize={{xl: '30px', lg: '29px', md: '25px', sm: '20px', base: '15px'}} paddingBottom='5px'>Forrajería "Los Patos"</Text>
                    <Text fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}}>Entregamos satisfacción!</Text>
                    <Text whiteSpace="nowrap" fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}}>
                        Nos mueve tu{' '}
                        <Box fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} as="span" color="#ff7300" fontWeight="bold">
                            cariño
                        </Box>{' '}
                        y{' '}
                        <Box fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} as="span" color="#ff7300" fontWeight="bold">
                            pasión
                        </Box>{' '}
                        por los animales.
                    </Text>
                    <Text fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} whiteSpace = 'nowrap'>Pedí a domicilio desde tu hogar en {' '} 
                        <Box fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} as="span" color="#ff7300" fontWeight="bold">Santa Rosa</Box>
                        ,{' '} 
                        <Box fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} as="span" color="#ff7300" fontWeight="bold">La Pampa.</Box>
                    </Text>
                </Flex>

                {/* Caja contenedora de la informacion del negocio y sus politicas */}
                <Flex display = 'flex' flexDirection= 'column'>
                    <Text as = 'h2' fontSize={{xl: '30px', lg: '29px', md: '25px', sm: '20px', base: '15px'}} marginTop = {{base:'0px', xl: '0px', lg: '0px', md: '0px', sm:'10px'}}paddingBottom='5px'>Información de negocio</Text>
                    <Link fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Politica de privacidad</Link>
                    <Link fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Términos y servicios</Link>
                    <Link fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Politica de cancelación y reembolso</Link>
                    <Link fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Politica de envíos</Link>
                </Flex>
            </Box>
            
            {/* Linea negra que da cierre al contenido principal del footer */}
            <Flex width="70%" bg="black" padding="1px" marginTop="50px" marginBottom = '10px'></Flex>


            {/* Contenedor secundario del footer  */}
            <Box width="70%" display="flex" justifyContent="space-between">
                <Flex>
                    <Text fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} fontWeight='bold'>© 2024 Forrajeria "Los Patos"</Text>
                </Flex>

                {/* Caja contenedora de los botones de contacto */}
                <Box>
                    <Flex display="flex" flexDirection="column" alignItems='center'>
                        <Text fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}} paddingBottom = '10px' fontWeight='bold'>Hablanos</Text>

                        <Flex>
                            <Link>
                                <Image src = '../public/facebook.svg' width = {{xl: '35px', lg: '25px', md: '20px', sm:'15px', base: '10px'}} height= {{xl: '35px', lg: '25px', md: '20px', sm:'15px', base: '10px'}}
                                transition = 'filter 0.2s ease-in-out' 
                                filter = 'grayscale(100%)' 
                                _hover = {{filter: 'grayscale(0%)'}}/>
                            </Link>

                            <Link href="https://wa.me/5491100000000?text=¡Hola!%20Quiero%20hacer%20una%20consulta.%20">
                                <Image src = '../public/whatsapp.svg' width = {{xl: '35px', lg: '25px', md: '20px', sm:'15px', base: '10px'}} height= {{xl: '35px', lg: '25px', md: '20px', sm:'15px', base: '10px'}}
                                filter = 'grayscale(100%)' 
                                transition = 'filter 0.2s ease-in-out' 
                                _hover = {{filter: 'grayscale(0%)'}}/>
                            </Link>
                        </Flex>
                    </Flex>
                </Box>

                {/* Caja contenedora de los metodos de pago aceptados por el negocio */}
                <Box display = 'flex' flexDirection='column' alignContent='end' alignItems='end' textAlign= 'end' width='20%'>
                    <Text fontSize= {{xl: '16px', lg: '15px', md: '14px', sm: '11px', base: '8px'}}  paddingBottom = '10px' fontWeight='bold'>Aceptamos</Text>
                    <Flex display = 'flex' justifyContent = 'space-between' width = '70%'>
                        <Image src = '../public/visa.svg' width = {{xl: '50px', lg: '40px', md: '30px', sm: '20px', base: '15px'}} height= {{xl: '50px', lg: '40px', md: '30px', sm: '20px', base: '15px'}}/>
                        <Image src = '../public/mastercard.svg' width = {{xl: '50px', lg: '40px', md: '30px', sm: '20px', base: '15px'}} height= {{xl: '50px', lg: '40px', md: '30px', sm: '20px', base: '15px'}}/>
                        <Image src = '../public/mercadopago.png' width = {{xl: '50px', lg: '40px', md: '30px', sm: '20px', base: '15px'}} height= {{xl: '50px', lg: '40px', md: '30px', sm: '20px', base: '15px'}}/>
                    </Flex>
                </Box>
            </Box>
        </MotionBox>
    );
};

export default Footer;
