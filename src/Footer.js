function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-6">
          <h5 className="text-light mb-4">Adres</h5>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />İstoç Ticaret Merkezi 30. Ada No : 85 Bağcılar / İstanbul</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />0212 659 40 70</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />info@kentled.com</p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social rounded-circle" href="https://www.facebook.com/kenttled"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social rounded-circle" href="https://www.youtube.com/@kentled6054"><i className="fab fa-youtube" /></a>
            <a className="btn btn-outline-light btn-social rounded-circle" href="https://www.instagram.com/kent_led/"><i className="fab fa-instagram" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Projelerimiz</h5>
          <a className="btn btn-link" href="/Indoor">Indoor</a>
          <a className="btn btn-link" href="/Outdoor">Outdoor</a>
          <a className="btn btn-link" href="/Mobilled">Mobil Led</a>
          <a className="btn btn-link" href="/ClpScreen">CLP Ekran</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Hızlı Bağlantılar</h5>
          <a className="btn btn-link" href="/">Anasayfa</a>
          <a className="btn btn-link" href="/About">Hakkımızda</a>
          <a className="btn btn-link" href="/Product">Ürünler</a>
          <a className="btn btn-link" href="/projects">Projelerimiz</a>
          <a className="btn btn-link" href="/Referance">Referanslarımız</a>
          <a className="btn btn-link" href="/contacts">İletişim</a>
          <a className="btn btn-link" href="/SSS">SSS</a>
        </div>
      
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-end mb-3 mb-md-0 ">
            © <a className="border-bottom" href="#">KentLed</a>, Tüm Hakları Saklıdır.
          </div>
          <div className="col-md-6 text-center text-md-end">
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <a className="border-bottom" href="https://htmlcodex.com" >MİBS</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}export default Footer;
