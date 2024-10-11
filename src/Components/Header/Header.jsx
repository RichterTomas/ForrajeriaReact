import React from 'react';
import {
  Box,
  Image,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'; // Verifica que este paquete esté instalado

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  //Plantea la visibilidad segun la resolucion de la pantalla
  const showHamburger = useBreakpointValue({
    base: true, // Mostrar icono en pantallas pequeñas
    '2xl': false, // Ocultar icono en pantallas a partir de 1500px
  });

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      as='header'
      bg='rgb(33,33,33)'
      display='flex'
      justifyContent='space-around'
      p={4}
      top='0'
      left='0'
      position='fixed'
      zIndex='1000'
      width='100%'
    >
      <Image
        src='./marca_logo.svg'
        width='50px'
        height='50px'
        filter='grayscale(100%) brightness(100%)'
      />

    {/* mientras la condicion sea estrictamente falsa, no va a mostrar el icono hamburguesa */}
      {showHamburger === false ? (
        <Flex
          as='nav'
          display='flex'
          justifyContent='space-evenly'
          width='31%'
          alignItems='center'
          ml='15%'
        >
          {['Inicio', 'Sobre mi', 'Portafolio', 'Reseñas', 'Servicios', 'Contacto'].map((item) => (
            <Box
              key={item}
              position='relative'
              _hover={{
                cursor: 'pointer',
                '& .link-text': { fontWeight: 'bold' },
                '& .underline': { opacity: 1 },
              }}
            >
              <Text
                className='link-text'
                color='white'
                onClick={() => handleScroll(item.toLowerCase().replace(' ', '-'))}
                fontSize={{ base: '8px', sm: '10px', md: '12px', lg: '14px', xl: '16px' }}
              >
                {item}
              </Text>
              <Box
                className='underline'
                position='absolute'
                bottom='-10px'
                left='50%'
                transform='translateX(-50%)'
                width='10px'
                height='10px'
                borderRadius='50%'
                bg='white'
                opacity={0}
                transition='opacity 0.5s'
              />
            </Box>
          ))}
        </Flex>
      ) : (
        <>
          {showHamburger && (
            <IconButton
              icon={<HamburgerIcon />}
              variant='outline'
              colorScheme='whiteAlpha'
              onClick={onOpen}
              aria-label="Open menu"
            />
          )}


          {/* define un espacio para el menu que se abrira desde la derecha */}
          <Drawer isOpen={isOpen} onClose={onClose} placement="right" >
            <DrawerOverlay/>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                {/* es el contenido de la "caja" que se desplazo en la derecha */}
                <VStack spacing={4} align="start">
                  {['Inicio', 'Sobre mi', 'Portafolio', 'Reseñas', 'Servicios', 'Contacto'].map((item) => (
                    <Text
                      key={item}
                      color='black'
                      fontSize='16px'
                      onClick={() => {
                        handleScroll(item.toLowerCase().replace(' ', '-'));
                        onClose(); // Se cierra al clickear
                      }}
                    >
                      {item}
                    </Text>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default Header;
