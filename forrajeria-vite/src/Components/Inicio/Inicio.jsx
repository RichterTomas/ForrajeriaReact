import { Box, Text, Flex, Link, Image } from '@chakra-ui/react';
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionText = motion(Text)
const MotionLink = motion(Link)
const MotionImage = motion(Image)
const MotionBox = motion(Box)

const Inicio = () => {

return (
    <Box overflow='hidden' display='flex' flexDirection='column' alignItems='center' backgroundColor = '#f7f4f2' id = 'Inicio'>
        <MotionFlex width='70%' display='flex' justifyContent='space-between' paddingTop = '70px'>

            <MotionText as = 'h2' fontSize='30px' fontWeight='light'
            initial = {{x: '-100vw', opacity: 0}}
            animate = {{ x: 0, opacity: 1}}
            transition = {{duration: 1.5, ease: 'easeInOut' }}>Menú por mascotas</MotionText>

            <MotionLink 
            transition = 'all 0.2s ease-in-out' 
            _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}
            initial = {{x: '100vw', opacity: 0}}
            animate = {{ x: 0, opacity: 1}}
            transition = {{duration: 1.5, ease: 'easeInOut' }}
            >Ver todo</MotionLink>
        </MotionFlex>

        <Box width='70%' display='flex' justifyContent='space-between' paddingTop = '20px' id = 'mascotas'>
           <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <MotionImage src = '../public/perro.jpg' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}} width='200px' height='200px' borderRadius='200px'/>
                <MotionLink paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}
                  initial = {{x: '-100vw', opacity: 0}}
                  animate = {{ x: 0, opacity: 1}}
                  transition = {{duration: 1.5, ease: 'easeInOut' }}>Perros</MotionLink>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <MotionImage src = '../public/gato2.png' width='200px' height='200px' borderRadius='200px' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                <MotionLink paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}  initial = {{x: '-100vw', opacity: 0}}
                animate = {{ x: 0, opacity: 1}}
                transition = {{duration: 1.5, ease: 'easeInOut' }}>Gatos</MotionLink>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <MotionImage src = '../public/gallina.png' width='200px' height='200px' borderRadius='200px' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                <MotionLink paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}
                initial = {{x: '-100vw', opacity: 0}}
                animate = {{ x: 0, opacity: 1}}
                transition = {{duration: 1.5, ease: 'easeInOut' }}>Aves</MotionLink>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <MotionImage src = '../public/conejo.png' width='200px' height='200px' borderRadius='200px' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                <MotionLink paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}
                initial = {{x: '-100vw', opacity: 0}}
                animate = {{ x: 0, opacity: 1}}
                transition = {{duration: 1.5, ease: 'easeInOut' }}>Conejos</MotionLink>
            </Flex>
            
        </Box>


        <Box width='70%' display='flex'  flexDirection = 'column' justifyContent='space-between' paddingTop = '100px' id ='distribuidores'>
            <MotionText as = 'h2' fontSize= '30px' fontWeight='light'
              initial = {{x: '-100vw', opacity: 0}}
              animate = {{ x: 0, opacity: 1}}
              transition = {{duration: 1.5, ease: 'easeInOut' }}>Distribuidores de...</MotionText>

            <Box width='100%' display='flex' flexDirection='column' paddingTop = '20px'>
                <Flex width='100%' display='flex' flexDirection='row'>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/Estampa.png' width='70%' height='45%' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                    </Flex>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/kongo.png' width='70%' height='50%' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                    </Flex>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/pedigree.jpg' width='70%' height='70%' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                    </Flex>
                </Flex>

                <Flex width='100%' display='flex' flexDirection='row' >
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/purina.png' width='70%' height='70%' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}} />
                    </Flex>
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/royal canin.png' width='70%' height='40%' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}} />
                    </Flex>
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/sabrositos.png' width='70%' height='80%' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                    </Flex>
                </Flex>
            </Box>

        </Box>

        <MotionBox width='70%' paddingTop = '100px' display = 'flex' id = 'politicas' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}>
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

        </MotionBox>

        <Flex backgroundImage= '../public/image.png' width= '100%' height='50vh' display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginTop = '100px' id = 'imagen'>
            <MotionText color = 'white' fontWeight='bolder' fontSize='30px' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}>Realiza tu consulta con nosotros!</MotionText>
            <MotionLink color = '#ff7300' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}>Click aqui</MotionLink>
        </Flex>
    </Box>

)
}

export default Inicio;