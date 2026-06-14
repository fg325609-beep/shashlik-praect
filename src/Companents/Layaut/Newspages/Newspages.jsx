import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import snekImg from '../../img/snek.jpg';
import "./Newspages.scss";

const blogPosts = Array(9).fill(null).map((_, i) => ({
  id: i + 1,
  titleKey: "news_page.post_title",
  descriptionKey: "news_page.post_description",
  date: "16 May, 2026",
  image: snekImg
}));

export default function NewsPage() {
  const { t } = useTranslation();

  return (
    <div className="news-page">
      <div className="news-container">
        <div className="news-breadcrumb">
          <Link to="/">{t('news_page.breadcrumb_home')}</Link>
          <span>{'>'}</span>
          <span className="news-breadcrumb-current">{t('news_page.breadcrumb_news')}</span>
        </div>

        <div className="news-title-section">
          <h1>{t('news_page.title')}</h1>
        </div>

        <div className="news-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="news-card">
              <div className="news-card-img-wrap">
                <img
                  src={post.image}
                  alt={t(post.titleKey)}
                  className="news-card-img"
                />
              </div>

              <div className="news-card-body">
                <h3>{t(post.titleKey)}</h3>
                <p>{t(post.descriptionKey)}</p>

                <div className="news-card-footer">
                  <a href="#">{t('news_page.read_more')}</a>
                  <span className="news-card-date">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="news-view-more">
          <button>{t('news_page.view_more')}</button>
        </div>
     
      </div>
    </div>
  );
}