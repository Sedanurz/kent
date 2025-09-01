
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
function ProductIndoor() {

  return (
    <div>
    {/* Spinner Start */}
   
    {/* Spinner End */}
    {/* Topbar Start */}
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
          INDOOR ÜRÜNLERİMİZ
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
              INDOOR
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}
    {/* Feature Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
        <p className="d-inline-block   border rounded-pill py-2 px-4" style={{ fontSize: '35px' }}>Ürünlerimiz</p>
          
        </div>
        
        <div className="row g-4">
    
          {/* 1.25MM INDOOR LED EKRAN Başlangıc*/}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="team-item position-relative rounded overflow-hidden equal-card">
                          <div className="overflow-hidden">
                              <img className="img-fluid" src="img/indoor1.png" alt="1.25MM Indoor Led Ekran" />
                          </div>
                          <div className="team-text bg-light text-center p-4">
                              <h5>1.25MM INDOOR LED EKRAN</h5>
                              <div className="team-social text-center">
                                  {/* Düzeltmeler burada: data-bs-target ve href güncellendi */}
                                  <a 
                                      href="#indoorLed125mmModal" // href de modal ID'sine yönlendirildi
                                      className="btn" 
                                      data-bs-toggle="modal" 
                                      data-bs-target="#indoorLed125mmModal" // Geçerli ve tutarlı ID
                                  >
                                      Detaylar
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Modal Tanımı - Düzeltmeler burada: id ve aria-labelledby güncellendi */}
                  <div className="modal fade" id="indoorLed125mmModal" tabIndex="-1" aria-labelledby="indoorLed125mmModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-xl modal-dialog-centered">
                          <div className="modal-content">
                              <div className="modal-header">
                                  {/* Modal başlığının ID'si güncellendi */}
                                  <h5 className="modal-title" id="indoorLed125mmModalLabel">1.25MM INDOOR LED EKRAN</h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                              </div>
                              <div className="modal-body">
  <div className="row align-items-center">
    {/* Sol taraf: Görsel ve buton */}
    <div className="col-md-6 text-center" style={{ position: "relative" }}>
      <img
        id="zoomableImage"
        src="img/indoor1.png"
        className="img-fluid mb-3"
        alt="1.25MM INDOOR LED EKRAN"
        style={{ borderRadius: "12px" }}
      />
      
    </div>

    {/* Sağ taraf: Sekmeli bilgi */}
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
            <li><b>Model Name:</b> KentLed1.25mm</li>
            <li><b>Pixel Pitch(mm):</b> 1.25</li>
            <li><b>Pixel Density(dot/m²):</b> 640.000</li>
            <li><b>Led Type:</b> SMD1010</li>
            <li><b>Module Size(mm*mm):</b> 256*128</li>
            <li><b>Horizontal Viewing Angle (Deg):</b> 150°</li>
            <li><b>Vertical Viewing Angle (Deg):</b> 150°</li>
            <li><b>Brightness (cd/m2):</b> 400</li>
            <li><b>Grey Scale（bit）:</b> 16bit</li>
            <li><b>Refresh Rate (Hz):</b> ≥3840</li>
            <li><b>Maximum Cabinet Power Consumption (w):</b> 290</li>
            <li><b>Average Cabinet Power Consumption (w):</b> 175</li>
            <li><b>Cabinet Size (mm * mm):</b> 500*500*86</li>
            <li><b>Cabinet Weight (±0.25Kg):</b> 14</li>
            <li><b>Cabinet Resolution (PX* PX):</b> 200*200</li>
            <li><b>Input Voltage:</b> 110-220V</li>
            <li><b>Waterproof Level:</b> IP30</li>
            <li><b>Working Environment:</b> Indoor</li>
          </ul>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ul>
            <li><b>Model Name:</b> KentLed2.5mm</li>
            <li><b>Pixel Pitch(mm):</b> 2.5</li>
            <li><b>Pixel Density(dot/m²):</b> 160.000</li>
            <li><b>Led Type:</b> SMD2727</li>
            <li><b>Module Size(mm*mm):</b> 250*250</li>
            <li><b>Horizontal Viewing Angle (Deg):</b> 140°</li>
            <li><b>Vertical Viewing Angle (Deg):</b> 140°</li>
            <li><b>Brightness (nits/m2):</b> 1200</li>
            <li><b>Grey Scale（bit）:</b> 16bit</li>
            <li><b>Refresh Rate (Hz):</b> ≥1920</li>
            <li><b>Maximum Cabinet Power Consumption (w):</b> 500</li>
            <li><b>Average Cabinet Power Consumption (w):</b> 175</li>
            <li><b>Cabinet Size (mm * mm):</b> 500*500*86</li>
            <li><b>Cabinet Weight (±0.25Kg):</b> 14</li>
            <li><b>Cabinet Resolution (PX* PX):</b> 200*200</li>
            <li><b>Input Voltage:</b> 110-220V</li>
            <li><b>Waterproof Level:</b> IP30</li>
            <li><b>Working Environment:</b> Indoor</li>
          </ul>
        </div>

           
                    
                      
                     
                      
                    
         
           
          
     
      </div>
    </div>
  </div>
</div>

                          </div>
                      </div>
                  </div>
          {/* 1.25MM INDOOR LED EKRAN Bitiş*/}    
          
          {/* 1.53MM INDOOR LED EKRAN Başlangıc*/}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img
        className="img-fluid"
        src="img/indoor2.png"
        alt="1.53MM Indoor Led Ekran"
      />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>1.53MM INDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#indoorLed153mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#indoorLed153mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı - 1.53MM INDOOR LED EKRAN için Benzersiz ID'ler */}
<div
  className="modal fade"
  id="indoorLed153mmModal"
  tabIndex="-1"
  aria-labelledby="indoorLed153mmModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="indoorLed153mmModalLabel">
          1.53MM INDOOR LED EKRAN
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Kapat"
        ></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          {/* Sol taraf */}
          <div className="col-md-6 text-center" style={{ position: "relative" }}>
            <img
              id="zoomableImage"
              src="img/indoor2.png"
              className="img-fluid mb-3"
              alt="1.53MM INDOOR LED EKRAN"
              style={{ borderRadius: "12px" }}
            />
          </div>

          {/* Sağ taraf: Sekmeler */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-indoor153" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="productInfoTab-153"
                  data-bs-toggle="tab"
                  data-bs-target="#productInfoContent-153"
                  type="button"
                  role="tab"
                  aria-controls="productInfoContent-153"
                  aria-selected="true"
                >
                  Ürün Bilgisi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fs-5"
                  id="parametersTab-153"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-153"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-153"
                  aria-selected="false"
                >
                  Parametreler
                </button>
              </li>
              {/* 🔴 PROJELER TAB */}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fs-5"
                  id="parametersTab-153"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-153"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-153"
                  aria-selected="false"
                >
                  Projeler
                </button>
              </li>
            </ul>

            {/* Sekme içerikleri */}
            <div className="tab-content pt-4 fs-5" id="myTabContents-indoor153">
              {/* Ürün Bilgisi */}
              <div
                className="tab-pane fade show active"
                id="productInfoContent-153"
                role="tabpanel"
                aria-labelledby="productInfoTab-153"
              >
                <ul>
                  <li><b>Model Name:</b> KentLed1.53mm</li>
                  <li><b>Pixel Pitch(mm):</b> 1.538</li>
                  <li><b>Pixel Density(dot/m²):</b> 422.500</li>
                  <li><b>Led Type:</b> SMD1212</li>
                  <li><b>Module Size(mm*mm):</b> 250*250</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 150°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 150°</li>
                  <li><b>Brightness (cd/m2):</b> 400</li>
                  <li><b>Grey Scale（bit）:</b> 16bit</li>
                  <li><b>Refresh Rate (Hz):</b> ≥3840</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 340</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 175</li>
                  <li><b>Cabinet Size (mm * mm):</b> 500*500*86</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 14</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 200*200</li>
                  <li><b>Input Voltage:</b> 110-220V</li>
                  <li><b>Waterproof Level:</b> IP30</li>
                  <li><b>Working Environment:</b> Indoor</li>
                </ul>
              </div>

              {/* Parametreler */}
              <div
                className="tab-pane fade"
                id="parametersContent-153"
                role="tabpanel"
                aria-labelledby="parametersTab-153"
              >
                <ul>
                  <li><b>Model Name:</b> KentLed2.5mm</li>
                  <li><b>Pixel Pitch(mm):</b> 2.5</li>
                  <li><b>Pixel Density(dot/m²):</b> 160.000</li>
                  <li><b>Led Type:</b> SMD2727</li>
                  <li><b>Module Size(mm*mm):</b> 250*250</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 140°</li>
                  <li><b>Brightness (nits/m2):</b> 1200</li>
                  <li><b>Grey Scale（bit）:</b> 16bit</li>
                  <li><b>Refresh Rate (Hz):</b> ≥1920</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 500</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 175</li>
                  <li><b>Cabinet Size (mm * mm):</b> 500*500*86</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 14</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 200*200</li>
                  <li><b>Input Voltage:</b> 110-220V</li>
                  <li><b>Waterproof Level:</b> IP30</li>
                  <li><b>Working Environment:</b> Indoor</li>
                </ul>
              </div>

              {/* 🔴 PROJELER İÇERİĞİ */}
<div
  className="tab-pane fade"
  id="projectsContent-153"
  role="tabpanel"
  aria-labelledby="projectsTab-153"
>
  <div className="row g-4">
    {/* TV 24 Başlangıç */}
    <div className="col-lg-5 col-md-6 wow fadeInUp">
      <img className="img-fluid" src="img/tv24.jpg" alt="tv24" />
      <h5 style={{ marginLeft: "70px" }}>TV Stüdyo</h5>
      <p className="text-primary" style={{ marginLeft: "85px" }}>
        TV 24
      </p>
    </div>

    {/* 360 TV Başlangıç */}
    <div className="col-lg-5 col-md-6 wow fadeInUp">
      <img className="img-fluid" src="img/tvstudio.jpg" alt="tvstudio" />
      <h5 style={{ marginLeft: "70px" }}>TV Stüdyo</h5>
      <p className="text-primary" style={{ marginLeft: "85px" }}>
        360 TV
      </p>
    </div>
    <div className="col-lg-5 col-md-6 wow fadeInUp">
      <img className="img-fluid" src="img/genclikmerkezi.jpg" alt="GenclikMerkezi" />
      <h5 style={{ marginLeft: "30px" }}>Gençlik Merkezi</h5>
      <p className="text-primary" style={{ marginLeft: "10px" }}>
        Başakşehir Belediyesi
      </p>
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
{/* 1.53MM INDOOR LED EKRAN Bitiş*/}



          {/* 1.86MM INDOOR LED EKRAN Başlangıc*/}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div className="team-item position-relative rounded overflow-hidden equal-card">
        <div className="overflow-hidden">
            <img className="img-fluid" src="img/indoor3.png" alt="1.86MM Indoor Led Ekran" />
        </div>
        <div className="team-text bg-light text-center p-4">
            <h5>1.86MM INDOOR LED EKRAN</h5>
            <div className="team-social text-center">
                {/* Butonun hedefi, modalın benzersiz ID'si olacak */}
                <a 
                    href="#indoorLed186mmModal" // href ve data-bs-target aynı, modalı işaret ediyor
                    className="btn" 
                    data-bs-toggle="modal" 
                    data-bs-target="#indoorLed186mmModal" 
                >
                    Detaylar
                </a>
            </div>
        </div>
    </div>
</div>

{/* Modal Tanımı - 1.86MM INDOOR LED EKRAN için Benzersiz ID'ler */}
<div className="modal fade" id="indoorLed186mmModal" tabIndex="-1" aria-labelledby="indoorLed186mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="indoorLed186mmModalLabel">1.86MM INDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
              <img
                id="zoomableImage"
                src="img/indoor3.png"
                className="img-fluid mb-3"
                alt="1.86MM INDOOR LED EKRAN"
                style={{ borderRadius: "12px" }}
              />
              
            </div>
          </div>
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-indoor186" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="productInfoTab-186"
                  data-bs-toggle="tab"
                  data-bs-target="#productInfoContent-186"
                  type="button"
                  role="tab"
                  aria-controls="productInfoContent-186"
                  aria-selected="true"
                >
                  Ürün Bilgisi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fs-5"
                  id="parametersTab-186"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-186"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-186"
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
            <div className="tab-content pt-4 fs-5" id="myTabContents-indoor186">
              {/* Ürün Bilgisi */}
              <div
                className="tab-pane fade show active"
                id="productInfoContent-186"
                role="tabpanel"
                aria-labelledby="productInfoTab-186"
              >
                <ul>
                  <li><b>Model Name:</b>KentLed 1.86mm</li>
                  <li><b>Pixel Pitch(mm):</b> 1.86</li>
                  <li><b>Pixel Density(dot/m²):</b>288.906</li>
                  <li><b>Led Type:</b>SMD1515</li>
                  <li><b>Module Size(mm*mm):</b>172*86</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b>140</li>
                  <li><b>Vertical Viewing Angle (Deg):</b>140</li>
                  <li><b>Brightness (cd/m2):</b>450</li>
                  <li><b>Grey Scale（bit）:</b>14</li>
                  <li><b>Refresh Rate (Hz):</b>3840</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b>370</li>
                  <li><b>Average Cabinet Power Consumption (w):</b>550</li>
                  <li><b>Cabinet Size (mm * mm):</b>576*576*42</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b>6</li>
                  <li><b>Cabinet Resolution (PX* PX):</b>480*480</li>
                  <li><b>Input Voltage:</b>110-240V</li>
                  <li><b>Waterproof Level:</b>IP20</li>
                  <li><b>Working Environment:</b>Indoor</li>
                </ul>
              </div>
              {/* Parametreler */}
              <div
                className="tab-pane fade"
                id="parametersContent-186"
                role="tabpanel"
                aria-labelledby="parametersTab-186"
              >
                <ul>
                  <li><b>Model Name:</b>KentLed 1.2mm</li>
                  <li><b>Pixel Pitch(mm):</b>1.2</li>
                  <li><b>Pixel Density(dot/m²):</b>694.444</li>
                  <li><b>Led Type:</b>SMD2121</li>
                  <li><b>Module Size(mm*mm):</b>192*192</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b>140</li>
                  <li><b>Vertical Viewing Angle (Deg):</b>140</li>
                  <li><b>Brightness (cd/m2):</b>1000</li>
                  <li><b>Grey Scale（bit）:</b>14</li>
                  <li><b>Refresh Rate (Hz):</b>1920</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b>134</li>
                  <li><b>Average Cabinet Power Consumption (w):</b>53.6</li>
                  <li><b>Cabinet Size (mm * mm):</b>576*576*42</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b>6</li>
                  <li><b>Cabinet Resolution (PX* PX):</b>480*480</li>
                  <li><b>Input Voltage:</b>110-240V</li>
                  <li><b>Waterproof Level:</b>IP20</li>
                  <li><b>Working Environment:</b>Indoor</li>
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
                    <img className="img-fluid" src="img/yatas.jpg" alt="yatas" />
                    <h5 style={{ marginLeft: "70px" }}>Yataş</h5>
                    <p className="text-primary" style={{ marginLeft: "45px" }}>Cevahir AVM</p>
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


          {/* 1.86MM INDOOR LED EKRAN Bitiş*/}

          {/* 2.5MM INDOOR LED EKRAN Başlangıc */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/indoor4.png" alt="2.5MM Indoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>2.5MM INDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#indoorLed25mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#indoorLed25mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı */}
<div className="modal fade" id="indoorLed25mmModal" tabIndex="-1" aria-labelledby="indoorLed25mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="indoorLed25mmModalLabel">2.5MM INDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          
          {/* Görsel ve Projeyi Gör butonu */}
          <div className="col-md-6 text-center" style={{ position: "relative" }}>
            <img
              id="zoomableImage"
              src="img/indoor4.png"
              className="img-fluid mb-3"
              alt="2.5MM INDOOR LED EKRAN"
              style={{ borderRadius: "12px" }}
            />
            
          </div>

          {/* Parametre sekmesi */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-indoor25" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="parametersTab-25"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-25"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-25"
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

            <div className="tab-content pt-4 fs-5" id="myTabContents-indoor25">
              <div
                className="tab-pane fade show active"
                id="parametersContent-25"
                role="tabpanel"
                aria-labelledby="parametersTab-25"
              >
                <ul>
                  <li><b>Model Name:</b> KentLed2.5mm</li>
                  <li><b>Pixel Pitch(mm):</b> 2.5</li>
                  <li><b>Pixel Density(dot/m²):</b> 160.000</li>
                  <li><b>Led Type:</b> SMD2727</li>
                  <li><b>Module Size(mm*mm):</b> 250*250</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 140°</li>
                  <li><b>Brightness (nits/m2):</b> 1200</li>
                  <li><b>Grey Scale（bit）:</b> 16bit</li>
                  <li><b>Refresh Rate (Hz):</b> ≥1920</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 500</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 175</li>
                  <li><b>Cabinet Size (mm * mm):</b> 500*500*86</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 14</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 200*200</li>
                  <li><b>Input Voltage:</b> 110-220V</li>
                  <li><b>Waterproof Level:</b> IP30</li>
                  <li><b>Working Environment:</b> Indoor</li>
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
                    <img className="img-fluid" src="img/karsılamasalonu.jpg" alt="karsılamasalonu" />
                    <h5 style={{ marginLeft: "20px" }}>Karşılama Salonu</h5>
                    <p className="text-primary" style={{ marginLeft: "40px" }}>Zeytinburnu Belediyesi</p>
                  </div>
                  {/* Örnek Proje 2 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/watsons.jpg" alt="watsons" />
                    <h5 style={{ marginLeft: "70px" }}>Watsons</h5>
                    <p className="text-primary" style={{ marginLeft: "65px" }}>Zorlu AVM</p>
                  </div>
                  {/* Örnek Proje 3 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/satisofisi.jpg" alt="satisofisi"/>
                    <h5 style={{ marginLeft: "70px" }}>Satış Ofisi</h5>
                    <p className="text-primary" style={{ marginLeft: "60px" }}>Emlak Konut</p>
                  </div>
                  {/* Örnek Proje 4 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/konferansfatih.jpg" alt="konferansfatih"/>
                    <h5 style={{ marginLeft: "20px" }}>Konferans Salonu</h5>
                    <p className="text-primary" style={{ marginLeft: "30px" }}>Fatih Belediyesi</p>
                  </div>
                   {/* Örnek Proje 5 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/konferans.jpg" alt="konferans"/>
                    <h5 style={{ marginLeft: "20px" }}>Konferans Salonu</h5>
                    <p className="text-primary" style={{ marginLeft: "6px" }}>Başakşehir Belediyesi</p>
                  </div>
                   {/* Örnek Proje 6 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/colins.jpg" alt="colins"/>
                    <h5 style={{ marginLeft: "20px" }}>Colin's</h5>
                    <p className="text-primary" style={{ marginLeft: "6px" }}>Forum İstanbul</p>
                  </div>
                   {/* Örnek Proje 7 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/performance.jpg" alt="Performance"/>
                    <h5 style={{ marginLeft: "20px" }}>Perfromance Spor</h5>
                    <p className="text-primary" style={{ marginLeft: "25px" }}>Marmara Forum</p>
                  </div>
                  {/* Örnek Proje 8 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/sirkecigar.jpg" alt="sirkecigar"/>
                    <h5 style={{ marginLeft: "50px" }}>Sirkeci Gar</h5>
                    <p className="text-primary" style={{ marginLeft: "70px" }}>TCDD</p>
                  </div>
                  {/* Örnek Proje 9 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/fame.jpg" alt="Fame"/>
                    <h5 style={{ marginLeft: "50px" }}>Fame</h5>
                    <p className="text-primary" style={{ marginLeft: "70px" }}>Merter</p>
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
{/* 2.5MM INDOOR LED EKRAN Bitiş */}


          {/* 3.0MM INDOOR LED EKRAN Başlangıc */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/indoor5.png" alt="3.0MM Indoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>3.0MM INDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#indoorLed30mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#indoorLed30mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı - 3.0MM INDOOR LED EKRAN */}
<div className="modal fade" id="indoorLed30mmModal" tabIndex="-1" aria-labelledby="indoorLed30mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="indoorLed30mmModalLabel">3.0MM INDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          {/* Sol taraf */}
          <div className="col-md-6 text-center" style={{ position: "relative" }}>
            <img
              id="zoomableImage"
              src="img/indoor5.png"
              className="img-fluid mb-3"
              alt="3.0MM INDOOR LED EKRAN"
              style={{ borderRadius: "12px" }}
            />
          </div>

          {/* Sağ taraf: Parametre ve PROJELER sekmeleri */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-indoor30" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="parametersTab-30"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-30"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-30"
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

            {/* Tab İçerikleri */}
            <div className="tab-content pt-4 fs-5" id="myTabContents-indoor30">
              {/* Parametreler */}
              <div
                className="tab-pane fade show active"
                id="parametersContent-30"
                role="tabpanel"
                aria-labelledby="parametersTab-30"
              >
                <ul>
                  <li><b>Model Name:</b> Kentled3.00mm</li>
                  <li><b>Pixel Pitch(mm):</b> 3.00</li>
                  <li><b>Pixel Density(dot/m²):</b> 111111</li>
                  <li><b>Led Type:</b> SMD2121</li>
                  <li><b>Module Size(mm*mm):</b> 240*240</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 140</li>
                  <li><b>Brightness (nits):</b> 800</li>
                  <li><b>Grey Scale（bit）:</b> 14</li>
                  <li><b>Refresh Rate (Hz):</b> 1920</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 100</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 30</li>
                  <li><b>Cabinet Size (mm * mm):</b> 480*480*68</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 6.4</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 160*160</li>
                  <li><b>Cabinet Material:</b> Al</li>
                  <li><b>Input Voltage (AC):</b> 110-220/200-240</li>
                  <li><b>Waterproof Level:</b> IP20</li>
                  <li><b>Working Environment:</b> Indoor</li>
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
                    <img className="img-fluid" src="img/karsilamaisbak.jpg" alt="karsilamaisbak" />
                    <h5 style={{ marginLeft: "20px" }}>Karşılama Salonu </h5>
  
                    <p className="text-primary" style={{ marginLeft: "70px" }}>İsbak</p>
                  </div>
                  {/* Örnek Proje 2 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/interia.jpg" alt="interia" />
                    <h5 style={{ marginLeft: "70px" }}>İnteria</h5>
                    <p className="text-primary" style={{ marginLeft: "10px" }}>Home Design center</p>
                  </div>
                  {/* Örnek Proje 3 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/konferansbeyoglu.jpg" alt="konferansbeyoglu" />
                    <h5 style={{ marginLeft: "70px" }}>Konferans Salonu</h5>
                    <p className="text-primary" style={{ marginLeft: "10px" }}>Beyoğlu Belediyesi</p>
                  </div>
                  {/* Örnek Proje 4 */}
                  <div className="col-lg-5 col-md-6 wow fadeInUp">
                    <img className="img-fluid" src="img/konferanssalonu.jpg" alt="konferanssalonu" />
                    <h5 style={{ marginLeft: "70px" }}>Konferans Salonu</h5>
                    <p className="text-primary" style={{ marginLeft: "10px" }}>Arnavutköy Belediyesi</p>
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
{/* 3.0MM INDOOR LED EKRAN Bitiş */}


{/* 3.75MM INDOOR LED EKRAN Başlangıc */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/indoor6.png" alt="3.75MM Indoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>3.75MM INDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#indoorLed375mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#indoorLed375mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı - 3.75MM INDOOR LED EKRAN */}
<div className="modal fade" id="indoorLed375mmModal" tabIndex="-1" aria-labelledby="indoorLed375mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="indoorLed375mmModalLabel">3.75MM INDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          
          {/* Sol taraf: Görsel + Projeyi Gör Butonu */}
          <div className="col-md-6 text-center" style={{ position: "relative" }}>
            <img
              id="zoomableImage"
              src="img/indoor6.png"
              className="img-fluid mb-3"
              alt="3.75MM INDOOR LED EKRAN"
              style={{ borderRadius: "12px" }}
            />
            
          </div>

          {/* Sağ taraf: Parametreler */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-indoor375" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="parametersTab-375"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-375"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-375"
                  aria-selected="true"
                >
                  Parametreler
                </button>
              </li>
            </ul>

            <div className="tab-content pt-4 fs-5" id="myTabContents-indoor375">
              <div
                className="tab-pane fade show active"
                id="parametersContent-375"
                role="tabpanel"
                aria-labelledby="parametersTab-375"
              >
                <ul>
                  <li><b>Model:</b> KentLed3.75</li>
                  <li><b>Pixel Pitch(mm):</b> 3.75</li>
                  <li><b>Pixel Density(dot/m²):</b> 71111</li>
                  <li><b>Led Type:</b> SMD2121</li>
                  <li><b>Module Size(mm*mm):</b> 240*240</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 140</li>
                  <li><b>Brightness (cd/m2):</b> 1200</li>
                  <li><b>Grey Scale（bit）:</b> 14～15</li>
                  <li><b>Refresh Rate (Hz):</b> ≥2500</li>
                  <li><b>Maximum Cabinet Power Consumption (w/sqm):</b> 720-550</li>
                  <li><b>Average Cabinet Power Consumption (w/sqm):</b> 240-180</li>
                  <li><b>Cabinet Size (mm * mm):</b> L480*H480*T75</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 12.5</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 128*128</li>
                  <li><b>Angle Adjustment (optional):</b> optional</li>
                  <li><b>Input Voltage (AC):</b> 110-220V</li>
                  <li><b>Waterproof Level:</b> IP30</li>
                  <li><b>Working Environment:</b> Indoor</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* 3.75MM INDOOR LED EKRAN Bitiş */}


          {/* 4MM INDOOR LED EKRAN Başlangıc */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/indoor7.png" alt="4MM Indoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>4MM INDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#indoorLed4mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#indoorLed4mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı - 4MM INDOOR LED EKRAN */}
<div className="modal fade" id="indoorLed4mmModal" tabIndex="-1" aria-labelledby="indoorLed4mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="indoorLed4mmModalLabel">4MM INDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          
          {/* Sol taraf: Görsel + Projeyi Gör Butonu */}
          <div className="col-md-6 text-center" style={{ position: "relative" }}>
            <img
              id="zoomableImage"
              src="img/indoor7.png"
              className="img-fluid mb-3"
              alt="4MM INDOOR LED EKRAN"
              style={{ borderRadius: "12px" }}
            />
            
          </div>

          {/* Sağ taraf: Parametreler */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-indoor4" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="parametersTab-4"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-4"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-4"
                  aria-selected="true"
                >
                  Parametreler
                </button>
              </li>
            </ul>

            <div className="tab-content pt-4 fs-5" id="myTabContents-indoor4">
              <div
                className="tab-pane fade show active"
                id="parametersContent-4"
                role="tabpanel"
                aria-labelledby="parametersTab-4"
              >
                <ul>
                  <li><b>Model name:</b> KentLed4.00mm</li>
                  <li><b>Pixel Pitch(mm):</b> 4.00mm</li>
                  <li><b>Pixel Density(dot/m²):</b> 62500</li>
                  <li><b>Led Type:</b> SMD2727</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 140</li>
                  <li><b>Brightness (nits/m2):</b> 1500</li>
                  <li><b>Grey Scale（bit）:</b> 14bit</li>
                  <li><b>Refresh Rate (Hz):</b> 1920</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> 450</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> 150</li>
                  <li><b>Cabinet Size (mm * mm):</b> 512*512*70</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 15</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 128*128</li>
                  <li><b>Input Voltage:</b> 100V-240V</li>
                  <li><b>Waterproof Level:</b> IP30</li>
                  <li><b>Working Environment:</b> Indoor</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* 4MM INDOOR LED EKRAN Bitiş */}


          {/* 5MM INDOOR LED EKRAN Başlangıc */}
<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="team-item position-relative rounded overflow-hidden equal-card">
    <div className="overflow-hidden">
      <img className="img-fluid" src="img/indoor8.png" alt="5MM Indoor Led Ekran" />
    </div>
    <div className="team-text bg-light text-center p-4">
      <h5>5MM INDOOR LED EKRAN</h5>
      <div className="team-social text-center">
        <a
          href="#indoorLed5mmModal"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#indoorLed5mmModal"
        >
          Detaylar
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Tanımı - 5MM INDOOR LED EKRAN */}
<div className="modal fade" id="indoorLed5mmModal" tabIndex="-1" aria-labelledby="indoorLed5mmModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="indoorLed5mmModalLabel">5MM INDOOR LED EKRAN</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        <div className="row align-items-center">
          
          {/* Sol taraf: Görsel + Projeyi Gör Butonu */}
          <div className="col-md-6 text-center" style={{ position: "relative" }}>
            <img
              id="zoomableImage"
              src="img/indoor8.png"
              className="img-fluid mb-3"
              alt="5MM INDOOR LED EKRAN"
              style={{ borderRadius: "12px" }}
            />
            
          </div>

          {/* Sağ taraf: Parametreler */}
          <div className="col-md-6">
            <ul className="nav nav-tabs" id="myTabs-indoor5" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fs-5"
                  id="parametersTab-5"
                  data-bs-toggle="tab"
                  data-bs-target="#parametersContent-5"
                  type="button"
                  role="tab"
                  aria-controls="parametersContent-5"
                  aria-selected="true"
                >
                  Parametreler
                </button>
              </li>
            </ul>

            <div className="tab-content pt-4 fs-5" id="myTabContents-indoor5">
              <div
                className="tab-pane fade show active"
                id="parametersContent-5"
                role="tabpanel"
                aria-labelledby="parametersTab-5"
              >
                <ul>
                  <li><b>Model:</b> KentLed5.00</li>
                  <li><b>Pixel Pitch(mm):</b> 5.00</li>
                  <li><b>Pixel Density(dot/m²):</b> 40.000</li>
                  <li><b>Led Type:</b> SMD3535</li>
                  <li><b>Module Size (mm * mm):</b> 240*240</li>
                  <li><b>Horizontal Viewing Angle (Deg):</b> 140°</li>
                  <li><b>Vertical Viewing Angle (Deg):</b> 140°</li>
                  <li><b>Brightness (nits):</b> 2500</li>
                  <li><b>Grey Scale（bit）:</b> 14</li>
                  <li><b>Refresh Rate (Hz):</b> ≥2500</li>
                  <li><b>Maximum Cabinet Power Consumption (w):</b> ≤600</li>
                  <li><b>Average Cabinet Power Consumption (w):</b> ≤260</li>
                  <li><b>Cabinet Size (mm * mm):</b> 480*480*80</li>
                  <li><b>Cabinet Weight (±0.25Kg):</b> 17</li>
                  <li><b>Cabinet Resolution (PX* PX):</b> 96*96</li>
                  <li><b>Cabinet Material:</b> Aluminum</li>
                  <li><b>Input Voltage （AC）:</b> 110-240V</li>
                  <li><b>Waterproof Level:</b> IP30</li>
                  <li><b>Working Environment:</b> Indoor</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* 5MM INDOOR LED EKRAN Bitiş */}

        </div>
      </div>
    </div>
    {/* Feature End */}
    {/* Footer Start */}
    <Footer/>
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
  </div>
  );
}export default ProductIndoor;