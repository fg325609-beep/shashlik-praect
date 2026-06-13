import React from 'react';

const galleryImages = [
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/400x300",
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8F8F8] min-h-screen font-sans">
      
      <div className="container mx-auto px-6 pt-12">
        <div className="text-sm text-gray-500 mb-6 text-center">
          <a href="#" className="hover:text-[#A21D2C] transition">Home</a> 
          <span className="mx-2">{'>'}</span>
          <span className="text-[#A21D2C] font-medium">About Us</span>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 relative inline-block pb-3">
            About Us
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#A21D2C]"></span>
          </h1>
        </div>
      </div>

      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-[400px] bg-gray-300 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Our Restaurant Kitchen" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-dashed border-[#A21D2C]/30 rounded-2xl -z-10 hidden sm:block"></div>
          </div>

          <div>
            <p className="text-sm text-[#A21D2C] uppercase tracking-widest font-semibold mb-2">Our History</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Secret Ingredient Is Always Love & Tradition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sit tellus feugiat turpis risus nullam integer feugiat scelerisque. Morb iis tellus placerat veblandit volutpat. 
              Bizning restoran ko'p yillik an'analar va o'zgacha turk hamda milliy taomlar uyg'unligini sizga taqdim etadi.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
              Har bir taom professional oshpazlarimiz tomonidan mehr bilan tayyorlanadi.
            </p>
            <div className="border-l-4 border-[#A21D2C] pl-4 italic text-gray-700 font-medium my-4">
              "Kandil o'chguncha emas, to umr tugaguncha eng oliy sifatli xizmat!"
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 mt-16 shadow-sm border-y border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="lg:order-1 order-2">
            <p className="text-sm text-[#A21D2C] uppercase tracking-widest font-semibold mb-2">Chef's Word</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">What We Believe In</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
              Cras ultricies ligula sed magna dictum porta. Culinary art is not just about making food, it's about creating memories.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-serif font-bold text-gray-900">Kevin Luo</h4>
              <p className="text-sm text-gray-400">Chef & Founder</p>
              <div className="mt-4 text-3xl font-cursive text-[#A21D2C] opacity-60 font-serif">Kevin Luo</div>
            </div>
          </div>

          <div className="lg:order-2 order-1 flex justify-center">
            <div className="w-80 h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-8 border-gray-50">
              <img 
                src="https://via.placeholder.com/350x450" 
                alt="Chef Kevin Luo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm text-[#A21D2C] uppercase tracking-widest font-semibold mb-2">Gallery</p>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Our Atmosphere</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((imgUrl, idx) => (
            <div 
              key={idx} 
              className="h-64 bg-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group cursor-pointer"
            >
              <img 
                src={imgUrl} 
                alt={`Interior ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}