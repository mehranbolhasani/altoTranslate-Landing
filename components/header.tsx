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
    <header className="sticky top-2 z-50 w-full transition-all duration-300 sm:top-4">
      <div 
        className={`mx-auto flex h-12 items-center justify-between px-3 transition-all duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-full sm:h-14 sm:px-4 md:h-16 ${
          isScrolled 
            ? "max-w-[90%] sm:max-w-[400px] md:max-w-[512px] shadow-xl" 
            : "max-w-[95%] sm:max-w-[768px] md:max-w-[1024px]"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <svg className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
            <circle cx="64" cy="64" r="56" fill="#0e69fe"/>
            <path fill="#fff" stroke="#3b82f6" strokeWidth="3" d="M94.163 52.977c3.023 0 5.65.608 7.78 1.931h-.001c2.125 1.3 3.631 3.146 4.485 5.491h.001c.861 2.323 1.008 4.95.533 7.822-.476 2.882-1.485 5.454-3.045 7.689l-.003.003a16.33 16.33 0 0 1-5.997 5.212h-.003c-2.445 1.248-5.207 1.852-8.25 1.852-3.031 0-5.665-.6-7.805-1.907l-.01-.006c-2.114-1.313-3.615-3.16-4.47-5.498v-.003c-.846-2.33-.987-4.958-.513-7.83.476-2.879 1.478-5.446 3.028-7.67a16 16 0 0 1 5.989-5.219c2.455-1.258 5.228-1.867 8.281-1.867Zm-1.16 9.819c-.462 0-.89.14-1.324.481-.46.36-.91.92-1.313 1.756l-.003.006c-.398.816-.715 1.845-.925 3.115v.002c-.21 1.26-.232 2.266-.116 3.052.129.79.367 1.235.598 1.484.196.2.451.331.902.331.462 0 .88-.141 1.299-.474l.009-.008.172-.145c.4-.36.788-.88 1.141-1.611l.006-.012c.41-.828.73-1.857.939-3.11.21-1.274.226-2.276.101-3.041v-.003c-.128-.8-.37-1.248-.602-1.497-.182-.194-.426-.326-.883-.326Z"/>
            <path fill="#fff" stroke="#3b82f6" strokeWidth="3" d="m79.575 47.046-.29 1.745-.75 4.527h4.525l-.298 1.752-1.16 6.818-.211 1.248h-4.487l-1.59 9.58h.003c.158 0 .403-.02.752-.08.383-.077.69-.136.91-.173l1.676-.279.07 1.697.273 6.614.049 1.18L77.91 82a31 31 0 0 1-2.028.485l-.001-.001c-.893.202-1.899.329-3.007.389h-.01c-2.329.109-4.365-.128-6.026-.809l-.004-.002c-1.681-.695-2.951-1.833-3.662-3.436l-.003-.008-.004-.008c-.675-1.57-.742-3.402-.374-5.389l1.669-10.085h-3.363l.297-1.75 1.16-6.819.212-1.25h3.32l.83-5.017.208-1.255z"/>
            <path fill="#fff" stroke="#3b82f6" strokeWidth="3" d="m60.98 72.715.025-.025m-.025.025-1.27-.237m1.27.237.025-.025m-.025.025-1.27-.237m1.295.213-1.296-.213m1.296.213-1.296-.213m6.133-27.887-.289 1.745-4.345 26.276.001.001c.215 0 .377-.01.493-.021q.095-.016.15-.028.033-.007.043-.01l1.868-.622.104 1.966.34 6.478.062 1.168-1.118.344q-.74.226-1.654.423c-.682.15-1.603.253-2.716.323h-.019c-3.501.176-6.414-.325-8.25-1.964-1.946-1.737-2.337-4.459-1.828-7.55l4.5-27.273.208-1.256z"/>
            <path fill="#fff" stroke="#3b82f6" strokeWidth="3" d="M35.099 52.977c1.465 0 2.807.257 3.966.844v.001a7.4 7.4 0 0 1 1.892 1.313l.093-.56.206-1.257h12.488l-.29 1.747-4.365 26.182-.21 1.253H36.499l.24-1.445a11 11 0 0 1-2.077 1.084l-.008.003c-1.215.473-2.527.699-3.919.699-2.14 0-4.078-.567-5.75-1.737-1.728-1.207-2.902-3-3.592-5.235-.706-2.29-.739-5.052-.217-8.204v-.001c.546-3.298 1.517-6.083 2.973-8.286l.003-.005c1.424-2.136 3.106-3.775 5.07-4.835l.004-.002c1.905-1.022 3.869-1.559 5.874-1.559Zm2.351 10.228c-.552 0-1.022.152-1.457.466l-.004.003c-.445.319-.882.825-1.277 1.595l-.004.007c-.389.75-.695 1.7-.892 2.88-.197 1.184-.201 2.112-.072 2.821l.053.248c.133.54.335.862.538 1.06.206.184.517.329 1.07.329a2.47 2.47 0 0 0 1.477-.47c.483-.352.938-.874 1.338-1.627.398-.76.701-1.7.885-2.846l.002-.008c.198-1.183.195-2.1.059-2.787v-.003c-.138-.707-.382-1.087-.62-1.301l-.012-.01-.012-.012c-.206-.194-.516-.345-1.072-.345Z"/>
          </svg>
          <span className={`text-sm font-normal sm:text-base md:text-lg ${isScrolled ? "hidden md:inline" : "text-primary"}`}>altoTranslate</span>
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
            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
            <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden md:inline">GitHub</span>
            <ExternalLink className="hidden sm:inline h-2.5 w-2.5 sm:h-3 sm:w-3" />
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header

