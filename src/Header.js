
function Header() {
  return (
    <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4" />
        <div className="h-100 d-inline-flex align-items-center py-3" />
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-phone-alt text-primary me-2" />
          <small>0212 659 40 70</small>
          <small className="fa fa-envelope text-primary me-2 ms-4" />
          <small>info@kentled.com</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="https://www.facebook.com/kenttled" style={{ transition: 'transform 0.5s ease' }}><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="https://www.youtube.com/@kentled6054" style={{ transition: 'transform 0.5s ease' }}><i className="fab fa-youtube" /></a>
          <a className="btn btn-sm-square rounded-circle bg-white text-primary me-0"  href="https://www.instagram.com/kent_led/" style={{ transition: 'transform 0.5s ease' }}><i className="fab fa-instagram" /></a>
        </div>
      </div>
    </div>
  </div>
  );
}export default Header;