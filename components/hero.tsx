"use client"

import { Button } from "@/components/ui/button"
import { Download, Rocket } from "lucide-react"
import Squares from '@/components/Squares';

const Hero = () => {
  const handleChromeStoreClick = () => {
    window.open("https://chromewebstore.google.com/detail/alto-translate/icpcjiealadibmgncmoejgjakcihmbco", "_blank", "noopener,noreferrer")
  }

  const handleChromeStoreKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleChromeStoreClick()
    }
  }

  return (
    <section id="hero-section" className="relative w-full max-w-full mx-auto h-[60vh] sm:h-[80vh] -mt-12 flex items-center justify-center">
        <div className="mx-auto flex flex-col items-center justify-center gap-16 md:gap-64">
          <div className="absolute inset-0 -z-10 w-full h-full top-0 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
            <Squares 
              speed={0.2} 
              squareSize={50}
              direction='down' // up, down, left, right, diagonal
              borderColor='#0e69fe'
              hoverFillColor='#0e69fe'
            />
          </div>

          <div className="text-center">
            
            <h1 className="mb-6 sm:mb-6 flex flex-col items-center justify-center gap-4">
              <span className="text-slate-600 text-xl font-extralight tracking-tight sm:text-2xl md:text-3xl lg:text-3xl animate-smooth-blur" data-delay="0.3">Translate Instantly with</span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16 animate-smooth-blur" data-delay="0.4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128"><rect width="128" height="128" fill="#0E69FE" rx="32"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M62 30h12l12 36h12M84 30h14"/></svg>
                {" "}<span className="text-primary text-4xl font-normal tracking-tight sm:text-2xl md:text-3xl lg:text-6xl animate-smooth-blur" data-delay="0.5">altoTranslate</span>
              </span>
            </h1>
            
            <p className="mb-6 sm:mb-12 text-base text-slate-400 sm:text-lg md:text-xl font-light tracking-tight max-w-md mx-auto animate-smooth-slide" data-delay="0.7">
              Seamlessly translate text across the web.
              Fast, accurate, and always at your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 px-12">
              <Button
                size="default"
                onClick={handleChromeStoreClick}
                onKeyDown={handleChromeStoreKeyDown}
                className="group relative h-16 sm:h-12 px-5 sm:px-6 text-sm sm:text-base font-light tracking-normal rounded-full gap-2 bg-blue-500 text-white shadow-lg shadow-blue-500/30 border border-blue-400 w-full sm:w-auto animate-smooth-slide cursor-pointer pr-4! hover:bg-blue-600 hover:shadow-blue-500/40 hover:border-blue-500" data-delay="0.8" data-trigger="onLoad"
                aria-label="Install altoTranslate from Chrome Web Store"
                tabIndex={0}
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
                <span className="inline">Get altoTranslate <span className="text-xs text-slate-100 font-mono bg-blue-800 px-2 py-1 ml-1 rounded-full tracking-[-1px] inline-block">v1.2.0</span></span>
              </Button>
              
              <Button
                size="default"
                variant="ghost"
                className="group relative h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base font-light tracking-tight rounded-full gap-2 border border-slate-300 w-full sm:w-auto animate-smooth-slide cursor-pointer" data-delay="0.9" data-trigger="onLoad"
                onClick={() => {
                  const element = document.getElementById("features")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    const element = document.getElementById("features")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                aria-label="Learn more about features"
                tabIndex={0}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero

