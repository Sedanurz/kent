import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './mainCarousel.css';


export default function HeaderCarousel() {
  return (
    <div className="container-fluid p-0 mb-3 main-carousel">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
          breakpoints={{
          1700: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        modules={[Navigation, Pagination, Autoplay]}  
      >
        {/* interia */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/resim_2024-09-20_152915037.png"
                className="img-fluid responsive-right-img rounded mb-4"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>Home Desing Center Mağaza 3mm Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/NHT_1471-slider-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* fame */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/fame-logo.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>Tekstil Mağazası 1.86mm Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/famw-3-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* mall of istanbul */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/mall-of-logo.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>Alışveriş Merkezi 2.5mm Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/mallofslider1.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* sultangazi */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/Sultangazi_Belediyesi_logo.svg.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Outdoor LED"
              />
              <Link 
                to="/Outdoor" 
                className="main-carousel-link"
              >
                <h4>Hizmet Binası 5mm Outdoor Cephe Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/Sultangazi_Cephe.jpg"
                
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* tv24 */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/tv24-logo.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>TV24 Studyo 1.5mm Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/slider-01.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* fame */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/fame-logo.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>Tekstil Mağazası 1.86mm Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/fame-2.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      
        {/* watsons */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/Watsons_logotype.svg.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>Kozmetik Mağazası 2.5mm Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/NHT_1547-slider-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* suryapi axis */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/suryapi-logo.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Outdoor LED"
              />
              <Link 
                to="/Outdoor" 
                className="main-carousel-link"
              >
                <h4>Axis İstanbul 16mm Outdoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/Axis_Istanbul.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* performance */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/performance.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>Marmara Forum 2.5mm Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/IMG_8720-kopya-2-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* metroport */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/a-1.jpg"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px' }}
                alt="Outdoor LED"
              />
              <Link 
                to="/Outdoor" 
                className="main-carousel-link"
              >
                <h4>Metroport 5mm Outdoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/metroport.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* gizia */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/gizia2-1.jpg"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px' }}
                alt="Outdoor LED"
              />
              <Link 
                to="/Outdoor" 
                className="main-carousel-link"
              >
                <h4>Tekstil Mağazası 5mm Outdoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/Gizia-Slider.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* musiad */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/Musiad_Logo.png"
                className="img-fluid responsive-right-img rounded mb-4"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>Konferans Salonu 3mm Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/DSC_2690-kopya-2-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* bagcilar */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/bgclr-logo.jpeg"
                className="img-fluid responsive-right-img rounded mb-4"
                style={{ maxWidth: '250px', height: '80px'  }}
                alt="Outdoor LED"
              />
              <Link 
                to="/Outdoor" 
                className="main-carousel-link"
              >
                <h4>Bağcılar 3.91mm Outdoor Front Servis Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/Bagcilar-Totem.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* basaksehir */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/aaaaaaaa.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>Hizmet Binası 3.91mm Transparan Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/DSC_2636-slider-1-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* bagcilar clp */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/bgclr-logo.jpeg"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="CLP Raket LED"
              />
              <Link 
                to="/ClpScreen" 
                className="main-carousel-link"
              >
                <h4>Yürüyüş Yolu CLP Raket Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/NKD_7267-kopya-2-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* fatih */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/fatih.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Indoor LED"
              />
              <Link 
                to="/Indoor" 
                className="main-carousel-link"
              >
                <h4>Konferans Salonu 2.5mm Indoor Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/DSC_2752-slider-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        {/* beyoglu */}
        <SwiperSlide>
          <div className="row g-0 align-items-center h-100">
            <div className="col-lg-6 col-md-6 right-image-col p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src="/img/swiper/adasdasdas.png"
                className="img-fluid responsive-right-img rounded mb-2"
                style={{ maxWidth: '200px', height: '80px'  }}
                alt="Outdoor LED"
              />
              <Link 
                to="/Outdoor" 
                className="main-carousel-link"
              >
                <h4>Hizmet Binası 3mm Outdoor Curve Led</h4>
              </Link> 
            </div>
            <div className="col-lg-6 col-md-6 left-image-col">
              <img
                className="img-fluid w-100 slide-image"
                src="/img/swiper/2-slider-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
