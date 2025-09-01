
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
function About() {
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
          HAKKIMIZDA
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
              HAKKIMIZDA
            </li>
          </ol>
        </nav>
      </div>
    </div>
              {/* Page Header End */}
              
              {/* About Start */}
              <div className="container-xxl py-3">
                <div className="container">
                    <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex flex-column">
                        <img
                            className="img-fluid rounded w-75 align-self-end"
                            src="/img/totem.png"
                            alt
                        />
                        <img
                            className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                            src="/img/14-e1724315931549.jpg"
                            alt
                            style={{ height: 300, width: "auto", marginTop: "-25%" }}
                        />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p className="d-inline-block border rounded-pill py-1 px-4" style={{ fontSize: '24px'}}>Biz Kimiz?</p>
                        <h1 className="mb-3">KentLed'e Dair Merak Ettikleriniz:</h1>
                        <p>
                        KentLed, 2010 yılında bilişim dünyasında faaliyette bulunmak üzere
                        kurulmuştur. Bilgisayar ve çevre ürünlerinin satış, dağıtım ve satış
                        sonrası hizmetlerini vererek kısa zamanda önemli müşteri portföyüne
                        ulaşmıştır.
                        </p>
                        <p>
                        Müşterilerinin ihtiyaçlarına uygun, doğru ve verimli çözümler sunarak
                        bir taraftan müşteri tabanını geliştirmiş, diğer taraftan da ürün ve
                        hizmet çeşitliliğini arttırmıştır. Özellikle kobilerin her türlü
                        bilişim ve altyapı ihtiyaçlarını karşılayacak uçtan uca çözümleri,
                        kurumsa iş ortaklığı anlayışı sunarak, ürün ve hizmet spekturumunu
                        yaygınlaştırmıştır. Aktif ve pasif ağ altyapılarından, uygulamalara
                        uygun sunucu sistemlerine; kurumsal internet ve web hizmetlerinden,
                        Kobi odaklı yazılım uygulama ve destek danışmanlığına kadar bir çok
                        hizmet sunmaktadır.
                        </p>
                        <p className="text-primary mb-4">
                        Müşteri memnuniyetini sağlama ve etkin hizmet hedefi sunma ile, TSE
                        hizmet yeterlilik ve ISO 9001:2008 kalite yönetim sistemini edinerek
                        kurumsal yapılanmasını güçlendirmiştir.
                        </p>
                        <p>
                        <i className="far fa-check-circle text-primary me-3" />
                        Müşteri Memnuniyeti
                        </p>
                        <p>
                        <i className="far fa-check-circle text-primary me-3" />
                        Teknoloji Uyumluluğu
                        </p>
                        <p>
                        <i className="far fa-check-circle text-primary me-3" />
                        Hizmet Kalitesi
                        </p>
                        <a
                        className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                        href="#policies"
                        >
                        Politikalarımız
                        <i className="fa fa-arrow-right text-white ms-1" />
                        </a>
                    </div>
                    </div>
                </div>
             </div>
             {/* About End */}
             
             {/* Politikalar Start */}
             <div
                className="container-xxl py-5"
                id="policies"
                style={{ scrollMarginTop: 80 }}
                >
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex flex-column">
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
                                        Kalite Politikamız
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
                                        Çevre Politikamız
                                    </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link fs-5"
                                        id="contact-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact"
                                        aria-selected="false"
                                    >
                                        Bilgi Güvenliği Politikamız
                                    </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div
                                    className="tab-pane fade show active pt-4 fs-5"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                    >
                                    <p>KENT TEKNOLOJİ MÜŞTERİLERİNE;</p>
                                    <ul>
                                        <li>Müşterilerine kaliteli hizmet sunmayı,</li>
                                        <li>Kalite Yönetim Sistemine uygun çalışmayı,</li>
                                        <li>
                                        Tüm faaliyetlerinde ahlak kurallarına uymayı ve dürüst olmayı,
                                        </li>
                                        <li>Müşterilerin memnuniyetini sağlamayı,</li>
                                        <li>
                                        Tüm çalışanların katılımıyla sistemi sürekli iyileştirmeyi ve
                                        geliştirmeyi,
                                        </li>
                                        <li>Sektöründe yeniliklerde öncü olmayı,</li>
                                    </ul>
                                    <p className="fw-bold">TAAHHÜT ETMEKTEDİR.</p>
                                    </div>
                                    <div
                                    className="tab-pane fade pt-4 fs-5"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                    >
                                    <p>
                                        Çevremizi korumak ve sürekliliğini sağlamak için, tüm çevre
                                        yasaları ve yönetmeliklerine uyarak çevre etkilerini kontrol
                                        altında tutmak ve etkilerini azaltarak çevre performansımızı
                                        sürekli iyileştirmek ve bu bilinci gerçekleştirerek, gelecek
                                        kuşaklara yaşanılabilir temiz bir çevre bırakmaktır.
                                    </p>
                                    <ul>
                                        <li>
                                        Çevre ile ilgili tüm yasal gereklilikler ile müşteri
                                        gerekliliklerini sağlayarak, sürekli gelişim ve iyileştirme
                                        sağlamayı,
                                        </li>
                                        <li>
                                        Ofis yatırımlarında çevresel etkileri göz önünde bulundurmayı,
                                        </li>
                                        <li>
                                        Tüm atıklarımızı minimuma indirmek, kirliliği kaynağında
                                        önlemek, mümkün olduğunca geri kazanmayı, geri kazanımı
                                        olmayan atıklarımızı çevreye zarar vermeyecek şekilde bertaraf
                                        etmeyi, ettirmeyi böylece çevre üzerindeki etkilerini
                                        azaltmayı,
                                        </li>
                                        <li>
                                        Çalışanlarımıza, tedarikçi ve taşeronlarımıza çevre ile ilgili
                                        eğitimler vererek onları çevre konusunda bilinçlendirmeyi,
                                        </li>
                                        <li>
                                        Çevresel performansımızın artması yönünde çevre yönetim
                                        sistemimizi sürekli iyileştirmeyi,
                                        </li>
                                        <li>
                                        Bu amaç ve hedeflere ulaşmak için periyodik olarak gözden
                                        geçirmelerini,
                                        </li>
                                    </ul>
                                    <p className="fw-bold">TAAHHÜT ETMEKTEDİR.</p>
                                    </div>
                                    <div
                                    className="tab-pane fade pt-4 fs-5"
                                    id="contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                    >
                                    <p>
                                        Kurumun güvenilirliğini ve temsil ettiği makamın imajını
                                        korumak,
                                    </p>
                                    <ul>
                                        <li>
                                        Üçüncü taraflarla yapılan sözleşmelerde belirlenmiş uygunluğu
                                        sağlamak,
                                        </li>
                                        <li>
                                        Kurumun temel ve destekleyici iş faaliyetlerinin en az kesinti
                                        ile devam etmesini sağlamak,
                                        </li>
                                        <li>
                                        Gelişmeleri yakından takip ederek çalışanlarla paylaşmak,
                                        </li>
                                        <li>İlgili prosedürleri oluşturmak,</li>
                                        <li>
                                        BGYS ile ilgili görev ve sorumlulukları belirlemek ve
                                        tanımlamak,
                                        </li>
                                    </ul>
                                    <p>
                                        Amacıyla kurum bilişim hizmetlerinin gerçekleştirilmesinde
                                        kullanılan tüm fiziksel ve elektronik bilgi varlıklarının bilgi
                                        güvenliğini sağlamayı politika olarak benimsemiştir.
                                    </p>
                                    <p>
                                        “Bilgi Güvenliği Politikası”nın uygulanmasının, sağlanmasının ve
                                        kontrolünün yapılmasının, güvenlik ihlallerinde de gerekli
                                        yaptırımın icra edilmesinin yönetim tarafından desteklendiğini,
                                    </p>
                                    <p className="fw-bold">TAAHHÜT ETMEKTEDİR.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             {/* Politikalar End */}
            
              {/* Footer Start */}
              <Footer/> 
              {/* Footer End */}
              {/* Back to Top */}
              <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
              {/* JavaScript Libraries */}
              {/* Template Javascript */}
            </div>
          );
} export default About;