import { useContent } from '../content'
import ImageSlot from '../components/ImageSlot'
import Section from '../components/Section'
import Text from '../components/Text'

// One continuous vertical line: solid through completed milestones, dashed after "Now".
function Item({ dot, line, children }) {
  return (
    <li className="relative grid grid-cols-[2rem_1fr] gap-x-5 pb-10 last:pb-0 sm:gap-x-7">
      {line && <span aria-hidden="true" className={`absolute left-[calc(1rem-1px)] top-4 bottom-0 ${line}`} />}
      <span aria-hidden="true" className="relative z-10 flex justify-center pt-1">{dot}</span>
      <div>{children}</div>
    </li>
  )
}

const solid = 'w-0.5 bg-crimson-700'
const dashed = 'border-l-2 border-dashed border-crimson-700/70'

export default function Progress() {
  const { progress, ui } = useContent().content
  const { done, now, ahead } = progress

  return (
    <Section id="progress" eyebrow={progress.eyebrow} title={progress.title} intro={progress.anchor}>
      <ol aria-label={ui.timelineLabel} className="mt-14 max-w-3xl">
        {done.map((m, i) => (
          <Item key={i} line={solid} dot={<span className="h-4 w-4 rounded-full bg-crimson-700" />}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-muted"><Text>{m.date}</Text></p>
                <h3 className="mt-1 text-lg font-semibold"><Text>{m.title}</Text></h3>
                <p className="mt-1 text-muted"><Text>{m.text}</Text></p>
              </div>
              <ImageSlot image={m.photo} className="aspect-[4/3] w-40 shrink-0 rounded !text-xs" />
            </div>
          </Item>
        ))}

        <Item line={dashed} dot={<span className="-mt-1 h-6 w-6 rounded-full border-4 border-crimson-100 bg-crimson-700 ring-2 ring-crimson-700" />}>
          <div className="rounded-lg border-2 border-crimson-700 bg-crimson-50 p-5">
            <p className="inline-block rounded bg-crimson-700 px-2 py-0.5 text-sm font-semibold uppercase tracking-wider text-white">
              <Text>{now.stage}</Text>
            </p>
            <h3 className="mt-2 text-lg font-semibold"><Text>{now.title}</Text></h3>
            <p className="mt-1"><Text>{now.text}</Text></p>
          </div>
        </Item>

        {ahead.map((stage, i) => (
          <Item
            key={i}
            line={i < ahead.length - 1 ? dashed : null}
            dot={<span className="h-4 w-4 rounded-full border-2 border-crimson-700 bg-paper" />}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-crimson-700"><Text>{stage.stage}</Text></p>
            <h3 className="mt-1 text-lg font-semibold"><Text>{stage.title}</Text></h3>
            <p className="mt-1 text-muted"><Text>{stage.text}</Text></p>
          </Item>
        ))}
      </ol>

      <p className="mt-12 text-xl font-semibold">
        <Text>{progress.closing}</Text>
      </p>

      <div className="mt-8 max-w-3xl rounded-lg border-2 border-ink/80 p-6 sm:p-8">
        <h3 className="text-lg font-semibold"><Text>{progress.notProven.title}</Text></h3>
        <p className="mt-2"><Text>{progress.notProven.text}</Text></p>
      </div>
    </Section>
  )
}
