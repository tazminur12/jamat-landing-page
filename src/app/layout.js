import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "শেখ মনজুরুল হক রাহাদ - বগুড়া-২ আসনের প্রার্থী | জামায়াতে ইসলামী",
    template: "%s | শেখ মনজুরুল হক রাহাদ"
  },
  description: "বগুড়া-২ (সদর ও কচুয়া) আসনে জামায়াতে ইসলামী বাংলাদেশের মনোনীত প্রার্থী শেখ মনজুরুল হক রাহাদ। দুর্নীতিমুক্ত, সমৃদ্ধ ও ন্যায়বিচারের বাংলাদেশ গড়ার প্রত্যয়ে আপনার সাথে।",
  keywords: [
    "শেখ মনজুরুল হক রাহাদ",
    "বগুড়া-২",
    "বগুড়া সদর",
    "কচুয়া",
    "জামায়াতে ইসলামী",
    "নির্বাচন ২০২৬",
    "জাতীয় সংসদ নির্বাচন",
    "দাঁড়িপাল্লা প্রতীক",
    "ইসলামী ছাত্রশিবির",
    "বাংলাদেশ নির্বাচন"
  ],
  authors: [{ name: "শেখ মনজুরুল হক রাহাদ" }],
  creator: "শেখ মনজুরুল হক রাহাদ নির্বাচনী প্রচারণা টিম",
  publisher: "জামায়াতে ইসলামী বাংলাদেশ",
  
  // Icons - Daripalla Logo
  icons: {
    icon: "/logo/daripalla.png",
    shortcut: "/logo/daripalla.png",
    apple: "/logo/daripalla.png",
  },
  
  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://example.com",
    siteName: "শেখ মনজুরুল হক রাহাদ - অফিসিয়াল ক্যাম্পেইন সাইট",
    title: "শেখ মনজুরুল হক রাহাদ - বগুড়া-২ আসনের প্রার্থী",
    description: "বগুড়া-২ (সদর ও কচুয়া) আসনে জামায়াতে ইসলামী বাংলাদেশের মনোনীত প্রার্থী। দুর্নীতিমুক্ত, সমৃদ্ধ ও ন্যায়বিচারের বাংলাদেশ গড়ার প্রত্যয়ে।",
    images: [
      {
        url: "/candidate/candidate-hero.png",
        width: 1200,
        height: 630,
        alt: "শেখ মনজুরুল হক রাহাদ"
      }
    ]
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "শেখ মনজুরুল হক রাহাদ - বগুড়া-২ আসনের প্রার্থী",
    description: "দুর্নীতিমুক্ত, সমৃদ্ধ ও ন্যায়বিচারের বাংলাদেশ গড়ার প্রত্যয়ে আপনার সাথে।",
    images: ["/candidate/candidate-hero.png"]
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  
  // Verification (add your verification codes)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code"
  },
  
  // Additional metadata
  category: "Politics",
  classification: "Election Campaign"
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" dir="ltr">
      <head>
        {/* Additional SEO tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0d5a5a" />
        <link rel="canonical" href="https://example.com" />
        
        {/* Favicon - Daripalla Logo */}
        <link rel="icon" type="image/png" href="/logo/daripalla.png" />
        <link rel="apple-touch-icon" href="/logo/daripalla.png" />
        <link rel="shortcut icon" href="/logo/daripalla.png" />
        
        {/* Language alternatives */}
        <link rel="alternate" hrefLang="bn" href="https://example.com" />
        <link rel="alternate" hrefLang="en" href="https://example.com/en" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
