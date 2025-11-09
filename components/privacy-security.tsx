import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Database, Server, EyeOff, Shield, CheckCircle, Cpu, FileText } from "lucide-react"

interface SecurityFeature {
  icon: React.ReactNode
  title: string
  description: string
}

const securityFeatures: SecurityFeature[] = [
  {
    icon: <Lock className="h-6 w-6" />,
    title: "API Keys",
    description: "Stored securely in Chrome's encrypted storage.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "No Data Collection",
    description: "Extension doesn't collect or store user data.",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Local Processing",
    description: "All translation requests go directly to chosen API services.",
  },
  {
    icon: <EyeOff className="h-6 w-6" />,
    title: "No Tracking",
    description: "No analytics or tracking code included.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Input Validation",
    description: "All user inputs are validated and sanitized.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "XSS Protection",
    description: "HTML content is properly escaped.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Memory Safe",
    description: "Zero memory leaks, proper cleanup on page unload.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "CSP Compliant",
    description: "No inline scripts, secure content loading.",
  },
]

const PrivacySecurity = () => {
  return (
    <section id="privacy" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
        <div className="mx-auto mb-10 sm:mb-12 md:mb-16 max-w-2xl text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl font-normal tracking-tight sm:text-3xl md:text-4xl text-slate-600">
            Privacy & Security
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light px-2">
            Your privacy and security are our top priorities. We've built altoTranslate with security and privacy at its core.
          </p>
        </div>
        
        <div className="grid gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="transition-all border-none">
              <CardHeader className="p-0">
                <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
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

export default PrivacySecurity

