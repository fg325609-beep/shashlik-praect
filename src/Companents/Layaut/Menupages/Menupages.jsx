import React, { useState } from 'react';

const categories = ["All", "Shawarma", "Pizza", "Burger", "Ice-cream", "Juice", "Drinks", "Chicken", "Fast Food"];

const menuItems = Array(10).fill({
  id: 1,
  title: "Barbecue Grilled Shashlik Dinner",
  price: 12.00,
  image: "https://via.placeholder.com/150"
});

const instagramPhotos = [
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200",
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-[#F8F8F8] min-h-screen font-sans">
      <main className="container mx-auto px-6 py-12">
        <div className="text-sm text-gray-500 mb-8">
          <a href="#" className="hover:text-[#A21D2C]">Home</a> 
          <span className="mx-2">{'>'}</span> 
          <span className="text-[#A21D2C] font-medium">Menu</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4 bg-[#A21D2C] text-white p-6 rounded-2xl h-fit shadow-lg">
            <h2 className="text-xl font-bold mb-6 tracking-wide">Our Regular Menu Pack</h2>
            <div className="flex flex-col space-y-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`py-2 px-4 rounded-full text-left text-sm transition font-medium ${
                    activeCategory === category
                      ? "bg-white text-[#A21D2C]"
                      : "border border-white/40 hover:bg-white/10 text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <section className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition group"
              >
                <div className="w-40 h-40 mx-auto mb-4 bg-gray-50 rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-800 mb-2 max-w-xs mx-auto text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-[#A21D2C] font-bold text-lg">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <section className="bg-gray-100 py-16 mt-12">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-sm text-[#A21D2C] uppercase tracking-wider font-semibold">Instagram</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-4">Photo Gallery</h2>
            <p className="text-gray-600 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis egestas nam ut omis.
            </p>
            <button className="border border-[#A21D2C] text-[#A21D2C] font-semibold px-6 py-2 rounded-md hover:bg-[#A21D2C] hover:text-white transition">
              View More
            </button>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {instagramPhotos.map((photo, i) => (
              <div key={i} className="h-48 bg-gray-300 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
                <img src={photo} alt="Gallery" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                  <i className="fa-brands fa-instagram text-2xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}