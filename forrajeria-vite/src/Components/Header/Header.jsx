import { Box, Image } from '@chakra-ui/react';

const Header = () => {
    return (
<Box 
    background='linear-gradient(90deg, #ff7300, #ffa04d)' // Genera un gradiente horizontal del color base a uno mas blanquecino
    width='100%' 
    height='60px'
    display='flex' 
    justifyContent='center' 
    alignItems='center' 
>
    <Image 
        src='../public/pato4.svg' // Logotipo del negocio
        width='30px'
        height='30px' 
    />
</Box>

    );
};

export default Header;

