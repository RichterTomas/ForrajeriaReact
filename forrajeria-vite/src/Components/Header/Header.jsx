import React, { useState } from 'react'; 
import { Box, Text, Flex, Link, Image } from '@chakra-ui/react';

const Header = () => {
    const [active, setActive] = useState('componente1');

    const handleClick = (component) => {
        setActive(component);
    };

    return (
        <Box bg="#ff794c" height="70px" display='flex'  justifyContent = 'center' position = 'fixed' width='100%' top = '0' zIndex='10000'>
            <Box display = 'flex' width='70%' justifyContent='space-between' alignItems='center'>
            <Image src = "./public/pato4.svg" width="60px" height='40px' />

            <Flex justify="space-around" width="30%">
                {['Inicio', 'Contacto', 'Comprar'].map((component) => (
                    <Link
                        key={component}
                        href={`#${component}`}
                        onClick={() => handleClick(component)}
                        color={active === component ? 'white' : 'white'} 
                        fontWeight={active === component ? 'bold' : 'normal'}
                        textDecoration="none"
                        _hover={{
                        transform: "translateY(-3px)",
                        textDecoration: "none"
                        }}
                        transition= "transform 0.2s"
                        
                    >
                        <Text>{component}</Text>
                    </Link>
                ))}
            </Flex>
            </Box>
            
        </Box>
    );
};

export default Header;
