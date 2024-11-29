import { Box, Text, Flex, Link, Image, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const MotionFlex = motion(Flex);
const MotionText = motion(Text)
const MotionLink = motion(Link)
const MotionImage = motion(Image)
const MotionBox = motion(Box)
const whatsappLink = "https://wa.me/5491100000000?text=¡Hola!%20Quiero%20hacer%20una%20consulta.%20";


const Inicio = () => {

    // Defino las imagenes que se van a usar para cada tamaño de pantalla
    const images = useBreakpointValue({
        xl: "./public/image.png",
        lg: "./public/imagenPie.jpg",
        sm: "./public/imagenPie2.jpg",
        base: "./public/imagenPie3.jpg",
    })

return (
    <Box overflow='hidden' display='flex' flexDirection='column' alignItems='center' backgroundColor = '#f7f4f2' id = 'Inicio'>
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
        <MotionFlex width='70%' display='flex' justifyContent='space-between' paddingTop = '70px'>

            <MotionText as = 'h2' fontSize={{base: '30px', xl: '30px', lg: '29px', md: '27px', sm: '25px'}} fontWeight='light'
            initial = {{x: '0', opacity: 0}}
            animate = {{ x: 0, opacity: 1}}
            transition = {{duration: 2, ease: 'easeInOut'}}>Menú por mascotas</MotionText>

            <MotionLink 
            transition = 'all 0.2s ease-in-out' 
            paddingTop='10px'
            fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '13px'}}
            _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}
            initial = {{x: '0', opacity: 0}}
            animate = {{ x: 0, opacity: 1}}
            transition = {{duration: 2, ease: 'easeInOut' }}
            >Ver todo</MotionLink>
        </MotionFlex>

        <Box width= '70%' display='flex' justifyContent='space-between' paddingTop = '20px' id = 'mascotas'>
           <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <MotionImage src = '../public/perro.jpg' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}} 
                width={{base:'200px', xl:'200px', lg:'170px', md: '130px', sm: '100px'}} height={{base:'200px', xl:'200px', lg:'170px', md: '130px', sm: '100px', }} borderRadius='200px'/>
                <MotionLink fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '13px'}} paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontWeight: 'bold'}}
                  initial = {{x: '0', opacity: 0}}
                  animate = {{ x: 0, opacity: 1}}
                  transition = {{duration: 2, ease: 'easeInOut' }}>Perros</MotionLink>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <MotionImage src = '../public/gato2.png' width={{base:'200px', xl:'200px', lg:'170px', md: '130px', sm: '100px'}} height={{base:'200px', xl:'200px', lg:'170px', md: '130px', sm: '100px', }} borderRadius='200px' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                <MotionLink fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '13px'}} paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}  initial = {{x: '0', opacity: 0}}
                animate = {{ x: 0, opacity: 1}}
                transition = {{duration: 2, ease: 'easeInOut' }}>Gatos</MotionLink>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <MotionImage src = '../public/gallina.png' width={{base:'200px', xl:'200px', lg:'170px', md: '130px', sm: '100px'}} height={{base:'200px', xl:'200px', lg:'170px', md: '130px', sm: '100px', }} borderRadius='200px' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                <MotionLink fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '13px'}} paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}
                initial = {{x: '0', opacity: 0}}
                animate = {{ x: 0, opacity: 1}}
                transition = {{duration: 2, ease: 'easeInOut' }}>Aves</MotionLink>
            </Flex>

            <Flex display='flex' flexDirection= 'column' alignItems='center'>
                <MotionImage src = '../public/conejo.png' width={{base:'200px', xl:'200px', lg:'170px', md: '130px', sm: '100px'}} height={{base:'200px', xl:'200px', lg:'170px', md: '130px', sm: '100px', }} borderRadius='200px' initial = {{opacity: 0}} animate = {{opacity: 1}} transition = {{duration: 2.5, ease: 'easeInOut'}}/>
                <MotionLink fontSize= {{base:'16px', xl: '16px', lg: '15px', md: '14px', sm: '13px'}} paddingTop = '10px' transition = 'all 0.2s ease-in-out' _hover = {{color: "#ff7300", textDecoration: 'none', fontSize:"17px", fontWeight: 'bold'}}
                initial = {{x: '0', opacity: 0}}
                animate = {{ x: 0, opacity: 1}}
                transition = {{duration: 2, ease: 'easeInOut' }}>Conejos</MotionLink>
            </Flex>
            
        </Box>


        {/* Contenedores de los distribuidores con los que trabaja el negocio */}
        <Box width='70%' display='flex'  flexDirection = 'column' justifyContent='space-between' paddingTop = '100px' id ='distribuidores'>
            <MotionText as = 'h2' fontSize={{base: '30px', xl: '30px', lg: '29px', md: '27px', sm: '25px'}} fontWeight='light'
              initial = {{x: 0, opacity: 0}}
              whileInView = {{ x: 0, opacity: 1}}
              viewport={{once: true}}
              transition = {{duration: 2, ease: 'easeInOut' }}>Distribuidores de...</MotionText>

            <Box width='100%' display='flex' flexDirection='column' paddingTop = '20px'>
                <Flex width='100%' display='flex' flexDirection='row'>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/Estampa.png' width='80%' height='60%' 
                        initial = {{x: 0, opacity: 0}}
                        whileInView = {{ x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition = {{duration: 2, ease: 'easeInOut' }}/>
                    </Flex>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/kongo.png' width='80%' height='70%' 
                        initial = {{x: 0, opacity: 0}}
                        whileInView = {{ x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition = {{duration: 2, ease: 'easeInOut' }}/>
                    </Flex>
                    <Flex width='33.3333%' justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/pedigree.jpg' width='70%' height='80%' 
                        initial = {{x: 0, opacity: 0}}
                        whileInView = {{ x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition = {{duration: 2, ease: 'easeInOut' }}/>
                    </Flex>
                </Flex>

                <Flex width='100%' display='flex' flexDirection='row' >
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/purina.png' width='80%' height='100%' 
                        initial = {{x: 0, opacity: 0}}
                        whileInView = {{ x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition = {{duration: 2, ease: 'easeInOut' }} />
                    </Flex>
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/royal canin.png' width='70%' height='50%' 
                        initial = {{x: 0, opacity: 0}}
                        whileInView = {{ x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition = {{duration: 2, ease: 'easeInOut' }} />
                    </Flex>
                    <Flex width='33.3333%'  justifyContent='center' border= 'solid 2px #e7e2de' backgroundColor='white' alignItems='center'>
                        <MotionImage src = '../public/sabrositos.png' width='80%' height='90%' 
                        initial = {{x: 0, opacity: 0}}
                        whileInView = {{ x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition = {{duration: 2, ease: 'easeInOut' }}/>
                    </Flex>
                </Flex>
            </Box>

        </Box>


        {/* Politicas con las que trabaja el negocio */}
        <MotionBox width='70%' paddingTop = '100px' display = 'flex' id = 'politicas' 
        initial = {{x: 0, opacity: 0}}
        whileInView = {{ x: 0, opacity: 1}}
        viewport={{once: true}}
        transition = {{duration: 2, ease: 'easeInOut' }}>
            <Box display='flex' flexDirection = {{base: 'row', xl: 'row', lg:'row',md: 'column', sm: 'column'}} alignItems={{base:'center', xl:'flex-start', lg:'flex-start',md:'center', sm: 'center'}} textAlign={{xl: 'left', lg: 'left',md:'center', sm:'center',base:'center'}} width= '25%'>
                <Image src='../public/envio.svg' width= {{xl: '50px',lg: '40px',md: '35px', sm: '25px',base:'20px'}} height = {{xl: '50px',lg: '40px',md: '35px', sm: '25px',base:'20px'}} height = {{xl: '50px',lg: '40px',md: '35px', sm: '25px',base:'20px'}}/>
                <Flex display='flex' flexDirection='column' paddingLeft = '10px'>
                    <Text fontSize= {{ xl: '16px', lg: '15px', md: '14px', sm: '11px', base:'8px'}} fontWeight='bold'>Envios en Santa Rosa</Text>
                    <Text fontSize= {{ xl: '16px', lg: '15px', md: '14px', sm: '11px', base:'8px'}} width= {{xl:'75%', md:'100%', sm:'100%', base: '100%'}}>Recibe tu pedido gratis en menos de 48 hs.</Text>
                </Flex>
            </Box>

            <Box display= 'flex' flexDirection = {{xl: 'row', lg:'row',md: 'column', sm: 'column',base: 'column'}} alignItems={{xl:'flex-start', lg:'flex-start',md:'center', sm: 'center', base: 'center'}} textAlign={{xl: 'left', lg: 'left',md:'center', sm:'center', base: 'center'}} width= '25%'>
                <Image src='../public/politica.svg' width= {{ xl: '50px', lg: '40px', md: '35px', sm: '25px',base:'20px'}} height = {{ xl: '50px', lg: '40px', md: '35px', sm: '25px',base:'20px'}} />
                <Flex display='flex' flexDirection='column' paddingLeft = '10px'>
                    <Text fontSize= {{ xl: '16px', lg: '15px', md: '14px', sm: '11px', base:'8px'}} fontWeight='bold'>Politica de satisfacción</Text>
                    <Text fontSize= {{ xl: '16px', lg: '15px', md: '14px', sm: '11px', base:'8px'}}width= {{xl:'75%', md:'100%', sm:'100%', base: '100%'}}>Si tienes un problema, puedes contactarnos.</Text>
                </Flex>
            </Box>

            <Box display='flex' flexDirection = {{base: 'row', xl: 'row', lg:'row',md: 'column', sm: 'column'}} alignItems={{base:'flex-start', xl:'flex-start', lg:'flex-start',md:'center', sm: 'center'}} textAlign={{xl: 'left', lg: 'left',md:'center', sm:'center', base: 'center'}} width= '25%'>
                <Image src='../public/atencion.svg' width= {{xl: '50px', lg: '40px', md: '35px', sm: '25px', base:'20px'}} height = {{xl: '50px',lg: '40px',md: '35px', sm: '25px', base: '20px'}}/>
                <Flex display='flex' flexDirection='column' paddingLeft = '10px'>
                    <Text fontSize= {{ xl: '16px', lg: '15px', md: '14px', sm: '11px', base:'8px'}} fontWeight='bold'>Atención virtual</Text>
                    <Text fontSize= {{ xl: '16px', lg: '15px', md: '14px', sm: '11px', base:'8px'}} width= {{xl:'75%', md:'100%', sm:'100%', base: '100%'}}>Sistema de atención virtual, disponible 24 hs.</Text>
                </Flex>
            </Box>

            <Box display='flex' flexDirection = {{xl: 'row', lg:'row',md: 'column', sm: 'column', base: 'column'}} alignItems={{xl:'flex-start', lg:'flex-start',md:'center', sm: 'center', base: 'center'}} textAlign={{xl: 'left', lg: 'left',md:'center', sm:'center', base: 'center'}} width = '25%'>
                <Image src='../public/pago.svg' width= {{xl: '50px', lg: '40px', md: '35px', sm: '25px', base: '20px'}} height = {{xl: '50px', lg: '40px', md: '35px', sm: '25px', base: '20px'}}/>
                <Flex display='flex' flexDirection='column' paddingLeft = '10px'>
                    <Text fontSize= {{ xl: '16px', lg: '15px', md: '14px', sm: '11px', base:'8px'}} fontWeight='bold'>Paga al recibir</Text>
                    <Text fontSize= {{ xl: '16px', lg: '15px', md: '14px', sm: '11px', base:'8px'}} width= {{xl:'75%', md:'100%', sm:'100%', base: '100%'}}>Selecciona tu metodo de pago preferido.</Text>
                </Flex>
            </Box>

        </MotionBox>

       
        {/* Imagen de cierre de inicio */}
        <Flex backgroundImage= {images} width= '100%' height='58vh' display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginTop = '100px' id = 'imagen'>
            <MotionText color = 'white' fontWeight='bolder' fontSize='30px' 
            initial = {{x: 0, opacity: 0}}
            whileInView = {{ x: 0, opacity: 1}}
            viewport={{once: true}}
            transition = {{duration: 2, ease: 'easeInOut' }}>Realiza tu consulta con nosotros!</MotionText>

            <MotionLink color = '#ff7300' 
            initial = {{x: 0, opacity: 0}}
            whileInView = {{ x: 0, opacity: 1}}
            viewport={{once: true}}
            transition = {{duration: 2, ease: 'easeInOut' }}>Click aqui</MotionLink>
        </Flex>
    </Box>

)
}

export default Inicio;