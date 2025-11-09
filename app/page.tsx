import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import PrivacySecurity from "@/components/privacy-security"
import Footer from "@/components/footer"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://altotranslate.xyz'

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "altoTranslate",
    "applicationCategory": "BrowserExtension",
    "operatingSystem": "Chrome",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    },
    "description": "Smart translation Chrome extension supporting 50+ languages, multiple API providers, auto language detection, and privacy-first design.",
    "url": baseUrl,
    "author": {
      "@type": "Person",
      "name": "Mehran Bolhasani"
    },
    "featureList": [
      "Multiple API Support (Google Gemini, OpenRouter, MyMemory)",
      "Auto Language Detection",
      "50+ Languages Support",
      "RTL Language Support",
      "Dark Mode",
      "Privacy-First Design",
      "Secure API Key Storage",
      "No Data Collection"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <div className="w-full h-32 grid place-items-center"><span className="w-px h-full bg-slate-300"></span></div>
        <Features />
        <div className="w-full h-32 grid place-items-center"><span className="w-px h-full bg-slate-300"></span></div>
        <PrivacySecurity />
        <div className="w-full h-32 grid place-items-center"><span className="w-px h-full bg-slate-300"></span></div>
        <Footer />
      </main>
    </>
  )
}

export default HomePage

