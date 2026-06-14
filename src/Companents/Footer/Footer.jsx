import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <h5>Newsletter</h5>
          <h1>Subscribe to Our Newsletter</h1>
          <p>And never miss latest Updates!</p>
          <form action="" method="post">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-decor"></div>

      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <h4>{t('footer.contact_title')}</h4>
            <div className="footer-contact-info">
              <p>{t('footer.address')}</p>
              <p className="footer-phone">{t('footer.phone1')}</p>
              <p>{t('footer.phone2')}</p>
            </div>
          </div>

          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <img src="src/Companents/img/logo.png" alt="Logo" />
            </div>
            <p className="footer-quote">
              {t('footer.quote')}
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-icon">f</a>
              <a href="#" aria-label="Twitter" className="social-icon">t</a>
              <a href="#" aria-label="Instagram" className="social-icon">in</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.hours_title')}</h4>
            <div className="footer-hours">
              <div>
                <p className="footer-day">{t('footer.weekdays')}</p>
                <p className="footer-time">{t('footer.weekdays_hours')}</p>
              </div>
              <div>
                <p className="footer-day">{t('footer.weekend')}</p>
                <p className="footer-time">{t('footer.weekend_hours')}</p>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}