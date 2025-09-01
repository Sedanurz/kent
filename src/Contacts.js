import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
function Contacts() {
            return (
                <div>
                {/* Spinner Start */}
                 {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                  <div className="spinner-grow text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>  */}
  
                  <Header/>
                  <Navbar/>
                {/* Navbar End */}
                {/* Page Header Start */}
                       <div 
      className="container-fluid page-header position-relative"
      data-wow-delay="0.1s"
      style={{
        background: `
          url(https://kentled.com/wp-content/uploads/2021/12/3P2A2371-1.jpg)
          center center no-repeat
        `,
        backgroundSize: 'cover',
        height: '400px',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Koyu overlay katmanı */}
      <div 
        className="position-absolute w-100 h-100" 
        style={{
          background: 'rgba(0, 0, 0, 0.5)', // Yarı şeffaf siyah katman
          top: 0,
          left: 0,
          zIndex: 1
        }}
      ></div>
      
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 
          className="display-3 text-white mb-3 animated slideInDown"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Metin gölgesi
            fontWeight: 'bold'
          }}
        >
          İLETİŞİM
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol 
            className="breadcrumb text-uppercase mb-0"
          
          >
            <li className="breadcrumb-item">
              <a 
                className="text-white" 
                href="/main"
                style={{
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                  textDecoration: 'none'
                }}
              >
               ANASAYFA
              </a>
            </li>
            <li 
              className="breadcrumb-item text-info active" 
              aria-current="page"
              style={{
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                fontWeight: 'bold'
              }}
            >
              İLETİŞİM
            </li>
          </ol>
        </nav>
      </div>
    </div>
                {/* Page Header End */}
                
                <div className="container-xxl py-5">
                <div className="container">
                  <div className="row g-4">
                    <div className="container-xxl py-5">
                      <div className="container">
                        <div className="row g-4">
                          {/* İletişim Bilgileri Sütunu */}
                          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-light rounded p-5" style={{minHeight: '400px', height: '100%'}}>
                              <div className="d-flex align-items-center mb-4">
                                <div className="w-iconbox-icon me-3" style={{fontSize: '2rem', color: '#fd3d0d'}}>
                                  <i className="far fa-map" />
                                </div>
                                <h1 className="mb-0" style={{color: '#fd3d0d'}}>Bize Ulaşın!</h1>
                              </div>
                              <div className="d-flex align-items-center mb-4">
                                <div className="flex-shrink-0 me-3" style={{width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0da5fd', color: 'white', borderRadius: '50%'}}>
                                  <i className="fa fa-map-marker-alt" />
                                </div>
                                <div>
                                  <p className="mb-1 fw-bold">Adres</p>
                                  <h5 className="mb-0">İstoç Ticaret Merkezi 30. Ada No : 85 Bağcılar / İstanbul</h5>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-4">
                                <div className="flex-shrink-0 me-3" style={{width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#398616', color: 'white', borderRadius: '50%'}}>
                                  <i className="fa fa-phone-alt" />
                                </div>
                                <div>
                                  <p className="mb-1 fw-bold">Telefon</p>
                                  <h5 className="mb-0">0212 659 40 70</h5>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3" style={{width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fd3d0d', color: 'white', borderRadius: '50%'}}>
                                  <i className="fa fa-envelope" />
                                </div>
                                <div>
                                  <p className="mb-1 fw-bold">E-posta</p>
                                  <h5 className="mb-0">info@kentled.com</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Harita Sütunu */}
                          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100" style={{minHeight: '400px', position: 'relative'}}>
                              {/* KENT LED Başlığı */}
                              <div style={{position: 'absolute', bottom: '38px', left: 0, width: '100%', textAlign: 'center', zIndex: 1000, backgroundColor: 'rgba(255,255,255,0.7)', padding: '5px 0'}}>
                                <strong style={{color: '#fd3d0d', fontSize: '18px'}}>KENT LED</strong>
                              </div>
                              {/* Özel Kırmızı İşaret Eklenmiş Div */}
                              <div>                   
                              </div>
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.159297305711!2d28.8164057154096!3d41.06693667929592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa579f0875c27%3A0x20504f04927a1199!2sKent%20LED!5e0!3m2!1str!2str!4v1698765432100!5m2!1str!2str" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded w-100 h-100">
                              </iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Google Harita bitti */}
                  </div>
                </div>
              </div>
               
              
                {/* Footer Start */}
                <Footer/> 
                {/* Footer End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
                {/* JavaScript Libraries */}
                {/* Template Javascript */}
              </div>
                
         );
        } export default Contacts;