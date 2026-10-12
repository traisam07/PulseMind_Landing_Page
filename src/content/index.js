import { createContext, useContext } from 'react'
import en from './en.json'
import vi from './vi.json'

export const contentByLang = { en, vi }

export const ContentContext = createContext({ content: en, lang: 'en', setLang: () => {} })

export function useContent() {
  return useContext(ContentContext)
}

// A value like "[DEMO URL]" means the real value has not been supplied yet.
export function isPlaceholder(value) {
  return typeof value === 'string' && /^\[[^\]]+\]$/.test(value.trim())
}
