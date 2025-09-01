import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
function Product() {
return (
    <div>
                <Header/>
                <Navbar/>
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
          ÜRÜNLERİMİZ
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
              ÜRÜNLERİMİZ
            </li>
          </ol>
        </nav>
      </div>
    </div>
   
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                </div>
            </div>
        </div>
    </div>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <p className="d-inline-block   border rounded-pill py-2 px-4" style={{ fontSize: '35px' }}>Ürünlerimiz</p>
            <h1 />
                
            </div>
            <div className="row g-4 d-flex justify-content-center align-items-center">
                <div className="col-lg3 col-md-4 wow fadeInUp text-center" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid mx-auto d-block" src="img/resim.jpg" alt="" />
                        </div>
                        <div className="team-text bg-light text-center p-3">
                            <h5>INDOOR</h5>
                            
                            <a href="/ProductIndoor" className="btn btn-primary py-2">Ürünleri incele</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg3 col-md-4 wow fadeInUp text-center" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid mx-auto d-block" src="img/resim1.jpg" alt="" />
                        </div>
                        <div className="team-text bg-light text-center p-3">
                            <h5>OUTDOOR</h5>
                            <a href="/ProductOutdoor" className="btn btn-primary py-2">Ürünleri incele</a>
                        </div>
                    </div>
                </div>
                <div className="row g-4" />
                <div className="col-lg3 col-md-4 wow fadeInUp text-center" data-wow-delay="0.1">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden mt-3">
                            <img className="img-fluid mx-auto d-block" src="img/resim2.png" alt="" />
                        </div>
                        <div className="team-text bg-light text-center p-3 mt-2">
                            <h5>AÇIK HAVA REKLAMCILIĞI</h5>
                            <a className="btn btn-primary py-2">Ürünleri incele</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg3 col-md-4 wow fadeInUp text-center" data-wow-delay="0.1">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden mt-3">
                            <img className="img-fluid mx-auto d-block" src="img/resim3.jpg" alt="" />
                        </div>
                        <div className="team-text bg-light text-center p-3 mt-2">
                            <h5>STADYUM VE SPOR SALONLARI</h5>
                            <a href="/ProductStadyum" className="btn btn-primary py-2">Ürünleri incele</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/> 
                        {/* Footer End */}
                        {/* Back to Top */}
                        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
                        {/* JavaScript Libraries */}
                        {/* Template Javascript */}
    
</div>

);
} export default Product;