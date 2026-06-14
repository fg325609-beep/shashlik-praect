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
    <div className="w-full bg-[#F8F8F8] min-h-screen">
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
          <Link to="/" className="hover:text-[#A21D2C]">{ t( 'menu_page.breadcrumb_home' ) || 'Home' }</Link>
          <span>{ '>' }</span>
          <span className="text-[#A21D2C] font-medium">{ t( 'menu_page.breadcrumb_menu' ) || 'Menu' }</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="bg-[#A21D2C] text-white p-6 rounded-2xl h-fit shadow-lg lg:col-span-1">
            <h2 className="text-xl font-bold mb-6 tracking-wide">{ t( 'menu_page.sidebar_title' ) || 'Our Regular Menu Pack' }</h2>
            <div className="flex flex-col space-y-2">
              { categories.map( ( category ) => (
                <button
                  key={ category }
                  onClick={ () => setActiveCategory( category ) }
                  className={ `w-full text-left py-2 px-4 rounded-full text-sm font-medium transition ${ 
                    activeCategory === category 
                      ? 'bg-white text-[#A21D2C]' 
                      : 'border border-white/20 hover:bg-white/10 text-white' 
                  }` }
                >
                  { category }
                </button>
              ) ) }
            </div>
          </aside>

          <section className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              { filteredItems.length > 0 ? (
                filteredItems.map( ( item, index ) => (
                  <div key={ index } className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
                    <div className="w-40 h-40 mx-auto mb-4 bg-gray-50 rounded-full overflow-hidden flex items-center justify-center">
                      <img src={ item.image } alt={ item.title } className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-medium text-gray-800 text-sm md:text-base mb-2">{ item.title }</h3>
                    <p className="text-[#A21D2C] font-bold text-lg">${ item.price.toFixed( 2 ) }</p>
                  </div>
                ) )
              ) : (
                <div className="col-span-2 text-center py-12 text-gray-400">Hech narsa topilmadi.</div>
              ) }
            </div>
          </section>
        </div>
      </div>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-sm text-[#A21D2C] uppercase tracking-wider font-semibold">{ t( 'menu_page.instagram_title' ) || 'Instagram' }</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mt-1 mb-4">{ t( 'menu_page.gallery_heading' ) || 'Photo Gallery' }</h2>
            <p className="text-gray-600 text-sm mb-6">{ t( 'menu_page.gallery_description' ) || 'Lorem ipsum dolor sit amet.' }</p>
            <button className="border border-[#A21D2C] text-[#A21D2C] font-semibold px-6 py-2 rounded-md hover:bg-[#A21D2C] hover:text-white transition">
              { t( 'menu_page.view_more' ) || 'View More' }
            </button>
          </div>

          <div className="lg:col-span-2 grid grid-cols-3 gap-4">
            { instagramPhotos.map( ( photo, i ) => (
              <div key={ i } className="h-48 bg-gray-300 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
                <img src={ photo } alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </div>
              </div>
            ) ) }
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-sm text-[#A21D2C] uppercase tracking-wider font-semibold">Menu</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mt-1">Popular Dishes</h2>
          </div>
          <div className="flex space-x-2">
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#A21D2C] hover:text-white transition">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#A21D2C] hover:text-white transition">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          { popularDishes.map( ( dish, idx ) => (
            <div key={ idx } className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100 hover:shadow-md transition">
              <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <img src={shashImg} alt={ dish.title } className="w-full h-full object-contain" />
              </div>
              <div className="flex justify-center text-amber-400 text-xs mb-2">
                { Array( dish.rating ).fill().map( ( _, i ) => <i key={ i } className="fa-solid fa-star mx-0.5"></i> ) }
              </div>
              <h3 className="font-medium text-sm text-gray-800 mb-2">{ dish.title }</h3>
              <p className="text-[#A21D2C] font-bold">${ dish.price.toFixed( 2 ) }</p>
            </div>
          ) ) }
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <p className="text-sm text-[#A21D2C] uppercase tracking-wider font-semibold">Menu</p>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mt-1">Our Regular Menu Pack</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          { menuCategories.map( ( cat ) => (
            <button
              key={ cat }
              onClick={ () => setActiveCategory( cat ) }
              className={ `px-5 py-1.5 border rounded-full text-xs font-medium tracking-wide transition ${ 
                activeCategory === cat
                  ? "bg-[#A21D2C] text-white border-[#A21D2C]"
                  : "bg-white text-gray-600 border-gray-300 hover:border-[#A21D2C] hover:text-[#A21D2C]"
              }` }
            >
              { cat }
            </button>
          ) ) }
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          { regularMenu.map( ( item, idx ) => (
            <div key={ idx } className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition">
              <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center">
                <img src={pamidorImg} alt={ item.title } className="w-full h-full object-contain" />
              </div>
              <h4 className="font-medium text-xs text-gray-800 mb-2 line-clamp-2">{ item.title }</h4>
              <p className="text-[#A21D2C] font-bold text-sm">${ item.price.toFixed( 2 ) }</p>
            </div>
          ) ) }
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-[#A21D2C] uppercase tracking-wider font-semibold">Testimonial</p>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Happy Customers</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            { testimonials.map( ( t, idx ) => (
              <div key={ idx } className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-600 text-sm italic leading-relaxed mb-6">"{ t.text }"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <img src={hotdogImg} alt={ t.name } className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-sm text-gray-800">{ t.name }</h4>
                </div>
              </div>
            ) ) }
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm text-[#A21D2C] uppercase tracking-wider font-semibold">Blogs</p>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Gericht Updates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          { blogPosts.map( ( post, idx ) => (
            <div key={ idx } className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="h-52 bg-gray-100 flex items-center justify-center text-gray-400">
                [Blog Image Placeholder]
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-base text-gray-900 mb-2 hover:text-[#A21D2C] cursor-pointer transition line-clamp-2">
                  { post.title }
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-grow line-clamp-3">{ post.text }</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50 mt-auto text-xs">
                  <a href="#" className="text-[#A21D2C] font-bold uppercase tracking-wider hover:underline">Read More</a>
                  <span className="text-gray-400">{ post.date }</span>
                </div>
              </div>
            </div>
          ) ) }
        </div>
      </section>
      
    </div>
  );
}