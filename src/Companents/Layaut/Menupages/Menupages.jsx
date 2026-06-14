import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import shashImg from '../../img/shash.png';
import pamidorImg from '../../img/pamidor (2) (1) (1).png';
import pitsaImg from '../../img/pitsa (1).png';
import hotdogImg from '../../img/hotdog (1).png';
import "./Menupages.scss";

const categories = [ "All", "Shawarma", "Pizza", "Burger", "Ice-cream", "Juice", "Drinks", "Chicken", "Fast Food" ];

const menuItems = Array( 10 ).fill( null ).map( ( _, index ) => {
  const catIndex = 1 + (index % (categories.length - 1));
  return {
    id: index + 1,
    title: "Barbecue Grilled Shashlik Dinner",
    price: 12.00,
    image: shashImg,
    category: categories[catIndex]
  };
} );

const instagramPhotos = [ pamidorImg, pitsaImg, hotdogImg ];

const popularDishes = Array( 4 ).fill( null ).map( ( _, i ) => ( {
  id: i + 1,
  title: "Barbecue Shashlik",
  price: 12.00 + i * 2,
  rating: 5,
} ) );

const menuCategories = [ "All", "Shawarma", "Pizza", "Burger", "Ice-cream", "Juice", "Drinks", "Chicken", "Fast Food" ];

const regularMenu = Array( 12 ).fill( null ).map( ( _, i ) => ( {
  id: i + 1,
  title: "Barbecue Grilled Shashlik Dinner",
  price: 12.00 + ( i % 5 ) * 3,
} ) );

const testimonials = [
  { name: "John Doe", text: "Great food and amazing service! Highly recommended." },
  { name: "Jane Smith", text: "The best shashlik I've ever had. Will visit again!" },
  { name: "Mike Johnson", text: "Excellent atmosphere and delicious meals." },
];

const blogPosts = Array( 3 ).fill( null ).map( ( _, i ) => ( {
  id: i + 1,
  title: "Tips For Preparing And Caring For Your Grill",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis egestas nam ut omis.",
  date: "16 May, 2026",
} ) );

export default function MenuPage() {
  const { t } = useTranslation();
  const [ activeCategory, setActiveCategory ] = useState( "All" );

  const filteredItems = useMemo( () => {
    if ( !activeCategory || activeCategory === "All" ) return menuItems;
    return menuItems.filter( item => item.category === activeCategory );
  }, [ activeCategory ] );

  return (
    <div className="menu-page">
      <div className="menu-container">
        <div className="menu-breadcrumb">
          <Link to="/">{ t( 'menu_page.breadcrumb_home' ) || 'Home' }</Link>
          <span>{ '>' }</span>
          <span className="menu-breadcrumb-current">{ t( 'menu_page.breadcrumb_menu' ) || 'Menu' }</span>
        </div>

        <div className="menu-layout">
          <aside className="menu-sidebar">
            <h2>{ t( 'menu_page.sidebar_title' ) || 'Our Regular Menu Pack' }</h2>
            <div className="menu-categories">
              { categories.map( ( category ) => (
                <button
                  key={ category }
                  onClick={ () => setActiveCategory( category ) }
                  className={ `menu-category-btn ${ activeCategory === category ? 'active' : '' }` }
                >
                  { category }
                </button>
              ) ) }
            </div>
          </aside>

          <section className="menu-items-grid">
            <div className="menu-items-inner">
              { filteredItems.length > 0 ? (
                filteredItems.map( ( item, index ) => (
                  <div key={ index } className="menu-item-card">
                    <div className="menu-item-img-wrap">
                      <img src={ item.image } alt={ item.title } />
                    </div>
                    <h3>{ item.title }</h3>
                    <p className="menu-item-price">${ item.price.toFixed( 2 ) }</p>
                  </div>
                ) )
              ) : (
                <div className="menu-no-items">{t('menu_page.no_items')}</div>
              ) }
            </div>
          </section>
        </div>
      </div>

      <section className="menu-instagram">
        <div className="menu-container">
          <div className="menu-instagram-grid">
            <div className="menu-instagram-text">
              <p className="menu-instagram-label">{ t( 'menu_page.instagram_title' ) || 'Instagram' }</p>
              <h2>{ t( 'menu_page.gallery_heading' ) || 'Photo Gallery' }</h2>
              <p className="menu-instagram-desc">{ t( 'menu_page.gallery_description' ) || 'Lorem ipsum dolor sit amet.' }</p>
              <button className="menu-instagram-btn">
                { t( 'menu_page.view_more' ) || 'View More' }
              </button>
            </div>

            <div className="menu-instagram-photos">
              { instagramPhotos.map( ( photo, i ) => (
                <div key={ i } className="menu-instagram-photo">
                  <img src={ photo } alt="Gallery" />
                  <div className="menu-instagram-overlay">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              ) ) }
            </div>
          </div>
        </div>
      </section>

      <section className="menu-popular">
        <div className="menu-container">
          <div className="menu-section-header">
            <div>
              <p className="menu-section-label">{t('menu_page.popular_dishes_title')}</p>
              <h2 className="menu-section-heading">{t('menu_page.popular_dishes_heading')}</h2>
            </div>
            <div className="menu-arrows">
              <button className="menu-arrow"><i className="fa-solid fa-arrow-left"></i></button>
              <button className="menu-arrow"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>

          <div className="menu-popular-grid">
            { popularDishes.map( ( dish, idx ) => (
              <div key={ idx } className="menu-popular-card">
                <div className="menu-popular-img-wrap">
                  <img src={shashImg} alt={ dish.title } />
                </div>
                <div className="menu-popular-stars">
                  { Array( dish.rating ).fill().map( ( _, i ) => <i key={ i } className="fa-solid fa-star"></i> ) }
                </div>
                <h3 className="menu-popular-name">{ dish.title }</h3>
                <p className="menu-popular-price">${ dish.price.toFixed( 2 ) }</p>
              </div>
            ) ) }
          </div>
        </div>
      </section>

      <section className="menu-regular">
        <div className="menu-container">
          <div className="menu-section-header menu-section-header--center">
            <p className="menu-section-label">{t('menu_page.regular_menu_title')}</p>
            <h2 className="menu-section-heading">{t('menu_page.regular_menu_title')}</h2>
          </div>

          <div className="menu-regular-categories">
            { menuCategories.map( ( cat ) => (
              <button
                key={ cat }
                onClick={ () => setActiveCategory( cat ) }
                className={ `menu-regular-cat-btn ${ activeCategory === cat ? 'active' : '' }` }
              >
                { cat }
              </button>
            ) ) }
          </div>

          <div className="menu-regular-grid">
            { regularMenu.map( ( item, idx ) => (
              <div key={ idx } className="menu-regular-card">
                <div className="menu-regular-img-wrap">
                  <img src={pamidorImg} alt={ item.title } />
                </div>
                <h4 className="menu-regular-name">{ item.title }</h4>
                <p className="menu-regular-price">${ item.price.toFixed( 2 ) }</p>
              </div>
            ) ) }
          </div>
        </div>
      </section>

     

      <section className="menu-blogs">
        <div className="menu-container">
          <div className="menu-section-header menu-section-header--center">
            <p className="menu-section-label">{t('menu_page.blogs_label')}</p>
            <h2 className="menu-section-heading">{t('menu_page.blogs_heading')}</h2>
          </div>

          <div className="menu-blogs-grid">
            { blogPosts.map( ( post, idx ) => (
              <div key={ idx } className="menu-blog-card">
                <div className="menu-blog-img">
                  <img src="src/Companents/img/snek.jpg" alt="" />
                </div>
                <div className="menu-blog-body">
                  <h3 className="menu-blog-title">{ post.title }</h3>
                  <p className="menu-blog-text">{ post.text }</p>
                  <div className="menu-blog-footer">
                    <a href="#" className="menu-blog-link">{t('menu_page.read_more')}</a>
                    <span className="menu-blog-date">{ post.date }</span>
                  </div>
                </div>
              </div>
            ) ) }
          </div>
        </div>
      </section>
    </div>
  );
}