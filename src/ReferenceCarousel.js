
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function NewReferenceCarousel() {
  const images = [
    "/img/reference-swiper/toki-logo.jpg",
    "/img/reference-swiper/ref-05.jpg",
    "/img/reference-swiper/ref-23.jpg",
    "/img/reference-swiper/musiad-logo.png",
    "/img/reference-swiper/ref-08.jpg",
    "/img/reference-swiper/ref-16.jpg",
    "/img/reference-swiper/fame.png",
    "/img/reference-swiper/ref-12.jpg",
    "/img/reference-swiper/ref-15.jpg",
    "/img/reference-swiper/ref-10.jpg",
    "/img/reference-swiper/ref-03.jpg",
    "/img/reference-swiper/ref-22.jpg",
    "/img/reference-swiper/Watsons_logotype.svg-300x66.png",
    "/img/reference-swiper/ref-14.jpg",
    "/img/reference-swiper/aspa.jpeg",
    "/img/reference-swiper/tmok.png",
    "/img/reference-swiper/gizia2-300x300.jpg",
    "/img/reference-swiper/ref-11.jpg",
    "/img/reference-swiper/performance-300x169.png",
    "/img/reference-swiper/ref-06.jpg",
    "/img/reference-swiper/emlak-konut.jpg",
    "/img/reference-swiper/enisse-300x87.png",
    "/img/reference-swiper/ref-20.jpg",
    "/img/reference-swiper/aaaa.png",
    "/img/reference-swiper/ref-18.jpg",
    "/img/reference-swiper/tshop.png",
    "/img/reference-swiper/ref-24.jpg",
    "/img/reference-swiper/dent-mimarlik.jpeg",
    "/img/reference-swiper/ref-21.jpg",
    "/img/reference-swiper/ref-01.jpg",
    "/img/reference-swiper/ref-13.jpg",
    "/img/reference-swiper/ref-19.jpg",
    "/img/reference-swiper/vecteezy_guess-logo-brand-symbol-red-design-clothes-fashion-vector_23869628-300x244.jpg",
    "/img/reference-swiper/ref-07.jpg",
    "/img/reference-swiper/ref-09.jpg",
    "/img/reference-swiper/cabbar-300x219.png",
    "/img/reference-swiper/ref-04.jpg",
    "img/reference-swiper/ref-17.jpg",
    "img/reference-swiper/3.png",
    "img/reference-swiper/5.png",
    "img/reference-swiper/sltngazirfrns-1.jpg",
    "img/reference-swiper/alimdovizlogo.png",
    "img/reference-swiper/BLL-LOGO-1-400x142.png",
    "img/reference-swiper/blogo.png",
    "img/reference-swiper/logo (1).png",
    "img/reference-swiper/meftek-logo.png",
    "img/reference-swiper/ramadaekran.png",
    "img/reference-swiper/enza-logo.svg",
    "img/reference-swiper/ceramicconcept-dark-360x65.png",
    "img/reference-swiper/tcdd-logo.png",
    "img/reference-swiper/mall-of-logo.png",
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1>Referanslarımız</h1>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
            <img src={src} alt={`Referans ${index + 1}`} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
