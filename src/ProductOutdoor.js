import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
function ProductOutdoor() {

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
           OUTDOOR ÜRÜNLERİMİZ
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
              OUTDOOR 
            </li>
          </ol>
        </nav>
      </div>
    </div>
        {/* Page Header End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
            <p className="d-inline-block   border rounded-pill py-2 px-4" style={{ fontSize: '35px' }}>Ürünlerimiz</p>
              
            </div>
            <div className="row g-4">
          {/* 2.5MM OUTDOOR LED EKRAN Başlangıc */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/outdoor1.png" alt="2.5MM Outdoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>2.5MM OUTDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#outdoorLed25mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#outdoorLed25mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı */}
<div className="modal fade" id="outdoorLed25mmModal" tabIndex="-1" aria-labelledby="outdoorLed25mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="outdoorLed25mmModalLabel">2.5MM OUTDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          
          {/* Sol taraf: Görsel ve Projeyi Gör butonu */}
          <div className="col-md-6 text-center" style={{ position: "relative" }}>
            <img
              id="zoomableImage"
              src="img/outdoor1.png"
              className="img-fluid mb-3"
              alt="2.5MM OUTDOOR LED EKRAN"
            />
            
          </div>

          {/* Sağ taraf: Sekmeli içerik */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Ürün Bilgisi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fs-5"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Parametreler
                </button>
              </li>
            </ul>

            <div className="tab-content pt-4 fs-5" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <ul>
                  <li><b>Model Name:</b> KentLed2.5mm</li>
                  <li><b>Pixel Pitch(mm):</b>   2.5mm</li>
                  <li><b>Pixel Density(dot/m²):</b> 160.000</li>
                  <li><b>Led Type:</b>	SMD1415</li>
                  <li><b>Module Size(mm*mm):</b>	128*64</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b>  	140°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b>	130°</li>
                  <li><b>Brightness (cd/m2):</b>  	4000</li>
                  <li><b>Grey Scale（bit）:</b> 14Bit</li>
                  <li><b>Refresh Rate (Hz):</b>≥1920-3840</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b>710</li>
                  <li><b>Average Cabinet Power Consumption (w):</b>	250</li>
                  <li><b>Cabinet Size (mm * mm):</b>960x960x140</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b>53</li>
                  <li><b>Cabinet Resolution (PX* PX):</b>	160*160</li>
                  <li><b>Input Voltage:</b>110-220V</li>
                  <li><b>Waterproof Level:</b> Front：IP65 - Back：IP55</li>
                  <li><b>Working Environment:</b> 	Outdoor</li>
                </ul>
              </div>

              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <ul>
                  <li><b>Model Name:</b>KentLEd6.00</li>
                  <li><b>Pixel Pitch(mm):</b> 	6.00mm</li>
                  <li><b>Pixel Density(dot/m²):</b>	27.777</li>
                  <li><b>Led Type:</b>SMD2727</li>
                  <li><b>Module Size(mm*mm):</b>  	192*192</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b>  	120°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b>	120°</li>
                  <li><b>Brightness (cd/m2):</b>	7500</li>
                  <li><b>Grey Scale（bit）:</b>12Bit</li>
                  <li><b>Refresh Rate (Hz):</b> ≥1920</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b>	750</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 	280</li>
                  <li><b>Cabinet Size (mm * mm):</b>	960x960x140</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b>	53</li>
                  <li><b>Cabinet Resolution (PX* PX):</b>	160*160</li>
                  <li><b>Input Voltage:</b>110-220V</li>
                  <li><b>Waterproof Level:</b>Front：IP65 - Back：IP55</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* 2.5MM OUTDOOR LED EKRAN Bitiş */}
    

            {/* 3.076MM OUTDOOR LED EKRAN Başlangıcı */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/outdoor2.png" alt="3.076MM Outdoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>3.076MM OUTDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#outdoorLed3076mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#outdoorLed3076mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı - 3.076MM OUTDOOR LED EKRAN */}
<div className="modal fade" id="outdoorLed3076mmModal" tabIndex="-1" aria-labelledby="outdoorLed3076mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="outdoorLed3076mmModalLabel">3.076MM OUTDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">

          {/* Sol Kısım: Görsel ve Buton */}
          <div className="col-md-6 text-center" style={{ position: "relative" }}>
            <img id="zoomableImage-outdoor3076" src="img/outdoor2.png" className="img-fluid mb-3" alt="3.076MM OUTDOOR LED EKRAN" />
            
          </div>

          {/* Sağ Kısım: Sekmeli Bilgiler */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="outdoor3076Tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="productInfoTab-outdoor3076"
                  data-bs-toggle="tab"
                  data-bs-target="#productInfoContent-outdoor3076"
                  type="button"
                  role="tab"
                  aria-controls="productInfoContent-outdoor3076"
                  aria-selected="true"
                >
                  Ürün Bilgisi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fs-5"
                  id="parametersTab-outdoor3076"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-outdoor3076"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-outdoor3076"
                  aria-selected="false"
                >
                  Parametreler
                </button>
              </li>
            </ul>

            <div className="tab-content pt-4 fs-5" id="outdoor3076TabContent">
              <div
                className="tab-pane fade show active"
                id="productInfoContent-outdoor3076"
                role="tabpanel"
                aria-labelledby="productInfoTab-outdoor3076"
              >
                <ul>
                  <li><b>Model Name:</b> KentLed3.076</li>
                  <li><b>Pixel Pitch(mm):</b>3.076mm</li>
                  <li><b>Pixel Density(dot/m²):</b>105.625</li>
                  <li><b>Led Type:</b> SMD1415</li>
                  <li><b>Module Size(mm*mm):</b>104*52</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 130°</li>
                  <li><b>Brightness (cd/m2):</b> 4000</li>
                  <li><b>Grey Scale（bit）:</b> 14Bit</li>
                  <li><b>Refresh Rate (Hz):</b>≥1920-3840</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b>710</li>
                  <li><b>Average Cabinet Power Consumption (w):</b>270</li>
                  <li><b>Cabinet Size (mm * mm):</b>960x960x140</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b>53</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 160*160</li>
                  <li><b>Input Voltage:</b>110-220V</li>
                  <li><b>Waterproof Level:</b> Front：IP65 - Back：IP55</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>

              <div
                className="tab-pane fade"
                id="parametersContent-outdoor3076"
                role="tabpanel"
                aria-labelledby="parametersTab-outdoor3076"
              >
                <ul>
                  <li><b>Model Name:</b> KentLEd6.00</li>
                  <li><b>Pixel Pitch(mm):</b> 6.00mm</li>
                  <li><b>Pixel Density(dot/m²):</b> 27.777</li>
                  <li><b>Led Type:</b>SMD2727</li>
                  <li><b>Module Size(mm*mm):</b> 192*192</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 120°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 120°</li>
                  <li><b>Brightness (cd/m2):</b> 7500</li>
                  <li><b>Grey Scale（bit）:</b>12Bit</li>
                  <li><b>Refresh Rate (Hz):</b> ≥1920</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 750</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 280</li>
                  <li><b>Cabinet Size (mm * mm):</b> 960x960x140</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 53</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 160*160</li>
                  <li><b>Input Voltage:</b>110-220V</li>
                  <li><b>Waterproof Level:</b>Front：IP65 - Back：IP55</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* 3.076MM OUTDOOR LED EKRAN Bitişi */}

            
              
              
              {/* 4MM OUTDOOR LED EKRAN Başlangıcı */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/outdoor3.png" alt="4MM Outdoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>4MM OUTDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#outdoorLed4mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#outdoorLed4mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı */}
<div className="modal fade" id="outdoorLed4mmModal" tabIndex="-1" aria-labelledby="outdoorLed4mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="outdoorLed4mmModalLabel">4MM OUTDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">

          {/* Sol: Görsel + Buton */}
          <div className="col-md-6 text-center position-relative">
            <img id="zoomableImage-outdoor4" src="img/outdoor3.png" className="img-fluid mb-3" alt="4MM OUTDOOR LED EKRAN" />
            
          </div>

          {/* Sağ: Sekmeler */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="outdoor4Tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="productInfoTab-outdoor4"
                  data-bs-toggle="tab"
                  data-bs-target="#productInfoContent-outdoor4"
                  type="button"
                  role="tab"
                  aria-controls="productInfoContent-outdoor4"
                  aria-selected="true"
                >
                  Ürün Bilgisi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fs-5"
                  id="parametersTab-outdoor4"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-outdoor4"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-outdoor4"
                  aria-selected="false"
                >
                  Parametreler
                </button>
              </li>
            </ul>

            <div className="tab-content pt-4 fs-5" id="outdoor4TabContent">
              {/* Ürün Bilgisi */}
              <div
                className="tab-pane fade show active"
                id="productInfoContent-outdoor4"
                role="tabpanel"
                aria-labelledby="productInfoTab-outdoor4"
              >
                <ul>
                  <li><b>Model Name:</b> KentLed4mm</li>
                  <li><b>Pixel Pitch(mm):</b> 4mm</li>
                  <li><b>Pixel Density(dot/m²):</b> 62.500</li>
                  <li><b>Led Type:</b> DIP346</li>
                  <li><b>Module Size(mm*mm):</b> 256×256</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 130°</li>
                  <li><b>Brightness (nits):</b> 5000</li>
                  <li><b>Grey Scale（bit）:</b> 14</li>
                  <li><b>Refresh Rate (Hz):</b> 1920 – 3840</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 850</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 300</li>
                  <li><b>Cabinet Size (mm * mm):</b> 1024*1024*180</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 50KG</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 128*128</li>
                  <li><b>Cabinet Material:</b> Al</li>
                  <li><b>Input Voltage (AC):</b> 100-220V/220-240V</li>
                  <li><b>Waterproof Level:</b> IP65</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>

              {/* Parametreler */}
              <div
                className="tab-pane fade"
                id="parametersContent-outdoor4"
                role="tabpanel"
                aria-labelledby="parametersTab-outdoor4"
              >
                <ul>
                  <li><b>Model Name:</b> KentLed 8.00mm</li>
                  <li><b>Pixel Pitch(mm):</b> 8.00mm</li>
                  <li><b>Pixel Density(dot/m²):</b> 15.625</li>
                  <li><b>Led Type:</b> DIP346</li>
                  <li><b>Module Size(mm*mm):</b> 256×256</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 120°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 60°</li>
                  <li><b>Brightness (cd/m2):</b> 7500</li>
                  <li><b>Grey Scale（bit）:</b> 15</li>
                  <li><b>Refresh Rate (Hz):</b> 1920</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 800</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 250</li>
                  <li><b>Cabinet Size (mm * mm):</b> 1024*1024*180</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 50KG</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 128*128</li>
                  <li><b>Cabinet Material:</b> Al</li>
                  <li><b>Input Voltage:</b> 100-220V/220-240V</li>
                  <li><b>Waterproof Level:</b> IP65</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* 4MM OUTDOOR LED EKRAN Bitişi */}



              {/* 5MM OUTDOOR LED EKRAN Başlangıcı */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/outdoor4.png" alt="5MM Outdoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>5MM OUTDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#outdoorLed5mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#outdoorLed5mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı */}
<div className="modal fade" id="outdoorLed5mmModal" tabIndex="-1" aria-labelledby="outdoorLed5mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="outdoorLed5mmModalLabel">5MM OUTDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">

          {/* Sol: Görsel + Buton */}
          <div className="col-md-6 text-center position-relative">
            <img id="zoomableImage-outdoor5" src="img/outdoor4.png" className="img-fluid mb-3" alt="5MM OUTDOOR LED EKRAN" />
            
          </div>

          {/* Sağ: Sekmeler */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="outdoor5Tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="productInfoTab-outdoor5"
                  data-bs-toggle="tab"
                  data-bs-target="#productInfoContent-outdoor5"
                  type="button"
                  role="tab"
                  aria-controls="productInfoContent-outdoor5"
                  aria-selected="true"
                >
                  Ürün Bilgisi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fs-5"
                  id="parametersTab-outdoor5"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-outdoor5"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-outdoor5"
                  aria-selected="false"
                >
                  Parametreler
                </button>
              </li>
              {/* 🔴 PROJELER TAB */}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fs-5 fw-bold text-danger"
                  id="projectsTab-30"
                  data-bs-toggle="tab"
                  data-bs-target="#projectsContent-30"
                  type="button"
                  role="tab"
                  aria-controls="projectsContent-30"
                  aria-selected="false"
                >
                  PROJELER
                </button>
              </li>

            </ul>

            <div className="tab-content pt-4 fs-5" id="outdoor5TabContent">
              {/* Ürün Bilgisi */}
              <div
                className="tab-pane fade show active"
                id="productInfoContent-outdoor5"
                role="tabpanel"
                aria-labelledby="productInfoTab-outdoor5"
              >
                <ul>
                  <li><b>Model Name:</b> KentLed5mm</li>
                  <li><b>Pixel Pitch(mm):</b> 5mm</li>
                  <li><b>Pixel Density(dot/m²):</b> 40.000</li>
                  <li><b>Led Type:</b> SMD1921</li>
                  <li><b>Module Size(mm*mm):</b> 64*32</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 130</li>
                  <li><b>Brightness (cd/m2):</b> 4500</li>
                  <li><b>Grey Scale（bit）:</b> 14</li>
                  <li><b>Refresh Rate (Hz):</b> ≥1920 – 3840</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 810</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 295</li>
                  <li><b>Cabinet Size (mm * mm):</b> L480*H480*T75</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 9.5</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 48*48</li>
                  <li><b>Angle Adjustment （optional）:</b> non-optional</li>
                  <li><b>Input Voltage  (V):</b> 110-220V</li>
                  <li><b>Waterproof Level:</b> IP65</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>

              {/* Parametreler */}
              <div
                className="tab-pane fade"
                id="parametersContent-outdoor5"
                role="tabpanel"
                aria-labelledby="parametersTab-outdoor5"
              >
                <ul>
                  <li><b>Model Name:</b> KentLed10</li>
                  <li><b>Pixel Pitch(mm):</b> 10mm</li>
                  <li><b>Pixel Density(dot/m²):</b> 10.000</li>
                  <li><b>Led Type:</b> SMD2727</li>
                  <li><b>Module Size(mm*mm):</b> 240*240</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 140</li>
                  <li><b>Brightness (cd/m2):</b> 6000</li>
                  <li><b>Grey Scale（bit）:</b> 14～15</li>
                  <li><b>Refresh Rate (Hz):</b> ≥1200</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 750</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 350</li>
                  <li><b>Cabinet Size (mm * mm):</b> L480*H480*T75</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 9.5</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 48*48</li>
                  <li><b>Angle Adjustment （optional）:</b> non-optional</li>
                  <li><b>Input Voltage (V):</b> 110-220V</li>
                  <li><b>Waterproof Level:</b> IP65</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>
              {/* 🔴 PROJELER İÇERİĞİ */}
              <div
                className="tab-pane fade"
                id="projectsContent-30"
                role="tabpanel"
                aria-labelledby="projectsTab-30"
              >
                <div className="row g-4">
                  {/* Örnek Proje 1 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/cerrahpasa.jpg" alt="cerrahpasa" />
                    <h5 style={{ marginLeft: "50px" }}>Cerrahpaşa Kütüphanesi</h5>
                    <p className="text-primary" style={{ marginLeft: "30px" }}>Fatih Belediyesi</p>
                  </div>
                  {/* Örnek Proje 2 */}
                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/belediyebinasifatih.jpg" alt="fatihbinasi" />
                    <h5 style={{ marginLeft: "70px" }}>Belediye Binası</h5>
                    <p className="text-primary" style={{ marginLeft: "65px" }}>Fatih Belediyesi</p>
                  </div>
                  {/* Örnek Proje 3 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/belediyebinasibahcelievler.jpg" alt="belediyebinasibahcelievler" />
                    <h5 style={{ marginLeft: "40px" }}>Belediye Binası</h5>
                    <p className="text-primary" style={{ marginLeft: "50px" }}>Bahçelievler Belediyesi</p>
                  </div>
                  {/* Örnek Proje 4 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/collesium.jpg" alt="collesium" />
                    <h5 style={{ marginLeft: "50px" }}>Curve Ekran</h5>
                    <p className="text-primary" style={{ marginLeft: "40px" }}>Collesium AVM</p>
                  </div>
                </div>
              </div>
              {/* PROJELER SONU */}

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* 5MM OUTDOOR LED EKRAN Bitişi */}


            

            {/* 6MM OUTDOOR LED EKRAN Başlangıc */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/outdoor5.png" alt="6MM outdoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>6MM OUTDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#outdoorLed6mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#outdoorLed6mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal */}
<div className="modal fade" id="outdoorLed6mmModal" tabIndex="-1" aria-labelledby="outdoorLed6mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="outdoorLed6mmModalLabel">6MM OUTDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          <div className="col-md-6 text-center position-relative">
            <img id="zoomableImage" src="img/outdoor5.png" className="img-fluid mb-3" alt="6MM OUTDOOR LED EKRAN" />

            
          </div>

          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-outdoor6" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="parametersTab-6"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-6"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-6"
                  aria-selected="true"
                >
                  Parametreler
                </button>
              </li>
            </ul>

            <div className="tab-content pt-4 fs-5" id="myTabContents-outdoor6">
              <div
                className="tab-pane fade show active"
                id="parametersContent-6"
                role="tabpanel"
                aria-labelledby="parametersTab-6"
              >
                <ul>
                  <li><b>Model:</b> KentLed12.8</li>
                  <li><b>Pixel Pitch(mm):</b> 12.8</li>
                  <li><b>Pixel Density(dot/m²):</b> 6104</li>
                  <li><b>Led Type:</b> DIP346</li>
                  <li><b>Module Size(mm*mm):</b> 256*256</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 120</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 60</li>
                  <li><b>Brightness (cd/m2):</b> 7500</li>
                  <li><b>Grey Scale（bit）:</b> 14bit</li>
                  <li><b>Refresh Rate (Hz):</b> ≥960</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 800</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 300</li>
                  <li><b>Cabinet Size (mm * mm):</b> 1024*1024*180</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 50</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 80*80</li>
                  <li><b>Input Voltage:</b> 110-220V</li>
                  <li><b>Waterproof Level:</b> IP65/IP54</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* 6MM OUTDOOR LED EKRAN Bitişi */}


              {/* 16MM OUTDOOR LED EKRAN Başlangıc */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/outdoor6.png" alt="16MM outdoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>16MM OUTDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#outdoorLed16mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#outdoorLed16mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal */}
<div className="modal fade" id="outdoorLed16mmModal" tabIndex="-1" aria-labelledby="outdoorLed16mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="outdoorLed16mmModalLabel">16MM OUTDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          <div className="col-md-6 text-center position-relative">
            <img id="zoomableImage" src="img/outdoor6.png" className="img-fluid mb-3" alt="16MM OUTDOOR LED EKRAN" />

            
          </div>

          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-outdoor16" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="parametersTab-16"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-16"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-16"
                  aria-selected="true"
                >
                  Parametreler
                </button>
              </li>
              {/* 🔴 PROJELER TAB */}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fs-5 fw-bold text-danger"
                  id="projectsTab-30"
                  data-bs-toggle="tab"
                  data-bs-target="#projectsContent-30"
                  type="button"
                  role="tab"
                  aria-controls="projectsContent-30"
                  aria-selected="false"
                >
                  PROJELER
                </button>
              </li>
            </ul>

            <div className="tab-content pt-4 fs-5" id="myTabContents-outdoor16">
              <div
                className="tab-pane fade show active"
                id="parametersContent-16"
                role="tabpanel"
                aria-labelledby="parametersTab-16"
              >
                <ul>
                  <li><b>Model:</b> KentLed16mm</li>
                  <li><b>Pixel Pitch(mm):</b> 16</li>
                  <li><b>Pixel Density(dot/m²):</b> 3906</li>
                  <li><b>Led Type:</b> DIP346</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 120</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 60</li>
                  <li><b>Brightness (cd/m2):</b> 7500</li>
                  <li><b>Grey Scale（bit）:</b> 14bit</li>
                  <li><b>Refresh Rate (Hz):</b> ≥960</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 800</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 300</li>
                  <li><b>Cabinet Size (mm * mm):</b> 1024*1024*180</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 50</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 64*64</li>
                  <li><b>Input Voltage:</b> 110-220V</li>
                  <li><b>Waterproof Level:</b> IP65</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>
              

 {/* 🔴 PROJELER İÇERİĞİ */}
              <div
                className="tab-pane fade"
                id="projectsContent-30"
                role="tabpanel"
                aria-labelledby="projectsTab-30"
              >
                <div className="row g-4">
                  {/* Örnek Proje 1 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/cepheekran.jpg" alt="tv24"  />
                    <h5 style={{ marginLeft: "70px" }}>Cephe Ekran</h5>
                    <p className="text-primary" style={{ marginLeft: "70px" }}>Bayrampaşa Axis İstanbul</p>
                  </div>
                  {/* Örnek Proje 2 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/metrogarden.jpg" alt="metrogarden" />
                    <h5 style={{ marginLeft: "70px" }}>Cephe Ekran</h5>
                    <p className="text-primary" style={{ marginLeft: "85px" }}>Metro Garden AVM</p>
                  </div>
                  {/* Örnek Proje 3 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/tv24.jpg" alt="tv24" />
                    <h5 style={{ marginLeft: "70px" }}>TV Stüdyo</h5>
                    <p className="text-primary" style={{ marginLeft: "85px" }}>TV 24</p>
                  </div>
                </div>
              </div>
              {/* PROJELER SONU */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* 16MM OUTDOOR LED EKRAN Bitişi */}



               {/* 20MM OUTDOOR LED EKRAN Başlangıc */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/outdoor7.png" alt="20MM outdoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>20MM OUTDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#outdoorLed20mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#outdoorLed20mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal */}
<div className="modal fade" id="outdoorLed20mmModal" tabIndex="-1" aria-labelledby="outdoorLed20mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="outdoorLed20mmModalLabel">20MM OUTDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          <div className="col-md-6 text-center position-relative">
            <img id="zoomableImage" src="img/outdoor7.png" className="img-fluid mb-3" alt="20MM OUTDOOR LED EKRAN" />

            
          </div>

          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-outdoor20" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="parametersTab-20"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-20"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-20"
                  aria-selected="true"
                >
                  Parametreler
                </button>
              </li>
            </ul>

            <div className="tab-content pt-4 fs-5" id="myTabContents-outdoor20">
              <div
                className="tab-pane fade show active"
                id="parametersContent-20"
                role="tabpanel"
                aria-labelledby="parametersTab-20"
              >
                <ul>
                  <li><b>Model:</b> KentLed20mm</li>
                  <li><b>Pixel Pitch(mm):</b> 20</li>
                  <li><b>Pixel Density(dot/m²):</b> 2500</li>
                  <li><b>Led Type:</b> DIP346</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 120</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 60</li>
                  <li><b>Brightness (cd/m2):</b> 7500</li>
                  <li><b>Grey Scale（bit）:</b> 14bit</li>
                  <li><b>Refresh Rate (Hz):</b> ≥960</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 800</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 300</li>
                  <li><b>Cabinet Size (mm * mm):</b> 960*960*180</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 50</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 48*48</li>
                  <li><b>Input Voltage:</b> 110-220V</li>
                  <li><b>Waterproof Level:</b> IP65</li>
                  <li><b>Working Environment:</b> Outdoor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* 20MM OUTDOOR LED EKRAN Bitişi */}


            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Footer Start */}
    <Footer/>
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
      </div>

      );
}export default ProductOutdoor;