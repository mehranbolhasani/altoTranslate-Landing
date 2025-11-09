import type { Metadata } from "next"
import "./globals.css"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://altotranslate.xyz'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "altoTranslate - Smart Translation Chrome Extension",
    template: "%s | altoTranslate"
  },
  description: "Translate text instantly with altoTranslate. A powerful Chrome extension supporting 50+ languages, multiple API providers (Google Gemini, OpenRouter, MyMemory), auto language detection, dark mode, and privacy-first design. Install now from Chrome Web Store.",
  keywords: [
    "translation",
    "chrome extension",
    "translate",
    "browser extension",
    "altoTranslate",
    "Google Gemini",
    "OpenRouter",
    "MyMemory API",
    "language translation",
    "RTL languages",
    "privacy-focused translation",
    "secure translation",
    "auto language detection"
  ],
  authors: [{ name: "Mehran Bolhasani" }],
  creator: "Mehran Bolhasani",
  publisher: "Mehran Bolhasani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "altoTranslate",
    title: "altoTranslate - Smart Translation Chrome Extension",
    description: "Translate text instantly with altoTranslate. A powerful Chrome extension supporting 50+ languages, multiple API providers, auto language detection, and privacy-first design.",
    // Add OG image when you have one
    // images: [
    //   {
    //     url: `${baseUrl}/og-image.png`,
    //     width: 1200,
    //     height: 630,
    //     alt: "altoTranslate - Smart Translation Chrome Extension",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "altoTranslate - Smart Translation Chrome Extension",
    description: "Translate text instantly with altoTranslate. A powerful Chrome extension supporting 50+ languages, multiple API providers, and privacy-first design.",
    // Add Twitter image when you have one
    // images: [`${baseUrl}/twitter-image.png`],
    creator: "@mehranbolhasani", // Update with your Twitter handle if available
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "technology",
  classification: "Chrome Extension",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#0e69fe",
  },
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  )
}

export default RootLayout

