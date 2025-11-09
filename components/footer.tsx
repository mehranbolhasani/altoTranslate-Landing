"use client"

import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
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
    <footer className="py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-5 sm:gap-6">
          <div className="text-center">
            <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg font-normal">altoTranslate</h3>
            <p className="text-sm sm:text-base text-slate-400 font-light">
              Smart translation for the modern web
            </p>
          </div>

          <div className="w-full h-6 sm:h-8 grid place-items-center"><span className="w-px h-full bg-slate-300"></span></div>
          
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground flex flex-col items-center gap-1.5 sm:gap-2">
              <span>Mehran Bolhasani</span>
              <span>{new Date().getFullYear()}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

