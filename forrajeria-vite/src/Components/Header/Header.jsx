import React, { useState } from 'react'; 
import { Box, Text, Flex, Link } from '@chakra-ui/react';

const Header = () => {
    const [active, setActive] = useState('componente1');

    const handleClick = (component) => {
        setActive(component);
    };

    return (
        <Box bg="#ff794c" pb="50px" display='flex' justifyContent='space-around'>
            <Text>asdasd</Text>

            <Flex justify="space-around" width="30%">
                {['componente1', 'componente2', 'componente3'].map((component) => (
                    <Link
                        key={component}
                        href={`#${component}`}
                        onClick={() => handleClick(component)}
                        color={active === component ? 'black' : 'gray.600'} 
                        fontWeight={active === component ? 'bold' : 'normal'}
                    >
                        <Text>{component}</Text>
                    </Link>
                ))}
            </Flex>
        </Box>
    );
};

export default Header;
