import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
function ProductStadyum() {

  return (
    <div>
         <Header/>
        <Navbar/>
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
           STADYUM VE SPOR SALONLARI ÜRÜNLERİMİZ
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
            <li className="breadcrumb-item">
              <a 
                className="text-white" 
                href="/product"
                style={{
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
                  textDecoration: 'none'
                }}
              >
                ÜRÜNLERİMİZ
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
              STADYUM VE SPOR SALONLARI 
            </li>
          </ol>
        </nav>
      </div>
    </div>



        {/* Page Header End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
              <p className="d-inline-block   border rounded-pill py-2 px-4" style={{ fontSize: '30px' }}>Stadyum ve Spor Salonları Ürünlerimiz</p>

              
            </div>
            <div className="row g-4 justify-content-center"> 

              {/* STADYUM PERİMETER Başlangıcı */}
<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div class="team-item position-relative rounded overflow-hidden equal-card">
        <div class="overflow-hidden">
            <img class="img-fluid" src="img/spor1.png" alt="Stadyum Perimeter" />
        </div>
        <div class="team-text bg-light text-center p-4">
            <h5>STADYUM PERİMETER</h5>
            <div class="team-social text-center">
                <a
                    href="#stadyumperimeterModal"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#stadyumperimeterModal"
                >
                    Detaylar
                </a>
            </div>
        </div>
    </div>
</div>

{/* Modal Tanımı - STADYUM PERİMETER için Benzersiz ID'ler */}
<div class="modal fade" id="stadyumperimeterModal" tabindex="-1" aria-labelledby="stadyumperimeterModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="stadyumperimeterModalLabel">STADYUM PERİMETER</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
            </div>
            <div class="modal-body">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center">
                        <img id="zoomableImage-stadyumperimeter" src="img/spor1.png" class="img-fluid mb-3" alt="STADYUM PERİMETER" />
                    </div>

                    <div class="col-md-6">
                        <ul class="nav nav-tabs" id="myTabs-stadyumperimeter" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link active fs-5"
                                    id="parametersTab-stadyumperimeter"
                                    data-bs-toggle="tab"
                                    data-bs-target="#parametersContent-stadyumperimeter"
                                    type="button"
                                    role="tab"
                                    aria-controls="parametersContent-stadyumperimeter"
                                    aria-selected="true"
                                >
                                    Parametreler
                                </button>
                            </li>
                        </ul>

                        <div class="tab-content pt-4 fs-5" id="myTabContents-stadyumperimeter">
                            <div
                                class="tab-pane fade show active"
                                id="parametersContent-stadyumperimeter"
                                role="tabpanel"
                                aria-labelledby="parametersTab-stadyumperimeter"
                            >
                                <ul>
                                    <li><b>Model name:</b> KentLed10</li>
                                    <li><b>Pixel Pitch(mm):</b>10</li>
                                    <li><b>Pixel Density(dot/m²):</b> 10000</li>
                                    <li><b>Led Type:</b> SMD3535</li>
                                    <li><b>Module Size (mm * mm):</b> 400*300</li>
                                    <li><b>Horizontal Viewing Angle (Deg):</b>160°</li>
                                    <li><b>Vertical Viewing Angle (Deg):</b>Up36°，Down60°</li>
                                    <li><b>Brightness (cd/m2):</b> 4500</li>
                                    <li><b>Grey Scale（bit）:</b> 15Bit</li>
                                    <li><b>Refresh Rate (Hz):</b> ≥1920</li>
                                    <li><b>Maximum Cabinet Power Consumption (w):</b> 562</li>
                                    <li><b>Average Cabinet Power Consumption (w):</b> 225</li>
                                    <li><b>Cabinet Size (mm * mm):</b> L1600*W900*T142</li>
                                    <li><b>Cabinet Weight (±0.25Kg):</b> 53</li>
                                    <li><b>Cabinet Resolution (PX* PX):</b> 160*90</li>
                                    <li><b>Input Voltage:</b> 110-220V </li>
                                    <li><b>Waterproof Level:</b> Front：IP65 - Back：IP55</li>
                                    <li><b>Working Environment:</b> Outdoor </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* STADYUM PERİMETER Bitişi */}

              {/* STADYUM SKORBORD Başlangıcı */}
<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div class="team-item position-relative rounded overflow-hidden equal-card">
        <div class="overflow-hidden">
            <img class="img-fluid" src="img/spor2.png" alt="Stadyum Skorbord" />
        </div>
        <div class="team-text bg-light text-center p-4">
            <h5>STADYUM SKORBORD</h5>
            <div class="team-social text-center">
                <a
                    href="#stadyumskorbordModal"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#stadyumskorbordModal"
                >
                    Detaylar
                </a>
            </div>
        </div>
    </div>
</div>

{/* Modal Tanımı - STADYUM SKORBORD için Benzersiz ID'ler */}
<div class="modal fade" id="stadyumskorbordModal" tabindex="-1" aria-labelledby="stadyumskorbordModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="stadyumskorbordModalLabel">STADYUM SKORBORD</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
            </div>
            <div class="modal-body">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center">
                        <img id="zoomableImage-stadyumskorbord" src="img/spor2.png" class="img-fluid mb-3" alt="STADYUM SKORBORD" />
                    </div>

                    <div class="col-md-6">
                        <ul class="nav nav-tabs" id="myTabs-stadyumskorbord" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link active fs-5"
                                    id="parametersTab-stadyumskorbord"
                                    data-bs-toggle="tab"
                                    data-bs-target="#parametersContent-stadyumskorbord"
                                    type="button"
                                    role="tab"
                                    aria-controls="parametersContent-stadyumskorbord"
                                    aria-selected="true"
                                >
                                    Parametreler
                                </button>
                            </li>
                        </ul>

                        <div class="tab-content pt-4 fs-5" id="myTabContents-stadyumskorbord">
                            <div
                                class="tab-pane fade show active"
                                id="parametersContent-stadyumskorbord"
                                role="tabpanel"
                                aria-labelledby="parametersTab-stadyumskorbord"
                            >
                                <ul>
                                    <li><b>Model name:</b> KentLEd6.00</li>
                                    <li><b>Pixel Pitch(mm):</b>	6.00mm</li>
                                    <li><b>Pixel Density(dot/m²):</b> 	27.777</li>
                                    <li><b>Led Type:</b> 	SMD2727</li>
                                    <li><b>Module Size (mm * mm):</b>	192*192</li>
                                    <li><b>Horizontal Viewing Angle (Deg):</b>120°</li>
                                    <li><b>Vertical Viewing Angle (Deg):</b>	120°</li>
                                    <li><b>Brightness (cd/m2):</b> 	7500</li>
                                    <li><b>Grey Scale（bit）:</b>	12Bit</li>
                                    <li><b>Refresh Rate (Hz):</b> ≥1920</li>
                                    <li><b>Maximum Cabinet Power Consumption (w):</b> 	750</li>
                                    <li><b>Average Cabinet Power Consumption (w):</b> 280</li>
                                    <li><b>Cabinet Size (mm * mm):</b> 	960x960x140</li>
                                    <li><b>Cabinet Weight (±0.25Kg):</b> 53</li>
                                    <li><b>Cabinet Resolution (PX* PX):</b> 160*160</li>
                                    <li><b>Input Voltage:</b> 110-220V </li>
                                    <li><b>Waterproof Level:</b> Front：IP65 - Back：IP55</li>
                                    <li><b>Working Environment:</b> Outdoor </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* STADYUM PERİMETER Bitişi */}
            </div>
          </div>
        </div>
        {/* Testimonial End */}
          {/* Footer Start */}
    <Footer/>
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
      </div>


     

      );
}export default ProductStadyum;