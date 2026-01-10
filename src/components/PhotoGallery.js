"use client";

import Image from "next/image";
import { useState } from "react";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: "/gallery/1.jpg", alt: "জনসভায় আলোচনা" },
    { id: 2, src: "/gallery/2.jpg", alt: "জনগণের সাথে" },
    { id: 3, src: "/gallery/3.jpg", alt: "গ্রাম পরিদর্শন" },
    { id: 4, src: "/gallery/4.jpg", alt: "জনসংযোগ কর্মসূচি" },
    { id: 5, src: "/gallery/5.jpg", alt: "নেতৃবৃন্দের সাথে" },
    { id: 6, src: "/gallery/6.jpg", alt: "এলাকা পরিদর্শন" },
    { id: 7, src: "/gallery/7.jpg", alt: "জনসমাবেশে" },
    { id: 8, src: "/gallery/8.jpg", alt: "জনগণের সাথে মতবিনিময়" }
  ];

  return (
    <>
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-4 shadow-sm">
              <svg className="w-5 h-5" style={{ color: '#0d5a5a' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold text-sm" style={{ color: '#0d5a5a' }}>
                ছবি গ্যালারি
              </span>
            </div>
            
            <h2 
              className="text-3xl sm:text-4xl font-black mb-4"
              style={{ color: '#0d5a5a' }}>
              আমাদের কার্যক্রম ছবি গ্যালারি
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              শেখ মনজুরুল হক রাহাদের বিভিন্ন কর্মকাণ্ড ও জনসভার ছবি দেখুন।
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group bg-gray-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Zoom Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M11 8V14M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10">
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              style={{ background: '#0d5a5a' }}>
              <span>আরও ছবি দেখুন</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
