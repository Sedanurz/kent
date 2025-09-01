import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function Outdoor() {
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
            OUTDOOR 
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
              OUTDOOR 
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
                  <h1>Outdoor Projelerimiz</h1>
                  </div>

                 
                  <div className="row g-4">

                {/* Çift Yönlü Totem Başlangıc*/}
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/ciftyonlutotem.jpg" alt="Totem" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Çift Yönlü Totem</h5>
                      <p className="text-primary">Bağcılar Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#TotemModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="TotemModal" tabIndex="-1" aria-labelledby="TotemModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="TotemModalLabel">Çift Yönlü Totem - Bağcılar Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/ciftyonlutotem.jpg" className="img-fluid mb-3" alt="Totem" />
                            <p className="text-muted">Bağcılar Belediyesine  Çift Yönlü olarak geliştirilen P3mm Totem Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Çift Yönlü Totem/Bağcılar Belediyesi</h5>
                            <ul>
                              <li><b>Model Name:</b> Kentled 3mm</li>
                              <li><b>Pixel Pitch(mm):</b> 3</li>
                              <li><b>Pixel Density(dot/m²):</b> 15.625</li>
                              <li><b>Led Type:</b>SMB</li>
                              <li><b>Module Size(mm*mm):</b>256*128</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Ramada Başlangıc */}
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/ramada.jpg" alt="ramada" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Etkinlik Alanı</h5>
                      <p className="text-primary">Ramada Otel</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#ramadaModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="ramadaModal" tabIndex="-1" aria-labelledby="ramadaModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="ramadaModalLabel">Etkinlik Alanı - Ramada Otel</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/ramada.jpg" className="img-fluid mb-3" alt="ramada" />
                            <p className="text-muted">Ramada bünyesindeki Osmanbeydeki Ramada Otel etkinlik alanına P3mm  Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Etkinlik Alanı/Ramada Otel</h5>
                            <ul>
                              <li>Model Name: Kentled 3mm</li>
                              <li>Pixel Pitch(mm): 3</li>
                              <li>Pixel Density(dot/m²): 15.625</li>
                              <li>Led Type:SMB</li>
                              <li>Module Size(mm*mm):256*128</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Çift Yönlü Totem Üsküdar Başlangıc */}
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/totemuskudar.jpg" alt="totemuskudar" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Çift Yönlü Totem</h5>
                      <p className="text-primary">Üsküdar Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#totemuskudarModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="totemuskudarModal" tabIndex="-1" aria-labelledby="totemuskudarModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="totemuskudarModalLabel">Çİft Yönlü Totem - Üsküdar Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/totemuskudar.jpg" className="img-fluid mb-3" alt="totemuskudar" />
                            <p className="text-muted">Üsküdar Belediyesine  Çift Yönlü olarak geliştirilen P5mm Totem Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Çift Yönlü Totem/Üsküdar Belediyesi</h5>
                            <ul>
                              <li>Model Name: Kentled 3mm</li>
                              <li>Pixel Pitch(mm): 3</li>
                              <li>Pixel Density(dot/m²): 15.625</li>
                              <li>Led Type:SMB</li>
                              <li>Module Size(mm*mm):256*128</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Cerrahpaşa Kütüphane Başlangıc */}
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/cerrahpasa.jpg" alt="cerrahpasa" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Cerrahpaşa Kütüphanesi</h5>
                      <p className="text-primary">Fatih Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#cerrahpasaModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="cerrahpasaModal" tabIndex="-1" aria-labelledby="cerrahpasaModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="cerrahpasaModalLabel">Cerrahpaşa Kütüphanesi - Fatih Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/cerrahpasa.jpg" className="img-fluid mb-3" alt="cerrahpasa" />
                            <p className="text-muted">Fatih Belediyesi Cerrahpaşa Kütüphanesine 4160 mm x 2240 mm Ölçülerinde P5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Cerrahpaşa Kütüphanesi/Fatih Belediyesi</h5>
                              <ul>
                              <li>Model Name: Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Belediye Binası Fatih Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/belediyebinasifatih.jpg" alt="fatihbinasi" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>BelediyeBinası</h5>
                      <p className="text-primary">Fatih Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#fatihbinasiModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="fatihbinasiModal" tabIndex="-1" aria-labelledby="fatihbinasiModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="fatihbinasiModalLabel">Belediye Binası- Fatih Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/belediyebinasifatih.jpg" className="img-fluid mb-3" alt="fatihbinasi" />
                            <p className="text-muted">Fatih Belediyesi Hizmet Binası Cephesine P5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Belediye Binası/Fatih Belediyesi</h5>
                             <ul>
                              <li>Model Name: Kentled 3mm</li>
                              <li>Pixel Pitch(mm): 3</li>
                              <li>Pixel Density(dot/m²): 15.625</li>
                              <li>Led Type:SMB</li>
                              <li>Module Size(mm*mm):256*128</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                 {/* Çocuk Parkı Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/cocukparki.jpg" alt="cocukparki" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Çocuk Oyun Parkı</h5>
                      <p className="text-primary">Fatih Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#cocukparkiModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="cocukparkiModal" tabIndex="-1" aria-labelledby="cocukparkiModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="cocukparkiModalLabel">Çocuk Oyun Parkı - Fatih Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/cocukparki.jpg" className="img-fluid mb-3" alt="cocukparki" />
                            <p className="text-muted">Fatih Belediyesi’ne ait olan Çocuk Oyun alanına P3mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Çocuk Oyun Parkı/Fatih Belediyesi</h5>
                             <ul>
                              <li>Model Name: Kentled 3mm</li>
                              <li>Pixel Pitch(mm): 3</li>
                              <li>Pixel Density(dot/m²): 15.625</li>
                              <li>Led Type:SMB</li>
                              <li>Module Size(mm*mm):256*128</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div> 
                {/* Cephe Ekran axis Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/cepheekran.jpg" alt="tv24" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Cephe Ekran</h5>
                      <p className="text-primary">Bayrampaşa Axis İstanbul</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#cepheekranModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="cepheekranModal" tabIndex="-1" aria-labelledby="cepheekranModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="cepheekranModalLabel">Cephe Ekran - Bayrampaşa Axis İstanbul</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/cepheekran.jpg" className="img-fluid mb-3" alt="cepheekran" />
                            <p className="text-muted">Suryapı Axis İstanbul AVM Cephesine  25600 mm x 6144 mm Ölçülerinde P16mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Cephe Ekran/Bayrampaşa Axis İstanbul</h5>
                            <ul>
                              <li>Model Name:Kentled 16mm</li>
                              <li>Pixel Pitch(mm): 16</li>
                              <li>Pixel Density(dot/m²): 3.904</li>
                              <li>Led Type:DIP</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Score Board Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/papara.jpg" alt="papara" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Score Board</h5>
                      <p className="text-primary">Papara Park</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#paparaModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="paparaModal" tabIndex="-1" aria-labelledby="paparaModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="paparaModalLabel">Score Board - Papara Park</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/papara.jpg" className="img-fluid mb-3" alt="papara" />
                            <p className="text-muted">Trabzonspor’a ait olan Papara Park Stadyumuna P5mm Score Board Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Score Board/Papara Park</h5>
                            <ul>
                              <li>Model Name:Kentled 3mm</li>
                              <li>Pixel Pitch(mm): 3</li>
                              <li>Pixel Density(dot/m²): 15.625</li>
                              <li>Led Type:SMB</li>
                              <li>Module Size(mm*mm):256*128</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div> 
                {/* Cephe Ekran Sultangazi Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/sultangazi.jpg" alt="sultangazi" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Cephe Ekran</h5>
                      <p className="text-primary">Sultangazi Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#sultangaziModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="sultangaziModal" tabIndex="-1" aria-labelledby="sultangaziModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="sultangaziModalLabel">Cephe Ekran - Sultangazi Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/sultangazi.jpg" className="img-fluid mb-3" alt="sultangazi" />
                            <p className="text-muted">Sultangazi Belediyesine ait olan Belediye Hizmet Binasının cephesine 5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Cephe Ekran/Sultangazi Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 3mm</li>
                              <li>Pixel Pitch(mm): 3</li>
                              <li>Pixel Density(dot/m²): 15.625</li>
                              <li>Led Type:SMB</li>
                              <li>Module Size(mm*mm):256*128</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Curve Ekran Collesium Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/collesium.jpg" alt="collesium" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Curve Ekran</h5>
                      <p className="text-primary">Collesium AVM</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#collesiumModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="collesiumModal" tabIndex="-1" aria-labelledby="collesiumModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="collesiumModalLabel">Curve Ekran - Collesium AVM</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/collesium.jpg" className="img-fluid mb-3" alt="collesium" />
                            <p className="text-muted">Merter’in bilinen ve tekstilin merkezi olan Collesium Avm cephesine 5mm Curve Ekran imalatı yapıldı.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Curve Ekran/Collesium AVM</h5>
                            <ul>
                              <li>Model Name:Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Ek Hizmet Binası Beyoğlu Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/beyoglu.jpg" alt="beyoglu" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Ek Hizmet Binası</h5>
                      <p className="text-primary">Beyoğlu Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#beyogluModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="beyogluModal" tabIndex="-1" aria-labelledby="beyogluModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="beyogluModalLabel">Ek Hizmet Binası - Beyoğlu Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/beyoglu.jpg" className="img-fluid mb-3" alt="beyoglu" />
                            <p className="text-muted">İstiklal Caddesi üzerinde yer alan Beyoğlu Belediyesi Ek Hizmet Binası girişine 5mm Curve Ekran imalatı yapıldı.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Ek Hizmet Binası/Beyoğlu Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Curve Ekran Star Arena Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/arena.jpg" alt="arena" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Curve Ekran</h5>
                      <p className="text-primary">Star Arena AVM</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#arenaModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="arenaModal" tabIndex="-1" aria-labelledby="arenaModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="arenaModalLabel">Curve Ekran - Star Arena AVM</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/konferanssalonu.jpg" className="img-fluid mb-3" alt="konferanssalonu" />
                            <p className="text-muted">Merter’de Tekstil üzerine kurulmuş olan Star Arena AVM Cephesine  4096mm x 6144mm Ölçülerinde P8mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Curve Ekran/Star Arena AVM</h5>
                            <ul>
                              <li>Model Name:Kentled 8mm</li>
                              <li>Pixel Pitch(mm): 8</li>
                              <li>Pixel Density(dot/m²): 15.625</li>
                              <li>Led Type:DIP</li>
                              <li>Module Size(mm*mm):256*128</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Metro Garden Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/metrogarden.jpg" alt="metrogarden" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Cephe Ekran</h5>
                      <p className="text-primary">Metro Garden AVM</p>  
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#metrogardenModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="metrogardenModal" tabIndex="-1" aria-labelledby="metrogardenModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="metrogardenModalLabel">Cephe Ekran - Metro Garden AVM</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/metrogarden.jpg" className="img-fluid mb-3" alt="metrogarden" />
                            <p className="text-muted">Metrogarden AVM Cephesine  10240 mm x 5120 mm Ölçülerinde P16mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Cephe Ekran/Metro Garden AVM</h5>
                            <ul>
                              <li>Model Name:Kentled 16mmmm</li>
                              <li>Pixel Pitch(mm): 16</li>
                              <li>Pixel Density(dot/m²): 3.904</li>
                              <li>Led Type:DIP</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div> 
                {/* Gizia Salonu Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/gizia.jpg" alt="gizia" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Gizia</h5>
                      <p className="text-primary">Laleli</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#giziaModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="giziaModal" tabIndex="-1" aria-labelledby="giziaModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="giziaModalLabel">Gizia - Laleli</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/gizia.jpg" className="img-fluid mb-3" alt="gizia" />
                            <p className="text-muted">Moda ve tekstilin merkezi Lalelinin bilinen markası Gizia  5mm Cephe Ekran imalatı yapıldı.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Gizia/Laleli</h5>
                            <ul>
                              <li>Model Name:Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                 {/* Belediye Binası Beyoğlu Stüdyo Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/belediyebinasibeyoglu.jpg" alt="belediyebinasibeyoglu" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Belediye Binası Önü</h5>
                      <p className="text-primary">Beyoğlu Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#belediyebinasibeyogluModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="belediyebinasibeyogluModal" tabIndex="-1" aria-labelledby="belediyebinasibeyogluModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="belediyebinasibeyogluModalLabel">Belediye Binası Önü - Beyoğlu Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/belediyebinasibeyoglu.jpg" className="img-fluid mb-3" alt="belediyebinasibeyoglu" />
                            <p className="text-muted">Beyoğlu Belediyesinin Şişhanede bulunan Belediye Hizmet Binası önüne 5mm Cephe Led Ekran imalatı yapıldı.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Belediye Binası Önü/Beyoğlu Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 5mmm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* İstwest Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/istwest.jpg" alt="istwest" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>İSTWEST</h5>
                      <p className="text-primary">Bahçelievler Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#istwestModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="istwestModal" tabIndex="-1" aria-labelledby="istwestModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="istwestModalLabel">İSTWEST - Bahçelievler Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/istwest.jpg" className="img-fluid mb-3" alt="istwest" />
                            <p className="text-muted">İswest’in basın ekspresse cephe olan kısımda yer alan Bahçelievler Belediyesine ait 5mm Totem Led Ekran imalatı yapıldı.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Konferans Salonu/Fatih Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Belediye Binası Bahçelievler Ofisi Fatih Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/belediyebinasibahcelievler.jpg" alt="belediyebinasibahcelievler" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Belediye Binası</h5>
                      <p className="text-primary">Bahçelievler Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#belediyebinasibahcelievlerModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="belediyebinasibahcelievlerModal" tabIndex="-1" aria-labelledby="belediyebinasibahcelievlerModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="belediyebinasibahcelievlerModalLabel">Belediye Binası - Bahçelievler Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/belediyebinasibahcelievlerjpg" className="img-fluid mb-3" alt="belediyebinasibahcelievler" />
                            <p className="text-muted">Bahçelievler Belediyesine ait olan Belediye Hizmet Binası yanına 5mm Led Ekran imalatı yapıldı.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Belediye Binası/Bahçelievler Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Şİrinevler Meydan Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/sirinevlermeydan.jpg" alt="sirinevlermeydan" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Şirinevler Meydanı</h5>
                      <p className="text-primary">Bahçelievler Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#sirinevlermeydanModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="sirinevlermeydanModal" tabIndex="-1" aria-labelledby="sirinevlermeydanModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="sirinevlermeydanModalLabel">Şirinevler Meydan - Bahçelievler Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/sirinevlermeydan.jpg" className="img-fluid mb-3" alt="sirinevlermeydan" />
                            <p className="text-muted">Şirinevler Meydanında 5120 mm x 2880 mm Ölçülerinde P5mm Totem Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Totem Ekran/Şiirnevler Meydan</h5>
                            <ul>
                              <li>Model Name:Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                  {/* Millet Bahçesi Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/milletbahcesi.jpg" alt="milletbahcesi" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Millet Bahçesi</h5>
                      <p className="text-primary">Zeytinburnu Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#milletbahcesiModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="milletbahcesiModal" tabIndex="-1" aria-labelledby="milletbahcesiModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="milletbahcesiModalLabel">Millet Bahçesi - Zeytinburnu Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/milletbahcesi.jpg" className="img-fluid mb-3" alt="milletbahcesi" />
                            <p className="text-muted">Zeytinburnu Belediyesi sınırları içerisinde yer alan Millet Bahçesi yanına 5mm Led Ekran imalatı yapıldı.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Millet Bahçesi/Zeytinburnu Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                 {/* Meydan Totem Esenyurt Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/esenyurt.jpg" alt="esenyurt" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Meydan Totem</h5>
                      <p className="text-primary">Esenyurt Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#esenyurtModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="esenyurtModal" tabIndex="-1" aria-labelledby="esenyurtModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="esenyurtModalLabel">Meydan Totem - Esenyurt Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/esenyurt.jpg" className="img-fluid mb-3" alt="esenyurt" />
                            <p className="text-muted">Esenyurt Belediyesi sınırları içerisinde yer alan Esenyurt Meydanına  5mm Totem Led Ekran imalatı yapıldı.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Meydan Totem/Esenyurt Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Çift Yönlü Totem Bayrampaşa Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/bayrampasa.jpg" alt="bayrampasa" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Çift Yönlü Totem</h5>
                      <p className="text-primary">Bayrampaşa Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#bayrampasaModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="bayrampasaModal" tabIndex="-1" aria-labelledby="bayrampasaModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="bayrampasaModalLabel">Çift Yönlü Totem - Bayrampaşa Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/bayrampasa.jpg" className="img-fluid mb-3" alt="bayrampasa" />
                            <p className="text-muted">Bayrampaşa Belediyesi sınırları içerisinde yer alan Bayrampaşa Meydanına  5mm Çift Yönü Totem Led Ekran imalatı yapıldı.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Çİft Yönlü Totem/Bayrampaşa Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 5mm</li>
                              <li>Pixel Pitch(mm): 5</li>
                              <li>Pixel Density(dot/m²): 40.000</li>
                              <li>Led Type:SMD</li>
                              <li>Module Size(mm*mm):320*160</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
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
}   export default Outdoor;