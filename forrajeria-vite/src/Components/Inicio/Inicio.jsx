import { Box, Text, Flex, Link, Image } from '@chakra-ui/react';


const Inicio = () => {

return (
    <Box display='flex' flexDirection='column' alignItems='center' backgroundColor = '#f7f4f2' id = 'Inicio'>
        <Flex width='70%' display='flex' justifyContent='space-between' paddingTop = '70px'>
            <Text as = 'h2' fontSize='30px' fontWeight='light'>Menú por mascotas</Text>
            <Link transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}>Ver todo</Link>
        </Flex>

        <Box width='70%' display='flex' justifyContent='space-between' paddingTop = '20px' id = 'mascotas'>
           <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <Image src = '../public/perro.jpg' width='200px' height='200px' borderRadius='200px'/>
                <Link paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}>Perros</Link>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <Image src = '../public/gato2.png' width='200px' height='200px' borderRadius='200px'/>
                <Link paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}>Gatos</Link>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <Image src = '../public/gallina.png' width='200px' height='200px' borderRadius='200px'/>
                <Link paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}>Aves</Link>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <Image src = '../public/conejo.png' width='200px' height='200px' borderRadius='200px'/>
                <Link paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}>Conejos</Link>
            </Flex>
            
        </Box>


        <Box width='70%' display='flex'  flexDirection = 'column' justifyContent='space-between' paddingTop = '100px' id ='distribuidores'>
            <Text as = 'h2' fontSize= '30px' fontWeight='light'>Distribuidores de...</Text>

            <Box width='100%' display='flex' flexDirection='column' paddingTop = '20px'>
                <Flex width='100%' display='flex' flexDirection='row'>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <Image src = '../public/Estampa.png' width='70%' height='40%'/>
                    </Flex>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <Image src = '../public/kongo.png' width='70%' height='40%'/>
                    </Flex>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <Image src = '../public/pedigree.jpg' width='70%' height='60%'/>
                    </Flex>
                </Flex>

                <Flex width='100%' display='flex' flexDirection='row' >
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <Image src = '../public/purina.png' width='70%' height='70%' />
                    </Flex>
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <Image src = '../public/royal canin.png' width='70%' height='40%' />
                    </Flex>
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <Image src = '../public/sabrositos.png' width='70%' height='80%' />
                    </Flex>
                </Flex>
            </Box>

        </Box>

        <Box width='70%' paddingTop = '100px' display = 'flex' id = 'politicas'>
            <Box display='flex' width= '25%'>
                <Image src='../public/envio.svg' width= '50px' height = '50px'/>
                <Flex display='flex' flexDirection='column' paddingLeft = '10px'>
                    <Text fontWeight='bold'>Envios en Santa Rosa</Text>
                    <Text width= '75%'>Recibe tu pedido gratis en menos de 48 hs.</Text>
                </Flex>
            </Box>

            <Box display='flex' width= '25%'>
                <Image src='../public/politica.svg' width= '50px' height = '50px'/>
                <Flex display='flex' flexDirection='column' paddingLeft = '10px'>
                    <Text fontWeight='bold'>Politica de satisfacción</Text>
                    <Text width= '70%'>Si tienes un problema, puedes contactarnos.</Text>
                </Flex>
            </Box>

            <Box display='flex' width= '25%'>
                <Image src='../public/atencion.svg' width= '50px' height = '50px'/>
                <Flex display='flex' flexDirection='column' paddingLeft = '10px'>
                    <Text fontWeight='bold'>Atención virtual</Text>
                    <Text width= '75%'>Sistema de atención virtual, disponible 24 hs.</Text>
                </Flex>
            </Box>

            <Box display='flex' width = '25%'>
                <Image src='../public/pago.svg' width= '50px' height = '50px'/>
                <Flex display='flex' flexDirection='column' paddingLeft = '10px'>
                    <Text fontWeight='bold'>Paga al recibir</Text>
                    <Text width= '75%'>Selecciona tu metodo de pago preferido.</Text>
                </Flex>
            </Box>

        </Box>

        <Flex backgroundImage= '../public/image.png' width= '100%' height='50vh' display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginTop = '100px' id = 'imagen'>
        <Text color = 'white' fontWeight='bolder' fontSize='30px'>Realiza tu consulta con nosotros!</Text>
        <Link color = '#ff7300'>Click aqui</Link>
        </Flex>
    </Box>



)
}

export default Inicio;