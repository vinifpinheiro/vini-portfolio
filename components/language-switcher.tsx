"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 min-w-[44px] flex items-center justify-center"
      aria-label="Toggle language"
    >
      <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
        {language === "en" ? "PT" : "EN"}
      </span>
    </button>
  )
}
