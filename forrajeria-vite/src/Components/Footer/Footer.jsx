import { Box, Text, Flex } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Flex width="70%" bg="black" padding="1px" marginTop="50px"></Flex>
            
            <Box width="70%" display="flex" justifyContent="space-between" paddingTop='50px'>
                <Flex display="flex" flexDirection="column">
                    <Text as = 'h2' fontSize='30px'>Forrajería "Los Patos"</Text>
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

                <Flex>
                    <Text>Hola</Text>
                </Flex>
            </Box>
            
            <Flex width="70%" bg="black" padding="1px" marginTop="50px"></Flex>

            <Box width="70%" display="flex" justifyContent="space-between">
                <Flex>
                    <Text>Columna 1</Text>
                </Flex>
                <Box>
                    <Flex display="flex" flexDirection="column">
                        <Text>Columna 2</Text>
                        <Flex>
                            <Text>Logo</Text>
                            <Text>Logo</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Text>Columna 3</Text>
                    <Flex>
                        <Text>Logo</Text>
                        <Text>Logo</Text>
                        <Text>Logo</Text>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
