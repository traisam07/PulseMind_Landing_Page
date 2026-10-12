// Renders a content string, highlighting any [BRACKETED] placeholder inside it.
// "[VI]" is the untranslated-copy prefix, not a missing value, so it stays plain.
const BRACKET = /(\[[^\]]+\])/g
const IS_BRACKET = /^\[[^\]]+\]$/

export default function Text({ children }) {
  if (typeof children !== 'string') return children ?? null
  return children.split(BRACKET).map((part, i) =>
    IS_BRACKET.test(part) && part !== '[VI]' ? (
      <mark key={i} className="ph-text" data-placeholder={part}>
        {part}
      </mark>
    ) : (
      part
    ),
  )
}
