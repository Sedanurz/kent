
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
function Indoor() {
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
            INDOOR 
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
              INDOOR 
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
                    <h1>Indoor Projelerimiz</h1>
                  </div>

                 
                  <div className="row g-4">

                {/* Guess Başlangıc*/}
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/guess.jpg" alt="Guess" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Guess</h5>
                      <p className="text-primary">Akasya AVM</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#guessModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="guessModal" tabIndex="-1" aria-labelledby="guessModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="guessModalLabel">Guess - Akasya AVM</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/guess.jpg" className="img-fluid mb-3" alt="Guess" />
                            <p className="text-muted">Guess mağazasında iç mekân LED ekran uygulaması yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Guess/Akasya AVM</h5>
                            <ul>
                              <li><b>Model Name:</b> Kentled 2.5mm</li>
                              <li><b>Pixel Pitch(mm):</b> 2.5</li>
                              <li><b>Pixel Density(dot/m²):</b> 160.000</li>
                              <li><b>Led Type:</b>SDM</li>
                              <li><b>Module Size(mm*mm):</b>256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>

                {/* Fame Başlangıc */}
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/fame.jpg" alt="Fame" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Fame</h5>
                      <p className="text-primary">Merter</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#fameModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="fameModal" tabIndex="-1" aria-labelledby="performanceSporModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="fameModalLabel">Fame - Merter</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/fame.jpg" className="img-fluid mb-3" alt="Fame" />
                            <p className="text-muted">Fame mağazasında iç mekân LED ekran uygulaması yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Fame/Merter</h5>
                            <ul>
                              <li><b>Model Name:</b> Kentled 2.5mm</li>
                              <li><b>Pixel Pitch(mm):</b> 2.5</li>
                              <li><b>Pixel Density(dot/m²):</b> 160.000</li>
                              <li><b>Led Type:</b>SDM</li>
                              <li><b>Module Size(mm*mm):</b>256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Performance Spor Başlangıc */}
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/performance.jpg" alt="Performance" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Perfromance Spor</h5>
                      <p className="text-primary">Marmara Forum</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#performanceModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="performanceModal" tabIndex="-1" aria-labelledby="performanceModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="fameModalLabel">Performance Spor - Marmara Forum</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/performance.jpg" className="img-fluid mb-3" alt="Performance" />
                            <p className="text-muted">Performance Spor mağazasında iç mekân LED ekran uygulaması yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Performance Spor/Marmara Forum</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Gençlik Merkezi Başlangıc */}
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/genclikmerkezi.jpg" alt="GenclikMerkezi" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Gençlik Merkezi</h5>
                      <p className="text-primary">Başakşehir Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#genclikmerkeziModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="genclikmerkeziModal" tabIndex="-1" aria-labelledby="genclikmerkeziModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="genclikmerkeziModalLabel">Gençlik Merkezi - Başakşehir Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/genclikmerkezi.jpg" className="img-fluid mb-3" alt="GenclikMerkezi" />
                            <p className="text-muted">Gençlik Merkezi iç mekân LED ekran uygulaması yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Gençlik Merkezi/Başakşehir Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Hizmet Binasi Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/hizmetbinasi.jpg" alt="hizmetbinasi" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Hizmet Binası</h5>
                      <p className="text-primary">Başakşehir Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#hizmetbinasiModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="hizmetbinasiModal" tabIndex="-1" aria-labelledby="hizmetbinasiModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="hizmetbinasiModalLabel">Hizmet Binası- Başakşehir Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/hizmetbinasi.jpg" className="img-fluid mb-3" alt="hizmetbinasi" />
                            <p className="text-muted">Hizmet Binası iç mekân LED ekran uygulaması yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Hizmet Binası/Başakşehir Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                 {/* Konferans Salonu Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/konferans.jpg" alt="konferans" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Konferans Salonu</h5>
                      <p className="text-primary">Başakşehir Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#konferansModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="konferansModal" tabIndex="-1" aria-labelledby="konferansModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="konferansModalLabel">Konferans Salonu - Başakşehir Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/konferans.jpg" className="img-fluid mb-3" alt="konferans" />
                            <p className="text-muted">Başakşehir Belediyesine ait olan Konferans Salonu içerisine İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Konferans Salonu/Başakşehir Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div> 
                {/* TV Stüdyo Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/tv24.jpg" alt="tv24" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Tv Stüdyo</h5>
                      <p className="text-primary">TV 24</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#tv24Modal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="tv24Modal" tabIndex="-1" aria-labelledby="tv24ModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="tv24ModalLabel">TV Stüdyo - TV 24 </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/tv24.jpg" className="img-fluid mb-3" alt="tv24" />
                            <p className="text-muted">360 Tv’ye  ait olan Tv Stüdyosu içerisine İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>TV Stüdyo/360 TV</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Colins Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/colinsLike.jpg" alt="colins" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Colin's</h5>
                      <p className="text-primary">Forum İstanbul</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#colinsModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="colinsModal" tabIndex="-1" aria-labelledby="colinsModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="colinsModalLabel">TV Stüdyo - 360 TV</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/colins.jpg" className="img-fluid mb-3" alt="colins" />
                            <p className="text-muted">Forum İstanbul AVM'de bulunan Colin's mağazasına 
                              İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Colin's/Forum İstanbul</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div> 
                {/* Yatas Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/yatas.jpg" alt="yatas" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Yataş</h5>
                      <p className="text-primary">Cevahir AVM</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#yatasModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="yatasModal" tabIndex="-1" aria-labelledby="yatasModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="yatasModalLabel">Yataş - Cevahir AVM</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/yatas.jpg" className="img-fluid mb-3" alt="yatas" />
                            <p className="text-muted">Cevahir AVM ‘de bulunan Yataş Mağazasına İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Yataş/Cevahir AVM</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Buz Pisti Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/buzpisti.jpg" alt="buzpisti" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Buz Pisti</h5>
                      <p className="text-primary">Zeytinburnu Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#buzpistiModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="buzpistiModal" tabIndex="-1" aria-labelledby="buzpistiModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="buzpistiModalLabel">Buz Pisti - Zeytinburnu Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/buzpisti.jpg" className="img-fluid mb-3" alt="buzpisti" />
                            <p className="text-muted">Zeytinburnu Belediyesi’ne ait olan Buz Pisti içerisine İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Buz Pisti/Zeytinburnu Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Sirkeci Gar Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/sirkecigar.jpg" alt="sirkecigar" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Sirkeci Gar</h5>
                      <p className="text-primary">TCDD</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#sirkecigarModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="sirkecigarModal" tabIndex="-1" aria-labelledby="sirkecigarModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="sirkecigarModalLabel">Sirkeci Gar - TCDD</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/sirgecigar.jpg" className="img-fluid mb-3" alt="sirkecigar" />
                            <p className="text-muted">Zeytinburnu Belediyesi’ne ait olan Buz Pisti içerisine İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Sİrkeci Gar/TCDD</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Konferans Salonu Arnavutköy Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/konferanssalonu.jpg" alt="konferanssalonu" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Konferans Salonu</h5>
                      <p className="text-primary">Arnavutköy Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#konferanssalonuModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="konferanssalonuModal" tabIndex="-1" aria-labelledby="konferanssalonuModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="konferanssalonuModalLabel">Konferans Salonu - Arnavutköy Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/konferanssalonu.jpg" className="img-fluid mb-3" alt="konferanssalonu" />
                            <p className="text-muted">Arnavutköy Belediyesinde yer alan Konferans Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır..</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Konferans Salonu/Arnavutköy Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* İnteria Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/interia.jpg" alt="interia" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>İnteria</h5>
                      <p className="text-primary">Home Design center</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#interiaModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="interiaModal" tabIndex="-1" aria-labelledby="interiaModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="interiaModalLabel">İnteria - Home Design Center</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/interia.jpg" className="img-fluid mb-3" alt="interia" />
                            <p className="text-muted">Zeytinburnu Belediyesi’ne ait olan Buz Pisti içerisine İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>İnteria/Home Design Center</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div> 
                {/* Karsilama Salonu Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/karsılamasalonu.jpg" alt="karsılamasalonu" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Karşılama Salonu</h5>
                      <p className="text-primary">Zeytinburnu Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#karsılamasalonuModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="karsılamasalonuModal" tabIndex="-1" aria-labelledby="karsılamasalonuModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="karsılamasalonuModalLabel">Karşılama Salonu - Zeytinburnu Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/karsılamasalonu.jpg" className="img-fluid mb-3" alt="karsılamasalonu" />
                            <p className="text-muted">Zeytinburnu Belediyesi giriş alanında yer alan Karşılama Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Karşılama Salonu/Zeytinburnu Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                 {/* TV Stüdyo Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/tvstudio.jpg" alt="tvstudio" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>TV Stüdyo</h5>
                      <p className="text-primary">360 TV</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#tvstudioModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="tvstudioModal" tabIndex="-1" aria-labelledby="tvstudioModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="tvstudioModalLabel">Tv Stüdyo - 360 TV</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/tvstudio.jpg" className="img-fluid mb-3" alt="tvstudio" />
                            <p className="text-muted">Zeytinburnu Belediyesi giriş alanında yer alan Karşılama Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Tv Stüdyo/360 TV</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Konferans Salonu Fatih Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/konferansfatih.jpg" alt="konferansfatih" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Konferans Salonu</h5>
                      <p className="text-primary">Fatih Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#konferansfatihModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="konferansfatihModal" tabIndex="-1" aria-labelledby="konferansfatihModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="konferansfatihModalLabel">Konferans Salonu - Fatih Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/konferansfatih.jpg" className="img-fluid mb-3" alt="konferansfatih" />
                            <p className="text-muted">Fatih Belediyesine ait olan Konferans Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Konferans Salonu/Fatih Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Satıs Ofisi Fatih Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/satisofisi.jpg" alt="satisofisi" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Satış Ofisi</h5>
                      <p className="text-primary">Emlak Konut</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#satisofisiModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="satisofisiModal" tabIndex="-1" aria-labelledby="satisofisiModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="satisofisiModalLabel">Satış Ofisi - Emlak Konut</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/satisofisi.jpg" className="img-fluid mb-3" alt="satisofisi" />
                            <p className="text-muted">Emlak Konut’a ait olan Satış Ofisine İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Satış Ofisi/Emlak Konut</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                {/* Konferans Salonu Beyoğlu Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/konferansbeyoglu.jpg" alt="konferansbeyoglu" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Konferans Salonu</h5>
                      <p className="text-primary">Beyoğlu Belediyesi</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#konferansbeyogluModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="konferansbeyogluModal" tabIndex="-1" aria-labelledby="konferansbeyogluModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="konferansbeyogluModalLabel">Konferans Salonu - Beyoğlu Belediyesi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/konferansbeyoglu.jpg" className="img-fluid mb-3" alt="konferansbeyoglu" />
                            <p className="text-muted">Emlak Konut’a ait olan Satış Ofisine İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Konferans Salonu/Beyoğlu Belediyesi</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                  {/* Karsilama Salonu İsbak Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/karsilamaisbak.jpg" alt="karsilamaisbak" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Karşılama Salonu</h5>
                      <p className="text-primary">İsbak</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#karsilamaisbakModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="karsilamaisbakModal" tabIndex="-1" aria-labelledby="karsilamaisbakModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="karsilamaisbakModalLabel">Karşılama Salonu - İsbak</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/karsilamaisbak.jpg" className="img-fluid mb-3" alt="karsilamaisbak" />
                            <p className="text-muted">İstanbul Bilişim Ve Akıllı Kent Teknolojileri’ne ait olan Karşılama Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Karşılama Salonu/İsbak</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
                            </ul>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                </div>
                 {/* Watsons Başlangıc */}
                 <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item position-relative rounded overflow-hidden equal-card">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src="img/watsons.jpg" alt="watsons" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>Watsons</h5>
                      <p className="text-primary">Zorlu AVM</p>
                      <div className="team-social text-center">
                        <a href="#modal" className="btn" data-bs-toggle="modal" data-bs-target="#watsonsModal">Detaylar</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="watsonsModal" tabIndex="-1" aria-labelledby="watsonsModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="watsonsModalLabel">Karşılama Salonu - İsbak</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row align-items-center">
                          {/* <!-- Küçük görsel, tıklanınca büyür --> */}
                          <div className="col-md-6 text-center">
                          <img id="zoomableImage" src="img/watsons.jpg" className="img-fluid mb-3" alt="watsons" />
                            <p className="text-muted">İstanbul Bilişim Ve Akıllı Kent Teknolojileri’ne ait olan Karşılama Salonuna İndoor 2.5mm Led Ekran imalatı yapılmıştır.</p>
                          </div>
                          {/* <!-- Bilgi kısmı --> */}
                          <div className="col-md-6">
                            <h5>Watsons/Zorlu AVM</h5>
                            <ul>
                              <li>Model Name:Kentled 2.5mm</li>
                              <li>Pixel Pitch(mm): 2.5</li>
                              <li>Pixel Density(dot/m²): 160.000</li>
                              <li>Led Type:SDM</li>
                              <li>Module Size(mm*mm):256*256</li>
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
} export default Indoor;