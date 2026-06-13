import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Hero.scss"
const Hero = () => {
      const { t, i18n } = useTranslation();
    
  return (
    <div>
        <section className='hero'>
            <div className="hero_left">
                    <h4>{t('hero.tagline')}</h4>  
                    <h1>{t('hero.title')}</h1> 
                    <p>{t('hero.description')}</p>
                    <button>{t('hero.button')}</button>
         </div>
         <div className="hero_right">
            <img src="src/Companents/img/shashlik.png" alt="shashlik" />
         </div>
        </section>
    </div>
  )
}

export default Hero