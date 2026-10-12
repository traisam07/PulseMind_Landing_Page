// Regenerates src/content/vi.json from en.json, prefixing every page string with "[VI] ".
// Machine values (URLs, file paths, email subjects, keys the code uses) are copied unchanged
// so links keep working until the real translation is dropped in.
import { readFileSync, writeFileSync } from 'node:fs'

const PREFIX = '[VI] '
const KEEP_KEYS = new Set(['links', 'lang', 'href', 'src', 'subject', 'link', 'icon', 'code'])

function prefix(value, key) {
  if (KEEP_KEYS.has(key)) return value
  if (typeof value === 'string') return value === '' ? value : PREFIX + value
  if (Array.isArray(value)) return value.map((v) => prefix(v))
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, prefix(v, k)]))
  }
  return value
}

const en = JSON.parse(readFileSync(new URL('../src/content/en.json', import.meta.url), 'utf8'))
const vi = prefix(en)
vi.meta.lang = 'vi'
writeFileSync(new URL('../src/content/vi.json', import.meta.url), JSON.stringify(vi, null, 2) + '\n')
console.log('Wrote src/content/vi.json')
