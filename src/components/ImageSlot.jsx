import { useState } from 'react'

// Content paths start with "/"; prefix the deploy base so they also work under a sub-path.
const withBase = (src) => (src.startsWith('/') ? import.meta.env.BASE_URL + src.slice(1) : src)

// Shows the asset if it exists, otherwise a labelled grey box at the same size.
export default function ImageSlot({ image, className = '', imgClassName = 'object-cover' }) {
  const [failed, setFailed] = useState(false)

  if (!image.src || failed) {
    return (
      <div className={`ph-box ${className}`} role="img" aria-label={image.alt || image.label} data-placeholder={image.label}>
        {image.label}
      </div>
    )
  }

  return (
    <img
      src={withBase(image.src)}
      alt={image.alt}
      onError={() => setFailed(true)}
      className={`${imgClassName} ${className}`}
    />
  )
}
