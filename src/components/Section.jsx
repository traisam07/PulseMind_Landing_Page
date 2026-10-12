import Text from './Text'

export default function Section({ id, eyebrow, title, intro, tone = 'paper', children }) {
  const bg = tone === 'wash' ? 'bg-wash' : 'bg-paper'
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${bg} py-20 sm:py-28`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-crimson-700">
            <Text>{eyebrow}</Text>
          </p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            <Text>{title}</Text>
          </h2>
          {intro && (
            <p className="mt-5 text-lg text-muted">
              <Text>{intro}</Text>
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}
