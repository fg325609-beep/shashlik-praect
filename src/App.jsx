import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Companents/Header/Header';
import Hero from './Companents/Hero/Hero';
import "./App.css";
import Sectiontwo from './Companents/Sectiontwo/Sectiontwo';
import MenuPage from './Companents/Layaut/Menupages/Menupages';
import NewsPage from './Companents/Layaut/Newspages/Newspages';
import AboutPage from './Companents/Layaut/About_Uspages/About_Uspages';

const Home = () => {
  return (
    <>
      <Hero />
      <Sectiontwo />
    </>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;