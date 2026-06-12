import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img src="src/Companents/img/logo.png" alt="EATURKISH" />
          </div>

          <nav className="navbar">
            <ul className="nav-links">
              <li><a href="#menu">{t('menu')}</a></li>
              <li><a href="#news">{t('news')}</a></li>
              <li><a href="#about">{t('about_us')}</a></li>
              <li><a href="#contact">{t('contact_us')}</a></li>
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
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;