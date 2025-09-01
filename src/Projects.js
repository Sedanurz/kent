
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
function Projects() {
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
           PROJELERİMİZ
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
                Ana Sayfa
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
              PROJELERİMİZ 
            </li>
          </ol>
        </nav>
      </div>
    </div>

              {/* Page Header End */}
              
              <div className="container-xxl py-5">
                <div className="container">
                  <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                  <div>
                    <p className="d-inline-block border rounded-pill py-1 px-4" >Projelerimiz</p>
                    <h1>LED Uygulama Projelerimiz</h1>
                  </div>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="team-item bg-light rounded h-100 p-5 img-fluid">
                        <img src="img/indoor.jpg" alt="Indoor" className="img-fluid mb-3 rounded h-65" />
                        <h4 className="mb-3 text-center">INDOOR</h4>
                        <p className="mb-4"> Indoor aydınlatma,kapalı alanlarda kullanılan LED aydınlatma sistemlerini ifade eder. Ev, ofis, AVM gibi mekânlarda fonksiyonel ve dekoratif amaçlarla tercih edilir..</p>
                        <div className="team-social text-center">
                    <a className="btn" href="/Indoor">Çalışmaları Gör</a>
                  </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className=" team-item bg-light rounded h-100 p-5 img-fluid">
                        <img src="img/outdoor.jpg" alt="Outdoor" className="img-fluid mb-3 rounded h-65" />
                        <h4 className="mb-3 text-center">OUTDOOR</h4>
                        <p className="mb-4">Outdoor aydınlatma, dış mekânlarda kullanılan LED aydınlatma sistemleridir. Yol, park, bina cepheleri gibi alanlarda hem güvenlik hem de estetik görünüm sağlar.
                        </p>
                        <div className="team-social text-center">
                    <a className="btn" href="/Outdoor">Çalışmaları Gör</a>
                  </div></div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="team-item bg-light rounded h-100 p-5 img-fluid">
                        <img src="img/mobilled.jpg" alt="mobilled" className="img-fluid mb-3 rounded h-65" />
                        <h4 className="mb-3 text-center">MOBİL LED</h4>
                        <p className="mb-4">Mobil led, reklam ve bilgilendirme amacıyla taşıt üzerine monte edilmiş LED ekranlardır. Farklı lokasyonlarda dolaşarak yüksek görünürlük sağlar, genellikle etkinlik, kampanya ve duyurularda tercih edilir.</p>
                        <div className="team-social text-center">
                    <a className="btn" href="/Mobilled">Çalışmaları Gör</a>
                  </div>
                  </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="team-item bg-light rounded h-100 p-5 img-fluid">
                        <img src="img/clpekran.jpg" alt="clpekran" className="img-fluid mb-3 rounded h-65" />
                        <h4 className="mb-3 text-center">CLP EKRAN</h4>
                        <p className="mb-4">CLP ekran, dış mekanlarda kullanılan, değiştirilebilir harf ve rakamlarla mesaj gösteren LED panellerdir. Genellikle reklam ve bilgilendirme amacıyla kullanılır.</p>
                        <div className="team-social text-center">
                    <a className="btn" href="/ClpScreen">Çalışmaları Gör</a>
                  </div></div>
                    </div>
                    
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
} export default Projects;