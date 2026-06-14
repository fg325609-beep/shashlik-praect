import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./About_Uspages.scss";

const galleryImages = [
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-breadcrumb">
          <Link to="/">{t('about.breadcrumb_home')}</Link>
          <span>{'>'}</span>
          <span className="about-breadcrumb-current">{t('about.breadcrumb_about')}</span>
        </div>

        <div className="about-title-section">
          <h1>{t('about.title')}</h1>
        </div>
      </div>

      <section className="about-history">
        <div className="about-container">
          <div className="about-history-grid">
            <div className="about-history-image">
              <div className="about-history-img-wrap">
                <img
                  src="src/Companents/img/shashlik.png"
                  alt={t('about.title')}
                />
              </div>
              <div className="about-history-decor"></div>
            </div>

            <div className="about-history-text">
              <p className="about-history-label">{t('about.subtitle')}</p>
              <h2>{t('about.heading')}</h2>
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
              <div className="about-quote">
                {t('about.quote')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-chef">
        <div className="about-container">
          <div className="about-chef-grid">
            <div className="about-chef-text">
              <p className="about-chef-label">{t('about.chef_word')}</p>
              <h2>{t('about.chef_heading')}</h2>
              <p>{t('about.chef_description')}</p>

              <div className="about-chef-info">
                <h4>{t('about.chef_name')}</h4>
                <p>{t('about.chef_role')}</p>
                <div className="about-chef-signature">{t('about.chef_name')}</div>
              </div>
            </div>

            <div className="about-chef-image">
              <div className="about-chef-img-wrap">
                <img
                  src="src/Companents/img/shashlik.png"
                  alt={t('about.chef_name')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-gallery">
        <div className="about-container">
          <div className="about-gallery-header">
            <p>{t('about.gallery_title')}</p>
            <h2>{t('about.gallery_heading')}</h2>
          </div>

          <div className="about-gallery-grid">
            {galleryImages.map((imgUrl, idx) => (
              <div key={idx} className="about-gallery-item">
                <img src="src/Companents/img/shashlik.png" alt={`Interior ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}