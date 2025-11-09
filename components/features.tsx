import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MousePointerClick, Zap, Globe, Palette, Moon, Copy, Settings, Shield, Database, Languages } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Multiple API Support",
    description: "Choose between Google Gemini, OpenRouter, MyMemory API, or all with automatic fallback.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Auto Language Detection",
    description: "Automatically detects source language for seamless translation experience.",
  },
  {
    icon: <Languages className="h-6 w-6" />,
    title: "50+ Languages",
    description: "Support for major world languages including RTL languages.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Clean UI",
    description: "Minimal, non-intrusive popup design with Tailwind CSS.",
  },
  {
    icon: <Moon className="h-6 w-6" />,
    title: "Dark Mode",
    description: "Automatic dark mode support for comfortable viewing in any lighting.",
  },
  {
    icon: <Copy className="h-6 w-6" />,
    title: "Copy to Clipboard",
    description: "Easy copying of translated text with a single click.",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Settings Page",
    description: "Comprehensive configuration options to customize your experience.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Memory Optimized",
    description: "Zero memory leaks, optimized for long-running sessions.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security First",
    description: "Input validation, XSS protection, secure API key storage.",
  },
]

const Features = () => {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
        <div className="mx-auto mb-10 sm:mb-12 md:mb-16 max-w-2xl text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl font-normal tracking-tight sm:text-3xl md:text-4xl text-slate-600">
            Features
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light">
            Everything for seamless translation.
          </p>
        </div>
        
        <div className="grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all border-none">
              <CardHeader className="p-0">
                <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  {feature.icon}
                </div>
                <CardTitle className="text-base sm:text-lg font-normal pb-3 sm:pb-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-sm sm:text-base font-light text-slate-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
