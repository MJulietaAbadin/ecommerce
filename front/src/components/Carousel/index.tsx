'use client'; // Asegúrate de colocar esta línea en la parte superior

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importa los estilos de Swiper
import Button from '../Button';

const Carousel = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      swiper.slideNext();
    }, 6000); // Cambia la diapositiva cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="w-3/4 mx-auto h-[450px] rounded-lg overflow-hidden"> {/* Contenedor del carrusel */}
      <Swiper
        ref={swiperRef}
        spaceBetween={10} // Espacio entre diapositivas
        loop={true} // Repetir el carrusel al llegar al final
        className="h-full"
      >
        <SwiperSlide className="relative">
          <img src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg" alt="Image 1" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full flex flex-col items-start justify-end">
            <h2 className="text-lg font-bold">Apple Watches</h2>
            <p className="mt-2 mb-2">Smartwatches with fitness tracking, notifications, and customizable watch faces.</p>
            <Button content='See more' redirectTo='/products/4'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg" alt="Image 2" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full flex flex-col items-start justify-end">
            <h2 className="text-lg font-bold">iPhones</h2>
            <p className="mt-2 mb-2">Smartphones with advanced features, touch screen, apps, and high-speed connectivity.</p>
            <Button content='See more' redirectTo='/products/1'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/tile/Apple-MacBook-Pro-2up-231030.jpg.og.jpg?202408191739" alt="Image 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full flex flex-col items-start justify-end">
            <h2 className="text-lg font-bold">MacBooks</h2>
            <p className="mt-2 mb-2">Laptops with portability, powerful performance, and multitasking capabilities.</p>
            <Button content='See more' redirectTo='/products/2'/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;


/* 
https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg
https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg
https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/tile/Apple-MacBook-Pro-2up-231030.jpg.og.jpg?202408191739

https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(70)/assets.iprofesional.com/assets/jpg/2022/09/541973.jpg
https://www.apple.com/la/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png
https://media.seudinheiro.com/uploads/2023/10/iPhone-15-General-Feature-Black-715x402.jpg


<Swiper
        ref={swiperRef}
        spaceBetween={10} // Espacio entre diapositivas
        loop={true} // Repetir el carrusel al llegar al final
        className="h-full"
      >
        <SwiperSlide className="relative">
          <img src="https://www.apple.com/newsroom/images/product/watch/standard/applewatch_series_3_two_loop_full.jpg.og.jpg" alt="Image 1" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full flex flex-col items-start justify-end">
            <h2 className="text-lg font-bold">Título 1</h2>
            <p className="mt-2">Descripción breve para la imagen 1.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">Leer más</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://www.apple.com/la/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png" alt="Image 2" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full flex flex-col items-start justify-end">
            <h2 className="text-lg font-bold">Título 2</h2>
            <p className="mt-2">Descripción breve para la imagen 2.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">Leer más</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://www.ventasrosario.com.ar/wp-content/uploads/2023/04/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.og_.jpg" alt="Image 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full flex flex-col items-start justify-end">
            <h2 className="text-lg font-bold">Título 3</h2>
            <p className="mt-2">Descripción breve para la imagen 3.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">Leer más</button>
          </div>
        </SwiperSlide>
      </Swiper>

'use client'
import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; 

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide min-w-full h-5">
            <img src='https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(70)/assets.iprofesional.com/assets/jpg/2022/09/541973.jpg' alt="Image 1" className="w-full h-auto" />
          </div>
          <div className="embla__slide min-w-full">
            <img src="https://www.apple.com/la/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png" alt="Image 2" className="w-full h-auto" />
          </div>
          <div className="embla__slide min-w-full">
            <img src="https://media.seudinheiro.com/uploads/2023/10/iPhone-15-General-Feature-Black-715x402.jpg" alt="Image 3" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

 */