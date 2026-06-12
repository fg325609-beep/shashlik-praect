import React from 'react';
import { useTranslation } from 'react-i18next'; // Hookni import qilish
import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation(); // Tarjima funksiyasini chaqirish

  // Tilni o'zgartirish uchun funksiya
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <header>
        <div className="container">
          {/* Logotip qismi (rasmga asoslanib) */}
          <div className="logo">
            <img src="src/Companents/img/logo.png" alt="EATURKISH" />
          </div>

          {/* Navigatsiya menyusi */}
          <nav className="navbar">
            <ul className="nav-links">
              <li><a href="#menu">{t('menu')}</a></li>
              <li><a href="#news">{t('news')}</a></li>
              <li><a href="#about">{t('about_us')}</a></li>
              <li><a href="#contact">{t('contact_us')}</a></li>
            </ul>
          </nav>

          {/* O'ng tomon qismi (Kirish va Til o'zgartirish) */}
          <div className="header-actions">
            <button className="login-btn">{t('log_in')}</button>
            
            {/* Tilni tanlash menyusi */}
            <select 
              className="lang-select" 
              onChange={changeLanguage} 
              defaultValue={i18n.language || 'en'}
            >
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;