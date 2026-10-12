import { useContent } from '../content'
import ImageSlot from '../components/ImageSlot'
import Section from '../components/Section'
import Text from '../components/Text'

function Diagram({ diagram }) {
  const n = diagram.sources.length
  // The connector's vertical bar runs from the centre of the first source row to the centre of the last.
  const inset = `${50 / n}%`

  return (
    <figure className="rounded-lg border border-line bg-paper p-6 sm:p-8">
      <div className="flex items-stretch">
        <ul className="grid flex-1" style={{ gridTemplateRows: `repeat(${n}, minmax(0, 1fr))` }}>
          {diagram.sources.map((source) => (
            <li key={source.label} className="flex items-center gap-3 py-2">
              <ImageSlot image={source.icon} className="h-11 w-11 shrink-0 !p-0 !text-[10px]" imgClassName="object-contain" />
              <span className="min-w-0 text-[15px] font-medium leading-snug">
                <Text>{source.label}</Text>
              </span>
              <span aria-hidden="true" className="h-0.5 min-w-4 flex-1 bg-crimson-700/60" />
            </li>
          ))}
        </ul>

        <div aria-hidden="true" className="relative w-10 shrink-0 sm:w-14">
          <span className="absolute left-0 w-0.5 bg-crimson-700/60" style={{ top: inset, bottom: inset }} />
          <span className="absolute left-0 right-2 top-1/2 h-0.5 -translate-y-1/2 bg-crimson-700" />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[7px] border-l-[10px] border-y-transparent border-l-crimson-700" />
        </div>

        <div className="flex items-center pl-2">
          <ImageSlot image={diagram.target} className="h-20 w-20 rounded-xl sm:h-24 sm:w-24 !text-xs" imgClassName="object-contain" />
        </div>
      </div>
      <figcaption className="mt-5 text-center text-[15px] text-muted">
        <Text>{diagram.caption}</Text>
      </figcaption>
    </figure>
  )
}

export default function Approach() {
  const { approach } = useContent().content

  return (
    <Section id="approach" eyebrow={approach.eyebrow} title={approach.title} intro={approach.leadIn}>
      <p className="mt-4 max-w-3xl text-lg font-medium">
        <Text>{approach.audience}</Text>
      </p>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Diagram diagram={approach.diagram} />

        <ol className="space-y-5">
          {approach.steps.map((step, i) => (
            <li key={step.title} className="flex gap-5 rounded-lg border border-line bg-paper p-6">
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson-700 font-semibold text-white">
                {i + 1}
              </span>
              <p>
                <strong className="block font-semibold"><Text>{step.title}</Text></strong>
                <span className="mt-1 block text-muted"><Text>{step.text}</Text></span>
              </p>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-12 max-w-3xl border-l-4 border-crimson-100 pl-5 text-lg">
        <Text>{approach.honesty}</Text>
      </p>

      <div className="mt-12 max-w-3xl rounded-lg border-2 border-crimson-700 bg-crimson-50 p-7 sm:p-9">
        <p className="text-xl font-semibold leading-snug text-crimson-900 sm:text-2xl">
          <Text>{approach.readOnly}</Text>
        </p>
      </div>
      <p className="mt-6 max-w-3xl italic text-muted">
        <Text>{approach.closing}</Text>
      </p>
    </Section>
  )
}
