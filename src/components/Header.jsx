import { useEffect, useRef, useState } from 'react'
import { useContent } from '../content'
import ExternalLink from './ExternalLink'
import ImageSlot from './ImageSlot'
import LanguageSwitch from './LanguageSwitch'
import Text from './Text'
import { primaryButton } from './buttons'

export default function Header() {
  const { content } = useContent()
  const { header, ui } = content
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

  // Escape closes the phone menu and returns focus to its button.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const menuLinks = (onNavigate) =>
    header.menu.map((item) => (
      <li key={item.href}>
        <a href={item.href} onClick={onNavigate} className="block py-2 font-medium text-ink hover:text-crimson-700 lg:py-0">
          <Text>{item.label}</Text>
        </a>
      </li>
    ))

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-paper focus:px-3 focus:py-2">
        {ui.skipLink}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#home" aria-label={ui.homeLink} className="shrink-0">
          <ImageSlot image={header.wordmark} className="h-8 w-36" imgClassName="object-contain object-left" />
        </a>

        <nav aria-label={ui.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px]">{menuLinks()}</ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitch />
          </div>
          <div className="hidden sm:block">
            <ExternalLink to="demo" className={`${primaryButton} !px-4 !py-2 text-[15px]`}>
              <Text>{header.cta}</Text>
            </ExternalLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.menuClose : ui.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-paper lg:hidden">
        <nav aria-label={ui.mainNav} className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <ul className="text-lg">{menuLinks(() => setOpen(false))}</ul>
          <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-line pt-4">
            <div className="sm:hidden">
              <ExternalLink to="demo" className={primaryButton}>
                <Text>{header.cta}</Text>
              </ExternalLink>
            </div>
            <div className="sm:hidden">
              <LanguageSwitch />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
