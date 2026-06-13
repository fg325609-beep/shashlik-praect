import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import shashImg from '../../img/shash.png';
import pamidorImg from '../../img/pamidor (2) (1) (1).png';
import pitsaImg from '../../img/pitsa (1).png';
import hotdogImg from '../../img/hotdog (1).png';
import "./Menupages.scss";

const categories = ["All", "Shawarma", "Pizza", "Burger", "Ice-cream", "Juice", "Drinks", "Chicken", "Fast Food"];

const menuItems = Array(10).fill(null).map((_, index) => ({
  id: index + 1,
  title: "Barbecue Grilled Shashlik Dinner",
  price: 12.00,
  image: shashImg,
  category: categories[1 + (index % (categories.length - 1))]
}));

const instagramPhotos = [
  pamidorImg,
  pitsaImg,
  hotdogImg,
];

export default function MenuPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;
    return menuItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="menu-page">
      <div className="menu-container">
        <div className="menu-breadcrumb">
          <Link to="/">{t('menu_page.breadcrumb_home')}</Link>
          <span>{'>'}</span>
          <span className="menu-breadcrumb-current">{t('menu_page.breadcrumb_menu')}</span>
        </div>

        <div className="menu-layout">
          <aside className="menu-sidebar">
            <h2>{t('menu_page.sidebar_title')}</h2>
            <div className="menu-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`menu-category-btn ${activeCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <section className="menu-items-grid">
            <div className="menu-items-inner">
              {filteredItems.map((item, index) => (
                <div key={index} className="menu-item-card">
                  <div className="menu-item-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="menu-item-price">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="menu-instagram">
        <div className="menu-container">
          <div className="menu-instagram-grid">
            <div className="menu-instagram-text">
              <p>{t('menu_page.instagram_title')}</p>
              <h2>{t('menu_page.gallery_heading')}</h2>
              <p className="menu-instagram-desc">{t('menu_page.gallery_description')}</p>
              <button className="menu-instagram-btn">{t('menu_page.view_more')}</button>
            </div>

            <div className="menu-instagram-photos">
              {instagramPhotos.map((photo, i) => (
                <div key={i} className="menu-instagram-photo">
                  <img src={photo} alt="Gallery" />
                  <div className="menu-instagram-overlay">
                    <i className="fa-brands fa-instagram" style={{fontSize: '1.5rem'}}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}