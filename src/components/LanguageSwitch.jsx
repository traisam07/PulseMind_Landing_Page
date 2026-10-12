import { useContent } from '../content'

export default function LanguageSwitch({ dark = false }) {
  const { content, lang, setLang } = useContent()
  const idle = dark ? 'text-white/80 hover:text-white' : 'text-muted hover:text-ink'
  const active = dark ? 'bg-white text-crimson-900' : 'bg-crimson-700 text-white'

  return (
    <div role="group" aria-label={content.ui.languageLabel} className="inline-flex items-center gap-1 text-sm font-semibold">
      {content.header.languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`rounded px-2 py-1 ${lang === code ? active : idle}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
