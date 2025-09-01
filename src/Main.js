
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import HeaderCarousel from './HeaderCarousel';
import ReferenceCarousel from './ReferenceCarousel';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Main() {
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

            {/* Header Start */}
            <HeaderCarousel/>
            {/* Header End */}
              
            {/* About Start */}
            <div className="container-xxl py-3 pt-1">
                <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex flex-column">
                        <img className="img-fluid rounded w-75 align-self-end" src="/img/totem.png" alt="" />
                        <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="/img/14-e1724315931549.jpg" alt="" style={{height: '300px', width: 'auto', marginTop: '-25%'}} />
                    </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p className="d-inline-block border rounded-pill py-1 px-4" style={{ fontSize: '24px'}}>Biz Kimiz?</p>
                    <h1 className="mb-3">KentLed'e Dair Merak Ettikleriniz:</h1>
                    <p>
                        KentLed, 2010 yılında bilişim dünyasında faaliyette bulunmak üzere kurulmuştur. 
                        Bilgisayar ve çevre ürünlerinin satış, dağıtım ve satış sonrası hizmetlerini vererek 
                        kısa zamanda önemli müşteri portföyüne ulaşmıştır.
                    </p>
                    <p>
                        Müşterilerinin ihtiyaçlarına uygun, doğru ve verimli çözümler sunarak bir taraftan 
                        müşteri tabanını geliştirmiş, diğer taraftan da ürün ve hizmet çeşitliliğini arttırmıştır. 
                        Özellikle kobilerin her türlü bilişim ve altyapı ihtiyaçlarını karşılayacak uçtan uca 
                        çözümleri, kurumsa iş ortaklığı anlayışı sunarak, ürün ve hizmet spekturumunu 
                        yaygınlaştırmıştır. Aktif ve pasif ağ altyapılarından, uygulamalara uygun sunucu 
                        sistemlerine; kurumsal internet ve web hizmetlerinden, Kobi odaklı yazılım uygulama 
                        ve destek danışmanlığına kadar bir çok hizmet sunmaktadır.
                    </p>
                    <p className="text-primary mb-4">
                        Müşteri memnuniyetini sağlama ve etkin hizmet hedefi sunma ile, TSE hizmet yeterlilik
                        ve ISO 9001:2008 kalite yönetim sistemini edinerek kurumsal yapılanmasını güçlendirmiştir.
                    </p>
                    <p><i className="far fa-check-circle text-primary me-3" />Müşteri Memnuniyeti</p>
                    <p><i className="far fa-check-circle text-primary me-3" />Teknoloji Uyumluluğu</p>
                    <p><i className="far fa-check-circle text-primary me-3" />Hizmet Kalitesi</p>
                    <div>
                        <Link 
                            to="/About#policies" 
                            className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                        >
                            Politikalarımız
                            <i className="fa fa-arrow-right text-white ms-1" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* About End */}

            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <p className="d-inline-block border rounded-pill py-1 px-4" style={{ fontSize: '24px'}}>İlkelerimiz</p>

                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5 text-center">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: '65px', height: '65px'}}>
                        <i className="fas fa-leaf text-primary fs-4" />
                        </div>
                        <h4 className="mb-3">Çevre Politikamız</h4>
                        <p className="mb-4">
                        Çevremizi korumak ve sürekliliğini sağlamak için, tüm çevre yasaları 
                        ve yönetmeliklerine uyarak politikalarımızı belirliyoruz.
                        </p>
                        <HashLink className="btn" smooth to="/About#policies">
                            <i className="fa fa-plus text-primary me-3" />
                            Daha Fazla
                        </HashLink>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5 text-center">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: '65px', height: '65px'}}>
                        <i className="far fa-keyboard text-primary fs-4" />
                        </div>
                        <h4 className="mb-3">Kent Teknoloji</h4>
                        <p className="mb-4">
                        Kent Teknoloji 2010 yılında bilişim dünyasında faaliyette bulunmak üzere kurulmuştur.
                        </p>
                        <HashLink className="btn" smooth to="/About#policies">
                            <i className="fa fa-plus text-primary me-3" />
                            Daha Fazla
                        </HashLink>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5 text-center">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: '65px', height: '65px'}}>
                        <i className="far fa-check-circle text-primary fs-4" />
                        </div>
                        <h4 className="mb-3">Kalite Politikamız</h4>
                        <p className="mb-4">
                        Tüm çalışanların katılımıyla sistemi sürekli iyileştirmeyi ve geliştirmeyi amaçlıyoruz.
                        </p>
                        <HashLink className="btn" smooth to="/About#policies">
                            <i className="fa fa-plus text-primary me-3" />
                            Daha Fazla
                        </HashLink>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Service End */}

            {/* Feature Start */}
            <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
                <div className="container feature px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 feature-text py-5 ps-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="p-lg-5 ps-lg-0">
                    <p className="d-inline-block border text-white rounded-pill py-1 px-4" style={{ fontSize: '24px'}}>Kent Led</p>
                        <h1 className="text-white mb-4">Neden Bizi Tercih Etmelisiniz?</h1>
                        <p className="text-white mb-4 pb-2">
                        Kent Teknoloji, proje görevlerini, müşteri memnuniyetini, müşteri sadakati ve teknoloji uyumluluğu
                        ilkelerine bağlı kalarak, hizmet kalitesini ve çeşitliliğini arttırmaya devam
                        ettirmeyi hedeflemektedir.
                        </p>
                        <div className="row g-4">
                        <div className="col-12 col-sm-6">
                            <div className="d-flex align-items-center">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: '55px', height: '55px'}}>
                                <i className="fa fa-user text-primary" />
                            </div>
                            <div className="ms-4">
                                <p className="text-white mb-2">Müşteri</p>
                                <h5 className="text-white mb-0">Memnuniyeti</h5>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="d-flex align-items-center">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: '55px', height: '55px'}}>
                                <i className="fa fa-check text-primary" />
                            </div>
                            <div className="ms-4">
                                <p className="text-white mb-2">Kaliteli</p>
                                <h5 className="text-white mb-0">Hizmet</h5>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="d-flex align-items-center">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: '55px', height: '55px'}}>
                                <i className="fas fa-hands-helping text-primary" />
                            </div>
                            <div className="ms-4">
                                <p className="text-white mb-2">Sorumluluk</p>
                                <h5 className="text-white mb-0">İlkesi</h5>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="d-flex align-items-center">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: '55px', height: '55px'}}>
                                <i className="fas fa-tv text-primary" />
                            </div>
                            <div className="ms-4">
                                <p className="text-white mb-2">Teknoloji</p>
                                <h5 className="text-white mb-0">Uyumluluğu</h5>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: '400px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/img/3P2A2324-1.jpg" style={{objectFit: 'cover'}} alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Feature End */}

            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <p className="d-inline-block border rounded-pill py-1 px-4" style={{ fontSize: '24px'}}>Ürünlerimiz</p>

                    <h1>KentLed Teknoloji Çözümlerimiz</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                        <img className="img-fluid" src="/img/3-6.jpg" alt="" style={{height: '360px'}} />
                        </div>
                        <div className="team-text bg-light text-center p-4">
                        <h5>OUTDOOR</h5>
                        <p className="text-primary">KentLed Outdoor Ürünleri</p>
                        <div className="team-social text-center">
                            <a className="btn btn-square" href="/ProductOutdoor"><i className="fa fa-arrow-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                        <img className="img-fluid" src="/img/2.jpg" alt="" style={{height: '360px'}} />
                        </div>
                        <div className="team-text bg-light text-center p-4">
                        <h5>INDOOR</h5>
                        <p className="text-primary">KentLed Indoor Ürünleri</p>
                        <div className="team-social text-center">
                            <a className="btn btn-square" href="/ProductIndoor"><i className="fa fa-arrow-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                        <img className="img-fluid" src="/img/4-8.jpg" alt="" style={{height: '360px'}} />
                        </div>
                        <div className="team-text bg-light text-center p-3 pt-1">
                        <h5>AÇIK HAVA İLETİŞİM ALANLARI</h5>
                        <p className="text-primary">KentLed Açık Hava Ürünleri</p>
                        <div className="team-social text-center">
                            <a className="btn btn-square" href="/Product"><i className="fa fa-arrow-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                        <img className="img-fluid" src="/img/1-1.jpg" alt="" style={{height: '360px'}} />
                        </div>
                        <div className="team-text bg-light text-center p-3 pt-1">
                        <h5>STADYUM VE SPOR SALONLARI</h5>
                        <p className="text-primary">KentLed Spor Ürünleri</p>
                        <div className="team-social text-center">
                            <a className="btn btn-square" href="/ProductStadyum"><i className="fa fa-arrow-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Team End */}

            {/* Testimonial Start */}
            {/* Swiper */}
            <ReferenceCarousel/>
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
} export default Main;
