"use client"

import { useState, useEffect } from "react"
import { Copy, X, Check } from "lucide-react"

interface Translation {
  lang: string
  langCode: string
  text: string
  dir: "ltr" | "rtl"
  fontFamily?: string
}

interface Theme {
  name: string
  description: string
  colors: {
    background: string
    border: string
    text: string
    textSecondary: string
    headerBorder: string
    buttonBg: string
    buttonText: string
    buttonHover: string
    translatedText: string
    errorBg: string
    errorText: string
    errorBorder: string
  }
}

const translations: Translation[] = [
  {
    lang: "French",
    langCode: "fr",
    text: "Tous les êtres humains naissent libres et égaux en dignité et en droits. Ils sont doués de raison et de conscience et doivent agir les uns envers les autres dans un esprit de fraternité.",
    dir: "ltr",
  },
  {
    lang: "Spanish",
    langCode: "es",
    text: "Todos los seres humanos nacen libres e iguales en dignidad y derechos. Están dotados de razón y conciencia y deben actuar unos hacia otros con espíritu de hermandad.",
    dir: "ltr",
  },
  {
    lang: "German",
    langCode: "de",
    text: "Alle Menschen sind frei und gleich an Würde und Rechten geboren. Sie sind mit Vernunft und Gewissen begabt und sollen einander im Geist der Brüderlichkeit begegnen.",
    dir: "ltr",
  },
  {
    lang: "Italian",
    langCode: "it",
    text: "Tutti gli esseri umani nascono liberi ed eguali in dignità e diritti. Sono dotati di ragione e di coscienza e devono agire gli uni verso gli altri in spirito di fratellanza.",
    dir: "ltr",
  },
  {
    lang: "Portuguese",
    langCode: "pt",
    text: "Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir uns em relação aos outros com espírito de fraternidade.",
    dir: "ltr",
  },
  {
    lang: "Russian",
    langCode: "ru",
    text: "Все люди рождаются свободными и равными в своем достоинстве и правах. Они наделены разумом и совестью и должны поступать в отношении друг друга в духе братства.",
    dir: "ltr",
  },
  {
    lang: "Japanese",
    langCode: "ja",
    text: "すべての人間は、生まれながらにして自由であり、かつ、尊厳と権利とについて平等である。人間は、理性と良心とを授けられており、互いに同胞の精神をもって行動しなければならない。",
    dir: "ltr",
  },
  {
    lang: "Chinese",
    langCode: "zh",
    text: "人人生而自由，在尊严和权利上一律平等。他们赋有理性和良心，并应以兄弟关系的精神相对待。",
    dir: "ltr",
  },
  {
    lang: "Arabic",
    langCode: "ar",
    text: "يولد جميع الناس أحراراً متساوين في الكرامة والحقوق. وقد وهبوا عقلاً وضميراً وعليهم أن يعامل بعضهم بعضاً بروح الإخاء.",
    dir: "rtl",
    fontFamily: "Estedad, sans-serif",
  },
  {
    lang: "Persian",
    langCode: "fa",
    text: "همه انسان‌ها آزاد به دنیا می‌آیند و از لحاظ حیثیت و حقوق با هم برابرند. همه دارای عقل و وجدان هستند و باید نسبت به یکدیگر با روح برادری رفتار کنند.",
    dir: "rtl",
    fontFamily: "Estedad, sans-serif",
  },
]

const themes: Record<string, Theme> = {
  'default': {
    name: 'Default',
    description: 'Clean and minimal',
    colors: {
      background: 'rgba(255, 255, 255, 0.6)',
      border: '#e5e7eb',
      text: '#374151',
      textSecondary: '#6b7280',
      headerBorder: '#f3f4f6',
      buttonBg: 'rgba(59, 131, 246, 0.2)',
      buttonText: '#3b82f6',
      buttonHover: '#2563eb',
      translatedText: '#0c4a6e',
      errorBg: '#fef2f2',
      errorText: '#dc2626',
      errorBorder: '#fecaca'
    }
  },
  'ocean': {
    name: 'Ocean',
    description: 'Calm blue tones',
    colors: {
      background: 'rgba(240, 249, 255, 0.6)',
      border: '#bae6fd',
      text: '#0c4a6e',
      textSecondary: '#075985',
      headerBorder: '#e0f2fe',
      buttonBg: 'rgba(14, 165, 233, 0.2)',
      buttonText: '#0ea5e9',
      buttonHover: '#0284c7',
      translatedText: '#0369a1',
      errorBg: '#fef2f2',
      errorText: '#dc2626',
      errorBorder: '#fecaca'
    }
  },
  'sunset': {
    name: 'Sunset',
    description: 'Warm orange and pink',
    colors: {
      background: 'rgba(255, 247, 237, 0.6)',
      border: '#fed7aa',
      text: '#7c2d12',
      textSecondary: '#9a3412',
      headerBorder: '#ffedd5',
      buttonBg: 'rgba(249, 115, 22, 0.2)',
      buttonText: '#f97316',
      buttonHover: '#ea580c',
      translatedText: '#c2410c',
      errorBg: '#fef2f2',
      errorText: '#dc2626',
      errorBorder: '#fecaca'
    }
  },
  'forest': {
    name: 'Forest',
    description: 'Natural green shades',
    colors: {
      background: 'rgba(240, 253, 244, 0.6)',
      border: '#bbf7d0',
      text: '#14532d',
      textSecondary: '#166534',
      headerBorder: '#dcfce7',
      buttonBg: 'rgba(34, 197, 94, 0.2)',
      buttonText: '#22c55e',
      buttonHover: '#16a34a',
      translatedText: '#15803d',
      errorBg: '#fef2f2',
      errorText: '#dc2626',
      errorBorder: '#fecaca'
    }
  },
  'purple': {
    name: 'Purple',
    description: 'Rich purple hues',
    colors: {
      background: 'rgba(250, 245, 255, 0.6)',
      border: '#e9d5ff',
      text: '#581c87',
      textSecondary: '#6b21a8',
      headerBorder: '#f3e8ff',
      buttonBg: 'rgba(168, 85, 247, 0.2)',
      buttonText: '#a855f7',
      buttonHover: '#9333ea',
      translatedText: '#7e22ce',
      errorBg: '#fef2f2',
      errorText: '#dc2626',
      errorBorder: '#fecaca'
    }
  },
  'midnight': {
    name: 'Midnight',
    description: 'Dark elegant theme',
    colors: {
      background: 'rgba(15, 23, 42, 0.6)',
      border: '#334155',
      text: '#f1f5f9',
      textSecondary: '#cbd5e1',
      headerBorder: '#1e293b',
      buttonBg: 'rgba(59, 130, 246, 0.3)',
      buttonText: '#60a5fa',
      buttonHover: '#3b82f6',
      translatedText: '#93c5fd',
      errorBg: '#7f1d1d',
      errorText: '#fca5a5',
      errorBorder: '#dc2626'
    }
  },
  'rose': {
    name: 'Rose',
    description: 'Soft pink tones',
    colors: {
      background: 'rgba(255, 241, 242, 0.6)',
      border: '#fecdd3',
      text: '#881337',
      textSecondary: '#9f1239',
      headerBorder: '#fff1f2',
      buttonBg: 'rgba(244, 63, 94, 0.2)',
      buttonText: '#f43f5e',
      buttonHover: '#e11d48',
      translatedText: '#be123c',
      errorBg: '#fef2f2',
      errorText: '#dc2626',
      errorBorder: '#fecaca'
    }
  },
  'amber': {
    name: 'Amber',
    description: 'Bright and energetic',
    colors: {
      background: 'rgba(255, 251, 235, 0.6)',
      border: '#fde68a',
      text: '#78350f',
      textSecondary: '#92400e',
      headerBorder: '#fef3c7',
      buttonBg: 'rgba(245, 158, 11, 0.2)',
      buttonText: '#f59e0b',
      buttonHover: '#d97706',
      translatedText: '#b45309',
      errorBg: '#fef2f2',
      errorText: '#dc2626',
      errorBorder: '#fecaca'
    }
  },
  'slate': {
    name: 'Slate',
    description: 'Cool gray tones',
    colors: {
      background: 'rgba(248, 250, 252, 0.6)',
      border: '#cbd5e1',
      text: '#1e293b',
      textSecondary: '#334155',
      headerBorder: '#f1f5f9',
      buttonBg: 'rgba(100, 116, 139, 0.2)',
      buttonText: '#64748b',
      buttonHover: '#475569',
      translatedText: '#334155',
      errorBg: '#fef2f2',
      errorText: '#dc2626',
      errorBorder: '#fecaca'
    }
  }
}

const themeKeys = Object.keys(themes)

const PopupMock = () => {
  const [copied, setCopied] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('amber')

  const currentTranslation = translations[currentIndex]
  const currentThemeData = themes[currentTheme]
  const sourceText = "All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood."

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true)
      
      // Show loading spinner for 1.5 seconds
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % translations.length)
        setIsLoading(false)
      }, 1000)
    }, 8000) // Change language every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTranslation.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleThemeChange = (themeKey: string) => {
    setCurrentTheme(themeKey)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute h-40 sm:h-52 md:h-60 w-full bg-gradient-to-b from-background to-muted/40 top-0 z-10"></div>
      {/* Background Text - Mimicking a webpage */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-slate-300 bg-white p-4 sm:p-6 md:p-8">
        {/* Simulated webpage content */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-slate-300">Universal Declaration of Human Rights</h2>
          <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p className="text-slate-300">
              The Universal Declaration of Human Rights (UDHR) is a milestone document in the history of human rights.
            </p>
            <p className="text-slate-400">
            Drafted by representatives with different legal and cultural backgrounds from all regions of the world, the Declaration was proclaimed by the United Nations General Assembly in Paris on 10 December 1948 (General Assembly resolution 217 A) as a common standard of achievements for all peoples and all nations.
            </p>
            <p className="relative">
              {/* Selected text with highlight */}
              <span 
                className="relative text-gray-900"
                style={{
                  backgroundColor: 'rgba(147, 197, 253, 0.3)',
                  padding: '2px 0',
                  borderRadius: '2px',
                }}
              >
                {sourceText}
              </span>
            </p>

            <p className="text-slate-400">
            Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status. Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.
            </p>

            <p className="text-slate-300">
            Everyone has the right to life, liberty and security of person.
            </p>
          </div>
        </div>

        {/* Popup positioned near selected text */}
        <div 
          className="absolute right-[50%] sm:-right-12 md:right-24 top-[50%] sm:top-[48%] z-20 transform scale-100 sm:scale-90 md:scale-100 origin-top-right translate-x-1/2 sm:translate-x-0 md:translate-x-1/2"
          style={{
            animation: 'alto-fade-in 0.3s ease-out',
          }}
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm border border-slate-300 rounded-md flex items-center justify-center mb-2 shadow-md"><kbd className="text-slate-700 text-base sm:text-xl">⌥</kbd></div>
          <div className="alto-translate-popup w-[320px] sm:w-[320px] md:w-[360px] lg:w-[400px] min-w-[180px] max-w-[calc(100vw-2rem)] py-[10px] px-3 sm:py-3 sm:px-[14px] md:py-4 md:px-4 text-xs sm:text-[13px] md:text-sm min-h-[360px] sm:min-h-[300px] md:min-h-[320px]" style={{
            background: currentThemeData.colors.background,
            border: `1px solid ${currentThemeData.colors.border}`,
            borderRadius: '12px',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 15px 24px -4px, rgba(0, 0, 0, 0.05) 0px 4px 8px -2px',
            fontFamily: 'InterVariable, sans-serif',
            lineHeight: '1.5',
            color: currentThemeData.colors.text,
            backdropFilter: 'blur(12px) saturate(180%)',
          }}>
            {/* Header */}
            <div className="alto-translate-popup-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: `1px solid ${currentThemeData.colors.headerBorder}`,
            }}>
              <div className="alto-translate-popup-title" style={{
                color: currentThemeData.colors.text,
                fontSize: '13px',
                letterSpacing: '0',
                textTransform: 'initial',
                fontWeight: '400',
                opacity: '0.7',
              }}>
                Translation
              </div>
              <button
                className="alto-translate-popup-close"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  color: currentThemeData.colors.textSecondary,
                  fontSize: '16px',
                  lineHeight: '1',
                  transition: 'all 0.2s ease',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                  }
                }}
                aria-label="Close translation"
                tabIndex={0}
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="alto-translate-popup-content" style={{
              marginBottom: '12px',
              minHeight: '70px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
            }}>
              {/* Original Text */}
              <div className="alto-translate-original-text" style={{
                marginBottom: '8px',
                fontSize: '14px',
                color: currentThemeData.colors.textSecondary,
                wordWrap: 'break-word',
                padding: '4px 0',
              }}>
                {sourceText}
              </div>

              {/* Translated Text or Loading */}
              {isLoading ? (
                <div className="alto-translate-loading" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: currentThemeData.colors.textSecondary,
                  fontSize: '13px',
                  minHeight: '20px',
                  padding: '4px 0',
                }}>
                  <div className="alto-translate-spinner" style={{
                    width: '16px',
                    height: '16px',
                    border: `2px solid ${currentThemeData.colors.border}`,
                    borderTop: `2px solid ${currentThemeData.colors.buttonText}`,
                    borderRadius: '50%',
                    animation: 'alto-spin 1s linear infinite',
                  }}></div>
                  <span>Translating...</span>
                </div>
              ) : (
                <div 
                  className={`alto-translate-translated-text ${currentTranslation.dir === 'rtl' ? 'rtl' : 'ltr'}`}
                  style={{
                    fontSize: '14px',
                    color: currentThemeData.colors.translatedText,
                    wordWrap: 'break-word',
                    minHeight: '20px',
                    padding: '4px 0',
                    direction: currentTranslation.dir,
                    textAlign: currentTranslation.dir === 'rtl' ? 'right' : 'left',
                    fontFamily: currentTranslation.fontFamily || 'InterVariable, sans-serif',
                  }}
                >
                  {currentTranslation.text}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="alto-translate-popup-footer" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              gap: '8px',
              position: 'absolute',
              bottom: '12px',
              width: 'calc(100% - 32px)',
            }}>
              <button
                className="alto-translate-copy-btn"
                onClick={handleCopy}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handleCopy()
                  }
                }}
                disabled={isLoading}
                style={{
                  background: copied ? 'rgba(16, 185, 129, 0.2)' : currentThemeData.colors.buttonBg,
                  color: copied ? '#10b981' : currentThemeData.colors.buttonText,
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 12px',
                  fontSize: '12px',
                  fontWeight: '500',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  opacity: isLoading ? 0.5 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isLoading && !copied) {
                    e.currentTarget.style.background = currentThemeData.colors.buttonHover
                    e.currentTarget.style.color = 'white'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!copied) {
                    e.currentTarget.style.background = currentThemeData.colors.buttonBg
                    e.currentTarget.style.color = currentThemeData.colors.buttonText
                  }
                }}
                aria-label="Copy translated text"
                tabIndex={0}
              >
                {copied ? (
                  <>
                    <Check style={{ width: '16px', height: '16px' }} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy style={{ width: '16px', height: '16px' }} />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <div className="alto-translate-api-badge" style={{
                fontSize: '9px',
                color: currentThemeData.colors.textSecondary,
                padding: '2px 6px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderRadius: '30px',
                background: 'transparent',
                border: `1px solid ${currentThemeData.colors.textSecondary}`,
                opacity: '0.7',
              }}>
                {isLoading ? 'Loading...' : currentTranslation.langCode.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Theme Switcher Dots */}
          <div className="relative flex items-center justify-center gap-4 mt-12 border border-slate-400/50 rounded-full px-3 py-2 w-fit mx-auto z-[2]">
            {themeKeys.map((themeKey) => (
              <button
                key={themeKey}
                onClick={() => handleThemeChange(themeKey)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    handleThemeChange(themeKey)
                  }
                }}
                className="transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-full"
                style={{
                  width: currentTheme === themeKey ? '10px' : '12px',
                  height: currentTheme === themeKey ? '10px' : '12px',
                  borderRadius: '50%',
                  backgroundColor: currentTheme === themeKey 
                    ? themes[themeKey].colors.buttonText 
                    : themes[themeKey].colors.border,
                  border: `1px solid ${themes[themeKey].colors.border}`,
                  cursor: 'pointer',
                  opacity: currentTheme === themeKey ? 1 : 0.8,
                  transform: currentTheme === themeKey ? 'scale(1.2)' : 'scale(1)',
                }}
                aria-label={`Switch to ${themes[themeKey].name} theme`}
                title={themes[themeKey].name}
                tabIndex={0}
              />
            ))}
          </div>

          <div className="handwritten absolute hidden sm:flex items-center justify-center gap-1 w-48 -bottom-8 -left-20 rotate-6 z-[1]">
            <span className="text-slate-300 text-3xl font-story-script flex-1 tracking-normal -rotate-6 translate-y-1">Try us!</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 67" className="flex-1 rotate-45 scale-[40%] -translate-x-10">
              <path fill="#cbd5e1" d="M.61 65.11c-.08-.64.21-1.29.71-1.68.43-.414.83-.869 1.23-1.32q.195-.222.39-.44l.604-.658A229 229 0 0 1 4.7 59.76c1.07-1.15 2.13-2.32 3.17-3.49 1.244-1.477 2.444-2.985 3.644-4.494a215 215 0 0 1 3.536-4.366c2.275-2.724 4.617-5.406 6.949-8.077l.631-.723c2.036-2.33 4.012-4.722 5.988-7.113L29.94 29.9q3.69-4.44 7.35-8.91c1.36-1.66 2.74-3.32 4.13-4.96 1.067-1.26 2.164-2.49 3.263-3.723l.832-.935.034-.04.1-.11c.968-1.102 1.91-2.22 2.855-3.34q.61-.728 1.226-1.452c.57-.669 1.14-1.328 1.711-1.987l.029-.033c-.84.11-1.68.23-2.51.36q-.394.063-.787.129a54 54 0 0 1-2.043.311 88 88 0 0 0-3.25.47c-.83.18-1.65.36-2.48.55q-.255.059-.51.12c-.454.11-.912.222-1.37.28-.96.12-1.86-.55-1.99-1.51-.13-.95.55-1.88 1.51-2 .09-.01.18-.03.28-.04.578-.122 1.152-.253 1.726-.383C41.16 2.444 42.272 2.19 43.4 2c.488-.086.979-.146 1.472-.206h.002c.365-.044.73-.089 1.096-.144.814-.122 1.62-.253 2.432-.384l.348-.056c1.013-.158 2.028-.298 3.043-.438.85-.117 1.7-.234 2.547-.362.75-.11 1.57-.18 2.21.32.57.44.76 1.126.663 1.8q.105.15.177.33c.28.7.37 1.42.46 2.16.05.41.11.81.15 1.22.1 1.01.2 2.02.29 3.03.16 1.84.38 3.66.71 5.46.26 1.22.49 2.41.46 3.67-.01.29-.029.583-.048.876-.023.352-.047.704-.052 1.054.08.16.14.34.16.54.12.92-.55 1.91-1.52 2-.07 0-.13.01-.19.01-.66-.01-1.34-.31-1.67-.94-.24-.45-.32-.91-.31-1.41.004-.41.027-.815.049-1.22.032-.583.065-1.165.041-1.75-.05-.48-.13-.94-.22-1.42-.37-1.78-.65-3.56-.82-5.38q-.06-.672-.12-1.346c-.089-1.02-.178-2.042-.295-3.06l-.418.487-.014.016c-1.04 1.213-2.079 2.426-3.103 3.653-1.682 2.009-3.423 3.96-5.155 5.899l-.055.061-.003.003-.007.007-.008.01q-.004.01-.012.01l-.01.01-.03.03c-2.47 2.86-4.88 5.79-7.27 8.71a1043 1043 0 0 1-5.5 6.647l-.036.043-1.804 2.17c-2.43 2.93-4.88 5.84-7.39 8.7-2.56 2.92-5.1 5.87-7.55 8.88q-.426.525-.847 1.055-.549.69-1.094 1.382c-1.381 1.75-2.761 3.498-4.249 5.163-.847.952-1.712 1.888-2.576 2.823l-.864.937-.017.019c-.564.613-1.129 1.227-1.693 1.851l-.109.117-.082.088c-.196.209-.39.416-.579.635-.37.39-.8.79-1.36.84a.7.7 0 0 1-.146.01H2.44c-.9.02-1.7-.59-1.83-1.5"/>
              <path fill="#000" d="M45.64 16.56c.02-.02.03-.03.04-.05-.01.01-.02.03-.04.05M45.7 16.5s.01-.01.01-.02q-.01.01-.01.02"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute h-60 w-full bg-gradient-to-t from-background to-muted/40 bottom-0 z-10"></div>
    </div>
  )
}

export default PopupMock
