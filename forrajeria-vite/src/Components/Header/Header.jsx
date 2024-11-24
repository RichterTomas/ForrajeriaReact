import { Box, Image } from '@chakra-ui/react';

const Header = () => {
    
    return (
        <Box backgroundColor = '#ff7300' height="70px" display='flex' flexDirection='column'  justifyContent= 'center' alignItems= 'center' alignContent = 'center' width='100%' height = '70px'>
            <Image src = '../public/pato4.svg' width='40px' height='40px' />
        </Box>
    );
};

export default Header;
