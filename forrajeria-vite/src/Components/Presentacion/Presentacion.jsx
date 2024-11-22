import React from 'react'; 
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Presentacion = () => {
    const images = [        
        "./public/carrusel2.jpg",
        "./public/carrusel3.jpg",
        "./public/carrusel1.jpg",
        "./public/carrusel4.jpg",
    ]
    
    return (
        <Box bg="black" sx = {{".swiper-pagination-bullet": {
            bg: 'black',
            opacity: 0.4,
            transition: 'background-color 0.3s ease'
        },
        ".swiper-pagination-bullet-active": {
            bg: "#ff794c", 
            opacity: 1,
          }
        }} >
            <Swiper
                modules = {[Navigation, Pagination, Autoplay]}
                autoplay = {{delay: 3500}}
                pagination = {{clickable: true}}
                loop = {true}
                style = {{width: "100%", height: '600px'}}
            >
                {images.map((image,index) => (
                    <SwiperSlide key = {index}>
                        <Box as = 'img' src = {image} alt = {`Slide ${index + 1}`} width= '100%' height='100%' objectFit="cover"/>
                    </SwiperSlide>
                ))}
            </Swiper>                   
        </Box>
    );
};

export default Presentacion;