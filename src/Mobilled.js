import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
function Mobilled() {
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
           MOBİL EKRAN
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
            <li className="breadcrumb-item">
              <a 
                className="text-white" 
                href="/projects"
                style={{
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                  textDecoration: 'none'
                }}
              >
                PROJELERİMİZ
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
              MOBİLE LED
            </li>
          </ol>
        </nav>
      </div>
    </div>
              {/* Page Header End */}

              <div className="container-xxl py-5">
                <div className="container">
                  <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <p className="d-inline-block border rounded-pill py-1 px-4">Projelerimiz</p>
                    <h1>Mobil Led Ekran Projelerimiz</h1>
                  </div>

                 
                  <div className="row g-4">

                {/* Mobil Led Ekran Gaziosmanpaşa Başlangıc*/}
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/mobilledekran.jpg" alt="mobilledekran" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Mobil Led Ekran</h5>
                      <p className="text-primary">Gaziosmanpaşa Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#mobilledekranModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="mobilledekranModal" tabIndex="-1" aria-labelledby="mobilledekranModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="mobilledekranModalLabel">Mobil Led Ekran - Gaziosmanpaşa Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/mobilledekran.jpg" className="img-fluid mb-3" alt="mobilledekran" />
                            <p className="text-muted">Gaziosmanpaşa Belediyesine imal ettmiş olduğumuz Mobil Led Ekran aracımız ile sadece cephelerde ve totemlerde değil artık yollarda ve istenilen her alanda hizmet verebilmekteler.

Related products</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Mobil Led Ekran /Gaziosmanpaşa Belediyesi</h5>
                            <ul>
                              <li><b>Model Name:</b> Kentled 5mmmmm</li>
                              <li><b>Pixel Pitch(mm):</b> 5</li>
                              <li><b>Pixel Density(dot/m²):</b> 40.000</li>
                              <li><b>Led Type:</b>SMD</li>
                              <li><b>Module Size(mm*mm):</b>320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>

                </div>
                </div>
                 </div>
                
           
            
              <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
              {/* JavaScript Libraries */}
              {/* Template Javascript */}
            </div>
            {/* Footer Start */}
              <Footer/>
              {/* Footer End */}
              {/* Back to Top */}
               
            </div>
  );
}   export default Mobilled;