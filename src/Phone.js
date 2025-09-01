import './Phone.css'; // CSS dosyasını import edin
import { FaPhone } from 'react-icons/fa';
 
const Phone = () => {
return (
    <div className="phone-wrapper">
        <a href="tel:905419003434" className="phone-button">
             <FaPhone size={35} />
            <span className="phone-text">Bizi Arayın</span>
        </a>
    </div>
);
};
 
export default Phone;