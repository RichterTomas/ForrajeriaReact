import { Box, Text, Flex, Link, Image } from '@chakra-ui/react';


const Inicio = () => {

return (
    <Box display='flex' flexDirection='column' alignItems='center' backgroundColor = '#f7f4f2'>
        <Flex width='70%' display='flex' justifyContent='space-between' paddingTop = '50px'>
            <Text as = 'h2' fontSize='30px' fontWeight='light'>Menú por mascotas</Text>
            <Link>Ver todo</Link>
        </Flex>

        <Box width='70%' display='flex' justifyContent='space-between' paddingTop = '20px'>
           <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <Image src = '../public/perro.jpg' width='200px' height='200px' borderRadius='200px'/>
                <Link paddingTop = '10px'>Perros</Link>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <Image src = '../public/gato2.png' width='200px' height='200px' borderRadius='200px'/>
                <Link paddingTop = '10px'>Gatos</Link>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <Image src = '../public/gallina.png' width='200px' height='200px' borderRadius='200px'/>
                <Link paddingTop = '10px'>Aves</Link>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <Image src = '../public/conejo.png' width='200px' height='200px' borderRadius='200px'/>
                <Link paddingTop = '10px'>Conejos</Link>
            </Flex>
            
        </Box>


        <Box width='70%' display='flex'  flexDirection = 'column' justifyContent='space-between' paddingTop = '100px'>
            <Text as = 'h2' fontSize= '30px' fontWeight='light'>Distribuidores de...</Text>

            <Box width='100%' display='flex' flexDirection='column' paddingTop = '20px'>
                <Flex width='100%' display='flex' flexDirection='row'>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white'>
                        <Image src = '../public/sabrositos.png' />
                    </Flex>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white'>
                        <Image src = '../public/sabrositos.png' />
                    </Flex>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white'>
                        <Image src = '../public/sabrositos.png' />
                    </Flex>
                </Flex>

                <Flex width='100%' display='flex' flexDirection='row' >
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white'>
                        <Image src = '../public/sabrositos.png' />
                    </Flex>
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white'>
                        <Image src = '../public/sabrositos.png' />
                    </Flex>
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' >
                        <Image src = '../public/sabrositos.png' />
                    </Flex>
                </Flex>
            </Box>

        </Box>
    </Box>




)
}

export default Inicio;