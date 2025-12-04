"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY
        // Shrink header when hero section is completely out of viewport
        setIsScrolled(scrollPosition > heroBottom)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChromeStoreClick = () => {
    window.open("https://chrome.google.com/webstore", "_blank", "noopener,noreferrer")
  }

  const handleChromeStoreKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleChromeStoreClick()
    }
  }

  const handleGithubClick = () => {
    window.open("https://github.com/mehranbolhasani/altoTranslate", "_blank", "noopener,noreferrer")
  }

  const handleGithubKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleGithubClick()
    }
  }

  return (
    <header className={`sticky top-4 z-50 w-screen transition-all duration-300 mx-auto ${
          isScrolled 
            ? "max-w-[90%] md:max-w-2xl shadow-2xl shadow-blue-500/20 translate-y-0 opacity-100" 
            : "max-w-[90%] md:max-w-2xl -translate-y-96 opacity-0"
        }`}>
      <div 
        className="flex h-14 md:h-18 items-center justify-between transition-all duration-300 bg-white/60 backdrop-blur-md rounded-3xl border border-white px-4 md:px-6"
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <svg className="h-8 w-8 animate-smooth-blur" data-delay="0.4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128"><rect width="128" height="128" fill="#0E69FE" rx="32"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M62 30h12l12 36h12M84 30h14"/></svg>
          <span className={`text-md font-normal md:text-lg ${isScrolled ? "md:inline" : "text-primary"}`}>altoTranslate</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleChromeStoreClick}
            onKeyDown={handleChromeStoreKeyDown}
            className="h-8 px-2 gap-1 sm:h-9 sm:px-3 sm:gap-2"
            aria-label="Install from Chrome Web Store"
            tabIndex={0}
          >
            <Download className="h-5 w-5" />
            <span className="hidden md:inline">Chrome Web Store</span>
            <ExternalLink className="hidden sm:inline h-2.5 w-2.5 sm:h-3 sm:w-3" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleGithubClick}
            onKeyDown={handleGithubKeyDown}
            className="h-8 px-2 gap-1 sm:h-9 sm:px-3 sm:gap-2"
            aria-label="View on GitHub"
            tabIndex={0}
          >
            <Github className="h-5 w-5" />
            <span className="hidden md:inline">GitHub</span>
            <ExternalLink className="hidden sm:inline h-2.5 w-2.5 sm:h-3 sm:w-3" />
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header

