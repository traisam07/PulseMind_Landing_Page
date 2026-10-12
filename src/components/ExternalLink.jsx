import { isPlaceholder, useContent } from '../content'

// Link to an external URL from content.links. Placeholder URLs point to "#" and are flagged.
export default function ExternalLink({ to, className = '', children }) {
  const { content } = useContent()
  const href = content.links[to]

  if (isPlaceholder(href)) {
    return (
      <a href="#" data-placeholder={href} onClick={(e) => e.preventDefault()} className={className}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> {content.ui.newTab}</span>
    </a>
  )
}
