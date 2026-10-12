import { useState } from 'react'

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
      src={image.src}
      alt={image.alt}
      onError={() => setFailed(true)}
      className={`${imgClassName} ${className}`}
    />
  )
}
