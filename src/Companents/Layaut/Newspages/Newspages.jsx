import React from 'react';

const blogPosts = Array(9).fill({
  title: "Tips For Preparing And Caring For Your Grill",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis egestas nam ut omis.",
  date: "16 May, 2026",
  image: "https://via.placeholder.com/400x250"
});

export default function NewsPage() {
  return (
    <div className="bg-white min-h-screen font-sans py-12">
      <div className="container mx-auto px-6">
        
        <div className="text-sm text-gray-500 mb-6 text-center">
          <a href="#" className="hover:text-[#A21D2C]">Home</a> 
          <span className="mx-2">{'>'}</span>
          <span className="text-[#A21D2C] font-medium">News</span>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 relative inline-block pb-3">
            News
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#A21D2C]"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-3 hover:text-[#A21D2C] cursor-pointer transition line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex justify-between items-center border-t pt-4 border-gray-100 mt-auto">
                  <a href="#" className="text-[#A21D2C] font-bold text-xs uppercase tracking-wider hover:underline">
                    Read More
                  </a>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-[#A21D2C] text-[#A21D2C] font-semibold px-8 py-2.5 rounded-md hover:bg-[#A21D2C] hover:text-white transition shadow-sm">
            View More
          </button>
        </div>

      </div>
    </div>
  );
}