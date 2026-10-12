import { useContent } from '../content'
import ExternalLink from '../components/ExternalLink'
import ImageSlot from '../components/ImageSlot'
import Text from '../components/Text'
import { primaryButton, secondaryButton } from '../components/buttons'

export default function Home() {
  const { home } = useContent().content

  return (
    <section id="home" aria-labelledby="home-title" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-crimson-700">
            <Text>{home.eyebrow}</Text>
          </p>
          <h1 id="home-title" className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            <Text>{home.headline}</Text>
          </h1>
          <p className="mt-6 max-w-xl text-xl text-muted">
            <Text>{home.subline}</Text>
          </p>
          <p className="mt-6 inline-flex rounded-full border border-crimson-700/30 bg-crimson-50 px-4 py-1.5 text-[15px] font-medium text-crimson-900">
            <Text>{home.status}</Text>
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ExternalLink to="demo" className={primaryButton}>
              <Text>{home.primary}</Text>
            </ExternalLink>
            <a href={home.secondary.href} className={secondaryButton}>
              <Text>{home.secondary.label}</Text>
            </a>
          </div>
        </div>
        <ImageSlot image={home.image} className="mx-auto aspect-square w-full max-w-md" imgClassName="object-contain" />
      </div>
    </section>
  )
}
