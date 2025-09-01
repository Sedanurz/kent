import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
function SSS() {
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
          SIKÇA SORULAN SORULAR
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
              SSS
            </li>
          </ol>
        </nav>
      </div>
    </div>
              {/* Page Header End */}

              <div className="container-xxl py-5">
                <div className="container">
                  <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1>Sıkça Sorulan Sorular</h1>
                  </div>

                 
                
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              OUTDOOR BİR İŞİN ORTALAMA BİTME SÜRESİ NEDİR?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              INDOOR BİR İŞİN ORTALAMA BİTME SÜRESİ NEDİR?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              YAPILAN İŞ SONRASINDA TEKNİK DESTEK ALABİLİR MİYİM?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
}   export default SSS;