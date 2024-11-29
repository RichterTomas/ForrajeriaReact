import { Box, Image } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box 
            backgroundColor='#ff7300'
            width='100%' 
            height='60px'
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
        >
            <Image 
                src='../public/pato4.svg' 
                width='30px'
                height='30px' 
            />
        </Box>
    );
};

export default Header;

