import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  // Modal menyuni ochish va yopish uchun holat (state)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="src/Companents/img/logo.png" alt="EATURKISH" />
        </div>

        {/* Agarda isMenuOpen true bo'lsa, navbar'ga 'active' klassi qo'shiladi */}
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#menu" onClick={() => setIsMenuOpen(false)}>{t('menu')}</a></li>
            <li><a href="#news" onClick={() => setIsMenuOpen(false)}>{t('news')}</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('about_us')}</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('contact_us')}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="login-btn">{t('log_in')}</button>
          
          <select 
            className="lang-select" 
            onChange={changeLanguage} 
            value={i18n.language}
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>

          {/* Mobil qurilmalar uchun Burger Tugmasi */}
          <button className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {/* Modal ochiqligida orqa fonni to'sib turuvchi xira qatlam (Overlay) */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;