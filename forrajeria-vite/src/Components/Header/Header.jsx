import { Box, Image } from '@chakra-ui/react';

const Header = () => {
    
    return (
        <Box backgroundColor = '#f7f4f2' height="70px" display='flex' flexDirection='column'  justifyContent= 'center' alignItems= 'center' alignContent = 'center' width='100%' height = '80px'>
            <Image src = '../public/logo1.png' width='60px' height='60px' />
        </Box>
    );
};

export default Header;
