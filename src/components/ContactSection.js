import Link from "next/link";

export default function ContactSection() {
  return (
    <section 
      className="py-20 px-4 sm:px-8"
      style={{
        background: 'linear-gradient(135deg, #0d5a5a 0%, #0a4545 100%)',
        backgroundImage: `
          linear-gradient(135deg, #0d5a5a 0%, #0a4545 100%),
          repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)
        `
      }}>
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/20 mb-6">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" 
              stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className="text-white font-semibold text-sm">যোগাযোগ</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
          <span className="text-white">আমাদের সাথে </span>
          <span className="text-yellow-400">যোগাযোগ করুন</span>
        </h2>

        {/* Description */}
        <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto mb-12">
          আপনার যেকোনো প্রশ্ন, পরামর্শ বা মতামত জানাতে আমাদের সাথে যোগাযোগ করুন।
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Phone Card */}
          <div 
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            
            {/* Phone Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-500 mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Phone Text */}
            <h3 className="text-white text-xl font-bold mb-4">ফোন করুন</h3>
            
            {/* Phone Number */}
            <a 
              href="tel:+8801234567890"
              className="block text-2xl sm:text-3xl font-bold text-green-400 mb-4 hover:text-green-300 transition-colors">
              +880 1234-567890
            </a>

            {/* CTA Link */}
            <Link 
              href="tel:+8801234567890"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
              <span>সরাসরি কথা বলুন</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Email Card */}
          <div 
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            
            {/* Email Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-yellow-400 mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Email Text */}
            <h3 className="text-white text-xl font-bold mb-4">ইমেইল করুন</h3>
            
            {/* Email Address */}
            <a 
              href="mailto:info@example.com"
              className="block text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 hover:text-yellow-300 transition-colors break-all">
              info@example.com
            </a>

            {/* CTA Link */}
            <Link 
              href="mailto:info@example.com"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
              <span>লিখিত যোগাযোগ করুন</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-white/80 text-sm sm:text-base">
            • ইসলামই মানবতার একমাত্র মুক্তির পথ
          </p>
        </div>
      </div>
    </section>
  );
}
