import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/logo.png';
import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [ isMenuOpen, setIsMenuOpen ] = useState( false );
  const location = useLocation();

  const changeLanguage = ( event ) => {
    i18n.changeLanguage( event.target.value );
  };

  const toggleMenu = () => {
    setIsMenuOpen( !isMenuOpen );
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={ logo } alt="EATURKISH" />
          </Link>
        </div>

        <nav className={ `navbar ${ isMenuOpen ? 'active' : '' }` }>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={ () => setIsMenuOpen( false ) } className={ location.pathname === '/' ? 'active-link' : '' }>
                { t( 'menu' ) }
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={ () => setIsMenuOpen( false ) } className={ location.pathname === '/news' ? 'active-link' : '' }>
                { t( 'news' ) }
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={ () => setIsMenuOpen( false ) } className={ location.pathname === '/about' ? 'active-link' : '' }>
                { t( 'about_us' ) }
              </Link>
            </li>
            <li>
              <a href="#contact" onClick={ () => setIsMenuOpen( false ) }>{ t( 'contact_us' ) }</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="login-btn">{ t( 'log_in' ) }</button>

          <select
            className="lang-select"
            onChange={ changeLanguage }
            value={ i18n.language }
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
          <button className={ `burger-menu ${ isMenuOpen ? 'open' : '' }` } onClick={ toggleMenu } aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      { isMenuOpen && <div className="menu-overlay" onClick={ toggleMenu }></div> }
    </header>
  );
}

export default Header;