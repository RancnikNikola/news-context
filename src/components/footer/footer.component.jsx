
import { FaFacebookF, FaGoogle, FaTwitter, FaPlay } from "react-icons/fa";
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-social'>
                <span>{ <FaFacebookF /> }</span>
                <span>{ <FaTwitter /> }</span>
                <span>{ <FaPlay /> }</span>
                <span>{ <FaGoogle /> }</span>
            </div>
            <div className="footer-copyright">
                <p>
                    <span>&copy;</span>
                    2022 infozona.hr
                </p>
            </div>
            <div className="footer-nav">
                <ul>
                    <li>impressum</li>
                    <li>pravila korištenja</li>
                    <li>kontakt</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;