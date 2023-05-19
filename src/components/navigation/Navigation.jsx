import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/footer.component";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineInfo } from 'react-icons/ai';
import TextCarousel from "../text-carousel/text-carousel.component";
import './navigation.styles.scss';

const texts = [
  'Serija Radionica u Klubu Zona', 
  'Prijavi se na split shapers day!', 
  'Podcasti u zoni', 
  'Uđi u građanski inkubator', 
];
const duration = 2500;


const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const openNewWindow = (e) => {
      e.preventDefault();
      window.open(e.target.href, '_blank', 'noopener,noreferrer,width=1200,height=1200');
      setIsMobileMenuOpen(false);
    };

    const closeAfterClick = () => {
      setIsMobileMenuOpen(false);
    };
  
    return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <div class="container diamond-shape">
            <div class="item-count"><AiOutlineInfo /></div>
          </div>
          <Link to="/" className="navbar__logo">INFO ZONA</Link>
        </div>

        {/* { REGULAR MENU } */}
        <div className='navbar_items regular-menu'>
          <Link to="/" className={location.pathname === '/' ? 'navbar__item active' : 'navbar__item'}>početna</Link>
          <Link to="/calendar" className={location.pathname === '/calendar' ? 'navbar__item active' : 'navbar__item'} onClick={openNewWindow} target="_blank">kalendar</Link>
           <Link to="/o-nama" className={location.pathname === '/o-nama' ? 'navbar__item active' : 'navbar__item'}>o nama</Link>
        </div>

        {/* { MOBILE MENU } */}
        <div className={`mobile_items ${isMobileMenuOpen ? 'navbar__items--hidden mobile-hidden' : 'hide'}`}>
          <div className="mobile-nav-header">
            <div class="container diamond-shape">
              <div class="item-count"><AiOutlineInfo /></div>
            </div>
            <Link to="/" className="navbar__logo">INFO ZONA</Link>
            <button className="navbar__mobile-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen && <FaTimes />}
            </button>
          </div>
          <div className="mobile-nav-links-container">
            <span>
              <Link to="/" onClick={closeAfterClick} className='navbar__item'>početna</Link>
            </span>
            <span>
              <Link to="/calendar" className='navbar__item' onClick={openNewWindow} target="_blank">kalendar</Link>
            </span>
            <span>
              <Link to="/o-nama" onClick={closeAfterClick} className='navbar__item'>o nama</Link>
            </span>
          </div>
          <Footer />
        </div>
        <button className="navbar__mobile-toggle" onClick={toggleMobileMenu}>
          {<FaBars />}
        </button>
      </nav>
      {/* <div className="second-navigation"> */}
      <TextCarousel texts={texts} duration={duration} />
      {/* </div> */}
      <Outlet />
      <Footer />
    </>
    );
  };
  
  export default Navigation;
  