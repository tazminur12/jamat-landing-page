export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "শেখ মনজুরুল হক রাহাদ",
    "alternateName": "Sheikh Manjurul Haque Rahad",
    "description": "বগুড়া-২ (সদর ও কচুয়া) আসনে জামায়াতে ইসলামী বাংলাদেশের মনোনীত প্রার্থী",
    "jobTitle": "সংসদ সদস্য প্রার্থী",
    "affiliation": {
      "@type": "Organization",
      "name": "জামায়াতে ইসলামী বাংলাদেশ",
      "alternateName": "Jamaat-e-Islami Bangladesh"
    },
    "award": "বগুড়া-২ আসনের মনোনীত প্রার্থী",
    "image": "https://example.com/candidate/candidate-hero.png",
    "url": "https://example.com",
    "sameAs": [
      "https://facebook.com/your-page",
      "https://twitter.com/your-handle",
      "https://youtube.com/your-channel"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "বগুড়া",
      "addressRegion": "বগুড়া-২ (সদর ও কচুয়া)",
      "addressCountry": "BD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
