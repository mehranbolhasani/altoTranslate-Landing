"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import PrivacySecurity from "@/components/privacy-security"
import Footer from "@/components/footer"
import PopupMock from "@/components/popup-mock"

import Particles from "@/components/Particles"

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
      <div className="fixed inset-0 -z-10 w-full h-full opacity-50">
        <Particles
          particleColors={['#0e69fe', '#0e69fe']}
          particleCount={800}
          particleSpread={2}
          speed={0.05}
          particleBaseSize={30}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <main className="min-h-screen w-screen md:w-2xl md:max-w-2xl mx-auto">
        <div className="fixed w-2xl h-screen bg-slate-200/5">
          <span className="w-px h-full bg-slate-200 absolute left-0 top-0"></span>
          <span className="w-px h-full bg-slate-200 absolute right-0 top-0"></span>
        </div>
        <Header />
        <Hero />
        <div className="w-full h-32 grid place-items-center my-12"><span className="w-px h-full bg-slate-300"></span></div>
        {/* Popup Mock */}
        <div className="relative flex justify-center items-start pt-12 h-[60vh] px-8 sm:px-0">
          <PopupMock />
        </div>
        <div className="w-full h-32 grid place-items-center my-12"><span className="w-px h-full bg-slate-300"></span></div>
        <Features />
        <div className="w-full h-32 grid place-items-center my-12"><span className="w-px h-full bg-slate-300"></span></div>
        <PrivacySecurity />
        <div className="w-full h-32 grid place-items-center my-12"><span className="w-px h-full bg-slate-300"></span></div>
        <Footer />
      </main>
    </>
  )
}

export default HomePage

