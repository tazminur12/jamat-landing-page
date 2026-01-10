import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "হোম", href: "/" },
    { name: "পরিচিতি", href: "/about" },
    { name: "ইস্তেহার", href: "/manifesto" },
    { name: "সংবাদ", href: "/news" },
    { name: "অনুষ্ঠান", href: "/events" },
    { name: "যোগাযোগ", href: "/contact" }
  ];

  return (
    <footer 
      className="py-12 px-4 sm:px-8"
      style={{ background: '#0a4040' }}>
      
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          
          {/* Left Column - Logo & Mission */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0">
                <Image
                  src="/logo/jamaat-logo-.png"
                  alt="জামায়াত লোগো"
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">
                  বাংলাদেশ জামায়াতে ইসলামী
                </div>
                <div className="text-gray-400 text-xs mt-0.5">
                  JAMAAT-E-ISLAMI BANGLADESH
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-white/80 text-sm leading-relaxed">
              ইসলামী মূল্যবোধ ও ন্যায়বিচারের ভিত্তিতে একটি দুর্নীতিমুক্ত, সমৃদ্ধ ও 
              কল্যাণমুখী বাংলাদেশ গড়ার প্রত্যয়ে।
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">
              দ্রুত লিংক
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-yellow-400 text-sm transition-colors inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-4">
              যোগাযোগ
            </h3>
            <Link 
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{ background: '#0d5a5a' }}>
              যোগাযোগ করুন
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © 2026 বাংলাদেশ জামায়াতে ইসলামী। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <p className="font-semibold">
              ইসলাম জিন্দাবাদ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
