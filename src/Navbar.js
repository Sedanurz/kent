import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
      <NavLink to="/Main" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img src="https://kentled.com/wp-content/uploads/2021/11/kent-led-logo.png" style={{ maxWidth: '140px' }} alt="Kent LED Logo" />
      </NavLink>
      
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      
      <div className="collapse navbar-collapse text-center" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0 text-center">
          <a href="/Main" className="nav-item nav-link">ANASAYFA</a>
          <a href="/About" className="nav-item nav-link">HAKKIMIZDA</a>
          <div className="nav-item dropdown">
                             <a
  href="/Product"
  className="nav-link dropdown-toggle"
  // Mobil için Bootstrap dropdown'ını şartlı olarak aktifleştir
  {...(window.innerWidth <= 768 ? { 'data-bs-toggle': 'dropdown' } : {})}
  onClick={(e) => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Mobil: Dropdown davranışı
      const dropdownElement = e.currentTarget.nextElementSibling;
      let clickCount = parseInt(e.currentTarget.dataset.clickCount || '0');
      clickCount += 1;
      
      if (clickCount === 1) {
        e.preventDefault();
        if (dropdownElement) {
          dropdownElement.classList.add('show');
        }
      } else if (clickCount === 2) {
        window.location.href = '/Product';
        return;
      } else {
        e.preventDefault();
        if (dropdownElement) {
          dropdownElement.classList.remove('show');
        }
        clickCount = 0;
      }
      
      e.currentTarget.dataset.clickCount = clickCount.toString();
    }
    // Masaüstü: Hiçbir preventDefault yok, normal link davranışı
  }}
>
  Ürünler
</a>
            <div className="dropdown-menu rounded-0 rounded-bottom m-0">
              <a href="/ProductIndoor" className="dropdown-item">Indoor</a>
              <a href="/ProductOutdoor" className="dropdown-item">Outdoor</a>
              <a href="/ProductAcikHava" className="dropdown-item">Açık Hava Reklamcılığı</a>
              <a href="/ProductStadyum" className="dropdown-item">Stadyum ve Spor Salonları</a>
            </div>
          </div>
          <div className="nav-item dropdown">
<a
  href="/projects"
  className="nav-link dropdown-toggle"
  // Mobil için Bootstrap dropdown'ını şartlı olarak aktifleştir
  {...(window.innerWidth <= 768 ? { 'data-bs-toggle': 'dropdown' } : {})}
  onClick={(e) => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Mobil: Dropdown davranışı
      const dropdownElement = e.currentTarget.nextElementSibling;
      let clickCount = parseInt(e.currentTarget.dataset.clickCount || '0');
      clickCount += 1;
      
      if (clickCount === 1) {
        e.preventDefault();
        if (dropdownElement) {
          dropdownElement.classList.add('show');
        }
      } else if (clickCount === 2) {
        window.location.href = '/Product';
        return;
      } else {
        e.preventDefault();
        if (dropdownElement) {
          dropdownElement.classList.remove('show');
        }
        clickCount = 0;
      }
      
      e.currentTarget.dataset.clickCount = clickCount.toString();
    }
    // Masaüstü: Hiçbir preventDefault yok, normal link davranışı
  }}
>
  PROJELERİMİZ
</a>
            <div className="dropdown-menu rounded-0 rounded-bottom m-0">
              <a href="/Indoor" className="dropdown-item">Indoor</a>
              <a href="/Outdoor" className="dropdown-item">Outdoor</a>
              <a href="/Mobilled" className="dropdown-item">Mobil Led</a>
              <a href="/ClpScreen" className="dropdown-item">CLP Ekran</a>
            </div>
          </div>
          
          <a href="/Referance" className="nav-item nav-link">REFERANSLAR</a>
          <a href="/contacts" className="nav-item nav-link">İLETİŞİM</a>
          <a href="/SSS" className="nav-item nav-link">SSS</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;