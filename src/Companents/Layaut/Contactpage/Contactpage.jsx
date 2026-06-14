import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./Contactpage.scss";

const BOT_TOKEN = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0";
const CHAT_ID = "6660879147";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const text = `🆕 Yangi xabar:
👤 Ism: ${formData.name}
📧 Email: ${formData.email}
📞 Telefon: ${formData.phone}
📝 Mavzu: ${formData.subject}
💬 Xabar: ${formData.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-breadcrumb">
          <Link to="/">{t('contact_page.breadcrumb_home')}</Link>
          <span>{'>'}</span>
          <span className="contact-breadcrumb-current">{t('contact_page.breadcrumb_contact')}</span>
        </div>

        <div className="contact-title-section">
          <h1>{t('contact_page.title')}</h1>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3>{t('contact_page.phone_title')}</h3>
              <p>{t('contact_page.phone')}</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3>{t('contact_page.email_title')}</h3>
              <p>{t('contact_page.email')}</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <h3>{t('contact_page.instagram_title')}</h3>
              <p>{t('contact_page.instagram')}</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <h3>{t('contact_page.twitter_title')}</h3>
              <p>{t('contact_page.twitter')}</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <h3>{t('contact_page.facebook_title')}</h3>
              <p>{t('contact_page.facebook')}</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>{t('contact_page.form_title')}</h2>
            <p className="contact-form-subtitle">{t('contact_page.form_subtitle')}</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">{t('contact_page.form_name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact_page.form_name_placeholder')}
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">{t('contact_page.form_email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact_page.form_email_placeholder')}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="phone">{t('contact_page.form_phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact_page.form_phone_placeholder')}
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="subject">{t('contact_page.form_subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact_page.form_subject_placeholder')}
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">{t('contact_page.form_message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact_page.form_message_placeholder')}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-form-btn" disabled={status === 'sending'}>
                {status === 'sending' ? t('contact_page.form_sending') : t('contact_page.form_submit')}
              </button>

              {status === 'success' && (
                <div className="contact-form-message contact-form-message--success">
                  {t('contact_page.form_success')}
                </div>
              )}
              {status === 'error' && (
                <div className="contact-form-message contact-form-message--error">
                  {t('contact_page.form_error')}
                </div>
              )}
            </form>

            <div className="contact-map">
              <h3>{t('contact_page.map_title')}</h3>
              <div className="contact-map-iframe">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d273.6703994669508!2d69.26492570784666!3d41.408823601090404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1781431612044!5m2!1sru!2s" 
                  width="100%" 
                  height="350" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EATURKISH Location">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}