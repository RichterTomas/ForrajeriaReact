import { Box, Text, Flex, Link, Image } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" id = 'Contacto'>
            <Flex width="70%" bg="black" padding="1px" marginTop="50px"></Flex>
            
            <Box width="70%" display="flex" justifyContent="space-between" paddingTop='50px'>
                <Flex display="flex" flexDirection="column">
                    <Text as = 'h2' fontSize='30px' paddingBottom='5px'>Forrajería "Los Patos"</Text>
                    <Text>Entregamos satisfacción!</Text>
                    <Text whiteSpace="nowrap">
                        Nos mueve tu{' '}
                        <Box as="span" color="#ff7300" fontWeight="bold">
                            cariño
                        </Box>{' '}
                        y{' '}
                        <Box as="span" color="#ff7300" fontWeight="bold">
                            pasión
                        </Box>{' '}
                        por los animales.
                    </Text>
                    <Text whiteSpace = 'nowrap'>Pedí a domicilio desde tu hogar en {' '} 
                        <Box as="span" color="#ff7300" fontWeight="bold">Santa Rosa</Box>
                        ,{' '} 
                        <Box as="span" color="#ff7300" fontWeight="bold">La Pampa.</Box>
                    </Text>
                </Flex>

                <Flex display = 'flex' flexDirection= 'column'>
                    <Text as = 'h2' fontSize='30px' paddingBottom='5px'>Información de negocio</Text>
                    <Link _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Politica de privacidad</Link>
                    <Link _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Términos y servicios</Link>
                    <Link _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Politica de cancelación y reembolso</Link>
                    <Link _hover = {{color: "#ff7300", textDecoration: 'none', transition: '0.2s ease-in-out'}}>Politica de envíos</Link>
                </Flex>
            </Box>
            
            <Flex width="70%" bg="black" padding="1px" marginTop="50px" marginBottom = '10px'></Flex>

            <Box width="70%" display="flex" justifyContent="space-between">
                <Flex>
                    <Text fontWeight='bold'>© 2024 Forrajeria "Los Patos"</Text>
                </Flex>
                <Box>
                    <Flex display="flex" flexDirection="column" alignItems='center'>
                        <Text paddingBottom = '10px' fontWeight='bold'>Hablanos</Text>

                        <Flex>
                            <Link>
                                <Image src = '../public/facebook.svg' width = '35px' height='35px' 
                                filter = 'grayscale(100%)' 
                                transition = 'filter 0.2s ease-in-out' 
                                _hover = {{filter: 'grayscale(0%)'}}/>
                            </Link>

                            <Link>
                                <Image src = '../public/whatsapp.svg' width = '35px' height='35px' 
                                filter = 'grayscale(100%)' 
                                transition = 'filter 0.2s ease-in-out' 
                                _hover = {{filter: 'grayscale(0%)'}}/>
                            </Link>
                        </Flex>
                    </Flex>
                </Box>
                <Box display = 'flex' flexDirection='column' alignContent='end' alignItems='end' textAlign= 'end' width='20%'>
                    <Text paddingBottom = '10px' fontWeight='bold'>Aceptamos</Text>
                    <Flex display = 'flex' justifyContent = 'space-between' width = '70%'>
                        <Image src = '../public/visa.svg' width = '50px' height='50px'/>
                        <Image src = '../public/mastercard.svg' width = '50px' height='50px'/>
                        <Image src = '../public/mercadopago.png' width = '50px' height='50px'/>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
