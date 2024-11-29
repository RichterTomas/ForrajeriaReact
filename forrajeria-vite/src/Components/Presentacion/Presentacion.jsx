import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Presentacion = () => {
    // Definicion de diferentes sets de imagenes para distintas medidas
    const imagesXL = [
        "./public/carrusel2.jpg",
        "./public/carrusel3.jpg",
        "./public/carrusel1.jpg",
        "./public/carrusel4.jpg"
    ];

    const imagesMD = [
        "./public/perros2.jpg",
        "./public/gatos2.jpg",
        "./public/gallinas2.jpg",
        "./public/conejos2.jpg"
    ];

    const imagesSM = [
        "./public/perros2.jpg",
        "./public/gatos2.jpg",
        "./public/gallinas2.jpg",
        "./public/conejos2.jpg"
    ];

    
    // Definicion de breakpoints para realizar las medidas responsivas de pantallas
    const images = useBreakpointValue({
        base: imagesSM,
        md: imagesMD,   
        xl: imagesXL,   
    });

    const height = useBreakpointValue({
        xl: "600px",
        md: "500px",
        base: "400px"

    })


    // Codigo de carrusel de presentación
    return (
        <Box
            bg="black"
            sx={{                                               //Permite controlar las propiedades de los "botones" o "balas" del carrusel
                ".swiper-pagination-bullet": {
                    bg: 'black',
                    opacity: 0.4,
                    transition: 'background-color 0.3s ease',
                },
                ".swiper-pagination-bullet-active": {
                    bg: "#ff794c",
                    opacity: 1,
                },
            }}
       

        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}    //Son los modulos que permiten la manipulacion de propiedades del carrusel
                autoplay={{ delay: 3500 }}
                pagination={{ clickable: true }}
                loop={true}
                style={{ width: "100%", height}}
            >
                {images?.map((image, index) => (                //Hace un recorrido y muestra las imagenes seleccionadas en el breakpoint
                    <SwiperSlide key={index}>
                        <Box
                            as='img'
                            src={image}
                            alt={`Slide ${index + 1}`}
                            width='100%'
                            height='100%'
                            objectFit="cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Presentacion;
