"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ProfileFrameCampaign() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [framedImage, setFramedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

  const instructions = [
    "স্কয়ার (বর্গাকার) ছবি সবচেয়ে ভালো ফলাফল দেয়",
    "মুখ স্পষ্ট দেখা যায় এমন ছবি ব্যবহার করুন",
    "JPG বা PNG ফরম্যাটের ছবি আপলোড করুন",
    "আপনার ছবি সার্ভারে সংরক্ষণ করা হবে না"
  ];

  const handleFileSelect = (file) => {
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        applyFrame(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyFrame = (imageData) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    // Set canvas size
    canvas.width = 1000;
    canvas.height = 1000;

    const img = new window.Image();
    img.onload = () => {
      // Draw uploaded image
      ctx.drawImage(img, 0, 0, 1000, 1000);

      // Load and draw frame
      const frameImg = new window.Image();
      frameImg.onload = () => {
        ctx.drawImage(frameImg, 0, 0, 1000, 1000);
        setFramedImage(canvas.toDataURL("image/png"));
      };
      frameImg.src = "/frame/campaign-frame.png";
    };
    img.src = imageData;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const downloadImage = () => {
    if (framedImage) {
      const link = document.createElement("a");
      link.download = "profile-with-frame.png";
      link.href = framedImage;
      link.click();
    }
  };

  return (
    <section 
      className="py-12 sm:py-16 px-4 sm:px-6"
      style={{ background: 'linear-gradient(135deg, #1a365d 0%, #0f2744 100%)' }}>
      
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-3">
            <span className="px-3 py-1.5 rounded-full border-2 border-green-500 text-green-400 font-semibold text-xs sm:text-sm">
              ক্যাম্পেইনে অংশ নিন
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
            প্রোফাইল ফ্রেম ক্যাম্পেইন
          </h2>
          
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            আপনার ফেসবুক প্রোফাইল ছবিতে ক্যাম্পেইন ফ্রেম যুক্ত করুন এবং সমর্থন জানান
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 mb-6 border border-white/10">
          <h3 className="text-white font-bold text-base sm:text-lg mb-3">নির্দেশনা:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {instructions.map((instruction, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white/80 text-xs sm:text-sm">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-6">
          
          {/* Upload Section */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3">১. ছবি আপলোড করুন</h3>
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-8 sm:p-10 text-center cursor-pointer transition-all duration-300 ${
                isDragging 
                  ? 'border-green-500 bg-green-500/10' 
                  : 'border-white/20 bg-white/5 hover:border-green-500/50 hover:bg-white/10'
              }`}>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 17V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base mb-1">ছবি আপলোড করুন</p>
                  <p className="text-white/60 text-xs sm:text-sm">ক্লিক করুন বা ড্র্যাগ করুন</p>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Preview & Download Section */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3">২. প্রিভিউ ও ডাউনলোড</h3>
            <div className="bg-white/5 border-2 border-white/10 rounded-xl p-6 sm:p-8 text-center min-h-[250px] sm:min-h-[280px] flex flex-col items-center justify-center">
              {framedImage ? (
                <div className="space-y-3 sm:space-y-4 w-full">
                  <img 
                    src={framedImage} 
                    alt="Framed Profile" 
                    className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-lg mx-auto shadow-2xl"
                  />
                  <button
                    onClick={downloadImage}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-500 text-white font-bold text-sm transition-all duration-300 hover:bg-green-600 hover:-translate-y-1 shadow-lg">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>ডাউনলোড করুন</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white/20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                    <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-white/60 text-xs sm:text-sm">ফ্রেম যুক্ত ছবি এখানে দেখাবে</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Campaign Frame Preview */}
        <div className="text-center">
          <h3 className="text-white font-bold text-base sm:text-lg mb-3">ক্যাম্পেইন ফ্রেম প্রিভিউ:</h3>
          <div className="inline-block bg-white/5 border-2 border-white/10 rounded-xl p-4 sm:p-5">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 relative">
              <Image
                src="/frame/campaign-frame.png"
                alt="Campaign Frame"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Hidden Canvas */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </section>
  );
}
